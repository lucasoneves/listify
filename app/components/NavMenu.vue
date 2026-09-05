<template>
  <div class="max-w-10/12 mx-auto p-4 flex items-center justify-between">
    <h3 class="text-3xl font-bold underline">Listify</h3>
    <nav>
      <ul class="flex gap-10">
        <router-link to="/">Home</router-link>
        <router-link to="/lists">Listas</router-link>
        <router-link to="/stats">Estatísticas</router-link>
        <router-link to="/settings">Configurações</router-link>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
