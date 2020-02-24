
class TopBar extends HTMLElement {

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(TopBar.topBarTemplate.content.cloneNode(true));
  }

  static createTemplate() {
    this.topBarTemplate = document.createElement('template');
    this.topBarTemplate.innerHTML = `
    <style>
    .navbar {
      max-width: 100vw;
      height: 64;
      background-color: aqua;
      padding: 15px;
      padding-right: 30px;
      display: flex;
      justify-content: flex-end;
      background-color: #141414;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      border-bottom: 8px solid #6f1a2b;
      /* transition: all 0.3s cubic-bezier(.25, .8, .25, 1); */
      z-index: 1000;
      position: relative
    }

    .navbar a {
      padding: 10px;
      color: white;
      text-decoration: none;
      font-size: 1.3em;
      z-index: 1000;
    }

    .logo {
      position: absolute;
      width: 170px;
      left: 30px;
      top: -20px;
      z-index: 1001;
    }
  </style>
  <div>
    <img class="logo" src="img/logo-sastreria.svg" alt="Logo Sastrería Nuñez">

    <div class="navbar">
      <a href="/">Inicio</a>
      <a href="/">Servicios</a>
      <a href="/">Galería</a>
      <a href="/">Contacto</a>
    </div>
  </div>
    `;
  }
}

class SliderSection extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(SliderSection.topBarTemplate.content.cloneNode(true));
  }

  static createTemplate() {
    this.topBarTemplate = document.createElement('template');
    this.topBarTemplate.innerHTML = `
    <style>
    .slider {
      max-height: 500px;
      position: relative;
    }

    .slider .patron {
      background-image: url('pattern.png');
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 400;
    }

    .slider .texto {
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: 401;
      color: white;
      font-size: 3.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.40), 0 1px 2px rgba(0, 0, 0, 0.50);

    }

    .slider img {
      max-height: 500px;
      width: 100vw;
      object-fit: cover;
    }
  </style>
  <div class="slider">
    <div class="patron"></div>
    <p class="texto">41 Años de tradición</p>
    <img src="img/prueba-2.jpg" alt="matrimonio-elegante">
  </div>`;
  }
}


class ContactButton extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(ContactButton.topBarTemplate.content.cloneNode(true));
  }

  static createTemplate() {
    this.topBarTemplate = document.createElement('template');
    this.topBarTemplate.innerHTML = ``;
  }
}


TopBar.createTemplate();
SliderSection.createTemplate();
ContactButton.createTemplate();

customElements.define('top-bar', TopBar);
customElements.define('slider-section', SliderSection);
customElements.define('contact-button', ContactButton);