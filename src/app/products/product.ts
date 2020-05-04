export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;    
    category: string;
    tags?: string[];
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
  }
  export interface ProductResolved {
    product: IProduct;
    error?: any;
  }