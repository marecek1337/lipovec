<template>
  <div id="documents">
    <h2 class="documents-title">Dokumenty Auditor</h2>
    <table class="documents-table">
      <thead>
        <tr>
          <th>Názov</th>
          <th>Dátum</th>
          <th>Veľkosť</th>
          <th>Stiahnuť</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="document in documents" :key="document.id">
          <td>{{ document.name }}</td>
          <td>{{ document.date }}</td>
          <td>{{ document.size }}</td>
          <td><a :href="document.url" download>Stiahnuť</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "dokumentyAuditor",
  data() {
    return {
      documents: [],
    };
  },
  created() {
    axios.get(`${process.env.VUE_APP_API_URL}api/getDocuments`)
      .then((response) => {
        this.documents = response.data;
      })
      .catch((error) => {
        console.error("There was an error fetching data", error);
      });
  },
};
</script>

<style scoped>
#documents {
  width: 60%;
  margin: auto;
}

.documents-title {
  text-align: center;
  font-size: 2em;
  margin-top: 1em;
  margin-bottom: 2em;
}

.documents-table {
  width: 100%;
  border-collapse: collapse;
}

.documents-table th, .documents-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.documents-table tr:nth-child(even){background-color: #f2f2f2;}

.documents-table tr:hover {background-color: #ddd;}

.documents-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #4CAF50;
  color: white;
}
</style>
