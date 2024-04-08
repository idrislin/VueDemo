<script setup lang="ts">
import { RouterView } from 'vue-router'
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
</script>

<template>
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  <DndProvider :backend="HTML5Backend">
    <RouterView />
  </DndProvider>
</template>
