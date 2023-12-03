<template>
  <footer class="footer">
    <div class="footer__copyright">
      &copy; 2023 Kecerovsky Lipovec. All rights reserved.
    </div>
    <div class="footer__links"></div>
    <div class="footer__developers">
      Developed by:
      <a href="https://www.linkedin.com/in/horvathmar/">Marek Horvath</a>,
      <a href="https://www.linkedin.com/in/daniel-chovanec/">Daniel Chovanec</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style scoped>

.footer {
    margin-top: auto; /* Pushes the footer to the bottom */
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1em 0;
    background-color: #142E84;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.footer__copyright, .footer__links, .footer__developers {
    font-size: 0.8em;
    color: #F8F7F9;
}

.footer a {
    color: #388ddd;
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}


</style>
