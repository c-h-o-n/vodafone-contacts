// "name": {
//     "title": "Miss",
//     "first": "Emmanuella",
//     "last": "Teunissen"
export type Contact = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    small: string;
  };
  phone: string;
  email: string;
  login: {
    uuid: string;
  };
};

// "results": [
//     {
//       "name": {
//         "title": "Mrs",
//         "first": "Glikeriya",
//         "last": "Tanskiy"
//       },
//       "email": "glikeriya.tanskiy@example.com",
//       "login": {
//         "uuid": "3d61bd2d-757e-4d12-bf69-068f305ded53",
//       "phone": "(066) J88-8313",
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/women/19.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
//       },
//     }
//   ],
