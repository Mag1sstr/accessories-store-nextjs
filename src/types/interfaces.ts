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
