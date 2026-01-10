
import { Lesson } from '../types';

export const ISAIAS_LESSON: Lesson = {
  id: 'isaias-master-reborn-v18',
  title: 'Isaías: El Príncipe de los Profetas',
  totalSlides: 11,
  slides: [
    {
      id: 'slide-1-foundations',
      type: 'hermeneutics',
      title: 'Fundamentos del Libro',
      subtitle: 'Introducción Hermenéutica',
      visual: { 
        type: 'image', 
        source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/2da61808-eabd-45f8-b37f-4f5cb301f382_rw_1920.jpg?h=f3c05e85152dafb2c10f722359996bb9',
        position: 'left'
      },
      content: 'Isaías es el "Príncipe de los Profetas". Su nombre significa "Jehová es salvación", eje central de sus 66 capítulos.',
      interaction: {
        type: 'grid-cards',
        revealItems: [
          { title: 'Autoría', text: 'Isaías, hijo de Amoz.', icon: 'PenTool', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800', longContent: 'Un hombre de Jerusalén con acceso directo a la corte real. Su ministerio abarcó casi 60 años de crisis nacional.' },
          { title: 'Cronología', text: '740 – 681 a.C.', icon: 'Calendar', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/9d567a93-67ef-4f81-902a-e24d394793c0_rw_1920.jpg?h=6c594a8ef410b023bd29d3dca7f74e4b', longContent: 'Desde la muerte del rey Uzías hasta el reinado de Ezequías, en el epicentro de la expansión asiria.' },
          { title: 'Geografía', text: 'Jerusalén y Judá.', icon: 'MapPin', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/312c3cc4-d87a-491b-8bbe-e4edf545135f_rw_1920.jpg?h=84fed8807a50c407df7ce41053453d41', longContent: 'El profeta de Sión, cuyo mensaje nace en el Templo y se extiende a todas las naciones de la tierra.' },
          { title: 'Estructura', text: '66 Capítulos.', icon: 'BookOpen', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/f440dcf9-48d6-4387-92e3-6ecba62db816_rw_1920.jpg?h=a2c38b35e79ad005edea3b99a4721e80', longContent: 'Conocido como la "Mini Biblia": 39 capítulos de juicio (Antiguo Testamento) y 27 de consolación (Nuevo Testamento).' }
        ]
      }
    },
    {
      id: 'slide-2-prophet',
      type: 'interactive-reveal',
      title: 'El Hombre y el Momento',
      subtitle: 'Contexto del Autor',
      visual: { type: 'icon', source: 'User' },
      interaction: {
        type: 'grid-cards',
        revealItems: [
          { title: 'Linaje Real', text: 'Nobleza de Judá.', icon: 'Crown', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/6d9dddcb-e42b-4b5a-ac82-adc3f753a9d4_rw_1920.jpg?h=ebb9dc5e3837d4547f3ea8983815bd67', longContent: 'Probablemente primo del rey Uzías, lo que le otorgaba una perspectiva política y espiritual única en la corte.' },
          { title: 'Educación', text: 'Maestro literario.', icon: 'Book', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/764c49b3-4ce7-4a16-a427-c15056676367_rw_1920.jpg?h=3933bd1b4ee7d9704a3229da683a399c', longContent: 'Su hebreo es el más puro y sofisticado de todo el Antiguo Testamento, lleno de metáforas brillantes.' },
          { title: 'Familia', text: 'Profeta y señales.', icon: 'Users', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/710db3a1-a6c7-411f-a21b-3ea10ee56793_rw_1920.jpg?h=d34a25a88eaaf9f1befc91105db1b900', longContent: 'Casado con una profetisa. Sus hijos, Sear-jasub y Maher-salal-has-baz, fueron en sí mismos señales vivas para Judá.' }
        ]
      }
    },
    {
      id: 'slide-3-glossary',
      type: 'stepped-overlay',
      title: 'Glosario Profético',
      subtitle: 'Conceptos Clave',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/d22324e1-c6f8-4d3a-b411-9744ab1fa5d6_rw_1920.jpg?h=1eeb9091cc6d02501e6aa43fc4a4ef21', position: 'background' },
      interaction: {
        type: 'stepped-reveal',
        revealItems: [
          { title: 'REMANENTE', text: 'Sear-jasub.', icon: 'Zap', image: 'https://i0.wp.com/lanoticia.com/wp-content/uploads/2019/12/recibiendo-ano-nuevo-con-esperanza.jpeg?fit=1280%2C819&ssl=1', longContent: 'La esperanza de que un grupo fiel sobrevivirá al juicio para reconstruir el pacto con Dios.' },
          { title: 'ARIEL', text: 'Altar de Dios.', icon: 'Flame', image: 'https://images.unsplash.com/photo-1567304441104-d7a7d3e4bc1b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2llbG8lMjBtYXR1dGlub3xlbnwwfHwwfHx8MA%3D%3D', longContent: 'Nombre simbólico de Jerusalén que enfatiza tanto su gloria como el juicio purificador que sufriría.' },
          { title: 'SERAFINES', text: 'Los Ardientes.', icon: 'Sparkles', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/8cef1562-5d70-4895-8996-49b48c613393_rw_1920.jpg?h=bc95de8a1d3f8915a157131e9f060878', longContent: 'Seres celestiales que proclaman la Santidad de Dios, actuando como agentes de purificación.' }
        ]
      }
    },
    {
      id: 'slide-4-judah-oracles',
      type: 'split-slider',
      title: 'Juicio sobre Judá',
      subtitle: 'Capítulos 1 al 5 (6 Hitos)',
      visual: { type: 'image', source: 'https://images.unsplash.com/photo-1528154183226-809492372d8e?auto=format&fit=crop&q=80&w=1600' },
      interaction: {
        type: 'internal-slider',
        revealItems: [
          { title: 'La Queja (1:2-3)', text: 'Hijos rebeldes.', icon: 'AlertCircle', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/9af5adf2-7eda-46d6-becf-891a904fefe2_rw_1920.jpg?h=b102e3bc294052aa32ea6358bbccf495', longContent: 'Dios llama a los cielos y la tierra como testigos: Su pueblo es más ignorante que el buey y el asno.' },
          { title: 'El Culto (1:11-15)', text: 'Manos manchadas.', icon: 'Trash2', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/d4653826-fea1-4bd0-9fe4-cd5904a73d79_rw_1920.png?h=05508e064deffd97722c4ae9ad3d2b63', longContent: 'Dios rechaza los sacrificios hipócritas mientras las manos estén llenas de sangre e injusticia.' },
          { title: 'La Sión (2:1-4)', text: 'El Monte de Dios.', icon: 'Mountain', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/b41c5e0f-0ff1-4dd4-9fba-80b8c5eab577_rw_1920.jpg?h=bb84920dd7c8e44c3461b33b7f77139a', longContent: 'Visión futura de Jerusalén como centro mundial de instrucción, donde las espadas se harán arados.' },
          { title: 'La Vanidad (3:16-26)', text: 'Lujo y ruina.', icon: 'Gem', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/2d86c384-2cf4-48d6-87d3-73964cffc5bd_rw_1920.jpg?h=b258eff1743277ca01da000589637706', longContent: 'Denuncia contra la altivez de las mujeres de Jerusalén y la caída de los líderes corruptos.' },
          { title: 'La Viña (5:1-7)', text: 'Uvas silvestres.', icon: 'Trees', image: 'https://culturacientifica.com/app/uploads/2023/05/jose-alfonso-sierra-K-VkvGjaMtI-unsplash-scaled.jpg', longContent: 'El Cantar de la Viña: Dios esperaba justicia (mishpat), pero halló derramamiento de sangre (mispaj).' },
          { title: 'Los Ayes (5:8-23)', text: '¡Ay de los injustos!', icon: 'AlertTriangle', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/7743e49f-b723-41e6-b359-4e48c0341a89_rw_1920.jpg?h=5c77f6914aa0d5c8f00bb331d2a2453b', longContent: 'Seis "ayes" contra la avaricia, la embriaguez y el desafío abierto a la ley moral de Dios.' }
        ]
      }
    },
    {
      id: 'slide-5-the-vision',
      type: 'info-menu-reveal',
      title: 'La Visión en el Templo',
      subtitle: 'Isaías 6: Encuentro con lo Sagrado',
      visual: { type: 'icon', source: 'Eye' },
      interaction: {
        type: 'menu-reveal',
        revealItems: [
          { 
            title: 'Hito 1: Apogeo de Uzías', 
            text: 'Prosperidad nacional.', 
            icon: 'Crown', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/a99ab5b8-6511-4813-924b-d8fb399bdcca_rw_1200.jpg?h=78b3d43af1c3d012a2361ee067667290', 
            longContent: 'Fue en el año en que murió el rey Uzías. Judá estaba en su apogeo de poder, próspera y fuerte.' 
          },
          { 
            title: 'Hito 2: La Soberbia', 
            text: 'El error del rey.', 
            icon: 'AlertTriangle', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/acccd619-52d9-468e-a2b2-88451d790570_rw_1200.jpg?h=d060a56c2cdb6640f8facb15f4d97081', 
            longContent: 'Uzías se ensoberbeció e intentó usurpar el sacerdocio. Al ser confrontado, la lepra brotó en su frente.' 
          },
          { 
            title: 'Hito 3: Trono Vacío', 
            text: 'Crisis y quebranto.', 
            icon: 'UserX', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/c3c4a075-8ace-421d-aedf-bba8701b20d6_rw_1200.jpg?h=0a4bc5f52435b66f37bcce84232284fa', 
            longContent: 'Tras 52 años de reinado, el trono terrenal quedó vacío. Isaías fue al templo a buscar a Dios en medio del dolor.' 
          },
          { 
            title: 'Hito 4: Rey de Reyes', 
            text: 'El Trono Celestial.', 
            icon: 'Shield', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/f7b94780-d938-47ab-be12-79ad5d8bb255_rw_1200.jpg?h=e49e4def7a8225a885a869f8448e0554', 
            longContent: 'Vio al Señor sentado en un trono alto y sublime. Comprendió que el verdadero Rey nunca muere.' 
          },
          { 
            title: 'Hito 5: El Clamor', 
            text: 'Revelación del pecado.', 
            icon: 'Sparkles', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/f346782c-50fe-4f61-a4b7-a2d07c309031_rw_1200.jpg?h=972a6e420dadbaf1f2bea831fedf7c9f', 
            longContent: 'Ante la santidad absoluta, Isaías exclamó: "¡Ay de mí que soy muerto!". Se sintió indigno ante la Gloria.' 
          },
          { 
            title: 'Hito 6: Purificación', 
            text: 'El Remedio Divino.', 
            icon: 'Zap', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/1f6fc6dc-f85e-44ab-b307-9dfcfa62ddfd_rw_1200.jpg?h=e6ad57b371a94758c007942f4085505a', 
            longContent: 'Un serafín tocó sus labios con un carbón encendido del altar, perdonando su pecado y habilitándolo.' 
          }
        ]
      }
    },
    {
      id: 'slide-6-confirm-drag',
      type: 'drag-drop',
      title: 'Validación Teológica',
      subtitle: 'Arrastra los conceptos a su esfera',
      visual: { type: 'icon', source: 'CheckCircle2' },
      interaction: {
        type: 'drag-drop',
        dragCategories: [{ id: 'c1', title: 'Carácter de Dios' }, { id: 'c2', title: 'Crisis de Judá' }],
        dragItems: [
          { id: 'i1', label: 'Santo, Santo, Santo', categoryId: 'c1' },
          { id: 'i2', label: 'Trono Sublime', categoryId: 'c1' },
          { id: 'i3', label: 'Carbón del Altar', categoryId: 'c1' },
          { id: 'i4', label: 'Uvas Silvestres', categoryId: 'c2' },
          { id: 'i5', label: 'Labios Inmundos', categoryId: 'c2' },
          { id: 'i6', label: 'Lepra en la Frente', categoryId: 'c2' }
        ]
      }
    },
    {
      id: 'slide-7-perplexity-pol',
      type: 'tabs-reveal',
      title: 'Perplejidad Política',
      subtitle: 'Capítulos 7 al 12: Judá entre Potencias',
      visual: { type: 'icon', source: 'Shield' },
      interaction: {
        type: 'visual-selector',
        revealItems: [
          { title: 'Emmanuel', text: 'La señal de la Virgen.', icon: 'Star', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/7dae3035-5a2d-4f2c-a125-429561d340ee_rw_1920.jpg?h=ad6c34721e6822310dd95c0575400921', longContent: 'En medio del miedo político, Dios promete que una virgen concebirá a Emanuel: "Dios con nosotros".' },
          { title: 'Aguas de Siloé', text: 'Confianza rechazada.', icon: 'History', image: 'https://aishlatino.b-cdn.net/wp-content/uploads/2014/01/21-assyrian-conquest-730.jpg', longContent: 'Judá rechazó la paz mansa de Siloé y prefirió el poder asirio. Por eso, el río de Asiria los inundaría.' },
          { title: 'Niño Admirable', text: 'Isaías 9:6.', icon: 'Crown', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/ac4dbaed-c407-41c5-b997-e58446761632_rw_1920.jpg?h=02b63ba811daeccec0e489e7658d1cba', longContent: 'Un niño nos es nacido. Sus nombres revelan su carácter divino: Admirable, Consejero, Dios Fuerte.' },
          { title: 'Vara de Castigo', text: 'Asiria usada por Dios.', icon: 'Sword', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/8173085d-6eba-4bb9-8cc0-9806eaf23756_rw_1920.jpg?h=6069537de504d9ddb5449655f7a4f28e', longContent: 'Dios usa a las naciones como instrumentos de disciplina, pero luego juzga su soberbia.' },
          { title: 'Tronco de Isaí', text: 'Paz mesiánica.', icon: 'Music', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/25b347f3-ab29-4eae-b45b-39a4d1cd8bf9_rw_1920.jpg?h=eeaf5182ef31be8cb1a21134d1df9ff1', longContent: 'Saldrá una vara del tronco de Isaí. Un reino donde la justicia y la paz universal serán realidad.' }
        ]
      }
    },
    {
      id: 'slide-8-nations-map',
      type: 'hotspot-reveal',
      title: 'Oráculos a las Naciones',
      subtitle: 'Capítulos 13 al 23: Juicio Universal',
      visual: { 
        type: 'map', 
        source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/c673f718-738f-4bea-b22a-daaa935039a6_rw_1920.jpg?h=77e619df6bfdf0efba684899e94ca1de', 
        position: 'background' 
      },
      interaction: {
        type: 'hotspots',
        revealItems: [
          { title: 'Egipto', text: 'Juicio a los Sabios.', icon: 'Footprints', x: 33, y: 50, longContent: 'Cap. 18-20. Dios confunde el consejo de Egipto. Isaías camina descalzo 3 años como señal profética.' },
          { title: 'Filistea', text: 'Ruina desde el Norte.', icon: 'AlertCircle', x: 45, y: 34, longContent: 'Cap. 14:28-32. No os alegréis por la caída del opresor, pues del norte viene un humo destructor.' },
          { title: 'Jerusalén', text: 'Valle de la Visión.', icon: 'Eye', x: 49, y: 30, longContent: 'Cap. 22. Juicio contra la capital: confían en sus preparativos militares pero olvidan al Creador.' },
          { title: 'Moab', text: 'Lamento Profundo.', icon: 'Flame', x: 52, y: 35, longContent: 'Cap. 15-16. Moab es asolado en una sola noche. El profeta llora por la miseria de esta nation.' },
          { title: 'Edom', text: 'Vigilancia Nocturna.', icon: 'Moon', x: 50, y: 43, longContent: 'Cap. 21:11-12. "¿Guarda, qué de la noche?". Viene la mañana, pero también la noche de juicio.' },
          { title: 'Tiro/Sidón', text: 'Orgullo Comercial.', icon: 'Coins', x: 50, y: 17, longContent: 'Cap. 23. La potencia mercantil del Mediterráneo será silenciada por 70 años. Su lucro es vanidad.' },
          { title: 'Damasco', text: 'Fin de la Alianza.', icon: 'Skull', x: 55, y: 15, longContent: 'Cap. 17. Siria y Efraín caerán juntas. Sus ciudades serán montones de ruinas para los rebaños.' },
          { title: 'Babilonia', text: 'El Lucero Caído.', icon: 'TowerControl', x: 84, y: 55, longContent: 'Cap. 13-14. El orgullo de Caldea será barrido. Su rey caerá al Seol por querer ser como Dios.' },
          { title: 'Asiria', text: 'Vara Quebrantada.', icon: 'Sword', x: 70, y: 10, longContent: 'Cap. 10 y 14. El asirio será desmenuzado en los montes de Israel. El yugo será quitado del pueblo.' },
          { title: 'Arabia', text: 'Refugio Efímero.', icon: 'Tent', x: 62, y: 66, longContent: 'Cap. 21:13-17. Las caravanas de Dedán huirán. En un año, toda la gloria de Cedar fallará.' }
        ]
      }
    },
    {
      id: 'slide-9-interactive-video',
      type: 'interactive-video',
      title: 'Hito Histórico: El Asedio',
      subtitle: 'Actividad Interactiva Lumi',
      visual: { type: 'icon', source: 'PlayCircle' },
      content: 'https://app.lumi.education/api/v1/run/OrRxwY/embed'
    },
    {
      id: 'slide-10-history-timeline',
      type: 'timeline',
      title: 'Historia de los Tiempos de Ezequías',
      subtitle: 'Capítulos 36 al 39: Interludio Histórico',
      visual: { type: 'icon', source: 'History' },
      interaction: {
        type: 'stepped-reveal',
        revealItems: [
          { 
            title: 'Interludio Literario', 
            text: 'Transición Profética.', 
            icon: 'BookOpen', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/e2d0e3e9-49b9-4638-9db7-cd773bab7a07_rw_1920.jpg?h=4c40aa831c56727c658138e578d31a50', 
            longContent: 'Generalmente se ha dicho que los capítulos 38 y 39 cronológicamente preceden a los capítulos 36 y 37. Este interludio histórico une la primera parte de Isaías (1-35) con la segunda (40-66). Es digno de relatarse dos veces, repitiéndose casi literal en 2 Reyes 18:13–20:19.' 
          },
          { 
            title: 'La Enfermedad (714 a.C.)', 
            text: 'Cataplasma de higos.', 
            icon: 'HeartPulse', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/afd4ee87-a854-495d-9c3e-a2789443d623_rw_1920.jpg?h=fba59896da26b1205cfdc524efbcb831', 
            longContent: 'Cap. 38. Isaías anuncia que el rey moriría. Ezequías ora y Dios le extiende la vida 15 años más. El rey expresa su gratitud en un himno. El método de curación fue una cataplasma de higos.' 
          },
          { 
            title: 'Error de Ezequías (712 a.C.)', 
            text: 'Embajada de Babilonia.', 
            icon: 'Gem', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/93b6456e-f1c5-442a-bb39-ffa73fd9812b_rw_1920.jpg?h=2572225eed33a28b5951f005c14c1cf6', 
            longContent: 'Cap. 39. Merodac-baladán, rey de Babilonia, envía cartas y regalos. Ezequías muestra todas sus riquezas. Isaías advierte que los babilonios volverán un día para tomar todas las riquezas que habían visto y para llevar a sus descendientes al cautiverio.' 
          },
          { 
            title: 'Invasión (701 a.C.)', 
            text: 'La Invasión de Senaquerib.', 
            icon: 'Sword', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/e94afbd6-162e-428a-b03e-da56ddd1bb58_rw_1920.png?h=d02aa96a5ecd6b7386150211d3ff1ca0', 
            longContent: 'Cap. 36-37. Senaquerib invade Judá y toma 46 ciudades. Envía al Rabsaces ("jefe de oficiales") a Jerusalén para intimidar. El Rabsaces se mofa de la confianza en Jehová con vulgar sarcasmo.' 
          },
          { 
            title: 'La Gran Liberación', 
            text: 'Duelo entre Dios y Asiria.', 
            icon: 'Zap', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/1fd9e824-b24e-4b59-be2b-1a50aa4860bc_rw_1920.jpg?h=dfbf45fd4abae47b0919262bc5117531', 
            longContent: 'Ezequías rasga sus vestidos y va al Templo. Envió un mensaje a Isaías, pidiéndole que orara. El profeta mandó decir al rey que no temiera. Aquella noche el ángel de Jehová hirió a 185,000 soldados asirios y el peligro terminó.' 
          }
        ]
      }
    },
    {
      id: 'slide-11-recap-flashcards',
      type: 'flashcards',
      title: 'Sello de Conocimiento',
      subtitle: 'Repaso Rápido: Gira las tarjetas para ver la respuesta',
      visual: { type: 'icon', source: 'RefreshCw' },
      interaction: {
        type: 'flashcards',
        revealItems: [
          { 
            title: '¿Qué simbolizaba el carbón encendido?', 
            text: 'La purificación de los labios y el perdón de los pecados de Isaías ante la Santidad de Dios.', 
            icon: 'Flame', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/3a80edc5-e3a5-4830-9ab6-ec355e903e5d_rw_1200.jpg?h=bfa9a0be214e92ca5d3192a0c84b3360' 
          },
          { 
            title: '¿Cuál fue el error político de Ezequías?', 
            text: 'Mostrar sus tesoros a la embajada babilónica, confiando en alianzas humanas en lugar de Dios.', 
            icon: 'Gem', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/a70eca23-d655-43e5-9a71-75bf90e5762c_rw_1200.jpg?h=b110a6dbbf10d36e60e95453eb44b103' 
          },
          { 
            title: '¿Cómo fue librada Jerusalén del asedio?', 
            text: 'A través de la intervención divina: el Ángel de Jehová hirió a 185,000 soldados asirios en una noche.', 
            icon: 'ShieldCheck', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/713c6639-164d-4b79-a502-bc4d4dee3630_rw_1200.jpg?h=3e9edb29f9cc70a9393580aed9c1ac71' 
          }
        ]
      }
    }
  ]
};
