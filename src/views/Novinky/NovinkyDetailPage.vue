<template>
  <div class="markdown-container">
    <MarkdownRenderer :source="fullContent" />
  </div>
</template>

<script>
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';

export default {
  components: {
    MarkdownRenderer,
  },
  data() {
    return {
      fullContent: '',
    };
  },
  created() {
    this.loadFullContent();
  },
methods: {
  loadFullContent() {
    const postId = this.$route.params.novinkyId;
    const markdownContext = require.context('@/../public/documents/Novinky', false, /\.md$/);
    try {
      const markdownModule = markdownContext('./' + postId);
      this.fullContent = markdownModule.default || markdownModule;
    } catch (error) {
      console.error('Error loading markdown file:', error);
    }
  }
}

};
</script>

<style scoped>
.markdown-container {
  width: 80%;        /* Set width to 80% of the parent container */
  margin: 0 auto;    /* Center the container */
  text-align: left;  /* Optional: if you want the text inside to be aligned left */
}
</style>
