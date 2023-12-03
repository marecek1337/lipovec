<template>
  <div class="container">
    <h1 class="title">Poslanci obecného zastupiteľstva</h1>
    <ul class="list">
      <li>PhDr. Richard Bodnár</li>
      <li>Mgr. Eva Bodnarova</li>
      <li>Martin Sabol</li>
      <li>Ing. Daniel Chovanec</li>
      <li>Mgr. Stela Šoganičová</li>
    </ul>
    <h2 class="law-title">Zákon č. 369/1990 Zb. Zákon Slovenskej národnej rady o obecnom zriadení <br>§ 11</h2>
    <section class="law-section">
      <h3>(1) Obecné zastupiteľstvo</h3>
      <p>Obecné zastupiteľstvo je zastupiteľský zbor obce zložený z poslancov zvolených v priamych voľbách obyvateľmi obce na štyri roky. Volebné pravidlá upravuje osobitný predpis. Funkčné obdobie obecného zastupiteľstva sa končí zložením sľubu poslancov novozvoleného obecného zastupiteľstva.</p>
      <h3>(2) Funkcia poslanca</h3>
      <p>Funkcia poslanca je nezlučiteľná s funkciou</p>
      <ul class="law-list">
        <li>starostu,</li>
        <li>zamestnanca obce, v ktorej bol zvolený; to neplatí, ak zamestnanec obce je dlhodobo uvoľnený na výkon funkcie poslanca,</li>
        <li>štatutárneho orgánu rozpočtovej organizácie alebo príspevkovej organizácie zriadenej obcou, v ktorej bol zvolený,</li>
        <li>podľa osobitného zákona.</li>
      </ul>
      <h3>(3) Počet poslancov</h3>
      <p>Počet poslancov na celé volebné obdobie určí pred voľbami obecné zastupiteľstvo podľa počtu obyvateľov obce takto:</p>
      <ul class="law-list">
        <li>do 40 obyvateľov obce 3 poslanci,</li>
        <li>od 41 do 500 obyvateľov obce 3 až 5 poslancov,</li>
        <li>od 501 do 1 000 obyvateľov obce 5 až 7 poslancov,</li>
        <li>od 1 001 do 3 000 obyvateľov obce 7 až 9 poslancov,</li>
        <li>od 3 001 do 5 000 obyvateľov obce 9 až 11 poslancov,</li>
        <li>od 5 001 do 10 000 obyvateľov obce 11 až 13 poslancov,</li>
        <li>od 10 001 do 20 000 obyvateľov obce 13 až 19 poslancov,</li>
        <li>od 20 001 do 50 000 obyvateľov obce 15 až 25 poslancov,</li>
        <li>od 50 001 do 100 000 obyvateľov obce 19 až 31 poslancov,</li>
        <li>nad 100 000 obyvateľov obce 23 až 41 poslancov.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "zastupitelstvaPoslanci",
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  margin-bottom: 10%;
  margin-top: 3%;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  width: 50%;
  text-align: center;
  margin-bottom: 1em;
}

.list {
  list-style: none;
  padding: 0;
  width: 50%;
  text-align: center;
}

.law-title {
  font-size: 1.2em;
  font-weight: bold;
  width: 50%;
  text-align: center;
  margin: 2em 0;
}

.law-section {
  width: 50%;
}

.law-section h3 {
  font-weight: bold;
}

.law-section p {
  margin-bottom: 0.5em;
}

.law-list {
  padding-left: 2em;
  width: 50%;
  margin: 0 auto;
}
</style>

