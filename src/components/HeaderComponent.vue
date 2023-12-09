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
  padding: 1% 10%;
  background-color: #FFFFFF;
}

.header__erb {
  width: 85px; /* Fixed width */
  height: auto; /* Auto height for maintaining aspect ratio */
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
  font-size: 1.55em;
  margin: 0; /* Remove any default margins */
}
.header__subtitle {
  font-family: Playfair Display;
  font-style: normal;
  font-weight: 50;
  line-height: normal;
  font-size: 1em;
  color: #EF865B;
  font-size: 19px; /* Adjust subtitle font size for mobile */
    margin: 0; /* Remove any default margins */
}
.header__contact {
  color: #333;
  font-family: Playfair Display;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2; /* Adjust line height to reduce space between contact items */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}


.contact-item:not(:last-child) {
  margin-bottom: -5px; /* Adjust the bottom margin to reduce space between items */
}
.header__facebook {
  width: 21px;
  height: 21px;
  margin-top: 15px;
}
.contact-item {
  transition: transform 0.3s ease-in-out; /* Added for smooth transition effect */
}
.contact-item:hover {
  transform: scale(1.3); /* Updated to 1.3 for a more subtle zoom effect */
  cursor: pointer; /* Change the cursor to a hand pointer */
}

@media (max-width: 850px) {
  .header {
    display: flex; /* Ensure this is set to establish a flex context */
    align-items: center; /* This centers the children vertically in the flex container */
    justify-content: flex-start; /* Aligns children to the start, adjust as necessary */
  }

  .header__contact, .header__facebook {
    display: none; /* Hide the contact info and Facebook logo */
  }

  /* No need for align-self or align-content on the title and subtitle */
  .header__title, .header__subtitle {
    /* Ensure there is no excessive margin or padding throwing off the centering */
    margin: 0;
    padding: 0;
  }

  /* Additional styles, if the title and subtitle are flex items, and you want them centered */
  .header__content {
    display: flex; /* Establish a flex context if not already set */
    flex-direction: column; /* Stack title and subtitle vertically */
    justify-content: center; /* Center title and subtitle vertically in their container */
    align-items: flex-start; /* Align title and subtitle text to the start (left) */
  }
}

@media (max-width: 480px) {

.header__contact, .header__facebook {
  display: none; /* Hide these elements on mobile if they are not in the screenshot layout */
}
.header__erb{
  width: 70px; /* Fixed width */
  height: auto; /* Auto height for maintaining aspect ratio */
  margin-right: 2%;
}


.header__title {
  font-size: 1.40em;
}
.header__subtitle {
  font-size: 1em; /* Adjust subtitle font size for mobile */
}
}

@media (max-width: 410px) {

.header__contact, .header__facebook {
  display: none; /* Hide these elements on mobile if they are not in the screenshot layout */
}

.header__erb{
  width: 60px; /* Fixed width */
  height: auto; /* Auto height for maintaining aspect ratio */
  margin-right: 2%;
}
.header__title {
  font-size: 1.25em;
}
.header__subtitle {
  font-size: 1em; /* Adjust subtitle font size for mobile */
}
}

/* Media queries for mobile */
@media (max-width: 370px) {

.header__contact, .header__facebook {
  display: none; /* Hide these elements on mobile if they are not in the screenshot layout */
}
.header__erb{
  width: 50px; /* Fixed width */
  height: auto; /* Auto height for maintaining aspect ratio */
  margin-right: 2%;
}

.header__title {
font-size: 1.16em;
}
.header__subtitle {
font-size: 1em; /* Adjust subtitle font size for mobile */
}
}

@media (max-width: 355px) {

.header__contact, .header__facebook {
  display: none; /* Hide these elements on mobile if they are not in the screenshot layout */
}

.header__erb{
  width: 40px; /* Fixed width */
  height: auto; /* Auto height for maintaining aspect ratio */
  margin-right: 2%;
}

.header__title {
font-size: 1.1em;
}
.header__subtitle {
font-size: 14px; /* Adjust subtitle font size for mobile */
}
}

@media (max-width: 292px) {

.header__contact, .header__facebook {
  display: none; /* Hide these elements on mobile if they are not in the screenshot layout */
}

.header__erb{
  width: 40px; /* Fixed width */
  height: auto; /* Auto height for maintaining aspect ratio */
  margin-right: 2%;
}

.header__title {
font-size: 1em;
}
.header__subtitle {
font-size: 0.8em; /* Adjust subtitle font size for mobile */
}
}
</style>
