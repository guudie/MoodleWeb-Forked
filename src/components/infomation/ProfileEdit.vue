<template>
  <form
    action=""
    class="profile-edit-form"
  >
    <!-- <div class="col c-3 key">
        <p class="full-name-key">Full name:</p>
        <p class="phone-number-key">Phone number:</p>
        <p class="email-address-key">Email address:</p>
    </div>
    <div class="form-control__custom form-controls col c-7">
      <input type="text" :placeholder="userInfo.name" />
      <input type="text" :placeholder="userInfo.phone" />
      <input type="text" :placeholder="userInfo.email" />
    </div> -->

    <div class="form-control__custom form-controls name">
        <div class="col c-3"><label class="key">Full name:</label></div>
        <div class="col col c-7"><input type="text" :placeholder="userInfo.name" v-model="tmpUser.name"/></div>
    </div>
    <div class="form-control__custom form-controls phone">
        <div class="col c-3"><label class="key">Phone number:</label></div>
        <div class="col col c-7"><input type="text" :placeholder="userInfo.phone" v-model="tmpUser.phone"/></div>
    </div>
    <div class="form-control__custom form-controls email">
        <div class="col c-3"><label class="key">Email:</label></div>
        <div class="col col c-7"><input type="text" :placeholder="userInfo.email" v-model="tmpUser.email"/></div>
    </div>

    <div class="buttons">
        <button @click="onClickCancel()" type="button" class="cancel-btn">Cancel</button>
        <button class="save-btn">Save</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ProfileEdit',
  data() {
    return {
      tmpUser: {
        name: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    onClickCancel() {
      this.tmpUser.name = "";
      this.tmpUser.phone = "";
      this.tmpUser.email = "";
      this.$emit('onClickSwitchEdit');
    },
  },
  props: {
    userInfo: {},
  },
  mounted() {
    // console.log(this.userInfo);
  },
}
</script>

<style lang="scss" scoped>
.profile-edit-form {
    font-family: 'Montserrat';
}

.key {
    text-align: left;
}

.form-controls {
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-content: center;

    .key{
        margin: 0px 0px;
        color: #999;
    }

    input {
        margin: 0px 0px;
        padding-left: 15px;
        
        &::-webkit-input-placeholder {
            color: #999;
        }
    }
}

.buttons {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        height: 36px;
        width: 108px;
        border-radius: 18px;
        border: none;
        font-weight: bold;
    }

    .save-btn {
        color: #fff;
        background-color: #6347c7;
    }

    .cancel-btn {
        color: #312366;
    }
}

</style>