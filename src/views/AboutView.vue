<script setup>
import { useAppStore } from '@/stores/app'
import { Info, RotateCcw } from 'lucide-vue-next'

const store = useAppStore()
</script>

<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
    <div class="flex items-center gap-3">
      <div class="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
        <Info class="w-6 h-6" />
      </div>
      <div>
        <h2 class="text-lg font-bold text-slate-900">About TestApp</h2>
        <p class="text-xs text-slate-500">SPA Route Transition Demo</p>
      </div>
    </div>

    <p class="text-sm text-slate-600 leading-relaxed">
      This view was loaded dynamically using <code class="px-1.5 py-0.5 rounded bg-slate-100 text-xs font-mono text-indigo-700">vue-router</code>. 
      Notice that state is preserved globally across views via Pinia.
    </p>

    <div class="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
      <div>
        <span class="text-xs font-medium text-slate-500">Count from Home view:</span>
        <span class="text-base font-bold text-indigo-600 ml-2">{{ store.counter }}</span>
      </div>
      <button
        type="button"
        @click="store.reset"
        class="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 active:scale-95 border border-slate-200 rounded-lg transition cursor-pointer"
      >
        <RotateCcw class="w-3.5 h-3.5" />
        Reset
      </button>
    </div>
  </div>
</template>
