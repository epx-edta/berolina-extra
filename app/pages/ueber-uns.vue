<script setup lang="ts">
useHead({
  title: 'Über Uns - Berolina Extra FC',
  meta: [
    { name: 'description', content: 'Die Geschichte und Vision von Berolina Extra FC.' }
  ]
});
</script>

<template>
  <div class="pb-20">
    <section class="h-[60vh] relative flex items-center overflow-hidden">
      <img src="/images/hero.png" alt="Berlin Soccer"
        class="absolute inset-0 w-full h-full object-cover grayscale brightness-50" />
      <div class="container-custom relative z-10">
        <h1 class="text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-white drop-shadow-2xl">
          Echte <br /> <span class="text-primary-500">Berliner</span>
        </h1>
      </div>
    </section>

    <div class="container-custom py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 class="text-4xl font-black uppercase italic tracking-tighter mb-8 border-l-8 border-primary-500 pl-6">
            Unsere Story</h2>
          <div class="prose prose-lg dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-400">
            <p class="text-xl font-bold text-gray-900 dark:text-white italic">
              Vom Asphalt auf den Rasen – Berolina Extra FC ist mehr als nur ein Fußballverein. Es ist ein Lebensgefühl.
            </p>
            <p>
              Gegründet im Herzen von Berlin-Mitte, haben wir es uns zur Aufgabe gemacht, den Jugendfußball zu
              revolutionieren. Bei uns geht es nicht nur um Taktik, sondern um Charakter, Style und Zusammenhalt.
            </p>
            <p>
              Wir glauben an die Kraft des Kiezes. Unsere Spieler kommen aus allen Ecken Berlins und bringen ihre eigene
              Energie auf den Platz. Gemeinsam sind wir unschlagbar.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div
            class="bg-gray-100 dark:bg-gray-800 p-8 flex flex-col justify-between hover:bg-primary-500 hover:text-white transition-all group">
            <UIcon name="i-heroicons-heart" class="w-10 h-10 mb-6 text-primary-500 group-hover:text-white" />
            <div>
              <h3 class="font-black uppercase italic text-xl">Leidenschaft</h3>
              <p class="text-xs uppercase tracking-widest mt-2 opacity-60">Every minute counts</p>
            </div>
          </div>
          <div
            class="bg-gray-100 dark:bg-gray-800 p-8 flex flex-col justify-between hover:bg-primary-500 hover:text-white transition-all group">
            <UIcon name="i-heroicons-users" class="w-10 h-10 mb-6 text-primary-500 group-hover:text-white" />
            <div>
              <h3 class="font-black uppercase italic text-xl">Community</h3>
              <p class="text-xs uppercase tracking-widest mt-2 opacity-60">Better together</p>
            </div>
          </div>
          <div
            class="bg-gray-100 dark:bg-gray-800 p-8 flex flex-col justify-between hover:bg-primary-500 hover:text-white transition-all group">
            <UIcon name="i-heroicons-fire" class="w-10 h-10 mb-6 text-primary-500 group-hover:text-white" />
            <div>
              <h3 class="font-black uppercase italic text-xl">Dynamik</h3>
              <p class="text-xs uppercase tracking-widest mt-2 opacity-60">Never stop</p>
            </div>
          </div>
          <div
            class="bg-gray-100 dark:bg-gray-800 p-8 flex flex-col justify-between hover:bg-primary-500 hover:text-white transition-all group">
            <UIcon name="i-heroicons-flag" class="w-10 h-10 mb-6 text-primary-500 group-hover:text-white" />
            <div>
              <h3 class="font-black uppercase italic text-xl">Stolz</h3>
              <p class="text-xs uppercase tracking-widest mt-2 opacity-60">Berlin Representative</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact CTA -->
    <section class="container-custom">
      <div class="bg-primary-600 p-12 text-center text-white skew-y-[-2deg]">
        <div class="skew-y-[2deg]">
          <h2 class="text-4xl font-black uppercase italic tracking-tighter mb-4">Werde Teil der Legende</h2>
          <p class="text-xl mb-8 opacity-90 italic">Wir suchen immer Verstärkung – auf und neben dem Platz.</p>
          <UButton color="neutral" variant="solid" size="xl"
            class="font-black uppercase italic px-12 py-4 text-primary-600 rounded-none shadow-xl">Kontaktiere uns
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>
