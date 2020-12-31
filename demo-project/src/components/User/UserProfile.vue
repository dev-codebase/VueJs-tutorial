<template>
    <div id="UserProfile">
        <p>Username: {{profile.userName}}</p>
        <p>Fullname: {{fullName}}</p>
        <p>Followers: {{followers}} </p>
        <div>
        <button @click="selectedProfile(profile.id)">Follow User</button>
        </div>
    </div>
</template>
<script>

export default {
  name: 'UserProfile',
  props: [ 'profile' ],
  data() {
    return {
      followers: 0,
    };
  },
  watch: {
    followers(newCount, oldCount) {
      if(oldCount < newCount) {
        console.log(`Watch triggered: ${oldCount} to ${newCount}`);
      }
    }
  },
  computed: {
    fullName() {
      return `${this.profile.firstName} ${this.profile.lastName}`;
    }
  },
  methods: {
    followUser() {
      this.followers++;
    },
    selectedProfile(id) {
        this.$emit('emittedProfile', id);
    }
  },
  // life cycle hooks
  mounted() {
    this.followUser();
  }
}
</script>