<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li><router-link to="/oznamy">Oznamy</router-link></li>

      <li class="navbar__item">
        <p>Dokumenty</p>
        <div class="navbar__dropdown">
          <div class="grid">
            <router-link to="/dokumenty/kontrolor">Hlavný kontrolór</router-link>
            <router-link to="/dokumenty/rozpocet">Komunitný plán obce</router-link>
            <router-link to="/dokumenty/pozvanky">Pozvánky na obecné zastupiteľstvo</router-link>
            <router-link to="/dokumenty/auditor">Spravá auditora</router-link>
            <router-link to="/dokumenty/vzn">VZN obce a smernice</router-link>
            <router-link to="/dokumenty/tlaciva">Tlačivá a formuláre</router-link>
            <router-link to="/dokumenty/rozpocet">Rozpočet a záverečný účet obce</router-link>
            <router-link to="/dokumenty/plan">Uzemný plán</router-link>
            <router-link to="/dokumenty/zmluvy">Zmluvy</router-link>
            <router-link to="/dokumenty/auditor">Majetkové priznania verejných funkcionárov</router-link>
          </div>
        </div>
      </li>

      <li class="navbar__item">
        <p>Zastupiteľstvá</p>
        <div class="navbar__dropdown">
          <div class="grid">

            <router-link to="/zastupitelstvo/poslanci">Poslanci obecnáho zastupiteľstva</router-link>
            <router-link to="/zastupitelstvo/komisie">Komisie OZ</router-link>
            <router-link to="/zastupitelstvo/zapisnice">Zápisnice</router-link>
          </div>
        </div>
      </li>

      <li><router-link to="/novinky">Novinky</router-link></li>

      <li class="navbar__item">
        <p>Akcie</p>
        <div class="navbar__dropdown">
          <div class="grid">
            <router-link to="/akcie/2022">2022</router-link>
            <router-link to="/akcie/2023">2023</router-link>
            <router-link to="/akcie/2024">2024</router-link>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style scoped>
.navbar::before {
  content: "";
  position: absolute;
  left: 2.5%;
  right: 2.5%;
  top: 0; /* Adjust this if you want to position the line differently vertically */
  height: 1.6px; /* Thickness of the line */
  background-color: #EF865B; /* Color of the line */
  opacity: 0.4; /* 50% opacity */
}

.navbar {
  position: relative; /* Added */
  width: 100%;
  background: #FFFFFF;
  padding: 1.5em 0;

}
.navbar__list {
  display: flex;
  justify-content: center; /* Center the items */
  list-style-type: none;
  gap: 11%; /* This creates space between the items, adjust as necessary */
}


.navbar__list a,
.navbar__list p {
  height: 35px;
  flex-shrink: 0;
  text-decoration: none;
  color: #333;
  font-family: Playfair Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 1.3em;
  transition: color 0.2s ease-in-out;
}

.navbar__dropdown {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  background: #E5E2E2;
  width: 100%;
  left: 0;
  z-index: 1;
  transform: translateY(-20px);
  transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.navbar__dropdown .grid {
  border: 1px solid #E2E2E2;
  background: #E2E2E2;
  filter: blur(0.2px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  padding: 1em;
  margin-left: 19%;
  white-space: nowrap;
}

.navbar__dropdown ul {
  border: 1px solid #E5E2E2;
  background: #E5E2E2;
  justify-content: space-around;
  padding: 1em 0;
  list-style: none;
}

.navbar__dropdown a {
  color: #333;
  font-size: 1.2em;
}

.navbar__list li:hover .navbar__dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}


.navbar__list a {
  transition: transform 0.2s ease-in-out;
  /* Added for smooth transition effect */
}

.navbar__list a:hover {
  color: #383c41;
  transform: scale(1.1);
  cursor: pointer;
}

.navbar__dropdown ul.dropdown__row {
  display: flex;
  justify-content: space-around;
  padding: 0.5em 0;
  margin: 0;
  list-style: none;
}

.navbar__dropdown a {
  color: #333;
  font-size: 1em;
}
</style>
