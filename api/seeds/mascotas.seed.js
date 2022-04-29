const mongoose = require('mongoose')
const Mascota = require('../models/Mascotas')

const mascotas = [
  {
    imagen:
      'https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg',
    nombre: 'Simba',
    sexo: 'Macho',
    ciudad: 'Madrid',
    proceso: 'Adoptado',
    especie: 'Gato',
    fecha: '12-04-2021',
    tamano: 'Pequeño',
    peso: 3.6,
    personality: ['Juguetón', 'Bueno con niños', 'Cauteloso', 'Tímido'],
    historia: '',
    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'No',
    identificado: 'Si',
    microchip: 'Si',
    requisitos: 'No hay requisitos especiales para adoptar a Simba',
    tasa: 120,
    envio: 'Sí se envía a otra ciudad'
  },
  {
    imagen:
      'https://www.diariodesevilla.es/2021/09/01/mascotas/Cosas-sabias-gatos_1606949991_143253883_667x375.jpg',
    nombre: 'Luna',
    sexo: 'Hembra',
    ciudad: 'Barcelona',
    proceso: 'En proceso',
    especie: 'Gato',
    fecha: '02-08-2015',
    tamano: 'Grande',
    peso: 4.4,
    personality: ['Cariñosa', 'Tranquila', 'Amable', 'Revoltosa'],
    historia: '',

    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'Si',
    identificado: 'Si',
    microchip: 'Si',

    requisitos: 'No hay requisitos especiales para adoptar a Luna',
    tasa: 125,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen:
      'https://www.latercera.com/resizer/UvfBPh1sqyoGpgeuWPdVqcZbmfU=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/3T6LCQ24TJGTVOZTDHXWLQXGJM.jpg',
    nombre: 'Snow',
    sexo: 'Macho',
    ciudad: 'Madrid',
    proceso: 'Rechazado',

    especie: 'Gato',
    fecha: '22-08-2020',
    tamano: 'Mediano',
    peso: 4,
    personality: [
      'Tranquilo',
      'Curioso',
      'Travieso',
      'Dormilón',
      'A veces maúllo...'
    ],
    historia: '',

    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'No',
    identificado: 'Si',
    microchip: 'No',

    requisitos: 'No hay requisitos especiales para adoptar a Snow',
    tasa: 120,
    envio: 'Sí se envía a otra ciudad'
  },
  {
    imagen:
      'https://blog.mascotaysalud.com/wp-content/uploads/2019/05/CACHORRO-BEAGLE.jpg',
    nombre: 'Max',
    sexo: 'Macho',
    ciudad: 'Madrid',
    proceso: 'Adoptado',

    especie: 'Perro',
    fecha: '05-01-2018',
    tamano: 'Pequeño',
    peso: 10,
    personality: ['Juguetón', 'Activo', 'Se lo come todo', 'A veces ladro...'],
    historia: '',

    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'Si',
    identificado: 'Si',
    microchip: 'Si',

    requisitos: 'No hay requisitos especiales para adoptar a Simba',
    tasa: 125,
    envio: 'Sí se envía a otra ciudad'
  },
  {
    imagen:
      'https://blog.mascotaysalud.com/wp-content/uploads/2020/05/American-Staffordshire-Terrier-rostro.jpg',
    nombre: 'Trufa',
    sexo: 'Macho',
    ciudad: 'Sevilla',
    proceso: 'En proceso',

    especie: 'Perro',
    fecha: '17-09-2019',
    tamano: 'Mediano',
    peso: 14.5,
    personality: [
      'Tranquilo',
      'Miedoso',
      'Amante del sofa',
      'De estómago sensible...'
    ],
    historia: '',

    vacunado: 'No',
    desparasitado: 'Si',
    sano: 'No',
    esterilizado: 'Si',
    identificado: 'Si',
    microchip: 'Si',

    requisitos: 'No hay requisitos especiales para adoptar a Simba',
    tasa: 125,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen:
      'https://www.hola.com/imagenes/estar-bien/20180605125130/adopcion-perros-policia-once-jubilados/0-573-351/adopta-a-un-perro-jubilado-1-t.jpg',
    nombre: 'Arya',
    sexo: 'Hembra',
    ciudad: 'Madrid',
    proceso: 'Adoptado',

    especie: 'Perro',
    fecha: '25-06-2020',
    tamano: 'Grande',
    peso: 25,
    personality: ['Buena', 'Mayor', 'Tranquila', 'Amante de la naturaleza'],
    historia: '',

    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'Si',
    identificado: 'Si',
    microchip: 'Si',

    requisitos: 'No hay requisitos especiales para adoptar a Goku',
    tasa: 125,
    envio: 'Sí se envía a otra ciudad'
  },
  {
    imagen:
      'https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/KGKTBWWDXRMKJBICPP3XW2OCWE.jpg',
    nombre: 'Bigotes',
    sexo: 'Macho',
    ciudad: 'Madrid',
    proceso: 'Adoptado',

    especie: 'Conejo',
    fecha: '10-11-2020',
    tamano: 'Pequeño',
    peso: 1,
    personality: ['Juguetón', 'Inquieto', 'Comilón'],
    historia: '',

    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'No',
    identificado: 'Si',
    microchip: 'Si',

    requisitos: 'No hay requisitos especiales para adoptar a Bigotes',
    tasa: 75,
    envio: 'Sí se envía a otra ciudad'
  },
  {
    imagen:
      'http://www.mascotahogar.com/Imagenes/wallpaper-de-un-conejo-domestico.jpg',
    nombre: 'Chispa',
    sexo: 'Hembra',
    ciudad: 'Valladolid',
    proceso: 'En proceso',

    especie: 'Conejo',
    fecha: '30-01-2019',
    tamano: 'Mediano',
    peso: 2,
    personality: ['Tranquila', 'Rápida', 'Exploradora'],
    historia: '',

    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'No',
    identificado: 'Si',
    microchip: 'Si',

    requisitos: 'No hay requisitos especiales para adoptar a Chispa',
    tasa: 75,
    envio: 'Sí se envía a otra ciudad'
  },
  {
    imagen:
      'https://veterinariadelmar.com/wp-content/uploads/2017/02/cobaya.jpg',
    nombre: 'Chili',
    sexo: 'Macho',
    ciudad: 'Barcelona',
    proceso: 'Adoptado',

    especie: 'Cobaya',
    fecha: '28-01-2021',
    tamano: 'Pequeño',
    peso: 0.5,
    personality: ['Juguetón', 'Manso', 'Cariñoso', 'Me gustan las pipas...'],
    historia: '',

    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'No',
    identificado: 'Si',
    microchip: 'Si',

    requisitos: 'No hay requisitos especiales para adoptar a Chili',
    tasa: 50,
    envio: 'Sí se envía a otra ciudad'
  },
  {
    imagen:
      'https://hips.hearstapps.com/es.h-cdn.co/mcres/images/mi-casa/terraza-jardines-porche/cobayas-sonidos/1841759-13-esl-ES/sabes-que-significan-los-sonidos-que-emite-tu-cobaya.jpg?crop=1.00xw:0.668xh;0,0.137xh&resize=1200:*',
    nombre: 'Dumbo',
    sexo: 'Macho',
    ciudad: 'Barcelona',
    proceso: 'Adoptado',

    especie: 'Cobaya',
    fecha: '15-05-2020',
    tamano: 'Pequeño',
    peso: 0.5,
    personality: ['Dormilón', 'Tímdo', 'Miedoso'],
    historia: '',

    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'No',
    identificado: 'Si',
    microchip: 'Si',

    requisitos: 'No hay requisitos especiales para adoptar a Dumbo',
    tasa: 50,
    envio: 'Sí se envía a otra ciudad'
  },
  {
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5NssPbim_h-s2cGA7rDKRY-JHK4z-ly-kg&usqp=CAU',
    nombre: 'Rambo',
    sexo: 'Macho',
    ciudad: 'Madrid',
    proceso: 'Rechazado',

    especie: 'Pequeño mamifero',
    fecha: '20-01-2022',
    tamano: 'Pequeño',
    peso: 0.7,
    personality: ['Nervioso', 'Juguetón', 'A veces muerdo...'],
    historia: '',

    vacunado: 'No',
    desparasitado: 'No',
    sano: 'Si',
    esterilizado: 'No',
    identificado: 'Si',
    microchip: 'No',

    requisitos: 'No hay requisitos especiales para adoptar a Rambo',
    tasa: 50,
    envio: 'Sí se envía a otra ciudad'
  },
  {
    imagen: 'https://k60.kn3.net/taringa/C/8/0/6/B/6/gabrieltarin/D7F.jpg',
    nombre: 'Vampy',
    sexo: 'Macho',
    ciudad: 'Valencia',
    proceso: 'Adoptado',

    especie: 'Pequeño mamifero',
    fecha: '05-06-2021',
    tamano: 'Pequeño',
    peso: 1,
    personality: ['Buen comedor', 'Cariñoso', 'Dormilón'],
    historia: '',

    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'No',
    identificado: 'Si',
    microchip: 'Si',

    requisitos: 'No hay requisitos especiales para adoptar a Vampy',
    tasa: 50,
    envio: 'Sí se envía a otra ciudad'
  },
  {
    imagen:
      'https://aragohv.com/wp-content/uploads/2016/05/15_El-hur%C3%B3n.jpg',
    nombre: 'Lili',
    sexo: 'Hembra',
    ciudad: 'Barcelona',
    proceso: 'Adoptado',

    especie: 'Huron',
    fecha: '12-07-2020',
    tamano: 'Mediano',
    peso: 1.2,
    personality: ['Juguetona', 'Inquieta', 'Aventurera'],
    historia: '',

    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'No',
    identificado: 'Si',
    microchip: 'Si',

    requisitos: 'No hay requisitos especiales para adoptar a Lili',
    tasa: 75,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen: 'https://www.vetcon.es/wp-content/uploads/2020/05/huron-5.jpg',
    nombre: 'Brenda',
    sexo: 'Hembra',
    ciudad: 'Madrid',
    proceso: 'En proceso',

    especie: 'Huron',
    fecha: '11-01-2022',
    tamano: 'Pequeño',
    peso: 0.9,
    personality: ['Curiosa', 'Dormilona', 'De buen comer', 'Graciosa'],
    historia: '',

    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'No',
    identificado: 'Si',
    microchip: 'Si',

    requisitos: 'No hay requisitos especiales para adoptar a Brenda',
    tasa: 50,
    envio: 'Sí se envía a otra ciudad'
  },
  {
    imagen: 'https://www.anipedia.net/imagenes/pez-payaso.jpg',
    nombre: 'Nemo',
    sexo: 'Macho',
    ciudad: 'Pontevedra',
    proceso: 'En proceso',

    especie: 'Pez',
    fecha: '02-02-2021',
    tamano: 'Pequeño',
    peso: 0.1,
    personality: '',
    historia: '',

    vacunado: '',
    desparasitado: '',
    sano: 'Si',
    esterilizado: '',
    identificado: '',
    microchip: '',

    requisitos: 'No hay requisitos especiales para adoptar a Nemo',
    tasa: 20,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen:
      'https://www.aquariumcostadealmeria.com/wp-content/uploads/2018/01/pez-6.jpg',
    nombre: 'Nick',
    sexo: 'Macho',
    ciudad: 'Barcelona',
    proceso: 'Adoptado',

    especie: 'Pez',
    fecha: '05-01-2021',
    tamano: 'Pequeño',
    peso: '',
    personality: '',
    historia: '',

    vacunado: '',
    desparasitado: '',
    sano: 'Si',
    esterilizado: '',
    identificado: '',
    microchip: '',

    requisitos: 'No hay requisitos especiales para adoptar a Nick',
    tasa: 20,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen:
      'https://www.hola.com/imagenes/estar-bien/20201021177701/pez-betta-caracteristicas-cuidados/0-880-714/pez-betta-t.jpg',
    nombre: 'Ami',
    sexo: 'Hembra',
    ciudad: 'Barcelona',
    proceso: 'Adoptado',

    especie: 'Pez',
    fecha: '08-05-2021',
    tamano: 'Pequeño',
    peso: '',
    personality: '',
    historia: '',

    vacunado: '',
    desparasitado: '',
    sano: 'Si',
    esterilizado: '',
    identificado: '',
    microchip: '',

    requisitos: 'No hay requisitos especiales para adoptar a Ami',
    tasa: 20,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen:
      'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/08/17/800px-dendroaspis-polylepis-14.jpeg',
    nombre: 'Susan',
    sexo: 'Hembra',
    ciudad: 'Madrid',
    proceso: 'Adoptado',

    especie: 'An',
    fecha: '23-01-2020',
    tamano: 'Mediano',
    peso: '2',
    personality: ['Cariñosa', 'Tranquila'],
    historia: '',

    vacunado: '',
    desparasitado: '',
    sano: 'Si',
    esterilizado: '',
    identificado: 'Si',
    microchip: '',

    requisitos: 'No hay requisitos especiales para adoptar a Susan',
    tasa: 125,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen:
      'https://sitiodemascotas.com/wp-content/uploads/2019/08/plantasterrario.jpg',
    nombre: 'Leonardo',
    sexo: 'Macho',
    ciudad: 'Madrid',
    proceso: 'En proceso',

    especie: 'Reptil',
    fecha: '29-11-2019',
    tamano: 'Grande',
    peso: '3',
    personality: ['Con carácter', 'Tranquilo', 'Amante de la luz solar'],
    historia: '',

    vacunado: '',
    desparasitado: '',
    sano: 'Si',
    esterilizado: '',
    identificado: 'Si',
    microchip: '',

    requisitos: 'No hay requisitos especiales para adoptar a Leonardo',
    tasa: 125,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Trachemys_Scripta_Scripta_%28Tortuga_de_Orejas_Amarillas%29.jpg/1200px-Trachemys_Scripta_Scripta_%28Tortuga_de_Orejas_Amarillas%29.jpg',
    nombre: 'Lola',
    sexo: 'Hembra',
    ciudad: 'Madrid',
    proceso: 'En proceso',

    especie: 'Reptil',
    fecha: '13-12-2021',
    tamano: 'Pequeño',
    peso: '0.5',
    personality: ['Graciosa', 'Movida', 'Con carácter', 'Cabezota'],
    historia: '',

    vacunado: '',
    desparasitado: '',
    sano: 'Si',
    esterilizado: '',
    identificado: 'Si',
    microchip: '',

    requisitos: 'No hay requisitos especiales para adoptar a Lola',
    tasa: 125,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen:
      'https://i.pinimg.com/236x/9b/c8/63/9bc8633972a4b25ec657ff865fe550ee.jpg',
    nombre: 'Bob',
    sexo: 'Macho',
    ciudad: 'Madrid',
    proceso: 'En proceso',

    especie: 'Anfibio',
    fecha: '16-02-2020',
    tamano: 'Pequeño',
    peso: '0.4',
    personality: [
      'Juguetón',
      'Gracioso',
      'De buen comer',
      'A veces hago ruido...'
    ],
    historia: '',

    vacunado: '',
    desparasitado: '',
    sano: 'Si',
    esterilizado: '',
    identificado: 'Si',
    microchip: '',

    requisitos: 'No hay requisitos especiales para adoptar a Lola',
    tasa: 75,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen:
      'https://www.faunia.es/content/dam/fau/images/descubre-faunia/planea-tu-visita/animales/anfibios-y-reptiles/sapo-gigante/Sapo-gigante-Animales-Faunia-main.jpg.transform/rendition-sm/image.jpg',
    nombre: 'Goliat',
    sexo: 'Macho',
    ciudad: 'Valencia',
    proceso: 'Rechazado',

    especie: 'Anfibio',
    fecha: '29-01-2018',
    tamano: 'Mediano',
    peso: '0.9',
    personality: ['Tranquilo', 'De buen comer', 'Observador'],
    historia: '',

    vacunado: '',
    desparasitado: '',
    sano: 'Si',
    esterilizado: '',
    identificado: 'Si',
    microchip: '',

    requisitos: 'No hay requisitos especiales para adoptar a Goliat',
    tasa: 75,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen:
      'https://www.mundoanimalia.com/images/articles/b1/8a/a1/ec5decca5ed3d6b8079e2e7e7bacc9f2/tar%C3%A1ntula1.jpg',
    nombre: 'Coco',
    sexo: 'Hembra',
    ciudad: 'Madrid',
    proceso: 'En proceso',

    especie: 'Aracnido o insecto',
    fecha: '10-10-2020',
    tamano: 'Pequeño',
    peso: '0.150',
    personality: ['Inquieta', 'Activa'],
    historia: '',

    vacunado: '',
    desparasitado: '',
    sano: 'Si',
    esterilizado: '',
    identificado: 'Si',
    microchip: '',

    requisitos: 'No hay requisitos especiales para adoptar a Coco',
    tasa: 125,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen:
      'https://i0.wp.com/skdesu.com/wp-content/uploads/2021/08/besouro-hercules.webp?resize=900%2C550&ssl=1',
    nombre: 'Cabezón',
    sexo: 'Macho',
    ciudad: 'Bilbao',
    proceso: 'Rechazado',

    especie: 'Aracnido o insecto',
    fecha: '02-11-2017',
    tamano: 'Pequeño',
    peso: '0.200',
    personality: ['Silencioso', 'Trabajador'],
    historia: '',

    vacunado: '',
    desparasitado: '',
    sano: 'Si',
    esterilizado: '',
    identificado: 'Si',
    microchip: '',

    requisitos: 'No hay requisitos especiales para adoptar a Cabezón',
    tasa: 75,
    envio: 'Si se envía a otra ciudad'
  },
  {
    imagen:
      'https://fotos.miarroba.com/fo/de2e/2A5A511F982259BE5DA92959BE5DA7.jpg',
    nombre: 'Paco',
    sexo: 'Macho',
    ciudad: 'Malaga',
    proceso: 'En proceso',

    especie: 'Ave',
    fecha: '18-09-2021',
    tamano: 'Mediano',
    peso: '0.450',
    personality: ['Hablador', 'Gracioso', 'Me gusta volar...'],
    historia: '',

    vacunado: '',
    desparasitado: '',
    sano: 'Si',
    esterilizado: '',
    identificado: 'Si',
    microchip: '',

    requisitos: 'No hay requisitos especiales para adoptar a Paco',
    tasa: 100,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen:
      'https://cdn.palbincdn.com/users/27624/images/20220221_123615-1645443747.jpg',
    nombre: 'Pichi',
    sexo: 'Hembra',
    ciudad: 'Madrid',
    proceso: 'Rechazado',

    especie: 'Ave',
    fecha: '01-12-2018',
    tamano: 'Pequeño',
    peso: '0.3',
    personality: ['Juguetón', 'Alegre', 'Cariñoso', 'Animado'],
    historia: '',

    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'No',
    identificado: 'Si',
    microchip: 'No',

    requisitos: 'No hay requisitos especiales para adoptar a Pichi',
    tasa: 125,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen: 'https://i.ytimg.com/vi/04_Vidvj35E/maxresdefault.jpg',
    nombre: 'Blue',
    sexo: 'Macho',
    ciudad: 'Madrid',
    proceso: 'En proceso',

    especie: 'Ave',
    fecha: '03-07-2018',
    tamano: 'Pequeño',
    peso: '0.3',
    personality: ['Timido', 'Bueno con los niños', 'Cauteloso', 'Juguetón'],
    historia:
      'Me llamo Blue, era un pajarito muy bueno, pero vi cosas que no debería haber visto, que no debíann haber pasado. Por eso llamaron a LARA y vino a salvarnos la vida',

    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'No',
    identificado: 'Si',
    microchip: 'No',

    requisitos: 'No hay requisitos especiales para adoptar a Blue',
    tasa: 125,
    envio: 'No se envía a otra ciudad'
  },
  {
    imagen:
      'https://www.petclic.es/wikipets/wp-content/uploads/2012/02/todos-los-nombres-para-aves.jpg',
    nombre: 'Felipe',
    sexo: 'Macho',
    ciudad: 'Madrid',
    proceso: 'Rechazado',

    especie: 'Ave',
    fecha: '17-05-2017',
    tamano: 'Pequeño',
    peso: '0.3',
    personality: ['Silencioso', 'Gracioso', 'Tranquilo', 'Observador'],
    historia: '',

    vacunado: 'Si',
    desparasitado: 'Si',
    sano: 'Si',
    esterilizado: 'No',
    identificado: 'Si',
    microchip: 'No',

    requisitos: 'No hay requisitos especiales para adoptar a Felipe',
    tasa: 125,
    envio: 'No se envía a otra ciudad'
  }
]

const mascotasDocuments = mascotas.map((mascota) => new Mascota(mascota))
mongoose
  .connect(
    'mongodb+srv://luis:Upgradehub22@cluster0.nkd4r.mongodb.net/Proyecto_Final_React_Lucky?retryWrites=true',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Mascota.insertMany(mascotasDocuments)
    console.log('DatabaseCreated')
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
