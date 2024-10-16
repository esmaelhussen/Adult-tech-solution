/** @format */

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navItem = document.querySelectorAll('.nav-item');
const more = document.querySelector('.btn-more');
const cards = document.querySelector('.cards');
const feature = document.querySelector('.feature-cards');

const openMenu = () => {
  navMenu.classList.remove('desktop');
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
};

const closeMenu = () => {
  navMenu.classList.add('desktop');
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
};

hamburger.addEventListener('click', () => {
  openMenu();
});

navItem.forEach((n) => {
  n.addEventListener('click', () => {
    closeMenu();
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});

const technologies = [
  {
    title: 'cybersecurity',
    image: './assets/icon/icon-web.png',
    content: 'Adult-Tech-Solution is a program to generate an experianced and learning adults.',
  },
  {
    title: 'Digital marketing',
    image: './assets/icon/icon-mob.png',
    content:
      'Adult-Tech-Solution is a program to generate an experianced and learning adults.',
  },
  {
    title: 'data analysis',
    image: './assets/icon/icon-graphics.png',
    content:
      'Adult-Tech-Solution is a program to generate an experianced and learning adults.',
  },
  {
    title: 'AI',
    image: './assets/icon/icon-robot.png',
    content:
      'Adult-Tech-Solution is a program to generate an experianced and learning adults.',
  },
  {
    title: 'cloud computing',
    image: './assets/icon/icon-network.png',
    content:
      'Adult-Tech-Solution is a program to generate an experianced and learning adults.',
  },
];

const lectures = [
  {
    title: 'Frontend Lecture',
    name: 'Esmael Hussen',
    image: './assets/icon/esmael.jpg',
    content:
      ' A passionate Frontend developer with many experiances and learning backend development.',
  },
  {
    title: 'Frontend Lecture',
    name: 'Esmael Hussen',
    image: './assets/icon/esmael.jpg',
    content:
      ' A passionate Frontend developer with many experiances and learning backend development.',
  },
  {
    title: 'Frontend Lecture',
    name: 'Esmael Hussen',
    image: './assets/icon/esmael.jpg',
    content:
      ' A passionate Frontend developer with many experiances and learning backend development.',
  },
  {
    title: 'Frontend Lecture',
    name: 'Esmael Hussen',
    image: './assets/icon/esmael.jpg',
    content:
      ' A passionate Frontend developer with many experiances and learning backend development.',
  },
  {
    title: 'Frontend Lecture',
    name: 'Esmael Hussen',
    image: './assets/icon/esmael.jpg',
    content:
      ' A passionate Frontend developer with many experiances and learning backend development.',
  },
  {
    title: 'Frontend Lecture',
    name: 'Esmael Hussen',
    image: './assets/icon/esmael.jpg',
    content:
      ' A passionate Frontend developer with many experiances and learning backend development.',
  },
];

const showCards = (i) => {
  cards.innerHTML += `<article class="card">
  <img class="card-img" src=${technologies[i].image} alt="" />
<h3 class="card-title">${technologies[i].title}</h3>
<p class="card-content">${technologies[i].content}
</p>
</article>`;
};

const showLectures = (i) => {
  feature.innerHTML += `<article class="feature-card">
<div class="feature-img">
<img
src="./assets/bg/checkerboard-squares-black-white.jpg"
alt="background"
class="bg-people"/>
<img
class="people-img"
src=${lectures[i].image}
alt="Esmael hussen image"
/>
</div>
<div>
<h3 class="feture-name">${lectures[i].name}</h3>
<h5 class="card-title">${lectures[i].title}</h5>
<p class="card-content">
${lectures[i].content}
</p>
</div>
</article>`;
};

document.addEventListener('DOMContentLoaded', () => {
  technologies.forEach((pro, i) => {
    showCards(i);
  });

  lectures.forEach((pro, i) => {
    if (i < 2 || window.innerWidth > 768) {
      showLectures(i);
    }
  });
});

more.addEventListener('click', () => {
  lectures.forEach((pro, i) => {
    if (i >= 2) {
      showLectures(i);
    }
  });
  more.classList.toggle('hidden');
});
