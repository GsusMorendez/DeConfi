//MVP1: 1 having in a constant all the products, 2 have three categories, 3 searching working, 4 see all products, 5 see one product detail

//idea 1 create a file with the products and then a function to read the file and load the products into a constant
//idea 2 create a folder with all the image (or their bytes and load in image field this bytes or the direction or whatever is needed)


// Datos de los productos
var products = [
    {
        id: 0,
        image: "https://m.media-amazon.com/images/I/71T1orV8CyL._AC_UL800_FMwebp_QL65_.jpg",
        title: "Product name 1",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        price: "22.55$",
        link: "https://www.example.com",
        category: "tecnologia"
    },
    {
        id: 1,
        image: "https://m.media-amazon.com/images/I/71A7rKpbhsL._AC_SX679_.jpg",
        title: "Product name 2",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        price: "19.99$",
        link: "https://www.example.com",
        category: "tecnologia"
    },
    {
        id: 2,
        image: "https://m.media-amazon.com/images/I/51ZUIN4uEwL._AC_UL800_FMwebp_QL65_.jpg",
        title: "Pulsera Lotus",
        description: "Introducción:\n" +
            "En el mundo de los dispositivos inteligentes, las pulseras han ganado popularidad gracias a su estilo y funcionalidad. Amazon, una de las principales compañías de comercio electrónico, ha lanzado al mercado una pulsera inteligente que combina diseño elegante y características avanzadas. En este artículo, exploraremos las razones por las que la pulsera de Amazon se ha convertido en un accesorio imprescindible para los entusiastas de la tecnología y la moda.\n" +
            "\n" +
            "Descripción del producto:\n" +
            "La pulsera de Amazon es un dispositivo que combina lo mejor de ambos mundos: un diseño sofisticado y tecnología de vanguardia. Con su elegante correa ajustable y una pantalla táctil brillante, esta pulsera no solo complementa cualquier estilo, sino que también te mantiene conectado y en forma.\n" +
            "\n" +
            "Funciones destacadas:\n" +
            "Una de las características más destacadas de esta pulsera es su capacidad para monitorizar tu actividad física diaria. Con un sensor de frecuencia cardíaca incorporado y un podómetro preciso, la pulsera registra tus pasos, la distancia recorrida y las calorías quemadas. Además, te permite establecer objetivos personalizados y realizar un seguimiento de tu progreso a lo largo del tiempo.\n" +
            "\n" +
            "La pulsera también te mantiene informado al recibir notificaciones de tu teléfono inteligente. Ya sea que recibas un mensaje importante, una llamada o una alerta de calendario, podrás verlo directamente en la pantalla de tu pulsera, sin tener que sacar tu teléfono del bolsillo.\n" +
            "\n" +
            "Otra función interesante es su capacidad de control de música. Con tan solo unos toques en la pantalla, podrás reproducir, pausar o cambiar de canción mientras escuchas tus melodías favoritas.",
        price: "19.99$",
        link: "https://www.example.com",
        category: "moda"
    },
    {
        id: 3,
        image: "https://m.media-amazon.com/images/I/81+2XObMzoL._AC_UL800_FMwebp_QL65_.jpg",
        title: "Falda primavera",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        price: "19.99$",
        link: "https://www.amazon.es/Plisada-Algod%C3%B3n-El%C3%A1stica-Pantal%C3%B3n-Interior/dp/B09XD8N8QZ/ref=sxin_16_sbv_search_btf?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.23361681-ceb7-4033-931c-516780e5590c%3Aamzn1.sym.23361681-ceb7-4033-931c-516780e5590c&cv_ct_cx=falda&keywords=falda&pd_rd_i=B09XD8N8QZ&pd_rd_r=4bfd12b2-f1c6-49d1-abe4-96ea12fe01c0&pd_rd_w=6n5WS&pd_rd_wg=yxxeq&pf_rd_p=23361681-ceb7-4033-931c-516780e5590c&pf_rd_r=JANNPNCW2AA40X076762&qid=1684350851&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-1-9131241a-a358-4619-a7b8-0f5a65d91d81",
        category: "moda"
    },
    {
        id: 4,
        image: "https://m.media-amazon.com/images/I/71T1orV8CyL._AC_UL800_FMwebp_QL65_.jpg",
        title: "Product name 4",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        price: "22.55$",
        link: "https://www.example.com",
        category: "tecnologia"
    },
    {
        id: 5,
        image: "https://m.media-amazon.com/images/I/71A7rKpbhsL._AC_SX679_.jpg",
        title: "Product name 5",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        price: "19.99$",
        link: "https://www.example.com",
        category: "tecnologia"
    },
    {
        id: 6,
        image: "https://m.media-amazon.com/images/I/51ZUIN4uEwL._AC_UL800_FMwebp_QL65_.jpg",
        title: "Pulsera Lotus",
        description: "Introducción:\n" +
            "En el mundo de los dispositivos inteligentes, las pulseras han ganado popularidad gracias a su estilo y funcionalidad. Amazon, una de las principales compañías de comercio electrónico, ha lanzado al mercado una pulsera inteligente que combina diseño elegante y características avanzadas. En este artículo, exploraremos las razones por las que la pulsera de Amazon se ha convertido en un accesorio imprescindible para los entusiastas de la tecnología y la moda.\n" +
            "\n" +
            "Descripción del producto:\n" +
            "La pulsera de Amazon es un dispositivo que combina lo mejor de ambos mundos: un diseño sofisticado y tecnología de vanguardia. Con su elegante correa ajustable y una pantalla táctil brillante, esta pulsera no solo complementa cualquier estilo, sino que también te mantiene conectado y en forma.\n" +
            "\n" +
            "Funciones destacadas:\n" +
            "Una de las características más destacadas de esta pulsera es su capacidad para monitorizar tu actividad física diaria. Con un sensor de frecuencia cardíaca incorporado y un podómetro preciso, la pulsera registra tus pasos, la distancia recorrida y las calorías quemadas. Además, te permite establecer objetivos personalizados y realizar un seguimiento de tu progreso a lo largo del tiempo.\n" +
            "\n" +
            "La pulsera también te mantiene informado al recibir notificaciones de tu teléfono inteligente. Ya sea que recibas un mensaje importante, una llamada o una alerta de calendario, podrás verlo directamente en la pantalla de tu pulsera, sin tener que sacar tu teléfono del bolsillo.\n" +
            "\n" +
            "Otra función interesante es su capacidad de control de música. Con tan solo unos toques en la pantalla, podrás reproducir, pausar o cambiar de canción mientras escuchas tus melodías favoritas.",
        price: "19.99$",
        link: "https://www.example.com",
        category: "moda"
    },
    {
        id: 7,
        image: "https://m.media-amazon.com/images/I/51BxClFzbxL._AC_UL800_FMwebp_QL65_.jpg",
        title: "Falda primavera 7",
        description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        price: "19.99$",
        link: "https://www.amazon.es/Plisada-Algod%C3%B3n-El%C3%A1stica-Pantal%C3%B3n-Interior/dp/B09XD8N8QZ/ref=sxin_16_sbv_search_btf?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.23361681-ceb7-4033-931c-516780e5590c%3Aamzn1.sym.23361681-ceb7-4033-931c-516780e5590c&cv_ct_cx=falda&keywords=falda&pd_rd_i=B09XD8N8QZ&pd_rd_r=4bfd12b2-f1c6-49d1-abe4-96ea12fe01c0&pd_rd_w=6n5WS&pd_rd_wg=yxxeq&pf_rd_p=23361681-ceb7-4033-931c-516780e5590c&pf_rd_r=JANNPNCW2AA40X076762&qid=1684350851&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-1-9131241a-a358-4619-a7b8-0f5a65d91d81",
        category: "moda"
    }
    // Agrega más productos aquí
];


var lastIndex = 3

// Obtener el contenedor de los productos
const productsContainer = document.getElementById("products-container");
const showMoreButton = document.getElementById("showMoreButton");


// Crear las cards dinámicamente
for (let i = 0; i <= lastIndex; i++) {
    // Crear los elementos de la card
    var card = document.createElement("div");
    card.className = "card mb-3";

    let prodDescription = truncateText(`${products[i].description}`);

    var cardContent = `
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${products[i].image}" class="card-img img-fluid" alt="..." style="object-fit: cover; height: 100%;">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${products[i].title}</h5>
          <p class="card-text">${prodDescription}</p>
          <p class="card-text"><small class="text-muted">${products[i].price}</small></p>
          <a class="btn btn-primary" onclick="showDetails(${products[i].id})" >Ver articulo</a>
        </div>
      </div>
    </div>
  `;

    // Agregar el contenido a la card
    card.innerHTML = cardContent;

    // Agregar la card al contenedor de productos
    productsContainer.appendChild(card);
}


function printProducts(products) {
    productsContainer.innerHTML = "";

    products.forEach(function (product) {
        // Crear los elementos de la card
        var card = document.createElement("div");
        card.className = "card mb-3";

        let prodDescription = truncateText(`${product.description}`);


        var cardContent = `
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${product.image}" class="card-img img-fluid" alt="..." style="object-fit: cover; height: 100%;">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${prodDescription}</p>
          <p class="card-text"><small class="text-muted">${product.price}</small></p>
          <a class="btn btn-primary"  onclick="showDetails(${product.id})">Ver en Amazon</a>
        </div>
      </div>
    </div>
  `;
        // Agregar el contenido a la card
        card.innerHTML = cardContent;
        // Agregar la card al contenedor de productos
        productsContainer.appendChild(card);
    });

}


//when click in lens
document.getElementById("lensForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let textFieldValue = document.getElementById("textField").value;
    printProducts(searchProducts(textFieldValue, "title"))
});


function searchProducts(keyword, field) {
    const results = [];
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        let productReference = product.category.toLowerCase();
        if (field === "title") {
            productReference = product.title.toLowerCase();
        }
        if (productReference.includes(keyword.toLowerCase())) {
            results.push(product);
        }
    }
    return results;
}

document.getElementById("modaLink").addEventListener("click", function (event) {
    event.preventDefault();
    printProducts(searchProducts("moda", "category"))
});

document.getElementById("hogarLink").addEventListener("click", function (event) {
    event.preventDefault();
    printProducts(searchProducts("hogar", "category"))
});

document.getElementById("tecnologiaLink").addEventListener("click", function (event) {
    event.preventDefault();
    printProducts(searchProducts("tecnologia", "category"))
});

// document.getElementById("showMoreButton").addEventListener("click", function (event) {
//     event.preventDefault();
//     addMoreProductsToTheCurrentList();
// });
//
// function addMoreProductsToTheCurrentList() {
//
//     console.log("lastIndex", lastIndex )
//     console.log("lastIndex", lastIndex )
//     console.log("lastIndex", lastIndex )
//
//
//
//
//     if (lastIndex < products.length-1) {
//         productsContainer.innerHTML = "";
//
//         for (let i = lastIndex; i <= lastIndex + 1; i++) {
//             let card = document.createElement("div");
//             card.className = "card mb-3";
//             let cardContent = `
//                 <div class="row no-gutters">
//                   <div class="col-md-4">
//                     <img src="${products[i].image}" class="card-img img-fluid" alt="..." style="object-fit: cover; height: 100%;">
//                   </div>
//                   <div class="col-md-8">
//                     <div class="card-body">
//                       <h5 class="card-title">${products[i].title}</h5>
//                       <p class="card-text">${products[i].description}</p>
//                       <p class="card-text"><small class="text-muted">${products[i].price}</small></p>
//                       <a class="btn btn-primary" href="${products[i].link}" target="_blank">Ver en Amazon</a>
//                     </div>
//                   </div>
//                 </div>
//               `;
//
//             card.innerHTML = cardContent;
//             productsContainer.appendChild(card);
//         }
//     }
//
//     lastIndex = lastIndex + 1
//
//     if (lastIndex >= products.length) {
//         showMoreButton.innerHTML = "Proximamente anadiremos mas contenido ;)"
//     }
//
//
// }


function showDetails(id) {
    productsContainer.innerHTML = "";
    let article = `    
                    <div class="col-12">
            <img src="${products[id].image}" class="article-image" alt="Imagen del producto">
        </div>
        <div class="col-12">
            <h3>${products[id].title}</h3>
        </div>
        <div class="col-12">
            <p>${products[id].description} </p>
        </div>
        <div class="col-12">
            <a href="${products[id].link}" class="btn btn-primary">Ver en Amazon</a>
        </div>
      `;

    productsContainer.innerHTML = article;

}

function truncateText(text) {
    if (text.length > 150) {
        return text.substring(0, 150) + "...";
    } else {
        return text;
    }
}