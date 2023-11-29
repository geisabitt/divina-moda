class CustomNav extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <nav class="container">
          <img src="./assets/logo1.png" alt="Brand Divina Moda" />
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="contact.html">Contato</a></li>
          </ul>
        </nav>`;
  }
}
customElements.define("custom-nav", CustomNav);

class CustomFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <footer>
        <p>31 99999 9666 - contato@divinafashion.com</p>
        <p>AV. Principal, 123 . BH/MG</p>
      </footer>`;
  }
}
customElements.define("custom-footer", CustomFooter);
