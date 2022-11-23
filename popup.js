const featuredGames = [
    {
      title: 'Marvel’s Spider-Man: Miles Morales',
      caption: 'New Sipder man Miles Maraler as a Super Hero',
      desc: 'Miles Morales discovers explosive powers that set him apart from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks and covert camouflage power alongside spectacular web-slinging acrobatics, gadgets and skills.',
      thumbnail: './Img/Image-required/miles-morales-with-cat-4k_320x480.jpg',
    },
    {
      title: 'Far Cry 6',
      caption: 'New Advantage game, A real World game',
      desc: 'Far Cry® 6 thrusts players into the adrenaline-filled world of a modern-day guerrilla revolution. As dictator of Yara, Antón Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, dutifully at his side. Become a guerrilla fighter and burn their regime to the ground.',
      thumbnail: './Img/Image-required/far-cry-6-hd-gaming-cool.jpg',
    },
    {
      title: 'FIFA 22',
      caption: 'FIFA 22 is a football simulation video game.',
      desc: 'Live out your football dreams in FIFA 22 Career Mode as you create a club and lead them from relegation candidates to global giants',
      thumbnail: './Img/Image-required/fifa-22.jpg',
    },
    {
      title: 'Deathloop',
      caption: 'An assassin stuck in a time loop',
      desc: 'In Deathloop, the player takes on the role of Colt, an assassin stuck in a time loop who has been tasked to take out eight targets called Visionaries across the island of Blackreef before midnight.',
      thumbnail: './Img/Image-required/images.jpg',
    },
    {
      title: 'Ratchet & Clank: Rift Apart',
      caption: ' third-person shooter platform game',
      desc: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality. Jump between action-packed worlds, and beyond at mind-blowing speeds',
      thumbnail: './Img/Image-required/ratchet-and-clank-rift-apart-ps5.jpg',
    },
    {
      title: 'HORIZON FORBIDDEN WEST',
      caption: 'True open world adventure genre ',
      desc: 'Horizon Forbidden West is an action role-playing game played from a third-person perspective. The player controls Aloy, a hunter in a world populated by dangerous, animalistic machines',
      thumbnail: './Img/Image-required/horizon-forbiddenjpg.jpg',
    },
  ];

  let main = document.querySelector(".Featured");

//   This section is for the first part which add Featured games
  let Featuredgame = document.createElement("h1");
  Featuredgame.innerText = "Featured Games";
  Featuredgame.classList.add("main-page-1");
  Featuredgame.classList.add("border-c");
  let border = document.createElement("div");
  border.classList.add("border");

main.append(Featuredgame, border,);

// Next Create the div for making the faeature reposive and divided into three
let maincard = document.createElement('div');
maincard.classList.add('maincardsec');
let rightmaincard = document.createElement('div');
rightmaincard.classList.add('rigmaincard');
let leftmaincard = document.createElement('div');
leftmaincard.classList.add('leftmaincard');

//  Excute the first three 
for(let i = 0; i < featuredGames.length && i < 3; i++){


let maindivcard = document.createElement("div");
maindivcard.classList.add("maincard");
let imagediv = document.createElement("div");
imagediv.classList.add("imagediv");
let cardimg = document.createElement("img");
cardimg.src = featuredGames[i].thumbnail;
imagediv.append(cardimg);


let maintextdiv = document.createElement("div");
maintextdiv.classList.add("maintextdiv");
let maintextdivh1 = document.createElement("h1");
maintextdivh1.innerText = featuredGames[i].title;
let maintextdivh3 = document.createElement("h3");
maintextdivh3.innerText = featuredGames[i].caption;
let maintextdivp = document.createElement("p");
maintextdivp.innerText = featuredGames[i].desc;
maintextdiv.append(
    maintextdivh1,
    maintextdivh3,
    maintextdivp
);
maindivcard.append(imagediv, maintextdiv)

rightmaincard.append(maindivcard);
}

// Excute the last three 

for(let i = 3; i < featuredGames.length && i < 6; i++){


let maindivcard = document.createElement("div");
maindivcard.classList.add("maincardl");
let imagediv = document.createElement("div");
imagediv.classList.add("imagediv");
let cardimg = document.createElement("img");
cardimg.src = featuredGames[i].thumbnail;
imagediv.append(cardimg);


let maintextdiv = document.createElement("div");
maintextdiv.classList.add("maintextdiv");
let maintextdivh1 = document.createElement("h1");
maintextdivh1.innerText = featuredGames[i].title;
let maintextdivh3 = document.createElement("h3");
maintextdivh3.innerText = featuredGames[i].caption;
let maintextdivp = document.createElement("p");
maintextdivp.innerText = featuredGames[i].desc;
maintextdiv.append(
    maintextdivh1,
    maintextdivh3,
    maintextdivp
);
maindivcard.append(imagediv, maintextdiv)

leftmaincard.append(maindivcard);

}

maincard.append(rightmaincard,leftmaincard);

// Creeate the two button for more and less

let button = document.createElement('button');
button.classList.add('cardbutton');
button.classList.add('cardbutton');
button.innerText = 'MORE';
let buttonimg = document.createElement('img');
buttonimg.src = './Img/Cl/expand_more_FILL0_wght400_GRAD0_opsz20.svg';
buttonimg.alt = 'Expand';
button.appendChild(buttonimg)

let buttonless = document.createElement('buttonless');
buttonless.classList.add('cardbutton');
buttonless.classList.add('buttonless');
buttonless.innerText = 'LESS';
let buttonlessimg = document.createElement('img');
buttonlessimg.src = './Img/Cl/expand_less_FILL0_wght400_GRAD0_opsz20.svg';
buttonlessimg.alt = 'Expand';
buttonless.appendChild(buttonlessimg)

// Giving the Fuction to the button according the scenario

button.addEventListener('click', () => {
    leftmaincard.classList.add('displaycard');
    button.style.display = "none";
    buttonless.style.display = "flex";
})

buttonless.addEventListener('click', () => {
    leftmaincard.classList.remove('displaycard');
    button.style.display = "flex";
    buttonless.style.display = "none";
})

// Append to the main
main.append(maincard,button,buttonless);
