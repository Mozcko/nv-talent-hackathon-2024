import {
  fotoPerfil_alejandroPerez,
  fotoPerfil_anaGarcia,
  fotoPerfil_carlosMartinez,
  fotoPerfil_ecoClean,
  fotoPerfil_TlapaleriaLola,
  fotoPerfil_abarrotesLuna,
  fotoPerfil_materialesConstruyendo,
  fotoPerfil_saborUrbano,
  fotoPerfil_floreriaSunny,
  arreglo_girasoles,
  arreglo_rosas,
  centro_mesa,
  nochebuena,
  ramo_rosas,
  floreria,
  insignia2,
} from '../assets'

export const user_tags = [
    {
        text: "Flores",
        color: "bg-fill-300",
        pill: true
    },
    {
        text: "Perecederos",
        color: "bg-fill-300",
        pill: true
    },
    {
        text: "A Domicilio",
        color: "bg-fill-300",
        pill: true
    },
    {
        text: "Eventos",
        color: "bg-fill-300",
        pill: true
    },
    {
        text: "Arreglos",
        color: "bg-fill-300",
        pill: true
    },
    {
        text: "Ramos",
        color: "bg-fill-300",
        pill: true
    },
    {
        text: "Independiente",
        color: "bg-fill-300",
        pill: true
    },
    {
        text: "Abierto a Colaborar",
        color: "bg-fill-300",
        pill: true
    },
]

export const user_cardData = [
    {
      "title": "Nueva florería abierta",
      "description": "Una nueva oportunidad surge, mi negocio crece y con ello mis sueños de seguir adelante",
      "imageSrc": floreria
    },
    {
        "title": "Llego San Valentín",
        "description": "El amor está en el aire y las rosas lo saben, ya llegó un cargamento lleno de rosas para ramos buchones no te quedes sin el tuyo",
        "imageSrc": ramo_rosas
    },
    {
        "title": "Llegó navidad",
        "description": "Llegó navidad y por eso compré muchas nochebuenas, no te pierdas la oportunidad de tu también comprar las tuyas",
        "imageSrc": nochebuena
    },
    {
      "title": 'Conseguí mi insignia "desarrollate como lider"',
      "description": "Gracias @CoppelEmprende por darme las herramientas para crecer mi negocio!!!!",
      "imageSrc": insignia2
    },
    {
        "title": "Se acercan tus 15 años?",
        "description": "Los centros de mesa florales son hermosos y tú puedes tener los mejores en tu fiesta de 15 años",
        "imageSrc": centro_mesa
    },
    {
      "title": "El día de las flores amarillas está cerca",
      "description": "Los girasoles son flores hermosas. No pierdas la oportunidad de regalar un arreglo con ellos en ese día",
      "imageSrc": arreglo_girasoles
    },
    {
      "title": "Las madres merecen ser felices en su día",
      "description": "Haz feliz a tu mami en su día especial con este arreglo de rosas",
      "imageSrc": arreglo_rosas
    },
]

export const postsData = [
    {
      id: 1,
      user: {
        name: "Florería Sunny",
        image: fotoPerfil_floreriaSunny,
        job: "Floreria",
        keys: 40,
        tags: {
          city: "Monterrey",
          category: "Flores",
          subcategory: "Flores individuales",
          delivery: "En local",
          product: "Rosas rojas",
          // Add more tag categories as needed
        }
      }
    },
    {
      id: 2,
      user: {
        name: "Abarrotes Luna",
        image: fotoPerfil_abarrotesLuna,
        job: "Tienda de Abarrotes",
        keys: 30,
        tags: {
          city: "Xalapa",
          category: "Abarrotes",
          subcategory: "Miscelanea",
          delivery: "En local",
          product: "Leche",
          // Add more tag categories as needed
        }
      }
    },
    {
      id: 3,
      user: {
        name: "Café Sabor Urbano",
        image: fotoPerfil_saborUrbano,
        job: "Cafetería",
        keys: 10,
        tags: {
          city: "Xalapa",
          category: "Alimentos y bebidas",
          subcategory: "Cafetería",
          delivery: "Delivery",
          product: "Café de especialidad",
          // Add more tag categories as needed
        }
      }
    },
    {
      id: 4,
      user: {
        name: "Eco Clean",
        image: fotoPerfil_ecoClean,
        job: "Productos de Limpieza sustentables",
        keys: 70,
        tags: {
          city: "Mérida",
          category: "Jarcería",
          subcategory: "Sustentable",
          delivery: "MercadoLibre",
          product: "Limpiador Multiusos",
          // Add more tag categories as needed
        }
      }
    },
    {
      id: 5,
      user: {
        name: "Materiales Construyendo",
        image: fotoPerfil_materialesConstruyendo,
        job: "Materiales",
        keys: 40,
        tags: {
          city: "Tijuana",
          category: "Materiales de Obra",
          subcategory: "Construcción",
          delivery: "Flete",
          product: "Cemento"
          // Add more tag categories as needed
        }
      }
    },
    {
      id: 6,
      user: {
        name: "Tlapalería Lola",
        image: fotoPerfil_TlapaleriaLola,
        job: "Comercio",
        keys: 40,
        tags: {
          city: "Ciudad Juárez",
          category: "Materiales",
          subcategory: "Tlapalería",
          delivery: "En local",
          product: "Tornillo"
          // Add more tag categories as needed
        }
      }
    },
    {
      id: 7,
      user: {
        name: "Alejandro Pérez",
        image: fotoPerfil_alejandroPerez,
        job: "Pastelero Independiente",
        keys: 50,
        tags: {
          city: "Tijuana",
          category: "Repostería",
          subcategory: "Personalizada",
          delivery: "A Domicilio",
          product: "Pastel de Bodas"
          // Add more tag categories as needed
        }
      }
    },
    {
      id: 8,
      user: {
        name: "Ana García",
        image: fotoPerfil_anaGarcia,
        job: "Diseñadora Freelance",
        keys: 30,
        tags: {
          city: "Ciudad Juárez",
          category: "Dibujo por  Computadora",
          subcategory: "Renders 3D",
          delivery: "Digital",
          product: "Renders de construcción"
          // Add more tag categories as needed
        }
      }
    },
    {
      id: 9,
      user: {
        name: "Carlos Martínez",
        image: fotoPerfil_carlosMartinez,
        job: "Hojalatero",
        keys: 100,
        tags: {
          city: "Cancún",
          category: "Automotriz",
          subcategory: "Hojalatería y Pintura",
          delivery: "En local",
          product: "Pintura"
          // Add more tag categories as needed
        }
      }
    },
  ];