<template>
    <div v-if="isLoading" class="alert alert-primary text-center" role="alert">
          <div class="d-flex justify-content-center align-items-center">
            <div class="spinner-border text-primary spinner-border-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
</template>
<script setup>
defineProps(['isLoading'])

</script>