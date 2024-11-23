import {
  About,
  AlphabeticalIndex,
  Bookmarks,
  Content,
  History,
  Hymn,
  Preface,
  Reference,
  Search,
  Settings
} from '../view/pages';

const routes = [
  {
    path: '/',
    element: <Search />
  },
  {
    path: '/hymns/:number',
    element: <Hymn />
  },
  {
    path: '/settings',
    element: <Settings />
  },
  { path: '/about', element: <About /> },
  {
    path: '/alphabetical',
    element: <AlphabeticalIndex />
  },
  {
    path: '/bookmark',
    element: <Bookmarks />
  },
  {
    path: '/content',
    element: <Content />
  },
  {
    path: '/history',
    element: <History />
  },
  { path: '/preface', element: <Preface /> },
  { path: '/reference', element: <Reference /> }
];

export default routes;
