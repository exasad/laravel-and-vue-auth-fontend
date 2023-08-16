<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '../store/auth'
const authStore = useAuthStore()

onMounted(async () => {
    authStore.getUser()
});
</script>

<template>
    <div>
        <main class="px-4 py-5 my-5 text-center" style="min-height: 50vh;">
            <h1 class="display-5 fw-bold mt-4">Stay Organized, be productive</h1>
            <div v-if="authStore.user">
                <p>{{ authStore.user.name }}</p>
                <p>{{ authStore.user.email }}</p>
            </div>
            <div v-else>
                <p>Not logged in</p>
            </div>
        </main>
    </div>
</template>
