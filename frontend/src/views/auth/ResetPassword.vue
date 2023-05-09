<script setup>
import { ref, onBeforeUnmount } from 'vue';
import { useAuthStore } from '@/store/auth';
import { useRoute } from 'vue-router';
import GuestLayout from '@/layout/GuestLayout.vue';
import LoadingAlert from '@/components/LoadingAlert.vue';

const route = useRoute();
const authStore = useAuthStore();

const form = ref({
  password: '',
  password_confirmation: '',
  email: route.query.email,
  token: route.params.token,
});

onBeforeUnmount(() => {
  authStore.errors = [];
});

</script>

<template>
  <GuestLayout>
    <section class="container mt-5">
      <form @submit.prevent="authStore.handleResetPassword(form)"
        class="bg-light px-sm-5 px-2 py-4 border rounded mx-auto" style="max-width: 500px">
        <h3 class="text-center mb-4 fw-bold">Reset Password</h3>

        <LoadingAlert :isLoading="authStore.isLoading" />

        <div v-if="authStore.status" class="alert alert-sm alert-primary alert-dismissible fade show" role="alert">
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          {{ authStore.status }}
        </div>

        <div class="mb-3">
          <label for="password" class="fw-bold">New Password: </label>
          <!-- password -->
          <input type="password" v-model="form.password" class="form-control" id="password">
          <span v-if="authStore.errors.password" class="form-text text-danger">{{ authStore.errors.password[0] }}
          </span>
        </div>
        <div class="mb-3">
          <label for="email" class="fw-bold">Confirm Password: </label>
          <!-- password confirmation -->
          <input type="password" v-model="form.password_confirmation" class="form-control" id="password_confirmation">
          <span v-if="authStore.errors.password_confirmation"
            class="form-text text-danger">{{ authStore.errors.password_confirmation[0] }}
          </span>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary px-5">Reset Password</button>
        </div>
      </form>
    </section>
  </GuestLayout>
</template>