<script setup>
import { ref, onBeforeUnmount } from 'vue';
import { useAuthStore } from '@/store/auth';
import GuestLayout from '@/layout/GuestLayout.vue';
import LoadingAlert from '@/components/LoadingAlert.vue';

const authStore = useAuthStore();
const email = ref('');

onBeforeUnmount(() => {
  authStore.errors = []
});

</script>

<template>
  <GuestLayout>
    <section class="container mt-5">
      <form @submit.prevent="authStore.handleForgotPassword(email)"
        class="bg-light px-sm-5 px-2 py-4 border rounded mx-auto" style="max-width: 500px">
        <h3 class="text-center mb-4 fw-bold">Forgot Password</h3>

        <LoadingAlert :isLoading="authStore.isLoading" />

        <div v-if="authStore.status" class="alert alert-sm alert-primary alert-dismissible fade show" role="alert">
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          {{ authStore.status }}
        </div>


        <div class="mb-3">
          <label for="email" class="fw-bold">Enter email: </label>
          <input type="email" v-model="email" class="form-control" id="email" placeholder="Email">
          <span v-if="authStore.errors.email" class="form-text text-danger">{{ authStore.errors.email[0] }}
          </span>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary px-5">Reset Password</button>
        </div>
      </form>
    </section>
  </GuestLayout>
</template>