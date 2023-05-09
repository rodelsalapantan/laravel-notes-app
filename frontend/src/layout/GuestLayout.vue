<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5 shadow">
        <router-link :to="{ name: 'Welcome'}" class="navbar-brand">Notes App</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <router-link :to="{ name: 'Login' }" class="nav-link btn btn-outline-light" :class="{ active: $route.name === 'Login' }">Login
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'Register' }" class="nav-link btn btn-outline-light"  :class="{ active: $route.name === 'Register' }">Register
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
    <main>
        <slot></slot>
    </main>
</template>
