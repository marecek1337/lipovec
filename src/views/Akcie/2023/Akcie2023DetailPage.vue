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
    const akcieId = this.$route.params.akcieId;
    const markdownContext = require.context('@/../public/documents/Akcie/2023', false, /\.md$/);
    try {
      const markdownModule = markdownContext('./' + akcieId);
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