<template>
  <div class="header">
    <img class="header__erb" :src="require('@/assets/erb.png')" alt="Erb" @click="$router.push('/')"/>
    <div class="header__content">
      <h1 class="header__title" @click="$router.push('/')">Kecerovský Lipovec</h1>
      <h2 class="header__subtitle" @click="$router.push('/')">Webová stránka obce</h2>
    </div>
    <div class="header__contact">
      <p class="contact-item">+421 951 954 568</p>
      <p class="contact-item">kecerovsky@lipovec.sk</p>
      <img class="header__facebook contact-item" :src="require('@/assets/fb.png')" alt="Facebook Logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent"
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

* {
  font-family: 'Inter', sans-serif;
}

.header {
  display: flex;
  align-items: center;
  padding: 1.1% 13%;
  background-color: FFFFFF;

}

.header__erb {
  width: 6.5%;
  flex-shrink: 0;
  height: 6.5%;
  margin-right: 2%;
}

.header__content {
  flex-grow: 1;
}
.header__title {
  color: #000;
  font-family: Playfair Display;
  font-weight: 50;
  line-height: normal;
  font-size: 1.5em;
}
.header__subtitle {
  font-family: Playfair Display;
  font-style: normal;
  font-weight: 50;
  line-height: normal;
  font-size: 1em;
  color: #EF865B;
  margin-top: 0;
}
.header__contact {
  color: #333;
  font-family: Playfair Display;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.header__facebook {
  width: 20px;
  height: 20px;
  margin-top: 10px;
}
.contact-item {
  transition: transform 0.3s ease-in-out; /* Added for smooth transition effect */
}
.contact-item:hover {
  transform: scale(1.3); /* Updated to 1.3 for a more subtle zoom effect */
  cursor: pointer; /* Change the cursor to a hand pointer */
}
</style>
