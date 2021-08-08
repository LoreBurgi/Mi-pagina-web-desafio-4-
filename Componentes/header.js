function header(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
  <header class="header">
        <a href="../index.html">
        <img src="https://i.ibb.co/vwzNRCH/Lore-blanco-png.png" alt="" class="header__img-logo" />
        </a>
          <div class="header__menu-hamburguesa">
            <button class="menu-hamburguesa__button">
              <div class="logo-layer"></div>
              <div class="logo-layer"></div>
              <div class="logo-layer"></div>
            </button>
            <div class="menu-hamburguesa__ventana">
              <div class="menu-hamburguesa__button-cerrar">
                <span class="button-x">X</span>
              </div>
              <div class="menu-hamburguesa__contenido">
                <a class="ventana-content" href="../Portfolio Page/portfolio.html">Portfolio</a>
                <a class="ventana-content" href="../Servicies Page/servicios.html">Servicios</a>
                <a class="ventana-content" href="../Contact Page/contacto.html">Contacto</a>
              </div>
            </div>
          </div>
          <div class="header__menu-opciones">
            <a  href="../Portfolio Page/portfolio.html">Portfolio</a>
            <a href="../Servicies Page/servicios.html">Servicios</a>
            <a class="contacto" href="../Contact Page/contacto.html">Contacto</a>
          </div>
        </header>
  `;

  el.appendChild(componentEl);
}

function menuHamburguesa() {
  const abreVentana = document.querySelector(".menu-hamburguesa__button");
  const ventana = document.querySelector(".menu-hamburguesa__ventana");
  const cierraVentana = document.querySelector(
    ".menu-hamburguesa__button-cerrar"
  );

  abreVentana.addEventListener("click", () => {
    ventana.style.display = "inherit";
  });

  cierraVentana.addEventListener("click", () => {
    ventana.style.display = "none";
  });
}