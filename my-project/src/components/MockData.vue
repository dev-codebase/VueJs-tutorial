<template>
    <div id="mockData">
        <!-- <div
            v-for="person in state.persons" 
            :key="person.id">
        <p>{{person.id}}</p>
        <p>{{person.first_name}}</p>
        </div> -->
        <p>{{state.totalCount}}</p>
        <div
            v-for="feed in state.feedsData.feeds" 
            :key="feed.id">
        <p>{{feed.id}}</p>
        <p>{{feed.title}}</p>
        </div>
    </div>
</template>

<script>
import {computed, reactive} from 'vue';
import PersonsData from '../assets/data/mock-data.json';
import FeedsData from '../assets/data/mock-feeds.json';

export default {
    name: 'mockData',
    setup() {
        const state = reactive({
           // add data
            persons: PersonsData,
            feedsData: FeedsData
        });

        // computed
        const totalCount = computed(() => state.persons.length );

        // add methods
        function getData() {
            return state.persons;
        }

        return {
            state, //also return all the computed/methods etc 
            totalCount,
            getData
        };
    }
}
</script>

