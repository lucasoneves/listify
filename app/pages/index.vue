<template>
  <PageWrapper>
    <h3>HomePage</h3>
  </PageWrapper>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
})
</script>

<style>

</style>