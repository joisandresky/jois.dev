<script setup lang="ts">
import HomeIcon from '~icons/heroicons/home';
import PortfolioIcon from '~icons/heroicons/briefcase';
import AboutIcon from '~icons/heroicons/user';
import ContactIcon from '~icons/heroicons/envelope-open';
const menus = [
    {
        name: 'home',
        hovered: false,
        onClick: () => {
            alert('You Are Here ...')
        }
    },
    {
        name: 'about',
        hovered: false,
        onClick: () => {
            alert('Under Construction')
        }
    },
    {
        name: 'portfolio',
        hovered: false,
        onClick: () => {
            alert('Under Construction')
        }
    },
    {
        name: 'contact',
        hovered: false,
        onClick: () => {
            alert('Under Construction')
        }
    },
]

</script>

<template>
    <div class='absolute top-[30vh] right-5 z-50 h-screen w-[30vh] text-white'>
        <ul class='flex flex-col gap-8 justify-end items-end w-full'>
            <li v-for="mn in menus">
                <button @click="mn.onClick" class='p-3 text-sm bg-white hover:bg-yellow-400 text-black font-semibold border-2 shadow-[5px_5px_0_#000] hover:shadow-[0_0_0_#000] transition-all ease-out duration-100 border-black'>
                    <span v-if="mn.name === 'home'">
                        <HomeIcon class="w-5 h-5"/>
                    </span>
                    <span v-if="mn.name === 'about'">
                        <AboutIcon class="w-5 h-5"/>
                    </span>
                    <span v-if="mn.name === 'portfolio'">
                        <PortfolioIcon class="w-5 h-5"/>
                    </span>
                    <span v-if="mn.name === 'contact'">
                        <ContactIcon class="w-5 h-5"/>
                    </span>
                    <!-- {{ mn.name }} -->
                </button>
            </li>
        </ul>
    </div>
</template>