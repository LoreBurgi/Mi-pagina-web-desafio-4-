//Agrego mi presentacion
function presentacionDatos(data) {
  const fieldsCollection = data.items.find((item) => {
    if (item.sys.contentType.sys.id == "presentacion") {
      return {
        titulo: item.fields.title,
        descripcion: item.fields.descripcion,
      };
    }
  });
  addPresentacionInfo(fieldsCollection.fields);
}
function addPresentacionInfo(element) {
  const template = document.querySelector(".quien-soy__container");
  const contenedor = document.querySelector(".quien-soy");

  const titleElement = template.content.querySelector(".quien-soy__title"); //invoco al title del template
  titleElement.textContent = element.title;

  const descriptionElement = template.content.querySelector(".quien-soy__text"); //invoco al title del template
  descriptionElement.textContent = element.descripcion;

  const clone = document.importNode(template.content, true); //Creo un clon del template para luego introducirlo al contenedor que es la etiqueta results
  contenedor.appendChild(clone); //Introduzco la info del template al contenedor visible, creando la "CARTA" con la info que me dió la API
}

//Agrego Mis servicios
function serviciosDatos(data) {
  const fieldsCollection = data.items.filter((item) => {
    if (item.sys.contentType.sys.id == "servicios") {
      return {
        titulo: item.fields.title,
        descripcion: item.fields.descripcion,
      };
    }
  });
  addServiciosInfo(fieldsCollection);
}
function addServiciosInfo(element) {
  const template = document.querySelector(".card");
  const contenedor = document.querySelector(".mis-servicios__cards-container");

  element.forEach((element) => {
    const titleElement = template.content.querySelector(
      ".mis-servicios__card-title"
    ); //invoco al title del template
    titleElement.textContent = element.fields.title;

    const descriptionElement = template.content.querySelector(
      ".mis-servicios__card-text"
    ); //invoco al title del template
    descriptionElement.textContent = element.fields.description;

    const clone = document.importNode(template.content, true); //Creo un clon del template para luego introducirlo al contenedor que es la etiqueta results
    contenedor.appendChild(clone); //Introduzco la info del template al contenedor visible, creando la "CARTA" con la info que me dió la API
  });
}

//Function main
function main() {
  // Componentes
  const headerContainer = document.querySelector(".header-componente");
  header(headerContainer);

  const contactContainer = document.querySelector(".contact-componente");
  contact(contactContainer);

  const footerContainer = document.querySelector(".footer-componente");
  footer(footerContainer);

  menuHamburguesa();
  postData();

  // Contentful API servicios pagina principal

  fetch(
    "https://cdn.contentful.com/spaces/7c8qt7i50slj/environments/master/entries?access_token=bFNmG0i2hhg7qOuBstzb-yIGcJ0QqQ0p99-7Dg6H154"
  )
    .then(function (res) {
      return res.json(); //entrega otra promesa
    })
    .then(function (data) {
      presentacionDatos(data); //le paso los resultados de la data que me da contentful a las funciones
      serviciosDatos(data);
    });
}

main();
