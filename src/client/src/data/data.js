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
    description: ' is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    companyName: 'Concentrix Slovakia',
    dates: '2018 - 2019',
    position: 'Customer support',
    description: '',
  },
  {
    companyName: 'Bonard s.r.o.',
    dates: '2017 - 2018',
    position: 'Office assistant',
    description: '',
  },
  {
    companyName: 'Soaphoria s.r.o.',
    dates: '2017 - 2018',
    position: 'sales assistant',
    description: '',
  },
];
