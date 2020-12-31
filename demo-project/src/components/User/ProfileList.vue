<template>
  <div id="ProfileList">
    <div v-for="profile in profiles" :key="profile.id">
      <user-profile
        :profile="profile"
        @emittedProfile="toggleFavorite"
      ></user-profile>
    </div>

    <!-- Forms -->
    <form class="myForm">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">@</span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span class="input-group-text" id="basic-addon2">@example.com</span>
      </div>

      <label for="basic-url" class="form-label">Your vanity URL</label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3"
          >https://example.com/users/</span
        >
        <input
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">$</span>
        <input
          type="text"
          class="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <span class="input-group-text">.00</span>
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
        />
        <span class="input-group-text">@</span>
        <input
          type="text"
          class="form-control"
          placeholder="Server"
          aria-label="Server"
        />
      </div>

      <div class="input-group">
        <span class="input-group-text">With textarea</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </form>
    <!-- End of Forms -->
  </div>
</template>

<script>
import UserProfile from "./UserProfile.vue";
export default {
  name: "ProfileList",
  components: {
    UserProfile,
  },
  data() {
    return {
      followers: 0,
      profiles: [
        {
          id: 1,
          userName: "_JaneDoe",
          firstName: "Jane",
          lastName: "Doe",
          email: "jane.doe@test.com",
          isAdmin: true,
        },
        {
          id: 2,
          userName: "_JohnDoe",
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@test.com",
          isAdmin: false,
        },
      ],
      twoot: {
        type: Object,
        required: true,
      },
    };
  },
  methods: {
    toggleFavorite(id) {
      console.log(`Emitted Id from UserProfile: ${id}`);
    },
  },
};
</script>
