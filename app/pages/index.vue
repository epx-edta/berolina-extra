<script setup lang="ts">
useSeoMeta({
  title: 'Berolina Extra FC - Dein Verein in Berlin',
  ogTitle: 'Berolina Extra FC - Home',
  description: 'Der coolste Jugendfußballverein in Berlin Mitte. Dynamisch, athletisch, unaufhaltsam.',
  ogDescription: 'Erlebe Dynamik und Leidenschaft bei Berolina Extra FC.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
});

useHead({
  link: [{ rel: 'canonical', href: 'https://berolina-extra.de/' }]
});

const highlights = [
  { title: 'Youth Cup 2026', date: 'März 2026', description: 'Wir verteidigen unseren Titel beim Berliner Youth Cup.' },
  { title: 'Neue Trikots', date: 'Feb 2026', description: 'Unsere neuen neon-blauen Kits sind da. Style trifft Performance.' },
  { title: 'Probetraining', date: 'Jeden Dienstag', description: 'Komm vorbei und zeig was du kannst. Wir suchen immer Talente.' }
];
</script>

<template>
  <div class="flex flex-col gap-16 pb-20">
    <!-- Hero Section -->
    <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <img src="/images/hero.png" alt="Berolina Soccer Action"
        class="absolute inset-0 w-full h-full object-cover grayscale-[20%] brightness-[60%]" />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

      <div class="relative z-10 text-center px-4 max-w-4xl">
        <h1 class="text-6xl md:text-8xl font-black italic tracking-tighter text-white uppercase drop-shadow-2xl mb-4">
          Berolina <span class="text-primary-400">Extra</span> FC
        </h1>
        <p class="text-xl md:text-2xl text-gray-200 font-medium mb-8 uppercase tracking-widest">
          Berlin Mitte | Dynamik | Stolz
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <UButton size="xl" color="primary" variant="solid" to="/mannschaft"
            class="px-8 py-4 text-lg font-bold uppercase rounded-none skew-x-[-12deg]">
            <span class="inline-block skew-x-[12deg]">Das Team</span>
          </UButton>
          <UButton size="xl" color="neutral" variant="outline" to="/spielplan"
            class="px-8 py-4 text-lg font-bold uppercase rounded-none skew-x-[-12deg]">
            <span class="inline-block skew-x-[12deg]">Spielplan</span>
          </UButton>
        </div>
      </div>
    </section>

    <!-- Highlights Grid -->
    <section class="container-custom">
      <div class="flex items-end justify-between mb-10 border-l-8 border-primary-500 pl-6">
        <div>
          <h2 class="text-4xl font-black uppercase italic tracking-tighter">Aktuelles</h2>
          <p class="text-gray-500 uppercase tracking-widest font-bold">What's happening in the hood</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <UCard v-for="(item, index) in highlights" :key="index"
          class="group hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all duration-300 border-2 border-transparent hover:border-primary-500 cursor-pointer overflow-hidden rounded-none">
          <template #header>
            <div class="flex justify-between items-start">
              <span class="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">{{
                item.date }}</span>
              <UIcon name="i-heroicons-bolt" class="w-5 h-5 text-gray-400 group-hover:text-primary-500" />
            </div>
            <h3 class="text-2xl font-black uppercase italic mt-2">{{ item.title }}</h3>
          </template>
          <p class="text-gray-600 dark:text-gray-400">{{ item.description }}</p>
        </UCard>
      </div>
    </section>

    <!-- Stats Callout -->
    <section class="bg-gray-900 py-20 overflow-hidden relative">
      <div class="absolute top-0 right-0 w-1/2 h-full bg-primary-500/10 skew-x-[-20deg] translate-x-1/2"></div>
      <div class="container-custom relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-5xl font-black text-white italic uppercase tracking-tighter mb-6">
              Wir dominieren <br /> den Platz.
            </h2>
            <p class="text-gray-400 text-lg mb-8 leading-relaxed max-w-md">
              Statistiken lügen nicht. Mit einer Siegesquote von 85% sind wir der Verein, den man in Berlin Mitte
              schlagen
              muss.
            </p>
            <UButton to="/statistik" color="primary" variant="link"
              class="p-0 text-xl font-bold uppercase italic group">
              Statistiken ansehen
              <UIcon name="i-heroicons-arrow-right" class="ml-2 group-hover:translate-x-2 transition-transform" />
            </UButton>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white/5 p-8 border-l-4 border-primary-500">
              <div class="text-4xl font-black text-white mb-2">156</div>
              <div class="text-xs uppercase tracking-widest text-gray-500 font-bold">Tore Diese Saison</div>
            </div>
            <div class="bg-white/5 p-8 border-l-4 border-primary-500">
              <div class="text-4xl font-black text-white mb-2">12</div>
              <div class="text-xs uppercase tracking-widest text-gray-500 font-bold">Clean Sheets</div>
            </div>
            <div class="bg-white/5 p-8 border-l-4 border-primary-500">
              <div class="text-4xl font-black text-white mb-2">#1</div>
              <div class="text-xs uppercase tracking-widest text-gray-500 font-bold">Tabellenführer</div>
            </div>
            <div class="bg-white/5 p-8 border-l-4 border-primary-500">
              <div class="text-4xl font-black text-white mb-2">2.4k</div>
              <div class="text-xs uppercase tracking-widest text-gray-500 font-bold">Follower</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
