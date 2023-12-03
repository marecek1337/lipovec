<template>
  <div id="documents">
    <h2 class="documents-title">{{ pageTitle }}</h2>
    <table class="documents-table">
      <thead>
        <tr>
          <th>Názov</th>
          <th>Stiahnuť</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="document in documents" :key="document.name">
          <td>{{ document.name }}</td>
          <td><a :href="document.url" download>Stiahnuť</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "DokumentyMain",
  data() {
    return {
      documents: [
        { name: 'zmluva.pdf', url: '/documents/Dokumenty/zmluva.pdf' },
        { name: 'dokument.docx', url: '/documents/Dokumenty/dokument.docx' },
        // Add more documents as needed
      ],
      pageTitle: 'Dokumenty',
    };
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
  background-color: #5570B4;
  color: white;
}
</style>
