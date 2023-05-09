<script setup>
import { ref, onBeforeUnmount } from 'vue'
import { useAuthStore } from '@/store/auth';
import GuestLayout from '@/layout/GuestLayout.vue';
import LoadingAlert from '@/components/LoadingAlert.vue';


const authStore = useAuthStore();

const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

onBeforeUnmount(() => {
  authStore.errors = [];
});

</script>

<template>
  <GuestLayout>
    <section class="container mt-5">
      <form @submit.prevent="authStore.handleRegister(form)" class="bg-light px-sm-5 px-2 py-4 border rounded mx-auto"
        style="max-width: 500px">
        <h3 class="text-center mb-3 fw-bold">Register</h3>

        <LoadingAlert :isLoading="authStore.isLoading" />
        <!-- Name -->
        <div class="mb-3">
          <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Name">
          <span v-if="authStore.errors.name" class="form-text text-danger">{{ authStore.errors.name[0] }}
          </span>
        </div>
        <!-- Email -->
        <div class="mb-3">
          <input type="email" v-model="form.email" class="form-control" id="email" placeholder="Email">
          <span v-if="authStore.errors.email" class="form-text text-danger">{{ authStore.errors.email[0] }}
          </span>
        </div>
        <!-- Password -->
        <div class="mb-3">
          <input type="password" v-model="form.password" class="form-control" id="password" placeholder="Password">
          <span v-if="authStore.errors.password" class="form-text text-danger">{{ authStore.errors.password[0] }}
          </span>
        </div>
        <!-- Password Confirmation-->
        <div class="mb-3">
          <input type="password" v-model="form.password_confirmation" class="form-control" id="password-confirmation"
            placeholder="Password Confirmation">
          <span v-if="authStore.errors.password_confirmation"
            class="form-text text-danger">{{ authStore.errors.password_confirmation[0] }}
          </span>
        </div>
        <div class="mb-4 text-center">
          <button type="submit" class="btn btn-primary px-5">Register</button>
        </div>
        <div class="text-center">
          <div id="emailHelp" class="form-text">
            Already registered? <router-link :to="{ name: 'Login' }" class="text-decoration-none">Sign In
            </router-link>
          </div>
        </div>
      </form>
    </section>
  </GuestLayout>
</template>