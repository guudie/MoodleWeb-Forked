<template>
  <div class="topic-detail">
    <div>
      <b-card :title="detail.title" :sub-title="detail.author">
        <b-card-text> {{ detail.date }} </b-card-text>

        <b-card-text v-html="detail.content"></b-card-text>

        <a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link>
      </b-card>
    </div>
  </div>
</template>

<script>
import { Topic } from "../../services/apis/ApiService";

export default {
  name: "TopicDetail",
  data() {
    return {
      detail: {},
    };
  },
  created() {
    Topic.getDetail(this.$route.query.id).then((res) => {
      this.detail = res.data.items;
    });
  },
  mounted() {},
};
</script>

<style>
</style>