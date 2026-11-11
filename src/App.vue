<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Home, Info } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-dvh flex flex-col bg-slate-100 text-slate-900">
    <!-- Top Navigation Header -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-30">
      <div class="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
            TA
          </div>
          <span class="font-bold text-base tracking-tight text-slate-900">TestApp</span>
        </div>

        <nav class="flex items-center gap-1">
          <RouterLink
            to="/"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition"
            active-class="!text-indigo-600 !bg-indigo-50 font-semibold"
          >
            <Home class="w-4 h-4" />
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition"
            active-class="!text-indigo-600 !bg-indigo-50 font-semibold"
          >
            <Info class="w-4 h-4" />
            About
          </RouterLink>
        </nav>
      </div>
    </header>

    <!-- Main Dynamic Route View -->
    <main class="flex-1 max-w-md w-full mx-auto p-4 pb-8">
      <RouterView />
    </main>
  </div>
</template>

