<template>
  <div class="w-full md:max-w-10/12 mx-auto p-4 hidden md:flex items-center justify-between">
    <h3 class="text-3xl font-bold">Listify</h3>
    <nav>
      <ul class="flex gap-10">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/minhas-listas">Minhas Listas</NuxtLink>
        <NuxtLink to="/lists">Listas</NuxtLink>
        <NuxtLink to="/settings">Configurações</NuxtLink>
      </ul>
    </nav>
  </div>

  <nav class="fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 md:hidden pb-[env(safe-area-inset-bottom)]">
    <ul class="flex">
      <li v-for="item in items" :key="item.to" class="flex-1">
        <NuxtLink
          :to="item.to"
          :class="[
            'flex flex-col items-center gap-0.5 py-2 text-[11px]',
            isActive(item.to) ? 'text-green-700' : 'text-gray-500',
          ]"
        >
          <Icon :name="item.icon" :size="26" />
          <span>{{ item.label }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const route = useRoute()

const items = [
  { label: "Home", icon: "heroicons:home", to: "/" },
  { label: "Minhas Listas", icon: "heroicons:bookmark", to: "/minhas-listas" },
  { label: "Listas", icon: "heroicons:list-bullet", to: "/lists" },
  { label: "Configurações", icon: "heroicons:cog-6-tooth", to: "/settings" },
]

function isActive(to: string) {
  return to === "/" ? route.path === "/" : route.path.startsWith(to)
}
</script>