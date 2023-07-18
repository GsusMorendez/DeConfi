//MVP1: 1 having in a constant all the products, 2 have three categories, 3 searching working, 4 see all products, 5 see one product detail

//idea 1 create a file with the products and then a function to read the file and load the products into a constant
//idea 2 create a folder with all the image (or their bytes and load in image field this bytes or the direction or whatever is needed)


// Datos de los productos
const productsJson = [
    {
        id: 0,
        image: "https://m.media-amazon.com/images/I/91zDLB0akdL._AC_UL800_FMwebp_QL65_.jpg",
        title: "La Guerra Solar nº 01",
        description: [
            "Hace menos de un mes hemos adquirido el que es el primer libro (de lo que de momento es una colección de libros) de la última saga de la Herejía de Horus, conocida como Siege of Terra o el Asedio de Terra. Para los que no sepáis que es la Herejía de Horus es una saga de 54 libros que narran la base de la historia de lo que después será el universo de warhammer 40k, es de las historias más conocidas del universo de warhammer 40k pero conozco poca gente que, como nosotros, se halla leído hasta la última línea.",
            "En esta ocasión hemos pillado la opción de kindle porque al ser tantos libros no queríamos arruinarnos en el intento de conseguirlos todos y, ya que está esta opción tan económica pues no hemos tenido la menor duda. La compra es inmediata y da cero problemas, aseguraros de tener buena conexión y tendréis 0 problemas",
            "La historia en sí es similar a lo que nos tenían acostumbrados en los anteriores libros de la HH (Herejía de Horus), diferentes historias se cuentan al mismo tiempo y suelen confluir a medida que se avanza en el libro, puedes ver los conflictos desde diferentes perspectivas y como espectador gozaras de información que los protagonistas no tienen, aunque habrá sorpresas jejej. Como de costumbre la intriga en cada capítulo va creciendo y cuando está justo a punto de pasar algo gordo cambian a otra de las tramas de tal forma que estás deseando saltarte un capítulo para retornar a la historia. A mí es algo que me engancha, es como una serie que no puedes dejar de ver el siguiente capítulo.",
            "Pero bueno que me lio, la cosa es que después de 54 libros o 7 años los malos, (o los buenos si piensas que el Emperador es el mentiroso jeje) han llegado al sistema solar, los fieles les estaban esperando y empiezan una guerra de tierra quemada, no obstante todo parece ir demasiado bien hasta que pasa algo inesperado y de pronto....",
            "Nah no podemos desvelártelo, está chulo y si eres un frikazo como nosotros tendrás que pillarlo para saber todos los detalles y ver en que citación se queda la cosa después de este primer libro."
        ],
        price: "8,54€  Kindle/ 19,90€  tapa blanda",
        link: "https://www.amazon.es/Guerra-Solar-Warhammer-Horus-Heresy/dp/8445015087/ref=sr_1_1?__mk_es_ES=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=17NK1FVFW1LNH&amp;keywords=La+Guerra+Solar+n%25C2%25BA+02&amp;qid=1686484559&amp;sprefix=la+guerra+solar+n%25C2%25BA+02%252Caps%252C142&amp;sr=8-1&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=201679a94812c1489d2389e818419138&camp=3638&creative=24630",
        category: "libros"
    },
    {
        id: 1,
        image: "https://m.media-amazon.com/images/I/41r3gfH9OlL._AC_SX679_.jpg",
        title: "Dyson v8 absolute - Aspiradora Sin Cable",
        description: [
            "Hace un par de meses un compi del equipo se pilló este pedazo aspirador, la verdad es que nunca me había hecho ilusión probar una aspiradora hasta ahora!, mi madre debe estar muy contenta en este momento la verdad jajaja",
            "Al principio es un poco raro si estás acostumbrado a la aspiradora que tiene ruedas y vas arrastrándola tirando de la parte del tubo con forma de trompa, el peso en esta aspiradora está justo al lado de la mano lo que hace que el control sea mucho mejor, además la parte de las ruedas se mueve hacia todas las direcciones y la puedes manejar súper fácilmente",
            "Tiene tres opciones de potencia por lo que en función de la superficie en la que estés y el tipo de suciedad que desees aspirar puedes elegir uno u otro, lo bueno es que tiene un programa eco que para el día a día es suficiente y alarga la autonomía de la batería que ya de por sí es larga (40 minutacos).",
            "Además tiene diferentes cabezales por lo que si tienes mascotas y tienes el sofá, la cama o las alfombras llenas de pelos y demás son súper utiles, aunque te replantearas si quieres seguir dejando a las mascotas subir a la cama cuando veas la cantidad de pelos y suciedad que sale... jajajaja es broma todos queremos a nuestros peludos como uno más",
            "Ah y antes de que se me olvide, tiene una luz láser!!! Una luz láser repito!, con ellos verás la sombra de la suciedad en el suelo, yo pensaba que era una tontería, pero es cierto que funciona y se detecta mucho mejor la suciedad, alucino con el que se le ocurriera la idea, menudo genio jajaja le queremos en el equipo",
            "En cuanto al precio reconocemos que no es para todos, pero desde luego si te encanta la limpieza y quieres estar seguro de haber aspirado hasta el último ácaro, esta es tu herramienta!!"
        ],
        price: "459,00€",
        link: "https://www.amazon.es/Dyson-Absolute-Aspiradora-Funciones-Decibeles/dp/B073ZL5VDK/ref=sr_1_5?__mk_es_ES=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=2BNUQESDMMV3V&amp;keywords=Dyson+v8+absolute+-+Aspiradora+Sin+Cable&amp;qid=1686492715&amp;sprefix=dyson+v8+absolute+-+aspiradora+sin+cable%252Caps%252C311&amp;sr=8-5&amp;ufe=app_do%253Aamzn1.fos.5e544547-1f8e-4072-8c08-ed563e39fc7d&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=77c3df06f52abd3f271c8865449421d1&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 2,
        image: "https://m.media-amazon.com/images/I/51a4vtzWMQL._AC_SX679_.jpg",
        title: "Xiaomi Vacuum Cleaner Mi Robot Mop 2 Lite",
        description: [
            "En esta ocasión os traemos la aspiradora autónoma que tiene un nombre de más de 3 palabras muy fáciles de recordar: Xiaomi Vacuum Cleaner Mi Robot Mop 2 Lite. También conocida en el equipo como la Xigüi, no sé porque la verdad pero es pegadizo, y ahora todo nuestro entorno la llama así jeje",
            "Pues esta es una de las muchas aspiradoras autónomas que existen en el mercado en nuestro caso hemos pillado la barata porque tampoco necesitamos un poder de succión enorme ni ninguna característica rara que pueda ofrecer algo que doble en precio a nuestra amiguita, pero al menos hay 6 modelos más caros que este si vemos que se compra mucho haremos review en detalle comparándolo los diferentes modelos.",
            "la xigüi funciona bastante bien sobre todo si en general tienes la casa bien y lo que quieres es un repaso diario para el polvo y los ácaros que puedas tener o por si tienes mascotas y la quieres tener funcionando 24/7 para evitar la acumulación de polvo, mete un poquillo de ruido pero como todas, no he visto ninguna que sea silenciosa así que está en el mismo rango que las demás. se carga en su puesto de repostaje como todas las demás y se puede tirar 30-45 min fácilmente dale que te pego y cuando se queda baja de batería se va ella misma a su casita, se le puede programar para que salte ahora concretas e incluso hacer un mapa con la disposición de la casa y demás.. Todo eso es un superplus para los amantes del IoT",
            "En definitiva es un buen producto que le dará ese extra de limpieza a tu casa, eso si no le pongas obstáculos que se te engancha jajaja limpia guay no es muy cara y en un año ya la has rentabilizado, nosotros tenemos un par en casa y funcionan"
        ],
        price: "194,00€",
        link: "https://www.amazon.es/Xiaomi-Vacuum-Cleaner-BHR5217EU-42621/dp/B09R9XWJVS/ref=sr_1_2_mod_primary_new?__mk_es_ES=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=2LHSMGN6WNZDC&amp;keywords=Xiaomi+Vacuum+Cleaner+Mi+Robot+Mop+2+Lite&amp;qid=1686492601&amp;sprefix=xiaomi+vacuum+cleaner+mi+robot+mop+2+lite%252Caps%252C185&amp;sr=8-2&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=2ba1bf7f6587ed4e497ef1b0762d1b8c&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 3,
        image: "https://m.media-amazon.com/images/I/61V3Pr44ZSL._AC_SY879_.jpg",
        title: "Krups Nespresso Rojo Inissia, Máquina de café",
        description: [
            "La Krups Nespresso Rojo Inissia es una cafetera de cápsulas compacta y elegante que promete la preparación de un café de alta calidad en la comodidad de tu hogar. Esta cafetera cuenta con una bomba de alta presión de 19 bares, lo que garantiza una extracción óptima de los sabores y aromas del café.",
            "Además, su diseño compacto y ligero la hace fácilmente transportable y adaptable a cualquier espacio en la cocina. La Krups Nespresso Rojo Inissia también cuenta con un sistema de calentamiento rápido, lo que significa que en tan solo 25 segundos podrás disfrutar de una deliciosa taza de café recién hecho.",
            "Otra característica destacada de esta cafetera es su facilidad de uso. Con solo presionar un botón, podrás seleccionar la cantidad de café que deseas y la máquina se encargará del resto. Además, su bandeja de goteo es desmontable y lavable, lo que hace que su mantenimiento sea muy fácil y rápido.",
            "En cuanto a la calidad del café, la Krups Nespresso Rojo Inissia no decepciona. Gracias a su tecnología de cápsulas Nespresso, podrás disfrutar de una amplia variedad de sabores y aromas de café de alta calidad. Además, su sistema de extracción garantiza una crema suave y aterciopelada en cada taza.",
            'En resumen, la Krups Nespresso Rojo Inissia es una excelente opción para aquellos amantes del café que buscan una máquina compacta, fácil de usar y con una excelente calidad de extracción. Con una amplia variedad de cápsulas Nespresso disponibles, podrás disfrutar de una taza de café perfecta en cualquier momento del dí'
        ],
        price: "96,26€",
        link: "https://www.amazon.es/Krups-Nespresso-YY1531FD-Independiente-c%25C3%25A1psulas/dp/B00IRWKB70/ref=psdc_599392031_t3_B00G5YOVZA?&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=c4f240009fd2239eae54a7ddb0be1aeb&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 4,
        image: "https://m.media-amazon.com/images/I/81ifJ5F1paL._AC_SX679_PIbundle-8,TopRight,0,0_SH20_.jpg",
        title: "STARBUCKS Paquete Variado de Nespresso",
        description: [
            "El Krups Nespresso Rojo Inissia es una máquina de café compacta, fácil de usar y de alta calidad que produce café delicioso con una crema suave y aterciopelada. Su diseño elegante y moderno lo hace una adición atractiva a cualquier cocina. La máquina se calienta rápidamente y es fácil de limpiar, lo que la convierte en una excelente opción para quienes tienen una vida ocupada pero no quieren sacrificar la calidad del café.",
            "El paquete de variedades de Starbucks es una excelente opción para los amantes del café que desean una experiencia de café de alta calidad con una variedad de opciones deliciosas. El paquete contiene 8 sabores diferentes de cápsulas Nespresso, cada uno con su propia intensidad y perfil de sabor. Las cápsulas están hechas de aluminio para garantizar la frescura y son completamente reciclables a través del programa de reciclaje de Nespresso. En general, el paquete de variedades de Starbucks es una excelente opción para aquellos que desean experimentar con diferentes sabores de café sin comprometer la calidad o la frescura."
        ],
        price: "28,73€",
        link: "https://www.amazon.es/STARBUCKS-Nespresso-Variety-Tubos-C%25C3%25A1psulas/dp/B07X63LDTR/ref=sr_1_8?keywords=capsulas+nespresso&amp;qid=1686499444&amp;rdc=1&amp;sr=8-8&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=79a5d8ca4e46917919c92f2ef85a85ee&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 5,
        image: "https://m.media-amazon.com/images/I/61oJ8AQR8QL._AC_SX679_.jpg",
        title: "Incapto Café en Grano Natural",
        description: [
            "El Incapto Café en Grano Natural es una excelente opción para aquellos amantes del café que buscan una experiencia de alta calidad. Este café es un café de especialidad, lo que significa que proviene de una región geográfica específica y se cultiva bajo condiciones especiales que le otorgan un sabor único y distintivo.",
            "El café en grano arábica 100% es el ingrediente principal de este café, lo que garantiza una calidad superior en comparación con otros cafés que contienen una mezcla de granos. Además, el café en grano arábica es conocido por ser más suave y tener un sabor más dulce que el café en grano robusta.\n" +
            "El café en grano natural se tuesta de forma natural y artesanal, lo que le da un sabor más auténtico y una calidad superior en comparación con los cafés que se tuestan en grandes cantidades y con procesos industriales. Además, el café es un producto fresco, ya que se vende en un paquete de 1000 gramos, lo que garantiza que el café se mantenga fresco por más tiempo.",
            "Este café es ideal para aquellos que buscan un café con un sabor único y distintivo. Además, el paquete contiene 1000 gramos de café, lo que es suficiente para varias tazas de café. El café también es fácil de preparar, ya que solo se necesita moler los granos y preparar el café según la preferencia de cada persona.",
            "En resumen, el Incapto Café en Grano Natural es una excelente opción para aquellos que buscan un café de alta calidad, con un sabor único y distintivo, y una experiencia de café auténtica. Con su tueste natural y artesanal, su café en grano arábica 100% y su paquete de 1000 gramos, este café es una excelente opción para aquellos que buscan una experiencia de café superior."

        ],
        price: "32,95€",
        link: "https://www.amazon.es/STARBUCKS-Nespresso-Variety-Tubos-C%2525C3%2525A1psulas/dp/B07X63LDTR/ref=sr_1_8?keywords=capsulas+nespresso&amp;qid=1686499444&amp;rdc=1&amp;sr=8-8&amp;_encoding=UTF8&amp;tag=deconfi-21&amp;linkCode=ur2&amp;linkId=0da7263911f929ca5d7e20c92f8a1aae&amp;camp=3638&amp;creative=24630&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=212bf4c5a32fcefd44c99c8d6925d57f&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 6,
        image: "https://m.media-amazon.com/images/I/81j11VFES5L._AC_SX679_.jpg",
        title: "Duronic BL510 Mini batidora eléctrica personal",
        description: [
            "La Duronic BL510 es una mini batidora eléctrica personal que ofrece una gran capacidad de 570 ml y una potencia de 500 W, lo que la convierte en una excelente opción para aquellos que buscan preparar batidos y smoothies en casa o en el gimnasio. Con su diseño compacto y moderno en color negro, esta batidora es fácil de usar y transportar.",
            "La calidad de los materiales y la construcción de la Duronic BL510 son impresionantes. La botella está hecha de plástico resistente y duradero, mientras que la cuchilla de acero inoxidable de alta calidad es resistente y efectiva para mezclar los ingredientes. Además, la base de la batidora es robusta y estable, lo que minimiza las vibraciones y el ruido.",
            "La Duronic BL510 es muy fácil de usar. Simplemente coloca los ingredientes en la botella, coloca la cuchilla y enciende la batidora. El proceso de mezcla es rápido y eficiente, y los resultados son suaves y consistentes. Además, la botella es fácil de limpiar y se puede lavar en el lavavajillas.",
            "Esta mini batidora eléctrica es ideal para aquellos que buscan una forma rápida y conveniente de preparar batidos y smoothies en casa o en el gimnasio. Gracias a su potente motor y cuchilla de alta calidad, esta batidora es capaz de mezclar una amplia variedad de ingredientes de manera efectiva, lo que resulta en bebidas sabrosas y saludables.",
            "En resumen, la Duronic BL510 es una excelente opción para aquellos que buscan una mini batidora eléctrica personal de alta calidad y fácil de usar. Con su capacidad de 570 ml, potencia de 500 W y diseño moderno en color negro, esta batidora es perfecta para preparar batidos y smoothies en casa o en el gimnasio de manera rápida y conveniente.",
            "En cuanto a las desventajas, podemos mencionar que la botella no es térmica, lo que significa que no se puede mantener la bebida fría o caliente por mucho tiempo. Además, el precio puede ser un poco elevado en comparación con otras opciones en el mercado."
        ],
        price: "29,99€",
        link: "https://www.amazon.es/Duronic-BL510-el%25C3%25A9ctrica-capacidad-smoothies/dp/B0BG662VQ3/ref=sr_1_6?crid=1J4GKGQOLZHPN&amp;keywords=batidora+de+batidos&amp;qid=1686500442&amp;sprefix=batidora+de+batidos%252Caps%252C134&amp;sr=8-6&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=01bbc8b6b6cb1016480189dfe21ab264&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 7,
        image: "https://m.media-amazon.com/images/I/41Rv2OeyKaL._SX312_BO1,204,203,200_.jpg",
        title: "El guardián entre el centeno",
        description: [
            "El guardián entre el centeno de J.D. Salinger es una obra maestra de la literatura estadounidense que cuenta la historia de Holden Caulfield, un adolescente que ha sido expulsado de su escuela. La novela se desarrolla en la ciudad de Nueva York, donde Holden se encuentra vagando por las calles y teniendo encuentros con diferentes personajes. A través de su narración en primera persona, el autor nos muestra los pensamientos y sentimientos de un adolescente que se siente desconectado del mundo que lo rodea.",
            "Uno de los aspectos más destacados de la novela es la habilidad de Salinger para capturar la voz y el tono de un adolescente. Holden es un personaje complejo que se debate entre la inocencia y la madurez, y el autor logra mostrar su evolución a lo largo de la historia. A través de su narración, podemos ver cómo Holden lucha con la idea de crecer y enfrentar la realidad del mundo adulto.",
            "Otro aspecto importante de la novela es su crítica a la sociedad y la cultura de la época. Salinger utiliza a Holden como un portavoz de su descontento con la hipocresía y la superficialidad de la sociedad estadounidense. La novela es una crítica mordaz a las instituciones sociales, incluyendo la educación, la religión y la familia.",
            "En el libro, Salinger también explora temas como la soledad, la alienación y la identidad. Holden se siente desconectado de sus compañeros y de la sociedad en general, y su búsqueda de identidad es un tema recurrente en la novela. A través de su narración, el autor nos muestra cómo la soledad y la alienación pueden afectar a un adolescente y cómo la búsqueda de identidad puede ser un proceso doloroso.",
            "La novela también cuenta con personajes secundarios bien desarrollados que tienen un impacto en la vida de Holden. Uno de los personajes más importantes es su hermana Phoebe, a quien Holden admira y protege. La relación de Holden con Phoebe es una de las partes más conmovedoras de la novela y muestra una faceta más suave del personaje.",
            "En conclusión, El guardián entre el centeno es una novela que ha dejado una huella duradera en la literatura estadounidense y en la cultura popular en general. Su protagonista, Holden Caulfield, es un personaje icónico que ha resonado con generaciones de adolescentes. La novela es una crítica a la sociedad y la cultura de la época, y explora temas como la soledad, la alienación y la identidad. La habilidad de Salinger para capturar la voz y el tono de un adolescente es asombrosa y hace que la novela sea una lectura obligatoria para cualquier persona interesada en la literatura contemporánea."
        ],
        price: "29,03€ tapa dura/ 12,90€ tapa blanda",
        link: "https://www.amazon.es/guardi%25C3%25A1n-entre-centeno-Libro-Bolsillo/dp/842066085X/ref=sr_1_2?keywords=el+guardian+entre+el+centeno&amp;qid=1686509096&amp;sprefix=el+guardian+en%252Caps%252C202&amp;sr=8-2&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=0e5194784b1b39d8b1655303b090b2cf&camp=3638&creative=24630",
        category: "libros"
    },
    {
        id: 8,
        image: "https://m.media-amazon.com/images/I/41g2CgOwwGL._SX329_BO1,204,203,200_.jpg",
        title: "Los escarabajos vuelan al atardecer",
        description: [
            "Los escarabajos vuelan al atardecer, de la escritora sueca María Gripe, es una obra maestra de la literatura infantil y juvenil que presenta un enigma fantástico que no se puede dejar de leer. La novela cuenta la historia de tres amigos que han sido contratados para cuidar las plantas de una casa deshabitada durante el verano, pero pronto descubrirán que algo extraño está sucediendo en la casa.",
            "La novela está llena de misterio y fantasía, y la autora tiene una habilidad sorprendente para crear un ambiente inquietante y lleno de suspense. Los personajes están bien desarrollados y la trama está llena de giros inesperados que mantienen al lector pegado al libro.",
            "Pero hay mucho más que eso en Los escarabajos vuelan al atardecer. La novela también es una historia de amor a la ciencia y al pasado. A través de los personajes, la autora explora la importancia de la ciencia y la tecnología en nuestra sociedad, y cómo el conocimiento del pasado puede ayudarnos a entender mejor el presente.",
            "La prosa de María Gripe es poética y evocadora, y su habilidad para crear imágenes vívidas en la mente del lector es impresionante. Los escarabajos vuelan al atardecer es una novela que se lee de un tirón, pero también es una obra que se puede disfrutar a lo largo del tiempo, ya que hay muchas capas en ella que invitan a una lectura más profunda.",
            "En resumen, Los escarabajos vuelan al atardecer es una obra maestra de la literatura infantil y juvenil que combina misterio, fantasía y una reflexión profunda sobre la ciencia y el pasado. La prosa de María Gripe es poética y evocadora, y su habilidad para crear un ambiente inquietante y lleno de suspense es sorprendente. Si buscas un libro que te mantenga pegado a sus páginas y te haga reflexionar al mismo tiempo, Los escarabajos vuelan al atardecer es una excelente opción."
        ],
        price: "9,95€ tapa dura/ 11,97€ tapa blanda",
        link: "https://www.amazon.es/escarabajos-vuelan-atardecer-Gran-Angular/dp/8491820574/ref=sr_1_1?__mk_es_ES=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=NGG5KXBNWKUZ&amp;keywords=Los+escarabajos+vuelan+al+atardecer%252C+de+Mar%25C3%25ADa+Gripe&amp;qid=1686501208&amp;sprefix=los+escarabajos+vuelan+al+atardecer+de+mar%25C3%25ADa+gripe%252Caps%252C281&amp;sr=8-1&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=41b4b898a26ca8670cb542799ca90f80&camp=3638&creative=24630",
        category: "libros"
    },
    {
        id: 9,
        image: "https://m.media-amazon.com/images/I/81CsXtUf9sL._AC_UL800_FMwebp_QL65_.jpg",
        title: "Lazarillo de Tormes",
        description: [
            "El Lazarillo de Tormes es una obra maestra de la literatura española que ha resistido el paso del tiempo y hoy en día sigue siendo una obra fundamental en el canon literario. Publicada en 1554, esta novela picaresca es un relato autobiográfico que narra la vida de Lázaro de Tormes, un joven que se ve obligado a sobrevivir en un mundo hostil y lleno de injusticias.",
            "El Lazarillo de Tormes es una obra única en su género. A lo largo de sus páginas, el autor nos muestra la vida de un pícaro en la España del siglo XVI, un personaje que se mueve entre la marginación y la supervivencia, entre la picaresca y la crítica social. La novela es una sátira mordaz de la sociedad española de la época, una sociedad que se caracterizaba por su hipocresía y su corrupción.",
            "Uno de los aspectos más destacados del Lazarillo de Tormes es su estilo. El autor utiliza un lenguaje sencillo y directo que hace que la novela sea muy accesible para el lector moderno. Además, la obra está escrita en primera persona, lo que nos permite entrar en la mente del protagonista y comprender sus motivaciones y sus sentimientos.",
            "Otro aspecto importante del Lazarillo de Tormes es su estructura. La novela se divide en siete tratados, cada uno de los cuales narra una etapa diferente en la vida de Lázaro. Este formato permite al autor explorar diferentes aspectos de la sociedad española de la época y mostrar cómo el protagonista se adapta a cada situación.",
            "El Lazarillo de Tormes es también una obra cargada de simbolismo. El personaje de Lázaro representa la figura del pícaro, un personaje recurrente en la literatura española que simboliza la marginalidad y la supervivencia en un mundo hostil. Además, la novela está llena de referencias religiosas, que el autor utiliza para criticar la hipocresía de la Iglesia y de la sociedad en general.",
            "En definitiva, el Lazarillo de Tormes es una obra imprescindible para cualquier amante de la literatura. A través de la vida de su protagonista, el autor nos muestra la España del siglo XVI y nos hace reflexionar sobre temas universales como la justicia, la moralidad y la supervivencia en un mundo hostil. Una obra que seguirá inspirando a generaciones de lectores en el futuro."
        ],
        price: "4,27€ libro/ 23,39€ tapa dura",
        link: "https://www.amazon.es/Lazarillo-tormes-Anonimo/dp/8415089201/ref=sr_1_9?keywords=el+lazarillo+de+tormes&amp;qid=1686501931&amp;sprefix=el+lazaril%252Caps%252C252&amp;sr=8-9&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=23127004ed34f91176041a6f22f5ee3a&camp=3638&creative=24630",
        category: "libros"
    },
    {
        id: 10,
        image: "https://m.media-amazon.com/images/I/51+gY5uNrxL._SY344_BO1,204,203,200_.jpg",
        title: "Matilda: Roald Dahl",
        description: [
            "En su novela Matilda, Roald Dahl nos presenta a una niña con una inteligencia excepcional y una gran sensibilidad. A pesar de tener unos padres negligentes y una directora de colegio cruel, Matilda no se deja vencer por la adversidad.",
            "La historia comienza con Matilda descubriendo su amor por los libros y la lectura en la biblioteca pública de su ciudad. A medida que avanza la trama, descubre que tiene habilidades telequinéticas, lo que le permite enfrentar a los adultos que la rodean.",
            "El libro destaca la importancia de la educación y el aprendizaje, incluso en un entorno donde las expectativas son bajas. Matilda demuestra que el conocimiento puede ser una herramienta poderosa para enfrentar la injusticia.",
            "Además de ser una historia sobre la superación personal, Matilda también es una crítica a la educación tradicional y al autoritarismo. La señorita Trunchbull, la directora del colegio, es un ejemplo de lo que puede salir mal cuando se abusa del poder.",
            "A pesar de que la historia está dirigida a un público infantil, las reflexiones y los temas que aborda son relevantes para cualquier edad. La novela habla sobre la importancia de ser fiel a uno mismo y de no dejar que la opinión de los demás nos defina.",
            "El estilo de escritura de Roald Dahl es ingenioso y lleno de humor negro, lo que hace que la lectura sea agradable y entretenida. La novela también cuenta con ilustraciones de Quentin Blake, que complementan la trama y añaden un toque de humor visual.",
            "Matilda es un personaje con el que es fácil identificarse. Es una niña que, a pesar de ser diferente, es capaz de encontrar su lugar en el mundo. Su historia es una invitación a aceptar nuestras diferencias y a valorar la singularidad de cada persona.",
            "En definitiva, Matilda es una novela que combina humor, fantasía y una profunda reflexión sobre la educación y el poder. Es un libro que ha logrado trascender generaciones y que sigue siendo relevante en la actualidad. Una obra maestra de Roald Dahl que merece ser leída por todos los amantes de la literatura infantil y juvenil."
        ],
        price: "6,99€ kindle/ 13,50€ tapa dura/ 6,01€ tapa blanda/ 10,37€ CD",
        link: "https://www.amazon.es/Matilda-Dahl-Fiction-Roald/dp/0141365463/ref=sr_1_1?__mk_es_ES=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=2HW1A1JNVZ1HU&amp;keywords=7.+matilda+de+roald+dahl&amp;qid=1686502072&amp;sprefix=7.+matilda+de+roald+dahl%252Caps%252C138&amp;sr=8-1&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=28521c462571e42198054b335447da0f&camp=3638&creative=24630",
        category: "libros"
    },
    {
        id: 11,
        image: "https://m.media-amazon.com/images/I/714iK1vHyGL._AC_SY879_.jpg",
        title: "Nada - Vintage Editions: Carmen Laforet",
        description: [
            "Nada es una novela publicada en 1944 por Carmen Laforet, que ganó el premio Nadal y se convirtió en una de las principales voces de posguerra en España. Con solo 23 años, Laforet creó una obra existencial y triste que examina la realidad de la España de la posguerra.",
            "La novela se inspira en las vivencias de Laforet en Barcelona, donde llegó como una recién llegada y tuvo que enfrentar una realidad llena de miseria, violencia y precariedad. La novela es una radiografía de la tenebrosa posguerra española",
            "El personaje principal de la novela es Andrea, quien se enfrenta a la realidad de la España de la posguerra con sus expectativas frustradas. Laforet profundiza en sus sentimientos más íntimos y sus disquisiciones sentimentales son atemporales.",
            "La novela explora temas como la supervivencia, la pobreza, la violencia, la soledad, el desarraigo y la búsqueda de identidad. Laforét utiliza la historia de Andrea para explorar estos temas y crear una obra profundamente humana.",
            "Laforét utiliza un estilo literario introspectivo y poético, que refleja la complejidad de los sentimientos y pensamientos de los personajes. Su prosa es rica y detallada, lo que permite al lector sumergirse en la historia.El mensaje principal de la novela es que la vida puede ser difícil, pero que es posible encontrar la fuerza para luchar y sobrevivir. Andrea representa a todos los que lucharon por sobrevivir en una época difícil en España y su historia es un testimonio de la resistencia humana",
            "El mensaje principal de la novela es que la vida puede ser difícil, pero que es posible encontrar la fuerza para luchar y sobrevivir. Andrea representa a todos los que lucharon por sobrevivir en una época difícil en España y su historia es un testimonio de la resistencia humana",
            "Nada es una novela que ha resistido el paso del tiempo y sigue siendo relevante hoy en día. Es una obra que ha inspirado a muchos escritores y lectores, y ha sido objeto de numerosos análisis y críticas literarias",
            "En resumen, Nada de Carmen Laforet es una obra maestra de la literatura española, que explora temas universales como la supervivencia, la pobreza y la búsqueda de identidad. Laforét utiliza un estilo introspectivo y poético para contar la historia de Andrea y su lucha por sobrevivir en la España de la posguerra. La novela ha resistido el paso del tiempo y sigue siendo relevante hoy en día."
        ],
        price: "12,25€",
        link: "https://www.amazon.es/Nada-Vintage-Editions-Carmen-Laforet/dp/1784876216/ref=sr_1_3?__mk_es_ES=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;crid=14YZXLZM91647&amp;keywords=6.+nada+de+carmen+laforet&amp;qid=1686502442&amp;sprefix=6.+nada+de+carmen+laforet%252Caps%252C252&amp;sr=8-3&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=b8e4d414f3bacfef54b03e1fc0891bda&camp=3638&creative=24630",
        category: "libros"
    },
    {
        id: 12,
        image: "https://m.media-amazon.com/images/I/81dkQOTn-5L._AC_UY879_.jpg",
        title: "AUSELILY Vestido de Playa Informal con Cuello en V y Correa de Espagueti de Verano para Mujer con Bolsillo",
        description: [
            "El vestido AUSELILY es una opción perfecta para un día de verano casual o para una noche de fiesta en la playa. Con su diseño informal y su cómodo cuello en V, este vestido es una excelente elección para cualquier ocasión.",
            "Este vestido está hecho con materiales de alta calidad que te mantendrán fresca y cómoda durante todo el día. Además, cuenta con un diseño de correa de espagueti que le da un aspecto femenino y elegante.",
            "El vestido AUSELILY viene con dos bolsillos laterales, lo que lo hace aún más práctico y funcional. Ideal para guardar tus llaves, teléfono o cualquier otra cosa que necesites llevar contigo.",
            "Con su diseño sencillo y elegante, este vestido es una excelente opción para combinar con cualquier tipo de calzado, desde sandalias hasta botas de verano. Además, se puede combinar con accesorios como collares, pulseras y pendientes para crear un look más sofisticado",
            "El vestido AUSELILY está disponible en varios colores y tamaños, lo que lo hace ideal para cualquier tipo de cuerpo y estilo personal. Además, su diseño atemporal lo convierte en una excelente opción para cualquier temporada.",
            "Este vestido es fácil de cuidar y mantener. Solo necesitas lavarlo a mano o en la lavadora con agua fría y dejarlo secar al aire libre. Además, su tela no se arruga fácilmente, lo que lo hace ideal para viajar.",
            "En resumen, el vestido AUSELILY es una excelente opción para cualquier mujer que busque un vestido cómodo, elegante y práctico para el verano. Con su diseño sencillo y atemporal, este vestido es una excelente inversión para cualquier guardarropa de verano."
        ],
        price: "21,24€",
        link: "https://www.amazon.es/AUSELILY-Vestidos-Tirantes-Decorativo-Bolsillos/dp/B09M2GXS77/ref=zg_bs_3074074031_sccl_2/262-6112303-3743124?psc=1&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=c2c4024672fc062da3357d09b20fe6b3&camp=3638&creative=24630",
        category: "moda"
    },
    {
        id: 13,
        image: "https://m.media-amazon.com/images/I/51DTZqabgzL._AC_UY879_.jpg",
        title: "Bbonlinedress Vestido Corto Mujer Retro Años 50 Vintage Escote",
        description: [
            "El vestido Bbonlinedress corto para mujer es una elegante opción para las amantes de la moda vintage. Con su estilo retro de los años 50 y escote vintage, este vestido es una opción sofisticada para cualquier ocasión.",
            "El diseño del vestido Bbonlinedress es una mezcla perfecta de estilo vintage y elegancia moderna. El escote vintage aporta un toque de glamour retro, mientras que la longitud corta del vestido lo hace moderno y fresco.",
            "El vestido está hecho con materiales de alta calidad, lo que lo hace duradero y cómodo de llevar. La tela es suave y ligera, lo que significa que el vestido es perfecto para los días de verano.",
            "El escote vintage es uno de los aspectos más destacados de este vestido. Es una característica única que añade un toque de elegancia y sofisticación a cualquier atuendo.",
            "La longitud corta del vestido Bbonlinedress es perfecta para cualquier ocasión, desde una cena informal hasta una boda. Es una opción elegante y moderna que aporta un toque de estilo vintage a cualquier evento.",
            "El vestido también cuenta con dos bolsillos laterales prácticos, lo que lo hace aún más funcional. Es perfecto para llevar tus pertenencias esenciales contigo mientras te mueves con estilo.",
            "El vestido Bbonlinedress está disponible en una variedad de colores y tallas, lo que lo hace adecuado para cualquier cuerpo y estilo personal. Puedes elegir entre una amplia gama de colores para encontrar uno que se adapte a tus gustos y necesidades.",
            "El vestido es fácil de cuidar y mantener, lo que lo hace ideal para viajar. Puedes lavarlo a máquina y colgarlo para secar, lo que significa que siempre estará listo para usar.",
            "En resumen, el vestido Bbonlinedress corto para mujer retro de los años 50 con escote vintage es una elegante elección para cualquier mujer que busque un estilo vintage y elegante. Con su diseño moderno, materiales de alta calidad, escote vintage, longitud corta, prácticos bolsillos laterales, variedad de colores y tallas disponibles, y fácil cuidado y mantenimiento, este vestido es una opción práctica y elegante para cualquier ocasión."
        ],
        price: "42,99€",
        link: "https://www.amazon.es/Bbonlinedress-Vestido-Vintage-Burgundy-XS/dp/B07CN7NPRS/ref=zg_bs_3074074031_sccl_11/262-6112303-3743124?psc=1&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=09cd17e97e01384aa66d4255fb7c5e7b&camp=3638&creative=24630",
        category: "moda"
    },
    {
        id: 14,
        image: "https://m.media-amazon.com/images/I/81DNXt8giIL._AC_UY879_.jpg",
        title: "Mujeres Elástico Bohemio Larga Falda Playa Maxi Faldas de Verano",
        description: [
            "La Falda Elástica Bohemia de Verano es una prenda ideal para el clima cálido. Con una longitud larga y un diseño bohemio, esta falda es perfecta para una escapada a la playa o para disfrutar del verano en la ciudad.",
            "La Falda Elástica Bohemia de Verano es un diseño atemporal que nunca pasa de moda. Con un elástico en la cintura, esta falda se adapta a una amplia gama de tallas y ofrece una comodidad excepcional.",
            "Fabricado con materiales de alta calidad, la Falda Elástica Bohemia de Verano es resistente y duradera. Además, es suave al tacto y se siente ligera y fresca en la piel.",
            "Esta falda es extremadamente versátil y se puede combinar con una amplia gama de tops y accesorios. Ya sea que busques un look bohemio o simplemente quieras algo cómodo para llevar en un día caluroso, esta falda es una excelente elección.",
            "La Falda Elástica Bohemia de Verano es adecuada para una amplia gama de ocasiones. Desde una tarde en la playa hasta una cena informal con amigos, esta falda es una gran opción.",
            "Cuidar de esta falda es fácil. Simplemente lávala a mano o en la lavadora con agua fría y déjala secar al aire libre.",
            "La Falda Elástica Bohemia de Verano está disponible en una amplia gama de tallas para adaptarse a cualquier cuerpo.",
            "En resumen, la Falda Elástica Bohemia de Verano es una prenda elegante y cómoda que es perfecta para el verano. Con su diseño bohemio, materiales de alta calidad y versatilidad, esta falda es una excelente elección para cualquier mujer que busque un estilo único y cómodo."
        ],
        price: "29,98€",
        link: "https://www.amazon.es/Impresi%25C3%25B3n-Estilo-Bohemio-Mujeres-Ocasional/dp/B07J37267C/ref=sxin_16_slsr_d_i_fs4star_fa_1_B07J37267C?__mk_es_ES=%25C3%2585M%25C3%2585%25C5%25BD%25C3%2595%25C3%2591&amp;content-id=amzn1.sym.bc971328-4632-4459-9405-7857b4cf1e16%253Aamzn1.sym.bc971328-4632-4459-9405-7857b4cf1e16&amp;crid=9G6ETS6KBPDK&amp;cv_ct_cx=faldas&amp;keywords=faldas&amp;pd_rd_i=B07J37267C&amp;pd_rd_r=7e332075-c93a-49e8-8412-1752eaca7841&amp;pd_rd_w=jIXId&amp;pd_rd_wg=E5Zpi&amp;pf_rd_p=bc971328-4632-4459-9405-7857b4cf1e16&amp;pf_rd_r=TC93GVSG716S1THV2YFE&amp;qid=1686503451&amp;sprefix=faldas%252Caps%252C166&amp;sr=1-2-41e0d225-3819-4755-898e-7f0f48633b47&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=02122e58f3e722193f2173a739d76866&camp=3638&creative=24630",
        category: "moda"
    },
    {
        id: 15,
        image: "https://m.media-amazon.com/images/I/81OBjqVEGwL._AC_SX679_.jpg",
        title: "Apple 2023 MacBook Pro con Chip M2 Pro con CPU de Doce núcleos y GPU de diecinueve núcleos: Liquid Retina XDR de 16,2 Pulgadas, 16GB de Memoria unificada, 512 GB de Almacenamiento SSD, Gris Espacial",
        description: [
            "El MacBook Pro 2023 de Apple es una máquina excepcional que redefine la experiencia de usuario en cuanto a portátiles se refiere. El modelo cuenta con el nuevo Chip M2 Pro, que incluye una CPU de doce núcleos y una GPU de diecinueve núcleos, lo que proporciona una velocidad de procesamiento increíble y una experiencia de juego y edición de video sin igual.",
            "La pantalla Liquid Retina XDR de 16,2 pulgadas es una de las mejores del mercado, ofreciendo colores vibrantes y un alto contraste. La resolución de 3456 x 2234 píxeles hace que el contenido sea nítido y claro, lo que la convierte en una opción ideal para los creativos y los profesionales que trabajan con gráficos y videos de alta calidad.",
            "La memoria unificada de 16GB proporciona un rendimiento excepcional y una capacidad multitarea sin precedentes, lo que permite que el usuario pueda ejecutar varias aplicaciones sin ralentizaciones. Además, el almacenamiento SSD de 512GB asegura que el usuario tenga suficiente espacio para almacenar sus archivos y documentos.",
            "En cuanto al diseño, el MacBook Pro 2023 en gris espacial es elegante y moderno, con bordes redondeados y una carcasa delgada. Es un modelo que se adapta perfectamente a cualquier entorno de trabajo, ya sea en una oficina, en casa o en un café.",
            "Otra característica destacable del MacBook Pro 2023 es la calidad de sus altavoces, que ofrecen un sonido envolvente y de alta fidelidad, lo que mejora la experiencia del usuario al ver películas y escuchar música.",
            "El teclado retroiluminado del MacBook Pro es una de las mejores características del dispositivo, lo que lo hace ideal para trabajar en condiciones de poca luz. Además, el trackpad es suave y altamente sensible, lo que hace que la navegación sea fácil y sin esfuerzo.",
            "En resumen, el MacBook Pro 2023 de Apple con Chip M2 Pro es una máquina de alta gama que ofrece un rendimiento excepcional para profesionales y usuarios avanzados. Con su potente CPU y GPU, su pantalla impresionante, su memoria unificada y su almacenamiento SSD, es una opción ideal para aquellos que necesitan un portátil potente y versátil. Con su diseño elegante y moderno, es una adición atractiva a cualquier entorno de trabajo."
        ],
        price: "3.099,00€",
        link: "https://www.amazon.es/Apple-2023-MacBook-n%25C3%25BAcleos-diecinueve/dp/B0BSJ37QQ4/ref=sr_1_7?crid=R9GSKIHSKVF&amp;keywords=macbook+pro+i9&amp;qid=1686504451&amp;sprefix=macbook+pro+i%252Caps%252C110&amp;sr=8-7&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=6f41c486bcb8b641e951f0132cbff7c4&camp=3638&creative=24630",
        category: "tecnologia"
    },
    {
        id: 16,
        image: "https://m.media-amazon.com/images/I/61BlEJTAuJL._AC_SX679_.jpg",
        title: "Congelador vertical independiente CHiQ, 145L de capacidad, congelación rápida, termostato ajustable, silencioso, puerta reversible, negro, clasificación energética E",
        description: [
            "Si estás buscando un congelador vertical independiente con una capacidad razonable, el CHiQ de 145L es una buena opción. Este congelador tiene la capacidad suficiente para guardar alimentos congelados para una familia pequeña o para alguien que vive solo. Además, su tamaño compacto lo hace ideal para apartamentos o casas con espacio limitado.",
            "La congelación rápida es una característica importante en cualquier congelador. El CHiQ tiene la capacidad de congelar rápidamente los alimentos, lo que es ideal para mantener la frescura y la calidad de los alimentos congelados. También es útil cuando necesitas congelar alimentos rápidamente para evitar que se echen a perder.",
            "El termostato ajustable es una característica clave que te permite ajustar la temperatura del congelador. Esto te permite mantener tus alimentos congelados a la temperatura adecuada y evitar que se descongelen o se congelen en exceso. Además, si necesitas ajustar la temperatura para adaptarse a tus necesidades específicas, puedes hacerlo fácilmente.",
            "El CHiQ es un congelador silencioso, lo que es ideal si tienes un espacio de vida pequeño o si necesitas tenerlo cerca de las áreas de vida. Este congelador no emitirá un ruido fuerte que pueda molestar a las personas en la habitación o en la casa. Además, su funcionamiento silencioso es ideal para aquellos que prefieren un entorno tranquilo.",
            "La puerta reversible es una característica útil que te permite colocar el congelador en cualquier lugar de tu casa. Puedes abrir la puerta desde la derecha o la izquierda, lo que te permite adaptar el congelador a tus necesidades específicas. Además, si cambias la ubicación del congelador en el futuro, podrás cambiar la dirección de la puerta sin problemas.",
            "El CHiQ viene en un elegante color negro que se adapta a cualquier decoración de la casa. Este congelador es una adición elegante a cualquier hogar y su diseño moderno y elegante se adaptará a cualquier estilo de decoración. Además, el color negro es fácil de mantener y no se ensucia fácilmente.",
            "El CHiQ tiene una clasificación energética E, lo que significa que es un congelador eficiente en términos de energía. Esto es importante porque ayuda a reducir tus facturas de energía y a minimizar tu impacto en el medio ambiente. Si buscas un congelador que sea eficiente en términos de energía, el CHiQ es una buena opción.",
            "En resumen, el CHiQ es un congelador vertical independiente con una capacidad de 145L, congelación rápida, termostato ajustable, silencioso, puerta reversible, clasificación energética E y un diseño elegante en color negro. Es una buena opción para aquellos que buscan un congelador compacto que sea eficiente en términos de energía y que se adapte a cualquier estilo de decoración."
        ],
        price: "359,99€",
        link: "https://www.amazon.es/dp/B0C28CD3BR?ref_=cm_sw_r_apan_dp_5S88N0S68KV7XB7V9P3S&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=b8ac56d78bd17072360cc80e9bea912f&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 17,
        image: "https://m.media-amazon.com/images/I/71uX2KKC0BL._AC_SX679_.jpg",
        title: "Ariel Original Todo En Uno Pods, Detergente Lavadora Liquido en Capsulas/Pastillas, 43 Lavados, Jabon Con Mayor Eficacia en la Limpieza Ropa en Frio",
        description: [
            "El detergente Ariel Original Todo En Uno Pods es una excelente opción para aquellos que buscan una forma fácil y efectiva de lavar la ropa. Con 43 lavados en cada paquete, este detergente es una gran opción para hogares con una cantidad moderada de ropa.",
            "Una de las mejores características de este detergente es que viene en cápsulas o pastillas, lo que significa que no hay necesidad de medir o verter el detergente. Simplemente coloque una cápsula en la lavadora y listo. Esto hace que el proceso de lavado de la ropa sea mucho más fácil y rápido.",
            "Otra gran característica del detergente Ariel Original Todo En Uno Pods es que se puede utilizar en agua fría. Esto significa que no solo ahorrará energía al no tener que calentar el agua, sino que también mantendrá la ropa en mejores condiciones durante más tiempo. Además, este detergente es muy eficaz en la eliminación de manchas, incluso en agua fría.",
            "Otra gran ventaja de este detergente es que es muy eficaz en la eliminación de olores. Si tiene ropa con un olor persistente, como ropa deportiva o ropa de trabajo, este detergente puede ayudar a eliminar esos olores, dejando la ropa fresca y limpia.",
            "El detergente Ariel Original Todo En Uno Pods también es muy suave con la ropa. No contiene blanqueadores agresivos ni otros ingredientes que puedan dañar la ropa. Esto significa que puede utilizar este detergente con confianza en cualquier tipo de tela, desde algodón hasta seda",
            "El paquete de 43 lavados también es muy conveniente. No tendrá que preocuparse por comprar detergente con tanta frecuencia y siempre tendrá suficiente detergente en mano para lavar su ropa.",
            "En general, el detergente Ariel Original Todo En Uno Pods es una excelente opción para aquellos que buscan una forma fácil y eficaz de lavar la ropa. Con su capacidad para limpiar en agua fría, eliminar manchas y olores, y ser suave con la ropa, este detergente es una gran opción para cualquier hogar. Además, su conveniente paquete de 43 lavados significa que tendrá suficiente detergente para un buen tiempo."
        ],
        price: "16,38€",
        link: "https://www.amazon.es/gp/product/B0BR8C69JR/ref=pd_alm_fs_merch_1_2_fs_dsk_na_mw_img_ES14748?fpw=alm&amp;almBrandId=QW1hem9uIEZyZXNo&amp;pf_rd_r=P1VWQH6WW9SE66DYA7PW&amp;pf_rd_p=c5e08dc1-5c7d-47ba-9f59-a2d3df90730a&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=8861913bbdc200c47260cbfdb9bfbaef&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 18,
        image: "https://m.media-amazon.com/images/I/71uPVE8XqIL._AC_SY879_.jpg",
        title: "Nestlé Aquarel - Botella Agua Mineral Natural - 5 L",
        description: [
            "Nestlé Aquarel es sinónimo de calidad y pureza en cada botella de agua mineral natural de 5 litros. Su presentación en una botella de plástico resistente, práctica y reutilizable la convierte en una opción ideal para satisfacer las necesidades de hidratación diaria en el hogar, la oficina o durante actividades al aire libre.",
            "Lo que hace que Nestlé Aquarel destaque entre otras marcas de agua mineral es su origen. Proviene de fuentes naturales en lugares remotos y protegidos, garantizando así su pureza y frescura inigualables. Cada sorbo es una experiencia refrescante que te conecta con la naturaleza y te brinda una hidratación confiable y saludable.",
            "La botella de 5 litros de Nestlé Aquarel ofrece una gran cantidad de agua para compartir y disfrutar en familia o con amigos. Su diseño ergonómico facilita su manejo y vertido sin derrames, mientras que su tapa de seguridad garantiza la integridad del agua y la conservación de su calidad durante más tiempo.",
            "Una de las ventajas notables de Nestlé Aquarel es su sabor puro y cristalino. No presenta sabores artificiales ni añadidos, lo que permite disfrutar del auténtico sabor del agua mineral natural en cada sorbo. Es una opción ideal para aquellos que valoran la frescura y la autenticidad en sus bebidas.",
            "La marca Nestlé se distingue por su compromiso con la sostenibilidad ambiental. La botella de plástico de Nestlé Aquarel está hecha de material reciclable y su producción está orientada a minimizar el impacto en el medio ambiente. De esta manera, puedes hidratarte con tranquilidad sabiendo que estás eligiendo una opción eco-friendly.",
            "La comodidad es una característica esencial de Nestlé Aquarel. Su formato de 5 litros garantiza que no te quedarás sin agua en mucho tiempo, evitando la necesidad de comprar botellas más pequeñas con mayor frecuencia. Además, su fácil manejo y almacenamiento la convierten en una elección práctica y conveniente para el consumo diario.",
            "Nestlé Aquarel es una opción segura y confiable, ya que cumple con los más altos estándares de calidad y seguridad alimentaria. La marca tiene un riguroso proceso de control de calidad desde la fuente hasta la botella, asegurando que cada botella de agua mineral natural esté libre de impurezas y sea segura para su consumo.",
            "En resumen, Nestlé Aquarel es la elección perfecta para aquellos que buscan una hidratación natural y confiable. Su agua mineral de calidad, su sabor puro y su enfoque en la sostenibilidad ambiental la convierten en una opción superior. Disfruta de cada sorbo y siéntete bien sabiendo que estás cuidando tu salud y el planeta al elegir Nestlé Aquarel."
        ],
        price: "1,69€ (0,34€ / l)",
        link: "https://www.amazon.es/dp/B005Y15IUC?ref_=cm_sw_r_apin_dp_BK7HPC4V6RRQ850AH6TH&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=3ec7b574dc4233eb445f3e985a2622c5&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 19,
        image: "https://m.media-amazon.com/images/I/71cW8cOWzdL._AC_SY879_.jpg",
        title: "Nestlé Aquarel Agua Mineral Natural, 6 x 1.5L",
        description: [
            "El paquete de 6 botellas de agua mineral natural Nestlé Aquarel de 1.5 litros cada una es una opción conveniente y práctica para aquellos que buscan una hidratación constante en su vida diaria. Nestlé Aquarel se destaca por su calidad y pureza, brindando un agua fresca y saludable que satisface las necesidades de hidratación de toda la familia.",
            "Cada botella de Nestlé Aquarel proviene de fuentes naturales en lugares protegidos, lo que garantiza su pureza y frescura excepcionales. La marca Nestlé se enorgullece de ofrecer un agua mineral natural de alta calidad que cumple con los estándares más rigurosos, proporcionando una hidratación confiable y saludable en cada sorbo.",
            "El formato de 1.5 litros de cada botella de Nestlé Aquarel es ideal para tener a mano en casa, en la oficina o para llevar durante actividades al aire libre. Su tamaño es lo suficientemente grande como para satisfacer las necesidades de hidratación de varios miembros de la familia o de un grupo de personas, pero también es lo suficientemente práctico para transportar y almacenar fácilmente.",
            "Una de las características notables de Nestlé Aquarel es su sabor puro y refrescante. Esta agua mineral natural no contiene sabores artificiales ni aditivos, lo que permite disfrutar de su auténtico sabor en cada sorbo. Es una opción refrescante y saludable para aquellos que buscan hidratarse con un agua de calidad y sin comprometer su sabor.",
            "Nestlé se preocupa por el medio ambiente, y el paquete de 6 botellas de Nestlé Aquarel de 1.5 litros refleja ese compromiso. Las botellas están hechas de plástico reciclable, lo que ayuda a reducir el impacto en el medio ambiente. Al elegir Nestlé Aquarel, estás optando por una opción sostenible que respalda la conservación de nuestros recursos naturales.",
            "La practicidad es una ventaja clave del paquete de 6 botellas de Nestlé Aquarel. Al tener varias botellas a tu disposición, siempre tendrás agua fresca a mano sin necesidad de reabastecerte con frecuencia. Además, su tamaño de 1.5 litros es perfecto para llevar contigo durante el día o para compartir con amigos y familiares.",
            "Nestlé Aquarel garantiza la calidad y seguridad de su agua mineral natural. Cada botella ha pasado por rigurosos controles de calidad para garantizar que esté libre de impurezas y sea segura para el consumo. Puedes confiar en la marca Nestlé y en su compromiso con la excelencia en cada botella de Nestlé Aquarel que disfrutes.",
            "En resumen, el paquete de 6 botellas de Nestlé Aquarel de 1.5 litros cada una es una opción práctica y confiable para satisfacer tus necesidades de hidr"
        ],
        price: "3,54€ (0,39€ / l)",
        link: "https://www.amazon.es/dp/B005Y15IKW?ref_=cm_sw_r_apin_dp_SBHPYFQM1KTAKJ47M2QH&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=30a4d956a5c3b9ab8209961ce03231eb&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 20,
        image: "https://m.media-amazon.com/images/I/71fODetuuQL._AC_SX679_PIbundle-8,TopRight,0,0_SH20_.jpg",
        title: "Activia Yogur 0%, Natural Edulcorado, 8 x 120g",
        description: [
            "El paquete de 8 yogures Activia 0% Natural Edulcorado de 120g cada uno es la elección perfecta para aquellos que buscan una opción saludable y sabrosa para su bienestar diario. Activia se destaca por su compromiso con la calidad y el sabor, brindando yogures deliciosos que son beneficiosos para tu cuerpo.",
            "Cada yogur Activia 0% Natural Edulcorado es un verdadero placer para el paladar. Elaborado con ingredientes naturales y edulcorantes, ofrece una combinación equilibrada de textura cremosa y un sabor suave y agradable. Es la opción perfecta para aquellos que desean cuidar su salud sin renunciar al disfrute de un delicioso yogur.",
            "El formato de 120g de cada yogur Activia 0% es práctico y conveniente. Puedes disfrutar de un yogur completo en cualquier momento del día, ya sea como desayuno, merienda o como parte de una comida saludable. Su tamaño portátil es perfecto para llevar contigo y disfrutar de un tentempié nutritivo en cualquier lugar.",
            "Activia se enorgullece de ofrecer yogures bajos en grasa y sin azúcares añadidos. Cada yogur Activia 0% Natural Edulcorado es una opción saludable que te permite cuidar tu alimentación sin comprometer el sabor. Disfruta de su dulzura natural y su textura suave sin preocuparte por el exceso de calorías o azúcares.",
            "La marca Activia se preocupa por el bienestar de sus consumidores y utiliza ingredientes de alta calidad en la elaboración de sus productos. Los yogures Activia 0% Natural Edulcorado son ricos en proteínas y contienen probióticos, que son beneficiosos para la salud digestiva. Con cada yogur, estás contribuyendo al equilibrio de tu flora intestinal.",
            "La variedad de 8 yogures en un solo paquete te brinda la oportunidad de disfrutar de diferentes sabores y variaciones. Puedes elegir entre una amplia gama de opciones, desde yogur natural hasta combinaciones con frutas o cereales. Cada yogur es una experiencia única y deliciosa que te ayuda a mantener una dieta equilibrada.",
            "Activia garantiza la calidad y frescura de sus yogures. Cada yogur Activia 0% es elaborado con procesos de control de calidad rigurosos, asegurando que obtengas un producto fresco y de alta calidad en cada envase. Puedes confiar en la marca Activia y en su compromiso con tu bienestar.",
            "En resumen, el paquete de 8 yogures Activia 0% Natural Edulcorado de 120g cada uno es una opción saludable, sabrosa y conveniente para satisfacer tus necesidades de bienestar. Disfruta de la textura cremosa y el sabor delicado de cada yogur mientras cuidas de ti mismo. Con Activia"
        ],
        price: "3,60€ (3,75€ / kg)",
        link: "https://www.amazon.es/dp/B01DUVS26E?ref_=cm_sw_r_apin_dp_AFVE68CMTCT2DZ422X20&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=d4d9890b5c345635520f8f64b8a598fe&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 21,
        image: "https://m.media-amazon.com/images/I/8110yf6hjpL._AC_SL1500_.jpg",
        title: "Central Lechera Asturiana Leche Semidesnatada, 6 x 1L",
        description: [
            "Disfruta de la pureza y el sabor auténtico de la leche con Central Lechera Asturiana Leche Semidesnatada. Este paquete de 6 botellas de 1 litro cada una es la elección perfecta para aquellos que desean incorporar la leche semidesnatada en su dieta diaria de manera práctica y deliciosa.",
            "Central Lechera Asturiana se destaca por su compromiso con la calidad y el origen de la leche. Cada gota de leche semidesnatada ha sido cuidadosamente seleccionada de granjas ganaderas, garantizando la frescura y el sabor auténtico que caracteriza a esta reconocida marca.",
            "La leche semidesnatada de Central Lechera Asturiana ofrece un equilibrio perfecto entre la textura cremosa y el contenido reducido de grasa. Es la opción ideal para aquellos que buscan una alternativa más ligera sin comprometer el sabor ni los nutrientes esenciales que la leche proporciona.",
            "El práctico formato de 6 botellas de 1 litro cada una asegura que siempre tengas suficiente leche semidesnatada a mano. Ya sea para disfrutarla sola, añadirla a tu café o preparar deliciosos batidos, siempre tendrás la cantidad necesaria para satisfacer tus necesidades lácteas.",
            "La leche semidesnatada de Central Lechera Asturiana es rica en calcio, proteínas y vitaminas, lo que la convierte en una opción nutritiva para toda la familia. Es una fuente de energía natural que contribuye al desarrollo y mantenimiento de huesos y músculos fuertes.",
            "Las botellas de Central Lechera Asturiana Leche Semidesnatada están diseñadas para mantener la leche fresca y protegida de la luz. Su tapa hermética garantiza la conservación de todas las propiedades y el sabor original de la leche hasta su consumo.",
            "Central Lechera Asturiana se enorgullece de su compromiso con la sostenibilidad y el cuidado del medio ambiente. Las botellas son 100% reciclables, lo que refuerza el compromiso de la marca con la reducción de residuos y la protección del entorno natural.",
            "Elige Central Lechera Asturiana Leche Semidesnatada y disfruta de la calidad, el sabor y la nutrición en cada sorbo. Brinda a tu familia una opción láctea equilibrada y deliciosa. Descubre cómo la leche semidesnatada puede formar parte de una vida saludable y activa."
        ],
        price: "6,48€",
        link: "https://www.amazon.es/dp/B01ITRIBGU?ref_=cm_sw_r_apin_dp_VGMK0SCN1R3D8RMDWVS7&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=8716f0650ec460f027b3254424791b22&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 22,
        image: "https://m.media-amazon.com/images/I/81pidtWLdjL._AC_SL1500_.jpg",
        title: "Colhogar Ultra Suave XXL x12 - Papel Higiénico Suave - Paquete con 12 Rollos Extra Grandes - Papel de Baño de 2 Capas - 100% Libre de Perfume - Blanco, 12, 12 unidad, 1",
        description: [
            "¡Dale a tu baño el toque de suavidad que se merece con el papel higiénico Colhogar Ultra Suave XXL x12! Este papel de baño suave y reconfortante es la elección perfecta para aquellos que valoran la comodidad y la calidad en su rutina diaria.",
            "Colhogar Ultra Suave XXL x12 está diseñado para brindarte una experiencia delicada y agradable. Cada hoja de papel higiénico ha sido cuidadosamente elaborada para ser suave al tacto, proporcionando una sensación de confort y frescura en cada uso.",
            "El paquete incluye 12 rollos extra grandes, asegurando que no te quedes sin papel higiénico cuando más lo necesitas. Con esta cantidad generosa, podrás disfrutar de la suavidad y la comodidad de Colhogar Ultra Suave durante mucho tiempo.",
            "El papel de baño de 2 capas de Colhogar Ultra Suave XXL ofrece una mayor absorción y resistencia, brindándote una experiencia de limpieza confiable y efectiva. No tendrás que preocuparte por la calidad del papel, ya que está diseñado para cumplir con tus expectativas más exigentes.",
            "Una de las características distintivas de Colhogar Ultra Suave XXL es que es 100% libre de perfume. Esto lo convierte en una opción ideal para aquellos con piel sensible o alergias, garantizando una experiencia higiénica sin irritaciones ni molestias.",
            "El color blanco clásico del papel higiénico de Colhogar Ultra Suave XXL aporta una sensación de limpieza y pureza a tu baño. Combina perfectamente con cualquier estilo decorativo y brinda una apariencia elegante y pulcra en tu espacio personal.",
            "Colhogar se enorgullece de ofrecer productos de alta calidad, y el papel higiénico Colhogar Ultra Suave XXL no es una excepción. Cada rollo ha sido fabricado bajo estrictos estándares de calidad para garantizar una experiencia de uso superior y una satisfacción duradera.",
            "Elige Colhogar Ultra Suave XXL x12 y disfruta de la suavidad y la comodidad en cada visita al baño. Cuida de ti mismo y de tu higiene personal con este papel higiénico suave y confiable. Descubre cómo pequeños detalles pueden marcar la diferencia en tu día a día."
        ],
        price: "4,49€",
        link: "https://www.amazon.es/dp/B0731F6V7B?ref_=cm_sw_r_apin_dp_6QQH4GB95HHVN174073V&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=839213a970e226efeccb909af290a85e&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 23,
        image: "https://m.media-amazon.com/images/I/81bts2GFMGL._AC_SL1500_.jpg",
        title: "Colhogar Pure Natural x80 - Caja de Faciales Suaves Biodegradables - Resistentes a la Lavadora - Hechos con Materiales Reciclados - Caja con 80 Pañuelos - Color Natural",
        description: [
            "¡Cuida de ti y del medio ambiente con los pañuelos faciales Colhogar Pure Natural x80! Estos suaves y biodegradables pañuelos son la opción perfecta para aquellos que buscan una alternativa ecológica y respetuosa con la naturaleza.",
            "Con Colhogar Pure Natural x80, puedes disfrutar de la suavidad que tu piel merece. Estos pañuelos faciales están diseñados para brindarte una experiencia delicada y reconfortante, cuidando de tu rostro con cada uso.",
            "No solo cuidarás de ti mismo con estos pañuelos, sino que también estarás protegiendo el medio ambiente. Colhogar Pure Natural x80 está fabricado con materiales reciclados, contribuyendo a la reducción de residuos y fomentando un consumo responsable.",
            "La caja de Colhogar Pure Natural x80 contiene 80 pañuelos, asegurando que siempre tengas a mano una cantidad generosa para satisfacer tus necesidades. Ya sea para secar una lágrima, limpiar tu rostro o simplemente mantener la frescura, estos pañuelos estarán allí cuando los necesites.",
            "La resistencia a la lavadora de los pañuelos Colhogar Pure Natural x80 los convierte en una opción conveniente y duradera. Puedes utilizarlos sin preocuparte por su deterioro, ya que se mantendrán en perfectas condiciones incluso después de un ciclo de lavado.",
            "El color natural de los pañuelos agrega un toque de elegancia y simplicidad a tu rutina diaria. Combina perfectamente con cualquier ambiente y estilo, brindándote una experiencia visualmente agradable mientras cuidas de ti mismo y del planeta.",
            "Colhogar Pure Natural x80 se enorgullece de su compromiso con la sostenibilidad y la calidad. Cada pañuelo ha sido cuidadosamente elaborado para cumplir con los estándares más altos, garantizando una textura suave y una resistencia confiable en cada uso.",
            "Elige Colhogar Pure Natural x80 y descubre cómo los pequeños gestos pueden marcar la diferencia. Cuida de tu piel y del medio ambiente con estos pañuelos faciales suaves, biodegradables y resistentes. Disfruta de la comodidad y la tranquilidad de saber que estás haciendo una elección responsable."
        ],
        price: "1,52€",
        link: "https://www.amazon.es/dp/B0731F6V7B?ref_=cm_sw_r_apin_dp_6QQH4GB95HHVN174073V&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=56423133ecad35b315a0d32f93fcc7ba&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 24,
        image: "https://m.media-amazon.com/images/I/61DGwu1CJpL._AC_SL1500_.jpg",
        title: "Sprite Lima-Limón, Zero Azúcar, Botella 2L",
        description: [
            "¡Dale un toque refrescante y sin azúcar a tus días con Sprite Lima-Limón Zero Azúcar! Este clásico refresco de burbujas lleno de sabor cítrico es la opción perfecta para aquellos que desean disfrutar de una bebida refrescante sin preocuparse por las calorías.",
            "La combinación única de lima y limón en Sprite Lima-Limón Zero Azúcar ofrece una explosión de frescura y acidez en cada sorbo. Su fórmula sin azúcar te permite deleitarte con el sabor característico de Sprite sin añadir calorías extra a tu dieta.",
            "Con el práctico formato de botella de 2 litros, tendrás suficiente Sprite Lima-Limón Zero Azúcar para compartir en cualquier ocasión. Desde reuniones con amigos hasta momentos de relajación en casa, esta bebida refrescante estará siempre lista para satisfacer tu sed.",
            "Sprite Lima-Limón Zero Azúcar se destaca por su autenticidad y sabor equilibrado. Cada sorbo te brinda la refrescante sensación cítrica que caracteriza a Sprite, pero sin comprometer tu ingesta de azúcar. Disfruta de la satisfacción de una bebida sin igual, sin las preocupaciones calóricas.",
            "La calidad es un pilar fundamental en Sprite Lima-Limón Zero Azúcar. Cada botella está elaborada con los más altos estándares de producción, asegurando que cada sorbo mantenga el sabor fresco y burbujeante que amas en cada ocasión.",
            "Sprite Lima-Limón Zero Azúcar no solo es una opción para calmar la sed, sino que también es una excelente base para mezclar cócteles refrescantes y crear combinaciones de sabores innovadoras. Experimenta con tus ingredientes favoritos y disfruta de bebidas creativas y sin azúcar.",
            "La botella de 2 litros de Sprite Lima-Limón Zero Azúcar presenta un diseño práctico y seguro. Su tapa hermética mantiene la efervescencia y el sabor fresco por más tiempo, para que puedas disfrutar de cada sorbo con la misma intensidad en cada ocasión.",
            "Con Sprite Lima-Limón Zero Azúcar, no tienes que renunciar al sabor ni preocuparte por las calorías. Refréscate y vive cada momento con una bebida sin azúcar y llena de burbujas cítricas. Disfruta de la vida, mantén tu equilibrio y brinda con Sprite Lima-Limón Zero Azúcar, la elección refrescante sin remordimientos."
        ],
        price: "1,54€",
        link: "https://www.amazon.es/dp/B008TTWV5Q?ref_=cm_sw_r_apin_dp_F3ZPEHH8HA1NGGM7HTK5&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=fe7811958f0b8bf914e713c0180fad85&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 25,
        image: "https://m.media-amazon.com/images/I/71juJPxBJxL._AC_SL1500_.jpg",
        title: "Coca-Cola Light - Refresco de cola sin azúcar, sin calorías - Pack 2 botellas 2L",
        description: [
            "¡Refresca tu sed y disfruta del sabor icónico de Coca-Cola sin preocuparte por las calorías con Coca-Cola Light! Este refresco de cola sin azúcar y sin calorías es la opción perfecta para aquellos que desean cuidar su figura sin renunciar al placer de una bebida burbujeante y deliciosa.",
            "La fórmula única de Coca-Cola Light combina la refrescante efervescencia de siempre con un sabor auténtico y sin azúcar. Cada sorbo te transportará a un mundo lleno de frescura y satisfacción, sin añadir calorías extra a tu dieta.",
            "Con el pack de 2 botellas de 2 litros de Coca-Cola Light, tendrás suficiente para compartir y disfrutar en cualquier ocasión. Ya sea en una reunión con amigos o simplemente para saciar tu sed después de un largo día, siempre tendrás a mano esta bebida sin igual.",
            "A diferencia de otros refrescos light en el mercado, Coca-Cola Light ha perfeccionado su fórmula para ofrecerte un sabor auténtico y equilibrado. Cada sorbo te brindará el inconfundible gusto de la cola de Coca-Cola, pero sin el peso de las calorías.",
            "Además de ser una opción baja en calorías, Coca-Cola Light también se enorgullece de su compromiso con la calidad. Cada botella está cuidadosamente elaborada bajo los más altos estándares de producción, garantizando un producto fresco y de excelente sabor en cada ocasión.",
            "Disfruta de la versatilidad de Coca-Cola Light. Puedes tomarla sola, mezclarla con tu licor preferido para crear refrescantes cócteles o incluso utilizarla como base para postres y recetas creativas. Las posibilidades son infinitas y siempre te brindarán momentos de auténtico deleite.",
            "El diseño del pack de 2 botellas de 2 litros de Coca-Cola Light es práctico y conveniente. Su tapa hermética asegura que la bebida se mantenga fresca y efervescente por más tiempo, permitiéndote disfrutar de su sabor inconfundible en cualquier momento que desees.",
            "Con Coca-Cola Light, no tendrás que sacrificar el sabor ni privarte de los placeres de la vida. Disfruta de la sensación refrescante de una Coca-Cola sin azúcar y sin calorías, y mantén tu estilo de vida equilibrado y lleno de energía. Brinda con una sonrisa y vive cada momento al máximo con Coca-Cola Light."
        ],
        price: "4,01€",
        link: "https://www.amazon.es/dp/B00XA0FTHG?ref_=cm_sw_r_apin_dp_8YVGBKAN20F5V04FSMRD&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=f5a5757c8db81e426b0fe8048b13f412&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 26,
        image: "https://m.media-amazon.com/images/I/91Ygi8htBsL._AC_SL1500_.jpg",
        title: "Friskies Comida Seca para Gato Adulto con Buey Pollo y Verduras, 4kg",
        description: [
            "¡Descubre el festín que hará ronronear de felicidad a tu gato adulto con la comida seca Friskies! Con su deliciosa combinación de buey, pollo y verduras, este producto es una opción irresistible para consentir a tu fiel compañero felino.",
            "El sabor suculento del buey se entrelaza con la suavidad del pollo, creando una experiencia gastronómica única que satisfará hasta el paladar más exigente de tu gato.",
            "Friskies no solo cuida el gusto de tu mascota, sino también su salud. Su fórmula balanceada está diseñada para brindar todos los nutrientes esenciales que tu gato adulto necesita para mantenerse en su mejor forma física.",
            "El crujiente de la comida seca Friskies estimula la masticación y promueve una buena salud dental, ayudando a prevenir la acumulación de sarro y el mal aliento. Tu gato disfrutará cada bocado con entusiasmo y mantendrá su sonrisa reluciente.",
            "Además de su irresistible sabor y beneficios para la salud, Friskies también se destaca por su calidad. Elaborado con ingredientes cuidadosamente seleccionados y procesado bajo estrictos estándares de calidad, este producto garantiza una experiencia alimentaria segura y confiable para tu gato.",
            "La incorporación de verduras frescas en la fórmula de Friskies agrega un toque de color y nutrición adicional a la dieta de tu gato. Las verduras seleccionadas proporcionan vitaminas y minerales esenciales, contribuyendo a una alimentación equilibrada.",
            "La presentación en envase de 4 kg asegura que tu gato tenga suficiente comida para disfrutar durante un largo periodo de tiempo. Además, el diseño práctico y resistente del envase mantiene el alimento fresco y protegido de la humedad, conservando todo su sabor y calidad.",
            "Con Friskies Comida Seca para Gato Adulto con Buey, Pollo y Verduras, le estarás brindando a tu gato no solo una alimentación completa y sabrosa, sino también momentos de pura felicidad. Observa cómo tu amigo peludo se deleita con cada bocado y florece en salud y vitalidad. ¡No esperes más y dale a tu gato el placer que se merece!"
        ],
        price: "15,99€",
        link: "https://www.amazon.es/dp/B00L5GIO2E?ref_=cm_sw_r_apin_dp_BWEYT3RW48JWQB41P2Q7&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=734a5cd329fff2266c98acc4b1003ffd&camp=3638&creative=24630",
        category: "hogar"
    },

    {
        id: 27,
        image: "https://m.media-amazon.com/images/I/71eMliAZbkL._AC_SL1500_.jpg",
        title: "Boldplex 7 Aceite para el Pelo Seco y Dañado - Añade Brillo, Fortalece, Suaviza las Puntas Abiertas y Encrespamiento, Hidrata y Nutre. Aceite Capilar Ligero para Cabello Rizado y Encrespado - 100ml",
        description: [
            "¡Revive tu cabello seco y dañado con la poderosa fórmula de Boldplex 7 Aceite para el Pelo! Este innovador elixir capilar de 100ml es la solución definitiva para añadir brillo, fortalecer, suavizar las puntas abiertas y combatir el encrespamiento, brindando hidratación y nutrición en cada gota.",

            "Boldplex 7 Aceite para el Pelo ha sido diseñado para rescatar y transformar tu melena en una cascada de belleza. Su fórmula ligera penetra profundamente en cada hebra, restaurando la vitalidad y dejando un cabello más brillante y saludable en cada aplicación.",

            "Este aceite capilar es el mejor aliado para cabellos rizados y encrespados. Domina tus rizos rebeldes y dile adiós al encrespamiento con Boldplex 7, que suaviza y define tus rizos para un look elegante y con movimiento.",

            "La versatilidad de Boldplex 7 Aceite para el Pelo es una ventaja destacada. Además de ser una fuente de hidratación profunda, también actúa como escudo protector ante el calor de las herramientas de estilizado y los daños ambientales, manteniendo tu cabello protegido y deslumbrante.",

            "Cada aplicación de Boldplex 7 no solo repara y fortalece tu cabello, sino que también deja una agradable fragancia que perdura durante todo el día. Siente la confianza de lucir una melena irresistible y fragante en cualquier momento.",

            "La botella de 100ml del aceite para el pelo Boldplex 7 es práctica y duradera. Su diseño elegante y seguro facilita su aplicación sin desperdicios, para que puedas disfrutar de sus beneficios por mucho tiempo.",

            "Boldplex se destaca por su compromiso con ingredientes de calidad y sin daños. Este aceite para el pelo es libre de parabenos y sulfatos, asegurando que cada gota sea una experiencia segura y efectiva para tu cabello.",

            "Recupera la belleza y el esplendor de tu cabello con Boldplex 7 Aceite para el Pelo Seco y Dañado. Vive la experiencia de un cabello revitalizado, brillante y resistente. Con Boldplex 7, dale a tu cabello el tratamiento que se merece y brilla con confianza todos los días."
        ],
        price: "14,00€",
        link: "https://www.amazon.es/dp/B09XQZBP39?ref_=cm_sw_r_apin_dp_3P6RC0P5RA75MWYDY0J4&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=f092b798e82a9056dadf5cba9266a3d2&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 28,
        image: "https://m.media-amazon.com/images/I/61hjv63yrjL._AC_SL1500_.jpg",
        title: "Hawaiian Tropic Bruma Silk Hydration Air Soft SPF 50 - Loción Solar Protectora en Spray de Vaporización , Resistente al Agua hasta 12 Horas , Bruma Solar de 220 ml",
        description: [
            "¡Protege tu piel y disfruta de un bronceado espectacular con Hawaiian Tropic Bruma Silk Hydration Air Soft SPF 50! Esta loción solar en spray de vaporización de 220 ml te ofrece una protección efectiva contra los rayos UV, mientras mantienes tu piel suave y radiante durante todo el día.",
            "Hawaiian Tropic es sinónimo de cuidado y deleite bajo el sol. Con Bruma Silk Hydration Air Soft SPF 50, experimentarás una sensación única en cada aplicación. Su fórmula ligera y de rápida absorción te envolverá en una bruma refrescante que se desliza suavemente sobre tu piel.",
            "Esta loción solar protectora ha sido especialmente diseñada para brindar una protección de alto factor SPF 50, protegiendo tu piel de los daños causados por los rayos UVA y UVB. Ahora podrás disfrutar del sol sin preocupaciones, manteniendo tu piel segura y saludable.",
            "La resistencia al agua de hasta 12 horas es una característica destacada de Hawaiian Tropic Bruma Silk Hydration Air Soft SPF 50. No importa si te sumerges en el mar o en la piscina, esta bruma solar resistente al agua te protegerá durante todas tus actividades bajo el sol.",
            "Además de su poderosa protección, esta bruma solar también está enriquecida con seda y coco, lo que la convierte en una delicia para tu piel. Experimenta una hidratación duradera y una suavidad irresistible mientras te bronceas bajo los rayos del sol.",
            "El práctico formato en spray de vaporización de Hawaiian Tropic Bruma Silk Hydration Air Soft SPF 50 te permite una aplicación fácil y uniforme. Disfruta de una experiencia refrescante y libre de residuos grasos, para que te sientas cómodo y protegido durante todo el día.",
            "Con Hawaiian Tropic, cada día bajo el sol se convierte en un momento especial. Bruma Silk Hydration Air Soft SPF 50 es una muestra de su compromiso con la calidad y el cuidado de tu piel. Convierte tus momentos bajo el sol en una experiencia inolvidable y radiante con Hawaiian Tropic Bruma Silk Hydration Air Soft SPF 50."
        ],
        price: "10,95€",
        link: "https://www.amazon.es/dp/B07RZSPDWB?ref_=cm_sw_r_apin_dp_W3HGXSA07HH2SQHKRRXP&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=09dec80826be4f0c15f4efbebf90c788&camp=3638&creative=24630",
        category: "hogar"
    },
    {
        id: 29,
        image: "https://m.media-amazon.com/images/I/517mV6iPyRL._AC_SL1500_.jpg",
        title: "ULTECHNOVO Gafas Arms Metal Gafas Reemplazo Gafas de Reemplazo Templo Negro Gafas Armas Piernas Gafas Reparaciónl",
        description: [
            "¡Recupera el estilo y la funcionalidad de tus gafas con ULTECHNOVO Gafas Arms Metal! Estas patillas de gafas de reemplazo en color negro te ofrecen una solución práctica y eficiente para reparar y renovar tus gafas favoritas.",

            "ULTECHNOVO se preocupa por ofrecerte productos de calidad y durabilidad. Estas gafas de reemplazo están fabricadas con metal resistente, asegurando que puedas disfrutar de tus gafas renovadas durante mucho tiempo.",

            "Con las patillas de gafas de reemplazo ULTECHNOVO, puedes personalizar tus gafas según tu estilo y necesidades. El color negro clásico se adapta a cualquier montura, brindando un toque de elegancia y versatilidad a tus gafas.",

            "La instalación de las gafas de reemplazo es sencilla y rápida. Con solo unos simples pasos, tus gafas estarán listas para lucir una apariencia renovada y funcional. Disfruta de la comodidad y la confianza que brindan unas gafas bien ajustadas.",

            "Estas patillas de gafas de reemplazo también son una opción ideal para reparar tus gafas dañadas. Ya sea que necesites reemplazar las patillas desgastadas o rotas, ULTECHNOVO Gafas Arms Metal te brinda una solución eficaz para restaurar tus gafas favoritas.",

            "Además de su funcionalidad, las patillas de gafas de reemplazo ULTECHNOVO están diseñadas pensando en tu comodidad. El metal ligero garantiza que tus gafas sean cómodas de usar durante todo el día.",

            "Con ULTECHNOVO Gafas Arms Metal, no tendrás que despedirte de tus gafas preferidas. Ahora puedes prolongar su vida útil y disfrutar de una reparación práctica y estilizada. Renueva tus gafas y mantén tu estilo con ULTECHNOVO Gafas Arms Metal Gafas Reemplazo."
        ],
        price: "9,58€",
        link: "https://www.amazon.es/dp/B0BBD7DXMR/ref=sspa_dk_detail_4?pd_rd_i=B0BBD7DXMR&amp;pd_rd_w=QCW1D&amp;content-id=amzn1.sym.bfe1aafd-4816-4cfa-834a-7067dfa431bd&amp;pf_rd_p=bfe1aafd-4816-4cfa-834a-7067dfa431bd&amp;pf_rd_r=HP2K80Q0GMW2K951FKS9&amp;pd_rd_wg=eOr0p&amp;pd_rd_r=38927d8a-14a8-402f-884a-89c4deb801af&amp;s=kitchen&amp;sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy&amp;th=1&_encoding=UTF8&tag=deconfi-21&linkCode=ur2&linkId=5790b0dabf0ef75e7c128bb49bbd9885&camp=3638&creative=24630",
        category: "hogar"
    }



    // Agrega más productos aquí
];


const productsPerPage = 6;

// Obtener el contenedor de los productos
const productsContainer = document.getElementById("products-container");
const fatherPaginationContainer = document.getElementById("pagination-container");


startApp(productsJson)

function printFirstPage(productArray) {
    const startIndex = (1 - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = productArray.slice(startIndex, endIndex);
    printProducts(productsToShow);
}

function startApp(productArray) {
    printFirstPage(productArray)
    createPagination(productArray)
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
    return results;
}

//Menu categories
document.getElementById("modaLink").addEventListener("click", function (event) {
    event.preventDefault();
    let modaProducts = searchProducts("moda", "category")
    printFirstPage(modaProducts)
    createPagination(modaProducts)
});

document.getElementById("hogarLink").addEventListener("click", function (event) {
    event.preventDefault();
    let hogaProducts = searchProducts("hogar", "category")
    printFirstPage(hogaProducts)
    createPagination(hogaProducts)
});

document.getElementById("tecnologiaLink").addEventListener("click", function (event) {
    event.preventDefault();
    let tecProducts = searchProducts("tecnologia", "category")
    printFirstPage(tecProducts)
    createPagination(tecProducts)
});

document.getElementById("librosLink").addEventListener("click", function (event) {
    event.preventDefault();
    let tecProducts = searchProducts("libros", "category")
    printFirstPage(tecProducts)
    createPagination(tecProducts)
});

////////////////////////////////////////////////////////////////////


function showDetails(id) {
    fatherPaginationContainer.innerHTML = "";
    productsContainer.innerHTML = "";

    const descriptions = productsJson[id].description;
    let descriptionHTML = "";

    descriptions.forEach((description) => {
        descriptionHTML += `<p>${description}</p>`;
    });

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
    <p style="text-align: justify">Actualmente, estamos trabajando arduamente para poder ofrecerte una experiencia aún mejor al solicitar nuestros propios enlaces de afiliados directamente a los productos de Amazon.</p>
    <p style="text-align: justify">Nuestro objetivo es proporcionarte un servicio excepcional y garantizarte una navegación fluida y segura en nuestra página. Al establecer una asociación con Amazon, podremos redirigirte directamente a los productos que mencionamos en nuestras reseñas a través de nuestros enlaces de afiliados.</p>
    <p style="text-align: justify">Valoramos profundamente la confianza que depositas en nosotros al visitar nuestra página y leer nuestras reseñas. Es por eso que nos esforzamos por ser completamente transparentes en nuestra relación con nuestros usuarios.</p>
    <p style="text-align: justify">Al solicitar los enlaces de afiliados con Amazon, nos comprometemos a utilizar exclusivamente dichos enlaces y nunca utilizar otros programas de afiliados. Esto garantiza que la información y los enlaces que proporcionamos sean consistentes y confiables.</p>
    <p style="text-align: justify">Queremos brindarte una experiencia sin complicaciones al acceder a los productos que recomendamos. Con los enlaces de afiliados de Amazon, podrás realizar tus compras de manera rápida y segura, confiando en la reputación y la calidad de Amazon.</p>
    <p style="text-align: justify">Además, al utilizar nuestros enlaces de afiliados, estarás apoyando directamente nuestro trabajo y esfuerzo para proporcionarte contenido útil y de calidad de manera constante.</p>
    <p style="text-align: justify">Te aseguramos que respetaremos todas las políticas y directrices de Amazon en relación con los enlaces de afiliados. Nuestro compromiso es ofrecerte una experiencia positiva y transparente en nuestra página y con los productos de Amazon.</p>
    <p style="text-align: justify">Estamos emocionados por la oportunidad de colaborar con Amazon y ofrecerte una experiencia aún mejor. Seguiremos informándote sobre nuestros avances y los pasos que estamos dando para establecer nuestra colaboración con Amazon.</p>
    <p style="text-align: justify">¡Explora nuestras reseñas y descubre los productos que nos encantan en Amazon! Estamos seguros de que encontrarás nuestras opiniones útiles y disfrutarás de los productos tanto como nosotros. ¡Gracias por considerar nuestra solicitud y por ser parte de nuestra comunidad!</p>
    <h1>Política de Privacidad</h1>
    <p style="text-align: justify">En nuestro sitio web, valoramos y respetamos tu privacidad. Nos comprometemos a proteger la información personal que compartas con nosotros. Este sitio web es de solo lectura y no recopila cookies ni realiza seguimiento de ningún tipo. No almacenamos ni compartimos tu información personal con terceros sin tu consentimiento expreso.</p>
    <p style="text-align: justify">Al utilizar este sitio web, aceptas nuestras condiciones de uso y política de privacidad.</p>
`;

    productsContainer.appendChild(newDiv);
}

