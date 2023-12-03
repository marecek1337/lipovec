<template>
<HeaderComponent/>
  <div class="app-container">
    <NavigationBarComponent/>
    <main>
      <router-view/>
    </main>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import NavigationBarComponent from './components/NavigationBar.vue';


export default {
  name: 'App',

  components: {
    HeaderComponent,
    FooterComponent,
    NavigationBarComponent
  },

  data: () => ({
    //
  }),
}
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Ensures the app container takes up full viewport height */
}

/* Ensure that the main content expands to fill available space */
.v-main {
  flex: 1;
}
</style>
