/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export const users = [
  {
    img: 'https://breakthroughos.com/wp-content/uploads/2020/10/ezgif.com-webp-to-jpg-512x512.jpg',
    name: 'David Lecko',
  },
  {
    img: 'https://breakthroughos.com/wp-content/uploads/2020/10/rdeovte7vos-scaled-682x682.jpg',
    name: 'David Lecko',
  },
  {
    img: 'https://breakthroughos.com/wp-content/uploads/2020/10/fe9d84d0db4b7364017e5073d86fde7d-280x280.jpg',
    name: 'David Lecko',
  },
  {
    img: 'https://breakthroughos.com/wp-content/uploads/2020/10/jim8kvsfklm-scaled-576x576.jpg',
    name: 'David Lecko',
  },
  {
    img: 'https://breakthroughos.com/wp-content/uploads/2020/10/Photo-gallery-1-350x350.png',
    name: 'David Lecko',
  },
  {
    img: 'https://breakthroughos.com/wp-content/uploads/2020/10/ar9mvykzsoa-scaled-682x682.jpg',
    name: 'David Lecko',
  },
  {
    img: 'https://breakthroughos.com/wp-content/uploads/2020/10/qjevpydulgs-scaled-768x768.jpg',
    name: 'David Lecko',
  },
];

export const settings = [
  {
    type: 'Culture',
    settings: [
      {
        text: 'Core Values',
        value: true,
      },
      {
        text: 'Vision',
        value: true,
      },
      {
        text: 'Mission',
        value: true,
      },
      {
        text: 'Our Why',
        value: true,
      },
      {
        text: 'BHAG',
        value: false,
      },
    ],
  },
  {
    type: 'Stragegy',
    settings: [
      {
        text: 'SWOT',
        value: true,
      },
      {
        text: 'Market Strategy',
        value: true,
      },
      {
        text: 'Acquisition Strategy',
        value: true,
      },
    ],
  },
  {
    type: 'Brand',
    settings: [
      {
        text: 'Target Audiences',
        value: true,
      },
      {
        text: 'Personas',
        value: true,
      },
      {
        text: 'Influencers',
        value: false,
      },
      {
        text: 'Value Proposition',
        value: true,
      },
      {
        text: 'Brand Voice',
        value: true,
      },
      {
        text: 'Key Words & Phrases',
        value: true,
      },
      {
        text: 'Brand Heirarchy',
        value: true,
      },
      {
        text: 'Brand Messaging',
        value: true,
      },
    ],
  },
  {
    type: 'Operations',
    settings: [
      {
        text: 'Core Values',
        value: true,
      },
      {
        text: 'Vision',
        value: true,
      },
      {
        text: 'Mission',
        value: true,
      },
      {
        text: 'Our Why',
        value: true,
      },
      {
        text: 'BHAG',
        value: false,
      },
    ],
  },
  {
    type: 'Sales',
    settings: [
      {
        text: 'SWOT',
        value: true,
      },
      {
        text: 'Market Strategy',
        value: true,
      },
      {
        text: 'Acquisition Strategy',
        value: true,
      },
    ],
  },
  {
    type: 'Customer Experience',
    settings: [
      {
        text: 'Target Audiences',
        value: true,
      },
      {
        text: 'Personas',
        value: true,
      },
      {
        text: 'Influencers',
        value: false,
      },
      {
        text: 'Value Proposition',
        value: true,
      },
      {
        text: 'Brand Voice',
        value: true,
      },
      {
        text: 'Key Words & Phrases',
        value: true,
      },
      {
        text: 'Brand Heirarchy',
        value: true,
      },
      {
        text: 'Brand Messaging',
        value: true,
      },
    ],
  },
];

export const plans = [
  {
    type: 'downgrade',
    title: 'free forever',
    contents: ['1 User', '1 Collaborator', '1 Board', '1 Workshop'],
    plan: {
      desc: '',
      subDesc: '',
    },
  },
  {
    type: 'current',
    title: 'start-up',
    contents: ['2 Users', '10 Collaborators', '2 Boards', 'All Workshops'],
    plan: {
      desc: '$199 / Month',
      subDesc: 'when paid annually',
    },
  },
  {
    type: 'upgrade',
    title: 'scale-up',
    contents: ['10 Users', '25 Collaborators', '10 Boards', 'All Workshops'],
    plan: {
      desc: '$249 / Month',
      subDesc: 'when paid annually',
    },
  },
  {
    type: 'upgrade',
    title: 'breakthrough',
    contents: ['Unlimited Users', 'Unlimited Collaborators', 'Unlimited Boards', 'All Workshops'],
    plan: {
      desc: '$399 / Month',
      subDesc: 'when paid annually',
    },
  },
];

export const services = [
  {
    title: 'Facilitator',
    content: 'Our facilitators are trained to help you through workshops to properly leverage methodologies and improve outcomes.',
    status: {
      purchasedHours: 10,
      usedHours: 1,
      remainingHours: 9,
    },
    description: '$125 / Hour',
  },
  {
    title: 'Strategist',
    content: 'Our senior consultants are trained in various backgrounds to not just facilitate, but provide candor, solve problems and provide growth insight.',
    status: {
      purchasedHours: 0,
      usedHours: 0,
      remainingHours: 0,
    },
    description: '$249 / Hour',
  },
];

export const invoices = [
  {
    date: 'June 1st, 2020',
    title: 'Start-Up Plan',
    amount: 199,
  },
  {
    date: 'July 1st, 2020',
    title: 'Start-Up Plan',
    amount: 199,
  },
  {
    date: 'July 21st, 2020',
    title: '10 Faciliator Hours',
    amount: 1250,
  },
  {
    date: 'August 1st, 2020',
    title: 'Start-Up Plan',
    amount: 199,
  },
];

export const colors = [
  {
    title: 'primary',
    hex: '#31cce5',
  },
  {
    title: 'secondary',
    hex: '#004e64',
  },
  {
    title: 'tertiary',
    hex: '#324b50',
  },
  {
    title: 'additional',
    hex: '#b24c63',
  },
];

export const fonts = [
  {
    fontFamily: 'Raleway',
    title: 'primary',
  },
  {
    fontFamily: 'Open Sans',
    title: 'secondary',
  },
  {
    fontFamily: 'Helvetica',
    title: 'tertiary',
  },
];

export const images = [
  'https://breakthroughos.com/wp-content/uploads/2020/07/photo-1419833173245-f59e1b93f9ee.jpg',
  'https://breakthroughos.com/wp-content/uploads/2020/07/Blog-img3.jpg',
  'https://breakthroughos.com/wp-content/uploads/2020/01/photo-1524178232363-1fb2b075b655.jpg',
  'https://breakthroughos.com/wp-content/uploads/2020/07/n2xcpr1izxa-scaled.jpg',
  'https://breakthroughos.com/wp-content/uploads/2020/07/Thailand-img.jpg',
  'https://breakthroughos.com/wp-content/uploads/2020/01/photo-1529119368496-2dfda6ec2804.jpg',
  'https://breakthroughos.com/wp-content/uploads/2020/07/elif-pr-img2.png',
  'https://breakthroughos.com/wp-content/uploads/2020/07/kayaking-img.jpg',
  'https://breakthroughos.com/wp-content/uploads/2020/01/photo-1503428593586-e225b39bddfe.jpg',
  'https://breakthroughos.com/wp-content/uploads/2020/07/elif-pr-img3.png',
  'https://breakthroughos.com/wp-content/uploads/2020/07/Harbor-lake.jpg',
];

export const CommentLogs = [
  {
    img: 'https://breakthroughos.com/wp-content/uploads/2020/11/nohb3fjsy90-scaled-50x50.jpg',
    name: 'John.S',
    board: 'Marketing Team',
    date: '2020-12-01 5:27 pm',
  },
  {
    img: 'https://breakthroughos.com/wp-content/uploads/2020/11/mez3pofgs_k-scaled-50x50.jpg',
    name: 'John.S',
    board: 'Marketing Team',
    date: '2020-12-01 5:22 pm',
  },
  {
    img: 'https://breakthroughos.com/wp-content/uploads/2020/11/ohkelokq3re-scaled-50x50.jpg',
    name: 'John.S',
    board: 'Marketing Team',
    date: '2020-12-01 5:21 pm',
  },
  {
    img: 'https://breakthroughos.com/wp-content/uploads/2020/11/ar9mvykzsoa-scaled-50x50.jpg',
    name: 'John.S',
    board: 'Marketing Team',
    date: '2020-12-01 5:20 pm',
  },
  {
    img: 'https://breakthroughos.com/wp-content/uploads/2020/11/ar9mvykzsoa-scaled-50x50.jpg',
    name: 'John.S',
    board: 'Marketing Team',
    date: '2020-12-01 5:19 pm',
  },
  {
    img: 'https://breakthroughos.com/wp-content/uploads/2020/11/rdeovte7vos-scaled-50x50.jpg',
    name: 'John.S',
    board: 'Marketing Team',
    date: '2020-12-01 5:17 pm',
  },
  {
    img: 'https://breakthroughos.com/wp-content/uploads/2020/11/nohb3fjsy90-scaled-50x50.jpg',
    name: 'John.S',
    board: 'Marketing Team',
    date: '2020-12-01 5:15 pm',
  },
];

export const Boards = [
  {
    name: 'Marketing Team',
    description: 'Board Description',
    collaborators: 5,
    comments: 8,
  },
  {
    name: 'Marketing Team',
    description: 'Board Description',
    collaborators: 5,
    comments: 8,
  },
];

export const Articles = [
  {
    date: '2020-11-01',
    video: 'https://www.youtube.com/embed/Im6gfxoiHeU',
    children: (
      <>
        Watch out
        {' '}
        <a href="/article/breakthroughshow">Breakthrough Show</a>
        {' '}
        on
        {' '}
        <strong>determining your market approach.</strong>
      </>
    ),
  },
  {
    date: '2020-11-02',
    children: (
      <>
        <strong>Read</strong>
        {' '}
        about
        {' '}
        <a href="/article/howtouseyourbrandvoice">how to use your Brand Voice in customer service and support.</a>
      </>
    ),
  },
  {
    date: '2020-11-03',
    img: 'https://breakthroughos.com/wp-content/uploads/2019/07/5cb472d89a73b-space-man-astronaut-cartoon-vector-character-542x600.png',
    children: (
      <>
        Take our
        {' '}
        <a href="/article/branddepthevaluation">brand depth evaluation</a>
        {' '}
        to see where you stack up against other companies.
      </>
    ),
  },
];

export const Logos = {
  data: [
    {
      img: 'https://breakthroughos.com/wp-content/uploads/2020/09/BlueLogo_WhiteBG.svg',
      links: {
        svg: 'https://breakthroughos.com/wp-content/uploads/2020/09/BlueLogo_WhiteBG.svg',
        esp: '',
        png: '',
        jpeg: '',
      },
    },
    {
      img: 'https://breakthroughos.com/wp-content/uploads/2020/09/WhiteLogo_DarkBG.svg',
      links: {
        svg: 'https://breakthroughos.com/wp-content/uploads/2020/09/WhiteLogo_DarkBG.svg',
        esp: '',
        png: '',
        jpeg: '',
      },
    },
  ],
  doNot: [
    {
      img: 'https://breakthroughos.com/wp-content/uploads/2020/09/BlueLogo_WhiteBG.svg',
      description: 'Use other colors.',
    },
    {
      img: 'https://breakthroughos.com/wp-content/uploads/2020/09/BlueLogo_WhiteBG.svg',
      description: 'Use other colors.',
    },
    {
      img: 'https://breakthroughos.com/wp-content/uploads/2020/09/BlueLogo_WhiteBG.svg',
      description: 'Use other colors.',
    },
    {
      img: 'https://breakthroughos.com/wp-content/uploads/2020/09/BlueLogo_WhiteBG.svg',
      description: 'Use other colors.',
    },
  ],
};
