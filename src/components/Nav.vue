<script setup>
import { useAuthStore } from '../store/auth';
const authStore = useAuthStore();
</script>
<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div class="container py-2">
                <router-link :to="{ name: 'Home' }" class="navbar-brand">
                    <strong>Home</strong>
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="my-tasks.html" class="nav-link">Tasks</a>
                        </li>
                        <li class="nav-item">
                            <a href="summaries.html" class="nav-link">Summary</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        <template v-if="!authStore.user">
                            <li class="nav-item">
                                <router-link :to="{ name: 'login' }"
                                    class="btn btn-outline-secondary ms-2">Login</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name: 'register' }" class="btn btn-danger ms-2">Register</router-link>
                            </li>
                        </template>
                        <template v-else>
                            <li class="nav-item">
                                <button @click="authStore.handleLogout"
                                    class="btn btn-outline-secondary ms-2">Logout</button>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

