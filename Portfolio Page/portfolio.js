function porfolioDatos(data) {
  const fieldsCollection = data.items.filter((item) => {
    if (item.sys.contentType.sys.id == "portfolio") {
      return {
        titulo: item.fields.title,
        descripcion: item.fields.description,
        link: item.fields.link,
      };
    }
  });
  addPortfolioInfo(fieldsCollection);
}
function addPortfolioInfo(element) {
  const template = document.querySelector(".card-template");
  const contenedor = document.querySelector(".proyects-section");

  element.forEach((element) => {
    const titleElement = template.content.querySelector(
      ".proyects-section__card-title"
    ); //invoco al title del template
    titleElement.textContent = element.fields.title;

    const descriptionElement = template.content.querySelector(
      ".proyects-section__card-text"
    ); //invoco al title del template
    descriptionElement.textContent = element.fields.description;

    const linkElement = template.content.querySelector(
      ".proyects-section__card-link"
    ); //invoco al title del template
    linkElement.href = element.fields.link;

    const clone = document.importNode(template.content, true); //Creo un clon del template para luego introducirlo al contenedor que es la etiqueta results
    contenedor.appendChild(clone); //Introduzco la info del template al contenedor visible, creando la "CARTA" con la info que me dió la API
  });
}

function main() {
  // Contentful API porfolio

  fetch(
    "https://cdn.contentful.com/spaces/7c8qt7i50slj/environments/master/entries?access_token=bFNmG0i2hhg7qOuBstzb-yIGcJ0QqQ0p99-7Dg6H154"
  )
    .then(function (res) {
      return res.json(); //entrega otra promesa
    })
    .then(function (data) {
      //le paso los resultados de la data que me da contentful a la funcion addWorkCard
      porfolioDatos(data);
    });
}

main();
