<template>
  <div v-html="renderedContent" class="a"></div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  props: ['source'],
  data() {
    return {
      md: new MarkdownIt(),
      renderedContent: '',
    };
  },
  watch: {
    source: {
      immediate: true,
      handler() {
        this.renderedContent = this.md.render(this.source);
      }
    }
  }
};
</script>

<style scoped>
.a {
  text-align: center;
  font-family: Playfair Display;
  font-size: 80%;
}

</style>