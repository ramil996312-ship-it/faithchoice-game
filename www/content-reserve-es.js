// Reserve batch — ES translations, all 50 stories (complete, translated from content-reserve-ru.js).
// Mirrors content-reserve-ru.js structure exactly (same scene keys/next/choices/effects); only text,
// choice labels, and character name/theme were translated. Not wired into index.html (see
// content-reserve-ru.js's own header) — preview/review only until approved for the live game.
(function () {
  const CHARACTERS = [
    { id: 0, key: 'tenboom', name: "Katia", gender: 'ж', theme: "salvar judíos, campo de concentración, perdón", color: '#ce3b3b' },
    { id: 1, key: 'wurmbrand', name: "Víctor", gender: 'м', theme: "torturado en prisión por su fe, persecución", color: '#d85241' },
    { id: 2, key: 'brotherandrew', name: "Genaro", gender: 'м', theme: "contrabando de Biblias tras el Telón de Acero", color: '#e16b47' },
    { id: 3, key: 'bonhoeffer', name: "Toni", gender: 'м', theme: "resistencia al nazismo, ejecutado por su fe", color: '#d78c60' },
    { id: 4, key: 'liddell', name: "Bruno", gender: 'м', theme: "campeón olímpico, misionero, campo japonés", color: '#d58234' },
    { id: 5, key: 'elliot', name: "María", gender: 'ж', theme: "esposo misionero asesinado por una tribu, perdón", color: '#df9d3a' },
    { id: 6, key: 'aylward', name: "Ana", gender: 'ж', theme: "misionera en China, rescate de niños", color: '#d4b054' },
    { id: 7, key: 'wangmingdao', name: "Miguel", gender: 'м', theme: "pastor chino, décadas de prisión", color: '#ddc75a' },
    { id: 8, key: 'watchmannee', name: "Emilio", gender: 'м', theme: "líder de iglesia chino, campo de trabajo", color: '#ddd72c' },
    { id: 9, key: 'wilberforce', name: "Pedro", gender: 'м', theme: "diputado del parlamento, lucha por abolir la esclavitud", color: '#c6d147' },
    { id: 10, key: 'asiabibi', name: "Lucía", gender: 'ж', theme: "condenada a muerte por una acusación falsa", color: '#bedb4d' },
    { id: 11, key: 'meriam', name: "Juana", gender: 'ж', theme: "condenada a muerte por su fe, parto en prisión", color: '#b6e354' },
    { id: 12, key: 'kaylamueller', name: "Rita", gender: 'ж', theme: "rehén de terroristas, murió cautiva", color: '#8ece3b' },
    { id: 13, key: 'wangyi', name: "Juan", gender: 'м', theme: "pastor chino, prisión por una iglesia independiente", color: '#82d841' },
    { id: 14, key: 'zhang', name: "Jorge", gender: 'м', theme: "líder de iglesias domésticas, décadas de prisión", color: '#78e147' },
    { id: 15, key: 'perpetua', name: "Valeria", gender: 'ж', theme: "mártir de los primeros cristianos", color: '#78d760' },
    { id: 16, key: 'kimphuc', name: "Antonia", gender: 'ж', theme: "víctima de guerra, perdón", color: '#41d534' },
    { id: 17, key: 'darlene', name: "Nelly", gender: 'ж', theme: "campo de prisioneros, condenada a muerte", color: '#3adf3f' },
    { id: 18, key: 'leah', name: "Lina", gender: 'ж', theme: "secuestrada por milicianos, se negó a renunciar a su fe", color: '#54d469' },
    { id: 19, key: 'doss', name: "Marcos", gender: 'м', theme: "camillero que se negó a portar armas, salvó a decenas", color: '#5add7f' },
    { id: 20, key: 'wilkerson', name: "Federico", gender: 'м', theme: "ministerio con pandillas callejeras", color: '#2cdd73' },
    { id: 21, key: 'pullinger', name: "Diana", gender: 'ж', theme: "ministerio con adictos en los barrios pobres", color: '#47d18f' },
    { id: 22, key: 'baldwin', name: "Mateo", gender: 'м', theme: "actor, conversión tras la tragedia", color: '#4ddba7' },
    { id: 23, key: 'cooper', name: "Simón", gender: 'м', theme: "músico de rock, alcoholismo", color: '#54e3c2' },
    { id: 24, key: 'pacquiao', name: "Zacarías", gender: 'м', theme: "boxeador, adicciones e infidelidades", color: '#3bcebd' },
    { id: 25, key: 'franklin', name: "Efraín", gender: 'м', theme: "músico, abandonado en la infancia, adicción", color: '#41d8d8' },
    { id: 26, key: 'lecrae', name: "Elías", gender: 'м', theme: "artista, abuso en la infancia y adicción", color: '#47cfe1' },
    { id: 27, key: 'buchan', name: "Rodrigo", gender: 'м', theme: "granjero convertido en evangelista", color: '#60bbd7' },
    { id: 28, key: 'lamott', name: "Alina", gender: 'ж', theme: "escritora, alcoholismo", color: '#349ad5' },
    { id: 29, key: 'mccorvey', name: "Inés", gender: 'ж', theme: "símbolo del caso sobre el aborto, conversión provida", color: '#3a8fdf' },
    { id: 30, key: 'cslewis', name: "Teo", gender: 'м', theme: "profesor ateo, convertido en apologista", color: '#5487d4' },
    { id: 31, key: 'muggeridge', name: "Arcadio", gender: 'м', theme: "periodista ateo, conversión", color: '#5a7fdd' },
    { id: 32, key: 'mcgrath', name: "Germán", gender: 'м', theme: "científico ateo, se convirtió en teólogo", color: '#2c4add' },
    { id: 33, key: 'wallace', name: "Nico", gender: 'м', theme: "detective ateo, apologista", color: '#474cd1' },
    { id: 34, key: 'mcdowell', name: "Marcos", gender: 'м', theme: "escéptico, violencia en la infancia, apologista", color: '#594ddb' },
    { id: 35, key: 'gumbel', name: "Daniel", gender: 'м', theme: "abogado ateo, se convirtió en sacerdote", color: '#7154e3' },
    { id: 36, key: 'picard', name: "Maya", gender: 'ж', theme: "científica atea, conversión", color: '#6a3bce' },
    { id: 37, key: 'cameron', name: "Elías", gender: 'м', theme: "actor ateo, conversión", color: '#8241d8' },
    { id: 38, key: 'ordway', name: "Lili", gender: 'ж', theme: "profesora atea, conversión", color: '#9e47e1' },
    { id: 39, key: 'crosby', name: "Eva", gender: 'ж', theme: "ciega de nacimiento, autora de himnos", color: '#b160d7' },
    { id: 40, key: 'vujicic', name: "Timoteo", gender: 'м', theme: "discapacidad de nacimiento, evangelista", color: '#b534d5' },
    { id: 41, key: 'hamilton', name: "Clara", gender: 'ж', theme: "perdió un brazo, fe", color: '#d13adf' },
    { id: 42, key: 'donpiper', name: "Sabas", gender: 'м', theme: "muerte clínica, libro sobre el cielo", color: '#d454d0' },
    { id: 43, key: 'norton', name: "Diego", gender: 'м', theme: "parálisis tras una lesión", color: '#dd5ac7' },
    { id: 44, key: 'millard', name: "Mario", gender: 'м', theme: "padre maltratador, reconciliación", color: '#dd2cab' },
    { id: 45, key: 'camp', name: "Esteban", gender: 'м', theme: "su esposa murió de cáncer", color: '#d1479a' },
    { id: 46, key: 'davis', name: "Rosa", gender: 'ж', theme: "misionera, adopción de huérfanas", color: '#db4d92' },
    { id: 47, key: 'baker', name: "Estefanía", gender: 'ж', theme: "misionera entre los más pobres", color: '#e35488' },
    { id: 48, key: 'caine', name: "Claudia", gender: 'ж', theme: "descubrió su origen, lucha contra la trata de personas", color: '#ce3b5d' },
    { id: 49, key: 'muller', name: "Cosme", gender: 'м', theme: "orfanatos sostenidos por la oración", color: '#d84152' },
  ];

  const STORIES = {
    tenboom: {
      "start": "tenboom_intro",
      "scenes": {
        "tenboom_intro": {
          "text": "En la ciudad holandesa de Haarlem, el padre de Katia leía en voz alta un pasaje de la Biblia cada mañana antes del desayuno, junto a la familia y los aprendices que vivían con ellos — una costumbre que no se interrumpió durante años. En esa misma casa, sobre el taller de relojería, la familia construyó desde 1942 una pared falsa en el dormitorio de arriba — un espacio de menos de un metro de profundidad donde, en caso de redada, los fugitivos podían esconderse en segundos. Cientos de judíos y miembros de la Resistencia pasaron por esa casa, escondidos y trasladados por Katia, su hermana Betsy y su padre anciano, sabiendo cada día que esconder a una sola persona significaba fusilamiento inmediato.",
          "next": "tenboom_scene2"
        },
        "tenboom_scene2": {
          "text": "La mañana del 28 de febrero de 1944, la Gestapo irrumpió en la casa por el soplo de un informante. El interrogador le dijo al padre de Katia en la cara que podían fusilarlo ahí mismo por esconder judíos — y el anciano de ochenta y cuatro años respondió con calma que sería un honor dar su vida por el antiguo pueblo de Dios. En ese momento había cuatro personas escondidas en el cuarto secreto — pasaron allí, sin moverse y casi sin respirar, cuarenta y siete horas hasta que terminó el registro; los cuatro sobrevivieron. A Katia, Betsy y su padre los arrestaron y se los llevaron, y diez días después su padre murió en prisión.",
          "next": "tenboom_choice1"
        },
        "tenboom_choice1": {
          "text": "Unos meses después trasladaron a las hermanas al campo de concentración de Ravensbrück, a un barracón tan infestado de pulgas que no había manera de escapar de ellas ni de noche. Betsy, leyendo en voz alta de una Biblia escondida bajo la ropa las palabras del apóstol Pablo sobre dar gracias en toda circunstancia, propuso de pronto agradecer a Dios también por las pulgas — y Katia tuvo que decidir si pronunciar esas gracias en voz alta junto a ella, aunque sonara como una burla de su situación.",
          "choices": [
            {
              "label": "Decir las gracias en voz alta junto a Betsy, aunque parezca absurdo",
              "effects": {
                "faith": 10
              },
              "next": "tenboom_bridgeA"
            },
            {
              "label": "Negarse a agradecer algo tan ridículo",
              "effects": {
                "faith": -10
              },
              "next": "tenboom_bridgeB"
            }
          ]
        },
        "tenboom_bridgeA": {
          "text": "Katia se obligó a pronunciar las palabras de agradecimiento junto a su hermana. Solo semanas después descubrieron la razón por la que las guardias nunca entraban a su barracón para las inspecciones sorpresa, como sí hacían en los demás: las guardias sentían asco de las pulgas y evitaban por completo el lugar. Gracias a eso, cada noche Katia y Betsy podían reunir a docenas de mujeres a su alrededor y leer en voz alta la Biblia escondida en una bolsita bajo la ropa — el único lugar de todo el campo donde eso era seguro.",
          "next": "tenboom_choice2"
        },
        "tenboom_bridgeB": {
          "text": "Katia no pudo obligarse a decir esas gracias y se quedó callada, aún molesta por dentro con lo absurdo de la situación. No organizó lecturas nocturnas en el barracón para las demás mujeres, y su propia fe en esas semanas se sostuvo solo por una terquedad muda y agotada — sin esa paz callada y casi imposible de la que después escribiría Betsy.",
          "next": "tenboom_choice2"
        },
        "tenboom_choice2": {
          "text": "Betsy murió en Ravensbrück en diciembre de 1944, y a Katia misma la liberaron unos días después por un error administrativo — justo una semana antes de que a todas las mujeres de su edad en el campo las enviaran a las cámaras de gas. Años después de la guerra, dando una charla sobre el perdón en Múnich ante antiguos prisioneros, Katia reconoció de pronto entre el público el rostro de uno de los guardias más crueles de aquel mismo barracón donde había muerto Betsy — él se acercó después de la charla, le tendió la mano y le pidió perdón.",
          "choices": [
            {
              "label": "Obligarse a estrechar la mano tendida",
              "effects": {
                "faith": 15
              },
              "next": "tenboom_endLight"
            },
            {
              "label": "Darse la vuelta y negarse a darle la mano",
              "effects": {
                "faith": -15
              },
              "next": "tenboom_endDark"
            }
          ]
        },
        "tenboom_endLight": {
          "text": "Katia oró en silencio: \"Señor, no puedo perdonarlo — dame tu perdón\", y como el brazo seguía sin querer subir, añadió más sencillo: \"Señor, ayúdame. Al menos puedo levantar la mano — el resto dámelo tú\". Le tendió la mano y le estrechó la suya — y en ese momento, según sus propias palabras posteriores, sintió como si un calor le recorriera el hombro y el brazo, y los ojos se le llenaron de lágrimas de un perdón que ella misma no podía encontrar dentro de sí. Recorrió más de sesenta países con esta historia como, según sus propias palabras, \"una vagabunda del Señor\", hasta su muerte en 1983, repitiendo que el perdón es un acto de la voluntad, no un sentimiento — algo que se puede elegir sin importar lo que esté pasando en el corazón. En 1967 el memorial israelí de Yad Vashem la nombró \"Justa entre las Naciones\". Fin de la historia de Katia.",
          "next": null,
          "choices": []
        },
        "tenboom_endDark": {
          "text": "Katia se dio la vuelta y no le dio la mano, dejando al antiguo guardia de pie con el brazo aún tendido en la sala vacía. Por fuera su vida siguió como antes — charlas, viajes, libros sobre la guerra — pero según su propia confesión años después, ese único encuentro fue algo que nunca logró sacarse de la memoria, volviendo mentalmente a aquel barracón cada vez que oía hablar alemán. Fin de la historia de Katia.",
          "next": null,
          "choices": []
        }
      }
    },
    wurmbrand: {
      "start": "wurmbrand_intro",
      "scenes": {
        "wurmbrand_intro": {
          "text": "Víctor, rumano de nacimiento, llegó a la fe a mediados de los años treinta en circunstancias inesperadas: escondido con su esposa Sabina en un pueblo de montaña, se alojaron con un carpintero alemán ya mayor que llevaba años orando para que Dios le trajera aunque fuera a un solo judío para hablarle de Cristo, ya que él mismo no podía bajar de las montañas. El anciano le regaló a Víctor un Nuevo Testamento; este, para su propia sorpresa, comenzó a leerlo — al principio casi a regañadientes — y en sus páginas se encontró por primera vez con Cristo; poco después creyó también Sabina. Para 1945, cuando los comunistas tomaron el poder en Rumania, Víctor ya pastoreaba una pequeña congregación en Bucarest.",
          "next": "wurmbrand_scene2"
        },
        "wurmbrand_scene2": {
          "text": "Ese mismo 1945, el gobierno convocó en la capital un gran congreso del clero rumano — unos cuatro mil sacerdotes y pastores debían jurar públicamente lealtad al nuevo régimen y a Stalin en persona, transmitido en vivo por radio a todo el país. Sabina, al enterarse, le dijo a su esposo sin rodeos: \"Levántate y lava esta vergüenza del rostro de Cristo\" — que al menos un sacerdote en esa sala no se avergonzara de Él delante de todos. Víctor respondió que si hacía eso, ella podría quedarse sin esposo; Sabina respondió que no necesitaba un esposo cobarde.",
          "next": "wurmbrand_choice1"
        },
        "wurmbrand_choice1": {
          "text": "Cuando llegó el turno de su fila, y la sala ya aplaudía otro discurso más de elogio a Stalin, Víctor tuvo que decidir si levantarse y declarar en vivo, ante todo el auditorio y los radioyentes, que la lealtad de los cristianos pertenece solo al Rey de reyes, no a los gobernantes terrenales — o quedarse sentado en silencio junto a los demás miles de sacerdotes.",
          "choices": [
            {
              "label": "Levantarse y decir la verdad ante toda la sala y la radio",
              "effects": {
                "faith": 10
              },
              "next": "wurmbrand_bridgeA"
            },
            {
              "label": "Quedarse sentado en silencio, como todos los demás",
              "effects": {
                "faith": -10
              },
              "next": "wurmbrand_bridgeB"
            }
          ]
        },
        "wurmbrand_bridgeA": {
          "text": "Víctor se levantó y pronunció en vivo un breve discurso sobre que los cristianos deben honrar solo a Dios y a Cristo, no a los gobernantes terrenales — la sala se quedó paralizada por un instante, y a los pocos segundos cortaron la transmisión por orden de los organizadores. Desde ese día lo vigilaron, y tres años después, en 1948, lo arrestaron en plena calle camino a la iglesia.",
          "next": "wurmbrand_choice2"
        },
        "wurmbrand_bridgeB": {
          "text": "Víctor se quedó sentado junto a los demás y pronunció el juramento junto con toda la sala, diciéndose que podría servir a Dios con más discreción quedándose libre, aunque esa misma noche, en casa, oró largamente pidiendo perdón por palabras dichas por su propia seguridad y no por convicción. Esa vez no lo vigilaron, pero sus sermones se volvieron cada vez más audaces, y en 1948, cuando volvió a negarse — ya públicamente — a jurar lealtad al nuevo régimen, también a él lo arrestaron en la calle camino a la iglesia.",
          "next": "wurmbrand_choice2"
        },
        "wurmbrand_choice2": {
          "text": "A Víctor lo mantuvieron preso catorce años en total, tres de ellos en una celda solitaria a unos nueve metros bajo tierra, sin Biblia, papel ni pluma. Para no quebrarse, cada día componía y predicaba en voz alta un nuevo sermón ante una congregación imaginaria, basándose en versículos que recordaba de memoria, convirtiendo las ideas principales en versos rimados para no olvidarlos. Lo torturaron y le rompieron los huesos exigiéndole que diera los nombres de otros creyentes de su congregación. Cuando el dolor se volvió insoportable, tuvo que decidir si seguir callando sobre sus hermanos de fe o dar al menos un nombre para aliviar la tortura.",
          "choices": [
            {
              "label": "Seguir callado, hicieran lo que hicieran con su cuerpo",
              "effects": {
                "faith": 15
              },
              "next": "wurmbrand_endLight"
            },
            {
              "label": "Dar nombres para aliviar el sufrimiento",
              "effects": {
                "faith": -15
              },
              "next": "wurmbrand_endDark"
            }
          ]
        },
        "wurmbrand_endLight": {
          "text": "Víctor nunca dio un solo nombre en los catorce años de prisión, siguiendo hasta el último día componiendo sermones para su congregación invisible en la oscuridad de la celda. Más tarde escribió: \"Dios no nos juzgará por cuánto sufrimos, sino por cuánto logramos amar\", reconociendo que fue precisamente allí, bajo tortura, donde los cristianos aprendían a amar incluso a sus verdugos. En 1965 organizaciones cristianas extranjeras compraron la libertad de su familia en Rumania pagando diez mil dólares a la policía secreta, y dos años después se publicó su libro \"Torturado por Cristo\", que se convirtió en un best seller en decenas de idiomas; junto con Sabina, que también había cumplido tres años de trabajos forzados, fundó un ministerio de ayuda a cristianos perseguidos en todo el mundo que sigue existiendo hoy. Fin de la historia de Víctor.",
          "next": null,
          "choices": []
        },
        "wurmbrand_endDark": {
          "text": "Víctor dio algunos nombres para detener la tortura, al menos por un tiempo, y a las pocas semanas arrestaron a casi todos los que había nombrado. La tortura tampoco se detuvo para él, y al dolor se le sumó algo con lo que tuvo que vivir el resto de sus años de prisión — una sensación callada, nunca dicha en voz alta, de haber traicionado a quienes confiaron en él. Fin de la historia de Víctor.",
          "next": null,
          "choices": []
        }
      }
    },
    brotherandrew: {
      "start": "brotherandrew_intro",
      "scenes": {
        "brotherandrew_intro": {
          "text": "Genaro, un joven misionero holandés, viajó a Varsovia en 1955 para el Festival Mundial de la Juventud — un evento organizado por las autoridades comunistas — y vio con sus propios ojos cómo, en los países del bloque soviético, los creyentes tenían que esconder hasta una pequeña Biblia de bolsillo. De vuelta en casa, decidió llevar él mismo las Escrituras a esos países, escondiéndolas en el maletero de un viejo Volkswagen Escarabajo azul — convencido desde el principio de que la única protección real en un viaje así no era un escondite ingenioso, sino la confianza directa en Dios en cada frontera concreta.",
          "next": "brotherandrew_scene2"
        },
        "brotherandrew_scene2": {
          "text": "Decenas de aduaneros y guardias fronterizos revisaban minuciosa y largamente cada auto que cruzaba las fronteras de los países socialistas; llevar literatura religiosa se castigaba con confiscación y deportación, y para quienes la recibían, con prisión. Antes de cada cruce de frontera con el maletero lleno de Biblias a la vista, sin esconder, Genaro se detenía en la barrera con el corazón acelerado.",
          "next": "brotherandrew_choice1"
        },
        "brotherandrew_choice1": {
          "text": "En uno de sus primeros cruces peligrosos, mientras el guardia rodeaba lentamente el auto, Genaro tuvo que decidir si confiar solo en su propia prudencia y las excusas preparadas, o pronunciar en voz alta por primera vez la oración que después se volvería su costumbre: \"Señor, en mi equipaje llevo Escrituras que quiero llevar a tus hijos. Cuando estuviste en la tierra, hiciste ver a los ojos ciegos — ahora te pido que hagas ciegos los ojos que ven, a lo que no quieres que vean\".",
          "choices": [
            {
              "label": "Decir esa oración y confiar plenamente en Dios",
              "effects": {
                "faith": 10
              },
              "next": "brotherandrew_bridgeA"
            },
            {
              "label": "Confiar solo en su propia prudencia y su historia",
              "effects": {
                "faith": -10
              },
              "next": "brotherandrew_bridgeB"
            }
          ]
        },
        "brotherandrew_bridgeA": {
          "text": "Genaro pronunció en voz baja su oración, mientras veía al guardia mirar directamente la pila de Biblias que estaban a la vista en el asiento trasero — y, para su propio asombro, este cerró la puerta sin detenerse y le hizo señas de seguir. Esa misma oración se repitió cientos de veces en decenas de fronteras a lo largo de los años siguientes, y Genaro llegó a confiar en ella más que en cualquier escondite o historia inventada.",
          "next": "brotherandrew_choice2"
        },
        "brotherandrew_bridgeB": {
          "text": "Genaro decidió no arriesgarse con oraciones y en cambio enterró parte de las Biblias más al fondo, bajo maletas viejas, confiando solo en su propio ingenio. El guardia esa vez revisó largo y a fondo, y Genaro pasó toda la inspección con sudor frío, sintiendo que cargaba con ese peso completamente solo, sin ninguna certeza de que lo lograría.",
          "next": "brotherandrew_choice2"
        },
        "brotherandrew_choice2": {
          "text": "En las siguientes décadas, Genaro llevó de contrabando cientos de miles de Biblias y literatura cristiana a través de las fronteras de los países socialistas, recorriendo casi todo el bloque soviético y más tarde China y otros países cerrados a la fe. Le ofrecieron elegir: instalarse en algún púlpito cómodo en Holanda, alejándose merecidamente del riesgo, o seguir cruzando fronteras peligrosas durante décadas más, aun cuando ya estaba claro que nunca sería más fácil.",
          "choices": [
            {
              "label": "Seguir cruzando fronteras mientras le queden fuerzas",
              "effects": {
                "faith": 15
              },
              "next": "brotherandrew_endLight"
            },
            {
              "label": "Instalarse en casa y dejar los viajes arriesgados a otros",
              "effects": {
                "faith": -15
              },
              "next": "brotherandrew_endDark"
            }
          ]
        },
        "brotherandrew_endLight": {
          "text": "Genaro siguió viajando con Biblias a través de fronteras cerradas hasta una edad avanzada y fundó el ministerio Puertas Abiertas, que hoy trabaja en decenas de países donde se persigue a los cristianos por su fe; en 1981, una operación que él organizó, llamada \"Perla\", entregó en secreto un millón de Biblias a China en una sola noche. Su autobiografía \"El contrabandista de Dios\" se vendió más de diez millones de veces en treinta y cinco idiomas; murió en septiembre de 2022 en los Países Bajos, a los noventa y cuatro años. Fin de la historia de Genaro.",
          "next": null,
          "choices": []
        },
        "brotherandrew_endDark": {
          "text": "Genaro se instaló en una parroquia tranquila de Holanda, dejando los viajes peligrosos a personas más jóvenes y dispuestas, y de vez en cuando, por el resto de su vida, les contaba a sus feligreses sobre aquel único cruce fronterizo después del cual decidió que ya era suficiente. El ministerio que podría haber surgido de su propia experiencia lo fundó años después otra persona, y aquella breve oración sobre los ojos ciegos del guardia nunca se la contó a nadie más, salvo a algunos de los feligreses más cercanos de su pequeña parroquia holandesa. Fin de la historia de Genaro.",
          "next": null,
          "choices": []
        }
      }
    },
    bonhoeffer: {
      "start": "bonhoeffer_intro",
      "scenes": {
        "bonhoeffer_intro": {
          "text": "Toni, pastor y teólogo luterano alemán, se opuso abiertamente desde 1933 a los intentos nazis de someter a la iglesia alemana, y más tarde se unió al movimiento de la Iglesia Confesante, que se negaba a reconocer la ideología del estado por encima del Evangelio. A través de su cuñado terminó involucrado en un pequeño círculo de conspiradores dentro de la inteligencia militar que preparaban un atentado contra Hitler.",
          "next": "bonhoeffer_scene2"
        },
        "bonhoeffer_scene2": {
          "text": "Durante años Toni había predicado abiertamente sobre la \"gracia costosa\" — una fe que exige de la persona una acción real y un sacrificio, no un cristianismo cómodo y seguro de palabra. Pero una cosa era predicar eso desde el púlpito, y otra muy distinta decidir si estaba dispuesto a cargar personalmente con la culpa de participar en un complot para matar, rompiendo directamente el mandamiento \"no matarás\", con tal de detener la máquina que estaba destruyendo a millones de personas.",
          "next": "bonhoeffer_choice1"
        },
        "bonhoeffer_choice1": {
          "text": "En una reunión secreta con los demás conspiradores, Toni tuvo que decidir: quedarse al margen, limitándose al papel de predicador y hombre de oración cuya autoridad moral quedaría intacta, o asumir conscientemente parte de la responsabilidad por el asesinato planeado, aceptando lo que él mismo llamaba, en sus propios libros, un pecado imperdonable, con tal de salvar muchas otras vidas.",
          "choices": [
            {
              "label": "Asumir parte de la responsabilidad del complot para salvar a otros",
              "effects": {
                "faith": 10
              },
              "next": "bonhoeffer_bridgeA"
            },
            {
              "label": "Quedarse al margen, conservando su propia pureza",
              "effects": {
                "faith": -10
              },
              "next": "bonhoeffer_bridgeB"
            }
          ]
        },
        "bonhoeffer_bridgeA": {
          "text": "Toni decidió permanecer en el círculo de conspiradores, ayudando a transmitir información y contactos entre la Resistencia dentro de Alemania y los aliados en el extranjero, plenamente consciente de que si descubrían el plan, ni su sotana ni su reputación lo ayudarían. Más tarde escribió que había asumido conscientemente la culpa de esa decisión, creyendo que el verdadero discipulado a veces exige no conservar la propia pureza, sino la disposición a ensuciarse las manos por el prójimo.",
          "next": "bonhoeffer_choice2"
        },
        "bonhoeffer_bridgeB": {
          "text": "Toni decidió quedarse al margen de la participación directa en el complot, limitándose al papel de predicador y consuelo para quienes sí participaban, tratando de mantener las manos limpias de lo que él mismo consideraba un pecado. Siguió predicando sobre la \"gracia costosa\" desde el púlpito, pero notaba cada vez más que esas palabras empezaban a sonarle más fáciles de lo que le costaban a él mismo. Quedarse del todo al margen tampoco lo logró: como confesor y amigo cercano de varios conspiradores, siguió estando en la mira de la Gestapo — no como participante, sino como alguien que sabía demasiado.",
          "next": "bonhoeffer_choice2"
        },
        "bonhoeffer_choice2": {
          "text": "En abril de 1943 la Gestapo arrestó a Toni bajo un cargo no relacionado directamente con el complot y lo encerró en la prisión de Tegel, y tras el fracaso del atentado contra Hitler en julio de 1944 las conexiones salieron a la luz por completo. En abril de 1945, apenas unas semanas antes del fin de la guerra, le anunciaron que se acercaba un juicio, y con pocas ilusiones sobre el resultado, tuvo que decidir cómo enfrentar esos últimos días — con desesperación o con paz.",
          "choices": [
            {
              "label": "Enfrentar el final en paz, como el comienzo de la vida verdadera",
              "effects": {
                "faith": 15
              },
              "next": "bonhoeffer_endLight"
            },
            {
              "label": "Pasar los últimos días con amargura y desesperación",
              "effects": {
                "faith": -15
              },
              "next": "bonhoeffer_endDark"
            }
          ]
        },
        "bonhoeffer_endLight": {
          "text": "La mañana del 9 de abril de 1945, Toni fue ejecutado en la horca en el campo de concentración de Flossenbürg, apenas unas semanas antes de que el campo fuera liberado por los aliados. El médico del campo que lo observó esa mañana recordaría después cómo Toni, al quitarse la ropa de prisión, se arrodilló y oró fervientemente a su Dios. Ya antes había escrito desde la prisión que a menudo lo ayudaba pensar en quienes, conocidos y desconocidos, oraban por él — y a esas mismas oraciones creía deber el haber permanecido ileso durante tanto tiempo. Esa mañana alcanzó a celebrar un breve servicio de comunión para algunos compañeros de celda y le pidió a uno de ellos, un inglés, que le transmitiera a otro preso: \"Esto es el final — y para mí, el comienzo de la vida\". Sus libros \"El precio de la gracia\" y \"Resistencia y sumisión\" siguen siendo hoy algunos de los textos cristianos más leídos sobre el precio de la fe verdadera. Fin de la historia de Toni.",
          "next": null,
          "choices": []
        },
        "bonhoeffer_endDark": {
          "text": "Toni pasó sus últimas semanas antes de la ejecución en una desesperación pesada y encerrada en sí misma, apenas hablando con sus compañeros de celda y sin pronunciar en voz alta nada parecido a un consuelo o una esperanza. La mañana del 9 de abril de 1945 lo ejecutaron en el campo de concentración de Flossenbürg junto con los demás conspiradores — apenas unas semanas antes de la liberación del campo — sin dejar tras de sí ni una sola línea de aliento para quienes quedaban. Fin de la historia de Toni.",
          "next": null,
          "choices": []
        }
      }
    },
    liddell: {
      "start": "liddell_intro",
      "scenes": {
        "liddell_intro": {
          "text": "Bruno, atleta escocés nacido en Tianjin en el seno de una familia de misioneros, a los veintidós años ya era considerado uno de los velocistas más fuertes del mundo y el gran favorito de la selección británica en los 100 metros de los Juegos Olímpicos de 1924 en París. Solía decirles a sus amigos que sentía el placer de Dios cada vez que corría al límite de sus fuerzas — correr no era para él una distracción de la fe, sino una forma más de adoración.",
          "next": "liddell_scene2"
        },
        "liddell_scene2": {
          "text": "Unos meses antes de los Juegos, Bruno conoció el calendario de las eliminatorias: la final de los cien metros, su distancia estrella, quedó fijada para un domingo. Desde niño guardaba con firmeza el domingo como día de descanso consagrado solo a Dios, y correr ese día le parecía inadmisible, incluso tratándose del oro olímpico para el que se había preparado toda la vida.",
          "next": "liddell_choice1"
        },
        "liddell_choice1": {
          "text": "La noticia de que podría negarse a correr en domingo desató una tormenta en la prensa británica — llamaban a Bruno traidor del equipo, y uno de los miembros del comité olímpico intentó convencerlo personalmente de reconsiderar su decisión por el bien del país. Bruno tenía que decidir: presentarse a la salida de los cien metros el domingo en contra de sus convicciones, o renunciar a su distancia estrella por su fe, arriesgándose a quedarse sin ninguna medalla.",
          "choices": [
            {
              "label": "Renunciar a los cien metros por el descanso dominical",
              "effects": {
                "faith": 10
              },
              "next": "liddell_bridgeA"
            },
            {
              "label": "Salir a correr el domingo de todos modos, por la medalla",
              "effects": {
                "faith": -10
              },
              "next": "liddell_bridgeB"
            }
          ]
        },
        "liddell_bridgeA": {
          "text": "Bruno renunció a los cien metros y en pocos meses reorganizó toda su preparación para los cuatrocientos — una distancia en la que nunca antes se había entrenado específicamente y en la que no se lo consideraba favorito. Antes de la final, uno de los masajistas del equipo le entregó una nota con una cita bíblica: «A los que me honran, yo los honraré» — Bruno recorrió la vuelta al estadio con su estilo poco ortodoxo, la cabeza echada hacia atrás, y estableció un récord mundial de 47,6 segundos, ganando el oro en una distancia que en un principio no era la suya.",
          "next": "liddell_choice2"
        },
        "liddell_bridgeB": {
          "text": "Bruno, cediendo a la presión de la prensa y de la dirigencia olímpica, salió a correr los cien metros aquel domingo. Corrió muy por debajo de su nivel habitual, incapaz de concentrarse y descubriéndose una y otra vez pensando que estaba violando aquello en lo que de verdad creía; ese día no ganó ninguna medalla, y la decisión lo persiguió durante mucho tiempo, aunque nunca lo reconoció en voz alta.",
          "next": "liddell_choice2"
        },
        "liddell_choice2": {
          "text": "Después de la Olimpiada, Bruno regresó a China como misionero y maestro, y en 1943, durante la ocupación japonesa, terminó internado en el campo de Weixian, en la provincia de Shandong — un lugar abarrotado y hambriento con dos mil personas, entre ellas muchos niños separados de sus padres. Cada mañana, a la luz de una lámpara de aceite, leía la Biblia y oraba durante una hora junto a su compañero de habitación, y por las noches daba clases de Escritura a los internados, repasando una y otra vez el capítulo trece de la primera carta a los Corintios y el Sermón del Monte. Agotado y ya gravemente enfermo, aunque casi no se lo decía a nadie, Bruno tuvo que decidir si guardar las fuerzas que le quedaban y su escasa ración solo para sí, o seguir compartiendo la comida y organizando clases y lecturas nocturnas para los niños del campo.",
          "choices": [
            {
              "label": "Seguir entregando sus últimas fuerzas a los niños del campo hasta el final",
              "effects": {
                "faith": 15
              },
              "next": "liddell_endLight"
            },
            {
              "label": "Cuidarse a sí mismo y apartarse de las tareas del campo",
              "effects": {
                "faith": -15
              },
              "next": "liddell_endDark"
            }
          ]
        },
        "liddell_endLight": {
          "text": "Bruno siguió dando clases y organizando juegos para los niños del campo casi hasta las últimas semanas de su vida, procurando que incluso en un campo de prisioneros de guerra tuvieran algo parecido a una infancia normal. Murió de un tumor cerebral en febrero de 1945, apenas unos meses antes de la liberación del campo, y sus últimas palabras, dirigidas a una hermana de fe que estaba sentada junto a él, fueron: «Es rendición total» — una línea de un himno que amaba, sobre la fe incondicional. Fin de la historia de Bruno.",
          "next": null,
          "choices": []
        },
        "liddell_endDark": {
          "text": "Bruno, sintiendo que las fuerzas lo abandonaban, empezó a renunciar cada vez más a las clases y los juegos con los niños, prefiriendo guardar lo poco que le quedaba solo para sí. Murió de un tumor cerebral en febrero de 1945, apenas unos meses antes de la liberación del campo, y los niños a quienes antes enseñaba y con quienes jugaba recordaron los últimos meses de su vida no por su participación activa, sino por un silencio callado y distante. Fin de la historia de Bruno.",
          "next": null,
          "choices": []
        }
      }
    },
    elliot: {
      "start": "elliot_intro",
      "scenes": {
        "elliot_intro": {
          "text": "María, misionera estadounidense, se preparó durante años junto a su esposo Jim para el primer contacto pacífico con el pueblo huaorani — una tribu de difícil acceso en la selva de Ecuador que hasta entonces mataba a casi todo forastero que se acercara a sus tierras. Poco antes del desembarco, Jim escribió en su diario una frase que María convertiría después en el lema de toda su vida: no es necio quien entrega lo que no puede retener, para ganar lo que no puede perder.",
          "next": "elliot_scene2"
        },
        "elliot_scene2": {
          "text": "El 8 de enero de 1956, Jim desembarcó junto a otros cuatro misioneros en un banco de arena junto al río, tratando de establecer un contacto pacífico con la tribu — y ese mismo día los cinco murieron atravesados por las lanzas de los guerreros huaorani. A María, que quedó sola con su hija Valerie de diez meses, le tocaba decidir cómo seguir viviendo con ese duelo a apenas un par de cientos de kilómetros de la misma tribu que había matado a su esposo.",
          "next": "elliot_choice1"
        },
        "elliot_choice1": {
          "text": "Dos años después, la organización misionera le propuso a María mudarse, junto con la hermana de Jim, a vivir directamente entre el pueblo huaorani — la misma tribu cuyos guerreros habían matado a su esposo — para continuar la obra por la que él había muerto. María tenía que decidir: aceptar la propuesta y establecerse junto a su pequeña hija entre los asesinos de su propio esposo, o rechazarla y volver a un lugar más seguro.",
          "choices": [
            {
              "label": "Mudarse a vivir entre la tribu que mató a su esposo",
              "effects": {
                "faith": 10
              },
              "next": "elliot_bridgeA"
            },
            {
              "label": "Negarse e irse a un lugar más seguro",
              "effects": {
                "faith": -10
              },
              "next": "elliot_bridgeB"
            }
          ]
        },
        "elliot_bridgeA": {
          "text": "María se mudó junto a su pequeña hija directamente al poblado de la tribu huaorani, instalándose a un par de chozas de gente entre la que casi con certeza se encontraban quienes habían matado a Jim. Vivió allí dos años, anotando día tras día en papel los sonidos desconocidos de su lengua oral, para crear por primera vez en la historia un sistema de escritura para ese idioma — y poco a poco, algunos de esos mismos guerreros empezaron a acercarse a preguntarle en qué creía y por qué había muerto su esposo.",
          "next": "elliot_choice2"
        },
        "elliot_bridgeB": {
          "text": "María rechazó el traslado inmediato y, junto con su hija, permaneció varios meses en un lugar más seguro, siguiendo con el trabajo sobre la lengua huaorani a partir de anotaciones que le traían otros misioneros. Pero sin contacto directo con hablantes nativos, el trabajo avanzaba tan lentamente que, medio año después, terminó decidiéndose por el mismo traslado que antes se había negado incluso a considerar — solo que ahora con mucho más miedo y mucha menos disposición interior que si hubiera aceptado desde el principio.",
          "next": "elliot_choice2"
        },
        "elliot_choice2": {
          "text": "Años después de trabajar entre la tribu, varios guerreros huaorani, incluido uno de los que había participado directamente en la muerte de Jim, se acercaron a María para preguntarle si ellos, los asesinos de su esposo, podían de todos modos abrazar la misma fe por la que él había muerto. María recordó aquella misma línea del diario de Jim sobre el hombre que entrega lo que no puede retener para ganar lo que no puede perder, y por primera vez en años comprendió que la pregunta de esos hombres era una continuación directa, aunque del todo inesperada, de la misma decisión que su esposo había tomado en el banco de arena. María tenía que decidir cómo responder a un hombre que confesaba haber sido uno de los que mataron a su esposo con la lanza.",
          "choices": [
            {
              "label": "Aceptarlo como hermano en la fe, sin ningún rencor",
              "effects": {
                "faith": 15
              },
              "next": "elliot_endLight"
            },
            {
              "label": "Negarse a perdonar y mantener las distancias",
              "effects": {
                "faith": -15
              },
              "next": "elliot_endDark"
            }
          ]
        },
        "elliot_endLight": {
          "text": "María lo aceptó como hermano en la fe, sin una sola palabra de reproche por el pasado, y continuó el trabajo de traducción hasta el final — el Nuevo Testamento en lengua huaorani quedó completamente terminado y publicado en 1992, treinta y seis años después de la muerte de Jim. Varios de los hombres que habían participado en la muerte de los misioneros en 1956 llegaron a ser pastores en su propia comunidad huaorani, y la tribu misma renunció después al nombre con que la llamaban sus vecinos — «salvajes» — para adoptar su propio nombre, huaorani, «la gente». Fin de la historia de María.",
          "next": null,
          "choices": []
        },
        "elliot_endDark": {
          "text": "María no logró aceptar la confesión de aquel guerrero como algo más que una cortesía formal, y hasta el final de su trabajo entre la tribu mantuvo una distancia marcada con los antiguos asesinos de Jim. La traducción del Nuevo Testamento a la lengua huaorani quedó sin terminar mientras ella vivió. Fin de la historia de María.",
          "next": null,
          "choices": []
        }
      }
    },
    aylward: {
      "start": "aylward_intro",
      "scenes": {
        "aylward_intro": {
          "text": "Ana, una simple sirvienta de Londres sin estudios formales, soñaba con ser misionera en China, pero la sociedad misionera la rechazó por falta de la preparación necesaria. Ella respondió solo con una oración: «Señor Jesús, si abres el camino y me muestras cómo, iré yo misma» — y decidió que, ya que la sociedad no estaba dispuesta a enviarla, se enviaría ella sola, confiando el resto a la oración. En 1932, con sus modestos ahorros, compró un billete para el Transiberiano y, sola, sorteando una zona de combate, llegó hasta la pequeña ciudad china de Yangcheng.",
          "next": "aylward_scene2"
        },
        "aylward_scene2": {
          "text": "En Yangcheng, Ana abrió junto con una misionera de más edad una posada para arrieros de mulas: cada noche, mientras las mulas descansaban en el patio, les contaba historias bíblicas a los arrieros cansados, y con el tiempo estos empezaron a detenerse allí a propósito para pasar la noche solo por esas historias. Se ganó tal confianza de las autoridades locales que la nombraron inspectora oficial contra el vendado de pies de las niñas — una costumbre cruel que el imperio estaba justo aboliendo — y para 1938, cuando el ejército japonés inició su ofensiva, ya había acogido a más de un centenar de niños huérfanos.",
          "next": "aylward_choice1"
        },
        "aylward_choice1": {
          "text": "Cuando las tropas japonesas llegaron a las puertas de la ciudad, Ana, con un centenar de niños a su cargo, tuvo que decidir: quedarse en la ciudad relativamente conocida, arriesgándose a caer bajo la ocupación junto con todos los niños, o llevar a ese enorme grupo a pie a través de las montañas hasta la ciudad de Xi'an, a varios días de un camino durísimo, sin reservas de comida y sin ninguna garantía de seguridad en el trayecto.",
          "choices": [
            {
              "label": "Llevar a los niños por las montañas, a pesar del riesgo",
              "effects": {
                "faith": 10
              },
              "next": "aylward_bridgeA"
            },
            {
              "label": "Quedarse en la ciudad, esperando resistir la ocupación",
              "effects": {
                "faith": -10
              },
              "next": "aylward_bridgeB"
            }
          ]
        },
        "aylward_bridgeA": {
          "text": "Ana guió a pie por las montañas a toda la columna de más de cien niños, compartiendo con ellos las últimas migajas de comida y durmiendo a la intemperie; en el camino un avión japonés ametralló la columna y Ana resultó herida, pero siguió adelante. Cuando el grupo exhausto llegó al río Amarillo crecido y no vio una sola barca en la orilla, Ana reunió a los niños a su alrededor y oró en voz alta pidiendo cómo cruzar — y poco después apareció efectivamente en la orilla un oficial chino con barcas, que trasladó a todo el grupo a la otra ribera. Tras doce días de camino, la caravana exhausta llegó a la ciudad segura de Xi'an — todos los niños sobrevivieron.",
          "next": "aylward_choice2"
        },
        "aylward_bridgeB": {
          "text": "Ana decidió quedarse en la ciudad con los niños, esperando que las autoridades de ocupación no tocaran el orfanato. Las primeras semanas transcurrieron con relativa calma, pero con la llegada de las tropas el abastecimiento de la ciudad casi se detuvo, y Ana tuvo que buscar formas mucho más arriesgadas y desesperadas de alimentar a todos los niños en el lugar que la larga travesía por las montañas que había rechazado.",
          "next": "aylward_choice2"
        },
        "aylward_choice2": {
          "text": "Después de la guerra, Ana, con la salud quebrantada por la herida y los años de privaciones, podía volver a Inglaterra para recuperarse tranquilamente, dejando atrás el servicio en China, o quedarse en Asia y seguir cuidando a huérfanos y necesitados, sabiendo que esa salud ya no se recuperaría del todo. Recordando después su camino, reconocía que no se consideraba la «primera opción» de Dios para esa tarea: «Seguramente debía ser un hombre culto. Tal vez él dijo que no, y Dios miró hacia abajo, me vio a mí y dijo: bueno, esta sí dice que sí» — y por eso no veía razón para echarse atrás ahora, habiendo ya dicho que sí entonces.",
          "choices": [
            {
              "label": "Quedarse en Asia y continuar el servicio a los huérfanos",
              "effects": {
                "faith": 15
              },
              "next": "aylward_endLight"
            },
            {
              "label": "Volver a Inglaterra y dejar atrás el servicio",
              "effects": {
                "faith": -15
              },
              "next": "aylward_endDark"
            }
          ]
        },
        "aylward_endLight": {
          "text": "Ana se quedó en Asia, trasladándose a Taiwán, donde hasta su muerte en 1970 siguió cuidando a niños huérfanos y refugiados, abriendo allí otro orfanato más. La historia de su travesía por las montañas inspiró la película de Hollywood «La posada de la sexta felicidad», aunque la propia Ana estaba disconforme con muchas inexactitudes del guion e insistía en que toda su fuerza en aquella travesía no había sido valentía propia, sino una fe que alcanzaba exactamente para el paso siguiente. Fin de la historia de Ana.",
          "next": null,
          "choices": []
        },
        "aylward_endDark": {
          "text": "Ana volvió a Inglaterra a terminar de recuperar su salud quebrantada y nunca regresó a Asia, al servicio que había comenzado. Los niños a quienes una vez había llevado a través de las montañas crecieron recordándola como la mujer que les había salvado la vida al precio de una travesía desesperada, pero no como quien se quedó con ellos para toda la vida. Fin de la historia de Ana.",
          "next": null,
          "choices": []
        }
      }
    },
    wangmingdao: {
      "start": "wangmingdao_intro",
      "scenes": {
        "wangmingdao_intro": {
          "text": "Miguel, pastor chino independiente en Pekín, se negó durante años a incorporar su congregación al «Movimiento de las Tres Autonomías», controlado por las autoridades comunistas — una organización que exigía a las iglesias someter su enseñanza a la ideología del partido. Repetía a menudo a sus feligreses las palabras de los apóstoles ante el sanedrín: es necesario obedecer a Dios antes que a los hombres, mucho antes de que esas palabras dejaran de ser una prédica para convertirse en la descripción exacta de su propia vida. En agosto de 1955 lo arrestaron precisamente por esa negativa.",
          "next": "wangmingdao_scene2"
        },
        "wangmingdao_scene2": {
          "text": "Meses de interrogatorios y presión psicológica en prisión llevaron a Miguel al agotamiento total — los investigadores trabajaban en turnos, sin dejarlo dormir, repitiendo una y otra vez que bastaba con firmar un solo papel de lealtad al movimiento para que lo dejaran volver de inmediato a casa con su familia. En las pocas horas en que aún lograba dormir, repetía mentalmente versículos de la Escritura que sabía de memoria desde joven — lo único que los investigadores no podían arrebatarle junto con el sueño y la paz.",
          "next": "wangmingdao_choice1"
        },
        "wangmingdao_choice1": {
          "text": "A comienzos de 1956, tras casi medio año de esta presión, los investigadores volvieron a poner ante un Miguel exhausto una hoja con la declaración de lealtad al movimiento del partido y una pluma. Tenía que decidir: firmar el documento, renunciando a sus propias convicciones, a cambio de la libertad inmediata y el regreso junto a su familia, o seguir negándose, permaneciendo en prisión por tiempo indefinido.",
          "choices": [
            {
              "label": "Seguir negándose a firmar, a pesar del agotamiento",
              "effects": {
                "faith": 10
              },
              "next": "wangmingdao_bridgeA"
            },
            {
              "label": "Firmar el documento para obtener la libertad inmediata",
              "effects": {
                "faith": -10
              },
              "next": "wangmingdao_bridgeB"
            }
          ]
        },
        "wangmingdao_bridgeA": {
          "text": "Miguel encontró fuerzas para negarse otra vez a firmar el documento, y lo dejaron en la celda para muchos meses más de interrogatorios. Entonces los investigadores cambiaron de táctica y empezaron a amenazar no a él, sino a su esposa, también detenida, advirtiéndole que su salud no resistiría mucho tiempo en prisión si Miguel seguía en su terquedad. Consumido por la angustia por su esposa mucho más que por sí mismo, tras varios meses más de esa presión terminó firmando la declaración de lealtad al movimiento, y a ambos los dejaron ir a casa.",
          "next": "wangmingdao_choice2"
        },
        "wangmingdao_bridgeB": {
          "text": "Extenuado al límite por semanas de interrogatorios sin dormir, Miguel firmó el documento y fue liberado a su casa junto a su esposa y su congregación, aunque esa misma noche, ya a solas, no pudo por primera vez en muchos años obligarse a orar en voz alta, sin saber con qué palabras dirigirse a Dios después de lo que acababa de hacer. Más tarde volvía una y otra vez a las palabras del profeta Miqueas: «No te alegres de mí, enemiga mía, aunque caí, me levantaré... soportaré la indignación de Jehová, porque pequé contra él» — esos versículos sobre la caída y la restauración fueron lo único a lo que pudo aferrarse mientras la vergüenza no lo soltó ni un solo día durante los meses siguientes.",
          "next": "wangmingdao_choice2"
        },
        "wangmingdao_choice2": {
          "text": "Meses después, ya en libertad, Miguel, incapaz de seguir viviendo con el peso de aquella mentira firmada bajo presión, tuvo que decidir: retractarse públicamente de esa declaración ante toda su congregación y las autoridades, sabiendo que eso significaba con toda certeza un nuevo arresto y probablemente una condena mucho más larga, o dejar las cosas como estaban y continuar el servicio en silencio, evitando un nuevo riesgo.",
          "choices": [
            {
              "label": "Retractarse públicamente de la declaración forzada",
              "effects": {
                "faith": 15
              },
              "next": "wangmingdao_endLight"
            },
            {
              "label": "Dejar las cosas como están y no arriesgarse de nuevo",
              "effects": {
                "faith": -15
              },
              "next": "wangmingdao_endDark"
            }
          ]
        },
        "wangmingdao_endLight": {
          "text": "Miguel se retractó públicamente de la declaración firmada bajo presión, anunciando a la congregación que había sido una mentira arrancada por el agotamiento, no su fe verdadera. En 1957 lo arrestaron de nuevo, y en 1963 lo condenaron a cadena perpetua; lo liberaron recién en 1979, tras más de veinte años de prisión, bajo presión de la comunidad internacional — ya un anciano, pero sin haberse retractado por segunda vez. Fin de la historia de Miguel.",
          "next": null,
          "choices": []
        },
        "wangmingdao_endDark": {
          "text": "Miguel decidió no arriesgarse a un nuevo arresto y dejó la declaración firmada bajo presión tal como estaba, continuando en silencio el servicio a su antigua congregación sin declaraciones públicas. Con el tiempo, parte de los feligreses empezó a distanciarse de él, sintiendo tras ese silencio un compromiso no confesado, y él mismo, hasta el final de su vida, nunca logró perdonarse del todo aquella única hoja firmada. Fin de la historia de Miguel.",
          "next": null,
          "choices": []
        }
      }
    },
    watchmannee: {
      "start": "watchmannee_intro",
      "scenes": {
        "watchmannee_intro": {
          "text": "Emilio, que en su juventud atravesó una crisis de fe, le preguntó una vez directamente a Dios en oración por qué lo llamaba al servicio tan pronto, y confesó con honestidad que no sentía en sí suficiente fe para ese camino. Ayunando y orando, se entregó de nuevo a Dios — y, según su propio testimonio posterior, le vinieron a la memoria, uno tras otro, tres versículos de la Escritura: «el justo por su fe vivirá», «por la fe estáis firmes» y «por fe andamos». Apoyado en esa experiencia, en dos décadas de predicación y trabajo organizativo hizo crecer en China una red de más de quinientas congregaciones del movimiento «Pequeño Rebaño», construida alrededor de una idea sencilla que repetía en cada sermón: la iglesia pertenece a Cristo, no a ningún gobierno terrenal, ni a un partido, ni siquiera a su propio fundador.",
          "next": "watchmannee_scene2"
        },
        "watchmannee_scene2": {
          "text": "A comienzos de los años cincuenta, cuando las autoridades comunistas iniciaron una campaña contra las organizaciones religiosas independientes, el movimiento de Emilio fue uno de los primeros en quedar bajo estrecha vigilancia. Amigos y parte de los dirigentes del movimiento le advertían que reuniones públicas de tal magnitud atraerían inevitablemente la atención de las autoridades, y que sería más prudente suspender temporalmente la actividad pública y pasar a la clandestinidad hasta que la situación se aclarara. Pero decenas de miles de creyentes en todo el país seguían esperando cada semana su guía espiritual.",
          "next": "watchmannee_choice1"
        },
        "watchmannee_choice1": {
          "text": "A comienzos de 1952, cuando la presión de las autoridades se volvió casi insoportable y el arresto casi inevitable, Emilio tuvo que decidir: seguir dirigiendo el movimiento abiertamente y celebrando reuniones como antes, o suspender la actividad pública, disolver la estructura visible y pasar a la clandestinidad por su propia seguridad y, tal vez, la de sus feligreses.",
          "choices": [
            {
              "label": "Continuar el servicio abierto, a pesar del riesgo de arresto",
              "effects": {
                "faith": 10
              },
              "next": "watchmannee_bridgeA"
            },
            {
              "label": "Suspender la actividad y pasar a la clandestinidad",
              "effects": {
                "faith": -10
              },
              "next": "watchmannee_bridgeB"
            }
          ]
        },
        "watchmannee_bridgeA": {
          "text": "Emilio decidió no suspender el servicio y siguió predicando abiertamente y coordinando las congregaciones por todo el país, sabiendo que el arresto ya era solo cuestión de tiempo. Meses después lo arrestaron, en efecto — pero para entonces el movimiento ya se había arraigado tanto a nivel local que siguió existiendo incluso después del arresto de su fundador, aunque fuera en la clandestinidad.",
          "next": "watchmannee_choice2"
        },
        "watchmannee_bridgeB": {
          "text": "Emilio decidió suspender temporalmente la actividad abierta y disolver la estructura visible del movimiento, esperando sortear el período más peligroso. Parte de las congregaciones, sin dirección centralizada, perdió pronto el contacto entre sí y comenzó a disolverse por su cuenta, sin llegar a ver el momento en que la situación «se aclarara» — y a Emilio mismo las autoridades lo encontraron y arrestaron de todos modos, apenas unos meses después: pasar a la clandestinidad solo retrasó, sin evitar, el desenlace que trataba de esquivar.",
          "next": "watchmannee_choice2"
        },
        "watchmannee_choice2": {
          "text": "A Emilio lo arrestaron en 1952 y ya no volvió a quedar libre por el resto de su vida — pasó veinte años recluido, incluidos años de trabajos forzados en un campo, prácticamente sin contacto con el mundo exterior y sin ninguna esperanza de que se revisara su condena. Le quitaron la Biblia y cualquier texto religioso ya en el primer mes de reclusión, y no le quedó más que aferrarse a los versículos de la Escritura que había logrado memorizar en libertad, repitiéndolos para sí durante las largas horas de trabajo en el campo. Año tras año tenía que volver a decidir: aferrarse a una fe que no podía profesar públicamente de ninguna manera, o dejarse quebrar del todo bajo el peso de tantos años de aislamiento.",
          "choices": [
            {
              "label": "Seguir aferrado a su fe en soledad durante todos esos años",
              "effects": {
                "faith": 15
              },
              "next": "watchmannee_endLight"
            },
            {
              "label": "Dejarse quebrar bajo el peso del aislamiento",
              "effects": {
                "faith": -15
              },
              "next": "watchmannee_endDark"
            }
          ]
        },
        "watchmannee_endLight": {
          "text": "Según el testimonio de las pocas personas que se cruzaron con Emilio en los últimos años de su reclusión, jamás renunció a su fe, ni siquiera a solas consigo mismo, a pesar de dos décadas de aislamiento casi total. Murió en un campo de trabajo el 30 de mayo de 1972, a los sesenta y ocho años; después de su muerte, una sobrina, al revisar los pocos objetos que le quedaban, encontró bajo la almohada una nota escrita de su puño y letra: «Cristo es el Hijo de Dios. Murió como Redentor por los pecados de la humanidad y resucitó de entre los muertos al tercer día. Este es el hecho más importante del mundo. Muero creyendo en Cristo». Las autoridades, que hacían correr el rumor de que había renegado de su fe antes de morir, nunca pudieron refutar esa nota; el movimiento que había fundado ya para entonces había sobrevivido a su fundador y seguía existiendo dentro y fuera de China. Fin de la historia de Emilio.",
          "next": null,
          "choices": []
        },
        "watchmannee_endDark": {
          "text": "Los largos años de aislamiento fueron quebrando poco a poco a Emilio — según los pocos testimonios de quienes se cruzaron con él en sus últimos años, se encerró en una desesperación pesada y silenciosa, perdiendo por completo toda esperanza. Murió en un campo de trabajo el 30 de mayo de 1972, a los sesenta y ocho años, y su cuerpo fue cremado sin siquiera avisar a la familia. Fin de la historia de Emilio.",
          "next": null,
          "choices": []
        }
      }
    },
    wilberforce: {
      "start": "wilberforce_intro",
      "scenes": {
        "wilberforce_intro": {
          "text": "Pedro, joven miembro del parlamento británico, vivió a los veinticinco años una profunda conversión espiritual y llegó a pensar que la política, con todos sus compromisos, era incompatible con la fe verdadera. Registró con detalle en su diario personal aquellos meses de búsqueda espiritual; el 28 de octubre de 1787, poco más de un año después de su conversión, escribió allí mismo las palabras que definirían el resto de su vida: «Dios Todopoderoso ha puesto ante mí dos grandes objetivos: la abolición de la trata de esclavos y la reforma de las costumbres». Llegó a considerar en serio dejar el parlamento y dedicar el resto de su vida al servicio en la iglesia, lejos de los tratos de bastidores de Westminster.",
          "next": "wilberforce_scene2"
        },
        "wilberforce_scene2": {
          "text": "Antes de tomar una decisión definitiva, Pedro fue a pedir consejo a John Newton — un antiguo capitán de barco negrero convertido a la fe, autor del célebre himno «Sublime gracia», tras décadas dedicado a la trata de esclavos. Newton conocía la trata de esclavos de primera mano; dos años después le escribiría a Pedro que creía y esperaba que el Señor lo hubiera levantado para el bien de la Iglesia y de toda la nación — pero ya en aquel primer encuentro lo instó a no abandonar el servicio público.",
          "next": "wilberforce_choice1"
        },
        "wilberforce_choice1": {
          "text": "Newton le dijo a Pedro sin rodeos que quizá Dios lo había puesto en el parlamento precisamente para que usara ese poder en beneficio de la nación, y no para que renunciara a él. Pedro tenía que decidir: seguir ese consejo y permanecer en la política, asumiendo la lucha contra la trata de esclavos desde dentro del sistema, o retirarse a un servicio tranquilo y personal, que a él mismo le parecía espiritualmente más puro.",
          "choices": [
            {
              "label": "Quedarse en el parlamento e iniciar la lucha contra la trata de esclavos",
              "effects": {
                "faith": 10
              },
              "next": "wilberforce_bridgeA"
            },
            {
              "label": "Dejar la política por un servicio tranquilo y personal",
              "effects": {
                "faith": -10
              },
              "next": "wilberforce_bridgeB"
            }
          ]
        },
        "wilberforce_bridgeA": {
          "text": "Pedro se quedó en el parlamento y en 1789 presentó por primera vez un proyecto de ley para prohibir la trata de esclavos, pronunciando en la Cámara de los Comunes un discurso de varias horas con datos sobre la crueldad de ese comercio. El proyecto fracasó estrepitosamente, como casi todos sus intentos siguientes durante casi veinte años seguidos, pero Pedro lo volvía a presentar cada año, negándose a considerar definitiva una derrota tras otra.",
          "next": "wilberforce_choice2"
        },
        "wilberforce_bridgeB": {
          "text": "Pedro dejó su banca parlamentaria por un servicio tranquilo en una parroquia, retirándose por completo de la gran política. Los proyectos de ley para prohibir la trata de esclavos que en esos años intentaban presentar otros diputados, mucho menos convencidos y persistentes, fracasaban año tras año sin ningún peso político digno de mención detrás. Después de varios años de tranquila vida parroquial, Pedro, incapaz de olvidar del todo las palabras de Newton sobre que Dios quizá lo había puesto en el parlamento por una razón, volvió a Westminster — muchos años más tarde y con mucho menos peso político que si se hubiera quedado desde el principio.",
          "next": "wilberforce_choice2"
        },
        "wilberforce_choice2": {
          "text": "Hacia 1807, tras largos años de derrotas públicas, burlas y presión política de las compañías negreras, Pedro tenía otra vez que decidir si presentaba el proyecto de ley una vez más, o si por fin admitía que la obra de toda su vida estaba condenada a quedar sin cumplirse mientras él viviera. En su diario personal de esos años anotaba una y otra vez la misma idea: si Dios realmente lo había puesto en el parlamento para esa lucha, la derrota no anulaba el llamado, solo posponía un plazo que no le correspondía decidir a él.",
          "choices": [
            {
              "label": "Presentar el proyecto de ley una vez más, a pesar de dos décadas de derrotas",
              "effects": {
                "faith": 15
              },
              "next": "wilberforce_endLight"
            },
            {
              "label": "Abandonar los intentos después de tantos años de fracasos",
              "effects": {
                "faith": -15
              },
              "next": "wilberforce_endDark"
            }
          ]
        },
        "wilberforce_endLight": {
          "text": "Pedro presentó de nuevo el proyecto de ley, y en 1807 la Cámara de los Comunes finalmente aprobó la ley que prohibía la trata de esclavos — 283 votos contra 16; cuando se anunció el resultado, la sala entera se puso de pie y estalló en una ovación, volviéndose hacia Pedro, que, incapaz de contenerse, bajó la cabeza y rompió a llorar. A un amigo sentado a su lado le dijo en ese mismo instante: «Y bien, Henry, ¿qué aboliremos ahora?» No se detuvo allí, y durante veintiséis años más luchó por la abolición completa de la esclavitud misma en las colonias británicas; la ley se aprobó el 26 de julio de 1833, y Pedro murió apenas tres días después, a tiempo de saber que la obra de toda su vida por fin se había cumplido. Fin de la historia de Pedro.",
          "next": null,
          "choices": []
        },
        "wilberforce_endDark": {
          "text": "Después de una nueva derrota en el parlamento, la decimoctava consecutiva, Pedro decidió abandonar los intentos, dando por perdida la causa mientras él viviera. El proyecto de ley para prohibir la trata de esclavos, privado de su voz más firme en defensa, perdió por completo impulso parlamentario durante muchos años, y la trata de esclavos continuó por décadas más sin ninguna oposición política de peso. Fin de la historia de Pedro.",
          "next": null,
          "choices": []
        }
      }
    },
    asiabibi: {
      "start": "asiabibi_intro",
      "scenes": {
        "asiabibi_intro": {
          "text": "Lucía trabajaba como jornalera en una granja de la aldea paquistaní de Ittan Wali, recogiendo bayas junto a vecinas musulmanas, y era cristiana de tercera generación en una aldea donde su familia era una de las pocas que no profesaba el islam. Un día de calor, cuando le tocó su turno de traer agua del pozo, varias mujeres se negaron a beber del mismo cuenco que una cristiana, diciendo que el agua después de ella quedaba impura.",
          "next": "asiabibi_scene2"
        },
        "asiabibi_scene2": {
          "text": "Una palabra llevó a otra hasta convertirse en una discusión a gritos en medio del campo, y días después las vecinas denunciaron en la mezquita local que Lucía, en esa discusión, había insultado al profeta Mahoma — una acusación que ella negaba categóricamente. Según la ley paquistaní contra la blasfemia, esa acusación se castigaba con la pena de muerte, y pocos días después arrestaron a Lucía en la misma granja.",
          "next": "asiabibi_choice1"
        },
        "asiabibi_choice1": {
          "text": "Aun antes del juicio, representantes de las autoridades le insinuaron más de una vez a Lucía que el caso podía cerrarse fácilmente si ella simplemente se convertía al islam y renunciaba públicamente al cristianismo — así habían logrado muchos acusados bajo ese cargo evitar una condena severa. Lucía tenía que decidir: aceptar la conversión para salvar su propia vida, o seguir siendo cristiana y presentarse a juicio con la amenaza real de una condena a muerte.",
          "choices": [
            {
              "label": "Seguir siendo cristiana y presentarse a juicio",
              "effects": {
                "faith": 10
              },
              "next": "asiabibi_bridgeA"
            },
            {
              "label": "Aceptar convertirse al islam para salvar su vida",
              "effects": {
                "faith": -10
              },
              "next": "asiabibi_bridgeB"
            }
          ]
        },
        "asiabibi_bridgeA": {
          "text": "Lucía se negó a renegar del cristianismo incluso bajo amenaza de pena de muerte, diciéndoles a los investigadores que no traicionaría su fe para salvar el cuerpo. Ya entonces, como contaría años después, su fe se mantenía firme porque sabía que Dios estaba con ella, que Dios nunca deja solo a nadie, que Él siempre está cerca. En noviembre de 2010, el tribunal la condenó a morir en la horca, y los ocho años siguientes los pasó en una celda de aislamiento esperando la ejecución de la condena.",
          "next": "asiabibi_choice2"
        },
        "asiabibi_bridgeB": {
          "text": "Lucía, cediendo a la presión y al miedo a la ejecución, aceptó convertirse públicamente al islam, y el proceso penal en su contra se cerró formalmente sin juicio. Pero el rumor de que la conversión había sido solo una artimaña para salvar la vida corrió por la aldea más rápido que cualquier resolución oficial, y pocas semanas después las mismas vecinas que habían iniciado todo con la discusión del pozo acudieron a la policía con una nueva acusación — de hipocresía, y de haber insultado al islam con su propia conversión fingida. El segundo caso terminó llevándola al mismo corredor de la muerte que el primero, solo que por otro cargo.",
          "next": "asiabibi_choice2"
        },
        "asiabibi_choice2": {
          "text": "Tras pasar ocho años en el corredor de la muerte, esperando la ejecución sin descanso, leyendo la Biblia que un capellán de la prisión le llevaba en secreto en sus escasas visitas, Lucía veía cada mañana, poco antes del amanecer, al mismo pájaro de pico largo posarse en la reja de la ventana de su celda, y regresar de nuevo al atardecer — interpretó a ese pájaro como una señal de que Dios estaba cerca, incluso cuando ella no veía a nadie a su lado. En 2018, Lucía obtuvo por fin la oportunidad de que la Corte Suprema de Pakistán revisara su caso. Días antes de la audiencia decisiva, los abogados le propusieron un camino más rápido y seguro — aceptar en silencio la deportación sin publicidad, admitiendo parte de las acusaciones — en lugar de buscar una absolución completa y pública que provocaría sin duda la furia de los grupos islamistas en todo el país.",
          "choices": [
            {
              "label": "Buscar una absolución completa y pública",
              "effects": {
                "faith": 15
              },
              "next": "asiabibi_endLight"
            },
            {
              "label": "Aceptar un acuerdo silencioso sin publicidad",
              "effects": {
                "faith": -15
              },
              "next": "asiabibi_endDark"
            }
          ]
        },
        "asiabibi_endLight": {
          "text": "Lucía insistió en una revisión completa del caso, y en octubre de 2018 la Corte Suprema de Pakistán la absolvió por completo, declarando fabricadas todas las acusaciones — la decisión provocó protestas masivas de islamistas en todo el país y amenazas directas de muerte contra ella. Más tarde, en una conferencia de prensa en París, diría: «Me acusaron por el nombre de Jesús, y sabía que sería liberada por el nombre de Jesús», llamando a su liberación un milagro imposible sin la intervención de Dios. En 2019 obtuvo asilo en Canadá junto con su familia y, por primera vez en nueve años, pudo profesar abiertamente el cristianismo sin miedo al arresto. Fin de la historia de Lucía.",
          "next": null,
          "choices": []
        },
        "asiabibi_endDark": {
          "text": "Lucía aceptó el acuerdo silencioso sin una revisión pública del caso, y formalmente la dejaron en libertad sin mayor ruido. Pero la acusación de blasfemia nunca quedó oficialmente retirada del todo, y ella se vio obligada a esconderse por el resto de su vida, sabiendo que en cualquier momento podían reabrir el caso. Fin de la historia de Lucía.",
          "next": null,
          "choices": []
        }
      }
    },
    meriam: {
      "start": "meriam_intro",
      "scenes": {
        "meriam_intro": {
          "text": "Juana creció en Sudán en la fe cristiana — su madre, cristiana ortodoxa etíope, la crio sola desde muy pequeña, después de que el padre musulmán abandonara a la familia. Según las leyes sudanesas, el hijo de un padre musulmán se considera automáticamente musulmán, sin importar en qué fe haya sido criado en realidad.",
          "next": "meriam_scene2"
        },
        "meriam_scene2": {
          "text": "Juana se casó con un cristiano estando ya en un embarazo avanzado de su segundo hijo — pero según los documentos figuraba formalmente como musulmana, y el matrimonio con un cristiano la convirtió ante el tribunal en blanco de dos cargos a la vez: apostasía y «adulterio». En todas las audiencias preliminares repetía la misma frase — que su madre la había criado cristiana desde su nacimiento y que un papel no podía cambiar aquello en lo que ella de verdad creía — mucho antes de que esa frase se convirtiera para ella en una cuestión de vida o muerte. En mayo de 2014, un tribunal de Jartum condenó a Juana a cien latigazos y a morir en la horca.",
          "next": "meriam_choice1"
        },
        "meriam_choice1": {
          "text": "El juez le propuso personalmente a Juana una salida sencilla: declararse musulmana públicamente, tal como exigían los documentos, y la condena se anularía de inmediato. Juana, que estaba en el octavo mes de embarazo, tenía que decidir: pronunciar las palabras formales de renuncia para salvar su propia vida y la de su hijo aún por nacer, o insistir en que era cristiana, costara lo que costara.",
          "choices": [
            {
              "label": "Insistir en que es cristiana, a pesar de la condena",
              "effects": {
                "faith": 10
              },
              "next": "meriam_bridgeA"
            },
            {
              "label": "Pronunciar las palabras de renuncia para salvarse ella y a su hijo",
              "effects": {
                "faith": -10
              },
              "next": "meriam_bridgeB"
            }
          ]
        },
        "meriam_bridgeA": {
          "text": "Juana declaró ante el juez, allí mismo en la sala del tribunal: «Soy cristiana, y nunca he sido musulmana», mostrando su certificado de matrimonio, donde su religión figuraba como cristiana. El juez pronunció la sentencia de muerte, y a Juana, con grilletes en los pies, la trasladaron al ala penitenciaria de un hospital, donde debía terminar su embarazo mientras esperaba la ejecución.",
          "next": "meriam_choice2"
        },
        "meriam_bridgeB": {
          "text": "Juana, temiendo por la vida de su hijo aún no nacido, pronunció ante el tribunal las palabras formales de conversión al islam, y el cargo en su contra se retiró de inmediato. Quedó en libertad, pero la sensación de haber renegado, en el momento decisivo, de la fe de su propia madre por su propia seguridad la acompañó durante muchos años.",
          "next": "meriam_choice2"
        },
        "meriam_choice2": {
          "text": "Aún bajo la condena de muerte, Juana dio a luz a una niña en el mismo ala penitenciaria del hospital, según algunas versiones con grilletes en los pies. Para poder leer la Biblia, que las autoridades no le permitían tener abiertamente en la celda, cortó sus páginas en trozos y los escondía en el cabello, sacando y leyendo unas pocas líneas cada vez en el baño — el único lugar donde nadie la veía. Defensores de derechos humanos y embajadas extranjeras lanzaron una amplia campaña internacional por su liberación; a Juana, mientras tanto, le tocaba decidir si seguía dando entrevistas a periodistas extranjeros sobre su fe, lo que aumentaba tanto la difusión como el riesgo para ella misma, o si guardaba silencio hasta que terminara el proceso, reduciendo su propia visibilidad y, quizás, el riesgo.",
          "choices": [
            {
              "label": "Seguir hablando abiertamente de su fe a los periodistas",
              "effects": {
                "faith": 15
              },
              "next": "meriam_endLight"
            },
            {
              "label": "Guardar silencio hasta el final del proceso, reduciendo su visibilidad",
              "effects": {
                "faith": -15
              },
              "next": "meriam_endDark"
            }
          ]
        },
        "meriam_endLight": {
          "text": "Juana siguió hablando abiertamente de su fe, repitiendo en las entrevistas que para ella la fe significaba la vida misma: «Si no tienes fe, no estás vivo», y que incluso en la celda sentía que gente de todo el mundo oraba por ella. El tribunal de apelaciones de Sudán anuló la condena, invocando la libertad religiosa constitucional, y Juana, junto con su hija recién nacida y sus otros hijos, quedó en libertad y más tarde se mudó con su familia al extranjero. Ya en libertad diría que, cuando le preguntan cómo orar por los cristianos perseguidos, ella responde: oren para que tengan acceso a la Palabra de Dios. Fin de la historia de Juana.",
          "next": null,
          "choices": []
        },
        "meriam_endDark": {
          "text": "Juana guardó silencio hasta el final del proceso, esperando que menos publicidad redujera el riesgo para ella y sus hijos. El caso avanzó, en efecto, con más discreción, pero también más lento — sin una presión internacional a gran escala, la apelación se prolongó por tiempo indefinido, y Juana pasó junto a su hija recién nacida mucho más tiempo en el ala penitenciaria del hospital del que hubiera hecho falta con un caso más resonante. Fin de la historia de Juana.",
          "next": null,
          "choices": []
        }
      }
    },
    kaylamueller: {
      "start": "kaylamueller_intro",
      "scenes": {
        "kaylamueller_intro": {
          "text": "Rita, trabajadora humanitaria estadounidense de veintiséis años, llevaba años ayudando a refugiados y víctimas de conflictos — primero en la India, luego en los territorios palestinos, y desde 2012, a refugiados sirios que huían de la guerra civil hacia la vecina Turquía.",
          "next": "kaylamueller_scene2"
        },
        "kaylamueller_scene2": {
          "text": "Para el verano de 2013, la mayoría de las organizaciones humanitarias internacionales ya habían retirado a su personal de las zonas fronterizas de Siria por el peligro cada vez mayor de secuestros por parte de milicianos. A Rita le propusieron volver a la más segura Turquía y seguir ayudando a los refugiados desde allí, pero parte de las personas más vulnerables con las que trabajaba seguía dentro del país.",
          "next": "kaylamueller_choice1"
        },
        "kaylamueller_choice1": {
          "text": "En agosto de 2013, Rita tenía que decidir si viajaba una vez más a Alepo, adonde las organizaciones ya casi habían dejado de enviar personal por el peligro, para ayudar en el trabajo de un hospital local, o si permanecía en la relativa seguridad del lado turco de la frontera, siguiendo su ayuda desde allí. En cartas a sus amigos escribía que no oraba por su propia seguridad, sino para que Dios no le permitiera darle la espalda a la gente solo porque ayudarla se había vuelto demasiado peligroso — una oración que aquel agosto ya no sonaba abstracta, sino muy concreta.",
          "choices": [
            {
              "label": "Viajar a Alepo, a pesar del peligro creciente",
              "effects": {
                "faith": 10
              },
              "next": "kaylamueller_bridgeA"
            },
            {
              "label": "Quedarse a salvo en el lado turco de la frontera",
              "effects": {
                "faith": -10
              },
              "next": "kaylamueller_bridgeB"
            }
          ]
        },
        "kaylamueller_bridgeA": {
          "text": "Rita viajó a Alepo para ayudar con el trabajo del hospital, y a la salida de allí, milicianos del ISIS la capturaron a ella y a un colega sirio. Al colega lo liberaron después, mientras que a Rita la trasladaron entre lugares secretos de retención durante casi un año y medio, sometiéndola a torturas y exigiendo a su familia un rescate que el gobierno de Estados Unidos se negaba a pagar.",
          "next": "kaylamueller_choice2"
        },
        "kaylamueller_bridgeB": {
          "text": "Rita se quedó en el lado turco de la frontera, siguiendo su ayuda a los refugiados desde allí, sin el riesgo directo que suponía el trabajo en el propio Alepo. Pero el peligro la alcanzó de otra manera: meses después, mientras acompañaba a un grupo de refugiados hasta uno de los campamentos fronterizos, milicianos hicieron una incursión ya en territorio turco y se la llevaron junto con varios trabajadores del campamento — el mismo secuestro que había intentado evitar eligiendo el camino que parecía más seguro terminó por alcanzarla de todos modos.",
          "next": "kaylamueller_choice2"
        },
        "kaylamueller_choice2": {
          "text": "En cautiverio, según el testimonio de rehenes liberadas después, a Rita la torturaron repetidas veces y trataron de empujarla a la desesperación, exigiéndole que dejara de resistir y simplemente aceptara su suerte; cuando los captores afirmaron una vez que se había convertido al islam, ella les contradijo directamente — no, no se había convertido. Prisioneras liberadas junto con ella en distintos momentos recordaban que, incluso en los períodos más oscuros, encontraba la manera de orar en voz alta por sus propios captores, explicando que no quería dejar que el odio le arrebatara también lo poco que le quedaba intacto por dentro. En una de las cartas que logró hacer llegar en secreto a sus padres, escribió que se había entregado por completo al Creador, porque literalmente ya no tenía en quién más confiar, y que por la gracia de Dios y las oraciones de ellos se sentía «arrullada con ternura en una caída libre». Tenía que decidir cómo describir sus últimas fuerzas en la siguiente carta — como una desesperación sin ninguna esperanza, o como la determinación de resistir pasara lo que pasara.",
          "choices": [
            {
              "label": "Escribir sobre su determinación de resistir y no rendirse",
              "effects": {
                "faith": 15
              },
              "next": "kaylamueller_endLight"
            },
            {
              "label": "Dejar que la desesperación se note en la carta",
              "effects": {
                "faith": -15
              },
              "next": "kaylamueller_endDark"
            }
          ]
        },
        "kaylamueller_endLight": {
          "text": "Rita les escribió a sus padres que le «quedaban muchas fuerzas para luchar» y que «no se quebraría ni se rendiría, por mucho tiempo que hiciera falta», pidiéndoles que entregaran todo su dolor a Dios — repitiendo una idea que ya le había escrito a su padre antes del cautiverio: «Encuentro a Dios en el sufrimiento». En febrero de 2015, la familia confirmó su muerte en cautiverio tras dieciocho meses de reclusión; hoy funciona en su memoria una fundación que ayuda a los trabajadores humanitarios que continúan su labor en zonas de conflicto de todo el mundo. Fin de la historia de Rita.",
          "next": null,
          "choices": []
        },
        "kaylamueller_endDark": {
          "text": "Testigos liberadas después del mismo cautiverio recordaban que Rita, en los últimos meses, casi había dejado de hablar de su casa y se la veía cada vez más completamente derrotada, sin rastro visible de esperanza. En febrero de 2015, la familia confirmó su muerte en cautiverio tras dieciocho meses de reclusión. Fin de la historia de Rita.",
          "next": null,
          "choices": []
        }
      }
    },
    wangyi: {
      "start": "wangyi_intro",
      "scenes": {
        "wangyi_intro": {
          "text": "Juan, antiguo abogado de derechos humanos y profesor de derecho, se bautizó en 2005 y poco después se convirtió en pastor de la iglesia doméstica independiente Early Rain Covenant, en la ciudad de Chengdu, no registrada ante las autoridades ni sometida al control estatal sobre la religión. Ahora usaba su formación jurídica no en los tribunales, sino en sus sermones — explicándoles a sus feligreses que la fidelidad a Cristo como ley suprema a veces implica inevitablemente el desacuerdo con las leyes terrenales.",
          "next": "wangyi_scene2"
        },
        "wangyi_scene2": {
          "text": "Para 2018, la congregación de Juan había crecido a más de ochocientos feligreses, y la presión de las autoridades sobre las iglesias no registradas en todo el país había aumentado notablemente: cerraban unas congregaciones, detenían a otros pastores por períodos breves para «conversaciones preventivas». Juan entendía que tarde o temprano lo mismo alcanzaría a su propia iglesia.",
          "next": "wangyi_choice1"
        },
        "wangyi_choice1": {
          "text": "Abogados y parte de los feligreses de mayor edad le aconsejaban a Juan reducir el alcance del servicio y, de ser posible, registrar la congregación en una forma simplificada para disminuir el riesgo. Juan tenía que decidir: continuar el servicio en la misma escala abierta de antes, redactando de antemano una declaración personal para el caso de un arresto, o llegar a un compromiso con las autoridades por la seguridad de la congregación.",
          "choices": [
            {
              "label": "Continuar el servicio abierto, preparándose de antemano para un arresto",
              "effects": {
                "faith": 10
              },
              "next": "wangyi_bridgeA"
            },
            {
              "label": "Llegar a un compromiso con las autoridades por la seguridad de la congregación",
              "effects": {
                "faith": -10
              },
              "next": "wangyi_bridgeB"
            }
          ]
        },
        "wangyi_bridgeA": {
          "text": "Juan redactó de antemano una declaración personal titulada «Mi declaración de desobediencia fiel», donde llamaba a Jesús Cristo, Hijo del Dios vivo y eterno, su Rey y Rey de toda la tierra ayer, hoy y por siempre, y escribía: que las autoridades lo separen de su esposa y sus hijos, que destruyan su reputación y su vida — son capaces de todo eso, pero nadie en este mundo puede obligarlo a renegar de su fe, a cambiar su vida o a resucitarlo de entre los muertos. Les pidió a sus allegados que publicaran ese texto si lo detenían por más de veinticuatro horas. La iglesia continuó el servicio en la misma escala abierta de antes.",
          "next": "wangyi_choice2"
        },
        "wangyi_bridgeB": {
          "text": "Juan atendió los consejos y comenzó a negociar con las autoridades locales una forma simplificada de registro para la congregación, esperando reducir el riesgo de que cerraran la iglesia. Parte de los feligreses, al enterarse de esas negociaciones, las vio como una concesión demasiado grande y empezó a pasarse poco a poco a otros grupos domésticos aún menos visibles, y la propia congregación comenzó a perder la unidad que se había construido durante años.",
          "next": "wangyi_choice2"
        },
        "wangyi_choice2": {
          "text": "El 9 de diciembre de 2018, la policía realizó una redada simultánea en decenas de domicilios, deteniendo a Juan junto con más de un centenar de feligreses. En prisión, esperando el juicio sin contacto con el mundo exterior durante casi un año, Juan tenía que decidir: cooperar con la investigación, admitiendo parte de las acusaciones a cambio de una condena más leve, o negar por completo la culpa e insistir en que su iglesia no había violado nada más que las normas de registro impuestas por el Estado.",
          "choices": [
            {
              "label": "Negar por completo la culpa e insistir en tener razón",
              "effects": {
                "faith": 15
              },
              "next": "wangyi_endLight"
            },
            {
              "label": "Admitir parte de las acusaciones a cambio de una condena menor",
              "effects": {
                "faith": -15
              },
              "next": "wangyi_endDark"
            }
          ]
        },
        "wangyi_endLight": {
          "text": "Juan rechazó por completo las acusaciones a lo largo de toda la investigación, explicando ya antes del arresto en sus sermones que la gran misión de Cristo exige una gran desobediencia, y que el propósito de esa desobediencia no es cambiar el mundo, sino dar testimonio de otro mundo. El 30 de diciembre de 2019, el tribunal de la ciudad de Chengdu lo condenó de todos modos a nueve años de prisión por «incitación a la subversión del poder estatal», pero su «Declaración de desobediencia fiel», escrita de antemano, fue publicada y traducida a decenas de idiomas, convirtiéndose en uno de los textos más citados sobre la persecución de cristianos en la China actual. La esposa de Juan, Jiang Rong, también detenida esa misma noche y recluida casi medio año, pudo verlo por primera vez en prisión recién en octubre de 2021 — casi tres años después del arresto — y sigue difundiendo su historia; según los datos disponibles al momento de redactar esta historia, él permanece recluido, y la condena debería terminar hacia el final de esta década. Fin de la historia de Juan.",
          "next": null,
          "choices": []
        },
        "wangyi_endDark": {
          "text": "Juan aceptó admitir parte de las acusaciones, con la esperanza de una condena más leve. La condena resultó en efecto algo más corta, pero la propia confesión fue usada por los medios estatales como prueba de la culpabilidad de toda la congregación Early Rain, y parte de los feligreses, al conocer la confesión, sintió que su pastor había cedido en el momento decisivo en aquello mismo por lo que los llamaba a todos a mantenerse firmes. La iglesia Early Rain, privada de la unidad que antes tenía en torno a su líder, nunca recuperó la magnitud que tenía antes de su arresto. Fin de la historia de Juan.",
          "next": null,
          "choices": []
        }
      }
    },
    zhang: {
      "start": "zhang_intro",
      "scenes": {
        "zhang_intro": {
          "text": "Jorge, fundador de una de las mayores redes clandestinas de iglesias domésticas de China, hizo crecer en pocas décadas un movimiento que reunió a millones de creyentes en todo el país — y en ese mismo tiempo fue arrestado seis veces, pasando en total más de dieciocho años tras las rejas. Después de cada liberación volvía al mismo servicio, explicándoles a sus colaboradores más cercanos que la tarea de la iglesia no era sobrevivir a cualquier precio, sino permanecer fiel al Evangelio, aunque el precio de eso fuera un nuevo arresto.",
          "next": "zhang_scene2"
        },
        "zhang_scene2": {
          "text": "A comienzos de la década de 2000, organizaciones cristianas internacionales invitaron varias veces a Jorge a hablar en persona en conferencias misioneras en el extranjero, para contar de primera mano la situación de los creyentes en China. Las autoridades chinas no reconocían oficialmente a las iglesias clandestinas el derecho a enviar representantes al exterior, y cualquier viaje de ese tipo se consideraba formalmente un cruce ilegal de frontera.",
          "next": "zhang_choice1"
        },
        "zhang_choice1": {
          "text": "Jorge tenía que decidir: viajar a otra conferencia en el extranjero sin autorización oficial de las autoridades, sabiendo que sus viajes anteriores ya habían llamado la atención de los organismos de seguridad del Estado, o renunciar a hablar personalmente en el extranjero y seguir dirigiendo la red solo desde dentro del país, quedando menos expuesto ante las autoridades. Solía recordarles a sus colaboradores más cercanos las palabras del apóstol Pablo sobre que para él el vivir es Cristo y el morir es ganancia, y él mismo reconoció más de una vez que era más fácil pronunciar esas palabras desde el púlpito que tomar una decisión capaz de llevarlo directo a una celda — sobre todo porque, después de una de sus liberaciones anteriores, había descubierto que en cada casa a la que lo llevaban había creyentes orando por él por su nombre, aunque él nunca se los había pedido, y esas oraciones ajenas, según diría después, lo sostuvieron durante todos los años siguientes.",
          "choices": [
            {
              "label": "Viajar a la conferencia, a pesar del riesgo",
              "effects": {
                "faith": 10
              },
              "next": "zhang_bridgeA"
            },
            {
              "label": "Renunciar a los viajes y mantenerse menos visible",
              "effects": {
                "faith": -10
              },
              "next": "zhang_bridgeB"
            }
          ]
        },
        "zhang_bridgeA": {
          "text": "Jorge finalmente viajó a otra conferencia internacional, contándoles personalmente a los delegados sobre la magnitud del movimiento clandestino y las torturas que sufrían los pastores detenidos. Al regresar a China reforzaron la vigilancia sobre él, y ya en diciembre de 2004 lo arrestaron precisamente por esos viajes al extranjero.",
          "next": "zhang_choice2"
        },
        "zhang_bridgeB": {
          "text": "Jorge renunció a hablar personalmente en el extranjero, encargando a otros representantes menos visibles del movimiento que contaran la situación de la iglesia en China. La difusión internacional de lo que ocurría en el país se volvió notablemente más débil y menos convincente sin el testimonio personal del propio fundador de la red, que había pasado él mismo por arrestos y torturas.",
          "next": "zhang_choice2"
        },
        "zhang_choice2": {
          "text": "Tras su arresto en diciembre de 2004, mantuvieron a Jorge más de un año y medio sin juicio, presionándolo para que revelara públicamente los nombres de los líderes de otras iglesias domésticas de la red a cambio de cargos más leves. Jorge tenía que decidir si revelaba esos nombres para obtener su propia libertad, o si seguía callado, sabiendo que en julio de 2006 lo condenarían con toda probabilidad a una pena de todos modos.",
          "choices": [
            {
              "label": "Seguir callado y no revelar los nombres",
              "effects": {
                "faith": 15
              },
              "next": "zhang_endLight"
            },
            {
              "label": "Revelar los nombres a cambio de una condena más leve",
              "effects": {
                "faith": -15
              },
              "next": "zhang_endDark"
            }
          ]
        },
        "zhang_endLight": {
          "text": "Jorge no reveló ni un solo nombre, y en julio de 2006 lo condenaron a siete años y medio de prisión por «cruce ilegal de frontera» — la red de iglesias domésticas que había fundado siguió funcionando bajo la dirección de otros líderes, cuyos nombres él nunca reveló. Lo liberaron anticipadamente en septiembre de 2011, y volvió al servicio siendo ya un hombre mayor, pero no quebrado. Su historia la empezó después con estas palabras: «Me llamo Zhang Rongliang, y soy un seguidor de Jesucristo que no se avergüenza». Fin de la historia de Jorge.",
          "next": null,
          "choices": []
        },
        "zhang_endDark": {
          "text": "Jorge, bajo la presión de la investigación, reveló varios nombres de líderes de la red a cambio de la promesa de una condena más leve. Las personas que nombró pronto también fueron arrestadas, y la propia red de iglesias domésticas, privada de golpe de varios líderes clave, cayó por años en una crisis de confianza entre las congregaciones. Fin de la historia de Jorge.",
          "next": null,
          "choices": []
        }
      }
    },
    perpetua: {
      "start": "perpetua_intro",
      "scenes": {
        "perpetua_intro": {
          "text": "Valeria, una noble de veintidós años de Cartago que acababa de dar a luz a un hijo, se bautizó junto con varios amigos poco antes de que las autoridades desataran una nueva oleada de persecución contra los cristianos. En su diario anotó que ya en el momento mismo del bautismo había orado por una sola cosa — la firmeza del cuerpo, no una vida fácil — sin sospechar aún cuán pronto esa oración sería puesta a prueba. Poco después arrestaron a todo el grupo de recién convertidos y los encarcelaron a la espera de juicio.",
          "next": "perpetua_scene2"
        },
        "perpetua_scene2": {
          "text": "El padre de Valeria, que no era cristiano, fue varias veces a la prisión a suplicarle a su hija que renegara de la nueva fe al menos formalmente, para salvar su vida por el hijo de pecho que había quedado en casa. Entre esas visitas dolorosas, Valeria seguía orando y cantando salmos en voz alta junto a los demás presos de la celda, a pesar del calor sofocante y el hacinamiento de la prisión — los guardias al principio se burlaban, pero con el tiempo dejaron de prestar atención, acostumbrados a ese canto como parte de la rutina carcelaria. A pedido de su hermano, oró pidiendo una visión que la ayudara a entender lo que le esperaba, y una noche, según anotó ella misma en su diario, soñó con una escalera de bronce de una altura increíble que subía directo al cielo, y al pie de ella un dragón, al que en el sueño pisó como quien pone el pie en el primer peldaño, y subió hasta arriba. Al despertar, le contó a su hermano que ahora sabía: lo que la esperaba no era la libertad, sino una lucha que debía llevar hasta el final. En una de las visitas, el padre llevó al bebé hasta la celda y se lo tendió a Valeria, esperando que la vista de su propio hijo la hiciera cambiar de opinión.",
          "next": "perpetua_choice1"
        },
        "perpetua_choice1": {
          "text": "Con su hijo en brazos en la celda de la prisión, Valeria tenía que decidir: pronunciar las palabras formales de renuncia a la fe para poder volver junto a su hijo y seguir viviendo, o negarse, sabiendo que esa negativa significaba casi con certeza la ejecución y la separación de su hijo para siempre.",
          "choices": [
            {
              "label": "Negarse a renunciar, a pesar de las súplicas de su padre",
              "effects": {
                "faith": 10
              },
              "next": "perpetua_bridgeA"
            },
            {
              "label": "Aceptar renunciar para volver junto a su hijo",
              "effects": {
                "faith": -10
              },
              "next": "perpetua_bridgeB"
            }
          ]
        },
        "perpetua_bridgeA": {
          "text": "Valeria se negó a pronunciar las palabras de renuncia, incluso con su propio hijo llorando en brazos, y se lo devolvió a su padre. Antes, en una de esas mismas visitas, cuando el padre le suplicaba que recapacitara, ella le señaló una vasija que había cerca y le preguntó: «Padre, ¿ves esta vasija? ¿Puede llamarse de otro modo que lo que es?» — «No», respondió él. «Pues yo tampoco puedo llamarme de otro modo que lo que soy: cristiana», respondió Valeria. El padre, desesperado, siguió yendo a verla una y otra vez hasta el mismo día del juicio, recibiendo cada vez la misma respuesta.",
          "next": "perpetua_choice2"
        },
        "perpetua_bridgeB": {
          "text": "Valeria, incapaz de soportar la vista de su hijo llorando en brazos, aceptó pronunciar ante un representante de las autoridades las palabras formales de renuncia a la fe, aunque esa misma noche, en la celda, le pedía en voz baja perdón a Dios por unas palabras que, según diría ella misma después, había pronunciado con la boca y no con el corazón. La dejaron ir a casa junto a su hijo, pero entre los amigos recién bautizados que habían sido arrestados junto con ella y que no habían pronunciado su propia renuncia, se la recordó en los años siguientes con clara lástima, y no con respeto.",
          "next": "perpetua_choice2"
        },
        "perpetua_choice2": {
          "text": "Justo antes del juicio, el gobernador de Cartago le ofreció personalmente a Valeria una última oportunidad: hacer un sacrificio simbólico en honor al emperador — un simple gesto ritual, que no exigía nada más que una acción externa — y todos los cargos se retirarían de inmediato. Valeria tenía que decidir si aceptaba ese gesto formal, aparentemente inofensivo, para salvar su vida, o si rechazaba también esta última oferta.",
          "choices": [
            {
              "label": "Negarse al sacrificio al emperador, a pesar de la condena a muerte",
              "effects": {
                "faith": 15
              },
              "next": "perpetua_endLight"
            },
            {
              "label": "Realizar el sacrificio formal para salvar su vida",
              "effects": {
                "faith": -15
              },
              "next": "perpetua_endDark"
            }
          ]
        },
        "perpetua_endLight": {
          "text": "Valeria se negó a ofrecer el sacrificio al emperador, y el 7 de marzo del año 203 la sacaron junto con los demás condenados a la arena de Cartago, donde primero soltaron sobre ella una vaca salvaje y luego la remataron a espada. Según la tradición, la mano temblorosa del joven gladiador encargado de dar el golpe final falló dos veces, y fue la propia Valeria quien guio su espada hasta su garganta. El diario que escribió en prisión — uno de los textos cristianos más antiguos que se conservan y la primera obra en prosa conocida escrita por una mujer — se lee y se cita hasta hoy, más de dieciocho siglos después. Fin de la historia de Valeria.",
          "next": null,
          "choices": []
        },
        "perpetua_endDark": {
          "text": "Valeria, en el último momento, realizó el sacrificio formal al emperador, y los cargos contra ella se retiraron. Volvió a casa junto a su hijo, pero su propio diario, escrito en prisión rumbo a lo que ella misma entonces creía una ejecución inevitable, se interrumpe justo en esa decisión — y no se sabe cómo recordó ella misma esa elección en los años que le quedaron de vida. Fin de la historia de Valeria.",
          "next": null,
          "choices": []
        }
      }
    },
    kimphuc: {
      "start": "kimphuc_intro",
      "scenes": {
        "kimphuc_intro": {
          "text": "Antonia tenía nueve años cuando, el 8 de junio de 1972, un bombardeo con napalm del ejército survietnamita cayó sobre su aldea natal — salió corriendo a la carretera, arrancándose la ropa en llamas, con quemaduras graves en casi un tercio del cuerpo, y en ese instante la fotografió un reportero que se encontraba por casualidad cerca de allí, tomando una imagen que dio la vuelta al mundo.",
          "next": "kimphuc_scene2"
        },
        "kimphuc_scene2": {
          "text": "Después de muchos meses de tratamiento y decenas de operaciones, Antonia sobrevivió, pero la década siguiente transcurrió entre el dolor constante de las quemaduras y una amargura interior creciente — creció bajo un gobierno comunista que promovía oficialmente el ateísmo, y su propia fotografía se convirtió en un símbolo de guerra que varios Estados usaron para propaganda sin consultarla nunca. En esos años se preguntaba a menudo si había alguien capaz de verla a ella misma, y no solo la célebre fotografía de su rostro que había dado la vuelta al mundo sin una sola palabra suya.",
          "next": "kimphuc_choice1"
        },
        "kimphuc_choice1": {
          "text": "En 1982, diez años después del bombardeo, Antonia encontró por casualidad una vieja Biblia en una biblioteca de Saigón y empezó a leerla en secreto, aunque las reuniones religiosas abiertas estaban en esos años bajo estricto control de las autoridades. Las palabras del Evangelio de Juan — «Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí» — se convirtieron para ella justo en el camino que buscaba, y por primera vez en diez años su dolor encontró un sentido distinto de la injusticia desnuda e inexplicable. Tenía que decidir: arriesgarse y empezar a asistir a una iglesia clandestina, a pesar de los posibles problemas con las autoridades, o limitarse a una lectura personal, tranquila y discreta, en casa.",
          "choices": [
            {
              "label": "Arriesgarse y empezar a asistir a la iglesia, a pesar del riesgo",
              "effects": {
                "faith": 10
              },
              "next": "kimphuc_bridgeA"
            },
            {
              "label": "Limitarse a una lectura personal tranquila, sin riesgo",
              "effects": {
                "faith": -10
              },
              "next": "kimphuc_bridgeB"
            }
          ]
        },
        "kimphuc_bridgeA": {
          "text": "Antonia empezó a asistir en secreto a una pequeña iglesia clandestina de Saigón, arriesgándose a llamar la atención de las autoridades, y en la víspera de Navidad de 1982, en una reunión especial de la iglesia, tomó la decisión de entregar su vida a Cristo. Por primera vez en diez años de dolor físico constante y del estatus de «símbolo de guerra» que nunca había querido, sintió que el dolor se podía llevar sin estar sola.",
          "next": "kimphuc_choice2"
        },
        "kimphuc_bridgeB": {
          "text": "Antonia se limitó a leer la Biblia en silencio, sin que nadie lo notara, en casa, sin animarse a las reuniones públicas por miedo a las autoridades, aunque releía una y otra vez esas mismas palabras sobre el camino, la verdad y la vida hasta casi memorizarlas. La fe siguió siendo para ella algo estrictamente personal y casi invisible incluso para su propia familia durante muchos años más, sin una comunidad que pudiera compartir esa carga con ella.",
          "next": "kimphuc_choice2"
        },
        "kimphuc_choice2": {
          "text": "En 1996, en Washington, junto al monumento a los veteranos de la guerra de Vietnam, Antonia se encontró de pronto cara a cara con un estadounidense a quien se señalaba como implicado en la coordinación de aquel mismo bombardeo sobre su aldea veinticuatro años antes. Tenía que decidir allí mismo, ante las cámaras y la multitud de veteranos: abrazar a ese hombre y perdonarlo públicamente, o darse la vuelta e irse, dejando todo el peso de aquel único instante sin perdonar.",
          "choices": [
            {
              "label": "Abrazarlo y perdonarlo allí mismo",
              "effects": {
                "faith": 15
              },
              "next": "kimphuc_endLight"
            },
            {
              "label": "Darse la vuelta e irse sin perdonar",
              "effects": {
                "faith": -15
              },
              "next": "kimphuc_endDark"
            }
          ]
        },
        "kimphuc_endLight": {
          "text": "Antonia lo abrazó y dijo en voz alta, delante de todos: «No estoy enojada. Sobreviví. Hace mucho que perdoné» — y ambos rompieron a llorar ante los veteranos allí reunidos. Décadas después, en un ensayo para una radio estadounidense, diría: «El perdón me liberó del odio. Todavía tengo muchas cicatrices en el cuerpo y un dolor fuerte casi todos los días, pero mi corazón está limpio. El napalm es muy poderoso, pero la fe, el perdón y el amor son mucho más poderosos». Desde entonces recorre el mundo desde hace años contando esta historia y trabajando en una fundación benéfica de ayuda a niños afectados por la guerra que lleva su nombre. Fin de la historia de Antonia.",
          "next": null,
          "choices": []
        },
        "kimphuc_endDark": {
          "text": "Antonia no logró obligarse a abrazarlo en ese momento y se fue en silencio, dejando al hombre de pie, solo, junto al monumento. Aquel único encuentro que no llegó a concretarse siguió apareciendo durante muchos años en sus entrevistas como un momento al que volvía mentalmente una y otra vez, sin decidirse nunca a intentarlo de nuevo. Fin de la historia de Antonia.",
          "next": null,
          "choices": []
        }
      }
    },
    darlene: {
      "start": "darlene_intro",
      "scenes": {
        "darlene_intro": {
          "text": "Nelly, misionera estadounidense, se casó con el misionero Russell el 18 de agosto de 1937, y juntos partieron a servir a Nueva Guinea, llevando consigo solo lo imprescindible y una maleta entera de Biblias y literatura espiritual para la futura congregación. Tras el ataque japonés a Pearl Harbor en diciembre de 1941, la isla quedó dentro de la zona de combate, y las autoridades militares japonesas detuvieron al matrimonio junto con otros extranjeros.",
          "next": "darlene_scene2"
        },
        "darlene_scene2": {
          "text": "A Nelly y a Russell los separaron y enviaron a campos de internamiento distintos, sin derecho a correspondencia y casi sin esperanza de saber nada el uno del otro. Desde mayo de 1943, Nelly estuvo recluida en el campo de mujeres de Kampili; gracias a que hablaba con soltura inglés, neerlandés e indonesio, la nombraron responsable del barracón, y adoptó la costumbre de leer en voz alta cada noche un pasaje de la Escritura y dirigir una oración conjunta — esa costumbre se convirtió durante años en el único sostén de dignidad humana y cuidado mutuo para las mujeres del barracón en medio de unas condiciones del campo cada vez más duras.",
          "next": "darlene_choice1"
        },
        "darlene_choice1": {
          "text": "En el campo, acusaron falsamente a Nelly de espionaje — supuestamente pasaba información a los aliados mediante cartas en clave. El interrogador le propuso firmar una confesión redactada de antemano a cambio de un trato más benévolo, aunque la confesión era pura invención. Nelly repetía en silencio para sí los versos del salmo sobre no temer mal alguno porque el Señor está con ella — no porque en verdad dejara de tener miedo, sino porque esas palabras eran lo único firme en una sala donde todo lo demás se sostenía sobre la mentira del interrogador. Nelly tenía que decidir: firmar la falsa confesión para que terminaran los interrogatorios, o negarse a firmar una mentira evidente, sabiendo que eso enfurecería aún más a los investigadores.",
          "choices": [
            {
              "label": "Negarse a firmar la falsa confesión",
              "effects": {
                "faith": 10
              },
              "next": "darlene_bridgeA"
            },
            {
              "label": "Firmar la confesión para que terminen los interrogatorios",
              "effects": {
                "faith": -10
              },
              "next": "darlene_bridgeB"
            }
          ]
        },
        "darlene_bridgeA": {
          "text": "Nelly se negó a firmar la falsa confesión, y los interrogatorios se volvieron aún más brutales — la torturaron y la mantuvieron en una celda de aislamiento sin ventanas. A pesar del dolor, siguió repitiéndose mentalmente los versos de los salmos que sabía de memoria, como único sostén en la oscuridad de la celda.",
          "next": "darlene_choice2"
        },
        "darlene_bridgeB": {
          "text": "Nelly, incapaz de soportar la crueldad de los interrogatorios, terminó firmando en cierto momento la falsa confesión de espionaje que le proponían. Las torturas en efecto cesaron por un tiempo después de eso, pero el propio caso contra ella, ahora respaldado oficialmente por su propia firma, resultaba mucho más grave a los ojos del mando japonés del campo.",
          "next": "darlene_choice2"
        },
        "darlene_choice2": {
          "text": "Con base en ese caso, condenaron a Nelly a morir decapitada a espada, y le fijaron una fecha exacta para la ejecución. En las últimas noches antes de la ejecución, sentada en su celda de aislamiento, cantaba himnos en voz alta y recitaba de memoria versos de los salmos, aunque los guardias ya le habían advertido varias veces que se callara, amenazándola con un nuevo castigo por hacer ruido. Tenía que decidir: seguir orando y cantando en voz alta, a pesar de las amenazas de los guardias, o callarse y pasar las últimas noches en silencio, sin arriesgarse a un nuevo castigo.",
          "choices": [
            {
              "label": "Seguir orando y cantando en voz alta, a pesar de las amenazas de los guardias",
              "effects": {
                "faith": 15
              },
              "next": "darlene_endLight"
            },
            {
              "label": "Callarse y pasar las últimas noches en silencio",
              "effects": {
                "faith": -15
              },
              "next": "darlene_endDark"
            }
          ]
        },
        "darlene_endLight": {
          "text": "Nelly siguió orando y cantando en voz alta por las noches, a pesar de las amenazas de los guardias, y, como describiría después, durante los propios interrogatorios y la espera de la ejecución la invadía en oleadas una paz que las circunstancias no podían explicar, y el miedo a la muerte retrocedía, como si Dios la llenara con su presencia allí mismo, en la celda. El día de la ejecución, cuando el oficial ya empezaba a desenvainar la espada, se produjo de pronto confusión entre la escolta, y en vez de ejecutarlas se llevaron a las mujeres de vuelta a Kampili sin ninguna explicación — según una versión, por el fin de la guerra que ya se acercaba, el mando japonés decidió no generar más resonancia internacional. Cerca del final de la guerra, el comandante del campo, Yamaji, hasta entonces implacable con los presos, fue en persona a comunicarle a Nelly que su esposo Russell había muerto en otro campo. Sin dejarse llevar por el odio hacia el hombre que la había mantenido presa durante años, Nelly le pidió permiso para decirle unas palabras: «Por eso no siento odio hacia usted, señor Yamaji. Tal vez Dios me trajo a este lugar y a este momento para decirle que Él lo ama» — el comandante salió de la habitación llorando. Nelly contaría después su historia en el libro «Evidence Not Seen» («Evidencia no vista»), cuyo mismo título son las palabras bíblicas sobre la fe como certeza de lo que no se ve. Fin de la historia de Nelly.",
          "next": null,
          "choices": []
        },
        "darlene_endDark": {
          "text": "Nelly se calló y pasó las últimas noches antes de la ejecución en silencio, sin arriesgarse a un nuevo castigo. El día de la ejecución, cuando el oficial ya empezaba a desenvainar la espada, de todos modos se produjo de pronto confusión entre la escolta, y en vez de ejecutarlas se llevaron a las mujeres de vuelta a Kampili sin ninguna explicación — la misma liberación que en aquellas noches silenciosas casi había dejado de esperar. Russell, su esposo, murió cautivo en otro campo, sin llegar a ver la liberación; esas semanas de silencio antes de la ejecución que no llegó a producirse las recordaría después como el momento en que estuvo más cerca de rendirse, sin saber siquiera que la liberación ya estaba cerca de todos modos. Fin de la historia de Nelly.",
          "next": null,
          "choices": []
        }
      }
    },
    leah: {
      "start": "leah_intro",
      "scenes": {
        "leah_intro": {
          "text": "Lina tenía catorce años cuando, el 19 de febrero de 2018, milicianos de un grupo terrorista nigeriano, una escisión de Boko Haram, irrumpieron en una escuela de niñas en la ciudad de Dapchi y se llevaron a ciento diez alumnas, entre ellas a Lina — la única cristiana del grupo capturado. Su madre la había criado en la fe desde muy pequeña y le repetía a menudo el mismo versículo sobre que Dios no le había dado espíritu de cobardía, sino de poder, de amor y de dominio propio — palabras que Lina, la noche del secuestro, se repetía en un susurro mientras el autobús de los milicianos la alejaba cada vez más de su casa.",
          "next": "leah_scene2"
        },
        "leah_scene2": {
          "text": "Semanas después, los milicianos anunciaron que devolverían a las familias a todas las niñas secuestradas — con una sola condición: Lina debía renunciar públicamente al cristianismo y convertirse al islam, como el resto de las cautivas, a quienes habían obligado bajo amenaza a pronunciar formalmente oraciones islámicas.",
          "next": "leah_choice1"
        },
        "leah_choice1": {
          "text": "Antes de liberar a las otras noventa y nueve alumnas, los milicianos pusieron a Lina ante una decisión delante de sus propias compañeras: pronunciar las palabras de conversión al islam junto con todas y volver a casa con ellas, o ser la única que se negara, sabiendo que entonces sería la única a quien no dejarían ir.",
          "choices": [
            {
              "label": "Negarse a renunciar a su fe, aunque eso signifique quedar sola en cautiverio",
              "effects": {
                "faith": 10
              },
              "next": "leah_bridgeA"
            },
            {
              "label": "Pronunciar las palabras de conversión junto con todas, por la liberación",
              "effects": {
                "faith": -10
              },
              "next": "leah_bridgeB"
            }
          ]
        },
        "leah_bridgeA": {
          "text": "Lina se negó a pronunciar las palabras de conversión al islam, y el 21 de marzo de 2018 los milicianos dejaron ir a sus casas a ciento cuatro compañeras de clase, dejando a Lina como la única cautiva de todo el grupo. Antes de la despedida, alcanzó a pedirles a sus amigas liberadas que oraran por ella, mientras las subían a los vehículos y se las llevaban.",
          "next": "leah_choice2"
        },
        "leah_bridgeB": {
          "text": "Incapaz de imaginar que sus compañeras se fueran a casa sin ella, Lina, en el último momento, repitió en voz alta las palabras que le exigían — y, junto con todas las demás, en efecto la prepararon para la liberación a la mañana siguiente. Pero esa noche, uno de los comandantes le anunció por separado: ya que ahora, según decían, era «una de ellos», no necesitaba el camino de vuelta a casa — la dejaban con el grupo «para seguir instruyéndola en la fe», igual que a otras jóvenes recién convertidas de capturas anteriores. Esa noche, ya entre cautivas desconocidas y sin ninguna esperanza del autobús de la mañana a casa, se arrepintió amargamente de las palabras pronunciadas en voz alta, y decidió para sí misma no volver a fingir jamás una renuncia, pasara lo que pasara.",
          "next": "leah_choice2"
        },
        "leah_choice2": {
          "text": "Tras pasar en cautiverio muchos meses y luego años, Lina logró en 2020 hacerle llegar a su madre un breve mensaje a través de unas pocas cautivas liberadas: «Mamá, no te preocupes. Sé que no es fácil extrañarme, pero quiero asegurarte que estoy bien donde estoy. Estoy segura de que un día volveré a ver tu rostro. Si no aquí, entonces allá, junto a nuestro Señor Jesucristo» — la misma fe por la que había quedado sola de todo el grupo de secuestradas seguía sonando, años después, en sus palabras. Su madre, Rebeca, por su parte repetía en entrevistas: «Estoy tan orgullosa de mi Lina, porque no renunció a Cristo, y por eso sé que Dios nunca la abandonará» — y seguía pidiéndole al mundo entero que no dejara de orar por su hija. A la propia Lina le tocaba decidir una y otra vez lo mismo: seguir declarándose cristiana cada vez que los milicianos le preguntaban, o decir por fin lo que querían oír, con tal de que terminaran los interrogatorios interminables.",
          "choices": [
            {
              "label": "Seguir declarándose cristiana en cada interrogatorio",
              "effects": {
                "faith": 15
              },
              "next": "leah_endLight"
            },
            {
              "label": "Decir por fin lo que le exigen",
              "effects": {
                "faith": -15
              },
              "next": "leah_endDark"
            }
          ]
        },
        "leah_endLight": {
          "text": "Según los pocos datos que llegaban de personas liberadas del mismo cautiverio, y por aquel mismo mensaje enviado a su madre, Lina siguió, año tras año, declarándose cristiana en cada nuevo interrogatorio, negándose a pronunciar las palabras de conversión que le exigían. Para 2021, según los datos disponibles, había pasado en cautiverio más de 1100 días; según la información más reciente al momento de redactar esta historia, su suerte y su paradero seguían siendo desconocidos, y ella seguía sin haber renunciado a la fe por la que había renunciado a la libertad. Fin de la historia de Lina.",
          "next": null,
          "choices": []
        },
        "leah_endDark": {
          "text": "En algún momento, agotada por los interrogatorios interminables, Lina, según los pocos datos que llegaban, dejó de responder directamente a las preguntas sobre su fe, limitándose al silencio en lugar de una negativa o un consentimiento claros. Ese silencio no le trajo la liberación — según la información más reciente al momento de redactar esta historia, su suerte y su paradero seguían siendo desconocidos. Fin de la historia de Lina.",
          "next": null,
          "choices": []
        }
      }
    },
    doss: {
      "start": "doss_intro",
      "scenes": {
        "doss_intro": {
          "text": "Marcos, miembro de la Iglesia Adventista del Séptimo Día, ya antes de ser llamado a filas había decidido con firmeza que nunca tomaría un arma, ni siquiera yendo al frente — y se alistó voluntario en el ejército justamente como camillero, confiando en que podría salvar vidas sin quitarlas. El mandamiento «no matarás» se lo repetía a sí mismo no como un principio abstracto de sermón, sino como una promesa personal hecha a Dios mucho antes de la citación militar — y no veía razón para renunciar a ella solo porque había estallado la guerra.",
          "next": "doss_scene2"
        },
        "doss_scene2": {
          "text": "En el campo de instrucción, sus compañeros y parte de los oficiales se burlaban abiertamente de Marcos por negarse a portar armas, llamándolo cobarde y una carga para el pelotón; la primera noche en el barracón se arrodilló junto a su catre para orar antes de dormir, y de todos lados le llovieron pesadas botas militares entre las burlas de sus compañeros de barracón — no interrumpió la oración, y desde entonces oraba así cada noche, sin importarle los objetos que le lanzaban. Sus compañeros lo apodaron «el santo Joe», y el mando le propuso más de una vez que tomara un fusil como todos los demás, o que tramitara los papeles para una baja honorable por objeción de conciencia, evitando así el frente por completo.",
          "next": "doss_choice1"
        },
        "doss_choice1": {
          "text": "Bajo la presión de las burlas y las amenazas directas de consejo de guerra por insubordinación, Marcos tenía que decidir: tomar por fin un arma, como le exigían, para terminar con el acoso y demostrar su aptitud para el servicio, o seguir insistiendo en su derecho a servir como camillero sin armas, por incómodo que resultara para el mando. Cada noche en el barracón, mientras los demás dormían, oraba en voz baja por lo mismo — no para que las circunstancias cambiaran, sino para tener la firmeza de no apartarse de la promesa hecha a Dios mucho antes del ejército.",
          "choices": [
            {
              "label": "Seguir insistiendo en servir como camillero sin armas",
              "effects": {
                "faith": 10
              },
              "next": "doss_bridgeA"
            },
            {
              "label": "Tomar un arma para acabar con la presión y las burlas",
              "effects": {
                "faith": -10
              },
              "next": "doss_bridgeB"
            }
          ]
        },
        "doss_bridgeA": {
          "text": "Marcos se negó a tomar un arma, a pesar de la amenaza directa de consejo de guerra, y al final el mando le reconoció el derecho legal a servir como camillero desarmado. Los compañeros que hasta hacía poco lo llamaban cobarde siguieron mirándolo con desconfianza hasta el primer combate real, en el que iban a comprobar de qué estaba hecho de verdad.",
          "next": "doss_choice2"
        },
        "doss_bridgeB": {
          "text": "Marcos, incapaz de soportar la presión y las burlas constantes, terminó tomando un fusil, como le exigían los oficiales. Por dentro, esa decisión le costó mucho, y participaba cada vez con menos entrega en los ejercicios, sintiendo que había traicionado su propia convicción solo por un poco de tranquilidad en el barracón.",
          "next": "doss_choice2"
        },
        "doss_choice2": {
          "text": "Entre el 29 de abril y el 21 de mayo de 1945, durante los combates por la cresta de Hacksaw en Okinawa, el pelotón de Marcos quedó bajo fuego intenso y sufrió pérdidas graves; decenas de heridos quedaron tendidos sobre la roca desnuda bajo el bombardeo mientras el resto se retiraba. Marcos tenía que decidir: retirarse junto con todos, salvando su propia vida, o quedarse solo en la roca batida por el fuego y sacar a los heridos uno por uno, bajándolos con una cuerda hasta el pie del acantilado.",
          "choices": [
            {
              "label": "Quedarse y sacar a los heridos bajo fuego",
              "effects": {
                "faith": 15
              },
              "next": "doss_endLight"
            },
            {
              "label": "Retirarse junto con todos, dejando a los heridos",
              "effects": {
                "faith": -15
              },
              "next": "doss_endDark"
            }
          ]
        },
        "doss_endLight": {
          "text": "Marcos se quedó solo en la roca batida por el fuego y, durante varias horas, bajó a los soldados heridos uno tras otro con un lazo de cuerda improvisado, orando brevemente en voz alta cada vez, «Por favor, Señor, ayúdame a salvar a uno más», antes de cada nueva incursión bajo el fuego. En total salvó ese día y en las semanas siguientes de combate a setenta y cinco personas, sin tomar un arma ni una sola vez. El 12 de octubre de 1945, el presidente Harry Truman le entregó personalmente la Medalla de Honor en el jardín de la Casa Blanca — el único objetor de conciencia que recibió esa condecoración en toda la Segunda Guerra Mundial. Fin de la historia de Marcos.",
          "next": null,
          "choices": []
        },
        "doss_endDark": {
          "text": "Marcos se retiró junto con todo el pelotón de la roca bajo el fuego intenso, dejando a los heridos donde estaban. Se perdió la posición, y parte de los heridos abandonados en la roca no llegó a ver la llegada de los refuerzos. Marcos siguió sirviendo en Okinawa hasta el final de la campaña, pero aquel único día en que prefirió retirarse junto con todos ya no lo mencionaba en memorias de guerra, sino solo en raras conversaciones con la gente más cercana a él, añadiendo siempre que la oración de aquel día le costó más que en cualquiera de los días en que se quedó desarmado bajo el fuego. Fin de la historia de Marcos.",
          "next": null,
          "choices": []
        }
      }
    },
    wilkerson: {
      "start": "wilkerson_intro",
      "scenes": {
        "wilkerson_intro": {
          "text": "Federico, joven pastor pentecostal del pueblo de Philipsburg, en Pensilvania, poco antes había vendido el único televisor de la casa y había adoptado la costumbre de pasar dos horas cada noche en oración, preguntándose qué podía cambiar realmente en la vida de una persona con una disciplina de oración tan constante. En febrero de 1958 leyó en la revista Life un artículo sobre el juicio a siete adolescentes de una pandilla callejera de Nueva York, acusados de asesinato — y sintió un deseo irresistible de viajar a Nueva York y hablarles en persona a esos muchachos sobre la fe. Esa misma noche anotó en su diario una breve oración — pidiendo que le dieran al menos una oportunidad de hablar con esos jóvenes antes de que los condenaran — sin sospechar que ese impulso cambiaría el resto de su vida.",
          "next": "wilkerson_scene2"
        },
        "wilkerson_scene2": {
          "text": "Federico llegó sin invitación al edificio del tribunal de Nueva York en plena audiencia y trató de abrirse paso hacia los adolescentes acusados con una Biblia abierta en las manos, gritando que quería ayudarlos. Un alguacil lo sacó bruscamente de la sala ante los periodistas, y al día siguiente uno de los diarios de la ciudad publicó su fotografía, presentando lo ocurrido como la ocurrencia de un predicador provinciano — toda la ciudad lo recordó así durante varios días.",
          "next": "wilkerson_choice1"
        },
        "wilkerson_choice1": {
          "text": "Humillado y ridiculizado ante toda la ciudad, Federico tenía que decidir: tomar el autobús de vuelta a Pensilvania y reconocer que aquella idea de las pandillas callejeras había sido un error evidente, o quedarse en Nueva York e intentar de nuevo, ahora por otros medios, llegar a esos mismos adolescentes y su pandilla. Recordaba aquella oración nocturna de su diario y su costumbre de las dos horas diarias de oración, y se preguntaba si aquello había sido un llamado sincero de Dios o solo el impulso pasajero de un pastor provinciano que había visto su fotografía en una revista nacional.",
          "choices": [
            {
              "label": "Quedarse en Nueva York e intentarlo de nuevo",
              "effects": {
                "faith": 10
              },
              "next": "wilkerson_bridgeA"
            },
            {
              "label": "Volver a casa, reconociendo el error de la idea",
              "effects": {
                "faith": -10
              },
              "next": "wilkerson_bridgeB"
            }
          ]
        },
        "wilkerson_bridgeA": {
          "text": "Federico se quedó en Nueva York y, en lugar de volver al tribunal, fue directo a las calles de Brooklyn, donde encontró a Nicky Cruz — líder de la pandilla Mau-Maus, temido incluso por otras pandillas del barrio. Nicky lo golpeó y le puso un cuchillo en la garganta gritando: «¡Si te acercas otra vez, te mato!» Federico, sangrando, le respondió que Nicky podía cortarlo en mil pedazos y esparcirlos por la calle — y cada pedazo lo seguiría amando, porque Cristo lo amaba a él, a Nicky, tal como era. En las semanas siguientes, Federico volvió una y otra vez a las mismas esquinas, repitiéndole a la pandilla siempre la misma frase: «Jesús te ama», sin importar cuántas veces lo echaran.",
          "next": "wilkerson_choice2"
        },
        "wilkerson_bridgeB": {
          "text": "Federico, incapaz de soportar la humillación pública ante la prensa, ese mismo día tomó el autobús de vuelta a Pensilvania, convencido de que el ministerio con las pandillas callejeras de la gran ciudad había terminado para siempre. Pero pocos días después, sin encontrar sosiego en casa, volvió a Nueva York — no con la misma convicción clara de antes, sino más bien porque no lograba dejar del todo atrás la historia de aquellos muchachos del tribunal — y volvió a recorrer los mismos barrios de Brooklyn, ahora con mucha más cautela y sin ninguna de sus certezas anteriores de éxito.",
          "next": "wilkerson_choice2"
        },
        "wilkerson_choice2": {
          "text": "El 12 de julio de 1958, en una reunión de oración que Federico dirigía en Brooklyn, Nicky Cruz y otro de los líderes de las pandillas, Israel Narváez, pasaron al frente ante todos y entregaron su vida a Cristo, y días después llevaron ellos mismos las armas de la pandilla a la comisaría de policía. Durante el año siguiente, Federico conoció a decenas de adolescentes más de pandillas callejeras de Nueva York. Junto con su hermano Don, le propusieron abrir un pequeño centro de rehabilitación para adolescentes de pandillas con adicciones — una empresa arriesgada, que exigía financiamiento constante, sin ninguna garantía de éxito.",
          "choices": [
            {
              "label": "Abrir el centro de rehabilitación, a pesar de todos los riesgos",
              "effects": {
                "faith": 15
              },
              "next": "wilkerson_endLight"
            },
            {
              "label": "Renunciar a la idea del centro por demasiado arriesgada",
              "effects": {
                "faith": -15
              },
              "next": "wilkerson_endDark"
            }
          ]
        },
        "wilkerson_endLight": {
          "text": "Federico, junto con su hermano Don, fundó en 1958-1959 el programa de rehabilitación de adolescentes con adicciones llamado Teen Challenge. Su libro «La cruz y el puñal», sobre el ministerio con las pandillas callejeras, se vendió por más de quince millones de ejemplares en más de treinta idiomas, y el propio programa Teen Challenge creció desde entonces hasta convertirse en una red internacional de centros de rehabilitación que ayudan a personas con adicciones en todo el mundo. Fin de la historia de Federico.",
          "next": null,
          "choices": []
        },
        "wilkerson_endDark": {
          "text": "Federico renunció a la idea de abrir el centro de rehabilitación, considerando el riesgo demasiado alto sin financiamiento garantizado, y volvió al servicio pastoral habitual en una pequeña parroquia. Decenas de adolescentes de las pandillas de Nueva York a quienes había llegado a conocer se quedaron sin el programa estructurado de ayuda que él podría haberles ofrecido. Fin de la historia de Federico.",
          "next": null,
          "choices": []
        }
      }
    },
    pullinger: {
      "start": "pullinger_intro",
      "scenes": {
        "pullinger_intro": {
          "text": "Diana, joven inglesa sin formación misionera especializada, sentía desde niña el llamado de Dios al servicio y esperaba que Dios la enviara a África, pero tras varios intentos fallidos de llegar allí, todas las puertas se le fueron cerrando una tras otra. Desorientada, pidió consejo a su párroco, y este le dijo que comprara un pasaje para el barco más lejano que pudiera encontrar, que orara en el camino y confiara en que el Señor mismo le indicaría dónde desembarcar. En 1966, a los veintidós años, hizo exactamente eso — y desembarcó en Hong Kong, decidiendo casi al azar ayudar en los barrios más pobres de la ciudad.",
          "next": "pullinger_scene2"
        },
        "pullinger_scene2": {
          "text": "Pronto se enteró de la Ciudad Amurallada de Kowloon — un enclave densamente construido en el mismo corazón de Hong Kong, que formalmente no estaba sujeto ni a las leyes británicas ni a las chinas, y donde mandaban las tríadas, traficantes de heroína y dueños de fumaderos de opio. La policía de ambas jurisdicciones evitaba durante años entrar allí; incluso otros misioneros de Hong Kong consideraban ese lugar demasiado peligroso para una mujer joven y sola, y a Diana le propusieron en cambio un puesto de maestra en un barrio mucho más próspero de la ciudad.",
          "next": "pullinger_choice1"
        },
        "pullinger_choice1": {
          "text": "Diana tenía que decidir: instalarse y comenzar su servicio directamente dentro de la Ciudad Amurallada, entre adictos a la heroína y gente de las tríadas, sin ninguna protección policial y sin garantía de su propia seguridad, o aceptar un trabajo más seguro y previsible como maestra en un barrio corriente de Hong Kong. No tenía ni formación misionera especializada ni un plan para el caso de un ataque — solo una convicción firme, casi infantil, de que si Dios la había llamado precisamente a esa ciudad, Él mismo determinaría lo que le pasara dentro de sus murallas.",
          "choices": [
            {
              "label": "Instalarse dentro de la Ciudad Amurallada, entre los adictos",
              "effects": {
                "faith": 10
              },
              "next": "pullinger_bridgeA"
            },
            {
              "label": "Aceptar un trabajo seguro de maestra en otro barrio",
              "effects": {
                "faith": -10
              },
              "next": "pullinger_bridgeB"
            }
          ]
        },
        "pullinger_bridgeA": {
          "text": "Diana se instaló directamente dentro de la Ciudad Amurallada, alquilando una habitación diminuta entre los callejones estrechos del enclave, que nunca veían el sol. Al principio solo se repetía un verso de un salmo cada vez que pasaba frente a otro fumadero de opio: «El Señor es mi luz y mi salvación, ¿de quién temeré?» Después conoció a un matrimonio de cristianos británicos que la ayudaron a vivir el bautismo en el Espíritu Santo y a recibir el don de la oración en otras lenguas. Desde entonces, Diana caminaba cada día por los callejones del enclave, orando en voz alta en esa lengua — y pronto empezaron a acercársele jefes de pandillas y traficantes de heroína, preguntándole cómo podían alcanzar la salvación.",
          "next": "pullinger_choice2"
        },
        "pullinger_bridgeB": {
          "text": "Diana tomó el trabajo más seguro de maestra en un barrio próspero de Hong Kong, visitando de vez en cuando la Ciudad Amurallada con ayuda humanitaria, pero sin quedarse a vivir allí. La confianza de los residentes locales se formaba mucho más lentamente de lo que podría haberlo hecho con la presencia constante de alguien entre ellos. Más tarde ella también conoció a la misma pareja de cristianos británicos y vivió el bautismo en el Espíritu Santo con el don de la oración en otras lenguas, pero sin una presencia constante dentro del enclave, ese don siguió siendo más un episodio de sus visitas que un arma cotidiana.",
          "next": "pullinger_choice2"
        },
        "pullinger_choice2": {
          "text": "Uno de los primeros adictos a la heroína a quien Diana intentaba ayudar a dejar la droga le pidió ayuda para pasar el síndrome de abstinencia — de todos modos ella no tenía medicamentos. Diana le propuso lo mismo que había aprendido ella misma: aceptar a Cristo y repetir la oración en otra lengua cada vez que llegara el dolor. Diana tenía que decidir: quedarse a su lado día y noche, orando junto a él en voz alta durante toda la angustiosa abstinencia, o remitirlo a un hospital estatal, donde había ayuda médica formal disponible, pero sin ninguna implicación personal.",
          "choices": [
            {
              "label": "Quedarse a su lado durante toda la abstinencia, sin medicamentos",
              "effects": {
                "faith": 15
              },
              "next": "pullinger_endLight"
            },
            {
              "label": "Remitirlo a un hospital estatal",
              "effects": {
                "faith": -15
              },
              "next": "pullinger_endDark"
            }
          ]
        },
        "pullinger_endLight": {
          "text": "Diana se quedó a su lado durante toda la abstinencia, orando junto a él en voz alta en la lengua recibida en el bautismo del Espíritu Santo — y, según su propio testimonio y el de numerosos otros adictos que pasaron después por ese mismo ministerio, los síntomas remitían notablemente más fácil que en una abstinencia común sin ninguna ayuda; las autoridades y los médicos reconocerían más tarde, en casos concretos, una eficacia casi total de esa desintoxicación sin medicamentos. En 1981 fundó oficialmente la organización benéfica St. Stephen's Society, con una red de casas de rehabilitación para adictos, prostitutas y exmiembros de pandillas, que sigue funcionando en Hong Kong hasta hoy. Fin de la historia de Diana.",
          "next": null,
          "choices": []
        },
        "pullinger_endDark": {
          "text": "Diana lo remitió a un hospital estatal, donde pasó por una desintoxicación formal bajo supervisión médica, pero sin esa presencia personal y constante que ella misma podría haberle ofrecido. Pocas semanas después del alta, él volvió a sus antiguos hábitos, y Diana nunca llegó a desarrollar un método propio para trabajar con la adicción, quedando más como observadora de lo que ocurría en la Ciudad Amurallada que como participante directa en la liberación de alguien. Fin de la historia de Diana.",
          "next": null,
          "choices": []
        }
      }
    },
    baldwin: {
      "start": "baldwin_intro",
      "scenes": {
        "baldwin_intro": {
          "text": "Mateo, actor de Hollywood, llevó durante años una vida bohemia, llena de fiestas y despreocupación, hasta que su esposa Kenya adoptó el cristianismo influida por la niñera brasileña que trabajaba en su casa — esta no solo oraba por toda la familia, sino que también decía más de una vez que creía que algún día todos ellos se convertirían a la fe. Cada mañana, antes de ocuparse de los niños, la niñera leía en voz baja el mismo capítulo de la Biblia en portugués en la cocina, y Mateo, al pasar con su taza de café, escuchó esas palabras durante años sin siquiera intentar entender de qué trataban.",
          "next": "baldwin_scene2"
        },
        "baldwin_scene2": {
          "text": "Kenya llevaba años invitando a Mateo a ir con ella a la iglesia, pero él lo trataba con cortés indiferencia, considerando la fe un asunto personal de su esposa. La propia Kenya, mientras tanto, oraba de rodillas una hora cada mañana, y leía la Biblia entre treinta y cuarenta y cinco minutos más por la mañana y por la noche — y así continuó durante todo un año. Nunca lo obligó ni discutió, solo repetía con calma una vez al año que seguía orando por él — la misma frase que había dicho la niñera años atrás, y que Mateo hacía tiempo había dejado de percibir como algo más que una fórmula habitual.",
          "next": "baldwin_choice1"
        },
        "baldwin_choice1": {
          "text": "La mañana del 11 de septiembre de 2001, viendo por televisión los atentados en Nueva York junto con todo el país, Mateo pensó de pronto: si resultaron posibles las torres gigantes cayendo, entonces todo es posible — y si mi esposa ya es cristiana y yo llevo tantos años pasando de largo junto a una Biblia que yo mismo guardaba en un cajón sin abrir ni una línea, entonces tal vez Cristo de verdad vuelva mañana mismo. Tenía que decidir: tomar por primera vez en serio aquello de lo que su esposa hablaba desde hacía años, o, como de costumbre, esperar a que pasara el momento de zozobra y volver a su vida de siempre en cuanto las noticias se calmaran.",
          "choices": [
            {
              "label": "Tomar en serio por primera vez la fe de su esposa",
              "effects": {
                "faith": 10
              },
              "next": "baldwin_bridgeA"
            },
            {
              "label": "Esperar a que pase la zozobra y volver a la vida de antes",
              "effects": {
                "faith": -10
              },
              "next": "baldwin_bridgeB"
            }
          ]
        },
        "baldwin_bridgeA": {
          "text": "Mateo, por primera vez en muchos años, fue con su esposa a la iglesia no por cortesía, sino porque de verdad quería encontrar respuestas, y empezó a orar por sí mismo, con sus propias palabras: «Señor, explícame qué está pasando». El sermón de ese día, según diría él mismo después, sonaba como si hubiera sido escrito personalmente para él.",
          "next": "baldwin_choice2"
        },
        "baldwin_bridgeB": {
          "text": "Mateo, como esperaba, dejó pasar las semanas más inquietantes después de los atentados e intentó volver a su vida de siempre. Pero no logró salir del todo de ese estado: semanas después, al encontrar a su esposa en su habitual oración matinal de rodillas, para su propia sorpresa se arrodilló junto a ella por primera vez en muchos años — todavía sin estar dispuesto a creer nada en serio, pero ya incapaz de simplemente restarle importancia como antes.",
          "next": "baldwin_choice2"
        },
        "baldwin_choice2": {
          "text": "En las semanas siguientes, Mateo tendría que decidir hasta dónde llegaría ese cambio: limitarse a asistir de vez en cuando a la iglesia por la tranquilidad familiar, o pasar por un bautismo en agua completo, declarando públicamente el nuevo rumbo de su vida ante amigos y colegas de la industria, que sin duda lo recibirían con escepticismo.",
          "choices": [
            {
              "label": "Pasar por el bautismo en agua públicamente",
              "effects": {
                "faith": 15
              },
              "next": "baldwin_endLight"
            },
            {
              "label": "Limitarse a visitas ocasionales a la iglesia, solo para aparentar",
              "effects": {
                "faith": -15
              },
              "next": "baldwin_endDark"
            }
          ]
        },
        "baldwin_endLight": {
          "text": "En el mes posterior a los atentados del 11 de septiembre, Mateo entregó su vida a Cristo, y en la primavera de 2002 pasó por el bautismo en agua, cambiando por completo su estilo de vida — desde entonces habla abiertamente de su fe en entrevistas y actos públicos, a pesar del escepticismo de parte del entorno de Hollywood. Fin de la historia de Mateo.",
          "next": null,
          "choices": []
        },
        "baldwin_endDark": {
          "text": "Mateo se limitó a visitas ocasionales a la iglesia junto con su esposa, sin decidirse a un paso público más serio como el bautismo. El cambio que había empezado aquella mañana del 11 de septiembre quedó a mitad de camino, y él mismo recordó durante mucho tiempo aquella sensación intensa que había sentido entonces, sin llegar nunca a llevarla hasta el final. Fin de la historia de Mateo.",
          "next": null,
          "choices": []
        }
      }
    },
    cooper: {
      "start": "cooper_intro",
      "scenes": {
        "cooper_intro": {
          "text": "Simón creció en una familia de predicadores de varias generaciones: su abuelo sirvió casi setenta y cinco años como pastor y fue apóstol de una pequeña iglesia, y su padre fue pastor y evangelista durante veinticinco años, llevando al pequeño Simón en sus viajes misioneros a los indios apache de Arizona. Al iniciar su carrera de rock bajo un llamativo nombre artístico, en medio siglo Simón se sumergió en un estilo de vida lleno de alcohol y provocaciones al borde del escándalo. Más tarde él mismo recordaría que de joven bebía en compañía de músicos de su generación, muchos de los cuales murieron de sobredosis siendo aún muy jóvenes — y él seguía bebiendo, aunque en algún rincón de su memoria quedaban los sermones dominicales de su infancia, que por entonces contaba a sus amigos más como anécdota que como algo en lo que él mismo hubiera creído alguna vez.",
          "next": "cooper_scene2"
        },
        "cooper_scene2": {
          "text": "Para comienzos de los años ochenta, el alcoholismo de Simón había llegado a tal punto que, según sus propias palabras posteriores, una vez literalmente le sangraron los ojos, y él mismo apenas recordaba períodos enteros de su vida y su carrera, incluida la grabación de uno de sus propios álbumes. Sheryl, a diferencia de él, ya llevaba varios años yendo a la iglesia y orando por él en voz alta cada noche, aunque casi nunca se lo decía en voz alta a él, para no presionarlo. Cansada de vivir con un hombre al que apenas reconocía sobrio, hizo las maletas, se fue a Chicago con su familia y su iglesia, y le puso un ultimátum directo: o dejaba de beber, o ella no volvería con los niños.",
          "next": "cooper_choice1"
        },
        "cooper_choice1": {
          "text": "Simón tenía que decidir: pasar por una sobriedad angustiosa sin el apoyo habitual del alcohol, al que había recurrido durante décadas tanto en el escenario como fuera de él, o dejar ir a su esposa y a sus hijos, y seguir viviendo como en los últimos años. Recordaba cómo de niño su padre hablaba desde el púlpito de la libertad que da la fe, y por primera vez en su vida se preguntaba si esa libertad era solo una palabra bonita de sermones ajenos, o si de verdad podía alcanzarla él mismo si ahora no se rendía.",
          "choices": [
            {
              "label": "Pasar por la sobriedad por su familia",
              "effects": {
                "faith": 10
              },
              "next": "cooper_bridgeA"
            },
            {
              "label": "Dejar ir a su esposa y seguir con su vida de antes",
              "effects": {
                "faith": -10
              },
              "next": "cooper_bridgeB"
            }
          ]
        },
        "cooper_bridgeA": {
          "text": "Simón dejó de beber y atravesó un período difícil de sobriedad, apoyándose en el apoyo de Sheryl desde la distancia y volviendo poco a poco a la fe que conocía desde niño en una familia de predicadores. Al terminar la rehabilitación, llamó a Sheryl a Chicago y dijo solo dos palabras: «Ya está, listo». Más tarde diría que la sobriedad le costó mucho más que su propia carrera de rock, llena de personajes escénicos provocadores.",
          "next": "cooper_choice2"
        },
        "cooper_bridgeB": {
          "text": "Simón no pudo obligarse de inmediato a dejar de beber, y Sheryl, tal como había advertido, se fue de un principio con los niños. Pasó los meses siguientes con el mismo estilo de vida, perdiendo uno tras otro a sus antiguos compañeros de escenario por la misma enfermedad — hasta que también perdió un concierto del que no recordaba nada, y comprendió que estaba perdiendo no solo a su familia, sino la propia capacidad de subir a un escenario. Solo entonces, con años de retraso y por un camino mucho más duro, pasó de todos modos por la misma sobriedad que podría haber elegido desde el principio.",
          "next": "cooper_choice2"
        },
        "cooper_choice2": {
          "text": "Años después de sobrio, Simón tenía que decidir cómo manejar públicamente su propia fe: seguir guardándosela para sí, protegiendo su imagen habitual de «rey del shock rock», o decirles abiertamente a los periodistas que iba a la iglesia cada domingo y leía la Biblia a diario, arriesgándose a destruir la imagen escénica que había construido durante medio siglo.",
          "choices": [
            {
              "label": "Hablar abiertamente de su fe en las entrevistas",
              "effects": {
                "faith": 15
              },
              "next": "cooper_endLight"
            },
            {
              "label": "Guardarse la fe para sí por su imagen escénica",
              "effects": {
                "faith": -15
              },
              "next": "cooper_endDark"
            }
          ]
        },
        "cooper_endLight": {
          "text": "Simón empezó a hablar abiertamente con los periodistas sobre su fe: «No hubo rebelde más grande que Jesucristo» — y que no había nada en el cristianismo que le prohibiera seguir siendo una estrella de rock. Repetía que casi todo lo que había cantado durante todos esos años era una historia sobre el bien y el mal — «no elijas el mal» —, solo que antes no siempre entendía él mismo de qué cantaba. Sheryl decía de su esposo en entrevistas: «Él no tiene un patrocinador, tiene un Salvador: Jesucristo». Hoy Simón cuenta que lee la Biblia cada día y va a la iglesia cada domingo, siendo al mismo tiempo una de las figuras más reconocibles del rock. Fin de la historia de Simón.",
          "next": null,
          "choices": []
        },
        "cooper_endDark": {
          "text": "Simón decidió guardarse su fe personal, protegiendo su imagen escénica habitual de preguntas de más de la prensa. Mantuvo la sobriedad, pero esa parte de su vida relacionada con la fe siguió siendo casi invisible incluso para muchos seguidores que llevaban años siguiendo su carrera, y los domingos seguía yendo en silencio a la iglesia de una ciudad, procurando que eso no apareciera en ninguna entrevista. Fin de la historia de Simón.",
          "next": null,
          "choices": []
        }
      }
    },
    pacquiao: {
      "start": "pacquiao_intro",
      "scenes": {
        "pacquiao_intro": {
          "text": "Zacarías, boxeador filipino que se elevó desde la pobreza extrema hasta convertirse en héroe nacional y campeón mundial en varias categorías de peso a la vez, llevó durante años una vida de apuestas, alcohol e infidelidades a su esposa Jinkee. Él mismo reconocería después: «Los domingos iba a la iglesia, y de lunes a sábado me sentaba en el bar a beber». Jinkee llevaba tiempo yendo sola a la iglesia y de vez en cuando dejaba en la mesita de noche una Biblia abierta, marcada en los salmos — Zacarías invariablemente la cerraba y la guardaba en el cajón, sin leer ni una línea.",
          "next": "pacquiao_scene2"
        },
        "pacquiao_scene2": {
          "text": "Después de otro escándalo, cuando Jinkee ya hablaba en serio de dejar la familia, Zacarías decidió retirarse por unos días al bosque a las afueras de la ciudad, para poner en orden sus pensamientos lejos de las cámaras, los mánagers y las tentaciones habituales que lo perseguían en su vida cotidiana. Antes de partir, para su propia sorpresa, se llevó aquella misma Biblia de la mesita de noche, sin llegar a confesarle a Jinkee para qué la necesitaba exactamente.",
          "next": "pacquiao_choice1"
        },
        "pacquiao_choice1": {
          "text": "En el bosque, a solas consigo mismo por primera vez en muchos años de entrenamientos ininterrumpidos y vida pública, Zacarías tenía que decidir: pasar ese tiempo en oración y un examen honesto de su propia vida, como le aconsejaban sus pocos amigos creyentes, o simplemente esperar unos días en silencio y volver a su vida de siempre en cuanto el escándalo se calmara.",
          "choices": [
            {
              "label": "Pasar el tiempo en oración honesta y examen de su vida",
              "effects": {
                "faith": 10
              },
              "next": "pacquiao_bridgeA"
            },
            {
              "label": "Simplemente esperar unos días en silencio",
              "effects": {
                "faith": -10
              },
              "next": "pacquiao_bridgeB"
            }
          ]
        },
        "pacquiao_bridgeA": {
          "text": "Zacarías pasó varios días en oración solitaria, repasando por primera vez con honestidad sus propias infidelidades, sus deudas de juego y sus promesas incumplidas a su esposa. Fue en esos días, según contaría él mismo después, cuando tuvo un sueño: un bosque lleno de flores, dos ángeles y una voz diez veces más fuerte que un trueno que le dijo: «Hijo mío, hijo mío, ¿por qué te has apartado del camino?» Zacarías lo interpretó como una respuesta directa de Dios a su oración.",
          "next": "pacquiao_choice2"
        },
        "pacquiao_bridgeB": {
          "text": "Zacarías simplemente esperó unos días en el silencio del bosque, sin examinar nada en especial ni orar en serio, contando con esperar a que pasara el escándalo y volver a su vida de antes. Pero en una de esas noches de soledad, lejos de las cámaras y del ruido habitual, lo invadió de pronto, para su propia sorpresa, una sensación intensa de vergüenza por años de infidelidades y promesas rotas — una sensación demasiado parecida a lo que sus amigos creyentes llamaban la voz de Dios como para restarle importancia sin más.",
          "next": "pacquiao_choice2"
        },
        "pacquiao_choice2": {
          "text": "Después de lo que él mismo llamaba su encuentro con Dios en el bosque — ya fuera en el sueño o en el pesado sentimiento de vergüenza que no lo soltaba por las noches — Zacarías empezó, aunque no de inmediato y de forma intermitente, a leer un capítulo de la Biblia que antes solo llevaba consigo sin abrir. No rompió del todo con sus antiguos hábitos de inmediato — pasaron casi dos años más antes de que renunciara definitiva y abiertamente a las apuestas y las fiestas. Tenía que decidir: llevar esa ruptura lenta hasta el final, cortando abiertamente con sus antiguos hábitos y reconstruyendo su relación con Jinkee, o detenerse a mitad de camino, tratando lo vivido como una experiencia hermosa pero pasajera.",
          "choices": [
            {
              "label": "Romper radicalmente con sus antiguos hábitos por su familia",
              "effects": {
                "faith": 15
              },
              "next": "pacquiao_endLight"
            },
            {
              "label": "Tratar lo vivido como un episodio hermoso, sin cambiar nada",
              "effects": {
                "faith": -15
              },
              "next": "pacquiao_endDark"
            }
          ]
        },
        "pacquiao_endLight": {
          "text": "Zacarías renunció públicamente a las apuestas y al alcohol, le confesó a Jinkee todas sus infidelidades pasadas y le pidió perdón, empezando a reconstruir la relación con su familia. «Soy feliz porque encontré el camino correcto: la salvación, nacer de nuevo», diría después en una entrevista. Cerró los casinos de los que era copropietario, empezó a construir en su ciudad natal, General Santos, una iglesia llamada «La Palabra para Todos» con capacidad para cinco mil personas, y comenzó a profesar abiertamente el cristianismo en su vida pública, mientras que el matrimonio con Jinkee, que hasta hacía poco parecía condenado, se mantuvo y se fortaleció en los años siguientes. Desde entonces lleva consigo a cada pelea aquella misma Biblia del bosque, diciendo que le recuerda esa noche con más precisión que cualquier medalla o cinturón de campeón. Fin de la historia de Zacarías.",
          "next": null,
          "choices": []
        },
        "pacquiao_endDark": {
          "text": "Zacarías trató la experiencia vivida en el bosque como algo hermoso pero pasajero, y pronto volvió a sus antiguos hábitos — las apuestas y las relaciones casuales. Jinkee, cansada del ciclo repetido de promesas y recaídas, hablaba cada vez más a menudo de divorcio, y el propio Zacarías apenas volvió a mencionar públicamente aquel episodio del bosque en los años siguientes. Fin de la historia de Zacarías.",
          "next": null,
          "choices": []
        }
      }
    },
    franklin: {
      "start": "franklin_intro",
      "scenes": {
        "franklin_intro": {
          "text": "Efraín, futuro y célebre músico de gospel, fue abandonado por sus padres biológicos siendo muy pequeño y lo crio una tía abuela que le hizo de padre y madre a la vez — una mujer profundamente creyente, de cuya voz escuchó por primera vez la música gospel y la Biblia mucho antes de aprender a leer él mismo. Desde los ocho años luchó en secreto contra una adicción a la pornografía — un hábito que ocultó a todos a su alrededor durante más de veinte años, incluida su propia esposa.",
          "next": "franklin_scene2"
        },
        "franklin_scene2": {
          "text": "Para fines de los años noventa, siendo ya un reconocido intérprete de gospel con conciertos multitudinarios y transmisiones en vivo en canales cristianos, casado con Tammy desde hacía más de quince años, Efraín seguía cargando con ese peso secreto, cada vez más difícil de compaginar tanto con la imagen pública de un hombre que cantaba sobre la gracia ante millones de espectadores como con el papel de esposo fiel que su esposa creía que era.",
          "next": "franklin_choice1"
        },
        "franklin_choice1": {
          "text": "Una noche, en un arranque de asco hacia sí mismo, Efraín condujo hasta un contenedor de basura y tiró allí toda la colección acumulada — y horas después volvió en plena noche a desenterrarla, odiándose aún más por no haber sido capaz siquiera de esa decisión sencilla, cuando apenas una hora antes había orado en un escenario ante miles de personas pidiendo fuerza para vivir conforme a la fe. Tenía que decidir: reconocer que no podía superarlo con sus propias fuerzas y, por primera vez, contarle a alguien con honestidad su adicción, o seguir luchando contra ella en silencio, como había hecho ya por más de veinte años.",
          "choices": [
            {
              "label": "Contarle a alguien con honestidad su adicción por primera vez",
              "effects": {
                "faith": 10
              },
              "next": "franklin_bridgeA"
            },
            {
              "label": "Seguir luchando en silencio, como antes",
              "effects": {
                "faith": -10
              },
              "next": "franklin_bridgeB"
            }
          ]
        },
        "franklin_bridgeA": {
          "text": "En una habitación de hotel en Los Ángeles, durante otra gira, Efraín finalmente le contó su adicción a su esposa Tammy — por primera vez en más de veinte años lo dijo en voz alta ante alguien que no fuera él mismo: «Cariño, tengo que decirte algo. Estoy luchando contra una adicción a la pornografía». Tammy no se fue ni le dio la espalda, sino que se quedó a su lado, diciendo después que precisamente esa confianza los unió aún más — y juntos comenzaron el largo camino hacia la sanidad.",
          "next": "franklin_choice2"
        },
        "franklin_bridgeB": {
          "text": "Efraín volvió a guardar la colección lejos y siguió luchando contra la adicción en soledad, procurando que nadie, ni siquiera su esposa, sospechara nada. El peso del secreto siguió creciendo, y la distancia entre lo que cantaba en el escenario y lo que en realidad ocurría dentro de él se hizo cada vez más evidente para él mismo — hasta que un día Tammy notó por sí misma el cambio en su esposo y le preguntó directamente qué pasaba. Ya no tuvo fuerzas para seguir negándolo, y la verdad que pensaba llevarse a la tumba salió a la luz de todos modos — solo que varios años dolorosos después y por un camino mucho más doloroso del que podría haber sido.",
          "next": "franklin_choice2"
        },
        "franklin_choice2": {
          "text": "Años después de trabajar junto a su esposa en esta adicción, Efraín tenía que decidir si lo contaba abiertamente a todo el país, sabiendo que eso destruiría su imagen de artista de gospel intachable, o si dejaba esa parte de su vida como algo personal, confiado solo a la gente más cercana. Más de una vez había cantado desde el escenario sobre la gracia que cubre cualquier pecado, pero una cosa era cantar eso para miles de oyentes desconocidos, y otra muy distinta creer que esa misma gracia sostendría también su propio secreto, el más vergonzoso, pronunciado en voz alta con su propia voz.",
          "choices": [
            {
              "label": "Escribirlo abiertamente en su autobiografía",
              "effects": {
                "faith": 15
              },
              "next": "franklin_endLight"
            },
            {
              "label": "Dejarlo como un asunto personal, sin contarlo públicamente",
              "effects": {
                "faith": -15
              },
              "next": "franklin_endDark"
            }
          ]
        },
        "franklin_endLight": {
          "text": "Efraín contó públicamente por primera vez su larga lucha secreta contra la adicción a la pornografía en 2004, en una transmisión del canal CBN, y luego, en 2005, junto a Tammy sentada a su lado, ante millones de espectadores en el programa de Oprah Winfrey, destruyendo conscientemente su imagen de artista de gospel intachable para ayudar a otros que luchaban con el mismo secreto. Más tarde escribió también sobre ese mismo pasado en sus propios libros. Muchos oyentes que habían ocultado durante años una adicción parecida dentro de sus propias comunidades cristianas sintieron por primera vez que no estaban solos en esa lucha. Fin de la historia de Efraín.",
          "next": null,
          "choices": []
        },
        "franklin_endDark": {
          "text": "Efraín decidió dejar la historia de su adicción como un asunto personal, confiado solo a Tammy y a la gente más cercana, sin mencionarla en público. Su carrera musical siguió creciendo sin una sola mancha en su imagen intachable, pero muchos oyentes que luchaban con una adicción secreta parecida en su propia vida nunca llegaron a saber que no estaban solos en esa lucha. Fin de la historia de Efraín.",
          "next": null,
          "choices": []
        }
      }
    },
    lecrae: {
      "start": "lecrae_intro",
      "scenes": {
        "lecrae_intro": {
          "text": "Elías, futuro artista de hip-hop cristiano, sufrió abuso sexual por parte de un tutor cuando tenía entre siete y ocho años — un trauma del que no le habló a nadie durante muchos años, mientras se transformaba en silencio en relaciones promiscuas y un consumo casi indiscriminado de drogas durante la adolescencia y la juventud.",
          "next": "lecrae_scene2"
        },
        "lecrae_scene2": {
          "text": "Hacia el final de la secundaria, Elías había perdido prácticamente el control de su propia vida — los estudios, la relación con su familia, cualquier plan a largo plazo quedaban en segundo lugar frente al círculo habitual de drogas y conocidos casuales. La abuela que lo crio parte de su infancia lo llevaba a la iglesia los domingos, pero esos servicios se le quedaron grabados más como una obligación aburrida que como algo capaz de tocar el dolor del que no le hablaba ni siquiera a ella. En algún momento, sus allegados lo convencieron de hacer un programa de rehabilitación por su adicción.",
          "next": "lecrae_choice1"
        },
        "lecrae_choice1": {
          "text": "Después de la rehabilitación, evitando todavía hablar del abuso sufrido en la infancia incluso con los médicos, Elías entró a la universidad. Tenía que decidir: mirar por primera vez en serio hacia adentro y enfrentar lo que le había pasado a los siete años, aceptando la invitación a una reunión cristiana universitaria a la que lo llamaba su compañero de cuarto, o volver de nuevo al círculo habitual de conocidos, con tal de no toparse con los recuerdos dolorosos. Su compañero nunca presionó ni preguntó directamente qué había pasado exactamente en su infancia — simplemente repetía la invitación una y otra vez con la misma calma serena de que allí, en esa reunión, Elías tendría un lugar tal como era, sin necesidad de fingir.",
          "choices": [
            {
              "label": "Ir a la reunión cristiana y mirar hacia adentro",
              "effects": {
                "faith": 10
              },
              "next": "lecrae_bridgeA"
            },
            {
              "label": "Volver al círculo habitual de conocidos",
              "effects": {
                "faith": -10
              },
              "next": "lecrae_bridgeB"
            }
          ]
        },
        "lecrae_bridgeA": {
          "text": "Elías fue a la reunión cristiana universitaria a la que su compañero de cuarto lo había invitado varias veces, y, para su propia sorpresa, habló en voz alta por primera vez en muchos años de lo que le había pasado a los siete años. Pero el cambio verdadero no llegó de inmediato: durante casi un año vivió entre dos frentes, entre las fiestas universitarias y la comunidad cristiana, hasta que un grave accidente de auto lo hizo comprender que así ya no podía seguir. Fue justo después del accidente, según sus propias palabras, cuando «literalmente se quebró de culpa, vergüenza y arrepentimiento» — y eso marcó el verdadero comienzo de lo que él mismo llama su conversión: no un episodio único y espectacular, sino un proceso largo y gradual.",
          "next": "lecrae_choice2"
        },
        "lecrae_bridgeB": {
          "text": "Elías volvió de nuevo al círculo habitual de amistades, donde nadie preguntaba sobre el pasado ni lo hacía sentir incómodo. La rehabilitación ayudó por un tiempo a superar la adicción física en sí, pero el trauma de la infancia siguió sin decirse en voz alta, y continuó influyendo en sus decisiones en las relaciones y los estudios — hasta que, meses después, ese mismo compañero de cuarto, que nunca había dejado de invitarlo, encontró a Elías en un momento en que ocultar el dolor ya le resultaba imposible, y lo llevó a la reunión a la que esta vez Elías finalmente fue por su propia voluntad.",
          "next": "lecrae_choice2"
        },
        "lecrae_choice2": {
          "text": "Años después, ya convertido en un reconocido artista de hip-hop cristiano con millones de oyentes, Elías dijo más de una vez que la única manera de vivir un futuro mejor que el pasado era «aferrarse a Dios en el presente», y no intentar olvidar lo vivido. Tenía que decidir: escribir unas memorias honestas sobre el abuso sufrido en la infancia y los años de autodestrucción que siguieron, sabiendo que eso destruiría la imagen de artista cristiano intachable que se había formado parte de su público, o seguir cantando sobre la fe sin llamar nunca las cosas por su nombre directamente.",
          "choices": [
            {
              "label": "Escribir unas memorias honestas sobre todo lo vivido",
              "effects": {
                "faith": 15
              },
              "next": "lecrae_endLight"
            },
            {
              "label": "Seguir cantando sobre la fe, sin llamar las cosas por su nombre",
              "effects": {
                "faith": -15
              },
              "next": "lecrae_endDark"
            }
          ]
        },
        "lecrae_endLight": {
          "text": "Elías escribió unas memorias sinceras, «Unashamed» («Sin vergüenza»), describiendo con detalle el abuso sufrido en la infancia, los años de adicción y el camino hacia la fe, sin adornos y sin intentar parecer un ejemplo intachable. «Mi oración es que la gente encuentre sanidad y no sienta vergüenza», diría después sobre esa decisión. El libro se vendió ampliamente y provocó una ola de respuestas de otras personas que habían sufrido un abuso parecido y que por primera vez sintieron que podían hablar de ello abiertamente. Fin de la historia de Elías.",
          "next": null,
          "choices": []
        },
        "lecrae_endDark": {
          "text": "Elías decidió no hablar públicamente del abuso sufrido, y siguió cantando sobre la fe y la redención en fórmulas generales y seguras, comprensibles para un público amplio, pero sin detalles personales. Los oyentes que luchaban con un pasado parecido en su propia vida nunca llegaron a saber que el hombre cuya música escuchaban desde hacía años había pasado por algo muy similar. Fin de la historia de Elías.",
          "next": null,
          "choices": []
        }
      }
    },
    buchan: {
      "start": "buchan_intro",
      "scenes": {
        "buchan_intro": {
          "text": "Rodrigo, granjero de origen escocés nacido en Rodesia del Sur, perdió junto a su familia la granja que tenían en Zambia a causa de la agitación política, y en 1976 se trasladó con los suyos a un terreno recién comprado al que llamaron Shalom, en Sudáfrica, con la esperanza de empezar una vida nueva. Los primeros años en el nuevo lugar transcurrieron en un trabajo duro, casi sin días de descanso, y sin ninguna dimensión religiosa en su vida.",
          "next": "buchan_scene2"
        },
        "buchan_scene2": {
          "text": "Hacia finales de los años setenta, el matrimonio de Rodrigo con su esposa Jill atravesaba un mal momento: la angustia económica constante y el agotador trabajo físico dejaban poco espacio para algo que no fuera el cansancio. Los granjeros vecinos, algunos de ellos creyentes, los invitaban una y otra vez a las reuniones de oración del lugar, y aunque Rodrigo llevaba años rechazando cortésmente la invitación con la excusa del cansancio tras la faena, la propia Jill reconocía cada vez más que no le vendría mal, aunque fuera una vez, escuchar algo distinto de sus propias preocupaciones al final de otro día agotador.",
          "next": "buchan_choice1"
        },
        "buchan_choice1": {
          "text": "El 18 de febrero de 1979, en una de esas reuniones en una pequeña iglesia metodista a siete u ocho millas de la granja, Rodrigo tuvo que decidir: orar en serio por primera vez en su vida junto a su esposa por su propia conversión, reconociendo delante de los granjeros vecinos que la necesitaba, o tratar el encuentro como una visita social cualquiera, escuchando cortésmente y marchándose sin ningún cambio. Toda su vida había considerado la oración cosa de mujeres y predicadores, no de granjeros fornidos como él, y reconocer en voz alta ante los vecinos que necesitaba a Dios tanto como la lluvia para la cosecha le costó, en sí mismo, más que años de trabajo físico.",
          "choices": [
            {
              "label": "Orar en serio por su conversión junto a su esposa",
              "effects": {
                "faith": 10
              },
              "next": "buchan_bridgeA"
            },
            {
              "label": "Tratar el encuentro como algo formal, sin cambiar nada",
              "effects": {
                "faith": -10
              },
              "next": "buchan_bridgeB"
            }
          ]
        },
        "buchan_bridgeA": {
          "text": "Rodrigo, junto a Jill, vivió esa noche una verdadera conversión espiritual: cuando se hizo el llamado a pasar adelante y aceptar a Cristo, toda la familia, los cinco hijos junto a sus padres, avanzó hacia el altar. El matrimonio, que hasta entonces se sostenía solo por el cansancio, empezó a cambiar casi de inmediato: ambos aprendieron de nuevo a hablarse de algo más que la granja y el dinero.",
          "next": "buchan_choice2"
        },
        "buchan_bridgeB": {
          "text": "Rodrigo trató la reunión de oración como algo meramente formal, escuchando cortésmente a los vecinos pero sin cambiar nada esa noche. El matrimonio con Jill siguió sosteniéndose por mucho tiempo solo con cansancio y angustia económica, y aquella vaga sensación de que el trabajo de granjero no le bastaba para una vida plena no desapareció: simplemente volvió a él unos años después, cuando el mismo vecino pastor, que nunca dejó de invitarlos, encontró por fin a Rodrigo a solas y sin testigos, dispuesto a reconocer que necesitaba a Dios tanto como la lluvia para la cosecha.",
          "next": "buchan_choice2"
        },
        "buchan_choice2": {
          "text": "Poco después de aceptar a Dios de verdad, Rodrigo sintió un impulso interior de predicar abiertamente a los demás granjeros del lugar, pero predicar en público significaba el riesgo de parecer extraño ante gente que lo conocía como una persona muy distinta. Tenía que decidir si asumía abiertamente ese papel desconocido de predicador o si seguía siendo el granjero tranquilo y respetado que todos conocían.",
          "choices": [
            {
              "label": "Empezar a predicar abiertamente a otros hombres",
              "effects": {
                "faith": 15
              },
              "next": "buchan_endLight"
            },
            {
              "label": "Seguir siendo un granjero discreto, sin exponerse en público",
              "effects": {
                "faith": -15
              },
              "next": "buchan_endDark"
            }
          ]
        },
        "buchan_endLight": {
          "text": "Rodrigo empezó a predicar abiertamente, y en 1980, junto a Jill, fundó oficialmente el ministerio Shalom Ministries. Años después, siendo ya un predicador conocido, descansaba en la reserva natural de Mkuze cuando, según sus propias palabras, escuchó con claridad en su interior: \"Estás tan ocupado predicando que te olvidas de Mí. Quiero que canceles tus predicaciones\". Canceló todos los compromisos y se quedó en silencio ante Dios por un tiempo, y de ese mismo silencio nació la idea de la Mighty Men Conference: la primera conferencia para hombres se celebró en 2004, y para 2010 ya reunía hasta trescientos mil participantes a la vez. Un simple granjero se convirtió en uno de los evangelistas más conocidos de Sudáfrica. Fin de la historia de Rodrigo.",
          "next": null,
          "choices": []
        },
        "buchan_endDark": {
          "text": "Rodrigo decidió seguir siendo el granjero tranquilo y respetado que conocían sus vecinos, sin animarse jamás a predicar en público. El impulso interior que sintió tras su conversión se fue apagando con el tiempo, y el ministerio Shalom Ministries, junto con la conferencia que podría haber reunido a cientos de miles de hombres, nunca llegaron a existir. Fin de la historia de Rodrigo.",
          "next": null,
          "choices": []
        }
      }
    },
    lamott: {
      "start": "lamott_intro",
      "scenes": {
        "lamott_intro": {
          "text": "Alina, futura escritora estadounidense reconocida, creció en una familia donde la religión se consideraba algo anticuado e innecesario para la gente educada. A los veinte años ya estaba profundamente hundida en el alcohol y las drogas, y pasó casi trece años seguidos en ese estado, perdiendo trabajos, relaciones y casi toda capacidad de controlar su propia vida. Una noche, en medio de un periodo especialmente duro, le pareció de pronto que alguien estaba sentado en el rincón de su pequeño cuarto, y comprendió que era Jesús, observándola en silencio con paciencia y amor. En los días siguientes esa sensación de presencia la siguió a todas partes, como un gatito que se le hubiera pegado, aunque ella en ese momento era la persona menos dispuesta a llamarse creyente.",
          "next": "lamott_scene2"
        },
        "lamott_scene2": {
          "text": "En uno de los periodos más duros de sus borracheras, Alina pasó por casualidad frente a la pequeña iglesia presbiteriana de San Andrés en el pueblo californiano de Marin City y escuchó desde dentro el canto de un coro, tan hermoso y tan distinto de todo lo que conocía en su propia vida que se detuvo junto a la puerta sin atreverse a entrar. Los feligreses cantaban una línea sencilla sobre cómo la gracia había salvado hasta a un alma tan perdida como la de quien cantaba; Alina no sabía bien de dónde venía ese canto, pero algo en esas palabras, por primera vez en muchos años, no sonaba a condena sino a invitación.",
          "next": "lamott_choice1"
        },
        "lamott_choice1": {
          "text": "Alina tenía que decidir: entrar a la iglesia tal como estaba, agotada, todavía bebiendo, sin ninguna certeza de que la aceptarían allí dentro, o seguir de largo, como había pasado antes frente a decenas de edificios parecidos, convencida de que la religión no era para ella.",
          "choices": [
            {
              "label": "Entrar, a pesar de su propio estado",
              "effects": {
                "faith": 10
              },
              "next": "lamott_bridgeA"
            },
            {
              "label": "Seguir de largo, como siempre",
              "effects": {
                "faith": -10
              },
              "next": "lamott_bridgeB"
            }
          ]
        },
        "lamott_bridgeA": {
          "text": "Alina entró y se sentó en la última fila, todavía con el olor del alcohol del día anterior, esperando miradas de reproche, pero nadie le dijo una palabra de condena. Unos domingos después, escuchando el mismo canto del coro, finalmente le dijo a Cristo para sus adentros: \"Está bien. Puedes entrar\" — y empezó a volver una y otra vez a esa misma pequeña iglesia, todavía bebiendo y consumiendo drogas durante las semanas siguientes, pero ya incapaz de ignorar del todo lo que había sentido aquella primera vez junto a la puerta.",
          "next": "lamott_choice2"
        },
        "lamott_bridgeB": {
          "text": "Alina siguió de largo esa vez, como había pasado antes frente a decenas de edificios parecidos, y la borrachera continuó por mucho tiempo en el mismo rumbo. Pero el canto de aquel coro se le quedó grabado en la memoria sin que ella lo quisiera, y varios meses después, al encontrarse de nuevo cerca de la misma iglesia en un estado todavía peor que la primera vez, empujó la puerta de todos modos, simplemente porque ya no tenía a dónde más ir.",
          "next": "lamott_choice2"
        },
        "lamott_choice2": {
          "text": "Siguiendo asistiendo a esa misma pequeña iglesia, pero todavía incapaz de dejar de beber y consumir drogas por sí sola, Alina tenía que decidir: contarle a la comunidad, con honestidad y sin adornos, la magnitud de su propia dependencia y pedir ayuda, o seguir presentándose los domingos, ocultando la verdadera situación tras la sonrisa cortés de una feligresa más. Llevaba años escribiendo textos mordaces e irónicos sobre todo lo habido y por haber, y sabía mejor que muchos esconder tras las palabras lo que no quería mostrar; precisamente por eso, un relato honesto y sin adornos sobre sí misma le costaba más que cualquier texto literario.",
          "choices": [
            {
              "label": "Contarle a la comunidad su dependencia con honestidad y pedir ayuda",
              "effects": {
                "faith": 15
              },
              "next": "lamott_endLight"
            },
            {
              "label": "Seguir ocultando la verdadera situación",
              "effects": {
                "faith": -15
              },
              "next": "lamott_endDark"
            }
          ]
        },
        "lamott_endLight": {
          "text": "Alina le contó a la comunidad, con honestidad, la magnitud de su dependencia, y con su apoyo, poco a poco y no de inmediato, logró una sobriedad verdadera. Muchos años después escribiría: \"No creo que estuviera viva hoy si no fuera por la gente de la iglesia presbiteriana de San Andrés\" — y describiría todo ese camino sin adornos en sus memorias «Traveling Mercies», que se convirtieron en un éxito de ventas y en uno de los libros contemporáneos sobre la fe más citados, una fe encontrada no en el bienestar, sino en el fondo del abismo. Fin de la historia de Alina.",
          "next": null,
          "choices": []
        },
        "lamott_endDark": {
          "text": "Alina siguió presentándose en la iglesia los domingos, ocultando a la comunidad la verdadera magnitud de su dependencia tras una sonrisa cortés. Sin una confesión abierta y sin el apoyo que nadie sabía que hacía falta darle, el camino hacia la sobriedad se alargó mucho más tiempo, y de forma mucho más dolorosa, de lo que podría haber sido desde el principio. Fin de la historia de Alina.",
          "next": null,
          "choices": []
        }
      }
    },
    mccorvey: {
      "start": "mccorvey_intro",
      "scenes": {
        "mccorvey_intro": {
          "text": "Inés, que trabajaba como directora de marketing en una clínica que practicaba abortos, llevaba años siendo conocida en todo el país como \"Jane Roe\", la demandante del célebre caso judicial de 1973 que legalizó el aborto en toda Estados Unidos. Hacía tiempo que se había acostumbrado a su estatus de símbolo de ese movimiento, participando en mítines y entrevistas en defensa del derecho al aborto.",
          "next": "mccorvey_scene2"
        },
        "mccorvey_scene2": {
          "text": "En 1995, junto a la clínica donde trabajaba, abrió una oficina la organización Operation Rescue, contraria al aborto: el mismo grupo de activistas contra el que Inés se había manifestado públicamente durante años. Lo que más la sorprendió no fue la oración de ellos junto a la cerca entre las dos oficinas, sino la amistad de la pequeña Emily, hija de uno de los miembros de Operation Rescue, que una y otra vez se colaba por un agujero de la cerca para jugar junto a Inés. \"Llevaba tanto tiempo del lado del aborto que no sabía cómo reaccionar ante la bondad y el amor\", confesaría después. Contra todo pronóstico, en lugar de la hostilidad habitual entre las dos oficinas, poco a poco se fue formando un trato inesperado, casi de amistad, a través de esa misma cerca.",
          "next": "mccorvey_choice1"
        },
        "mccorvey_choice1": {
          "text": "El líder de esa organización, el pastor Flip Benham, la invitó varias veces a hablar no de política, sino de fe. Inés tenía que decidir: seguir manteniendo la distancia con gente cuya postura había condenado públicamente durante años, o aceptar por fin la invitación y hablar con ellos con honestidad por primera vez, sin las consignas ya preparadas de ambos bandos. En más de veinte años de apariciones públicas del lado del movimiento por el derecho al aborto, jamás se había preguntado en serio si Dios existía y qué pensaba de su propia vida; preguntas de ese tipo simplemente no encajaban en el lenguaje de consignas políticas al que estaba acostumbrada.",
          "choices": [
            {
              "label": "Aceptar la invitación y hablar con honestidad, sin consignas",
              "effects": {
                "faith": 10
              },
              "next": "mccorvey_bridgeA"
            },
            {
              "label": "Mantener la distancia con gente de ideas opuestas",
              "effects": {
                "faith": -10
              },
              "next": "mccorvey_bridgeB"
            }
          ]
        },
        "mccorvey_bridgeA": {
          "text": "Inés aceptó la invitación del pastor Flip Benham y, por primera vez en muchos años, habló de fe, y no de la política del aborto, con gente a la que antes consideraba sus adversarios. Las conversaciones continuaron durante semanas, y poco a poco pasaron de ser charlas formales a través de la cerca a algo parecido a una verdadera amistad.",
          "next": "mccorvey_choice2"
        },
        "mccorvey_bridgeB": {
          "text": "Inés decidió mantener la distancia con los nuevos vecinos de oficina, siguiendo tratándolos como adversarios ideológicos a pesar de las repetidas invitaciones a conversar. Pero la pequeña Emily no le preguntaba nada de política y simplemente seguía colándose por el agujero de la cerca para jugar, y unos meses después, precisamente por esa espontaneidad infantil, y no por las invitaciones del pastor, Inés empezó de todos modos a detenerse junto a la cerca y conversar.",
          "next": "mccorvey_choice2"
        },
        "mccorvey_choice2": {
          "text": "Después de meses de un trato inesperado, Inés tenía que decidir si estaba dispuesta a cambiar de bando públicamente, delante de todo el país que la conocía como símbolo del derecho al aborto: convertirse al cristianismo, bautizarse y unirse al movimiento provida, arriesgándose a destruir para siempre la relación con sus antiguos aliados y a convertirse en blanco de críticas de ambos extremos del espectro político.",
          "choices": [
            {
              "label": "Cambiar de bando públicamente y bautizarse",
              "effects": {
                "faith": 15
              },
              "next": "mccorvey_endLight"
            },
            {
              "label": "Quedarse en el mismo bando, a pesar de sus dudas personales",
              "effects": {
                "faith": -15
              },
              "next": "mccorvey_endDark"
            }
          ]
        },
        "mccorvey_endLight": {
          "text": "Inés se bautizó como cristiana evangélica el 8 de agosto de 1995 con el pastor Flip Benham; el bautismo, en una piscina de un patio trasero, se transmitió en vivo por televisión nacional, y ese mismo año anunció públicamente su paso a la postura provida, provocando conmoción y una ola de críticas de sus antiguos aliados en el movimiento por el derecho al aborto. El padre Frank Pavone, que en 1998 la recibió en la Iglesia católica, permaneció junto a ella los veintidós años siguientes, hasta su muerte en 2017, cuando fue él mismo quien le dio la unción final y ofició su funeral. Fin de la historia de Inés.",
          "next": null,
          "choices": []
        },
        "mccorvey_endDark": {
          "text": "Inés, a pesar de sus dudas personales después de meses de trato con sus nuevos vecinos, decidió mantener su postura pública anterior, sin querer arriesgar su reputación como símbolo del movimiento por el derecho al aborto. Las preguntas internas sobre la fe que empezaron a surgirle en esos meses prefirió no expresarlas públicamente hasta el final de su vida. Fin de la historia de Inés.",
          "next": null,
          "choices": []
        }
      }
    },
    cslewis: {
      "start": "cslewis_intro",
      "scenes": {
        "cslewis_intro": {
          "text": "Teo, joven profesor de Oxford, era ateo convencido desde la adolescencia y llevaba años construyendo una defensa filosófica de esa postura, discutiendo con colegas creyentes de la universidad en cada ocasión que se presentaba. Repetía con gusto el viejo argumento del sufrimiento: si Dios existe, es todopoderoso y bueno, ¿de dónde viene entonces tanto dolor y tanto mal en el mundo? Pero dos años antes, en el trimestre de Trinity de 1929, ya había vivido un primer quiebre: noche tras noche, en su cuarto del colegio, sentía, según sus propias palabras posteriores, \"el acercamiento inevitable e implacable de Aquel a quien tan tercamente no quería encontrar\", y al final se rindió: se arrodilló y oró por primera vez en su vida, reconociendo que Dios existía, y se llamó a sí mismo el converso más deprimido y forzado de toda Inglaterra. Incluso después de eso, todavía pasó dos años sin creer que Jesucristo fuera el Hijo de Dios, y siguió considerando la historia de Cristo un mito más entre muchos.",
          "next": "cslewis_scene2"
        },
        "cslewis_scene2": {
          "text": "En el otoño de 1931, dos amigos filólogos invitaron a Teo a un largo paseo nocturno por los terrenos del colegio conocidos como Addison's Walk. La conversación derivó hacia el cristianismo, y uno de los amigos empezó a argumentar que el mito de la resurrección en el cristianismo era único: a diferencia de todos los demás mitos de la humanidad, este, según sus palabras, \"actúa sobre nosotros exactamente igual que los demás, pero con una diferencia enorme: realmente sucedió\" en la historia real. Teo objetó con la soltura habitual en él, pero por primera vez notó que los argumentos que durante años le habían parecido irrefutables, en boca de ese amigo en particular, que conocía los mitos tan bien como él mismo, sonaban mucho menos seguros que en sus propias clases.",
          "next": "cslewis_choice1"
        },
        "cslewis_choice1": {
          "text": "Teo tenía que decidir: tomar en serio ese argumento y permitirse dudar de su propia incredulidad en Cristo, sostenida durante años, ahí mismo, en medio del paseo nocturno, o, como de costumbre, rechazar el argumento con su ironía habitual y quedarse con su convicción anterior. Llevaba años enseñando a sus alumnos los mitos de distintos pueblos y los conocía mejor que casi cualquier colega, y era precisamente ese conocimiento, del que tanto se enorgullecía, el que por primera vez se volvía en su contra.",
          "choices": [
            {
              "label": "Tomar en serio el argumento y dudar de su propia incredulidad",
              "effects": {
                "faith": 10
              },
              "next": "cslewis_bridgeA"
            },
            {
              "label": "Rechazar el argumento con ironía y quedarse con su convicción",
              "effects": {
                "faith": -10
              },
              "next": "cslewis_bridgeB"
            }
          ]
        },
        "cslewis_bridgeA": {
          "text": "Teo se permitió reflexionar en serio sobre lo que había escuchado y guardó silencio durante todo el camino de vuelta, sintiendo por primera vez en muchos años que su resistencia al cristianismo, de la que tanto se enorgullecía, no se sostenía sobre bases tan firmes. Más tarde llamaría a esa conversación con sus amigos en Addison's Walk la noche en que comenzó su verdadero viaje espiritual, ya no hacia la simple creencia en la existencia de Dios, a la que había llegado dos años antes, sino hacia la fe en Cristo.",
          "next": "cslewis_choice2"
        },
        "cslewis_bridgeB": {
          "text": "Teo, como de costumbre, rechazó el argumento escuchado con su ironía habitual y volvió a casa con su misma convicción de siempre. Sus amigos, sin embargo, no dejaron de intentar retomar esa conversación en los meses siguientes, notando una y otra vez que su antigua seguridad ya no sonaba tan firme como antes.",
          "next": "cslewis_choice2"
        },
        "cslewis_choice2": {
          "text": "Varias semanas después de aquel paseo nocturno, durante un viaje en solitario al zoológico en el sidecar de la motocicleta de su hermano, Teo tuvo que reconocer ante sí mismo la decisión definitiva: seguir llamándose incrédulo en Cristo a pesar de sus dudas crecientes, o admitir con honestidad que a la ida todavía no creía, y que a la vuelta ya se había convertido en cristiano.",
          "choices": [
            {
              "label": "Reconocer con honestidad el cambio ocurrido en él",
              "effects": {
                "faith": 15
              },
              "next": "cslewis_endLight"
            },
            {
              "label": "Seguir llamándose incrédulo a pesar de sus dudas",
              "effects": {
                "faith": -15
              },
              "next": "cslewis_endDark"
            }
          ]
        },
        "cslewis_endLight": {
          "text": "Teo describiría después ese momento así: a la ida al zoológico todavía no creía que Jesucristo fuera el Hijo de Dios, y a la vuelta ya creía, aunque no podía recordar con exactitud en qué momento había sucedido. Se convirtió en uno de los escritores cristianos más influyentes del siglo XX, autor de «Mero cristianismo» y de «Las crónicas de Narnia», y en sus sermones y libros volvió una y otra vez a las dos noches decisivas de su vida: la noche en que se arrodilló y reconoció la existencia de Dios, y la noche en Addison's Walk, cuando para él el mito se volvió hecho. Fin de la historia de Teo.",
          "next": null,
          "choices": []
        },
        "cslewis_endDark": {
          "text": "Teo siguió llamándose públicamente incrédulo en Cristo durante muchos meses más, aunque a solas consigo mismo ya no estaba tan seguro de ello. La contradicción interna entre sus dudas crecientes y su imagen pública habitual de escéptico convencido lo agobiaba más de lo que estaba dispuesto a admitir incluso ante sus amigos más cercanos, y esos mismos amigos filólogos de Addison's Walk esperaron durante mucho tiempo una respuesta a la conversación que él mismo nunca se animó a retomar. Fin de la historia de Teo.",
          "next": null,
          "choices": []
        }
      }
    },
    muggeridge: {
      "start": "muggeridge_intro",
      "scenes": {
        "muggeridge_intro": {
          "text": "Arcadio, célebre periodista y presentador de televisión británico, se pasó décadas construyendo una reputación de crítico agudo e irónico de prácticamente todo: políticos, la Iglesia, las instituciones sociales, e incluso escribió en 1936 un libro con el título irónico de «Ateo convencido». Pocos sabían que, siendo aún joven, en 1925, le había escrito a su padre: \"Quiero que Dios toque melodías a través de mí. Él toca, pero yo, la caña, estoy desafinado\" — una confesión que prefería no recordar frente a las cámaras, donde repetía que la religión organizada era una de las bromas más exitosas que la humanidad se había gastado nunca a sí misma.",
          "next": "muggeridge_scene2"
        },
        "muggeridge_scene2": {
          "text": "En 1969, la dirección de la BBC encargó a Arcadio rodar un documental sobre una monja católica entonces poco conocida fuera de la India, que trabajaba con mendigos moribundos en las calles de Calcuta: un encargo que aceptó sin demasiado entusiasmo, como un reportaje rutinario más. Esperaba filmar un reportaje sobre beneficencia de cara a la galería, material cómodo para uno de sus comentarios irónicos habituales, y no lo que finalmente lo tomó por sorpresa en los albergues para moribundos.",
          "next": "muggeridge_choice1"
        },
        "muggeridge_choice1": {
          "text": "Tras filmar en los albergues para moribundos, donde la monja y sus hermanas de la caridad trabajaban a diario entre los más desamparados de la ciudad, Arcadio tenía que decidir: permitir que lo visto lo afectara de verdad, a él y a su vieja ironía hacia la fe, o, como de costumbre, montar el material con la distancia profesional de un reportero, sin dejar entrar nada dentro de sí.",
          "choices": [
            {
              "label": "Permitir que lo visto lo afecte de verdad",
              "effects": {
                "faith": 10
              },
              "next": "muggeridge_bridgeA"
            },
            {
              "label": "Montar el material con distancia profesional",
              "effects": {
                "faith": -10
              },
              "next": "muggeridge_bridgeB"
            }
          ]
        },
        "muggeridge_bridgeA": {
          "text": "Arcadio dejó que lo visto en los albergues de Calcuta lo afectara de verdad, y el documental resultó mucho más personal y cálido que sus habituales reportajes irónicos: sus colegas de la BBC notaron con sorpresa que en pantalla sonaba una entonación totalmente ajena a él. Con ese documental comenzó su propio viaje espiritual hacia la fe, un camino que se extendería durante años.",
          "next": "muggeridge_choice2"
        },
        "muggeridge_bridgeB": {
          "text": "Arcadio montó el material con su habitual distancia profesional, procurando no dejar que las impresiones personales influyeran en el reportaje, aunque en la sala de montaje se detenía cada vez más de lo necesario en la misma escena: la oración silenciosa de la monja junto a un moribundo. El documental salió técnicamente impecable, pero él mismo recordaría durante muchos años aquellos días en Calcuta como algo que prefirió no dejar entrar dentro de sí justo cuando más oportuno habría sido hacerlo.",
          "next": "muggeridge_choice2"
        },
        "muggeridge_choice2": {
          "text": "Hacia 1982, ya con setenta y nueve años, tras años de búsqueda espiritual que habían comenzado con aquel viaje a Calcuta, Arcadio, junto a su esposa Kitty, tenía que decidir: ingresar formalmente a la Iglesia católica, cambiando públicamente la imagen de escéptico irónico con la que todo el país lo había conocido durante medio siglo, o quedarse al margen, limitándose a una aceptación personal y no anunciada de las ideas cristianas.",
          "choices": [
            {
              "label": "Ingresar formalmente a la Iglesia católica",
              "effects": {
                "faith": 15
              },
              "next": "muggeridge_endLight"
            },
            {
              "label": "Quedarse al margen, sin dar un paso público",
              "effects": {
                "faith": -15
              },
              "next": "muggeridge_endDark"
            }
          ]
        },
        "muggeridge_endLight": {
          "text": "Arcadio, junto a su esposa Kitty, se recibió oficialmente en el catolicismo en 1982, cambiando por completo la imagen con la que el público lo había conocido durante medio siglo de carrera periodística. Describió ese paso como \"la sensación de volver a casa, como si volviera a ocupar un lugar en la mesa que llevaba mucho tiempo vacío para mí\". Su camino espiritual, del \"ateo convencido\" al cristiano, lo describió en detalle en el libro «Conversion», publicado en 1988. Fin de la historia de Arcadio.",
          "next": null,
          "choices": []
        },
        "muggeridge_endDark": {
          "text": "Arcadio decidió quedarse al margen del paso formal, limitándose a una aceptación personal y no anunciada de las ideas cristianas que había descubierto después de Calcuta. El público siguió conociéndolo sobre todo como el escéptico irónico, sin llegar a enterarse jamás del cambio espiritual que él prefirió mantener como un asunto estrictamente privado. Fin de la historia de Arcadio.",
          "next": null,
          "choices": []
        }
      }
    },
    mcgrath: {
      "start": "mcgrath_intro",
      "scenes": {
        "mcgrath_intro": {
          "text": "Germán, joven y prometedor científico de Irlanda del Norte, se entusiasmó de adolescente con el marxismo y se volvió ateo convencido: estudió a fondo «El capital» de Marx, aunque después reconocería que le había parecido \"aburrido hasta el hartazgo\", y estaba convencido de que el método científico riguroso terminaría por desplazar tarde o temprano la fe de la vida de cualquier persona educada. En octubre de 1971 ingresó en Oxford para estudiar biofísica molecular, todavía completamente seguro de su ateísmo.",
          "next": "mcgrath_scene2"
        },
        "mcgrath_scene2": {
          "text": "En Oxford, Germán se encontró, para su propia sorpresa, rodeado de estudiantes y profesores entre los que había no pocos científicos serios que combinaban un trabajo científico riguroso con una fe cristiana sincera, una combinación que, según sus anteriores ideas marxistas, debería haber sido lógicamente imposible.",
          "next": "mcgrath_choice1"
        },
        "mcgrath_choice1": {
          "text": "A Germán le sorprendía que esa gente no creyera simplemente a pesar de la ciencia, sino que presentara argumentos elaborados que él, acostumbrado a considerarse intelectualmente honesto, no podía refutar de inmediato. Tenía que decidir: poner a prueba en serio, de forma científica, sus propias convicciones ateas, leyendo los mismos libros y escuchando los mismos argumentos que sus compañeros creyentes, o descartar todo aquello como un capricho intelectual de gente talentosa pero equivocada.",
          "choices": [
            {
              "label": "Poner a prueba en serio sus convicciones ateas",
              "effects": {
                "faith": 10
              },
              "next": "mcgrath_bridgeA"
            },
            {
              "label": "Descartarlo como un capricho intelectual ajeno",
              "effects": {
                "faith": -10
              },
              "next": "mcgrath_bridgeB"
            }
          ]
        },
        "mcgrath_bridgeA": {
          "text": "Germán empezó a poner a prueba en serio, de forma científica, sus propias ideas ateas, leyendo autores cristianos y obras de filósofos de la ciencia, en particular las que mostraban los límites de lo que la propia ciencia era capaz de responder, con el mismo rigor con que solía analizar artículos científicos. Para su propia sorpresa, los argumentos a favor de la fe resistían esa prueba mucho mejor de lo que esperaba: había llegado a Oxford en octubre de 1971 siendo ateo convencido, y en las vacaciones de Navidad de ese mismo año volvió a casa siendo cristiano.",
          "next": "mcgrath_choice2"
        },
        "mcgrath_bridgeB": {
          "text": "Germán descartó los argumentos de sus compañeros creyentes como un capricho intelectual de gente talentosa pero equivocada, y siguió llamándose ateo por motivos estrictamente científicos. Sin embargo, las preguntas que le planteaban sus compañeros creyentes siguieron apareciendo de vez en cuando en su mente durante muchos meses, sin una respuesta honesta, y ya en segundo año, incapaz de sacárselas de encima, terminó por obligarse a releer con honestidad esos mismos libros que antes había rechazado de plano, llegando a la fe unos meses más tarde de lo que podría haber sido, pero en esencia por el mismo camino que habían seguido sus compañeros creyentes.",
          "next": "mcgrath_choice2"
        },
        "mcgrath_choice2": {
          "text": "Tras obtener en 1977 el doctorado en biofísica molecular y construir una carrera científica prometedora, Germán, convertido para entonces en un feligrés más, pero convencido, de una parroquia común, tuvo que decidir hacia dónde seguir: dedicarse por completo a la ciencia de laboratorio, dejando la fe como un asunto personal y no público, o ir a estudiar teología y convertirse en sacerdote ordenado, combinando públicamente su título científico con su condición sacerdotal, algo que a muchos colegas científicos les parecía una elección contradictoria y extraña.",
          "choices": [
            {
              "label": "Ir a estudiar teología y convertirse en sacerdote",
              "effects": {
                "faith": 15
              },
              "next": "mcgrath_endLight"
            },
            {
              "label": "Quedarse solo en la ciencia, dejando la fe como algo personal",
              "effects": {
                "faith": -15
              },
              "next": "mcgrath_endDark"
            }
          ]
        },
        "mcgrath_endLight": {
          "text": "Germán fue a estudiar teología y se convirtió en sacerdote anglicano ordenado, sin abandonar por ello el rigor de pensamiento científico. \"Al llegar a Oxford, de pronto entendí que el mundo era más grande de lo que pensaba, y eso me obligó a replantearme muchas cosas — decía después sobre esa época —. El cristianismo me pareció una religión que ofrecía una mejor mirada sobre el mundo. Fue una conversión muy intelectual\". Hoy es uno de los apologistas cristianos más conocidos, reconocido en particular como opositor público del ateo Richard Dawkins, autor del libro «The Dawkins Delusion?», escrito en respuesta a sus críticas a la religión. Fin de la historia de Germán.",
          "next": null,
          "choices": []
        },
        "mcgrath_endDark": {
          "text": "Germán se quedó solo en la ciencia, dejando su fe personal como un asunto completamente privado del que casi ninguno de sus colegas se enteró. Su carrera científica siguió desarrollándose con éxito, pero esa voz particular y poco frecuente de un científico capaz de hablar abierta y convincentemente sobre la compatibilidad entre la ciencia y la fe nunca llegó a escucharse en los debates públicos de la época. Fin de la historia de Germán.",
          "next": null,
          "choices": []
        }
      }
    },
    wallace: {
      "start": "wallace_intro",
      "scenes": {
        "wallace_intro": {
          "text": "Nico, detective experimentado en la investigación de asesinatos sin resolver, se había acostumbrado a lo largo de su carrera a confiar solo en lo que podía confirmarse con pruebas, testimonios y la lógica rigurosa de una investigación. A los treinta y cinco años era ateo convencido, consideraba la religión un asunto de sentimientos y no de hechos, y más de una vez les había dicho a sus colegas que antes cerraría un caso por falta de pruebas que creer una sola afirmación sin una fuente confiable.",
          "next": "wallace_scene2"
        },
        "wallace_scene2": {
          "text": "Su esposa logró convencer una vez a Nico de asistir a una prédica dominical, donde el pastor comparó de pasada los cuatro textos evangélicos con las declaraciones de varios testigos independientes de un mismo suceso, una comparación que, por extraño que parezca, despertó el interés profesional del detective mucho más que la prédica misma.",
          "next": "wallace_choice1"
        },
        "wallace_choice1": {
          "text": "Nico tenía que decidir: aplicar en serio sus propias habilidades profesionales de investigador a los textos evangélicos, como a un caso real de asesinato con varios testigos que requiere una verificación auténtica, o descartar esa idea, considerando los textos religiosos una categoría que en principio no admite comprobación con los métodos de una investigación criminal. En veinte años de servicio se había acostumbrado a que cualquier caso, tarde o temprano, se resuelve con pruebas y no con conclusiones ya hechas, y una parte de él se resistía justamente a aplicar ese mismo principio a un asunto que toda su vida había considerado cosa de pura fe, sin pruebas.",
          "choices": [
            {
              "label": "Aplicar sus habilidades de investigador a comprobar los evangelios",
              "effects": {
                "faith": 10
              },
              "next": "wallace_bridgeA"
            },
            {
              "label": "Descartarlo, considerando los textos imposibles de comprobar",
              "effects": {
                "faith": -10
              },
              "next": "wallace_bridgeB"
            }
          ]
        },
        "wallace_bridgeA": {
          "text": "Nico empezó a aplicar metódicamente a los cuatro evangelios el mismo método de análisis forense de testimonios que usaba al investigar casos reales sin resolver: cotejar declaraciones independientes, buscar contradicciones y coincidencias en los detalles, evaluar la fiabilidad de las fuentes. Cuanto más tiempo analizaba los textos con ese método, más convincentes le resultaban su coherencia y su fiabilidad como testimonios históricos de testigos presenciales.",
          "next": "wallace_choice2"
        },
        "wallace_bridgeB": {
          "text": "Nico descartó la idea, considerando que los textos religiosos en principio no admiten comprobación con métodos de investigación criminal, y volvió a su escepticismo habitual. Pero, igual que los casos sin resolver que no lo dejaban en paz ni siquiera después de cerrarse oficialmente, la idea de unos evangelios que él mismo nunca había verificado se le quedó clavada como una espina, y varias semanas después, sin poder resistir su propia curiosidad profesional, terminó emprendiendo de todos modos la misma \"investigación\" que al principio había rechazado, solo que empezándola más tarde y con más reticencia de la que hubiera tenido de otro modo.",
          "next": "wallace_choice2"
        },
        "wallace_choice2": {
          "text": "Después de meses de \"investigar\" por su cuenta los textos evangélicos, aplicando los criterios rigurosos que solía usar en casos criminales reales, Nico tenía que reconocer la conclusión final a la que lo había llevado su propia pesquisa: declarar los evangelios testimonios históricos fiables, como exigía su propia metodología profesional, o descartar sus propias conclusiones para conservar su antigua visión atea del mundo.",
          "choices": [
            {
              "label": "Reconocer los evangelios como testimonios fiables, según su propia metodología",
              "effects": {
                "faith": 15
              },
              "next": "wallace_endLight"
            },
            {
              "label": "Descartar sus propias conclusiones por conservar su antigua visión del mundo",
              "effects": {
                "faith": -15
              },
              "next": "wallace_endDark"
            }
          ]
        },
        "wallace_endLight": {
          "text": "Nico, siguiendo sus propios criterios profesionales sobre la fiabilidad de los testimonios, reconoció los textos evangélicos como testimonios históricos fiables, y a partir de esa conclusión llegó a la fe personal. Describió su método de investigación en el libro «Cold-Case Christianity» (2013), más tarde obtuvo una maestría en teología y hoy enseña apologética cristiana a futuros pastores. Fin de la historia de Nico.",
          "next": null,
          "choices": []
        },
        "wallace_endDark": {
          "text": "Nico, en el último momento, descartó sus propias conclusiones profesionales, sin querer cambiar su visión atea habitual bajo la presión de algo que él mismo, como investigador, reconocía como convincente. La contradicción interna entre su metodología profesional y sus convicciones personales quedó sin resolver durante muchos años, y sus colegas de investigación a veces notaban que, precisamente, eran los casos sin resolver, y no los resueltos, los que por alguna razón lo inquietaban más que antes. Fin de la historia de Nico.",
          "next": null,
          "choices": []
        }
      }
    },
    mcdowell: {
      "start": "mcdowell_intro",
      "scenes": {
        "mcdowell_intro": {
          "text": "Marcos creció en un hogar donde su padre, un alcohólico conocido en el pueblo, golpeaba con regularidad a su madre delante de los hijos. Marcos recordaría después que sus amigos en la escuela \"se burlaban de su padre, que se pasaba tirado y borracho en la cuneta\", y que él \"siempre pensó que era culpa suya\", que \"no merecía que nadie quisiera estar cerca de él\", porque su padre nunca le había dicho \"te quiero\" ni lo había abrazado. A los predicadores que durante años hablaban de un Padre celestial no podía imaginarlos de otra forma que a través del filtro de su propio padre, tan falto de amor, y, según sus palabras, \"le cerró la puerta a Dios\", enterrando la amargura muy adentro.",
          "next": "mcdowell_scene2"
        },
        "mcdowell_scene2": {
          "text": "En sus años de estudiante, siendo agnóstico, Marcos decidió refutar el cristianismo científicamente de una vez por todas, demostrándoles a sus compañeros creyentes que el relato de la resurrección de Cristo no era más que una leyenda tardía sin fundamento histórico. Emprendió un viaje por Europa y Oriente Medio para reunir pruebas históricas y jurídicas en contra de esa historia, considerando la resurrección uno de los puntos principales que, como incrédulo, estaba obligado a refutar.",
          "next": "mcdowell_choice1"
        },
        "mcdowell_choice1": {
          "text": "Al estudiar los archivos, las fuentes históricas y los argumentos jurídicos sobre la fiabilidad de los testimonios evangélicos, Marcos descubría, con una resistencia interna creciente, que los hechos que iba reuniendo no formaban una refutación, sino que, contra todo pronóstico, confirmaban la historicidad de la resurrección. Tenía que decidir: reconocer con honestidad hacia dónde apuntaban las pruebas que él mismo había reunido, o ignorar los hechos incómodos para cumplir su objetivo original de escribir una refutación.",
          "choices": [
            {
              "label": "Reconocer con honestidad hacia dónde apuntan las pruebas reunidas",
              "effects": {
                "faith": 10
              },
              "next": "mcdowell_bridgeA"
            },
            {
              "label": "Ignorar los hechos para cumplir su objetivo original",
              "effects": {
                "faith": -10
              },
              "next": "mcdowell_bridgeB"
            }
          ]
        },
        "mcdowell_bridgeA": {
          "text": "Marcos reconoció con honestidad que las propias pruebas que había reunido apuntaban de manera consistente hacia la historicidad de los sucesos evangélicos, y no hacia su refutación, como había planeado en un principio. La noche del 19 de diciembre de 1959, a las ocho y media, se quedó solo y por primera vez en su vida se dirigió a Dios no con un argumento filosófico, sino con una oración de verdad, pidiendo aceptar a Jesucristo, resucitado y vivo, como Señor de su vida. El proyecto concebido como una refutación demoledora del cristianismo terminó convirtiéndose no solo en una conclusión intelectual, sino en una decisión personal, exactamente opuesta al plan original.",
          "next": "mcdowell_choice2"
        },
        "mcdowell_bridgeB": {
          "text": "Marcos intentó al principio ignorar los hechos incómodos para su objetivo original, y pasó varios meses seleccionando para el libro que planeaba solo las fuentes que confirmaban su tesis escéptica. Pero cuanto más se esforzaba por no ver sus propios hallazgos, más evidente se hacía que la selección resultaba parcial y poco convincente incluso para él mismo; varios meses después, abandonando el plan original de una refutación demoledora, terminó volviendo de nuevo, ya con honestidad, a los mismos archivos y pruebas jurídicas que en su momento había intentado evitar.",
          "next": "mcdowell_choice2"
        },
        "mcdowell_choice2": {
          "text": "Habiendo llegado a la fe personal en contra de sus propias intenciones originales, Marcos evitó durante muchos años volver con el pensamiento a su padre alcohólico, cuya violencia en la infancia había formado en gran medida su desconfianza hacia la fe. Decía que era más fácil creer en una resurrección de hacía dos mil años, demostrada por fuentes históricas ajenas, que creer que su propio padre fuera capaz de cambiar, y era precisamente esa fe más personal la que le exigía una confianza mucho mayor. Tenía que decidir: encontrar fuerzas para perdonar a su padre en persona e intentar llevarlo a la misma fe que él acababa de encontrar, o dejar cerrada para siempre esa parte dolorosa del pasado.",
          "choices": [
            {
              "label": "Perdonar a su padre e intentar llevarlo a la fe",
              "effects": {
                "faith": 15
              },
              "next": "mcdowell_endLight"
            },
            {
              "label": "Dejar cerrada esa parte del pasado",
              "effects": {
                "faith": -15
              },
              "next": "mcdowell_endDark"
            }
          ]
        },
        "mcdowell_endLight": {
          "text": "Marcos encontró fuerzas para perdonar a su padre y decirle en persona: \"Papá, te quiero\". Cuando su padre, sorprendido, le preguntó cómo se podía querer a un padre como él, Marcos respondió que apenas medio año antes Jesús lo había salvado a él mismo y había convertido su odio en amor; y su padre le respondió: \"Hijo, si Dios puede hacer en mi vida lo que he visto en la tuya, quiero darle esa oportunidad\" — y esa misma noche oró junto a Marcos, entregando su vida a Cristo. Marcos publicó el resultado de su propia \"investigación\", concebida como una refutación, en 1972, bajo el título «Evidence That Demands a Verdict»; el libro vendió más de un millón de ejemplares. Fin de la historia de Marcos.",
          "next": null,
          "choices": []
        },
        "mcdowell_endDark": {
          "text": "Marcos decidió dejar cerrado el tema doloroso de la relación con su padre, limitando su nueva fe a un asunto personal sin relación con el pasado. Su padre nunca llegó a escuchar de boca de su hijo ni el perdón ni el relato del cambio ocurrido en su vida, y el libro que se publicó después pasó por completo en silencio esa parte de la historia de Marcos. Fin de la historia de Marcos.",
          "next": null,
          "choices": []
        }
      }
    },
    gumbel: {
      "start": "gumbel_intro",
      "scenes": {
        "gumbel_intro": {
          "text": "Daniel, egresado de una escuela de élite y estudiante de derecho en Cambridge, era ateo convencido y consideraba la religión cosa de gente poco instruida, incapaz de resistir una revisión intelectual seria. En los exámenes de ingreso a derecho se enorgullecía precisamente de su habilidad para encontrar el punto débil de cualquier argumentación ajena, y las discusiones religiosas de sus compañeros le parecían el blanco más fácil de todos.",
          "next": "gumbel_scene2"
        },
        "gumbel_scene2": {
          "text": "En el primer año de Trinity College, varios amigos y compañeros resultaron ser cristianos sinceramente creyentes, cuya calma y convicción irritaban tanto a Daniel que decidió demostrarles el error de su fe de la manera más directa posible: leer por primera vez en su vida el Nuevo Testamento de principio a fin, para luego destrozar sus argumentos con su propio texto.",
          "next": "gumbel_choice1"
        },
        "gumbel_choice1": {
          "text": "Leyendo los Evangelios página por página en busca de puntos débiles para el futuro debate, Daniel descubrió, para su propia sorpresa, que el texto lo afectaba de una manera muy distinta a la que esperaba: en lugar de las contradicciones que buscaba, se topaba con palabras sobre su propio vacío interior, que antes atribuía al simple cansancio estudiantil y no a algo que exigiera una respuesta. Tenía que decidir: reconocer con honestidad que la lectura lo estaba cambiando a él mismo, y no solo preparando argumentos contra sus amigos, o seguir leyendo con el único fin frío de refutar, sin dejar que el texto lo tocara personalmente.",
          "choices": [
            {
              "label": "Reconocer que la lectura lo está cambiando a él mismo",
              "effects": {
                "faith": 10
              },
              "next": "gumbel_bridgeA"
            },
            {
              "label": "Seguir leyendo solo para refutar, sin ceder",
              "effects": {
                "faith": -10
              },
              "next": "gumbel_bridgeB"
            }
          ]
        },
        "gumbel_bridgeA": {
          "text": "Daniel reconoció con honestidad que la lectura del Nuevo Testamento lo estaba cambiando mucho más de lo que estaba dispuesto a admitir, y se permitió tomar en serio lo leído, en lugar de limitarse a reunir material para el debate. Hacia el final del primer año se convirtió él mismo al cristianismo, para el asombro de muchos compañeros que hasta entonces solo lo habían conocido como un escéptico burlón. \"Quedé fascinado — recordaría después —. Como si hubiera encontrado lo que había buscado toda mi vida\".",
          "next": "gumbel_choice2"
        },
        "gumbel_bridgeB": {
          "text": "Daniel se obligó a terminar de leer el Nuevo Testamento con el único fin frío de encontrar argumentos contra la fe de sus amigos, sin dejar deliberadamente que el texto lo tocara personalmente. Cumplió con la tarea formal, pero la sensación de insatisfacción por esa lectura tan deliberadamente distante lo acompañó durante mucho tiempo, y varios meses después, incapaz de olvidar lo leído, terminó volviendo al mismo texto, esta vez ya no en busca de argumentos contra sus amigos, sino en busca de una respuesta para sí mismo.",
          "next": "gumbel_choice2"
        },
        "gumbel_choice2": {
          "text": "Tras una conversión que a él mismo lo tomó por sorpresa, Daniel, que ya se había recibido de abogado e iniciado una prometedora carrera como litigante, tenía que decidir: dejar esa carrera prometedora por una formación teológica y un servicio en la iglesia en el que antes ni siquiera había pensado, o quedarse en el derecho, dejando su nueva fe como un asunto personal y no público, junto a su carrera.",
          "choices": [
            {
              "label": "Dejar la carrera de abogado por una formación teológica",
              "effects": {
                "faith": 15
              },
              "next": "gumbel_endLight"
            },
            {
              "label": "Quedarse en el derecho, dejando la fe como algo personal",
              "effects": {
                "faith": -15
              },
              "next": "gumbel_endDark"
            }
          ]
        },
        "gumbel_endLight": {
          "text": "Daniel dejó en 1982 su prometedora carrera de litigante por una formación teológica en Oxford, y se convirtió en sacerdote anglicano ordenado. \"Cada pregunta que tenía encontró respuesta ahí mismo, en la Biblia\", diría después sobre aquella primera lectura. Entre 2005 y 2022 fue párroco de Holy Trinity Brompton en Londres, donde desarrolló el curso Alpha, un programa para acercarse al cristianismo por el que pasarían después millones de personas en todo el mundo. En la base del curso estaba la misma idea sencilla con la que había empezado su propia historia: dejar que la gente lea el texto con sus propios ojos, sin conclusiones ya hechas por otros, y ver qué sucede. Fin de la historia de Daniel.",
          "next": null,
          "choices": []
        },
        "gumbel_endDark": {
          "text": "Daniel se quedó en el derecho, dejando su nueva fe como un asunto personal y no público, junto a su carrera de litigante. El curso que podría haber acercado el cristianismo a millones de personas en todo el mundo, con la misma sencillez con que el Nuevo Testamento lo había cambiado a él mismo, nunca llegó a existir, y él, solo de vez en cuando, a solas consigo mismo, se preguntaba qué habría sido de aquella primera sensación de cambio, descartada entonces, si se hubiera permitido llevarla hasta el final. Fin de la historia de Daniel.",
          "next": null,
          "choices": []
        }
      }
    },
    picard: {
      "start": "picard_intro",
      "scenes": {
        "picard_intro": {
          "text": "Maya, estudiante talentosa y apasionada por las ciencias exactas, había sido desde niña una alumna sobresaliente y estaba convencida de que creer en Dios era cosa de gente menos dotada que ella; se declaraba atea abiertamente y estaba segura de que la gente inteligente sencillamente no necesitaba la religión. Al ingresar a estudiar ingeniería eléctrica, no dudaba de que la ciencia seria y la fe en Dios eran incompatibles por definición.",
          "next": "picard_scene2"
        },
        "picard_scene2": {
          "text": "Ya de adulta, trabajando de niñera para unos vecinos —un médico y su esposa—, Maya recibía año tras año la misma invitación a ir juntos a la iglesia los domingos, y año tras año encontraba una excusa para negarse, una vez incluso alegando estar enferma varias veces seguidas. Los vecinos, al final, le dijeron directamente que el asunto no era tanto ir a la iglesia como en qué cree realmente una persona, y le preguntaron si al menos estaría dispuesta a leer la Biblia ella misma, con sus propios ojos.",
          "next": "picard_choice1"
        },
        "picard_choice1": {
          "text": "Maya, acostumbrada a enorgullecerse de no temer jamás poner a prueba sus propias hipótesis, tenía que decidir: aceptar la propuesta de sus vecinos y abrir el libro más publicado de la historia de la humanidad, o, como de costumbre, esquivar cortésmente el tema y dejar intacta su antigua seguridad. En secreto, ni ella misma se lo admitía del todo, sabía que para alguien acostumbrado a comprobarlo todo en persona, ya se habían acumulado demasiadas negativas a algo tan simple como leer un libro.",
          "choices": [
            {
              "label": "Aceptar leer la Biblia con sus propios ojos",
              "effects": {
                "faith": 10
              },
              "next": "picard_bridgeA"
            },
            {
              "label": "Esquivar el tema cortésmente y conservar su antigua seguridad",
              "effects": {
                "faith": -10
              },
              "next": "picard_bridgeB"
            }
          ]
        },
        "picard_bridgeA": {
          "text": "Maya aceptó y empezó a leer, tal como le habían aconsejado sus vecinos, el libro de Proverbios: un capítulo al día durante un mes. Para su sorpresa, no encontraba consignas piadosas e ingenuas, sino una sabiduría densa y práctica que podía aplicar en su propia vida científica y cotidiana. La lectura se transformó, sin que ella lo notara, en una pregunta que se planteó como un verdadero experimento: arriesgarse a confiar en la práctica en lo que estaba leyendo.",
          "next": "picard_choice2"
        },
        "picard_bridgeB": {
          "text": "Maya esquivó cortésmente la lectura, alegando una vez más estar ocupada, y su antigua seguridad de que la fe era cosa de la gente menos dotada quedó, en apariencia, intacta. Los vecinos, sin embargo, no dejaron de invitarla en las semanas siguientes, y ella misma reconocía para sus adentros que cada nueva negativa le resultaba un poco menos convincente que la anterior; al final, no tanto por curiosidad como por quitarse de encima las invitaciones insistentes, tomó de todos modos el mismo libro y empezó a leerlo casi a escondidas de sí misma, aunque con un retraso notable.",
          "next": "picard_choice2"
        },
        "picard_choice2": {
          "text": "Después de un mes de lectura, ya consciente de que la simple curiosidad se había convertido en algo más personal, Maya recordó el razonamiento del filósofo Pascal sobre que es razonable creer incluso si se duda: el creyente arriesga poco, y el incrédulo, todo. Decidió tratar aquello como un verdadero experimento científico y simplemente intentar confiar en Dios en la práctica, en lugar de quedarse como observadora externa. Tenía que decidir: llevar ese experimento hasta el final, dirigiéndose personalmente a Dios, o quedarse como una observadora interesada, pero segura y neutral.",
          "choices": [
            {
              "label": "Llevar el experimento hasta el final y dirigirse a Dios",
              "effects": {
                "faith": 15
              },
              "next": "picard_endLight"
            },
            {
              "label": "Quedarse como observadora neutral, sin dar un paso personal",
              "effects": {
                "faith": -15
              },
              "next": "picard_endDark"
            }
          ]
        },
        "picard_endLight": {
          "text": "Maya se decidió a llevar el experimento hasta el final y se dirigió personalmente a Dios, y, según sus propias palabras, sintió como si un peso invisible desapareciera de sus hombros, y en su lugar llegara una paz que nunca antes había conocido. Años después diría: \"Antes pensaba que era demasiado inteligente para creer en Dios. Ahora sé que era una tonta arrogante que despreciaba a la Mente más grande del cosmos, el Autor de toda la ciencia, las matemáticas, el arte y todo lo que se puede llegar a conocer\". Continuó una carrera científica exitosa, se convirtió en profesora del Instituto Tecnológico de Massachusetts, reconocida como fundadora de toda una nueva área científica, y una de las fundadoras de la comunidad cristiana de egresados de su propia universidad. Fin de la historia de Maya.",
          "next": null,
          "choices": []
        },
        "picard_endDark": {
          "text": "Maya decidió quedarse como observadora interesada, pero segura y neutral, sin animarse a llevar aquel mes de lectura hasta un paso personal. Continuó una carrera científica exitosa, se convirtió en profesora del Instituto Tecnológico de Massachusetts y fundadora reconocida de toda una nueva área científica, pero la pregunta que ella misma se había planteado como un experimento científico quedó sin resolver durante muchos años. Fin de la historia de Maya.",
          "next": null,
          "choices": []
        }
      }
    },
    cameron: {
      "start": "cameron_intro",
      "scenes": {
        "cameron_intro": {
          "text": "Elías, un actor adolescente que se había hecho famoso por el papel principal de una popular serie de televisión, era ateo convencido a los diecisiete años y lo declaraba con orgullo en las entrevistas, llamando a la religión un resabio del pasado. En el set de grabación lo rodeaba, según sus propias palabras posteriores, \"una lógica egocéntrica: que él mismo podía ser el dios de su propio mundo, dueño de su propio destino\", una idea que en ese momento le parecía la única razonable.",
          "next": "cameron_scene2"
        },
        "cameron_scene2": {
          "text": "Una de las actrices del set, una chica sinceramente creyente, invitó varias veces a Elías a ir con ella a la iglesia, aunque él siempre se negaba, considerándolo algo a medio camino entre la cortesía y la ingenuidad de su parte.",
          "next": "cameron_choice1"
        },
        "cameron_choice1": {
          "text": "Tras una nueva negativa, la chica de todos modos convenció a Elías de ir al menos una vez, prometiéndole que no volvería a invitarlo si no le gustaba. Tenía que decidir: asistir a ese único culto dominical por cortesía y no volver a tocar el tema nunca más, o ir con una apertura verdadera, permitiéndose escuchar con honestidad de qué se hablaba en realidad allí.",
          "choices": [
            {
              "label": "Ir con una apertura verdadera a escuchar la prédica",
              "effects": {
                "faith": 10
              },
              "next": "cameron_bridgeA"
            },
            {
              "label": "Ir por pura cortesía, cerrándose a lo que escuche",
              "effects": {
                "faith": -10
              },
              "next": "cameron_bridgeB"
            }
          ]
        },
        "cameron_bridgeA": {
          "text": "Elías fue al culto con una apertura que a él mismo lo sorprendió. Se sentó en la última fila y escuchó al pastor hablar no de \"un gran policía malvado en el cielo\" esperando una excusa para castigar, sino de un Dios santo, justo y recto, que quería que la gente se apartara del pecado y fuera perdonada. Escuchando aquello, Elías, según sus propias palabras, sintió dos cosas a la vez: una culpa aguda, \"como si hubiera pecado más que nadie en el mundo\", y al mismo tiempo, \"una sensación increíble de esperanza\". Salió de la iglesia siendo ya otra persona, aunque todavía no terminaba de entender qué había cambiado exactamente.",
          "next": "cameron_choice2"
        },
        "cameron_bridgeB": {
          "text": "Elías fue al culto por pura formalidad y cortesía, decidido de antemano a que nada de lo que escuchara lo tocara, y ese día efectivamente salió con la conciencia tranquila, diciéndole a la chica que ya no hacía falta que lo invitara más. Pero las palabras del pastor sobre un Dios santo y la pecaminosidad humana, que en ese momento se esforzó por no dejar entrar dentro de sí, empezaron a resurgir de manera inesperada en sus noches durante las semanas siguientes de grabación, primero como fragmentos sueltos, después cada vez con más insistencia, hasta que, para su propia sorpresa, se descubrió tomando la Biblia por su cuenta, sin que nadie se lo recordara, para releer justo aquel pasaje sobre la santidad de Dios que en su momento le había parecido pasar inadvertido.",
          "next": "cameron_choice2"
        },
        "cameron_choice2": {
          "text": "En las semanas siguientes, sintiendo que algo en él realmente había cambiado después de aquella visita a la iglesia, Elías empezó a abrir la Biblia por su cuenta, sin que nadie lo invitara, por las noches después de las grabaciones, primero por pura curiosidad de saber qué era exactamente lo que lo había tocado, y después ya sin poder detenerse. Tenía que decidir: declarar públicamente, ante la prensa y sus admiradores, que solo lo conocían como el joven ídolo ateo de los adolescentes, su nueva fe, o resolver en silencio sus propios cambios, a solas consigo mismo, sin llamar la atención de una industria que dependía de su antigua imagen.",
          "choices": [
            {
              "label": "Declarar públicamente su nueva fe",
              "effects": {
                "faith": 15
              },
              "next": "cameron_endLight"
            },
            {
              "label": "Resolver sus cambios en silencio, sin llamar la atención",
              "effects": {
                "faith": -15
              },
              "next": "cameron_endDark"
            }
          ]
        },
        "cameron_endLight": {
          "text": "Elías decidió que la decisión más importante de su vida sería humillarse y confiar en Jesucristo como Señor de su vida — \"depender de Él de la misma manera en que dependo del aire que respiro\", como él mismo lo formularía después —, y declaró públicamente su conversión al cristianismo, cambiando por completo la imagen con la que lo conocían la prensa y sus admiradores en todo el mundo. Describió su camino, del ídolo adolescente ateo al cristiano convencido, en sus memorias «Still Growing», y desde entonces lleva adelante un activo servicio evangelístico, incluido el proyecto «Way of the Master» junto al predicador Ray Comfort. Fin de la historia de Elías.",
          "next": null,
          "choices": []
        },
        "cameron_endDark": {
          "text": "Elías decidió resolver sus propios cambios en silencio, a solas consigo mismo, sin llamar la atención de la prensa ni de una industria acostumbrada a su antigua imagen. El cambio que había comenzado tras aquella única visita a la iglesia siguió siendo un proceso interno, invisible para todos, durante muchos años. Fin de la historia de Elías.",
          "next": null,
          "choices": []
        }
      }
    },
    ordway: {
      "start": "ordway_intro",
      "scenes": {
        "ordway_intro": {
          "text": "Lili, profesora de literatura inglesa con doctorado y, además, esgrimista de competición, había crecido con la convicción de que creer en Dios no era más que una superstición, indigna de una persona seria y culta de su nivel de formación.",
          "next": "ordway_scene2"
        },
        "ordway_scene2": {
          "text": "Una de las pocas personas cuya opinión intelectual Lili respetaba de verdad, su propio entrenador de esgrima, resultó ser un cristiano practicante, y en las conversaciones con él descubría, sorprendida, que su fe no se apoyaba en una aceptación ciega, sino en los mismos textos literarios y filosóficos que ella misma llevaba años enseñando a sus alumnos.",
          "next": "ordway_choice1"
        },
        "ordway_choice1": {
          "text": "Su amigo logró convencer a Lili de leer por primera vez, no con la distancia profesional de una académica, sino con una apertura personal verdadera, a varios autores cristianos que antes había analizado únicamente como ejemplos del género fantástico, sin adentrarse en la cosmovisión que había detrás. Tenía que decidir: permitirse leer esos textos como algo más que material literario, o conservar su antigua distancia profesional. Su amigo le hizo notar que, en años de docencia, había analizado cientos de historias de sacrificio y redención como recursos literarios, pero nunca se había preguntado si esos recursos conmovían tan infaliblemente a los lectores precisamente porque detrás de ellos había algo verdaderamente cierto.",
          "choices": [
            {
              "label": "Leer esos textos con una apertura personal verdadera",
              "effects": {
                "faith": 10
              },
              "next": "ordway_bridgeA"
            },
            {
              "label": "Conservar su antigua distancia profesional",
              "effects": {
                "faith": -10
              },
              "next": "ordway_bridgeB"
            }
          ]
        },
        "ordway_bridgeA": {
          "text": "Lili se permitió leer esos textos no como una profesora de literatura evaluando recursos de género, sino como una persona común buscando respuestas a sus propias preguntas, y, según reconocería después ella misma, su imaginación pareció \"bautizarse\" de nuevo en esos mismos mundos ficticios que durante años había analizado solo como material didáctico. Por primera vez en muchos años de docencia abrió también el propio Evangelio, no como fuente literaria original para una clase sobre el género, sino simplemente como un texto que podía decirle algo a ella en persona, y las preguntas que durante años había analizado con distancia junto a sus alumnos, de pronto sonaron como dirigidas directamente a ella.",
          "next": "ordway_choice2"
        },
        "ordway_bridgeB": {
          "text": "Lili conservó su antigua distancia profesional, y siguió leyendo esos mismos textos únicamente como académica de literatura, evaluando el estilo y los recursos del género, y no como una persona en una búsqueda espiritual personal. También abría el propio Evangelio de vez en cuando, pero siempre con el lápiz rojo de la crítica literaria en la mano, marcando recursos narrativos y sin permitirse jamás leer un solo capítulo simplemente como un texto dirigido a ella en persona. Las conversaciones con su amigo creyente continuaron, pero cada vez chocaban con el mismo muro invisible que ella misma no se permitía cruzar.",
          "next": "ordway_choice2"
        },
        "ordway_choice2": {
          "text": "Después de largos meses de lectura y conversaciones con su amigo, Lili llegó a un punto en que seguir dudando ya no exigía nuevos argumentos, sino una decisión personal: ingresar formalmente a la Iglesia cristiana, reconociendo públicamente el cambio de sus propias ideas ante sus colegas de la comunidad académica, donde el escepticismo hacia la religión se consideraba casi una norma profesional, o quedarse en el estatus de observadora interesada, pero neutral.",
          "choices": [
            {
              "label": "Ingresar formalmente a la Iglesia, a pesar del escepticismo de sus colegas",
              "effects": {
                "faith": 15
              },
              "next": "ordway_endLight"
            },
            {
              "label": "Quedarse como observadora neutral, sin tomar una decisión personal",
              "effects": {
                "faith": -15
              },
              "next": "ordway_endDark"
            }
          ]
        },
        "ordway_endLight": {
          "text": "Lili ingresó formalmente a la Iglesia católica en 2012, a pesar del escepticismo habitual hacia la religión en el ambiente académico donde trabajaba. Describió en detalle su camino, de atea convencida a creyente, en el libro «Not God's Type: An Atheist Academic Lays Down Her Arms», que se convirtió en una voz destacada de la apologética cristiana contemporánea. Fin de la historia de Lili.",
          "next": null,
          "choices": []
        },
        "ordway_endDark": {
          "text": "Lili se quedó en el estatus de observadora interesada, pero neutral, sin llegar a dar nunca el paso personal definitivo, a pesar de meses de lectura y conversaciones. Sus colegas de la comunidad académica siguieron considerándola una persona con interés profesional por la literatura religiosa, sin sospechar lo cerca que había estado de una decisión personal que finalmente nunca tomó. Fin de la historia de Lili.",
          "next": null,
          "choices": []
        }
      }
    },
    crosby: {
      "start": "crosby_intro",
      "scenes": {
        "crosby_intro": {
          "text": "Eva nació el 24 de marzo de 1820 en el estado de Nueva York, y a las seis semanas de vida quedó ciega por el tratamiento equivocado de los ojos que le aplicó un \"médico\" poco calificado, llamado en lugar del médico de la familia, que estaba ausente, durante un simple resfriado — un error que ya no tuvo remedio. Más de ochenta y cinco años después, ella decía que jamás había sentido, ni por un instante, la sombra de un rencor hacia aquel hombre.",
          "next": "crosby_scene2"
        },
        "crosby_scene2": {
          "text": "De niña, los vecinos e incluso algunos parientes trataban a la pequeña ciega con una lástima que no ocultaban, esperando de ella una vida limitada, dependiente en gran medida de la ayuda ajena. A los quince años, Eva ingresó al Instituto de Nueva York para Ciegos, donde recibió una educación que la mayoría de los niños ciegos de su época no tenía a su alcance.",
          "next": "crosby_choice1"
        },
        "crosby_choice1": {
          "text": "Siendo todavía adolescente, Eva tuvo que decidir cómo relacionarse con su propia ceguera por el resto de su vida: considerarla una pérdida injusta por la que valía la pena llorar y enojarse con Dios, o, contra toda lógica evidente, encontrar en ella algo parecido a un regalo que le permitía ver de una manera distinta a como ven los videntes. Una maestra del instituto para ciegos le dijo una vez que Dios no había cometido un error al crearla ciega, y Eva se preguntó entonces por primera vez si de verdad podía creer aquello, y no solo repetirlo como una frase de consuelo.",
          "choices": [
            {
              "label": "Encontrar en la ceguera algo parecido a un regalo",
              "effects": {
                "faith": 10
              },
              "next": "crosby_bridgeA"
            },
            {
              "label": "Considerar la ceguera una pérdida injusta y enojarse con Dios",
              "effects": {
                "faith": -10
              },
              "next": "crosby_bridgeB"
            }
          ]
        },
        "crosby_bridgeA": {
          "text": "Eva decidió tratar su propia ceguera no como una pérdida, sino como un don especial. Les decía a menudo a los conocidos que la compadecían: \"¿Saben que si al nacer me hubieran dejado pedir un solo deseo, habría pedido nacer ciega?\" — y ante la pregunta desconcertada de \"¿por qué?\", respondía: \"Porque cuando llegue al cielo, el primer rostro que alegrará mi vista será el de mi Salvador\". Decía que, de no haber sido ciega, no habría recibido esa educación ni desarrollado una memoria tan prodigiosa, y que la ceguera la había apartado de muchas de las crueldades e injusticias del mundo que, de otro modo, habría visto sin poder aliviarlas.",
          "next": "crosby_choice2"
        },
        "crosby_bridgeB": {
          "text": "Eva llevó durante largos años un resentimiento callado y no expresado hacia su propia ceguera, considerando lo que le había ocurrido simplemente una injusticia sin ningún sentido. Las mismas palabras sobre que Dios no comete errores, que otros en su situación encontraban un consuelo, a ella le sonaban más bien a reproche: un pensamiento bonito, fácil de pronunciar y casi imposible de sentir de verdad. Ese sentimiento envenenó muchos momentos de su vida adulta, incluso cuando por fuera se manejaba con sus limitaciones tan bien como sus compañeras videntes.",
          "next": "crosby_choice2"
        },
        "crosby_choice2": {
          "text": "Hacia 1864, empezaron a encargarle a Eva letras de himnos cristianos sobre melodías ya compuestas, un trabajo que exigía escribir rápido, a veces varias letras al día, algo que a muchos editores les parecía físicamente imposible para una autora ciega. Tenía que decidir: aceptar ese ritmo agotador de trabajo, arriesgándose a que la cantidad afectara inevitablemente la calidad, o escribir poco y con esmero, quedando como una autora de himnos más ocasional que profesional. Ella misma lo explicaba así: \"Puede parecer un poco anticuado empezar siempre el trabajo con una oración, pero nunca me puse a escribir un himno sin pedirle antes al buen Señor que fuera mi inspiración\".",
          "choices": [
            {
              "label": "Aceptar el ritmo agotador para escribir muchos himnos",
              "effects": {
                "faith": 15
              },
              "next": "crosby_endLight"
            },
            {
              "label": "Escribir poco y con esmero, evitando la sobrecarga",
              "effects": {
                "faith": -15
              },
              "next": "crosby_endDark"
            }
          ]
        },
        "crosby_endLight": {
          "text": "Eva aceptó ese ritmo de trabajo y a lo largo de su vida escribió, según distintos cálculos, entre cinco mil quinientos y nueve mil himnos cristianos, publicando muchos bajo decenas de seudónimos distintos para que los editores pudieran incluir varias letras suyas en un mismo cancionero sin llamar demasiado la atención. Entre ellos están «Blessed Assurance» y «Safe in the Arms of Jesus», que se siguen cantando en iglesias de todo el mundo más de un siglo después de su muerte en 1915, a los noventa y cuatro años. Fin de la historia de Eva.",
          "next": null,
          "choices": []
        },
        "crosby_endDark": {
          "text": "Eva decidió escribir poco y con esmero, evitando el ritmo agotador que le proponían los editores, y a lo largo de su vida creó muchos menos himnos de los que podría haber escrito. Algunos de ellos tenían una hondura especial, pero la mayoría quedaron conocidos solo en un círculo reducido, sin llegar a difundirse por las iglesias de todo el mundo como podrían haberlo hecho con otro ritmo de trabajo. Fin de la historia de Eva.",
          "next": null,
          "choices": []
        }
      }
    },
    vujicic: {
      "start": "vujicic_intro",
      "scenes": {
        "vujicic_intro": {
          "text": "Timoteo nació en Melbourne, Australia, el 4 de diciembre de 1982, con un rarísimo síndrome de tetraamelia: sin brazos ni piernas, con un único pie pequeño de dos dedos fusionados. Los médicos no pudieron explicarles la causa de esta condición a sus padres de antemano; se enteraron recién en el momento del parto. El padre de Timoteo, pastor de una pequeña iglesia, se encerró solo en un cuarto del hospital esa primera noche y oró hora tras hora, exigiéndole a Dios una respuesta sobre el porqué; muchos años después le confesaría a su hijo que nunca recibió una respuesta de verdad, solo una paz que fue llegando poco a poco.",
          "next": "vujicic_scene2"
        },
        "vujicic_scene2": {
          "text": "De niño, Timoteo estudió en una escuela común junto a compañeros sin discapacidad gracias a los cambios en la legislación australiana sobre educación inclusiva, pero las burlas y las miradas constantes de sus compañeros lo llevaron a una depresión profunda. A los ocho años intentó ahogarse por primera vez en la bañera, y a los diez le preguntaba en serio a su madre si podía volver a intentarlo.",
          "next": "vujicic_choice1"
        },
        "vujicic_choice1": {
          "text": "Su madre, al tanto de su desesperación, le leyó un día en voz alta el relato bíblico del hombre ciego de nacimiento, a quien los discípulos de Cristo preguntaron de quién era el pecado que había causado su ceguera, la de él o la de sus padres, y escucharon la respuesta: de ninguno de los dos, sino que a través de eso debían manifestarse las obras de Dios. A Timoteo, según recordaría muchos años después, esas palabras le pusieron la piel de gallina de una forma que no debería haber sido posible, como si algo por dentro empezara por fin a encajar en su lugar. Tenía que decidir: aplicarse esas palabras a su propio cuerpo e intentar ver en él no un castigo, sino algo distinto, o seguir considerando su condición una tragedia absurda y casual, sin ningún sentido.",
          "choices": [
            {
              "label": "Intentar ver en su cuerpo no un castigo, sino otro sentido",
              "effects": {
                "faith": 10
              },
              "next": "vujicic_bridgeA"
            },
            {
              "label": "Seguir considerando su condición una tragedia sin sentido",
              "effects": {
                "faith": -10
              },
              "next": "vujicic_bridgeB"
            }
          ]
        },
        "vujicic_bridgeA": {
          "text": "Timoteo empezó poco a poco a aplicarse a su propia vida las palabras que había escuchado de su madre, preguntándose si no habría nacido así justamente para que a través de él se viera algo más que la simple ausencia de brazos y piernas. Los pensamientos de suicidio no desaparecieron de un día para otro, pero por primera vez en años surgió en él una pregunta por la que valía la pena seguir viviendo. Empezó a orar cada noche por lo mismo, ya no por brazos y piernas, como le pedía a Dios de niño pequeño, sino por lograr simplemente sobrevivir al día siguiente, y años después reconocería que fueron precisamente esas oraciones breves y casi desesperadas, y no una sola historia leída en la infancia, las que poco a poco lo sacaron de aquella depresión profunda.",
          "next": "vujicic_choice2"
        },
        "vujicic_bridgeB": {
          "text": "Timoteo siguió considerando su condición una tragedia absurda y casual, sin encontrar en el relato escuchado nada que pudiera aplicarse a su propio cuerpo. Una y otra vez intentaba orar, como le había enseñado su madre, pero cada vez esas oraciones resbalaban hacia la misma pregunta amarga y sin respuesta, el porqué exacto, y no hacia la búsqueda de algún sentido. La depresión se agravó en la adolescencia, y la pregunta que le había hecho a su madre a los diez años seguía volviendo una y otra vez sin ninguna respuesta clara.",
          "next": "vujicic_choice2"
        },
        "vujicic_choice2": {
          "text": "A los veintiún años, Timoteo se graduó de la universidad con un título en contabilidad y asesoría financiera, una especialidad que ofrecía una carrera estable y previsible en una oficina. Tenía que decidir: tomar esa profesión estable y vivir una vida normal, procurando llamar la menor atención posible sobre su propio cuerpo, o empezar a dar charlas públicas ante estudiantes de escuela y universidad en todo el mundo, hablando precisamente de su cuerpo y de su historia con la depresión.",
          "choices": [
            {
              "label": "Empezar a hablar en público por todo el mundo sobre su historia",
              "effects": {
                "faith": 15
              },
              "next": "vujicic_endLight"
            },
            {
              "label": "Tomar una profesión estable, evitando la exposición pública",
              "effects": {
                "faith": -15
              },
              "next": "vujicic_endDark"
            }
          ]
        },
        "vujicic_endLight": {
          "text": "Timoteo empezó a dar charlas ante estudiantes de escuela y universidad, hablando abiertamente tanto de su cuerpo como de sus intentos de suicidio en la infancia y de aquel relato bíblico que cambió su forma de verse a sí mismo. El ministerio que fundó, «Life Without Limbs», ha realizado desde entonces más de tres mil quinientas charlas en setenta y ocho países, a veces ante estadios con cientos de miles de oyentes, y él mismo se convirtió en uno de los oradores cristianos más reconocidos del mundo, se casó y fue padre de cuatro hijos. Hoy sigue explicando su vida con una sola frase: \"Si Dios no te da un milagro, tú mismo te conviertes en el milagro de Dios para la salvación de alguien más\". Fin de la historia de Timoteo.",
          "next": null,
          "choices": []
        },
        "vujicic_endDark": {
          "text": "Timoteo tomó la profesión estable de contador, procurando vivir una vida lo más discreta y normal posible, evitando cualquier atención adicional sobre su propio cuerpo. La historia de su depresión infantil y de aquel único relato bíblico que cambió su forma de verse a sí mismo quedó conocida solo por sus personas más cercanas, y no por los miles de estudiantes de todo el mundo que podrían haber escuchado de él lo mismo. Fin de la historia de Timoteo.",
          "next": null,
          "choices": []
        }
      }
    },
    hamilton: {
      "start": "hamilton_intro",
      "scenes": {
        "hamilton_intro": {
          "text": "Clara, una surfista hawaiana de trece años que ya despuntaba como una gran promesa profesional y había crecido en una familia cristiana acostumbrada a empezar el día con una oración en la propia playa antes de la primera tanda de olas, estaba recostada sobre su tabla en el océano frente a la playa Tunnels Beach el 31 de octubre de 2003, esperando una ola, cuando un tiburón tigre de más de cuatro metros la atacó y le arrancó de un mordisco el brazo izquierdo hasta el hombro.",
          "next": "hamilton_scene2"
        },
        "hamilton_scene2": {
          "text": "Llevaron a Clara de urgencia al hospital, donde los cirujanos lucharon por su vida durante varias horas debido a la enorme pérdida de sangre. Uno de los paramédicos que la asistieron camino al hospital le repetía: \"Dios nunca te dejará ni te abandonará\"; esas palabras las recordaría toda su vida como lo primero que de verdad la sostuvo en esas horas. Al recobrar el conocimiento, lo primero que les preguntó a sus padres no fue sobre su propio brazo, sino si Dios perdonaría al tiburón, una pregunta que los adultos en la sala tomaron más como una reacción de shock que como algo que la niña de trece años realmente quisiera decir. Unos días después, todavía en la habitación del hospital, les dijo en voz alta a sus padres que quizás Dios pudiera usar lo que le había pasado para animar a alguien más, y solo entonces se planteó por primera vez no solo la posibilidad de sobrevivir, sino también si algún día volvería al océano que casi le había quitado la vida.",
          "next": "hamilton_choice1"
        },
        "hamilton_choice1": {
          "text": "Los médicos y sus padres le proponían con cautela a Clara no apresurarse a decidir sobre su regreso al deporte, dándose tiempo para recuperarse psicológicamente del trauma. Clara tenía que decidir: volver al océano con su tabla lo antes posible, a pesar del miedo a un nuevo ataque y de lo poco acostumbrado que estaba su cuerpo sin un brazo, o tomarse una pausa por tiempo indefinido, como aconsejaban los médicos. Recordaba un versículo bíblico que había aprendido en la escuela dominical, \"Todo lo puedo en Cristo que me fortalece\", y por primera vez en su vida se preguntaba si creía en esas palabras lo suficiente como para apostar en ellas su propio cuerpo.",
          "choices": [
            {
              "label": "Volver al océano con su tabla lo antes posible",
              "effects": {
                "faith": 10
              },
              "next": "hamilton_bridgeA"
            },
            {
              "label": "Tomarse una pausa por tiempo indefinido",
              "effects": {
                "faith": -10
              },
              "next": "hamilton_bridgeB"
            }
          ]
        },
        "hamilton_bridgeA": {
          "text": "Clara, apoyándose en la fe que profesaba desde los cinco años, decidió volver al océano apenas un mes después del ataque, aprendiendo de nuevo a mantener el equilibrio sobre la tabla sin un brazo. Las primeras tandas le costaron mucho, física y psicológicamente, pero cada nueva salida al agua le fue devolviendo poco a poco la confianza que el tiburón casi le había quitado junto con el brazo.",
          "next": "hamilton_choice2"
        },
        "hamilton_bridgeB": {
          "text": "Clara se tomó una pausa por tiempo indefinido, como le aconsejaban los médicos, tratando primero de recuperarse por completo psicológicamente del trauma. Cuanto más se alargaba la pausa, más difícil se hacía decidirse a volver: los reflejos habituales de un cuerpo sin un brazo exigían reaprender el equilibrio, y el miedo al océano, tras meses lejos del agua, no había hecho más que crecer. Casi dejó de orar por su regreso al mar, porque cada vez que empezaba una oración así, se sorprendía pensando que en realidad no estaba pidiendo valentía, sino que el problema se resolviera solo, de alguna manera. Al final volvió a la tabla más de un año después, casi por casualidad, sin ningún momento decisivo, y los años que podrían haber ido a una escalada segura en el deporte se le fueron en simplemente recuperar el tiempo perdido.",
          "next": "hamilton_choice2"
        },
        "hamilton_choice2": {
          "text": "Años después de un entrenamiento tenaz, Clara, ya deportista profesional, se encontró ante una elección de cara a unas grandes competencias internacionales de surf: competir en igualdad de condiciones con deportistas sin discapacidad, sin ninguna concesión, arriesgándose públicamente a perder ante el mundo entero, o competir solo en una categoría adaptada especial, donde el riesgo de una derrota pública era mucho menor. Antes de responderles a los organizadores, recordó ese mismo versículo de la escuela dominical sobre la fuerza que da Cristo, y por primera vez en mucho tiempo oró no por el resultado, sino para que la decisión, fuera cual fuera, naciera de la fe y no solo del miedo a repetir su antigua indecisión.",
          "choices": [
            {
              "label": "Competir en igualdad de condiciones con deportistas sin discapacidad",
              "effects": {
                "faith": 15
              },
              "next": "hamilton_endLight"
            },
            {
              "label": "Competir solo en la categoría adaptada",
              "effects": {
                "faith": -15
              },
              "next": "hamilton_endDark"
            }
          ]
        },
        "hamilton_endLight": {
          "text": "Clara decidió competir en igualdad de condiciones con deportistas sin discapacidad, sin ninguna concesión, apoyándose en la fe y en un entrenamiento tenaz, y no en condiciones especiales. Su historia se relató después en las memorias «Soul Surfer», sobre las que en 2011 se filmó una película del mismo nombre, y ella misma se convirtió en una reconocida surfista profesional y en oradora cristiana, que sigue hablando con regularidad en iglesias y campus universitarios de todo el mundo. Muchos años después explicaba lo sucedido con la misma sencillez con que lo había dicho de niña en la habitación del hospital: \"Quizás Dios pueda usar lo que me pasó para animar a alguien más\", y así terminó siendo. Fin de la historia de Clara.",
          "next": null,
          "choices": []
        },
        "hamilton_endDark": {
          "text": "Clara decidió competir solo en la categoría adaptada especial, evitando el riesgo directo de una derrota pública junto a deportistas sin discapacidad. Su carrera profesional continuó en un marco más reducido y menos visible, y la historia de su regreso al deporte nunca alcanzó la difusión amplia que podría haber inspirado a muchas otras personas con lesiones parecidas. Fin de la historia de Clara.",
          "next": null,
          "choices": []
        }
      }
    },
    donpiper: {
      "start": "donpiper_intro",
      "scenes": {
        "donpiper_intro": {
          "text": "Sabas, pastor bautista de Texas, volvía en auto de una conferencia cristiana el 18 de enero de 1989, cruzando un puente sobre un río, cuando un choque frontal con un camión de carga aplastó por completo su vehículo. Los rescatistas que llegaron al lugar certificaron su muerte en el acto y cubrieron el cuerpo con una lona, a la espera de trasladarlo a la morgue.",
          "next": "donpiper_scene2"
        },
        "donpiper_scene2": {
          "text": "Por el lugar del accidente pasaba otro pastor que, al enterarse de que bajo los restos del auto estaba un predicador conocido suyo, insistió en acercarse al cuerpo cubierto por la lona y orar, a pesar de las objeciones de los rescatistas, que ya habían certificado oficialmente la muerte. No pedía una resurrección, solo repetía en voz alta versículos de un salmo que ambos pastores habían leído juntos el día anterior en la conferencia, sin encontrar otras palabras ante lo que parecía definitivo. Los policías le permitieron a regañadientes quedarse unos minutos junto al cuerpo.",
          "next": "donpiper_choice1"
        },
        "donpiper_choice1": {
          "text": "El pastor, arrodillado junto al cuerpo bajo la lluvia, rodeado de rescatistas escépticos que le pedían que terminara y no estorbara la evacuación de otros heridos, tenía que decidir: interrumpir la oración cuanto antes, cediendo a la presión del entorno, o seguir orando con insistencia y en voz alta, a pesar del evidente desagrado que lo rodeaba. No pedía un espectáculo ni una prueba para los escépticos cercanos, simplemente repetía ante el Señor el nombre de su amigo, como repetiría el nombre de cualquier persona querida de la que ya nadie más podía ocuparse.",
          "choices": [
            {
              "label": "Seguir orando con insistencia, a pesar de la presión del entorno",
              "effects": {
                "faith": 10
              },
              "next": "donpiper_bridgeA"
            },
            {
              "label": "Interrumpir la oración cuanto antes por la presión del entorno",
              "effects": {
                "faith": -10
              },
              "next": "donpiper_bridgeB"
            }
          ]
        },
        "donpiper_bridgeA": {
          "text": "El pastor siguió orando con insistencia y en voz alta sobre el cuerpo, a pesar del evidente desagrado de los rescatistas que lo rodeaban, y en un momento dado, sin encontrar ya más palabras, empezó a cantar en voz baja el himno «What a Friend We Have in Jesus» (\"Qué amigo nos es Cristo\"), que él y Sabas habían cantado juntos el día anterior en la conferencia. Unos noventa minutos después de que la muerte quedara certificada oficialmente, Sabas, bajo la lona, se movió de repente y empezó a acompañar el mismo himno con su voz; los rescatistas, conmocionados, pidieron ayuda adicional de inmediato.",
          "next": "donpiper_choice2"
        },
        "donpiper_bridgeB": {
          "text": "El pastor interrumpió la oración antes de tiempo, presionado por rescatistas impacientes que le pedían que dejara libre el lugar para la evacuación de otros heridos. El cuerpo bajo la lona no volvió a dar señales de vida, y, tal como se había certificado oficialmente en el lugar, lo trasladaron, no al cementerio de inmediato, sino a la morgue del hospital para los trámites correspondientes. Allí, ya en el ingreso, el personal de guardia detectó por casualidad débiles signos de vida; Sabas se salvó, pero sin aquella coincidencia directa e inexplicable con la oración y el himno compartido que habría vivido si el pastor se hubiera quedado orando hasta el final.",
          "next": "donpiper_choice2"
        },
        "donpiper_choice2": {
          "text": "Al recobrar el conocimiento ya en el hospital, Sabas pasó meses en un tratamiento doloroso por numerosas fracturas y treinta y cuatro operaciones seguidas, y en una de esas noches, según reconocería después, llegó emocional y espiritualmente al verdadero fondo de la desesperación. Fue entonces cuando decidió: si iba a seguir viviendo con ese dolor, que fuera no solo por sí mismo, sino para poder ayudar, a través de su propia desgracia, a alguien más que atravesara algo parecido. Pidió una Biblia y durante muchos días seguidos releyó los mismos pasajes sobre el cielo que había citado a sus feligreses decenas de veces antes del accidente, comenzando y terminando cada lectura con una oración de gratitud por poder simplemente leer. Tenía que decidir qué hacer con los recuerdos de lo vivido en esos noventa minutos: guardar la experiencia como algo estrictamente personal e indecible, sobre lo que era mejor callar, o describirlo todo en detalle en un libro para el público general, arriesgándose a la desconfianza y las burlas de los escépticos.",
          "choices": [
            {
              "label": "Describir la experiencia en detalle en un libro para el público",
              "effects": {
                "faith": 15
              },
              "next": "donpiper_endLight"
            },
            {
              "label": "Guardar la experiencia como algo personal e indecible",
              "effects": {
                "faith": -15
              },
              "next": "donpiper_endDark"
            }
          ]
        },
        "donpiper_endLight": {
          "text": "Sabas decidió describir la experiencia en detalle, a pesar del riesgo de desconfianza y burlas de los escépticos, y en 2004 se publicó su libro «90 Minutes in Heaven»; se convirtió en un éxito de ventas del New York Times y vendió más de seis millones de ejemplares, inspirando a numerosos lectores que habían sufrido lesiones graves o perdido a seres queridos. Sabas repitió hasta el final de su vida en sus sermones que, si aquel pastor no se hubiera quedado orando bajo la lluvia cuando todos a su alrededor le pedían que se retirara, ni el libro ni ese testimonio habrían existido nunca. Fin de la historia de Sabas.",
          "next": null,
          "choices": []
        },
        "donpiper_endDark": {
          "text": "Sabas decidió guardar la experiencia como algo estrictamente personal e indecible, limitándose a contarla solo a sus personas más cercanas, y en un círculo reducido siguió dando gracias a Dios por esos noventa minutos que el mundo nunca llegó a conocer. El libro que podría haber inspirado a millones de lectores en todo el mundo que habían sufrido lesiones graves nunca llegó a escribirse. Fin de la historia de Sabas.",
          "next": null,
          "choices": []
        }
      }
    },
    norton: {
      "start": "norton_intro",
      "scenes": {
        "norton_intro": {
          "text": "Diego, estudiante de primer año del equipo de fútbol americano universitario de Luther College, chocó en octubre de 2010 con un rival durante un partido, tratando de detener por la fuerza su carrera con el balón, y en ese choque sufrió una lesión grave de columna: los médicos le daban apenas un tres por ciento de probabilidades de volver a sentir alguna vez movimiento por debajo del cuello. Ya en cuidados intensivos, tratando de asimilar la nueva realidad, no pedía sanidad, oraba por otra cosa: \"¿Puedes darme aunque sea un destello de lo que vendrá después? ¿Puedes mostrarme cómo es posible que todo esto se convierta en algo bueno? Solo intento entender para qué es este dolor\". Repitió esa misma oración una y otra vez en las primeras semanas después de la lesión, sin conocer todavía la respuesta.",
          "next": "norton_scene2"
        },
        "norton_scene2": {
          "text": "Los meses siguientes, Diego los pasó en un centro de rehabilitación, donde el programa de ejercicios se organizaba en torno a metas realistas y modestas, como aprender a comer solo, y no en torno a recuperar una marcha plena, que los médicos consideraban prácticamente imposible con ese diagnóstico. Emily, la novia de Diego, decidió quedarse a su lado durante toda la rehabilitación, a pesar de lo incierto del pronóstico, y cada noche antes de dormir agradecían juntos en voz alta a Dios al menos por un día más vivido, una costumbre de la iglesia universitaria que la lesión no le había quitado junto con el movimiento por debajo del cuello.",
          "next": "norton_choice1"
        },
        "norton_choice1": {
          "text": "Diego tenía que decidir qué meta ponerse en la rehabilitación: aceptar el pronóstico realista de los médicos y concentrarse en las habilidades cotidianas a su alcance, o, contra la estadística y la opinión de los especialistas, ponerse como meta volver algún día a ponerse de pie y dar al menos unos pasos por sí mismo. En una de las oraciones nocturnas con Emily, reconoció con honestidad que no sabía si ese milagro entraba en el plan de Dios, pero que sí sabía con certeza que no quería pasar el resto de su vida preguntándose si habría intentado luchar, de haberse decidido en ese momento.",
          "choices": [
            {
              "label": "Ponerse como meta volver a ponerse de pie y dar unos pasos",
              "effects": {
                "faith": 10
              },
              "next": "norton_bridgeA"
            },
            {
              "label": "Aceptar el pronóstico realista y no ponerse metas de más",
              "effects": {
                "faith": -10
              },
              "next": "norton_bridgeB"
            }
          ]
        },
        "norton_bridgeA": {
          "text": "Diego, contra la estadística y la opinión de los especialistas, se puso como meta volver algún día a ponerse de pie, y junto a los fisioterapeutas diseñó un programa de ejercicios agotador, repetido día tras día, más allá de lo que indicaba el protocolo estándar de rehabilitación. Antes de cada entrenamiento duro, él y Emily oraban en voz alta ahí mismo, en la sala de rehabilitación, sin avergonzarse frente a otros pacientes, y el progreso avanzaba dolorosamente lento, pero cada mes aparecían las primeras señales, apenas perceptibles, de control sobre los músculos por debajo del cuello, que Diego, para sus adentros, no llamaba de otra manera que respuesta a la oración.",
          "next": "norton_choice2"
        },
        "norton_bridgeB": {
          "text": "Diego aceptó el pronóstico realista de los médicos y se concentró en las habilidades cotidianas a su alcance, sin ponerse como meta volver a caminar. No dejó las oraciones nocturnas con Emily, pero ahora tenían más de resignación que de petición: le agradecía a Dios por lo que tenía y le pedía ayuda para aceptar lo que, al parecer, ya no iba a cambiar. La rehabilitación avanzó dentro del escenario previsto por los especialistas, sin esos avances inesperados que a veces se dan en pacientes que se proponen metas más altas que el pronóstico oficial.",
          "next": "norton_choice2"
        },
        "norton_choice2": {
          "text": "Para el momento de su propia graduación, en mayo de 2015, Diego, después de varios años de entrenamientos agotadores y de oraciones que nunca dejó junto a Emily, podía dar unos pocos pasos inseguros con ayuda de otra persona. La víspera de la ceremonia, oró largo rato a solas, pidiendo no un nuevo milagro, sino el valor de no esconderse detrás de la opción más fácil y segura, si el cuerpo de verdad le permitía arriesgarse. Tenía que decidir: cruzar el escenario de la graduación junto con todos en silla de ruedas, lo más simple y seguro, o arriesgarse y recorrer esos pocos metros hasta el escenario con sus propias piernas, tomado de la mano de Emily, delante de todo el público.",
          "choices": [
            {
              "label": "Cruzar con sus propias piernas delante de todo el público",
              "effects": {
                "faith": 15
              },
              "next": "norton_endLight"
            },
            {
              "label": "Cruzar en silla de ruedas, lo más simple y seguro",
              "effects": {
                "faith": -15
              },
              "next": "norton_endDark"
            }
          ]
        },
        "norton_endLight": {
          "text": "Diego se animó a recorrer los pocos metros hasta el escenario de la graduación con sus propias piernas, tomado de la mano de Emily; el video de ese momento superó los trescientos millones de reproducciones en todo el mundo y sirvió de base para el documental «7 Yards: The Chris Norton Story». En su propia boda, caminó con sus propias piernas ya no unos pocos metros hasta un escenario, sino todo el pasillo hasta el altar junto a Emily. Unos años después, el matrimonio se animó a recibir hijos adoptivos en la familia, haciéndose una sola pregunta: \"¿Y si hubiéramos dicho que no?\" — y en apenas tres meses adoptaron a cinco niñas. Diego explica ese paso con una frase que para él se convirtió en la continuación de aquella misma oración desde cuidados intensivos: \"Los planes de Dios siempre son más grandes y mejores que los nuestros; no vemos la hora de ver cómo nos sigue usando\". Fin de la historia de Diego.",
          "next": null,
          "choices": []
        },
        "norton_endDark": {
          "text": "Diego decidió cruzar el escenario de la graduación en silla de ruedas, lo más seguro y simple después de varios años de una rehabilitación durísima. El momento pasó inadvertido para el público en general, y la historia que podría haber inspirado a millones de personas en todo el mundo quedó conocida solo por su propia familia y sus amigos cercanos. No dejó esas mismas oraciones nocturnas con Emily ni siquiera después de la rehabilitación, aunque reconocería después que en aquellos años sonaban más a costumbre que a una conversación con Alguien que de verdad escuchaba. Fin de la historia de Diego.",
          "next": null,
          "choices": []
        }
      }
    },
    millard: {
      "start": "millard_intro",
      "scenes": {
        "millard_intro": {
          "text": "Mario, futuro músico del grupo MercyMe, creció con un padre apodado Bub, antigua estrella del fútbol americano escolar en Texas, cuya vida cambió después de un accidente grave con un camión y un coma de ocho semanas. Después del accidente, el padre se volvió violento y golpeaba a Mario con regularidad hasta los últimos años de la secundaria, y los domingos toda la familia igual iba a la iglesia, donde el padre cantaba en el coro como si la noche anterior no hubiera pasado nada en casa; ese doble juego se le quedó grabado a Mario para toda la vida, incluso antes de que aprendiera a llamarlo con la palabra \"hipocresía\".",
          "next": "millard_scene2"
        },
        "millard_scene2": {
          "text": "Mario creció procurando estar en casa lo menos posible, y fue construyendo poco a poco una carrera musical lejos de su padre, con quien la relación nunca se recompuso después de tantos años de violencia. De joven oró más de una vez por lo mismo, no para que Dios castigara a su padre, sino para poder perdonarlo algún día, aunque él mismo no creía que ese perdón fuera siquiera posible. Cuando su padre enfermó gravemente y los médicos dijeron que le quedaba poco tiempo de vida, Mario tuvo que decidir cómo pasar el tiempo que quedaba.",
          "next": "millard_choice1"
        },
        "millard_choice1": {
          "text": "Mario tenía que decidir: ir a ver a su padre moribundo e intentar perdonarle los años de golpes, arriesgándose a enfrentarse de nuevo con el mismo hombre que tanto dolor le había causado de niño, o mantenerse a una distancia segura, dejando que su padre muriera sin ninguna reconciliación entre ellos. Recordaba las palabras sobre perdonar setenta veces siete que había escuchado de niño en la iglesia, pero una cosa era oírlas desde el púlpito de un predicador, y otra muy distinta aplicárselas a su propio padre.",
          "choices": [
            {
              "label": "Ir a ver a su padre e intentar perdonarlo",
              "effects": {
                "faith": 10
              },
              "next": "millard_bridgeA"
            },
            {
              "label": "Mantenerse a distancia, sin buscar la reconciliación",
              "effects": {
                "faith": -10
              },
              "next": "millard_bridgeB"
            }
          ]
        },
        "millard_bridgeA": {
          "text": "Mario fue a ver a su padre moribundo y, venciendo un dolor de años, le perdonó los golpes, y pasó junto a él los últimos meses de su vida. Para sorpresa de Mario, el propio padre llegó también a la fe en ese tiempo, transformándose por completo antes de morir, una reconciliación que Mario nunca esperó recibir. Después lo recordaría con una sola frase: \"Mi padre era un monstruo, y vi con mis propios ojos cómo Dios lo cambió\"; para el momento de su muerte, el padre se había convertido, según sus palabras, no solo en su mejor amigo, sino en la persona más temerosa de Dios que jamás había conocido.",
          "next": "millard_choice2"
        },
        "millard_bridgeB": {
          "text": "Mario decidió mantenerse a una distancia segura, dejando que su padre muriera sin ninguna reconciliación personal entre ellos. Años después reconocería que esa decisión le había dejado una herida sin cerrar, que se manifestaba en los momentos más inesperados de su vida adulta.",
          "next": "millard_choice2"
        },
        "millard_choice2": {
          "text": "Después de la muerte de su padre en 1991, Mario estaba de pie junto a su tumba con la familia, y su abuela pronunció en voz baja una frase: \"Solo puedo imaginar lo que Bub está viendo ahora\". Esas palabras se le quedaron grabadas en la cabeza durante años. Tratando de asimilar en oración la conversión inesperada de un hombre que lo había golpeado durante años, Mario tenía que decidir qué hacer con esa historia en su propia obra: escribir una canción basada directamente en las palabras de su abuela junto a la tumba y en sus propios pensamientos sobre el cielo, arriesgándose a exponer públicamente la parte más dolorosa de su historia personal ante millones de oyentes, o dejar ese tema estrictamente personal, sin llevarlo jamás al escenario.",
          "choices": [
            {
              "label": "Escribir una canción basada en la reconciliación vivida",
              "effects": {
                "faith": 15
              },
              "next": "millard_endLight"
            },
            {
              "label": "Dejar ese tema personal, sin llevarlo al escenario",
              "effects": {
                "faith": -15
              },
              "next": "millard_endDark"
            }
          ]
        },
        "millard_endLight": {
          "text": "Mario escribió la canción «I Can Only Imagine», tomando como base esa misma frase de su abuela junto a la tumba de su padre; según sus palabras, la letra se armó casi de inmediato, en cuestión de minutos. La canción vendió más de dos millones de copias y se convirtió en una de las canciones cristianas más reconocidas de su generación, y en 2018 se filmó un largometraje basado en esa historia. Fin de la historia de Mario.",
          "next": null,
          "choices": []
        },
        "millard_endDark": {
          "text": "Mario decidió dejar la historia de su relación con su padre estrictamente personal, sin convertirla en material para canciones. Su carrera musical continuó dentro de los temas habituales, pero aquella única canción capaz de conmover a millones de oyentes con esa misma historia nunca llegó a escribirse, y el propio Mario siguió orando durante mucho tiempo por el mismo perdón por el que había orado de joven, solo que ahora ya sin saber si de verdad había perdonado a su padre o simplemente había dejado de mencionarlo en voz alta. Fin de la historia de Mario.",
          "next": null,
          "choices": []
        }
      }
    },
    camp: {
      "start": "camp_intro",
      "scenes": {
        "camp_intro": {
          "text": "Esteban, joven músico cristiano, conoció a Melisa en una universidad cristiana; ella ya luchaba entonces contra un cáncer de ovario en etapa tres, pero poco antes de la boda los médicos la declararon completamente sana, y en el otoño de 2000 se casaron, llenos de esperanza de una larga vida juntos. En la boda se cantaron el uno al otro versos de un salmo sobre que el Señor era su luz y su salvación, y toda la iglesia recordaría después con qué fe ligera, sin ninguna sombra, sonaron esas palabras aquel día.",
          "next": "camp_scene2"
        },
        "camp_scene2": {
          "text": "Apenas terminada la luna de miel, el cáncer de Melisa volvió y se extendió rápidamente por todo su cuerpo; los médicos les informaron que esta vez las probabilidades de recuperación eran prácticamente nulas. Al enterarse, Melisa le repetía a Esteban la misma frase una y otra vez: \"Si a través de lo que estoy pasando, aunque sea una sola persona entrega su vida a Cristo, habrá valido la pena\". Amigos de la iglesia iban a orar con ellos casi todas las noches, y Esteban reconocería después que fue precisamente en esos meses cuando entendió de verdad, por primera vez, la diferencia entre la fe que resulta cómoda para cantar desde un escenario y la fe de la que hay que sostenerse cuando una oración por sanidad parece quedar sin respuesta. Esteban, casado apenas unas semanas, tenía que decidir cómo pasar el tiempo que le quedaba con su esposa, sabiendo que podía tratarse de cuestión de semanas.",
          "next": "camp_choice1"
        },
        "camp_choice1": {
          "text": "Esteban tenía que decidir: pasar los meses que quedaban junto a Melisa en una oración abierta y sincera pidiendo el milagro de la sanidad, manteniendo la esperanza hasta el último día, o resignarse por dentro de antemano al desenlace inevitable, para vivir la pérdida con menos dolor cuando ocurriera. No lograba encontrar en las Escrituras una promesa directa de que la oración sanaría con certeza el cuerpo de Melisa, y era precisamente esa incertidumbre la que lo atormentaba más que el propio diagnóstico, porque resignarse de antemano significaba arriesgar su fe tanto como seguir esperando.",
          "choices": [
            {
              "label": "Orar por el milagro hasta el último día",
              "effects": {
                "faith": 10
              },
              "next": "camp_bridgeA"
            },
            {
              "label": "Resignarse por dentro de antemano al desenlace inevitable",
              "effects": {
                "faith": -10
              },
              "next": "camp_bridgeB"
            }
          ]
        },
        "camp_bridgeA": {
          "text": "Esteban siguió orando por el milagro de la sanidad junto a Melisa hasta el último día, negándose a prepararse por dentro de antemano para el peor desenlace. Melisa murió el 5 de febrero de 2001, apenas tres meses y medio después de la boda, y pasó sus últimos minutos de vida en adoración y alabanza al Señor, no en el miedo; la oración por la sanidad física no fue respondida como Esteban esperaba, pero su fe misma, según diría después, no vaciló ni una sola vez en esos últimos meses.",
          "next": "camp_choice2"
        },
        "camp_bridgeB": {
          "text": "Esteban se resignó por dentro de antemano al desenlace inevitable, tratando de prepararse emocionalmente para la pérdida antes de que ocurriera. Melisa murió el 5 de febrero de 2001, apenas tres meses y medio después de la boda, y el propio Esteban reconocería después que esa resignación anticipada no tanto alivió el dolor como le quitó las últimas semanas de una cercanía verdadera y llena de esperanza con su esposa.",
          "next": "camp_choice2"
        },
        "camp_choice2": {
          "text": "Después de la muerte de Melisa, Esteban le gritó a Dios durante mucho tiempo la pregunta del \"por qué\", aunque se había prometido no hacerla nunca, y un día, según contaría después, escuchó dentro de sí una respuesta clara: \"Esteban, no siempre quiero que sepas el porqué, porque quiero que tengas un testimonio de caminar por fe\". Tenía que decidir qué hacer con la música que había escrito en esos meses: dejar esas canciones como un diario personal de duelo, sin mostrárselas nunca a nadie, o publicarlas para el público general, sabiendo que tendría que revivir públicamente esa pérdida una y otra vez, en cada concierto, hasta el final de su carrera.",
          "choices": [
            {
              "label": "Publicar las canciones para el público",
              "effects": {
                "faith": 15
              },
              "next": "camp_endLight"
            },
            {
              "label": "Dejar las canciones como un diario personal, sin mostrarlas",
              "effects": {
                "faith": -15
              },
              "next": "camp_endDark"
            }
          ]
        },
        "camp_endLight": {
          "text": "Esteban publicó las canciones escritas durante los meses de la enfermedad y después de la muerte de Melisa, incluida la que da título, «I Still Believe», y «Walk by Faith», escrita ya durante la luna de miel; se convirtieron en algunas de las más reconocidas de la música cristiana, ayudando a miles de oyentes que atravesaban su propio duelo y su propia pérdida. Años después, una oyente le contó a Esteban que «Walk by Faith» había sido la última canción que había escuchado su amiga moribunda antes de morir. En 2020 se filmó un largometraje basado en esta historia, con KJ Apa y Britt Robertson en los papeles principales. Fin de la historia de Esteban.",
          "next": null,
          "choices": []
        },
        "camp_endDark": {
          "text": "Esteban dejó las canciones escritas en esos meses como un diario personal de duelo, sin mostrárselas nunca al público general. La música capaz de consolar a miles de oyentes que atravesaban su propia pérdida quedó guardada en un cajón, conocida solo por él mismo. Fin de la historia de Esteban.",
          "next": null,
          "choices": []
        }
      }
    },
    davis: {
      "start": "davis_intro",
      "scenes": {
        "davis_intro": {
          "text": "Rosa, una egresada estadounidense de dieciocho años con brillantes perspectivas de ingresar a una universidad prestigiosa en su país, viajó a Uganda en un breve viaje de voluntariado, y, en contra de sus propios planes, decidió quedarse allí mucho más tiempo del previsto. Había crecido en una familia creyente y desde niña había escuchado el mandato bíblico de cuidar a las viudas y los huérfanos, pero solo en Uganda, al tomar por primera vez en brazos a un niño hambriento en concreto, sintió la diferencia entre simplemente creer esas palabras y vivirlas.",
          "next": "davis_scene2"
        },
        "davis_scene2": {
          "text": "Los padres y amigos de Rosa, ya de vuelta en casa después de ese primer viaje, esperaban que, tal como había planeado antes, ingresara a la universidad en otoño junto a todos sus compañeros. Rosa, en cambio, pensaba cada vez más en los niños concretos que había conocido en Uganda, muchos de los cuales no tenían quién los alimentara ni los educara día a día.",
          "next": "davis_choice1"
        },
        "davis_choice1": {
          "text": "Rosa tenía que decidir: renunciar al lugar en la universidad que sus padres esperaban de ella y en el que confiaba toda la familia, y volver a Uganda por tiempo indefinido, o seguir el camino habitual, el que se esperaba de ella, e ingresar a la universidad junto a sus compañeros. No oraba para que Dios confirmara una decisión ya tomada, sino para tener el valor de reconocer qué era exactamente lo que Él le pedía, aunque la respuesta resultara incómoda para toda la familia. \"Parece que me estás pidiendo que sea completamente, completamente, completamente tuya\", escribiría después sobre esa lucha interior.",
          "choices": [
            {
              "label": "Renunciar a la universidad y volver a Uganda",
              "effects": {
                "faith": 10
              },
              "next": "davis_bridgeA"
            },
            {
              "label": "Ingresar a la universidad, como esperaban sus padres",
              "effects": {
                "faith": -10
              },
              "next": "davis_bridgeB"
            }
          ]
        },
        "davis_bridgeA": {
          "text": "Rosa renunció al lugar en la universidad, para gran preocupación de sus padres, y volvió a Uganda ya no como voluntaria de corto plazo, sino como alguien decidida a quedarse mucho tiempo. En 2008 fundó oficialmente el ministerio Amazima Ministries, cuyo nombre en luganda significa \"verdad\", que comenzó alimentando y educando a varias decenas de niños en su propio barrio.",
          "next": "davis_choice2"
        },
        "davis_bridgeB": {
          "text": "Rosa siguió el camino esperado de ella e ingresó a la universidad junto a sus compañeros, tratando de dejar Uganda atrás como una aventura vívida, pero ya terminada, de su juventud. Pero los rostros de aquellos niños concretos que había conocido en el primer viaje no la soltaron durante todo el primer semestre, y ya para las vacaciones de invierno tomó la decisión de retirar sus documentos de la universidad y volver a Uganda, por el mismo camino, solo que unos meses más tarde y con muchas más dudas sobre lo acertado de esa demora.",
          "next": "davis_choice2"
        },
        "davis_choice2": {
          "text": "A los veintitrés años, ya con varios años viviendo en Uganda y dirigiendo un ministerio en crecimiento que había comenzado con aquella oración juvenil por niños concretos, Rosa se enfrentó a otra decisión: adoptar oficialmente a varias niñas huérfanas que conocía en persona, asumiendo la responsabilidad legal y parental completa a los veintitrés años, siendo soltera, o seguir ayudándolas como voluntaria y tutora sin una adopción formal.",
          "choices": [
            {
              "label": "Adoptar oficialmente a las niñas huérfanas",
              "effects": {
                "faith": 15
              },
              "next": "davis_endLight"
            },
            {
              "label": "Seguir ayudando sin una adopción formal",
              "effects": {
                "faith": -15
              },
              "next": "davis_endDark"
            }
          ]
        },
        "davis_endLight": {
          "text": "Rosa adoptó oficialmente a trece niñas huérfanas antes de los veintitrés años, asumiendo sola la responsabilidad parental completa. Describió su historia en el libro «Kisses from Katie», que se convirtió en un éxito de ventas del New York Times, y en 2015 se casó con el misionero Benji, mientras seguía dirigiendo el ministerio Amazima Ministries, que hoy cuida a miles de niños en Uganda. La propia Rosa explicaba lo que le había sucedido con una sola frase: \"Jesús destruyó mi vida anterior, la hizo pedazos, y la volvió a armar mucho más hermosa\". Fin de la historia de Rosa.",
          "next": null,
          "choices": []
        },
        "davis_endDark": {
          "text": "Rosa siguió ayudando a las niñas como voluntaria y tutora, sin formalizar la adopción oficial, lo que dejó su situación legal indefinida durante muchos años. El ministerio siguió creciendo, pero sin esa responsabilidad personal y definitiva que podría haber dado una adopción formal, el destino de esas niñas concretas quedó más expuesto ante posibles cambios. Fin de la historia de Rosa.",
          "next": null,
          "choices": []
        }
      }
    },
    baker: {
      "start": "baker_intro",
      "scenes": {
        "baker_intro": {
          "text": "Estefanía se casó con Roland, misionero de tercera generación, en 1980, y juntos fundaron un pequeño ministerio que ayudaba a niños necesitados en distintos países, aunque durante décadas buscaron el lugar donde su trabajo hiciera más falta. Ya de joven, Estefanía había hecho una oración breve que repetiría después toda su vida: que Dios le mostrara a los niños más desamparados de la tierra y le diera fuerzas para quedarse justamente con ellos, y no con aquellos a quienes sería más fácil y más seguro ayudar.",
          "next": "baker_scene2"
        },
        "baker_scene2": {
          "text": "A mediados de los años noventa, Mozambique era considerado el país más pobre del mundo tras una larga guerra civil que había destruido casi toda su infraestructura. A Estefanía y Roland les ofrecieron varios lugares más prósperos y seguros para su servicio, donde la infraestructura y el abastecimiento eran mucho más confiables, pero Estefanía no dejaba de volver con el pensamiento a aquella oración de infancia y a la frase del Evangelio sobre que lo hecho por uno de los más pequeños se hace por el propio Cristo.",
          "next": "baker_choice1"
        },
        "baker_choice1": {
          "text": "Estefanía tenía que decidir: mudarse justamente a Mozambique, el país más pobre y devastado por la guerra de todas las opciones ofrecidas, donde casi no había infraestructura ni siquiera para la supervivencia elemental, o elegir un país más próspero, donde organizar el servicio habría sido mucho más simple y seguro. Roland le recordó aquella misma oración de infancia, y ambos coincidieron en que, si durante años le habían pedido a Dios que les mostrara el lugar de mayor necesidad, sería extraño ahora asustarse de la propia respuesta solo porque hubiera resultado ser la más difícil de todas.",
          "choices": [
            {
              "label": "Mudarse a Mozambique, a pesar de la infraestructura destruida",
              "effects": {
                "faith": 10
              },
              "next": "baker_bridgeA"
            },
            {
              "label": "Elegir un país más próspero y seguro",
              "effects": {
                "faith": -10
              },
              "next": "baker_bridgeB"
            }
          ]
        },
        "baker_bridgeA": {
          "text": "Estefanía y Roland se mudaron a Mozambique en 1995 y concentraron su servicio en el pueblo makua, uno de los grupos étnicos más pobres del país, casi sin alcance previo de misión cristiana. Los primeros meses fueron tan duros, sin un abastecimiento confiable ni siquiera de agua potable, que ya para el verano siguiente Estefanía quedó físicamente agotada y cayó enferma con una neumonía doble. En el verano de 1996, de camino a una conferencia de oración en Toronto, hizo una súplica breve: \"Señor, si no me tocas ahora, estoy dispuesta a dejarlo todo e ir a trabajar en una tienda cualquiera\"; allí una mujer desconocida oró por ella, y Estefanía volvió a Mozambique sanada y, según sus propias palabras, habiendo visto a Dios más de cerca que en cualquier otro momento de su vida anterior.",
          "next": "baker_choice2"
        },
        "baker_bridgeB": {
          "text": "Estefanía y Roland consideraron seriamente un país más próspero y seguro, donde los asuntos organizativos se resolverían mucho más fácilmente. Pero de allí nunca llegaron puertas abiertas ni invitaciones, y la única propuesta real, un orfanato devastado por la guerra en Maputo, los devolvía una y otra vez al mismo Mozambique, solo que ahora sin aquel paso de fe consciente que podría haber sido su fundamento, sino más bien por la falta de otras opciones.",
          "next": "baker_choice2"
        },
        "baker_choice2": {
          "text": "Después de años de trabajo entre la población más pobre de Mozambique, cuando el ministerio empezó a crecer y a exigir cada vez más recursos, Estefanía tenía que decidir: seguir expandiendo el servicio hacia las zonas rurales más inaccesibles y peligrosas del país, adonde antes nadie se había animado a ir, o afianzar y estabilizar el trabajo ya establecido en zonas urbanas más accesibles. Recordó cómo una vez, en oración, se había quejado ante Cristo de que alimentar a todos los niños era físicamente imposible, y había escuchado como respuesta: \"Siempre será suficiente, porque Yo morí por ellos\", una promesa que ahora había que poner a prueba en la práctica, en los lugares más difíciles, o dejar sin aplicar.",
          "choices": [
            {
              "label": "Seguir expandiéndose hacia las zonas más inaccesibles",
              "effects": {
                "faith": 15
              },
              "next": "baker_endLight"
            },
            {
              "label": "Afianzarse en las zonas urbanas ya establecidas",
              "effects": {
                "faith": -15
              },
              "next": "baker_endDark"
            }
          ]
        },
        "baker_endLight": {
          "text": "Estefanía siguió expandiendo el servicio hacia las zonas rurales más inaccesibles de Mozambique, adonde antes casi nadie llegaba. Hoy, la organización que fundó junto a Roland, Iris Global, cuenta con más de cuatro mil misioneros y colaboradores en treinta y ocho países, y alimenta a diario a unas treinta mil personas necesitadas en todo el mundo. Fin de la historia de Estefanía.",
          "next": null,
          "choices": []
        },
        "baker_endDark": {
          "text": "Estefanía decidió afianzar y estabilizar el trabajo en las zonas urbanas ya establecidas, sin arriesgarse a expandirse hacia los territorios rurales más inaccesibles y peligrosos. El ministerio se mantuvo estable y útil para quienes ya alcanzaba, pero miles de personas en las zonas más remotas y necesitadas del país se quedaron sin la ayuda que podrían haber recibido. Fin de la historia de Estefanía.",
          "next": null,
          "choices": []
        }
      }
    },
    caine: {
      "start": "caine_intro",
      "scenes": {
        "caine_intro": {
          "text": "Claudia tenía treinta y tres años cuando se enteró por casualidad de que había sido adoptada de bebé; los padres que la habían criado nunca se lo habían contado antes, y las circunstancias de su propio nacimiento, incluida la identidad de sus padres biológicos, le quedaron prácticamente desconocidas por completo. Creyente desde niña, había escuchado más de una vez en la iglesia que cada persona no es un accidente, sino un designio, pero fue precisamente ese descubrimiento el que la hizo preguntarse en serio, por primera vez, si ese designio también se extendía a su propio origen, tan enredado. Después hablaría de ese momento así: \"Necesitaba tanta fe para confiar en ese documento de adopción como la que hace falta para confiar en la verdad de quién soy en Cristo, y aquello a lo que decidiera confiarme en ese momento determinaría el rumbo de toda mi vida\".",
          "next": "caine_scene2"
        },
        "caine_scene2": {
          "text": "Además de ese descubrimiento, Claudia había sufrido abuso sexual desde la primera infancia hasta los quince años, un trauma sobre el que guardó silencio durante décadas, tratando de construir una vida adulta en apariencia estable sobre ese dolor nunca expresado. La noticia de su adopción, a los treinta y tres años, sacudió todo lo que había mantenido oculto durante años.",
          "next": "caine_choice1"
        },
        "caine_choice1": {
          "text": "Claudia tenía que decidir: enfrentar en serio por primera vez en su vida tanto las circunstancias de su propio origen como el abuso vivido, buscando ayuda y hablando abiertamente de ello con las personas más cercanas, o seguir manteniendo ambos temas cerrados, como había hecho durante los treinta y tres años anteriores. No oraba para que el dolor desapareciera solo, sino por el valor de nombrarlo en voz alta por primera vez ante su esposo Nick, sabiendo que nombrarlo no era lo mismo que volver a vivirlo.",
          "choices": [
            {
              "label": "Enfrentar en serio el pasado y hablar de él abiertamente",
              "effects": {
                "faith": 10
              },
              "next": "caine_bridgeA"
            },
            {
              "label": "Seguir manteniendo estos temas cerrados, como antes",
              "effects": {
                "faith": -10
              },
              "next": "caine_bridgeB"
            }
          ]
        },
        "caine_bridgeA": {
          "text": "Claudia empezó por primera vez en su vida a hablar abiertamente del abuso vivido y de las circunstancias de su propio origen con las personas más cercanas, incluido su esposo Nick. Al mismo tiempo, se propuso memorizar un versículo bíblico tras otro, una práctica sencilla que, según diría después, fue reescribiendo poco a poco lo que ella misma estaba acostumbrada a pensar de sí misma. El proceso resultó dolorosamente difícil, pero por primera vez en tres décadas dejó de cargar ese peso completamente sola.",
          "next": "caine_choice2"
        },
        "caine_bridgeB": {
          "text": "Claudia decidió seguir manteniendo ambos temas cerrados, como había hecho todos los años anteriores, tratando de conservar la imagen exteriormente estable de su vida adulta. El dolor nunca expresado siguió influyendo en sus decisiones y en sus relaciones de maneras que ella misma no siempre lograba reconocer del todo.",
          "next": "caine_choice2"
        },
        "caine_choice2": {
          "text": "Años después, al enterarse de que muchas mujeres en todo el mundo atravesaban una forma mucho más directa y sistemática de la misma violencia, la trata de personas y la explotación sexual, Claudia se repetía una y otra vez el mismo pensamiento de sus propios escritos de aquellos años: \"Dios es capaz de tomar el desorden de nuestro pasado y convertirlo en un mensaje; toma nuestras pruebas y las convierte en testimonio\". Tenía que decidir: fundar junto a su esposo toda una organización internacional para combatir ese fenómeno, asumiendo una enorme carga organizativa y emocional, o limitarse a su propia sanidad personal, sin llevar ese tema a la escala de una lucha pública.",
          "choices": [
            {
              "label": "Fundar una organización internacional contra la trata de personas",
              "effects": {
                "faith": 15
              },
              "next": "caine_endLight"
            },
            {
              "label": "Limitarse a su sanidad personal, sin una lucha pública",
              "effects": {
                "faith": -15
              },
              "next": "caine_endDark"
            }
          ]
        },
        "caine_endLight": {
          "text": "Claudia, junto a su esposo Nick, fundó en 2008 la organización The A21 Campaign para combatir la trata de personas en todo el mundo; hoy la organización trabaja en varias decenas de países, ayudando a las víctimas de explotación a obtener libertad y restauración. La propia Claudia lo explica así: \"¿No es propio de Dios tomar a una niña sin nombre, no deseada, herida y adoptada, y decir: No solo te voy a salvar a ti, sino que además te voy a usar para abrir las puertas de la prisión de quienes todavía están cautivos, y rescatarlos?\". Fin de la historia de Claudia.",
          "next": null,
          "choices": []
        },
        "caine_endDark": {
          "text": "Claudia se limitó a su propia sanidad personal, sin llevar su experiencia a la escala de una organización pública. Las mujeres de todo el mundo que atravesaban la trata de personas y la explotación sexual se quedaron sin la ayuda concreta y a gran escala que podría haber ofrecido la organización que nunca llegó a crearse. Fin de la historia de Claudia.",
          "next": null,
          "choices": []
        }
      }
    },
    muller: {
      "start": "muller_intro",
      "scenes": {
        "muller_intro": {
          "text": "Cosme, predicador de origen alemán que él mismo había llegado a la fe en una reunión de oración en noviembre de 1825, según sus propias palabras, \"esa noche Dios comenzó una obra de gracia\" en su vida, se trasladó a la ciudad inglesa de Bristol a comienzos del siglo XIX y decidió abrir un orfanato para los niños sin hogar de la ciudad. Tras su conversión, vendió casi toda su biblioteca profana, de más de trescientos libros, dejando como lectura principal solo la Biblia, y decidió llevar el orfanato bajo un principio poco común: nunca pedir dinero directamente a nadie, ni a particulares ni a organizaciones benéficas, confiando únicamente en la oración. Se apoyaba en la promesa bíblica de que Dios conoce las necesidades antes de que se le pidan, y quería demostrar con su propia experiencia, a un siglo escéptico, que esa promesa podía comprobarse literalmente, y no solo citarse desde un púlpito.",
          "next": "muller_scene2"
        },
        "muller_scene2": {
          "text": "Sus amigos y colegas predicadores consideraban esa idea una aventura peligrosa: sin campañas publicitarias ni pedidos directos de donaciones, sostener un orfanato en crecimiento, con decenas y luego cientos de niños, parecía prácticamente imposible. El propio Cosme se atenía a ese principio no solo de palabra: se impuso la regla de leer la Biblia a diario y de manera sistemática, y repetía que por cada página de otra lectura leía diez páginas de las Escrituras. Anotó en su diario en diciembre de 1835 que quería demostrar la fidelidad de Dios precisamente a través de la renuncia total a pedir ayuda directamente a las personas.",
          "next": "muller_choice1"
        },
        "muller_choice1": {
          "text": "Una mañana, la despensa del orfanato quedó completamente vacía: ni una migaja de comida para varias decenas de niños que esperaban el desayuno. Cosme tenía que decidir: sentarse con los niños a una mesa vacía y de todos modos dar gracias en voz alta a Dios por una comida que físicamente todavía no existía, tal como exigía su propio principio de no pedir nunca directamente, o hacer una excepción esa mañana y recurrir en persona, con urgencia, a conocidos adinerados de la ciudad.",
          "choices": [
            {
              "label": "Sentarse a la mesa vacía y de todos modos dar gracias a Dios",
              "effects": {
                "faith": 10
              },
              "next": "muller_bridgeA"
            },
            {
              "label": "Hacer una excepción y pedir ayuda urgente en persona",
              "effects": {
                "faith": -10
              },
              "next": "muller_bridgeB"
            }
          ]
        },
        "muller_bridgeA": {
          "text": "Cosme sentó a los niños a la mesa vacía y dio gracias en voz alta a Dios por el desayuno que todavía no tenían delante, negándose a romper su propio principio incluso en una situación tan extrema. Apenas terminó de orar, llamaron a la puerta: el lechero del lugar, cuyo carro se había roto justo frente a la puerta del orfanato, prefirió repartir la leche entre los niños antes que dejar que se echara a perder mientras arreglaban la rueda.",
          "next": "muller_choice2"
        },
        "muller_bridgeB": {
          "text": "Cosme, esa mañana, hizo una excepción a su propio principio y recurrió en persona, con urgencia, a conocidos adinerados de la ciudad, explicándoles lo crítico de la situación del orfanato. La ayuda llegó ese mismo día, pero el propio Cosme reconocería después que ese único caso de pedido directo le dejó una vaga sensación de que la prueba que quería construir con su vida había resultado, esta vez, un poco menos pura.",
          "next": "muller_choice2"
        },
        "muller_choice2": {
          "text": "A lo largo de las décadas de trabajo del orfanato, Cosme tendría que decidir la cuestión principal de toda su vida: mantener ese mismo principio de renuncia total a pedir donaciones directamente durante todos los años restantes de servicio, sin importar el número creciente de niños y los gastos cada vez mayores, o, en algún momento, por estabilidad y previsibilidad, pasar de todos modos al modelo habitual de recaudación de fondos benéficos, como hacían casi todos los demás orfanatos de la época.",
          "choices": [
            {
              "label": "Mantener el principio de no pedir directamente hasta el final de su vida",
              "effects": {
                "faith": 15
              },
              "next": "muller_endLight"
            },
            {
              "label": "Pasar al modelo habitual de recaudación de fondos por estabilidad",
              "effects": {
                "faith": -15
              },
              "next": "muller_endDark"
            }
          ]
        },
        "muller_endLight": {
          "text": "Cosme mantuvo el principio de renuncia total a pedir donaciones directamente hasta el final de su vida, y en esos años construyó cinco casas de huérfanos independientes en Bristol, atendiendo en total a más de diez mil niños huérfanos. En los últimos sesenta y ocho años de servicio no recibió ningún salario personal, apoyándose en la misma confianza con la que había empezado en 1835. En su autobiografía resumió su propia vida con una sola frase: \"He dedicado con alegría toda mi vida a un solo propósito: mostrar con hechos lo que se puede lograr con oración y fe\". Fin de la historia de Cosme.",
          "next": null,
          "choices": []
        },
        "muller_endDark": {
          "text": "Cosme, en algún momento, pasó al modelo habitual de recaudación de donaciones benéficas para dar mayor estabilidad al orfanato en crecimiento. La financiación se volvió, en efecto, más previsible, pero aquel principio único que podría haberse convertido en la prueba más convincente de su propia fe para un siglo escéptico quedó como un experimento inconcluso, interrumpido a mitad de camino. Fin de la historia de Cosme.",
          "next": null,
          "choices": []
        }
      }
    },
  };

  const data = { CHARACTERS, STORIES };
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
  else { window.Content = window.Content || {}; window.Content.reserveEs = data; }
})();
