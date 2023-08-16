import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth",{
    state: () => ({
        authUser: null,
        authError: [],
    }),
    getters: {
        user: (state) => state.authUser,
        error: (state) => state.authError,
        checkAdmin:(state) => state.checkAdmin
    },
    actions: {
        async getToken() {
           await axios.get('/sanctum/csrf-cookie');
        },
        async getUser() {
            this.getToken();
            const data = await axios.get('/api/user');
            this.authUser = data.data;
        },
        async handleLogin(data) {
            this.authError = [],
            await this.getToken();
            try {
                await axios.post('/login', {
                email: data.email,
                password: data.password
                });
            this.router.push("/")
            } catch (error) {
                if (error.response.status === 422) {
                    this.authError = error.response.data.errors;
                }
            }
           
        },
        async handleRegister(data) {
            this.authError = [],
            await this.getToken();
            try {
                await axios.post('/register', {
                email: data.email,
                name: data.name,
                password: data.password,
                password_confirmation: data.password_confirmation
            });
                this.router.push("/")
            } catch (error) {
                this.authError = error.response.data.errors;
            }
        },
        async handleResetPassword(data) {
            this.authError = [],
            await this.getToken();
            try {
                await axios.post('/forgot-password', {
                email: data.email,
            });
                this.router.push("/")
            } catch (error) {
                this.authError = error.response.data.errors;
            }
        },
        async handleResetPasswordConfirm(data) {
            this.authError = [],
                await this.getToken();
            try {
                await axios.post('/reset-password', {
                    token: data.token,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation
                });
                this.router.push("/")
            } catch (error) {
                this.authError = error.response.data.errors;
            }
        },
        async handleLogout() {
            await axios.post("/logout")
            this.authUser = null;
            this.router.push("/login")
        }
    },
})