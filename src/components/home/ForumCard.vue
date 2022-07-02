<template>
  <div class="forum-card">
    <div class="visit">
      <div class="visit-func">
        <router-link :to="'/forum'">
          <h2>Tham gia Forum!</h2>
        </router-link>
        <p class="checkout">Thảo luận trong diễn đàn của chúng tôi</p>
        <p>
          Bạn có thắc mắc gì về một chủ đề hay muốn chia sẻ
          kiến thức và kinh nghiệm của mình? Bạn có bài tập
          mà bạn đang suy nghĩ nát óc? Hay bạn chỉ muốn trò
          chuyện?
        </p>
        <router-link to="/forum"><p class="visit-now">Tham gia thảo luận ngay bây giờ!</p></router-link>
      </div>
    </div>
    <div class="img-wrapper">
      <img src="..\..\assets\images\forum\forum_pic.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ForumCard",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>

.forum-card {
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 100%;
  min-height: 500px;
  margin-top: 50px;
  border-radius: 10px;
  // background: rgb(83, 108, 235);
  // background: linear-gradient(
  //   245deg,
  //   rgb(70, 33, 126) 0%,
  //   rgb(94, 53, 156) 26%,
  //   rgb(135, 52, 160) 50%,
  //   rgb(189, 58, 171) 91%
  // );
  box-shadow: -6px 6px 0px 2px #3c2b7a;
  outline: 2px solid #3c2b7a;
  // border-top: 2px solid #3c2b7a;
  // border-bottom: 9px solid #3c2b7a;
  // border-left: 9px solid #3c2b7a;
  // border-right: 2px solid #3c2b7a;
  overflow: hidden;

  .visit {
    position: relative;
    flex: 40%;
    height: 400px;
    align-self: center;

    .visit-func {
      position: absolute;
      font-family: "Montserrat";
      right: 20px;
      margin-left: 40px;
      max-width: 400px;

      .checkout {
        margin-top: 50px;
      }

      h2 {
        text-align: center;
        background-color: #3c2b7a;
        padding: 10px;
        color: #fff;
        cursor: pointer;
        font-weight: bold;
      }

      p {
        text-align: justify;
        // color: #fff;
      }
      
      .visit-now {
        color: #4d4d4d;
      }

      .visit-now:hover {
        color: #6347c7;
      }
    }
  }

  .img-wrapper {
    position: relative;
    align-self: center;
    height: 400px;
    flex: 60%;

    img {
      position: absolute;
      max-height: 95%;
      max-width: 95%;
      left: 0;
      top: 0px;
      bottom: 0px;
      // box-shadow: 3px 3px 8px 2px #3e2c80;
      border-radius: 10px;
    }
  }
}
</style>
