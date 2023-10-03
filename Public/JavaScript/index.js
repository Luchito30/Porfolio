async function cargarYMostrarDatos(url, selector, template) {
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error(`Error al cargar los datos desde ${url}`);
        }

        const datos = await respuesta.json();
        const elemento = document.querySelector(selector);

        if (elemento) {
            elemento.innerHTML = template(datos);
        }
    } catch (error) {
        console.error(error);
    }
}

function plantillaPerfil(datos) {
    return ` 
    <section class="header__section--img">
        <img class="header__section--img-perfil" src="${datos.avatar}" alt="Imagen Perfil" />
    </section>
    <section class="header__section">
        <div class="header__section__div--info">
            <article class="header__section__article--Name">
                <h1 class="header__section__article--Name-titulo">${datos.nombre}</h1>
                <small class="header__section__article--Name-nombre">${datos.profeccion}</small>
            </article>

        <article class="header__section__article--Contacto">
            <i class="fa-solid fa-envelope header__section__article--carta"></i><span>${datos.mail}</span><br>
            <i class="fa-solid fa-phone header__section__article--tel"></i><span>${datos.tel}</span>
        </article>
    </div>

    <article class="header__section__article--Presentacion">
        <p>
        ${datos.descipcion}
        </p>
    </article>
</section>`;
}

function plantillaSkill(datos) {
    let template = `
    <h2 class="section--skills-titulo">Skills</h2>
    <article class="section__article--skills-container">
        <div class="section__article__div--skills-container1">`;

    datos.slice(0, 2).forEach((dato) => {
        template += `
            <div class="section__article__div--html">
                <label class="section__article__div--html--subhtml">${dato.titulo}</label>
                <progress class="section__article__div--html--progress" max="100" value="${dato.Progreso}">${dato.Progreso}</progress>
            </div>`;
    });

    template += `
        </div>
        <div class="section__article__div--skills-container2">`;

    datos.slice(2, 4).forEach((dato) => {
        template += `
            <div class="section__article__div--js">
                <label class="section__article__div--html--subhtml">${dato.titulo}</label>
                <progress class="section__article__div--html--progress" max="100" value="${dato.Progreso}">${dato.Progreso}</progress>
            </div>`;
    });

    template += `
        </div>
    </article>`;

    return template;
}

function plantillaCard(datos) {
    let template = "";

  if (datos.React && datos.React.length > 0) {
    
    datos.React.forEach((dato) => {
        template += `
        <section class="section--card">
        <img class="section--card-img" src="${dato.img}" alt="Proyecto">
        <article class="section__article--container">
            <div class="section__article--card-conteinertitulo">
                <small class="section__article--card-hastag">${dato.etiqueta}</small>
                <h5 class="section__article--card-titulo">${dato.titulo}</h5>
            </div>
            <p class="section__article--card-text">${dato.descripcion}</p>
            <div class="section__article--card-botons">
                <a class="section__article--card-demo" href="#">Demo</a>
                <button class="section__article--card-code" type="button">Code</button>
            </div>
        </article>
        </section>`;
    });
}

if (datos.responsive && datos.responsive.length > 0) {
    
    datos.responsive.forEach((dato) => {
        template += `
        <section class="section--card">
        <img class="section--card-img" src="${dato.img}" alt="Proyecto">
        <article class="section__article--container">
            <div class="section__article--card-conteinertitulo">
                <small class="section__article--card-hastag">${dato.etiqueta}</small>
                <h5 class="section__article--card-titulo">${dato.titulo}</h5>
            </div>
            <p class="section__article--card-text">${dato.descripcion}</p>
            <div class="section__article--card-botons">
                <a class="section__article--card-demo" href="#">Demo</a>
                <button class="section__article--card-code" type="button">Code</button>
            </div>
        </article>
        </section>`;
    });
}

if (datos.javascript && datos.javascript.length > 0) {
    
    datos.javascript.forEach((dato) => {
        template += `
        <section class="section--card">
        <img class="section--card-img" src="${dato.img}" alt="Proyecto">
        <article class="section__article--container">
            <div class="section__article--card-conteinertitulo">
                <small class="section__article--card-hastag">${dato.etiqueta}</small>
                <h5 class="section__article--card-titulo">${dato.titulo}</h5>
            </div>
            <p class="section__article--card-text">${dato.descripcion}</p>
            <div class="section__article--card-botons">
                <a class="section__article--card-demo" href="#">Demo</a>
                <button class="section__article--card-code" type="button">Code</button>
            </div>
        </article>
        </section>`;
    });
}

return template;
}

function plantillaExperiencia(datos) {
    let template = "";

    datos.forEach((dato) => {
        template += `
        <div class="swiper-slide">
        <article class="section__article--experiens">
            <div class="section__article__div--experiens">
                <img class="section__article__div--experiens-img" src="${dato.img}"
                                    alt="Img Experiencia">
                <span class="section__article__div--experiens-textcontainer">
                    <p class="section__article__div--experiens-fecha">${dato.fecha}</p>
                    <p class="section__article__div--experiens-name">${dato.titulo}</p>
                </span>
            </div>
            <div class="section__article--description">
                <p class="section__article--description-texto">${dato.descripcion}</p>
            </div>
        </article>
        </div>`;
    });

    return template;
}

function plantillaCertificado(datos) {
    let template = "";

    datos.forEach((dato) => {
            template += `
            <div class="swiper-slide">
            <article class="section__article--certificado">
                <div class="section__article__div-imgconteiner">
                    <img class="section__article-img" src="${dato.img}" class="card-img-top"
                                alt="Diploma">
                </div>
                <div class="div-conteiner">
                    <p class="section__article__div-titulo">${dato.titulo}</p>
                    <small class="section__article__div-fecha">${dato.fecha}</small>
                </div>
            </article>
            </div>`;
    });

    return template;
}

    cargarYMostrarDatos(
        "https://my-json-server.typicode.com/Luchito30/Api-digitalers/perfil",
        ".header",
        plantillaPerfil
    );
    
    cargarYMostrarDatos(
        "https://my-json-server.typicode.com/Luchito30/Api-digitalers/skills",
        ".section--skills",
        plantillaSkill
    );

    cargarYMostrarDatos(
        "https://my-json-server.typicode.com/Luchito30/Api-digitalers/proyecto",
        ".card--container",
        plantillaCard
    );
    
    cargarYMostrarDatos(
        "https://my-json-server.typicode.com/Luchito30/Api-digitalers/experiencia",
        ".slider-experiens",
        plantillaExperiencia
    );
    
    cargarYMostrarDatos(
        "https://my-json-server.typicode.com/Luchito30/Api-digitalers/certificado",
        ".slider-certi",
        plantillaCertificado
    );

    fetch(" https://my-json-server.typicode.com/Luchito30/Api-digitalers/proyecto")
.then(respuesta =>{
    return respuesta.json();
})
.then(dato =>{
    console.log(dato)
})

