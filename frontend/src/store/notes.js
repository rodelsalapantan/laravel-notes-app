import { defineStore } from "pinia";
import axios from "axios";


export const useNoteStore = defineStore('notes', {
    state: () => ({
        notes: [],
        note: {},
        errors: null,
        loading: false,
        status: '',
    }),
    actions: {
        async getToken() {
            try {
                await axios.get('/sanctum/csrf-cookie')
            } catch (error) {
                console.log(`Error occured: ${error.response}`)
            }
        },
        async getNotes(page = null) {
            this.loading = true
            await this.getToken();

            try {
                const pageParam = page !== null ? `?page=${page}` : '';
                const response = await axios.get(`/notes${pageParam}`)
                this.notes = await response.data
            } catch (error) {
                console.log(error)
            }
            this.loading = false
        },
        async getNote(id){
            await this.getToken();

            try {
                const response = await axios.get(`/notes/${id}/`)
                this.note = await response.data
            } catch (error) {
                console.log(error)
            }
        },
        async addNote(payload){
            this.loading = true
            this.errors = []
            await this.getToken();
            try {
                await axios.post('/notes', {
                    title: payload.title,
                    body: payload.body,
                })
                this.status = 'Note created.'
                this.router.push({name: 'Home'})
            } catch (error) {
                if (error.response?.status === 422) {
                    this.errors = error.response.data.errors
                }
            }
            this.loading = false
        },
        async editNote(payload){
            this.loading = true
            this.errors = []
            await this.getToken();
            try {
                await axios.put('/notes/' + payload.id, {
                    title: payload.title,
                    body: payload.body,
                })
                this.status = 'Note updated.'
                this.router.push({name: 'Home'})
            } catch (error) {
                if (error.response?.status === 422) {
                    this.errors = error.response.data.errors
                }
            }
            this.loading = false
        },
        async deleteNote(id){
            this.loading = true
            this.errors = []
            this.status = ''
            await this.getToken();
            try {
                await axios.delete('/notes/' + id)
                this.status = 'Note deleted.'
                this.router.push({name: 'Home'})
            } catch (error) {
                if (error.response?.status === 422) {
                    this.errors = error.response.data.errors
                }
                
            }
            this.loading = false
        }
    }
        

    
})
