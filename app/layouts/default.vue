<template>
  <div class="min-h-screen flex flex-col pb-16 md:pb-0">
    <NavMenu />
    <main class="flex-1">
      <slot />
    </main>
    <NavFooter />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>