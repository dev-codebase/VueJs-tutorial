<template>
    <div id="FeedItem">
        <!-- <h2>@Route Parmenter: {{feedId}}</h2> -->
        <p>{{state.data.id}} - {{state.data.title}}</p>
        <button @click="emitFeed(state.data)">Send Feed</button>
    </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router';

export default {
    name: "FeedItem",
    props: { feedItem: Object },

    setup(props, ctx) {
        // Route Setup
        const route = useRoute();
        const feedId = computed(() => route.params.feedId);
        // State Setup
        const state = reactive({
            data: props.feedItem
        });

        // Methods
        function emitFeed(feed) {
            console.log(feedId.value);
            return ctx.emit('selectedFeed', feed);
        }

        return {
            state,
            emitFeed,
            feedId
        }
    }
}
</script>