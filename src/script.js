//MVP1: 1 having in a constant all the products, 2 have three categories, 3 searching working, 4 see all products, 5 see one product detail

//idea 1 create a file with the products and then a function to read the file and load the products into a constant
//idea 2 create a folder with all the image (or their bytes and load in image field this bytes or the direction or whatever is needed)


// Datos de los productos
const productsJson = [
    {
        id: 0,
        image: "https://meencantaleer.es/wp-content/uploads/2023/03/tinto-de-verano-1-me-encanta-leer.jpg",
        title: "Tefal Daily Cook ",
        description: [
            "Recientemente he adquirido la sartén \"MasterChef Pro\" de 24 cm y debo decir que estoy encantado con su desempeño en la cocina. Esta sartén de alta calidad ha superado mis expectativas en términos de rendimiento y durabilidad. Permíteme compartir mi experiencia detallada con esta sartén en esta reseña.\n",
            "En primer lugar, la sartén \"MasterChef Pro\" se destaca por su construcción robusta. Está fabricada con aluminio fundido de alta calidad, lo que garantiza una distribución uniforme del calor en toda la superficie de cocción. Esto se traduce en un calentamiento rápido y una cocción uniforme de los alimentos, evitando puntos calientes y proporcionando resultados consistentes.\n",
            "El recubrimiento antiadherente de esta sartén es excepcional. Incluso con mínima cantidad de aceite, los alimentos se deslizan fácilmente sin pegarse. He cocinado desde huevos revueltos hasta carnes y pescados, y en todos los casos la sartén ha demostrado su capacidad de liberar los alimentos sin dificultad. Además, el revestimiento antiadherente de calidad premium es resistente a los arañazos, lo que aumenta la durabilidad de la sartén.\n",
            "La comodidad de uso es otro punto destacado de la \"MasterChef Pro\". El mango ergonómico de baquelita se mantiene fresco al tacto durante la cocción, lo que evita quemaduras accidentales. Además, el mango está firmemente unido a la sartén, lo que proporciona un agarre seguro y estable. He apreciado especialmente la ligereza de la sartén, lo que facilita su manipulación y movimiento en la cocina.\n",
            "Una característica que me ha impresionado es la versatilidad de la sartén \"MasterChef Pro\". Es compatible con todo tipo de cocinas, incluyendo inducción, gas, vitrocerámica y electricidad. Esto la convierte en una opción ideal para cualquier hogar, ya que se adapta a diferentes necesidades y circunstancias. Además, su fondo difusor de calor garantiza una transferencia de calor eficiente, lo que permite un control preciso de la temperatura durante la cocción.\n",
            "Otro aspecto a destacar es la facilidad de limpieza de esta sartén. Gracias a su revestimiento antiadherente de calidad, los restos de comida se desprenden con facilidad, lo que simplifica el proceso de lavado. En la mayoría de los casos, basta con un paño húmedo o un poco de agua y jabón para dejarla impecable. Además, la sartén es apta para lavavajillas, lo que resulta muy conveniente en caso de que prefieras esta opción.\n",
            "En cuanto a la durabilidad, hasta ahora la sartén \"MasterChef Pro\" ha demostrado ser resistente y duradera. Su construcción de aluminio fundido y el recubrimiento antiadherente de alta calidad parecen mantenerse en buen estado a pesar del uso constante. Es importante tener en cuenta que el rendimiento y la vida útil de cualquier sartén están influenciados por el cuidado y el uso adecuados, así que es recomendable seguir"
        ],

        price: "22.55$",
        link: "https://www.example.com",
        category: "tecnologia"
    },
    {
        id: 1,
        image: "https://meencantaleer.es/wp-content/uploads/2023/03/origen-1-me-encanta-leer.jpg",
        title: "Product name 2",
        description: [
            "Recientemente he adquirido la sartén \"MasterChef Pro\" de 24 cm y debo decir que estoy encantado con su desempeño en la cocina. Esta sartén de alta calidad ha superado mis expectativas en términos de rendimiento y durabilidad. Permíteme compartir mi experiencia detallada con esta sartén en esta reseña.\n",
            "En primer lugar, la sartén \"MasterChef Pro\" se destaca por su construcción robusta. Está fabricada con aluminio fundido de alta calidad, lo que garantiza una distribución uniforme del calor en toda la superficie de cocción. Esto se traduce en un calentamiento rápido y una cocción uniforme de los alimentos, evitando puntos calientes y proporcionando resultados consistentes.\n",
            "El recubrimiento antiadherente de esta sartén es excepcional. Incluso con mínima cantidad de aceite, los alimentos se deslizan fácilmente sin pegarse. He cocinado desde huevos revueltos hasta carnes y pescados, y en todos los casos la sartén ha demostrado su capacidad de liberar los alimentos sin dificultad. Además, el revestimiento antiadherente de calidad premium es resistente a los arañazos, lo que aumenta la durabilidad de la sartén.\n",
            "La comodidad de uso es otro punto destacado de la \"MasterChef Pro\". El mango ergonómico de baquelita se mantiene fresco al tacto durante la cocción, lo que evita quemaduras accidentales. Además, el mango está firmemente unido a la sartén, lo que proporciona un agarre seguro y estable. He apreciado especialmente la ligereza de la sartén, lo que facilita su manipulación y movimiento en la cocina.\n",
            "Una característica que me ha impresionado es la versatilidad de la sartén \"MasterChef Pro\". Es compatible con todo tipo de cocinas, incluyendo inducción, gas, vitrocerámica y electricidad. Esto la convierte en una opción ideal para cualquier hogar, ya que se adapta a diferentes necesidades y circunstancias. Además, su fondo difusor de calor garantiza una transferencia de calor eficiente, lo que permite un control preciso de la temperatura durante la cocción.\n",
            "Otro aspecto a destacar es la facilidad de limpieza de esta sartén. Gracias a su revestimiento antiadherente de calidad, los restos de comida se desprenden con facilidad, lo que simplifica el proceso de lavado. En la mayoría de los casos, basta con un paño húmedo o un poco de agua y jabón para dejarla impecable. Además, la sartén es apta para lavavajillas, lo que resulta muy conveniente en caso de que prefieras esta opción.\n",
            "En cuanto a la durabilidad, hasta ahora la sartén \"MasterChef Pro\" ha demostrado ser resistente y duradera. Su construcción de aluminio fundido y el recubrimiento antiadherente de alta calidad parecen mantenerse en buen estado a pesar del uso constante. Es importante tener en cuenta que el rendimiento y la vida útil de cualquier sartén están influenciados por el cuidado y el uso adecuados, así que es recomendable seguir"
        ], price: "19.99$",
        link: "https://www.example.com",
        category: "tecnologia"
    },
    {
        id: 2,
        image: "https://meencantaleer.es/wp-content/uploads/2023/03/las-brujas-del-ayer-y-del-manana-2-me-encanta-leer.jpg",
        title: "Pulsera Lotus",
        description: [
            "Recientemente he adquirido la sartén \"MasterChef Pro\" de 24 cm y debo decir que estoy encantado con su desempeño en la cocina. Esta sartén de alta calidad ha superado mis expectativas en términos de rendimiento y durabilidad. Permíteme compartir mi experiencia detallada con esta sartén en esta reseña.\n",
            "En primer lugar, la sartén \"MasterChef Pro\" se destaca por su construcción robusta. Está fabricada con aluminio fundido de alta calidad, lo que garantiza una distribución uniforme del calor en toda la superficie de cocción. Esto se traduce en un calentamiento rápido y una cocción uniforme de los alimentos, evitando puntos calientes y proporcionando resultados consistentes.\n",
            "El recubrimiento antiadherente de esta sartén es excepcional. Incluso con mínima cantidad de aceite, los alimentos se deslizan fácilmente sin pegarse. He cocinado desde huevos revueltos hasta carnes y pescados, y en todos los casos la sartén ha demostrado su capacidad de liberar los alimentos sin dificultad. Además, el revestimiento antiadherente de calidad premium es resistente a los arañazos, lo que aumenta la durabilidad de la sartén.\n",
            "La comodidad de uso es otro punto destacado de la \"MasterChef Pro\". El mango ergonómico de baquelita se mantiene fresco al tacto durante la cocción, lo que evita quemaduras accidentales. Además, el mango está firmemente unido a la sartén, lo que proporciona un agarre seguro y estable. He apreciado especialmente la ligereza de la sartén, lo que facilita su manipulación y movimiento en la cocina.\n",
            "Una característica que me ha impresionado es la versatilidad de la sartén \"MasterChef Pro\". Es compatible con todo tipo de cocinas, incluyendo inducción, gas, vitrocerámica y electricidad. Esto la convierte en una opción ideal para cualquier hogar, ya que se adapta a diferentes necesidades y circunstancias. Además, su fondo difusor de calor garantiza una transferencia de calor eficiente, lo que permite un control preciso de la temperatura durante la cocción.\n",
            "Otro aspecto a destacar es la facilidad de limpieza de esta sartén. Gracias a su revestimiento antiadherente de calidad, los restos de comida se desprenden con facilidad, lo que simplifica el proceso de lavado. En la mayoría de los casos, basta con un paño húmedo o un poco de agua y jabón para dejarla impecable. Además, la sartén es apta para lavavajillas, lo que resulta muy conveniente en caso de que prefieras esta opción.\n",
            "En cuanto a la durabilidad, hasta ahora la sartén \"MasterChef Pro\" ha demostrado ser resistente y duradera. Su construcción de aluminio fundido y el recubrimiento antiadherente de alta calidad parecen mantenerse en buen estado a pesar del uso constante. Es importante tener en cuenta que el rendimiento y la vida útil de cualquier sartén están influenciados por el cuidado y el uso adecuados, así que es recomendable seguir"
        ], price: "19.99$",
        link: "https://www.example.com",
        category: "moda"
    },
    {
        id: 3,
        image: "https://meencantaleer.es/wp-content/uploads/2023/02/todo-cuanto-ame-2-me-encanta-leer.jpg",
        title: "Falda primavera",
        description: [
            "Recientemente he adquirido la sartén \"MasterChef Pro\" de 24 cm y debo decir que estoy encantado con su desempeño en la cocina. Esta sartén de alta calidad ha superado mis expectativas en términos de rendimiento y durabilidad. Permíteme compartir mi experiencia detallada con esta sartén en esta reseña.\n",
            "En primer lugar, la sartén \"MasterChef Pro\" se destaca por su construcción robusta. Está fabricada con aluminio fundido de alta calidad, lo que garantiza una distribución uniforme del calor en toda la superficie de cocción. Esto se traduce en un calentamiento rápido y una cocción uniforme de los alimentos, evitando puntos calientes y proporcionando resultados consistentes.\n",
            "El recubrimiento antiadherente de esta sartén es excepcional. Incluso con mínima cantidad de aceite, los alimentos se deslizan fácilmente sin pegarse. He cocinado desde huevos revueltos hasta carnes y pescados, y en todos los casos la sartén ha demostrado su capacidad de liberar los alimentos sin dificultad. Además, el revestimiento antiadherente de calidad premium es resistente a los arañazos, lo que aumenta la durabilidad de la sartén.\n",
            "La comodidad de uso es otro punto destacado de la \"MasterChef Pro\". El mango ergonómico de baquelita se mantiene fresco al tacto durante la cocción, lo que evita quemaduras accidentales. Además, el mango está firmemente unido a la sartén, lo que proporciona un agarre seguro y estable. He apreciado especialmente la ligereza de la sartén, lo que facilita su manipulación y movimiento en la cocina.\n",
            "Una característica que me ha impresionado es la versatilidad de la sartén \"MasterChef Pro\". Es compatible con todo tipo de cocinas, incluyendo inducción, gas, vitrocerámica y electricidad. Esto la convierte en una opción ideal para cualquier hogar, ya que se adapta a diferentes necesidades y circunstancias. Además, su fondo difusor de calor garantiza una transferencia de calor eficiente, lo que permite un control preciso de la temperatura durante la cocción.\n",
            "Otro aspecto a destacar es la facilidad de limpieza de esta sartén. Gracias a su revestimiento antiadherente de calidad, los restos de comida se desprenden con facilidad, lo que simplifica el proceso de lavado. En la mayoría de los casos, basta con un paño húmedo o un poco de agua y jabón para dejarla impecable. Además, la sartén es apta para lavavajillas, lo que resulta muy conveniente en caso de que prefieras esta opción.\n",
            "En cuanto a la durabilidad, hasta ahora la sartén \"MasterChef Pro\" ha demostrado ser resistente y duradera. Su construcción de aluminio fundido y el recubrimiento antiadherente de alta calidad parecen mantenerse en buen estado a pesar del uso constante. Es importante tener en cuenta que el rendimiento y la vida útil de cualquier sartén están influenciados por el cuidado y el uso adecuados, así que es recomendable seguir"
        ], price: "19.99$",
        link: "https://www.amazon.es/Plisada-Algod%C3%B3n-El%C3%A1stica-Pantal%C3%B3n-Interior/dp/B09XD8N8QZ/ref=sxin_16_sbv_search_btf?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.23361681-ceb7-4033-931c-516780e5590c%3Aamzn1.sym.23361681-ceb7-4033-931c-516780e5590c&cv_ct_cx=falda&keywords=falda&pd_rd_i=B09XD8N8QZ&pd_rd_r=4bfd12b2-f1c6-49d1-abe4-96ea12fe01c0&pd_rd_w=6n5WS&pd_rd_wg=yxxeq&pf_rd_p=23361681-ceb7-4033-931c-516780e5590c&pf_rd_r=JANNPNCW2AA40X076762&qid=1684350851&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-1-9131241a-a358-4619-a7b8-0f5a65d91d81",
        category: "moda"
    },
    {
        id: 4,
        image: "https://meencantaleer.es/wp-content/uploads/2023/03/la-forja-de-una-rebelde-1-me-encanta-leer.jpg",
        title: "Product name 4",
        description: [
            "Recientemente he adquirido la sartén \"MasterChef Pro\" de 24 cm y debo decir que estoy encantado con su desempeño en la cocina. Esta sartén de alta calidad ha superado mis expectativas en términos de rendimiento y durabilidad. Permíteme compartir mi experiencia detallada con esta sartén en esta reseña.\n",
            "En primer lugar, la sartén \"MasterChef Pro\" se destaca por su construcción robusta. Está fabricada con aluminio fundido de alta calidad, lo que garantiza una distribución uniforme del calor en toda la superficie de cocción. Esto se traduce en un calentamiento rápido y una cocción uniforme de los alimentos, evitando puntos calientes y proporcionando resultados consistentes.\n",
            "El recubrimiento antiadherente de esta sartén es excepcional. Incluso con mínima cantidad de aceite, los alimentos se deslizan fácilmente sin pegarse. He cocinado desde huevos revueltos hasta carnes y pescados, y en todos los casos la sartén ha demostrado su capacidad de liberar los alimentos sin dificultad. Además, el revestimiento antiadherente de calidad premium es resistente a los arañazos, lo que aumenta la durabilidad de la sartén.\n",
            "La comodidad de uso es otro punto destacado de la \"MasterChef Pro\". El mango ergonómico de baquelita se mantiene fresco al tacto durante la cocción, lo que evita quemaduras accidentales. Además, el mango está firmemente unido a la sartén, lo que proporciona un agarre seguro y estable. He apreciado especialmente la ligereza de la sartén, lo que facilita su manipulación y movimiento en la cocina.\n",
            "Una característica que me ha impresionado es la versatilidad de la sartén \"MasterChef Pro\". Es compatible con todo tipo de cocinas, incluyendo inducción, gas, vitrocerámica y electricidad. Esto la convierte en una opción ideal para cualquier hogar, ya que se adapta a diferentes necesidades y circunstancias. Además, su fondo difusor de calor garantiza una transferencia de calor eficiente, lo que permite un control preciso de la temperatura durante la cocción.\n",
            "Otro aspecto a destacar es la facilidad de limpieza de esta sartén. Gracias a su revestimiento antiadherente de calidad, los restos de comida se desprenden con facilidad, lo que simplifica el proceso de lavado. En la mayoría de los casos, basta con un paño húmedo o un poco de agua y jabón para dejarla impecable. Además, la sartén es apta para lavavajillas, lo que resulta muy conveniente en caso de que prefieras esta opción.\n",
            "En cuanto a la durabilidad, hasta ahora la sartén \"MasterChef Pro\" ha demostrado ser resistente y duradera. Su construcción de aluminio fundido y el recubrimiento antiadherente de alta calidad parecen mantenerse en buen estado a pesar del uso constante. Es importante tener en cuenta que el rendimiento y la vida útil de cualquier sartén están influenciados por el cuidado y el uso adecuados, así que es recomendable seguir"
        ], price: "22.55$",
        link: "https://www.example.com",
        category: "tecnologia"
    },
    {
        id: 5,
        image: "https://meencantaleer.es/wp-content/uploads/2023/01/la-caza-del-carnero-salvaje-2-me-encanta-leer.jpg",
        title: "Product name 5",
        description: [
            "Recientemente he adquirido la sartén \"MasterChef Pro\" de 24 cm y debo decir que estoy encantado con su desempeño en la cocina. Esta sartén de alta calidad ha superado mis expectativas en términos de rendimiento y durabilidad. Permíteme compartir mi experiencia detallada con esta sartén en esta reseña.\n",
            "En primer lugar, la sartén \"MasterChef Pro\" se destaca por su construcción robusta. Está fabricada con aluminio fundido de alta calidad, lo que garantiza una distribución uniforme del calor en toda la superficie de cocción. Esto se traduce en un calentamiento rápido y una cocción uniforme de los alimentos, evitando puntos calientes y proporcionando resultados consistentes.\n",
            "El recubrimiento antiadherente de esta sartén es excepcional. Incluso con mínima cantidad de aceite, los alimentos se deslizan fácilmente sin pegarse. He cocinado desde huevos revueltos hasta carnes y pescados, y en todos los casos la sartén ha demostrado su capacidad de liberar los alimentos sin dificultad. Además, el revestimiento antiadherente de calidad premium es resistente a los arañazos, lo que aumenta la durabilidad de la sartén.\n",
            "La comodidad de uso es otro punto destacado de la \"MasterChef Pro\". El mango ergonómico de baquelita se mantiene fresco al tacto durante la cocción, lo que evita quemaduras accidentales. Además, el mango está firmemente unido a la sartén, lo que proporciona un agarre seguro y estable. He apreciado especialmente la ligereza de la sartén, lo que facilita su manipulación y movimiento en la cocina.\n",
            "Una característica que me ha impresionado es la versatilidad de la sartén \"MasterChef Pro\". Es compatible con todo tipo de cocinas, incluyendo inducción, gas, vitrocerámica y electricidad. Esto la convierte en una opción ideal para cualquier hogar, ya que se adapta a diferentes necesidades y circunstancias. Además, su fondo difusor de calor garantiza una transferencia de calor eficiente, lo que permite un control preciso de la temperatura durante la cocción.\n",
            "Otro aspecto a destacar es la facilidad de limpieza de esta sartén. Gracias a su revestimiento antiadherente de calidad, los restos de comida se desprenden con facilidad, lo que simplifica el proceso de lavado. En la mayoría de los casos, basta con un paño húmedo o un poco de agua y jabón para dejarla impecable. Además, la sartén es apta para lavavajillas, lo que resulta muy conveniente en caso de que prefieras esta opción.\n",
            "En cuanto a la durabilidad, hasta ahora la sartén \"MasterChef Pro\" ha demostrado ser resistente y duradera. Su construcción de aluminio fundido y el recubrimiento antiadherente de alta calidad parecen mantenerse en buen estado a pesar del uso constante. Es importante tener en cuenta que el rendimiento y la vida útil de cualquier sartén están influenciados por el cuidado y el uso adecuados, así que es recomendable seguir"
        ], price: "19.99$",
        link: "https://www.example.com",
        category: "tecnologia"
    },
    {
        id: 6,
        image: "https://meencantaleer.es/wp-content/uploads/2023/01/lejos-me-encanta-leer-1.jpg",
        title: "Pulsera Lotus",
        description: [
            "Recientemente he adquirido la sartén \"MasterChef Pro\" de 24 cm y debo decir que estoy encantado con su desempeño en la cocina. Esta sartén de alta calidad ha superado mis expectativas en términos de rendimiento y durabilidad. Permíteme compartir mi experiencia detallada con esta sartén en esta reseña.\n",
            "En primer lugar, la sartén \"MasterChef Pro\" se destaca por su construcción robusta. Está fabricada con aluminio fundido de alta calidad, lo que garantiza una distribución uniforme del calor en toda la superficie de cocción. Esto se traduce en un calentamiento rápido y una cocción uniforme de los alimentos, evitando puntos calientes y proporcionando resultados consistentes.\n",
            "El recubrimiento antiadherente de esta sartén es excepcional. Incluso con mínima cantidad de aceite, los alimentos se deslizan fácilmente sin pegarse. He cocinado desde huevos revueltos hasta carnes y pescados, y en todos los casos la sartén ha demostrado su capacidad de liberar los alimentos sin dificultad. Además, el revestimiento antiadherente de calidad premium es resistente a los arañazos, lo que aumenta la durabilidad de la sartén.\n",
            "La comodidad de uso es otro punto destacado de la \"MasterChef Pro\". El mango ergonómico de baquelita se mantiene fresco al tacto durante la cocción, lo que evita quemaduras accidentales. Además, el mango está firmemente unido a la sartén, lo que proporciona un agarre seguro y estable. He apreciado especialmente la ligereza de la sartén, lo que facilita su manipulación y movimiento en la cocina.\n",
            "Una característica que me ha impresionado es la versatilidad de la sartén \"MasterChef Pro\". Es compatible con todo tipo de cocinas, incluyendo inducción, gas, vitrocerámica y electricidad. Esto la convierte en una opción ideal para cualquier hogar, ya que se adapta a diferentes necesidades y circunstancias. Además, su fondo difusor de calor garantiza una transferencia de calor eficiente, lo que permite un control preciso de la temperatura durante la cocción.\n",
            "Otro aspecto a destacar es la facilidad de limpieza de esta sartén. Gracias a su revestimiento antiadherente de calidad, los restos de comida se desprenden con facilidad, lo que simplifica el proceso de lavado. En la mayoría de los casos, basta con un paño húmedo o un poco de agua y jabón para dejarla impecable. Además, la sartén es apta para lavavajillas, lo que resulta muy conveniente en caso de que prefieras esta opción.\n",
            "En cuanto a la durabilidad, hasta ahora la sartén \"MasterChef Pro\" ha demostrado ser resistente y duradera. Su construcción de aluminio fundido y el recubrimiento antiadherente de alta calidad parecen mantenerse en buen estado a pesar del uso constante. Es importante tener en cuenta que el rendimiento y la vida útil de cualquier sartén están influenciados por el cuidado y el uso adecuados, así que es recomendable seguir"
        ], price: "19.99$",
        link: "https://www.example.com",
        category: "moda"
    },
    {
        id: 7,
        image: "http://cdn.shopify.com/s/files/1/0011/4098/1875/products/efficientorangelote.png?v=1633096809",
        title: "Falda primavera 7",
        description: [
            "Recientemente he adquirido la sartén \"MasterChef Pro\" de 24 cm y debo decir que estoy encantado con su desempeño en la cocina. Esta sartén de alta calidad ha superado mis expectativas en términos de rendimiento y durabilidad. Permíteme compartir mi experiencia detallada con esta sartén en esta reseña.\n",
            "En primer lugar, la sartén \"MasterChef Pro\" se destaca por su construcción robusta. Está fabricada con aluminio fundido de alta calidad, lo que garantiza una distribución uniforme del calor en toda la superficie de cocción. Esto se traduce en un calentamiento rápido y una cocción uniforme de los alimentos, evitando puntos calientes y proporcionando resultados consistentes.\n",
            "El recubrimiento antiadherente de esta sartén es excepcional. Incluso con mínima cantidad de aceite, los alimentos se deslizan fácilmente sin pegarse. He cocinado desde huevos revueltos hasta carnes y pescados, y en todos los casos la sartén ha demostrado su capacidad de liberar los alimentos sin dificultad. Además, el revestimiento antiadherente de calidad premium es resistente a los arañazos, lo que aumenta la durabilidad de la sartén.\n",
            "La comodidad de uso es otro punto destacado de la \"MasterChef Pro\". El mango ergonómico de baquelita se mantiene fresco al tacto durante la cocción, lo que evita quemaduras accidentales. Además, el mango está firmemente unido a la sartén, lo que proporciona un agarre seguro y estable. He apreciado especialmente la ligereza de la sartén, lo que facilita su manipulación y movimiento en la cocina.\n",
            "Una característica que me ha impresionado es la versatilidad de la sartén \"MasterChef Pro\". Es compatible con todo tipo de cocinas, incluyendo inducción, gas, vitrocerámica y electricidad. Esto la convierte en una opción ideal para cualquier hogar, ya que se adapta a diferentes necesidades y circunstancias. Además, su fondo difusor de calor garantiza una transferencia de calor eficiente, lo que permite un control preciso de la temperatura durante la cocción.\n",
            "Otro aspecto a destacar es la facilidad de limpieza de esta sartén. Gracias a su revestimiento antiadherente de calidad, los restos de comida se desprenden con facilidad, lo que simplifica el proceso de lavado. En la mayoría de los casos, basta con un paño húmedo o un poco de agua y jabón para dejarla impecable. Además, la sartén es apta para lavavajillas, lo que resulta muy conveniente en caso de que prefieras esta opción.\n",
            "En cuanto a la durabilidad, hasta ahora la sartén \"MasterChef Pro\" ha demostrado ser resistente y duradera. Su construcción de aluminio fundido y el recubrimiento antiadherente de alta calidad parecen mantenerse en buen estado a pesar del uso constante. Es importante tener en cuenta que el rendimiento y la vida útil de cualquier sartén están influenciados por el cuidado y el uso adecuados, así que es recomendable seguir"
        ], price: "19.99$",
        link: "https://www.amazon.es/Plisada-Algod%C3%B3n-El%C3%A1stica-Pantal%C3%B3n-Interior/dp/B09XD8N8QZ/ref=sxin_16_sbv_search_btf?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.23361681-ceb7-4033-931c-516780e5590c%3Aamzn1.sym.23361681-ceb7-4033-931c-516780e5590c&cv_ct_cx=falda&keywords=falda&pd_rd_i=B09XD8N8QZ&pd_rd_r=4bfd12b2-f1c6-49d1-abe4-96ea12fe01c0&pd_rd_w=6n5WS&pd_rd_wg=yxxeq&pf_rd_p=23361681-ceb7-4033-931c-516780e5590c&pf_rd_r=JANNPNCW2AA40X076762&qid=1684350851&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-1-9131241a-a358-4619-a7b8-0f5a65d91d81",
        category: "moda"
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


// function printProducts(products) {
//     productsContainer.innerHTML = "";
//
//     products.forEach(function (product) {
//         // Crear los elementos de la card
//         const card = document.createElement("div");
//         card.className = "card mb-3";
//
//         let prodDescription = truncateText(`${product.description[0]}`);
//
//
//         const cardContent = `
//     <div class="row no-gutters">
//       <div class="col-md-4">
//         <img src="${product.image}" class="card-img img-fluid" alt="..." style="object-fit: cover; height: 100%;">
//       </div>
//       <div class="col-md-8">
//         <div class="card-body">
//           <h5 class="card-title">${product.title}</h5>
//           <p class="card-text">${prodDescription}</p>
//           <p class="card-text"><small class="text-muted">${product.price}</small></p>
//           <a class="btn btn-primary" style="color: white"  onclick="showDetails(${product.id})">Ver review</a>
//         </div>
//       </div>
//     </div>
//   `;
//         // Agregar el contenido a la card
//         card.innerHTML = cardContent;
//         // Agregar la card al contenedor de productos
//         productsContainer.appendChild(card);
//     });
//
// }

// function printProducts(products) {
//     productsContainer.innerHTML = "";
//
//     let row = document.createElement("div");
//     row.className = "row";
//
//     products.forEach(function (product, index) {
//         // Crear los elementos de la card
//         const card = document.createElement("div");
//         card.className = "card mb-3 col-md-6"; // Agregamos "col-md-6" para ocupar la mitad del ancho en pantallas medianas y grandes
//
//         let prodDescription = truncateText(`${product.description[0]}`);
//
//         const cardContent = `
//             <div class="row no-gutters">
//                 <div class="col-md-4">
//                     <img src="${product.image}" class="card-img img-fluid" alt="..." style="object-fit: cover; height: 100%;">
//                 </div>
//                 <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title" style="font-family: 'American Typewriter'">${product.title}</h5>
//                         <p class="card-text">${prodDescription}</p>
//                         <p class="card-text"><small class="text-muted">${product.price}</small></p>
//                         <a class="btn btn-primary" style="color: white"  onclick="showDetails(${product.id})">Ver review</a>
//                     </div>
//                 </div>
//             </div>
//         `;
//         // Agregar el contenido a la card
//         card.innerHTML = cardContent;
//
//         if (index % 2 === 0 && index > 0) {
//             productsContainer.appendChild(row);
//             row = document.createElement("div");
//             row.className = "row";
//         }
//
//         // Agregar la card a la fila
//         row.appendChild(card);
//     });
//
//     if (row.childElementCount > 0) {
//         productsContainer.appendChild(row);
//     }
// }


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
                    <img src="${product.image}" class="card-img img-fluid" alt="..." style="object-fit: cover; height: 100%;">
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
            <img src="${productsJson[id].image}" class="article-image" alt="Imagen del producto">
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