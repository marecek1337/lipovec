<template>
  <div id="posts-grid">
    <div class="posts">
      <div v-for="post in posts" :key="post.id" class="post" @click="navigateToPost(post.id)">
        <MarkdownRenderer :source="post.content" />
        <p><a href="#">Read More</a></p>
      </div>
    </div>
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
      posts: [],
    };
  },
  created() {
    this.loadMarkdownFiles();
  },
methods: {
  navigateToPost(akcieId) {
    this.$router.push({ name: 'Akcie2023DetailPage', params: { akcieId: akcieId.replace('./', '') } });
  },
  loadMarkdownFiles() {
    const markdownContext = require.context('@/../public/documents/Akcie/2023', false, /\.md$/);
    markdownContext.keys().forEach(filename => {
      const markdownModule = markdownContext(filename);
      let content = markdownModule.default || markdownModule;

      // Truncate the content to 100 characters
      if (content.length > 100) {
        content = content.substring(0, 100) + '...';
      }

      this.posts.push({
        id: filename, // Use filename as a unique identifier
        content: content
      });
    });
  }
}

};
</script>


<style scoped>
#posts-grid {
  width: 80%;
  margin: auto;
}

.posts-title {
  text-align: center;
  font-size: 2em;
  margin-top: 1em;
  margin-bottom: 2em;
}

.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.post {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  box-sizing: border-box;
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.post:hover {
  transform: translateY(-10px);
}
</style>