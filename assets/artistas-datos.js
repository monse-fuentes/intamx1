// Catálogo ilustrativo: nombres, clases, tarifas y horarios de muestra.
// Las imágenes de referencia tienen crédito y fuente propios; no pertenecen a estos perfiles ficticios.
export const disciplinas = [
  {
    "id": "pintura",
    "nombre": "Pintura",
    "descripcion": "Color, texturas y nuevas miradas.",
    "palabras": "acuarela óleo oleo acrilico lienzo pintar",
    "imagen": "./assets/media/pintura-1.webp"
  },
  {
    "id": "ilustracion",
    "nombre": "Ilustración",
    "descripcion": "Historias que comienzan con un trazo.",
    "palabras": "dibujar dibujo comic manga digital ilustrar",
    "imagen": "./assets/media/ilustracion-1.webp"
  },
  {
    "id": "fotografia",
    "nombre": "Fotografía",
    "descripcion": "Aprende a mirar desde otra perspectiva.",
    "palabras": "foto camara retrato fotografia paisaje",
    "imagen": "./assets/media/fotografia-1.webp"
  },
  {
    "id": "escultura",
    "nombre": "Escultura",
    "descripcion": "Ideas que toman forma y volumen.",
    "palabras": "modelado volumen escultura tallado",
    "imagen": "./assets/media/escultura-1.webp"
  },
  {
    "id": "ceramica",
    "nombre": "Cerámica",
    "descripcion": "Creación con tierra, forma y paciencia.",
    "palabras": "barro alfareria ceramica torno arcilla",
    "imagen": "./assets/media/ceramica-1.webp"
  },
  {
    "id": "textil",
    "nombre": "Arte textil",
    "descripcion": "Hilos, patrones y tradición contemporánea.",
    "palabras": "bordado tejido telar macrame costura fibras",
    "imagen": "./assets/media/textil-1.webp"
  },
  {
    "id": "musica",
    "nombre": "Música",
    "descripcion": "Ritmo, escucha y expresión.",
    "palabras": "guitarra piano canto cantar violin musica canciones",
    "imagen": "./assets/media/musica-1.webp"
  },
  {
    "id": "danza",
    "nombre": "Danza",
    "descripcion": "El cuerpo como lenguaje artístico.",
    "palabras": "baile ballet bailar danza movimiento",
    "imagen": "./assets/media/danza-1.webp"
  }
];
export const artistas = [
  {
    "id": "pintura",
    "nombre": "Valeria Montes",
    "iniciales": "VM",
    "disciplina": "Pintura",
    "especialidad": "Acuarela y composición",
    "bio": "Color, texturas y nuevas miradas.",
    "experiencia": "Perfil de demostración. Trayectoria y formación por confirmar.",
    "disponibilidad": "Lunes y miércoles · 18:00–20:00 · hora de Ciudad de México.",
    "obras": [
      {
        "id": "pintura-1",
        "titulo": "Paisaje de otoño",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/pintura-1.webp",
        "credito": "Europeana / Tartu Art Museum · August Mölder",
        "fuente": "https://unsplash.com/photos/EXc_gu4ooDU",
        "video": null,
        "estado": "disponible",
        "precio": null
      },
      {
        "id": "pintura-2",
        "titulo": "Río entre árboles",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/pintura-2.webp",
        "credito": "Art Institute of Chicago · Peter de Wint",
        "fuente": "https://unsplash.com/photos/VKXiVWi4obI",
        "video": null,
        "estado": "consulta",
        "precio": null
      }
    ],
    "clases": [
      {
        "titulo": "Acuarela botánica",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "60 minutos",
        "precio": 320,
        "descripcion": "Explora transparencias, mezcla de color y formas de hojas.",
        "horario": "Lunes y miércoles · 18:00–20:00",
        "estado": "consultar"
      },
      {
        "titulo": "Composición y color",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "75 minutos",
        "precio": 380,
        "descripcion": "Organiza una composición y trabaja una paleta personal.",
        "horario": "Martes y jueves · 10:00–12:00",
        "estado": "consultar"
      }
    ],
    "estadoAgenda": "Próxima apertura",
    "imagen": "./assets/media/pintura-1.webp"
  },
  {
    "id": "pintura-2",
    "nombre": "Andrés Salas",
    "iniciales": "AS",
    "disciplina": "Pintura",
    "especialidad": "Óleo y paisaje",
    "bio": "El color y la luz como punto de partida para construir tu propio paisaje.",
    "experiencia": "Perfil ilustrativo para mostrar el catálogo. Trayectoria pendiente de completar.",
    "disponibilidad": "Martes y jueves · 10:00–12:00 · hora de Ciudad de México.",
    "estadoAgenda": "Consultar cupo",
    "imagen": "./assets/media/pintura-3.webp",
    "clases": [
      {
        "titulo": "Óleo: luz y paisaje",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "90 minutos",
        "precio": 450,
        "descripcion": "Crea un estudio de paisaje a partir de luz y profundidad.",
        "horario": "Martes y jueves · 10:00–12:00",
        "estado": "consultar"
      },
      {
        "titulo": "Paisaje expresivo",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "90 minutos",
        "precio": 480,
        "descripcion": "Practica planos, atmósfera y pincelada.",
        "horario": "Miércoles y viernes · 17:00–19:00",
        "estado": "consultar"
      }
    ],
    "obras": [
      {
        "id": "pintura-3",
        "titulo": "Color en el taller",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/pintura-3.webp",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com",
        "video": null,
        "estado": "consulta",
        "precio": null
      }
    ]
  },
  {
    "id": "ilustracion",
    "nombre": "Lucía Navarro",
    "iniciales": "LN",
    "disciplina": "Ilustración",
    "especialidad": "Dibujo e ilustración digital",
    "bio": "Historias que comienzan con un trazo.",
    "experiencia": "Perfil de demostración. Trayectoria y formación por confirmar.",
    "disponibilidad": "Martes y jueves · 10:00–12:00 · hora de Ciudad de México.",
    "obras": [
      {
        "id": "ilustracion-1",
        "titulo": "Cuaderno botánico",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/ilustracion-1.webp",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com/photos/SqhDv3RK60Y",
        "video": null,
        "estado": "disponible",
        "precio": null
      },
      {
        "id": "ilustracion-2",
        "titulo": "Estudio de flores",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/ilustracion-2.webp",
        "credito": "Europeana / Rijksmuseum",
        "fuente": "https://unsplash.com/photos/OMHfsDYZZwI",
        "video": null,
        "estado": "consulta",
        "precio": null
      }
    ],
    "clases": [
      {
        "titulo": "Ilustración botánica",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "60 minutos",
        "precio": 290,
        "descripcion": "Observa formas naturales y crea tu primera lámina ilustrada.",
        "horario": "Martes y jueves · 10:00–12:00",
        "estado": "consultar"
      },
      {
        "titulo": "Narrativa visual",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "75 minutos",
        "precio": 360,
        "descripcion": "Desarrolla una pequeña historia mediante imágenes.",
        "horario": "Miércoles y viernes · 17:00–19:00",
        "estado": "consultar"
      }
    ],
    "estadoAgenda": "Consultar cupo",
    "imagen": "./assets/media/ilustracion-1.webp"
  },
  {
    "id": "ilustracion-2",
    "nombre": "Mariana Torres",
    "iniciales": "MT",
    "disciplina": "Ilustración",
    "especialidad": "Retrato y dibujo en grafito",
    "bio": "Aprende a observar proporciones, luces y sombras con ejercicios de dibujo.",
    "experiencia": "Perfil ilustrativo para mostrar el catálogo. Trayectoria pendiente de completar.",
    "disponibilidad": "Miércoles y viernes · 17:00–19:00 · hora de Ciudad de México.",
    "estadoAgenda": "Consultar cupo",
    "imagen": "./assets/media/ilustracion-3.webp",
    "clases": [
      {
        "titulo": "Retrato en grafito",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "60 minutos",
        "precio": 310,
        "descripcion": "Trabaja proporciones y volúmenes con lápiz.",
        "horario": "Miércoles y viernes · 17:00–19:00",
        "estado": "consultar"
      },
      {
        "titulo": "Luz y sombra en el dibujo",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "75 minutos",
        "precio": 370,
        "descripcion": "Construye profundidad y textura con escalas tonales.",
        "horario": "Sábados · 10:00–13:00",
        "estado": "consultar"
      }
    ],
    "obras": [
      {
        "id": "ilustracion-3",
        "titulo": "Mirada en grafito",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/ilustracion-3.webp",
        "credito": "Ali Othman / Unsplash",
        "fuente": "https://unsplash.com/photos/2DCdqKYJPzA",
        "video": null,
        "estado": "consulta",
        "precio": null
      }
    ]
  },
  {
    "id": "fotografia",
    "nombre": "Mateo Luna",
    "iniciales": "ML",
    "disciplina": "Fotografía",
    "especialidad": "Composición y narrativa visual",
    "bio": "Aprende a mirar desde otra perspectiva.",
    "experiencia": "Perfil de demostración. Trayectoria y formación por confirmar.",
    "disponibilidad": "Miércoles y viernes · 17:00–19:00 · hora de Ciudad de México.",
    "obras": [
      {
        "id": "fotografia-1",
        "titulo": "Reflejos alpinos",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/fotografia-1.webp",
        "credito": "Philip Ho / Unsplash",
        "fuente": "https://unsplash.com/photos/2HFe1VFPlyQ",
        "video": null,
        "estado": "disponible",
        "precio": null
      },
      {
        "id": "fotografia-2",
        "titulo": "El lago y la luz",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/fotografia-2.webp",
        "credito": "Luke Thornton / Unsplash",
        "fuente": "https://unsplash.com/photos/sZOGy7-R98c",
        "video": null,
        "estado": "consulta",
        "precio": null
      }
    ],
    "clases": [
      {
        "titulo": "Fotografía con tu celular",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "60 minutos",
        "precio": 280,
        "descripcion": "Aprovecha luz natural, enfoque y composición con el equipo que tienes.",
        "horario": "Miércoles y viernes · 17:00–19:00",
        "estado": "consultar"
      },
      {
        "titulo": "Composición fotográfica",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "75 minutos",
        "precio": 350,
        "descripcion": "Construye imágenes con intención visual.",
        "horario": "Sábados · 10:00–13:00",
        "estado": "consultar"
      }
    ],
    "estadoAgenda": "Consultar cupo",
    "imagen": "./assets/media/fotografia-1.webp"
  },
  {
    "id": "fotografia-2",
    "nombre": "Daniel Robles",
    "iniciales": "DR",
    "disciplina": "Fotografía",
    "especialidad": "Fotografía de paisaje y edición",
    "bio": "De la luz natural a la edición: construye una serie fotográfica con intención.",
    "experiencia": "Perfil ilustrativo para mostrar el catálogo. Trayectoria pendiente de completar.",
    "disponibilidad": "Sábados · 10:00–13:00 · hora de Ciudad de México.",
    "estadoAgenda": "Próxima apertura",
    "imagen": "./assets/media/fotografia-3.webp",
    "clases": [
      {
        "titulo": "Paisaje y luz natural",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "60 minutos",
        "precio": 330,
        "descripcion": "Aprende a leer la luz y preparar una sesión de paisaje.",
        "horario": "Sábados · 10:00–13:00",
        "estado": "consultar"
      },
      {
        "titulo": "Edición de fotografía",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "90 minutos",
        "precio": 420,
        "descripcion": "Organiza un flujo básico de edición y color.",
        "horario": "Lunes y miércoles · 18:00–20:00",
        "estado": "consultar"
      }
    ],
    "obras": [
      {
        "id": "fotografia-3",
        "titulo": "Montaña y pradera",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/fotografia-3.webp",
        "credito": "Jeremy Cai / Unsplash",
        "fuente": "https://unsplash.com/photos/ucYWe5mzTMU",
        "video": null,
        "estado": "consulta",
        "precio": null
      }
    ]
  },
  {
    "id": "escultura",
    "nombre": "Renata Solís",
    "iniciales": "RS",
    "disciplina": "Escultura",
    "especialidad": "Modelado y volumen",
    "bio": "Ideas que toman forma y volumen.",
    "experiencia": "Perfil de demostración. Trayectoria y formación por confirmar.",
    "disponibilidad": "Sábados · 10:00–13:00 · hora de Ciudad de México.",
    "obras": [
      {
        "id": "escultura-1",
        "titulo": "Forma en el espacio",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/escultura-1.webp",
        "credito": "Emmy Gaddy / Unsplash",
        "fuente": "https://unsplash.com/photos/D5dU1TjYpFg",
        "video": null,
        "estado": "disponible",
        "precio": null
      },
      {
        "id": "escultura-2",
        "titulo": "Rostros en diálogo",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/escultura-2.webp",
        "credito": "Barry Bibbs / Unsplash",
        "fuente": "https://unsplash.com/photos/kTq6tsZZ0tU",
        "video": null,
        "estado": "consulta",
        "precio": null
      }
    ],
    "clases": [
      {
        "titulo": "Modelado desde cero",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "90 minutos",
        "precio": 390,
        "descripcion": "Explora volúmenes con ejercicios de modelado manual.",
        "horario": "Sábados · 10:00–13:00",
        "estado": "consultar"
      },
      {
        "titulo": "Estudio de la figura",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "90 minutos",
        "precio": 470,
        "descripcion": "Trabaja proporción, gesto y equilibrio.",
        "horario": "Lunes y miércoles · 18:00–20:00",
        "estado": "consultar"
      }
    ],
    "estadoAgenda": "Próxima apertura",
    "imagen": "./assets/media/escultura-1.webp"
  },
  {
    "id": "escultura-2",
    "nombre": "Tomás Vidal",
    "iniciales": "TV",
    "disciplina": "Escultura",
    "especialidad": "Escultura contemporánea",
    "bio": "Explora cómo dialogan el material, el espacio y las formas.",
    "experiencia": "Perfil ilustrativo para mostrar el catálogo. Trayectoria pendiente de completar.",
    "disponibilidad": "Lunes y miércoles · 18:00–20:00 · hora de Ciudad de México.",
    "estadoAgenda": "Consultar cupo",
    "imagen": "./assets/media/escultura-3.webp",
    "clases": [
      {
        "titulo": "Escultura y espacio",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "75 minutos",
        "precio": 360,
        "descripcion": "Construye formas mediante maquetas y materiales accesibles.",
        "horario": "Lunes y miércoles · 18:00–20:00",
        "estado": "consultar"
      },
      {
        "titulo": "Volumen contemporáneo",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "90 minutos",
        "precio": 460,
        "descripcion": "Desarrolla un proyecto de forma y vacío.",
        "horario": "Martes y jueves · 10:00–12:00",
        "estado": "consultar"
      }
    ],
    "obras": [
      {
        "id": "escultura-3",
        "titulo": "Escultura tipográfica",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/escultura-3.webp",
        "credito": "Alex Quezada / Unsplash",
        "fuente": "https://unsplash.com/photos/P4YTJpD6gq8",
        "video": null,
        "estado": "consulta",
        "precio": null
      }
    ]
  },
  {
    "id": "ceramica",
    "nombre": "Elena Cruz",
    "iniciales": "EC",
    "disciplina": "Cerámica",
    "especialidad": "Cerámica y modelado manual",
    "bio": "Creación con tierra, forma y paciencia.",
    "experiencia": "Perfil de demostración. Trayectoria y formación por confirmar.",
    "disponibilidad": "Lunes y miércoles · 18:00–20:00 · hora de Ciudad de México.",
    "obras": [
      {
        "id": "ceramica-1",
        "titulo": "Manos al barro",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/ceramica-1.webp",
        "credito": "Paweł Mizia / Unsplash",
        "fuente": "https://unsplash.com/photos/Yx0ge-uazyE",
        "video": null,
        "estado": "disponible",
        "precio": null
      },
      {
        "id": "ceramica-2",
        "titulo": "Colección de vasijas",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/ceramica-2.webp",
        "credito": "Chloe Bolton / Unsplash",
        "fuente": "https://unsplash.com/photos/R0qthXq3jec",
        "video": null,
        "estado": "consulta",
        "precio": null
      }
    ],
    "clases": [
      {
        "titulo": "Primeras formas en barro",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "90 minutos",
        "precio": 350,
        "descripcion": "Aprende pellizco, rollos y uniones mediante una pieza pequeña.",
        "horario": "Lunes y miércoles · 18:00–20:00",
        "estado": "consultar"
      },
      {
        "titulo": "Texturas en cerámica",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "90 minutos",
        "precio": 430,
        "descripcion": "Diseña superficies y acabados mediante pruebas.",
        "horario": "Martes y jueves · 10:00–12:00",
        "estado": "consultar"
      }
    ],
    "estadoAgenda": "Consultar cupo",
    "imagen": "./assets/media/ceramica-1.webp"
  },
  {
    "id": "ceramica-2",
    "nombre": "Paula Méndez",
    "iniciales": "PM",
    "disciplina": "Cerámica",
    "especialidad": "Cerámica utilitaria",
    "bio": "Modela objetos cotidianos y descubre acabados y texturas.",
    "experiencia": "Perfil ilustrativo para mostrar el catálogo. Trayectoria pendiente de completar.",
    "disponibilidad": "Martes y jueves · 10:00–12:00 · hora de Ciudad de México.",
    "estadoAgenda": "Consultar cupo",
    "imagen": "./assets/media/ceramica-3.webp",
    "clases": [
      {
        "titulo": "Tu primera taza",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "90 minutos",
        "precio": 380,
        "descripcion": "Modela una forma utilitaria a mano.",
        "horario": "Martes y jueves · 10:00–12:00",
        "estado": "consultar"
      },
      {
        "titulo": "Diseño de una colección",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "90 minutos",
        "precio": 450,
        "descripcion": "Desarrolla piezas con una identidad visual común.",
        "horario": "Miércoles y viernes · 17:00–19:00",
        "estado": "consultar"
      }
    ],
    "obras": [
      {
        "id": "ceramica-3",
        "titulo": "Formas en blanco",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/ceramica-3.webp",
        "credito": "Yana Hurska / Unsplash",
        "fuente": "https://unsplash.com/photos/rAVSjxz6mNo",
        "video": null,
        "estado": "consulta",
        "precio": null
      }
    ]
  },
  {
    "id": "textil",
    "nombre": "Sofía Vega",
    "iniciales": "SV",
    "disciplina": "Arte textil",
    "especialidad": "Bordado y composición textil",
    "bio": "Hilos, patrones y tradición contemporánea.",
    "experiencia": "Perfil de demostración. Trayectoria y formación por confirmar.",
    "disponibilidad": "Martes y jueves · 10:00–12:00 · hora de Ciudad de México.",
    "obras": [
      {
        "id": "textil-1",
        "titulo": "Bordado sobre azul",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/textil-1.webp",
        "credito": "Thea Hdc / Unsplash",
        "fuente": "https://unsplash.com/photos/7Y4o5dmxzIQ",
        "video": null,
        "estado": "disponible",
        "precio": null
      },
      {
        "id": "textil-2",
        "titulo": "Flores en bastidor",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/textil-2.webp",
        "credito": "Truong Tuyet Ly / Unsplash",
        "fuente": "https://unsplash.com/photos/a4RgqU5jbus",
        "video": null,
        "estado": "consulta",
        "precio": null
      }
    ],
    "clases": [
      {
        "titulo": "Bordado botánico",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "75 minutos",
        "precio": 290,
        "descripcion": "Conoce puntadas básicas y construye un motivo floral.",
        "horario": "Martes y jueves · 10:00–12:00",
        "estado": "consultar"
      },
      {
        "titulo": "Bordado con volumen",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "90 minutos",
        "precio": 360,
        "descripcion": "Explora relieve, textura y combinación de puntadas.",
        "horario": "Miércoles y viernes · 17:00–19:00",
        "estado": "consultar"
      }
    ],
    "estadoAgenda": "Consultar cupo",
    "imagen": "./assets/media/textil-1.webp"
  },
  {
    "id": "textil-2",
    "nombre": "Isabel Herrera",
    "iniciales": "IH",
    "disciplina": "Arte textil",
    "especialidad": "Tejido y diseño con fibras",
    "bio": "Experimenta con hilos, ritmos visuales y técnicas de tejido.",
    "experiencia": "Perfil ilustrativo para mostrar el catálogo. Trayectoria pendiente de completar.",
    "disponibilidad": "Miércoles y viernes · 17:00–19:00 · hora de Ciudad de México.",
    "estadoAgenda": "Próxima apertura",
    "imagen": "./assets/media/textil-3.webp",
    "clases": [
      {
        "titulo": "Tejido desde cero",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "75 minutos",
        "precio": 280,
        "descripcion": "Conoce materiales y puntos para comenzar un proyecto.",
        "horario": "Miércoles y viernes · 17:00–19:00",
        "estado": "consultar"
      },
      {
        "titulo": "Color y fibras",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "90 minutos",
        "precio": 350,
        "descripcion": "Diseña una pequeña composición con distintas texturas.",
        "horario": "Sábados · 10:00–13:00",
        "estado": "consultar"
      }
    ],
    "obras": [
      {
        "id": "textil-3",
        "titulo": "Paleta de fibras",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/textil-3.webp",
        "credito": "June Gathercole / Unsplash",
        "fuente": "https://unsplash.com/photos/64yO1CCQAY8",
        "video": null,
        "estado": "consulta",
        "precio": null
      }
    ]
  },
  {
    "id": "musica",
    "nombre": "Diego Herrera",
    "iniciales": "DH",
    "disciplina": "Música",
    "especialidad": "Guitarra y expresión musical",
    "bio": "Ritmo, escucha y expresión.",
    "experiencia": "Perfil de demostración. Trayectoria y formación por confirmar.",
    "disponibilidad": "Miércoles y viernes · 17:00–19:00 · hora de Ciudad de México.",
    "obras": [
      {
        "id": "musica-1",
        "titulo": "Sesión de guitarra",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/musica-1.webp",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com",
        "video": null,
        "estado": "exhibicion",
        "precio": null
      },
      {
        "id": "musica-2",
        "titulo": "Cuerdas y armonía",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/musica-2.webp",
        "credito": "Chandler Cruttenden / Unsplash",
        "fuente": "https://unsplash.com/photos/3vgwkVU2S_0",
        "video": null,
        "estado": "exhibicion",
        "precio": null
      }
    ],
    "clases": [
      {
        "titulo": "Guitarra desde cero",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "60 minutos",
        "precio": 320,
        "descripcion": "Aprende postura, afinación y tus primeros acordes.",
        "horario": "Miércoles y viernes · 17:00–19:00",
        "estado": "consultar"
      },
      {
        "titulo": "Acompañamiento acústico",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "60 minutos",
        "precio": 380,
        "descripcion": "Practica ritmos y cambios de acordes con una canción.",
        "horario": "Sábados · 10:00–13:00",
        "estado": "consultar"
      }
    ],
    "estadoAgenda": "Próxima apertura",
    "imagen": "./assets/media/musica-1.webp"
  },
  {
    "id": "musica-2",
    "nombre": "Andrea Campos",
    "iniciales": "AC",
    "disciplina": "Música",
    "especialidad": "Piano y lenguaje musical",
    "bio": "Conecta melodía y armonía a través de piezas y ejercicios musicales.",
    "experiencia": "Perfil ilustrativo para mostrar el catálogo. Trayectoria pendiente de completar.",
    "disponibilidad": "Sábados · 10:00–13:00 · hora de Ciudad de México.",
    "estadoAgenda": "Consultar cupo",
    "imagen": "./assets/media/musica-3.webp",
    "clases": [
      {
        "titulo": "Piano para comenzar",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "60 minutos",
        "precio": 350,
        "descripcion": "Ubica notas y toca una melodía sencilla.",
        "horario": "Sábados · 10:00–13:00",
        "estado": "consultar"
      },
      {
        "titulo": "Armonía aplicada al piano",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "75 minutos",
        "precio": 430,
        "descripcion": "Combina acordes y melodías mediante ejercicios prácticos.",
        "horario": "Lunes y miércoles · 18:00–20:00",
        "estado": "consultar"
      }
    ],
    "obras": [
      {
        "id": "musica-3",
        "titulo": "Dentro del estudio",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/musica-3.webp",
        "credito": "Unsplash",
        "fuente": "https://unsplash.com",
        "video": null,
        "estado": "exhibicion",
        "precio": null
      }
    ]
  },
  {
    "id": "danza",
    "nombre": "Camila Ríos",
    "iniciales": "CR",
    "disciplina": "Danza",
    "especialidad": "Ballet y expresión corporal",
    "bio": "El cuerpo como lenguaje artístico.",
    "experiencia": "Perfil de demostración. Trayectoria y formación por confirmar.",
    "disponibilidad": "Sábados · 10:00–13:00 · hora de Ciudad de México.",
    "obras": [
      {
        "id": "danza-1",
        "titulo": "Líneas de ballet",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/danza-1.webp",
        "credito": "Kazuo Ota / Unsplash",
        "fuente": "https://unsplash.com/photos/ynDNHq842_s",
        "video": null,
        "estado": "exhibicion",
        "precio": null
      },
      {
        "id": "danza-2",
        "titulo": "Equilibrio escénico",
        "tipo": "Fotografía de referencia",
        "imagen": "./assets/media/danza-2.webp",
        "credito": "Knight Duong / Unsplash",
        "fuente": "https://unsplash.com/photos/NNORtUpWt-M",
        "video": null,
        "estado": "exhibicion",
        "precio": null
      }
    ],
    "clases": [
      {
        "titulo": "Ballet para adultos",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "60 minutos",
        "precio": 280,
        "descripcion": "Trabaja postura, coordinación y musicalidad en un espacio despejado.",
        "horario": "Sábados · 10:00–13:00",
        "estado": "consultar"
      },
      {
        "titulo": "Musicalidad y expresión",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "60 minutos",
        "precio": 330,
        "descripcion": "Relaciona movimiento y fraseo musical con ejercicios guiados.",
        "horario": "Lunes y miércoles · 18:00–20:00",
        "estado": "consultar"
      }
    ],
    "estadoAgenda": "Consultar cupo",
    "imagen": "./assets/media/danza-1.webp"
  },
  {
    "id": "danza-2",
    "nombre": "Nicolás Duarte",
    "iniciales": "ND",
    "disciplina": "Danza",
    "especialidad": "Danza contemporánea",
    "bio": "Explora el movimiento, el ritmo y la improvisación desde casa.",
    "experiencia": "Perfil ilustrativo para mostrar el catálogo. Trayectoria pendiente de completar.",
    "disponibilidad": "Lunes y miércoles · 18:00–20:00 · hora de Ciudad de México.",
    "estadoAgenda": "Consultar cupo",
    "imagen": "./assets/media/danza-2.webp",
    "clases": [
      {
        "titulo": "Danza contemporánea inicial",
        "modalidad": "En línea",
        "nivel": "Principiantes",
        "duracion": "60 minutos",
        "precio": 290,
        "descripcion": "Explora movilidad, coordinación y pequeñas secuencias.",
        "horario": "Lunes y miércoles · 18:00–20:00",
        "estado": "consultar"
      },
      {
        "titulo": "Improvisación y movimiento",
        "modalidad": "En línea",
        "nivel": "Intermedio",
        "duracion": "75 minutos",
        "precio": 350,
        "descripcion": "Construye frases de movimiento a partir de consignas creativas.",
        "horario": "Martes y jueves · 10:00–12:00",
        "estado": "consultar"
      }
    ],
    "obras": [
      {
        "id": "danza-3",
        "titulo": "Fragmento de ensayo de ballet",
        "tipo": "Video de referencia",
        "imagen": "./assets/media/danza-3.webp",
        "credito": "cottonbro studio / Pexels",
        "fuente": "https://www.pexels.com/video/woman-dancing-ballet-in-room-10637342/",
        "video": "./assets/media/danza-3.mp4",
        "estado": "exhibicion",
        "precio": null
      }
    ]
  }
];
