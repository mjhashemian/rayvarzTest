interface IHouses {
  additional?: string,
  bathrooms?: string,
  bedrooms?: string,
  city?: string,
  constructionDate?: string,
  description?: string,
  garage?: boolean,
  houseNumber?: string,
  id?: string,
  imageUrl?: string,
  postalCode?: string,
  price?: number,
  size?: string,
  streetName?: string,
}

interface IHouseCard {
  streetName?: string;
  houseNumber?: string;
  postalCode?: string;
  price?: number;
  city?: string;
  bathroom?: string;
  bedroom?: string;
  size?: string;
  id?:string
}

interface IActions {
    id?: string
}