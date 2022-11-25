const featuredGames = [
  {
    title: 'Marvel’s Spider-Man: Miles Morales',
    caption: 'New Sipder man Miles Maraler as a Super Hero',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
    thumbnail: './Img/Image-required/miles-morales-with-cat-4k_320x480.jpg',
  },
  {
    title: 'Far Cry 6',
    caption: 'New Advantage game, A real World game',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
    thumbnail: './Img/Image-required/far-cry-6-hd-gaming-cool.jpg',
  },
  {
    title: 'FIFA 22',
    caption: 'FIFA 22 is a football simulation video game.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
    thumbnail: './Img/Image-required/fifa-22.jpg',
  },
  {
    title: 'Deathloop',
    caption: 'An assassin stuck in a time loop',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
    thumbnail: './Img/Image-required/images.jpg',
  },
  {
    title: 'Ratchet & Clank: Rift Apart',
    caption: ' third-person shooter platform game',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
    thumbnail: './Img/Image-required/ratchet-and-clank-rift-apart-ps5.jpg',
  },
  {
    title: 'HORIZON FORBIDDEN WEST',
    caption: 'True open world adventure genre ',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati',
    thumbnail: './Img/Image-required/horizon-forbiddenjpg.jpg',
  },
];

const main = document.querySelector('.Featured');

//   This section is for the first part which add Featured games
const Featuredgame = document.createElement('h1');
Featuredgame.innerText = 'Featured Games';
Featuredgame.classList.add('main-page-1');
Featuredgame.classList.add('border-c');
const border = document.createElement('div');
border.classList.add('border');

main.append(Featuredgame, border);

// Next Create the div for making the faeature reposive and divided into three
const maincard = document.createElement('div');
maincard.classList.add('maincardsec');
const rightmaincard = document.createElement('div');
rightmaincard.classList.add('rigmaincard');
const leftmaincard = document.createElement('div');
leftmaincard.classList.add('leftmaincard');

//  Excute the first three
for (let i = 0; i < featuredGames.length && i < 3; i += 1) {
  const maindivcard = document.createElement('div');
  maindivcard.classList.add('maincard');
  const imagediv = document.createElement('div');
  imagediv.classList.add('imagediv');
  const cardimg = document.createElement('img');
  cardimg.src = featuredGames[i].thumbnail;
  imagediv.append(cardimg);

  const maintextdiv = document.createElement('div');
  maintextdiv.classList.add('maintextdiv');
  const maintextdivh1 = document.createElement('h1');
  maintextdivh1.innerText = featuredGames[i].title;
  const maintextdivh3 = document.createElement('h3');
  maintextdivh3.innerText = featuredGames[i].caption;
  const maintextdivp = document.createElement('p');
  maintextdivp.innerText = featuredGames[i].desc;
  maintextdiv.append(
    maintextdivh1,
    maintextdivh3,
    maintextdivp,
  );
  maindivcard.append(imagediv, maintextdiv);

  rightmaincard.append(maindivcard);
}

// Excute the last three

for (let i = 3; i < featuredGames.length && i < 6; i += 1) {
  const maindivcard = document.createElement('div');
  maindivcard.classList.add('maincardl');
  const imagediv = document.createElement('div');
  imagediv.classList.add('imagediv');
  const cardimg = document.createElement('img');
  cardimg.src = featuredGames[i].thumbnail;
  imagediv.append(cardimg);

  const maintextdiv = document.createElement('div');
  maintextdiv.classList.add('maintextdiv');
  const maintextdivh1 = document.createElement('h1');
  maintextdivh1.innerText = featuredGames[i].title;
  const maintextdivh3 = document.createElement('h3');
  maintextdivh3.innerText = featuredGames[i].caption;
  const maintextdivp = document.createElement('p');
  maintextdivp.innerText = featuredGames[i].desc;
  maintextdiv.append(
    maintextdivh1,
    maintextdivh3,
    maintextdivp,
  );
  maindivcard.append(imagediv, maintextdiv);

  leftmaincard.append(maindivcard);
}

maincard.append(rightmaincard, leftmaincard);

// Creeate the two button for more and less

const button = document.createElement('button');
button.classList.add('cardbutton');
button.classList.add('cardbutton');
button.innerText = 'MORE';
const buttonimg = document.createElement('img');
buttonimg.src = './Img/Cl/expand_more_FILL0_wght400_GRAD0_opsz20.svg';
buttonimg.alt = 'Expand';
button.appendChild(buttonimg);

const buttonless = document.createElement('buttonless');
buttonless.classList.add('cardbutton');
buttonless.classList.add('buttonless');
buttonless.innerText = 'LESS';
const buttonlessimg = document.createElement('img');
buttonlessimg.src = './Img/Cl/expand_less_FILL0_wght400_GRAD0_opsz20.svg';
buttonlessimg.alt = 'Expand';
buttonless.appendChild(buttonlessimg);

// Giving the Fuction to the button according the scenario

button.addEventListener('click', () => {
  leftmaincard.classList.add('displaycard');
  button.classList.add('card-none');
  buttonless.style.display = 'flex';
});

buttonless.addEventListener('click', () => {
  leftmaincard.classList.remove('displaycard');
  button.classList.remove('card-none');
  buttonless.style.display = 'none';
});

// Append to the main
main.append(maincard, button, buttonless);
