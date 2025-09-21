export interface IProducts {
  id: number;
  title: string;
  price: string;
  description: string;
  images: string[];
}
export interface IProductsParams {
  title?: string;
  categoryId?: string | number;
}

export interface ICategories {
  id: number;
  name: string;
  image: string;
}

export interface Ilogin {
  access_token: string;
}
export interface IloginBody {
  email: string;
  password: string;
}

export interface IReg {
  id: number;
  email: string;
  name: string;
  avatar: string;
}
export interface IRegBody {
  email: string;
  name: string;
  avatar: string;
  password: string;
}
