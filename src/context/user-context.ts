import { createContext } from 'react';

export interface User {
  email: string;
  location: {
    city: string;
    state: string;
  };
  picture: {
    medium: string;
  };
  name: {
    first: string;
    last: string;
  };
}

export const UserContext = createContext({} as User);
