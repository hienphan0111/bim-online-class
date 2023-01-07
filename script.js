const hamberger = document.querySelector('.hamberger');
const close = document.querySelector('.close');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const bodyOverlay = document.querySelector('.body-overlay');

hamberger.addEventListener('click', () => {
  close.classList.remove('hidden');
  bodyOverlay.classList.remove('hidden');
  menu.classList.add('hamberger-menu');
  hamberger.classList.add('hidden');
  body.classList.add('non-scroll');
});

close.addEventListener('click', () => {
  close.classList.add('hidden');
  bodyOverlay.classList.add('hidden');
  menu.classList.remove('hamberger-menu');
  hamberger.classList.remove('hidden');
  body.classList.remove('non-scroll');
});

const speakers = [
  {
    name: 'Saeedeskandari',
    title: 'CEO',
    imgFeture: 'https://userphotos2.teacheron.com/1530294-07160.jpg',
    description: 'I am fully expert in using AutoCAD, Revit and Excel, Because of years experience use of them in many projects.',
  },
  {
    name: 'Kayla Snow',
    title: 'AutoCAD and Revit Architect',
    imgFeture: 'https://userphotos2.teacheron.com/1529707-03285.jpg',
    description: 'career drafter teaching Revit and 2D AutoCAD skills',
  },
  {
    name: 'Takeru Kondo',
    title: 'BIM Specialist',
    imgFeture: 'https://userphotos2.teacheron.com/1513636-15272.jpg',
    description: 'I am licensed architect with over 10 years of experience in commercial architecture.',
  },
  {
    name: 'Rizwan Razzak Ali',
    title: 'CAD/CFD/FEA Expert',
    imgFeture: 'https://userphotos2.teacheron.com/1511945-15254.jpeg',
    description: 'I achieved many certificates from Dassault Systems, AutoDesk, and Bentley USA for excellent Design skills',
  },
  {
    name: 'Emmanuel Kuchocha',
    title: 'Architecture; Architectural Software; Revit',
    imgFeture: 'https://userphotos2.teacheron.com/1510752-61473.jpg',
    description: 'I am offering lessons in Autodesk Revit Architecture softwware as well as English lessons.',
  },
  {
    name: 'Deepak Kumar',
    title: 'Senior CAD Consultant',
    imgFeture: 'https://userphotos2.teacheron.com/1509264-23354.jpg',
    description: 'Training provided Online or offline, will be starting with the Basic to advance level with hand written Notes and Every Lecture Video Recording will be provided which will help the student\'s in future for any Reference.',
  },
];

const speakersList = document.querySelector('.speakers');
const w = window.innerWidth;
const more = document.querySelector('.more');
let mobileState = 0;

const renderSpeaker = (item) => {
  const speaker = document.createElement('li');
  const {
    name, title, imgFeture, description,
  } = item;
  speaker.classList.add('speaker-item');
  const htmlTemplate = `
    <div class="figure">
      <div class="fg">
        <div class="pattern"></div>
        <img src=${imgFeture} alt="figture image" class="fig-speaker">
      </div>
    </div>
    <div class="meta">
        <h4 class="name">${name}</h4>
        <p class="title">${title}</p>
        <hr>
        <p class="speaker-description">${description}</p>
    </div>`;
  speaker.innerHTML = htmlTemplate;
  speakersList.appendChild(speaker);
};

if (parseInt(w, 10) > 768) {
  more.classList.add('hidden');
  speakers.forEach((item) => {
    renderSpeaker(item);
  });
} else {
  more.classList.remove('hidden');
  mobileState = 2;
  for (let i = 0; i < mobileState; i += 1) {
    renderSpeaker(speakers[i]);
  }
  more.addEventListener('click', () => {
    if (mobileState < speakers.length) {
      mobileState += 2;
      if (mobileState >= speakers.length) {
        more.classList.add('hidden');
      }
      for (let i = mobileState - 2; i < mobileState; i += 1) {
        renderSpeaker(speakers[i]);
      }
    }
  });
}
