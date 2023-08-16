<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth';
const authStore = useAuthStore()
const form = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
})

</script>


<template>
    <main class="auth-wrapper">
        <form class="auth-form" @submit.prevent="authStore.handleRegister(form)">
            <h1>
                <span>ToeDoe</span>
                <strong>List</strong>
            </h1>
            <h2 class="h3 mb-4 fw-normal">Please sign up</h2>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" :class="authStore.error.name ? 'is-invalid' : ''" id="name"
                    placeholder="Enter Your name" v-model="form.name" />
                <label for="name">Name</label>
                <div class="invalid-feedback" v-if="authStore.error.name">
                    {{ authStore.error.name[0] }}
                </div>
            </div>
            <div class="form-floating mb-2">
                <input type="email" class="form-control" :class="authStore.error.email ? 'is-invalid' : ''" id="email"
                    placeholder="name@example.com" v-model="form.email" />
                <label for="email">Email</label>
                <div class="invalid-feedback" v-if="authStore.error.email">
                    {{ authStore.error.email[0] }}
                </div>
            </div>
            <div class="form-floating mb-2">
                <input type="password" class="form-control" :class="authStore.error.password ? 'is-invalid' : ''"
                    id="password" placeholder="Password" v-model="form.password" />
                <label for="password">Password</label>
                <div class="invalid-feedback" v-if="authStore.error.password">
                    {{ authStore.error.password[0] }}
                </div>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control"
                    :class="authStore.error.password_confirmation ? 'is-invalid' : ''" id="password_confirmation"
                    placeholder="Password Confirmation" v-model="form.password_confirmation" />
                <label for="password_confirmation">Password Confirmation</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
        </form>
    </main>
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