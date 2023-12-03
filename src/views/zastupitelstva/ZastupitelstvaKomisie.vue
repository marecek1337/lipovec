<template>
  <div class="container">

    <div class="komisie" v-for="i in 3" :key="i">
      <h2 class="komisia-title">Komisia A</h2>
      <p class="komisia-details">
        <span>Predseda: </span>Some name from before<br>
        <span>Clenovia: </span>random 3 names
      </p>
    </div>

    <div class="law">
      <h2 class="law-title">Zákon č. 369/1990 Zb.Zákon Slovenskej národnej rady o obecnom zriadení</h2>

      <div class="law-section">
        <h3>Komisie <br>§ 15</h3>
        <p>
          Obecné zastupiteľstvo môže zriaďovať komisie ako svoje stále alebo dočasné poradné, iniciatívne a kontrolné orgány.<br>
          Komisie sú zložené z poslancov a z ďalších osôb zvolených obecným zastupiteľstvom.<br>
          Zloženie a úlohy komisií vymedzuje obecné zastupiteľstvo.<br>
          Členovi komisie, ktorý nie je poslanec, možno poskytnúť odmenu v kalendárnom roku najviac jednu polovicu mesačného platu starostu bez zvýšenia podľa príslušnej platovej skupiny;13) to sa vzťahuje aj na člena výboru mestskej časti, ktorý nie je poslanec.
        </p>
      </div>

      <div class="law-section">
        <h3>Rokovanie obecného zastupiteľstva <br>§ 12</h3>
        <p>
          
          (1) Obecné zastupiteľstvo zasadá podľa potreby, najmenej však raz za tri mesiace. Ak požiada o zvolanie zasadnutia obecného zastupiteľstva aspoň tretina poslancov, starosta zvolá zasadnutie obecného zastupiteľstva tak, aby sa uskutočnilo do 15 dní od doručenia žiadosti na jeho konanie. Ustanovujúce zasadnutie obecného zastupiteľstva zvolá starosta zvolený v predchádzajúcom volebnom období tak, aby sa uskutočnilo do 30 dní od vykonania volieb. Obecné zastupiteľstvo zasadá v obci, v ktorej bolo zvolené.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zastupitelstvaKomisie",
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  margin-top: 3%;
  margin-bottom: 5%;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  width: 60%;
  text-align: center;
  margin-bottom: 1em;
}

.komisie {
  width: 60%;
}

.komisia-title {
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1em;
}

.komisia-details {
  width: 40%;
  margin: 0 auto;
}

.law {
  width: 60%;
}

.law-title {
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
  margin-top: 2em;
  margin-bottom: 1em;
}

.law-section {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 2em;
}

.law-section h3 {
  text-align: center;
  margin-bottom: 0.5em;
}
</style>
