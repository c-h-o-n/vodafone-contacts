export interface Contact {
  id: string;
  name: {
    first: string;
    last: string;
  };
  imageUrl: string;
  email: string;
  phone: string;
  address: string;
}
