<script setup>
import { useAppStore } from '@/stores/app'
import { useOnline } from '@vueuse/core'
import { 
  Sparkles, 
  Smartphone, 
  Database, 
  Wifi, 
  WifiOff, 
  Plus 
} from 'lucide-vue-next'

const store = useAppStore()
const isOnline = useOnline()
</script>

<template>
  <div class="space-y-6">
    <!-- Hero / Status Card -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      <div class="flex items-center justify-between mb-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
          :class="isOnline ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'">
          <component :is="isOnline ? Wifi : WifiOff" class="w-3.5 h-3.5" />
          <span>{{ isOnline ? 'Device Online' : 'Device Offline' }}</span>
        </div>
        <span class="text-xs text-slate-400 font-mono">v1.0.0</span>
      </div>

      <h2 class="text-xl font-bold text-slate-900 tracking-tight">Vue 3 + Capacitor + PWA</h2>
      <p class="text-slate-500 text-sm mt-1">Single page architecture with Tailwind CSS v4, Pinia, and Supabase client.</p>

      <!-- Pinia Counter Interactive Demo -->
      <div class="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
        <div>
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pinia Shared State</p>
          <p class="text-2xl font-black text-slate-900 mt-0.5">{{ store.counter }}</p>
        </div>
        <button
          type="button"
          @click="store.increment"
          class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-xl transition duration-150 shadow-sm cursor-pointer"
        >
          <Plus class="w-4 h-4" />
          Increment
        </button>
      </div>
    </div>

    <!-- Feature Stack Pills -->
    <div class="grid grid-cols-2 gap-3">
      <div class="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
        <div class="p-2 rounded-lg bg-indigo-50 text-indigo-600">
          <Sparkles class="w-5 h-5" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-800">Lucide Icons</h3>
          <p class="text-xs text-slate-500 mt-0.5">Crisp, tree-shakable SVG line icons</p>
        </div>
      </div>

      <div class="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-xs">
        <div class="p-2 rounded-lg bg-sky-50 text-sky-600">
          <Smartphone class="w-5 h-5" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-800">Capacitor</h3>
          <p class="text-xs text-slate-500 mt-0.5">Ready for Android native sync</p>
        </div>
      </div>
    </div>
  </div>
</template>
