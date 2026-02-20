<script setup lang="ts">
useSeoMeta({
    title: 'Spielplan - Berolina Extra FC',
    ogTitle: 'Spielplan & Ergebnisse | Berolina Extra FC',
    description: 'Verpasse kein Spiel! Hier findest du alle Termine und Ergebnisse von Berolina Extra FC.',
    ogDescription: 'Der aktuelle Spielplan von Berolina Extra FC. Jetzt Tickets sichern!',
    ogImage: 'https://berolina-extra.de/images/og-image.png',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogSiteName: 'Berolina Extra FC',
});

useHead({
    link: [{ rel: 'canonical', href: 'https://berolina-extra.de/spielplan' }]
});

const matches = [
    {
        date: 'Samstag, 24. Feb',
        time: '14:30',
        opponent: 'Spandau Warriors',
        location: 'Berolina Arena (Heim)',
        isHome: true,
        status: 'Upcoming'
    },
    {
        date: 'Sonntag, 04. März',
        time: '11:00',
        opponent: 'Kreuzberg Kickers',
        location: 'Sportpark Kreuzberg',
        isHome: false,
        status: 'Upcoming'
    },
    {
        date: 'Mittwoch, 12. März',
        time: '18:00',
        opponent: 'Wedding United',
        location: 'Berolina Arena (Heim)',
        isHome: true,
        status: 'Upcoming'
    },
    {
        date: 'Samstag, 21. März',
        time: '15:00',
        opponent: 'Charlottenburg FC',
        location: 'Olympiastadion Nebenplatz',
        isHome: false,
        status: 'Derby'
    }
];

const results = [
    { match: 'Berolina vs Mitte FC', score: '3 : 1', date: '10. Feb' },
    { match: 'Neukölln Raptors vs Berolina', score: '0 : 2', date: '03. Feb' }
];
</script>

<template>
    <div class="pb-20">
        <section class="bg-gray-900 py-16 text-white border-b-8 border-primary-500">
            <div class="container-custom">
                <h1 class="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
                    Nächste <span class="text-primary-500 underline decoration-4 underline-offset-8">Gefechte</span>
                </h1>
            </div>
        </section>

        <div class="container-custom py-16">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <!-- Main Schedule -->
                <div class="lg:col-span-2 space-y-6">
                    <div v-for="(match, index) in matches" :key="index"
                        class="bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 p-6 flex flex-wrap md:flex-nowrap items-center gap-8 group hover:border-primary-500 transition-colors">
                        <div class="text-center md:w-24">
                            <div class="text-xs font-bold uppercase text-primary-600 dark:text-primary-400">{{
                                match.date.split(',')[0] }}</div>
                            <div class="text-2xl font-black uppercase">{{ match.date.split(',')[1]?.trim() }}</div>
                            <div class="text-sm font-bold text-gray-500">{{ match.time }}</div>
                        </div>

                        <div class="flex-grow">
                            <div class="flex items-center gap-3 mb-1">
                                <span v-if="match.isHome"
                                    class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-black uppercase tracking-widest">Heimspiel</span>
                                <span v-else
                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-[10px] font-black uppercase tracking-widest">Auswärts</span>
                                <span v-if="match.status === 'Derby'"
                                    class="px-2 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest animate-pulse">Derby
                                    Day</span>
                            </div>
                            <h3
                                class="text-3xl font-black uppercase italic group-hover:text-primary-600 transition-colors">
                                vs {{ match.opponent }}</h3>
                            <p class="text-gray-500 font-medium">{{ match.location }}</p>
                        </div>

                        <UButton color="primary" variant="solid"
                            class="rounded-none py-3 px-6 font-bold uppercase tracking-tighter">Tickets</UButton>
                    </div>
                </div>

                <!-- Sidebar / Results -->
                <div class="space-y-12">
                    <div>
                        <h2
                            class="text-2xl font-black uppercase italic mb-6 border-b-2 border-gray-900 dark:border-white pb-2">
                            Last Results</h2>
                        <div class="space-y-4">
                            <div v-for="(res, i) in results" :key="i"
                                class="bg-gray-50 dark:bg-gray-900 p-4 border-l-4 border-primary-500">
                                <div class="flex justify-between items-center mb-1">
                                    <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">{{ res.date
                                    }}</span>
                                    <span class="text-sm font-black italic uppercase text-primary-500">Win</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm font-bold uppercase">{{ res.match }}</span>
                                    <span class="text-lg font-black italic">{{ res.score }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-primary-500 p-8 text-white skew-x-[-4deg]">
                        <div class="skew-x-[4deg]">
                            <h3 class="text-2xl font-black uppercase italic mb-4">Abo sichern!</h3>
                            <p class="text-sm mb-6 leading-relaxed opacity-90">Verpasse kein Spiel. Hol dir die
                                Dauerkarte für die restliche Saison zum Special-Price.</p>
                            <UButton color="neutral" variant="solid" block
                                class="text-primary-600 font-black uppercase italic py-3">Shop Now</UButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
