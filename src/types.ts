export type User = {
    _id: string;
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
};

export type Supplyshed = {
  _id: string;
  user: string;
  shedName: string;
  city: string;
  country: string;
  estimatedDeliveryTime: number;
  categoriesStored: string[];
  supplies: {
    name: string;
    quantity: number;
    unit: string;
    category: string;
    expiryDate?: string; 
  }[];
  imageUrl: string;
  lastUpdated: string;
};
