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
  {
    name: 'Masood Rana',
    title: 'AutoCAD 2D/3D Architecture, Structure and Plumbing',
    imgFeture: 'https://userphotos2.teacheron.com/1506455-44218.jpg',
    description: 'I have the ability to grow with a job, handle responsibility and build positive relationships with work colleagues and clients at all levels.',
  },
  {
    name: 'Mansi',
    title: 'Interior designing, Revit Architecture',
    imgFeture: 'https://userphotos2.teacheron.com/1502885-07363.jpg',
    description: 'I am Mansi Pupneja well experienced with the Design and teaching industry . All geared up to share my knowledge with you.',
  },
]

const speakersList = document.querySelector('.speakers');

speakers.forEach((item) => {
  const speaker = document.createElement('li');
  const {
    name, title, imgFeture, description
  } = item;
  speaker.classList.add('speaker-item');
  const htmlTemplate = `
    <div class="figure">
        <div class="pattern"></div>
        <img src=${imgFeture} alt="figture image" class="fig-speaker">
    </div>
    <div class="meta">
        <h4 class="name">${name}</h4>
        <p class="title">${title}</p>
        <hr>
        <p class="speaker-description">${description}</p>
    </div>`;
  speaker.innerHTML = htmlTemplate;
  speakersList.appendChild(speaker);
});
