export interface Message {
  message: string;
}

export interface IBrand {
  id: number | string
  name: string
  origin: string
  logo: string
  isFeatured?: boolean
}

export interface IModel {
  brand: IBrand
  name: string
}

export interface IProduct {
  id: number | string
  name: string
  brand: IBrand
  images: Array<string>
  year?: string
  other1?: string
  isFeatured?: boolean
}

