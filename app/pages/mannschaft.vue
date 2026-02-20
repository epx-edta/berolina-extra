<script setup lang="ts">
useSeoMeta({
    title: 'Die Mannschaft - Berolina Extra FC',
    ogTitle: 'Die Mannschaft | Berolina Extra FC',
    description: 'Lerne die Spieler und das Team hinter Berolina Extra FC kennen. Unsere Stars von morgen.',
    ogDescription: 'Ein Team. Ein Kiez. Ein Ziel. Trete unserer Mannschaft bei.',
    ogImage: 'https://berolina-extra.de/images/team.png',
    ogImageWidth: 1200,
    ogImageHeight: 800,
    ogSiteName: 'Berolina Extra FC',
});

useHead({
    link: [{ rel: 'canonical', href: 'https://berolina-extra.de/mannschaft' }]
});

const players = [
    { name: 'Leon "Flash" Schmidt', position: 'Sturm', number: 10, quote: 'Tore sind meine Sprache.' },
    { name: 'Amira Al-Fayed', position: 'Mittelfeld', number: 8, quote: 'Der Ball gehört mir.' },
    { name: 'Jonas "The Wall" Berger', position: 'Abwehr', number: 4, quote: 'Niemand kommt vorbei.' },
    { name: 'Sofia Costa', position: 'Torwart', number: 1, quote: 'Endstation bei mir.' },
    { name: 'Malik Traoré', position: 'Flügel', number: 7, quote: 'Zu schnell für dich.' },
    { name: 'Lia Weber', position: 'Mittelfeld', number: 6, quote: 'Taktik ist alles.' }
];

const coaches = [
    { name: 'Coach Kalle', role: 'Head Coach', focus: 'Taktik & Mentalität' },
    { name: 'Sarah Miller', role: 'Co-Trainerin', focus: 'Technik & Speed' }
];
</script>

<template>
    <div class="pb-20">
        <!-- Header -->
        <section class="bg-primary-600 py-20 text-white overflow-hidden relative">
            <div class="absolute inset-0 opacity-20">
                <div class="grid grid-cols-6 h-full w-full">
                    <div v-for="i in 12" :key="i" class="border border-white/20 skew-x-[-12deg]"></div>
                </div>
            </div>
            <div class="container-custom relative z-10">
                <h1 class="text-6xl md:text-8xl font-black italic uppercase tracking-tighter">
                    Die <br /> <span class="text-primary-200">Mannschaft</span>
                </h1>
                <p class="text-xl max-w-xl mt-6 uppercase tracking-widest font-bold">
                    Ein Team. Ein Kiez. Ein Ziel. Von Berlin-Mitte für die Welt.
                </p>
            </div>
        </section>

        <!-- Team Photo Section -->
        <section class="container-custom -mt-10 mb-20">
            <div class="relative group">
                <img src="/images/team.png" alt="Berolina Team"
                    class="w-full h-[500px] object-cover border-4 border-white dark:border-gray-900 shadow-2xl" />
                <div
                    class="absolute bottom-4 left-4 bg-primary-500 text-white px-6 py-2 font-black italic uppercase skew-x-[-12deg]">
                    Season 2025/2026
                </div>
            </div>
        </section>

        <!-- Players Grid -->
        <section class="container-custom mb-20">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="player in players" :key="player.number"
                    class="group relative bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-primary-500 transition-all duration-300 p-8 rounded-none overflow-hidden">
                    <div
                        class="absolute -right-4 -top-4 text-8xl font-black text-gray-50 dark:text-gray-900 group-hover:text-primary-500/10 transition-colors z-0">
                        {{ player.number }}
                    </div>

                    <div class="relative z-10">
                        <div class="text-xs font-bold uppercase tracking-widest text-primary-500 mb-1">{{
                            player.position }}</div>
                        <h3 class="text-2xl font-black uppercase italic mb-4">{{ player.name }}</h3>
                        <p class="text-gray-500 italic mb-6">"{{ player.quote }}"</p>

                        <div class="flex items-center gap-4">
                            <div class="h-[2px] w-12 bg-primary-500"></div>
                            <span class="text-sm font-bold uppercase tracking-widest">Player Profile</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Coaches Section -->
        <section class="bg-gray-50 dark:bg-gray-900/50 py-20 px-4">
            <div class="container-custom">
                <h2 class="text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">Das Trainerteam</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <div v-for="coach in coaches" :key="coach.name" class="flex gap-6 items-center">
                        <div
                            class="w-24 h-24 bg-primary-500 flex-shrink-0 flex items-center justify-center text-white text-3xl font-black italic">
                            {{ coach.name[0] }}
                        </div>
                        <div>
                            <h4 class="text-xl font-black uppercase">{{ coach.name }}</h4>
                            <p class="text-primary-600 font-bold text-sm uppercase mb-2">{{ coach.role }}</p>
                            <p class="text-gray-500">{{ coach.focus }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
