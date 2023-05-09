<script setup>
import { ref, onBeforeUnmount, watch, watchSyncEffect } from 'vue';
import { useAuthStore } from '@/store/auth';
import GuestLayout from '@/layout/GuestLayout.vue';
import LoadingAlert from '@/components/LoadingAlert.vue';

const authStore = useAuthStore();

const form = ref({
  email: '',
  password: '',
});

onBeforeUnmount(() => {
  authStore.errors = [];
});
</script>

<template>
  <GuestLayout>
    <section class="container mt-5">
      <form @submit.prevent="authStore.handleLogin(form)" class="bg-light px-sm-5 px-2 py-4 border rounded mx-auto"
        style="max-width: 500px">
        <h3 class="text-center mb-3 fw-bold">Login</h3>

        <LoadingAlert :isLoading="authStore.isLoading" />

        <div class="mb-3">
          <!-- email -->
          <input type="email" v-model="form.email" class="form-control" id="email" placeholder="Email">

          <span v-if="authStore.errors.email" class="form-text text-danger">{{ authStore.errors.email[0] }}
          </span>
        </div>
        <div class="mb-3">
          <!-- password -->
          <input type="password" v-model="form.password" class="form-control" id="password" placeholder="Password">
          <span v-if="authStore.errors.password" class="form-text text-danger">{{ authStore.errors.password[0] }}
          </span>
        </div>


        <div class="mb-4 text-center">
          <button type="submit" class="btn btn-primary px-5">Sign In</button>
        </div>
        <div class="text-center">
          <div class="form-text mb-3">
            <router-link :to="{ name: 'ForgotPassword' }" class="text-decoration-none">Forget Password?</router-link>
          </div>

          <div class="form-text">
            New user?
            <router-link :to="{ name: 'Register' }" class="text-decoration-none">Register here</router-link>
          </div>
        </div>
      </form>
    </section>
  </GuestLayout>
</template>