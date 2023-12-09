<template>
  <div id="blog-posts">
    <ImageSlider />
    <h2 class="blog-title">Najnovšie udalosti</h2>
    <div class="blog-posts">
      <div v-for="post in posts" :key="post.id" class="blog-post" @click="navigateToPost(post.id)">
        <MarkdownRenderer :source="post.content" />
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownRenderer from '@/components/MarkdownRenderer.vue';
import ImageSlider from '../components/ImageSlider.vue';

export default {
  name: "BlogPosts",
  components: {
    MarkdownRenderer,
    ImageSlider,
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
    navigateToPost(postId) {
      this.$router.push({ name: 'MainDetailPage', params: { postId: postId + '.md' } });
    },
    loadMarkdownFiles() {
      const markdownContext = require.context('@/../public/documents/Dolezite', false, /\.md$/);
      const filenames = markdownContext.keys().slice(-4); // Get the latest 3 files
      filenames.forEach(filename => {
        const markdownModule = markdownContext(filename);
        let content = markdownModule.default || markdownModule;
        if (content.length > 200) {
          content = content.substring(0, 200) + '...';
        }
        this.posts.push({
          id: filename.replace('./', '').replace('.md', ''),
          content: content
        });
      });
    }
  }
};
</script>


<style scoped>
.blog-title {
  text-align: center;
  color: #000000;
  font-family: Playfair Display;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 2em;
  margin-bottom: 2em;
}

.blog-posts {
  display: flex;
  text-align: left;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 10%;
}

.blog-post {
  height: 300px;
  width: 20%;
  background-color: #F9F8F8;
  padding: 20px;
  box-shadow: 2px 2px 8px rgba(239,134,91, 0.3);
  border-radius: 15px;
  box-sizing: border-box;
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.post-title {
  color: #000000;
  font-family: Playfair Display;
  font-size: 200px;
  font-weight: bold;
  border-bottom: 2px solid #EF865B;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

 .post-content {
  color: #333;
  font-family: Playfair Display;
  font-size: 12px;
}

.blog-post:hover {
  transform: translateY(-10px);
  box-shadow: 4px 4px 12px rgba(239,134,91, 0.5);
}
</style>