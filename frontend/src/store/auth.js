import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        errors: [],
        status: null,
        isLoading: false,
    }),
    actions: {
        // get token 
        async getToken() {
            try {
                await axios.get('/sanctum/csrf-cookie')
            } catch (error) {
                console.log(`Error occured: ${error.response}`)
            }
        },
        // get user objectz
        async getUser() {
            await this.getToken();
            try {
                const response = await axios.get('/user')
                this.user = await response.data;

            } catch (error) {
                if (error.response && error.response.status === 401) {
                    this.user = null;
                } else {
                    console.error(error);
                }
            }

        },
        // login 
        async handleLogin(data) {

            this.errors = []
            this.isLoading = true;

            await this.getToken();
            try {
                await axios.post('/login', {
                    email: data.email,
                    password: data.password,
                });
                //save user 
                await this.getUser();

                const redirect = this.router.currentRoute.value.query.redirect || '';

                this.router.push(redirect || { name: 'Home' });
            } catch (error) {
                if (error.response?.status === 422) {
                    this.errors = error.response.data.errors
                }
            } finally {
                this.isLoading = false;
            }
        },
        // register
        async handleRegister(data) {
            this.errors = []

            this.isLoading = true;
            await this.getToken();
            try {
                await axios.post('/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                });

                //save user 
                await this.getUser();

                this.router.push({ name: 'Home' });
            } catch (error) {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors
                }
            } finally {
                this.isLoading = false;
            }
        },
        // logout
        async handleLogout() {
            await axios.post('/logout');
            this.user = null;
            this.router.push({ name: 'Login' });
        },
        // forgot password
        async handleForgotPassword(email) {
            this.errors = []
            this.isLoading = true;

            await this.getToken();

            try {
                const response = await axios.post('/forgot-password', {
                    email: email
                });
                this.status = response.data.status;
            } catch (error) {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors
                }
            } finally {
                this.isLoading = false;
            }

        },
        // reset password
        async handleResetPassword(resetData) {
            this.errors = []
            this.isLoading = true;

            await this.getToken();

            try {
                const response = await axios.post('/reset-password', resetData);
                this.status = response.data.status;
            } catch (error) {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            } finally {
                this.isLoading = false;
            }
        }
    },
});