<template>
  <GuestLayout>
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src="../assets/img/main-logo.png" class="d-block mx-lg-auto img-fluid" alt="NotesApp" width="700"
            height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">Catch your ideas, keep them close, with NotesApp  </h1>
          <p class="lead">NotesApp is a simple yet powerful note-taking application that helps you organize your thoughts,
            ideas, and to-do lists. With its intuitive interface and customizable features, NotesApp makes it easy to
            capture and access your notes from anywhere, at any time..</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <router-link :to="{ name: 'Login' }" class="btn btn-primary btn-lg px-4 me-md-2">Login</router-link>
            <router-link :to="{ name: 'Register' }" class="btn btn-outline-secondary btn-lg px-4">Register</router-link>
          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>

<script setup>
import GuestLayout from '@/layout/GuestLayout.vue';
</script>

