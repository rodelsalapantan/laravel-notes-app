<template>
    <AuthLayout>
        <div class="d-flex justify-content-center align-items-center mt-5">
            <h2 class="fw-bolder">Edit Note</h2>
        </div>

        <form @submit.prevent="noteStore.editNote(noteForm)" v-if="!isLoading">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input v-model="noteForm.title" type="text" id="title" class="form-control" placeholder="Enter Title"
                    aria-describedby="helpId">
                <small v-if="noteStore.errors?.title" class="text-danger">{{ noteStore.errors?.title[0] }}</small>
            </div>
            <div class="mb-3">
                <textarea v-model="noteForm.body" class="form-control" rows="10"
                    placeholder="Write something..."></textarea>
                <small v-if="noteStore.errors?.body" class="text-danger">{{ noteStore.errors?.body[0] }}</small>
            </div>
            <button class="btn btn-primary" type="submit">Update</button>
            <button class="btn btn-danger ms-2" @click.prevent="noteStore.deleteNote(noteForm.id)">Delete</button>
        </form>
        <div v-else class="text-center">
            <div class="spinner-border text-primary spinner-border-lg mt-5" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </AuthLayout>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import { useNoteStore } from '@/store/notes'
import { useRouter } from 'vue-router'

import AuthLayout from '@/layout/AuthLayout.vue'

const noteStore = useNoteStore()
const route = useRouter()
const isLoading = ref(false);

const noteForm = ref({
    title: '',
    body: '',
    id: ''
})

onMounted(async () => {
    isLoading.value = true;
    const idParam = route.currentRoute.value.params.id ?? null;

    if (!idParam) {
        route.push({ name: 'Home' })
    }
    await noteStore.getNote(idParam);
    
    noteForm.value.title = noteStore.note.data.title;
    noteForm.value.body = noteStore.note.data.body;
    noteForm.value.id = noteStore.note.data.id;
    isLoading.value = false
})

</script>
