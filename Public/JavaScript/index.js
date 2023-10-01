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

    for (let i = 0; i <= 1; i++) {
        template += `
            <div class="section__article__div--html">
                <label class="section__article__div--html--subhtml">${datos[i].titulo}</label>
                <progress class="section__article__div--html--progress" max="100" value="${datos[i].Progreso}">${datos[i].Progreso}</progress>
            </div>`;
    }

    template += `
        </div>
        <div class="section__article__div--skills-container2">`;

    for (let i = 2; i <= 3; i++) {
        template += `
            <div class="section__article__div--js">
                <label class="section__article__div--html--subhtml">${datos[i].titulo}</label>
                <progress class="section__article__div--html--progress" max="100" value="${datos[i].Progreso}">${datos[i].Progreso}</progress>
            </div>`;
    }

    template += `
        </div>
    </article>`;

    return template;
}

function plantillaExperiencia(datos) {
    let template = `   
    <h2 class="section--experiens-titulo">Experiencia</h2>`;

    for (let i = 0; i < datos.length; i++) {

        if (i === 0) {
            template += `
        <article class="section__article--experiens">    
            <div class="section__article__div--experiens">
                <img class="section__article__div--experiens-img" src="${datos[i].img}" alt="Img Experiencia">
                <span class="section__article__div--experiens-textcontainer">
                    <p class="section__article__div--experiens-fecha">${datos[i].fecha}</p>
                    <p class="section__article__div--experiens-name">${datos[i].titulo}</p>
                </span>
            </div>
            <div class="section__article--description">
                <p class="section__article--description-texto">${datos[i].descripcion}</p>
            </div>
        </article>`;
        } else {
            template += `
        <article class="section__article--experiens2">    
            <div class="section__article__div--experiens">
                <img class="section__article__div--experiens-img" src="${datos[i].img}" alt="Img Experiencia">
                <span class="section__article__div--experiens-textcontainer">
                    <p class="section__article__div--experiens-fecha">${datos[i].fecha}</p>
                    <p class="section__article__div--experiens-name">${datos[i].titulo}</p>
                </span>
            </div>
            <div class="section__article--description">
                <p class="section__article--description-texto">${datos[i].descripcion}</p>
            </div>
            </article>`;
        }
    }

    return template;
}

function plantillaCertificado(datos) {
    let template = `   
    <h2 class="section--certificado-titulo">Certificados</h2>
    <div class="section--containercetification">`;

    for (let i = 0; i < datos.length; i++) {
        
        if (i === 0){
        template += `
        <article class="section__article--certificado">
            <div class="section__article__div-imgconteiner">
                <img class="section__article-img" src="${datos[i].img}" class="card-img-top"
                            alt="Diploma">
            </div>
            <div class="div-conteiner">
                <p class="section__article__div-titulo">${datos[i].titulo}</p>
                <small class="section__article__div-fecha">${datos[i].fecha}</small>
            </div>
        </article>`;
        } else {
            template += `
            <article class="section__article--certificado2">
                <div class="section__article__div-imgconteiner">
                    <img class="section__article-img" src="${datos[i].img}" class="card-img-top"
                                alt="Diploma">
                </div>
                <div class="div-conteiner">
                    <p class="section__article__div-titulo">${datos[i].titulo}</p>
                    <small class="section__article__div-fecha">${datos[i].fecha}</small>
                </div>
            </article>`;
        }
    }

    template += `
    </div>`;

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
    "https://my-json-server.typicode.com/Luchito30/Api-digitalers/experiencia",
    ".section--experiens",
    plantillaExperiencia
);

cargarYMostrarDatos(
    "https://my-json-server.typicode.com/Luchito30/Api-digitalers/certificado",
    ".section--certificado",
    plantillaCertificado
);