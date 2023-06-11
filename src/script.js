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
        link: "https://www.amazon.es/Guerra-Solar-Warhammer-Horus-Heresy/dp/8445015087/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=17NK1FVFW1LNH&keywords=La+Guerra+Solar+n%C2%BA+02&qid=1686484559&sprefix=la+guerra+solar+n%C2%BA+02%2Caps%2C142&sr=8-1",
        category: "libros"
    },
    {
        id: 1,
        image: "https://m.media-amazon.com/images/I/41U6ZKs3MHL.__AC_SX300_SY300_QL70_ML2_.jpg",
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
        link: "https://www.amazon.es/Dyson-Absolute-Aspiradora-Funciones-Decibeles/dp/B073ZL5VDK/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2BNUQESDMMV3V&keywords=Dyson+v8+absolute+-+Aspiradora+Sin+Cable&qid=1686492715&sprefix=dyson+v8+absolute+-+aspiradora+sin+cable%2Caps%2C311&sr=8-5&ufe=app_do%3Aamzn1.fos.5e544547-1f8e-4072-8c08-ed563e39fc7d",
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
        link: "https://www.amazon.es/Xiaomi-Vacuum-Cleaner-BHR5217EU-42621/dp/B09R9XWJVS/ref=sr_1_2_mod_primary_new?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2LHSMGN6WNZDC&keywords=Xiaomi+Vacuum+Cleaner+Mi+Robot+Mop+2+Lite&qid=1686492601&sprefix=xiaomi+vacuum+cleaner+mi+robot+mop+2+lite%2Caps%2C185&sr=8-2",
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
        link: "https://www.amazon.es/Krups-Nespresso-YY1531FD-Independiente-c%C3%A1psulas/dp/B00IRWKB70/ref=psdc_599392031_t3_B00G5YOVZA",
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
        link: "https://www.amazon.es/STARBUCKS-Nespresso-Variety-Tubos-C%C3%A1psulas/dp/B07X63LDTR/ref=sr_1_8?keywords=capsulas+nespresso&qid=1686499444&rdc=1&sr=8-8",
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
        link: "https://www.amazon.es/Incapto-Coffee-Risaralda-Sudamericano-Equilibrado/dp/B08J3S5ZRB/ref=sr_1_2_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=24KTL6T3HZ0AP&keywords=cafe+en+grano&qid=1686499693&rdc=1&sprefix=cafe+en+grano%2Caps%2C140&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
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
        link: "https://www.amazon.es/Duronic-BL510-el%C3%A9ctrica-capacidad-smoothies/dp/B0BG662VQ3/ref=sr_1_6?crid=1J4GKGQOLZHPN&keywords=batidora+de+batidos&qid=1686500442&sprefix=batidora+de+batidos%2Caps%2C134&sr=8-6",
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
        link: "https://www.amazon.es/guardi%C3%A1n-entre-centeno-Libro-Bolsillo/dp/842066085X/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1RJBBFP4BCV0W&keywords=El+guardi%C3%A1n+entre+el+centeno%2C+de+J.D.+Salinger&qid=1686500977&sprefix=el+guardi%C3%A1n+entre+el+centeno+de+j.d.+salinger%2Caps%2C235&sr=8-3",
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
        link: "https://www.amazon.es/escarabajos-vuelan-atardecer-Gran-Angular/dp/8491820574/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=NGG5KXBNWKUZ&keywords=Los+escarabajos+vuelan+al+atardecer%2C+de+Mar%C3%ADa+Gripe&qid=1686501208&sprefix=los+escarabajos+vuelan+al+atardecer+de+mar%C3%ADa+gripe%2Caps%2C281&sr=8-1",
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
        link: "https://www.amazon.es/Lazarillo-tormes-Anonimo/dp/8415089201/ref=sr_1_9?keywords=el+lazarillo+de+tormes&qid=1686501931&sprefix=el+lazaril%2Caps%2C252&sr=8-9",
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
        link: "https://www.amazon.es/Matilda-Dahl-Fiction-Roald/dp/0141365463/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HW1A1JNVZ1HU&keywords=7.+matilda+de+roald+dahl&qid=1686502072&sprefix=7.+matilda+de+roald+dahl%2Caps%2C138&sr=8-1",
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
        link: "https://www.amazon.es/Nada-Vintage-Editions-Carmen-Laforet/dp/1784876216/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=14YZXLZM91647&keywords=6.+nada+de+carmen+laforet&qid=1686502442&sprefix=6.+nada+de+carmen+laforet%2Caps%2C252&sr=8-3",
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
        link: "https://www.amazon.es/AUSELILY-Vestidos-Tirantes-Decorativo-Bolsillos/dp/B09M2GXS77/ref=zg_bs_3074074031_sccl_2/262-6112303-3743124?psc=1",
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
        link: "https://www.amazon.es/Bbonlinedress-Vestido-Vintage-Burgundy-XS/dp/B07CN7NPRS/ref=zg_bs_3074074031_sccl_11/262-6112303-3743124?psc=1",
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
        link: "https://www.amazon.es/Impresi%C3%B3n-Estilo-Bohemio-Mujeres-Ocasional/dp/B07J37267C/ref=sxin_16_slsr_d_i_fs4star_fa_1_B07J37267C?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.bc971328-4632-4459-9405-7857b4cf1e16%3Aamzn1.sym.bc971328-4632-4459-9405-7857b4cf1e16&crid=9G6ETS6KBPDK&cv_ct_cx=faldas&keywords=faldas&pd_rd_i=B07J37267C&pd_rd_r=7e332075-c93a-49e8-8412-1752eaca7841&pd_rd_w=jIXId&pd_rd_wg=E5Zpi&pf_rd_p=bc971328-4632-4459-9405-7857b4cf1e16&pf_rd_r=TC93GVSG716S1THV2YFE&qid=1686503451&sprefix=faldas%2Caps%2C166&sr=1-2-41e0d225-3819-4755-898e-7f0f48633b47",
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
        link: "https://www.amazon.es/Apple-2023-MacBook-n%C3%BAcleos-diecinueve/dp/B0BSJ37QQ4/ref=sr_1_7?crid=R9GSKIHSKVF&keywords=macbook+pro+i9&qid=1686504451&sprefix=macbook+pro+i%2Caps%2C110&sr=8-7",
        category: "tecnologia"
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
            <img src="${productsJson[id].image}" class="article-image card-img img-fluid"  alt="..." style="object-fit: cover; height: 100%;"alt="Imagen del producto">
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

function displayPrivacyPolicy() {


}