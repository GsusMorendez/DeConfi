//MVP1: 1 having in a constant all the products, 2 have three categories, 3 searching working, 4 see all products, 5 see one product detail

//idea 1 create a file with the products and then a function to read the file and load the products into a constant
//idea 2 create a folder with all the image (or their bytes and load in image field this bytes or the direction or whatever is needed)


// Datos de los productos
let productsJson;
const productsPerPage = 6;
const productsFilePath = "./src/products.json";
const productIdParameter = "productId"

// Obtener el contenedor de los productos
const productsContainer = document.getElementById("products-container");
const fatherPaginationContainer = document.getElementById("pagination-container");



const thisUrl = "<a target=\"_blank\" href=\"https://www.amazon.es/Retekess-V115-Transistores-Recargable-Estaciones/dp/B06XH9WXPY/ref=sr_1_1?dd=BuRarQMCvxxGeAbCNryOuA,,&amp;keywords=radio+port%25C3%25A1til+recargable+con+pantalla+digital&amp;qid=1704370241&amp;refinements=p_90:6820340031,p_72:831280031&amp;rnid=831271031&amp;sr=8-1&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=589b15eaf72c0b6ddd403555015a98f0&camp=3638&creative=24630\">deconfi-21</a>"
const thisDiv = "<div class=\"paapi5-pa-ad-unit pull-left\"><div class=\"paapi5-pa-product-container\"><div class=\"paapi5-pa-product-image\"><div class=\"paapi5-pa-product-image-wrapper\"><a class=\"paapi5-pa-product-image-link\" href=\"https://www.amazon.es/dp/B06XH9WXPY?tag=deconfi-21&amp;linkCode=ogi&amp;th=1&amp;psc=1\" title=\"Retekess V115 Radio Portátil,FM Am SW Radio Pequeña,Digital Recargable Radio con MP3,SD/TF/USB,3 Modos de Grabación,Tiempo de Sueño,Pantalla LCD, (Negro)\" target=\"_blank\"></a><img class=\"paapi5-pa-product-image-source\" src=\"https://m.media-amazon.com/images/I/51lnqgLgqxL._SL160_.jpg\" alt=\"Retekess V115 Radio Portátil,FM Am SW Radio Pequeña,Digital Recargable Radio con MP3,SD/TF/USB,3 Modos de Grabación,Tiempo de Sueño,Pantalla LCD, (Negro)\"><span class=\"paapi5-pa-percent-off\">15%</span></div></div><div class=\"paapi5-pa-product-details\"><div class=\"paapi5-pa-product-title\"><a class=\"paap5-pa-product-title-link\" href=\"https://www.amazon.es/dp/B06XH9WXPY?tag=deconfi-21&amp;linkCode=ogi&amp;th=1&amp;psc=1\" title=\"Retekess V115 Radio Portátil,FM Am SW Radio Pequeña,Digital Recargable Radio con MP3,SD/TF/USB,3 Modos de Grabación,Tiempo de Sueño,Pantalla LCD, (Negro)\" target=\"_blank\">Retekess V115 Radio Portátil,FM Am SW Radio Pequeña,Digital Recargable Radio con MP3,SD/TF/USB,3 Modos de Grabación,Tiempo de Sueño,Pantalla LCD, (Negro)</a></div><div class=\"paapi5-pa-product-list-price\"><span class=\"paapi5-pa-product-list-price-value\">19,99&nbsp;€</span></div><div class=\"paapi5-pa-product-prime-icon\"><span class=\"icon-prime-all\"></span></div></div></div></div>"



startApp()


function startApp() {
    fetch(productsFilePath)
        .then(response => response.json())
        .then(productsArray => {
            productsJson = productsArray

            //createNextReview(thisUrl, thisDiv)

            const url = window.location.href;
            const query = new URL(url).search;
            if (query.includes(productIdParameter)) {
                const productId = new URL(url).searchParams.get(productIdParameter);
                showDetails(productId)
            } else {
                printFirstPage(productsArray)
                createPagination(productsArray)
            }
        });
}

function printFirstPage(productArray) {
    const startIndex = (1 - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = productArray.slice(startIndex, endIndex);
    printProducts(productsToShow);
}

function createPagination(productArray) {
    fatherPaginationContainer.innerHTML = "";

    const totalPages = Math.ceil(productArray.length / productsPerPage);

    const paginationContainer = document.createElement('nav');
    paginationContainer.setAttribute('aria-label', 'Page navigation');
    paginationContainer.classList.add('d-flex', 'justify-content-center');

    const paginationList = document.createElement('ul');
    paginationList.classList.add('pagination');


    const showPage = (page) => {
        // Lógica para mostrar los productos de la página seleccionada
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = productArray.slice(startIndex, endIndex);

        // Llamar a la función que muestra los productos pasándole los parámetros necesarios
        printProducts(productsToShow);
    };

    for (let i = 1; i <= totalPages; i++) {
        const paginationItem = document.createElement('li');
        paginationItem.classList.add('page-item');

        const paginationLink = document.createElement('a');
        paginationLink.classList.add('page-link');
        paginationLink.href = '#';
        paginationLink.textContent = i;

        paginationLink.addEventListener('click', () => {
            showPage(i);
        });

        paginationItem.appendChild(paginationLink);
        paginationList.appendChild(paginationItem);
    }

    paginationContainer.appendChild(paginationList);
    fatherPaginationContainer.appendChild(paginationContainer);
}


function printProducts(products) {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";

    let row = document.createElement("div");
    row.className = "row";

    products.forEach(function (product, index) {


        // Crear los elementos de la card
        const card = document.createElement("div");
        card.className = "card mb-3 col-md-6"; // Agregamos "col-md-6" para ocupar la mitad del ancho en pantallas medianas y grandes


        if (product.description === undefined) {

            card.innerHTML = `
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${product.image}" href="${product.image}" class="card-img img-fluid" alt="..." style="object-fit: cover; height: 100%;">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title" style="font-family: 'American Typewriter',serif">${product.title}</h5>
                        <p class="card-text" style="text-align: justify">REVIEW PROXIMAMENTE!</p>
                        <p class="card-text" ><small class="text-muted">Precio: ${product.price}</small></p>
                        <a class="btn btn-primary" style="color: white"  href="${product.link}">Ver en amazon</a>
                    </div>
                </div>
            </div>
        `;

        } else {
            let prodDescription = truncateText(`${product.description[0]}`);

            // Agregar el contenido a la card
            card.innerHTML = `
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${product.image}" href="${product.image}" class="card-img img-fluid" alt="..." style="object-fit: cover; height: 100%;">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title" style="font-family: 'American Typewriter',serif">${product.title}</h5>
                        <p class="card-text" style="text-align: justify">${prodDescription}</p>
                        <p class="card-text" ><small class="text-muted">Precio: ${product.price}</small></p>
                        <a class="btn btn-primary" style="color: white"  onclick="showDetails(${product.id})">Ver review</a>
                    </div>
                </div>
            </div>
        `;
        }

        if (index % 2 === 0 && index > 0) {
            productsContainer.appendChild(row);
            row = document.createElement("div");
            row.className = "row";
        }

        // Agregar la card a la fila
        row.appendChild(card);
    });

    if (row.childElementCount > 0) {
        productsContainer.appendChild(row);
    }

    // Agregar contenido de recomendaciones
    // recommendationsContainer.innerHTML = `
    //     <h3>Ultima review</h3>
    //     <p>Aquí puedes agregar tu contenido de recomendaciones.</p>
    // `;
}

//when click in lens
document.getElementById("lensForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let textFieldValue = document.getElementById("textField").value;
    let products = searchProducts(textFieldValue, "title")
    printFirstPage(products)
    createPagination(products)
});

function searchProducts(keyword, field) {
    const results = [];
    for (let i = 0; i < productsJson.length; i++) {
        const product = productsJson[i];
        let productReference = product.category.toLowerCase();
        if (field === "title") {
            productReference = product.title.toLowerCase();
        }
        if (productReference.includes(keyword.toLowerCase())) {
            results.push(product);
        }
    }
    cleanUrl()
    return results;
}

//Menu categories
document.getElementById("modaLink").addEventListener("click", function (event) {
    event.preventDefault();
    let modaProducts = searchProducts("moda", "category")
    printFirstPage(modaProducts)
    createPagination(modaProducts)
    cleanUrl()
});

document.getElementById("hogarLink").addEventListener("click", function (event) {
    event.preventDefault();
    let hogaProducts = searchProducts("hogar", "category")
    printFirstPage(hogaProducts)
    createPagination(hogaProducts)
    cleanUrl()
});

document.getElementById("tecnologiaLink").addEventListener("click", function (event) {
    event.preventDefault();
    let tecProducts = searchProducts("tecnologia", "category")
    printFirstPage(tecProducts)
    createPagination(tecProducts)
    cleanUrl()
});

document.getElementById("librosLink").addEventListener("click", function (event) {
    event.preventDefault();
    let tecProducts = searchProducts("libros", "category")
    printFirstPage(tecProducts)
    createPagination(tecProducts)
    cleanUrl()
});

document.getElementById("inicioLink").addEventListener("click", function (event) {
    event.preventDefault();
    startApp()
    cleanUrl()
});

////////////////////////////////////////////////////////////////////


function showDetails(id) {
    fatherPaginationContainer.innerHTML = "";
    productsContainer.innerHTML = "";


    const descriptions = productsJson[id].description;
    let descriptionHTML = "";

    if (productsJson[id].description != undefined) {
        descriptions.forEach((description) => {
            descriptionHTML += `<p>${description}</p>`;
        });
    } else {
        descriptionHTML += `<div class="col-12 text-center">
                                <p>REVIEW PROXIMAMENTE !!!</p>
                            </div>`;
    }


    productsContainer.innerHTML = `    
        <div class="col-12 text-center">
            <img src="${productsJson[id].image}" class="article-image card-img img-fluid"  alt="..." style="object-fit: cover; max-width: 35%; height: 80%;"alt="Imagen del producto">
        </div>
        <div class="col-12 text-center" style="margin-bottom: 20px;margin-top: 20px">
            <h3>${productsJson[id].title}</h3>
        </div>
        <div class="col-12" style="text-align: justify; justify-content: end">
            ${descriptionHTML}
        </div>
        <div class="col-12 text-center" style="margin-bottom: 20px;margin-top: 20px">
            <a href="${productsJson[id].link}" class="btn btn-primary">Ver en Amazon</a>
        </div>
    `;

    const url = new URL(window.location.href);
    url.searchParams.set(productIdParameter, id);
    history.replaceState({}, "", url.toString());
}

function truncateText(text) {
    if (text.length > 300) {
        return text.substring(0, 300) + "...";
    } else {
        return text;
    }
}

function displayAboutUs() {
    productsContainer.innerHTML = "";
    fatherPaginationContainer.innerHTML = "";

    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <h1>Bienvenidos a nuestra página de Reseñas de Productos</h1>
    <p style="text-align: justify">Somos un equipo de entusiastas que nos encanta probar y compartir nuestros comentarios sobre diferentes productos. Desde gadgets electrónicos hasta productos para el hogar, estamos aquí para ofrecerte nuestras opiniones honestas y ayudarte a tomar decisiones informadas.</p>
    <p style="text-align: justify">En nuestra página, encontrarás reseñas detalladas y recomendaciones basadas en nuestra propia experiencia. Valoramos la calidad, el rendimiento y la utilidad de cada producto que probamos.</p>
    <p style="text-align: justify">Nos complace anunciarle que tras haber trabajado arduamente para poder ofrecerte una experiencia aún mejor, hemos conseguido nuestros propios enlaces de afiliados directamente a los productos de Amazon.</p>
    <p style="text-align: justify">Nuestro objetivo es proporcionarte un servicio excepcional y garantizarte una navegación fluida y segura en nuestra página. Al establecer una asociación con Amazon, podremos redirigirte directamente a los productos que mencionamos en nuestras reseñas a través de nuestros enlaces de afiliados.</p>
    <p style="text-align: justify">Valoramos profundamente la confianza que depositas en nosotros al visitar nuestra página y leer nuestras reseñas. Es por eso que nos esforzamos por ser completamente transparentes en nuestra relación con nuestros usuarios.</p>
    <p style="text-align: justify">Al solicitar los enlaces de afiliados con Amazon, nos comprometemos a utilizar exclusivamente dichos enlaces y nunca utilizar otros programas de afiliados. Esto garantiza que la información y los enlaces que proporcionamos sean consistentes y confiables.</p>
    <p style="text-align: justify">Queremos brindarte una experiencia sin complicaciones al acceder a los productos que recomendamos. Con los enlaces de afiliados de Amazon, podrás realizar tus compras de manera rápida y segura, confiando en la reputación y la calidad de Amazon.</p>
    <p style="text-align: justify">Además, al utilizar nuestros enlaces de afiliados, estarás apoyando directamente nuestro trabajo y esfuerzo para proporcionarte contenido útil y de calidad de manera constante.</p>
    <p style="text-align: justify">Te aseguramos que respetaremos todas las políticas y directrices de Amazon en relación con los enlaces de afiliados. Nuestro compromiso es ofrecerte una experiencia positiva y transparente en nuestra página y con los productos de Amazon.</p>
    <p style="text-align: justify">Estamos emocionados por la oportunidad de colaborar con Amazon y ofrecerte una experiencia aún mejor. Seguiremos informándote sobre nuestros avances y los pasos que estamos dando para establecer nuestra colaboración con Amazon.</p>
    <p style="text-align: justify">¡Explora nuestras reseñas y descubre los productos que nos encantan en Amazon! Estamos seguros de que encontrarás nuestras opiniones útiles y disfrutarás de los productos tanto como nosotros. ¡Gracias por considerar nuestra solicitud y por ser parte de nuestra comunidad!</p>
    <h1>Política de Privacidad</h1>
    <p style="text-align: justify">En nuestro sitio web, valoramos y respetamos tu privacidad. Nos comprometemos a proteger la información personal que compartas con nosotros. Este sitio web es de solo lectura y no recopila cookies (solo habrá una cookie que quede en tu ordenador durante un tiempo limitado que amazon gestionara
     y por la cual identifica que está comprando en amazon desde nuestra pagina web) ni realiza seguimiento de ningún tipo. No almacenamos ni compartimos tu información personal con terceros sin tu consentimiento expreso.</p>
    <p style="text-align: justify">Al utilizar este sitio web, aceptas nuestras condiciones de uso y política de privacidad.</p>
`;

    productsContainer.appendChild(newDiv);
}

function cleanUrl() {
    const url = new URL(window.location.href);
    url.searchParams.delete(productIdParameter);
    history.replaceState({}, "", url.toString());
}


/////////////////////////////////FAST PRODUCT CREATOR///////////////////////////////////




function createNextReview(url, string) {
    const document = new DOMParser().parseFromString(string, "text/html");

    const image = document.querySelector(".paapi5-pa-product-image-source").src;
    const title = document.querySelector(".paapi5-pa-product-title").textContent;
    const price = document.querySelector(".paapi5-pa-product-list-price-value").textContent;
    const link = extractURL(url)
    const category = "hogar";
    const id = productsJson[productsJson.length-1].id+1

    const product = {
        id,
        image,
        title,
        price,
        link,
        category,
    };
    console.log(JSON.stringify(product));
}

function extractURL(htmlString) {
    const start = htmlString.indexOf("href=");
    if (start === -1) {
        return null;
    }
    const end = htmlString.indexOf("\"", start + 6);
    return htmlString.slice(start + 6, end);
}

