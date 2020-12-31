<template>
    <div id="FeedList">
        <div v-for="feed in state.feeds_data.feeds" :key="feed.id">
            @{{feed.id}}
            <feed-item :feedItem="feed" @selectedFeed="onSelectedFeed"></feed-item>
        </div>
    </div>
</template>

<script>
import {reactive} from 'vue';
import FeedData from '../../assets/data/mock-feeds.json';
import FeedItem from '../Feeds/FeedItem.vue';

export default {
    name: "FeedList",
    components: { FeedItem },
    setup() {
        const state = reactive({
            feeds_data: FeedData
        });

        // Methods
        function onSelectedFeed(feed) {
            console.log(feed);
        }

        return {
            state,
            onSelectedFeed
        }
    }
}
</script>