<template>
  <div class="select">
    <select v-model="$i18n.locale">
      <option :key="`locale-sk`" value="sk">🇸🇰&emsp;</option>
      <option :key="`locale-en`" value="en">🇬🇧&emsp;</option>
      <option :key="`locale-ua`" value="ua">&#127482;&#127462;</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return { locales: ["sk", "en", "ua"] };
  },
};
</script>
