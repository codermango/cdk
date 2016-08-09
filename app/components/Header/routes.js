export default [
  {
    id: 1,
    name: 'Film',
    path: '/film',
    subRoutes: [
      {
        name: 'Personas',
        path: '/film',
      },
      {
        name: 'Content',
        path: '/film/content',
      },
    ],
  },
  {
    id: 2,
    name: 'Series',
    path: '/series',
    subRoutes: [],
  },
  {
    id: 3,
    name: 'TV',
    path: '/tv',
    subRoutes: [],
  },
];
