<script setup lang="ts">
useHead({
    title: 'Statistik - Berolina Extra FC',
    meta: [
        { name: 'description', content: 'Statistiken und Tabellen von Berolina Extra FC.' }
    ]
});

const topScorers = [
    { name: 'Leon Schmidt', goals: 24, games: 12 },
    { name: 'Amira Al-Fayed', goals: 18, games: 11 },
    { name: 'Malik Traoré', goals: 12, games: 12 },
    { name: 'Lia Weber', goals: 8, games: 10 }
];

const teamStats = [
    { label: 'Ballbesitz', value: '62%' },
    { label: 'Torschüsse / Spiel', value: '14.5' },
    { label: 'Passquote', value: '88%' },
    { label: 'Gelbe Karten', value: '14' }
];

const leagueTable = [
    { pos: 1, team: 'Berolina Extra FC', p: 12, w: 10, d: 1, l: 1, pts: 31 },
    { pos: 2, team: 'Spandau Warriors', p: 12, w: 8, d: 2, l: 2, pts: 26 },
    { pos: 3, team: 'Charlottenburg FC', p: 11, w: 7, d: 2, l: 2, pts: 23 },
    { pos: 4, team: 'Wedding United', p: 12, w: 6, d: 3, l: 3, pts: 21 },
    { pos: 5, team: 'Mitte FC', p: 12, w: 5, d: 4, l: 3, pts: 19 }
];
</script>

<template>
    <div class="pb-20">
        <section
            class="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-20 overflow-hidden relative">
            <div class="container-custom">
                <h1 class="text-6xl md:text-8xl font-black italic uppercase tracking-tighter">
                    Power in <span
                        class="text-primary-500 underline decoration-[12px] underline-offset-[16px]">Numbers</span>
                </h1>
            </div>
            <!-- Background Graphic -->
            <div
                class="absolute -right-20 -bottom-20 text-[20rem] font-black text-gray-100 dark:text-gray-800 pointer-events-none select-none italic uppercase">
                Stats
            </div>
        </section>

        <div class="container-custom py-20">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">

                <!-- League Table -->
                <div class="lg:col-span-2">
                    <h2 class="text-3xl font-black uppercase italic mb-8 border-l-8 border-primary-500 pl-6">Tabelle -
                        Berlin Mitte Liga</h2>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-gray-900 text-white uppercase text-xs tracking-widest font-bold">
                                    <th class="p-4">Pos</th>
                                    <th class="p-4">Team</th>
                                    <th class="p-4 text-center">Sp</th>
                                    <th class="p-4 text-center">S</th>
                                    <th class="p-4 text-center">U</th>
                                    <th class="p-4 text-center">N</th>
                                    <th class="p-4 text-right">Pts</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="team in leagueTable" :key="team.pos"
                                    :class="team.team === 'Berolina Extra FC' ? 'bg-primary-500/10 border-l-4 border-l-primary-500' : 'border-b border-gray-100 dark:border-gray-800'">
                                    <td class="p-4 font-black italic text-xl">{{ team.pos }}</td>
                                    <td class="p-4 font-bold uppercase">{{ team.team }}</td>
                                    <td class="p-4 text-center font-medium">{{ team.p }}</td>
                                    <td class="p-4 text-center font-medium text-green-600">{{ team.w }}</td>
                                    <td class="p-4 text-center font-medium text-gray-500">{{ team.d }}</td>
                                    <td class="p-4 text-center font-medium text-red-600">{{ team.l }}</td>
                                    <td class="p-4 text-right font-black italic text-xl">{{ team.pts }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Scorers & Team Radar -->
                <div class="space-y-12">
                    <div>
                        <h3 class="text-2xl font-black uppercase italic mb-6">Top Scorer</h3>
                        <div class="space-y-6">
                            <div v-for="(scorer, idx) in topScorers" :key="idx" class="relative">
                                <div class="flex justify-between items-end mb-2">
                                    <span class="font-bold uppercase italic text-lg">{{ scorer.name }}</span>
                                    <span class="text-primary-600 font-black italic text-2xl">{{ scorer.goals }}
                                        Goals</span>
                                </div>
                                <!-- Mini Progress Bar -->
                                <div class="h-2 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                                    <div class="h-full bg-primary-500" :style="`width: ${(scorer.goals / 25) * 100}%`">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-900 text-white p-8 overflow-hidden relative">
                        <h3 class="text-2xl font-black uppercase italic mb-8 relative z-10">Team Performance</h3>
                        <div class="grid grid-cols-1 gap-6 relative z-10">
                            <div v-for="stat in teamStats" :key="stat.label"
                                class="flex justify-between items-center border-b border-white/10 pb-4">
                                <span class="uppercase tracking-widest text-xs font-bold text-gray-400">{{ stat.label
                                    }}</span>
                                <span class="text-2xl font-black italic text-primary-400">{{ stat.value }}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
