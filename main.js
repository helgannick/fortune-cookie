

const cookie = document.querySelector('.cookie');
const brokenCookie = document.querySelector('.brokenCookie');
const btnCookie = document.querySelector('.btnCookie');

const otherCookie = document.querySelector('.otherCookie');
const cookieMessage = document.querySelector('#cookie-message');


const messages = [
    'Uma jornada de mil milhas começa com um único passo.',
    'Acredite em si mesmo e em suas habilidades.',
    'Você encontrará felicidade na vida se a procurar com otimismo.',
    'O amor está próximo.',
    'A vida é uma aventura. Viva-a ao máximo!',
    'Um amigo fiel é um tesouro inestimável.',
    'O fracasso é apenas uma oportunidade para recomeçar com mais sabedoria.',
    'Não tenha medo de explorar o desconhecido.',
    'Seja corajoso para seguir seus sonhos.',
    'A paciência é uma virtude valiosa.',
    'Aprenda com seus erros e cresça com eles.',
    'O futuro é brilhante e cheio de possibilidades.',
    'Mantenha a mente aberta e seja flexível.',
    'A gratidão é a chave para a felicidade.',
    'Não se preocupe com o que os outros pensam de você.',
    ',A persistência leva à conquista.',
    'Encontre equilíbrio na vida para alcançar a paz interior.',
    'Siga sua intuição.',
    'Seja gentil com os outros e consigo mesmo.',
    'A verdadeira riqueza é medida pelo amor e pelos relacionamentos.',
    'O respeito é uma das maiores formas de amor.',
    'A vida é como uma caixa de chocolates. Nunca se sabe o que se vai encontrar.',
    'O sucesso é um resultado da preparação e oportunidade.',
    'A força está em sua mente.',
    'A sabedoria vem da experiência.',
    'Cada dia é uma nova oportunidade para crescer e aprender.',
    'O conhecimento é poder.',
    'Um sorriso pode fazer toda a diferença.',
    'A vida é um presente, aproveite cada momento.'
]




btnCookie.addEventListener('click', clickSwitch);
otherCookie.addEventListener('click', clickSwitch);

function clickSwitch(event){
    event.preventDefault();

    openCookie();
    GenerateRandomMessage();
};




function openCookie(){
    cookie.classList.toggle('hide');
    brokenCookie.classList.toggle('hide');
    

};

function GenerateRandomMessage() {
    
    cookieMessage.textContent = messages[Math.floor(Math.random() * messages.length)]

};






