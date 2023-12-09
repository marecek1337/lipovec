<template>
  <nav class="navbar">
    <div class="navbar__hamburger" @click="toggleMobileMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul :class="['navbar__list', { 'active': mobileMenuOpen }]">
      <li><router-link to="/oznamy" @click="handleItemClick('/oznamy')">Oznamy</router-link></li>

      <li v-if="!isMobileMenu" class="navbar__item">
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
 <li v-else class="navbar__item" @click="toggleDokumentyMenu">
        <p>Dokumenty</p>
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

      <li class="navbar__item extra-spacing"><router-link to="/akcie" @click="handleItemClick('/akcie')">Novinky</router-link></li>

      <!-- <li class="navbar__item extra-spacing"><router-link to="/akcie" >Novinky</router-link></li> -->

    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      mobileMenuOpen: false,
      dropdowns: {
        dokumenty: false,
        zastupitelstva: false,
        akcie: false,
      },
      isMobileMenu: false
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      const hamburger = this.$el.querySelector('.navbar__hamburger');
      hamburger.classList.toggle('is-active');
      document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
    },
    toggleDropdown(dropdown) {
      if (this.isMobileMenu) {
        this.dropdowns[dropdown] = !this.dropdowns[dropdown];
      }
    },
    handleItemClick(path) {
      // Close the mobile menu
      this.mobileMenuOpen = false;
      const hamburger = this.$el.querySelector('.navbar__hamburger');
      if (hamburger.classList.contains('is-active')) {
        hamburger.classList.remove('is-active');
      }
      document.body.style.overflow = ''; // Reset the overflow style

      // Navigate to the new route
      this.$router.push(path);
    },
    handleResize() {
      this.isMobileMenu = window.innerWidth < 768;
    }
  }
};
</script>


<style scoped>
.navbar::before {
  content: "";
  position: absolute;
  left: 2.5%;
  right: 2.5%;
  top: 0;
  height: 1.6px;
  background-color: #EF865B;
  opacity: 0.4;
}

.navbar {
  position: relative;
  width: 100%;
  background: #FFFFFF;
  padding: 1.5em 0;
}

.navbar__list {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  list-style: none;
  justify-content: space-around; 
    /* justify-content: space-between; /* Change this line */

}

.navbar__hamburger.open {
  top: 0px; /* Or whatever value you want when the menu is open */
}

.navbar__hamburger.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.navbar__hamburger.is-active span:nth-child(2) {
  opacity: 0;
}

.navbar__hamburger.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}



.navbar__list a,
.navbar__list p {
  cursor: pointer;
  height: 35px;
  flex-shrink: 0;
  text-decoration: none;
  color: #333;
  font-family: 'Playfair Display', serif;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 1.3em;
  transition: color 0.2s ease-in-out;
  line-height: 35px;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  text-align: center;
  padding: 1em;
  margin: 1 auto;
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

.navbar__list li:hover .navbar__dropdown,
.navbar__item:hover .navbar__dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.navbar__list a {
  transition: transform 0.2s ease-in-out;
}

.navbar__list a:hover {
  color: #383c41;
  transform: scale(1.1);
  cursor: pointer;
}



@media (max-width: 1350px) {
  .navbar__hamburger {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 20px; /* Adjust as needed to align to the right */
    top: 50px; /* Adjust as needed to align to the top */
    z-index: 3; /* Ensure the hamburger is above the menu items */
    scale: 1.3;
  }

  .navbar__list a,
  .navbar__list p {
    /* ... other styles ... */
    font-size: 2.45em; /* Adjust the size to match the design */
    line-height: 2.45em; /* Adjust the line height to match the design */
  }
  
  
  .navbar__hamburger span {
    display: block;
    width: 25px;
    height: 3px;

    background-color: #333;
    margin: 5px auto;
    transition: all 0.3s;
  }

  .navbar__list.active {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center items horizontally */
    justify-content: center; /* Center items vertically */
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #EF865B; /* Adjust the color to match the second picture */
    z-index: 2;
  }

  .extra-spacing {
    margin-top: 20px; /* Adjust the value to get the desired spacing */
  }

  .navbar__list {
    display: none;

  }
}
</style>