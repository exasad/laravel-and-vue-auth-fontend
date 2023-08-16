<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth';
const authStore = useAuthStore()
const form = ref({
    email: '',
})

</script>

<template>
    <div>
        <main class="auth-wrapper">
            <form class="auth-form" @submit.prevent="authStore.handleResetPassword(form)">
                <h2 class="h3 mb-4 fw-normal">Reset Your Password</h2>
                <div class="form-floating mb-2">
                    <input type="email" class="form-control" :class="authStore.error.email ? 'is-invalid' : ''" id="email"
                        placeholder="name@example.com" v-model="form.email" />
                    <label for="email">Email</label>
                    <div class="invalid-feedback" v-if="authStore.error.email">
                        {{ authStore.error.email[0] }}
                    </div>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <router-link :to="{ name: 'login' }">Back To Login</router-link>
            </form>
        </main>
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