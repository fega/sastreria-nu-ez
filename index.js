
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
      display:flex;
      justify-content: center;
    }

    .slider .patron {
      background-image: url('img/pattern.png');
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 400;
    }
    .slider .text-container{
      height: 100%;
      position: absolute;
      width: 70%;
      z-index: 401;
      margin:auto;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .slider .texto, .slider .texto-2 {
      color: white;
      font-size: 3.5em;
      margin: 0px;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.40), 0 1px 2px rgba(0, 0, 0, 0.50);
    }
    .slider .texto-2{
      font-size: 2em;

    }

    .slider img {
      max-height: 500px;
      width: 100vw;
      object-fit: cover;
    }
  </style>
  <div class="slider">
    <div class="patron"></div>
    <div class="text-container">
      <p class="texto">41 Años de tradición</p>
      <p class="texto-2">Desde 1979 ofrecemos productos y servicios de alta costura, clínica de ropa, dotaciones, alquiler, sastrería y demás.</p>
    </div>
    <img src="img/prueba.jpg" alt="matrimonio-elegante">
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
    this.topBarTemplate.innerHTML = `
    <style>
    .contact-button {
      position: fixed;
      max-width: 100vw;
      width: 100vw;
      height: 64px;
      padding: 0px;
      padding-right: 30px;
      display: flex;
      justify-content: center;

      align-items: center;
      background-color: #141414;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      border-top: 8px solid #6f1a2b;
      z-index: 2000;
      bottom: 0px;

    }

    .contact-button a {
      color: white;
      font-size: 1.6em;
      text-decoration: none;
    }

    .contact-button img {
      width: 28px;
      padding-right: 15px;
    }
    </style>

    <section class="contact-button">
      <img src="img/llamada.svg" alt="Icono de llamada">
      <a href="tel:+573164670342">316 467 0342</a>
    </section>
    `;
  }
}
class ServiceSection extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' });
    this.shadow.appendChild(ServiceSection.topBarTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.updateStyle()
  }

  updateStyle() {
    const src = this.getAttribute('src');
    const text = this.getAttribute('text');

    const imgElement = this.shadow.getElementById('service-image');
    const textElement = this.shadow.getElementById('service-text');



    imgElement.setAttribute('src', src);
    textElement.innerHTML = text;

  }

  static createTemplate() {
    this.topBarTemplate = document.createElement('template');
    this.topBarTemplate.innerHTML = `
    <style>
        .section-container {
          display: flex;
          position: relative;
          margin: 5px;
          border-radius: 2px;
          width: 230px;
          height: 230px;
          transition: all 0.3s;
        }

        .section-container:hover {
          transform: scale(1.05, 1.05);
        }

        .section-container .texto {
          width: 100%;
          position: absolute;
          align-self: flex-end;
          z-index: 401;
          color: white;
          font-size: 1.5em;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          margin: 0px;
          background-color: rgba(0, 0, 0, 0.40);
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.40), 0 1px 2px rgba(0, 0, 0, 0.50);

        }

        .section-container .patron {
          background-image: url('img/pattern.png');
          height: 100%;
          width: 100%;
          position: absolute;
          z-index: 400;
          cursor: pointer;
          transition: all 0.3s;
        }

        .section-container .patron:hover {
          background-color: #6f1a2b6c;
        }

        .section-container img {
          width: 100%;
          height: 100%;

          object-fit: cover;

        }
      </style>
      <div class="section-container">
        <div class="patron"></div>
        <img id="service-image" src="/img/services/alquiler.jpg" alt="" srcset="">
        <p id="service-text" class="texto">Alquiler de ropa</p>
      </div>
    `;
  }

}

class ServiceFeature extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' });
    this.shadow.appendChild(ServiceFeature.topBarTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.updateStyle()
  }

  updateStyle() {
    const src = this.getAttribute('src');
    const text = this.getAttribute('text');
    const title = this.getAttribute('title');

    const imgElement = this.shadow.getElementById('service-feature-image');
    const textElement = this.shadow.getElementById('service-feature-text');
    const titleElement = this.shadow.getElementById('service-feature-title')

    imgElement.setAttribute('src', src);
    textElement.innerHTML = text;
    titleElement.innerHTML = title;

  }

  static createTemplate() {
    this.topBarTemplate = document.createElement('template');

    this.topBarTemplate.innerHTML = /*html*/`
    <style>
      .service-feature-container{
        width: 320px;
        max-width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center
      }
      #service-feature-image{
        width: 150px;
        padding: 20px;
      }
      h3{
        font-size: 1.5em;
      }
    </style>
      <div class="service-feature-container">
        <h3 id="service-feature-title">
          Tradición
        </h3>
        <img id="service-feature-image" src="/img/features/tradicion.png">
        <p id="service-feature-text">Tenemos mas de 41 años de experiencia trayendo, calidad y estilo a la ciudad de Bucaramanga</p>
      </div>
    `;
  }
}


TopBar.createTemplate();
SliderSection.createTemplate();
ContactButton.createTemplate();
ServiceSection.createTemplate();
ServiceFeature.createTemplate();
customElements.define('top-bar', TopBar);
customElements.define('slider-section', SliderSection);
customElements.define('contact-button', ContactButton);
customElements.define('service-section', ServiceSection);
customElements.define('service-feature', ServiceFeature);