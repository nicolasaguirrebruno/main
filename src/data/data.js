import poncho from "../img/poncho-azul.jpg";

export const chales = [
  {
    id: new Date().getTime(),
    nombre: "Poncho Azul",
    categoria: "Vestir",
    caracteristicas: [
      "Diseño en Punto Tafetán.",
      "Chaleco corto Mujer",
      "Combinación de lanas Fantasías de texturas y colores.",
      "Hilado a mano.",
      "Tejida en Telar Cuadrado de 30cm.",
      "Libres de colorantes químicos sin intervención de tintes.",
      "DISEÑOS ÚNICOS,  EXCLUSIVOS.",
    ],
    descripcion: `Un legado de años de tradición adaptados a nuestra época y que cada mujer hará suyo.

   
    
  
    30 hs dedicado a la confección de la prenda por manos artesanales que continuando las tradiciones de los
    pueblos Originarios.`,
    precio: `${Math.floor(Math.random() * (220 - 160 + 1) + 160)}`,
    image: [
      "https://drive.google.com/uc?export=view&id=1TEdhGuwK87odXYxqwTqdo5IRS0kQ1SS5",
      "/src/img/poncho-azul-2.jpeg",
      "/src/img/poncho-azul-3.jpeg",
    ],

    rating: `${Math.floor(Math.random() * 5) + 1}`,
  },
  {
    id: new Date().getTime() * 2,
    nombre: "Pampa",
    categoria: "Mantas",
    caracteristicas: [
      "LANA DE OVEJA 100% NATURAL",
      "HILADA A MANO",
      "TEJIDA EN TELAR DE PEINE ANDINO.",
      "lIBRES DE COLORANTES QUÍMICOS SIN INTERVENCIÓN DE TINTES.",
      "DISEÑOS ÚNICOS, EXCLUSIVOS.",
      "CUMPLEAÑOS, ANIVERSARIOS, EVENTOS, ES UN REGALO IDEAL Y EXCLUSIVO.",
    ],
    descripcion: `Esta hermosa Manta de lana de oveja con finos 
    detalles en cadenas blncasen los  tonos  natural ,
     trae un lujoso diseño en urdimbre, pura lana de oveja Merino.
      `,

    precio: `${Math.floor(Math.random() * (220 - 160 + 1) + 160)}`,
    image: [`/src/img/manta-de-pie-cama-pampa.jpg`],
    rating: `${Math.floor(Math.random() * 5) + 1}`,
  },
  {
    id: new Date().getTime() * 3,
    nombre: "Chenque Gris",
    categoria: "Mantas",
    caracteristicas: [
      "LANA DE OVEJA 100% NATURAL",
      "HILADA A MANO",
      "TEJIDA EN TELAR DE PEINE ANDINO.",
      "lIBRES DE COLORANTES QUÍMICOS SIN INTERVENCIÓN DE TINTES.",
      "DISEÑOS ÚNICOS, EXCLUSIVOS.",
      "CUMPLEAÑOS, ANIVERSARIOS, EVENTOS, ES UN REGALO IDEAL Y EXCLUSIVO.",
    ],
    descripcion: `Esta hermosa Manta de lana de oveja con fina línea en blanco, trae un lujoso diseño en urdimbre, pura lana de oveja Merino. 

  `,
    precio: `${Math.floor(Math.random() * (220 - 160 + 1) + 160)}`,
    image: [`/src/img/manta-de-pie-cama-chenque.jpg`],
    rating: `${Math.floor(Math.random() * 5) + 1}`,
  },
  {
    id: new Date().getTime() * 4,
    nombre: "Pampa Visón",
    categoria: "Mantas",
    caracteristicas: [
      "LANA DE OVEJA 100% NATURAL",
      "HILADA A MANO",
      "TEJIDA EN TELAR DE PEINE ANDINO.",
      "lIBRES DE COLORANTES QUÍMICOS SIN INTERVENCIÓN DE TINTES.",
      "DISEÑOS ÚNICOS, EXCLUSIVOS.",
      "CUMPLEAÑOS, ANIVERSARIOS, EVENTOS, ES UN REGALO IDEAL Y EXCLUSIVO.",
    ],
    descripcion: `Esta hermosa Manta de lana de oveja con finos detalles en líneas de diferentes colores en los tonos Cacao y Arena, con diferente texturas de Lanas, trae un lujoso diseño en urdimbre, pura lana de oveja Merino.

  `,
    precio: `${Math.floor(Math.random() * (220 - 160 + 1) + 160)}`,
    image: [
      `/src/img/manta-de-pie-cama-vision.jpg`,
      `/src/img/manta-de-pie-cama-vision.jpg`,
      `/src/img/manta-de-pie-cama-vision.jpg`,
    ],
    rating: `${Math.floor(Math.random() * 5) + 1}`,
  },
];
