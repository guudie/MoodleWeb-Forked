<template>
  <div class="info-screen grid wide">
    <div class="row">
      <div class="col c-3 buttons-column">
        <div class="side-buttons">
          <router-link to="/profile">
            <p
              :class="[informationShow ? 'active' : '']"
              @click="onClickInformationField"
            >
              Information and contact
            </p>
          </router-link>
          <router-link to="/profile">
            <p
              :class="[passwordShow ? 'active' : '']"
              @click="onClickChangePassword"
            >
              Change Password
            </p>
          </router-link>
          <router-link to="/teammanagement">
            <p>
              Team Management
            </p>
          </router-link>
        </div>
      </div>
      <div class="col c-9">
        <PasswordChange v-show="passwordShow" />
        <router-view></router-view>
        <div class="wrapper-information" v-show="informationShow">
          <div class="information-header">
            <h2 class="information-header-text">Infomation</h2>
            <div class="draw-icon-wrapper">
              <!-- <img :src="draw" alt="edit" class="draw-icon"> -->
              <i class="fas fa-pen pen-icon"></i>
            </div>
          </div>
          <div class="grid information-body">
            <div class="row information-body-row">
              <div class="col c-2 avt">
                <img :src="avt" />
              </div>
              <div class="col c-3 key">
                <p class="full-name-key">Full name:</p>
                <p class="phone-number-key">Phone number:</p>
                <p class="email-address-key">Email address:</p>
              </div>
              <div class="col c-7 value">
                <p class="full-name-value">{{ user.name }}</p>
                <p class="phone-number-value">0122 222 222</p>
                <p class="email-address-value">{{ user.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon from "../../assets/images/information/img-preview.png";
import icond from "../../assets/images/information/draw.png";
import "../UI/grid.css";
import PasswordChange from "./PasswordChangeScreen.vue";
import { Authen } from "../../services/apis/ApiService";

export default {
  name: "Information",
  components: {
    PasswordChange
  },
  data() {
    return {
      avt: icon,
      draw: icond,
      passwordShow: false,
      informationShow: true,
      user: {},
      
    };
  },
  methods: {
    onClickChangePassword(e) {
      this.passwordShow = true;
      this.informationShow = false;
      console.log(this.user);
      console.log(this.$store.user);
    },
    onClickInformationField() {
      (this.passwordShow = false), (this.informationShow = true);
    }
  },
  mounted() {
    Authen.getUser().then(res => this.user=res.data.items)
  }
};
</script>

<style lang="scss" scoped>
// để tạm, tải font sau
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap");

.info-screen {
  padding-top: 50px; // potato code, needs changing later
  min-height: 100vh;
}

.side-buttons {
  // the p
  p {
    font-family: "Montserrat";
    text-align: left;
    margin-bottom: 10px;
  }
  p.active {
    color: #6347c7;
    font-weight: bold;
  }
  p:hover {
    color: #6347c7;
  }
}

.buttons-column {
  max-width: 30%;
}

.information-header {
  display: flex;
  justify-content: space-between;
}

.information-header-text {
  margin-bottom: 0;
  align-content: flex-start;
  font-family: "Montserrat";
  font-weight: bold;
  color: #6347c7;
  font-size: 1.4rem;
}

.draw-icon-wrapper {
  text-align: right;

  .pen-icon {
    color: #6347c7;
  }
}

.draw-icon-wrapper:hover {
  cursor: pointer;
}
.draw-icon {
  height: 16px;
  width: 16px;
  right: 0;
  align-content: flex-end;
}

.information-body {
  margin-top: 12px;
  font-family: "Montserrat";
}

.key {
  text-align: left;
  color: #999;
}

.value {
  text-align: left;
}
</style>
