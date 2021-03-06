//objeto que tem funções para fazer algo com os pets no caso
//----//
// Pegar todos os pets
// Filtrar os pets por tipo
// Filtrar os pets pelo nome

type PetType = 'dog' | 'cat' | 'fish';
type SexType =  'Masculino' | 'Feminino';

type Pet = { //Para garantir que todos os pets tenham as mesmas informações
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex:SexType
};


const data: Pet[] = [ //apontando que data é um array de Pet
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Preto e Branco',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Vermelho e Azul',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Laranja',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Verde e Branco',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Vermelho',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Preto',
        sex: 'Masculino'
    },
];

export const pet = { //objeto para criar as funções

    getAll: () => { // fução para retornar todos os pets
        return data;
    },
    getFromType: (type: PetType): Pet[] => { //filtrando pet pelo tipo, retornando um array de pet
        return data.filter(item => { //se meu itemtype = type:PetType ele vai ficar true e me gerar um array
            if (item.type === type) {
                return true;
            } else {
                return false;
            }
        });
    },
    getFromName: (name: string): Pet[] => { //filtrando pet pelo nome e retornando um array de pet
        return data.filter(item => {
            if (item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1) { //procurando o item que foi procurado no data.filter de name, mais que -1 que dizer que achou pelo mneos 1 nome e vai reotrnar algo, JS puro
                return true
            } else {
                return false;
            }
        });
    },
    getFromTypeSex: (sex: SexType): Pet[] => { 
        return data.filter(item => { 
            if (item.sex === sex) {
                return true;
            } else {
                return false;
            }
        });
    },
};