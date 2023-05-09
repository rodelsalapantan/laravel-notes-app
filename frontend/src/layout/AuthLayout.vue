<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5 shadow">
        <router-link :to="{ name: 'Home' }" class="navbar-brand">
            <img src="../assets/img/main-logo.png" width="30" height="30" loading="lazy"> Notes App
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <button @click="authStore.handleLogout" class="nav-link text-danger btn btn-outline-light w-100"><i
                            class="bi bi-box-arrow-left"></i> Logout
                    </button>
                </li>
            </ul>
        </div>
    </nav>
    <main class="container">
        <slot></slot>
    </main>
</template>

<script setup>
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
</script>
