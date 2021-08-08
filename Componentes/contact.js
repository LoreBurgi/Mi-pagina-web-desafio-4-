function contact(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `<section class="contact">
  <div class="contact__container-all">
    <h1 class="contact__title">Escribime</h1>
    <form class="contact__form-container">
      <label for="nombre" class="contact__name-block">
        <p class="contact__name-block-text">Nombre</p>
        <input
          name="nombre"
          class="contact__name-block-input"
          type="text"
        />
      </label>
      <label for="Email" class="contact__email-block">
        <p class="contact__email-block-text">Email</p>
        <input
          name="Email"
          class="contact__email-block-input"
          type="text"
        />
      </label>
      <div class="contact__mensaje-block">
        <p class="contact__mensaje-block-text">Mensaje</p>
        <textarea
          class="contact__mensaje-block-textarea"
          name="mensaje"
        ></textarea>
      </div>
      <button class="contact__button">Enviar</button>
    </form>
  </div>
</section>`;

  el.appendChild(componentEl);
}

function postData() {
  const form = document.querySelector(".contact__form-container");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());

    let mensaje = `Nombre: ${obj.nombre} 
        Mail: ${obj.Email} 
        Mensaje: ${obj.mensaje} `;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "lorenzoburgi@gmail.com",
        message: mensaje,
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  });
}
