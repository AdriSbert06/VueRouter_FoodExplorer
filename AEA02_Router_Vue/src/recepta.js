import { ref } from 'vue'

export const plats = ref([
  {
    id: 1,
    name: 'Pasta Carbonara',
    desc: 'Pasta cremosa amb ou, formatge, guanciale i pebre negre.',
    imatge: '../../public/foto_Home.png',
    ingredients: [
      '320 g d\'espaguetis',
      '150 g de guanciale (o cansalada panxeta)',
      '4 rovells d\'ou + 1 ou sencer',
      '80 g de formatge pecorino romano ratllat',
      'Pebre negre acabat de moldre',
      'Sal gruixuda per a l\'aigua de la pasta'
    ],
    passos: [
      'Posa una olla amb aigua a bullir i afegeix-hi sal gruixuda.',
      'Talla el guanciale a daus petits i fes-lo a la paella, sense oli, a foc mitjà fins que quedi cruixent i hagi deixat el seu greix.',
      'En un bol, barreja els rovells, l\'ou sencer, el pecorino ratllat i molt pebre negre fins a obtenir una crema espessa.',
      'Cou els espaguetis fins que estiguin al dente i reserva un got de l\'aigua de la cocció.',
      'Escorre la pasta i passa-la a la paella amb el guanciale, fora del foc.',
      'Afegeix la barreja d\'ou i formatge i remena ràpidament, afegint a poc a poc una mica d\'aigua de cocció fins que la salsa quedi cremosa.',
      'Serveix de seguida amb més pecorino i pebre negre per sobre.'
    ]
  },
  {
    id: 2,
    name: 'Macarrons amb tomàquet',
    desc: 'Macarrons amb salsa de tomàquet casolana, all i alfàbrega.',
    imatge: '../../public/foto_Home.png',
    ingredients: [
      '300 g de macarrons',
      '500 g de tomàquets madurs (o 400 g de tomàquet triturat)',
      '2 grans d\'all',
      '3 cullerades d\'oli d\'oliva verge extra',
      'Un grapat de fulles d\'alfàbrega fresca',
      '1 culleradeta de sucre (opcional, per treure l\'acidesa)',
      'Sal i pebre'
    ],
    passos: [
      'Pela els tomàquets, treu-ne les llavors i talla\'ls a trossos (o fes servir tomàquet triturat).',
      'Pica els alls ben fins i sofregeix-los a foc suau amb l\'oli, sense que es cremin.',
      'Afegeix-hi el tomàquet, la sal, el pebre i el sucre. Deixa-ho coure a foc baix uns 20-25 minuts, remenant de tant en tant.',
      'Mentrestant, bull els macarrons en aigua amb sal segons les indicacions del paquet.',
      'Escorre els macarrons i barreja\'ls amb la salsa de tomàquet.',
      'Afegeix-hi les fulles d\'alfàbrega trossejades amb les mans i un raig d\'oli cru.',
      'Serveix calent, amb formatge ratllat si es vol.'
    ]
  },
  {
    id: 3,
    name: 'Spaghetti Bolognese',
    desc: 'Salsa de carn cuinada lentament amb tomàquet i herbes.',
    imatge: '../../public/foto_Home.png',
    ingredients: [
      '320 g d\'espaguetis',
      '400 g de carn picada (meitat vedella, meitat porc)',
      '1 ceba',
      '1 pastanaga',
      '1 tija d\'api',
      '2 grans d\'all',
      '400 g de tomàquet triturat',
      '2 cullerades de concentrat de tomàquet',
      '100 ml de vi negre (opcional)',
      '2 cullerades d\'oli d\'oliva',
      'Orenga, llorer, sal i pebre',
      'Parmesà ratllat per servir'
    ],
    passos: [
      'Pica finament la ceba, la pastanaga, l\'api i l\'all.',
      'Sofregeix les verdures amb l\'oli en una cassola gran a foc mitjà durant 8-10 minuts, fins que estiguin toves.',
      'Afegeix-hi la carn picada i cou-la remenant fins que perdi el color rosat i quedi ben desfeta.',
      'Incorpora el concentrat de tomàquet i el vi negre, i deixa que s\'evapori l\'alcohol durant uns 3 minuts.',
      'Afegeix el tomàquet triturat, el llorer, l\'orenga, la sal i el pebre.',
      'Tapa parcialment i cou a foc molt baix durant 1 hora i mitja (o més), remenant de tant en tant. Si s\'asseca, afegeix-hi una mica d\'aigua.',
      'Cou els espaguetis al dente en aigua amb sal i escorre\'ls.',
      'Barreja la pasta amb la salsa, treu el llorer i serveix amb parmesà ratllat per sobre.'
    ]
  }
])