import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import ResetPassword from '../components/ResetPassword.vue'
import ResetPasswordSet from "../components/ResetPasswordSet.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: "/reset-password",
        name: "reset-password",
        component: ResetPassword
    },
    {
        path: "/password-reset/:token",
        name: "password-reset",
        component: ResetPasswordSet
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;