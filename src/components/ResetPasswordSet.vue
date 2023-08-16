<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth';
import { useRoute } from 'vue-router';
const route = useRoute()
const authStore = useAuthStore()
const form = ref({
    password: '',
    password_confirmation: '',
    token: route.params.token,
    email: route.query.email
})

</script>

<template>
    <div>
        <div>
            <main class="auth-wrapper">
                <form class="auth-form" @submit.prevent="authStore.handleResetPasswordConfirm(form)">
                    <h2 class="h3 mb-4 fw-normal">New Password Set</h2>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" :class="authStore.error.password ? 'is-invalid' : ''"
                            id="password" placeholder="Password" v-model="form.password" />
                        <label for="password">Password</label>
                        <div class="invalid-feedback" v-if="authStore.error.email">
                            {{ authStore.error.password[0] }}
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control"
                            :class="authStore.error.password_confirmation ? 'is-invalid' : ''" id="password_confirmation"
                            placeholder="password_confirmation" v-model="form.password_confirmation" />
                        <label for="password">Confirm Password</label>
                        <div class="invalid-feedback" v-if="authStore.error.password_confirmation">
                            {{ authStore.error.password_confirmation[0] }}
                        </div>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Reset Password</button>
                    <router-link :to="{ name: 'login' }">Login</router-link>
                </form>
            </main>
        </div>
    </div>
</template>

<style scoped>
.auth-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 60vh;
    margin-top: 2rem;
}

.auth-form {
    width: 400px;
}
</style>