<template>
  <div>
    <vue-editor v-model="content" ref="editor"></vue-editor>
    <button @click="setEditorContent">Lưu</button>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "EditorToolbar",
  components: { VueEditor },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    setEditorContent() {
      console.log(this.$refs.editor.values)
    }
  },
  props: {
    children: String
  },
  computed: {
    exchange() {
      this.content = this.children
    }
  }
};
</script>

<style></style>
