const menuData = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Présentation",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Page Présentation",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Page Contact",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Page Blog Grille",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Page Blog Barre latérale",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Page Blog Details ",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Page S'identifier (Sign In)",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Page S'inscrire (Sign Up)",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Page Erreur",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
