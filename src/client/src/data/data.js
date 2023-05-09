import image1 from '../assets/pictures/image1.jpeg';
import image2 from '../assets/pictures/image2.jpeg';
import image3 from '../assets/pictures/image3.jpeg';
import image4 from '../assets/pictures/image4.jpeg';
import image5 from '../assets/pictures/image5.jpeg';
import image6 from '../assets/pictures/image6.jpeg';
import image7 from '../assets/pictures/image7.jpeg';
import image8 from '../assets/pictures/image8.jpeg';

export const pictures = [image1, image2, image3, image4, image5, image6, image7, image8];

export const replacementData = (err) => ({
  error: err.message,
  name: 'Veronika Lacusova',
  bio: 'Junior frontend developer with beginner experience in backend NodeJS programming. Keen to learn new technologies, DevOps tools and full stack.',
});

export const contactBarData = [
  {
    path: 'mailto:veronalac@gmail.com',
    icon: 'email',
  },
  {
    path: 'https://github.com/VeronikaL1A1',
    icon: 'github',
  },
  {
    path: 'https://www.linkedin.com/in/veronika-lacušová-8a3153144/',
    icon: 'linkedin',
  },
  {
    path: 'https://www.instagram.com/cubansalsa_by_veruschka',
    icon: 'instagram',
  },
];

export const hobbies = [
  'photography', 'hiking', 'cycling', 'travelling', 'salsa & bachata dance', 'visual art',
];

export const jobsData = [
  {
    companyName: 'Accenture Slovakia',
    dates: '2019 - 2022',
    position: 'Junior Frontend Developer',
    description: 'Creating user interface designs and implementing those in frontend code.Gradually taking on tasks from backend. Helping by organizing scrum and agile flow by the app development process. Writing unit and E2E tests to ensure code functionality and app stability. Support and maintenance for users. Helping junior colleagues. Technologies: JavaScript, ReactJS, NodeJS, PostgreSQL, HTML, CSS, GIT, Mobx, Scrum, Agile',
  },
  {
    companyName: 'Concentrix Slovakia',
    dates: '2018 - 2019',
    position: 'Customer support',
    description: 'Supporting customers by their queries related to product order, pricing, delivery, complains, account safety, basic technical PC & console videogames issues via chat and email using Salesforce CRM platform.',
  },
  {
    companyName: 'Bonard s.r.o.',
    dates: '2017 - 2018',
    position: 'Office assistant',
    description: 'Maintain an organised and efficient office environment, manages office supplies, cleaning and technical office services, supporting personal CEO assistent and taking over some of her agenda.',
  },
  {
    companyName: 'Soaphoria s.r.o.',
    dates: '2017 - 2018',
    position: 'Sales assistant',
    description: 'Offering and explaining customers store products in natural cosmetics and spa industry, wokring as cashier, keeping the workstation clean and presentable.',
  },
];
