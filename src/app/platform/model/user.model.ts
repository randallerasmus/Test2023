export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  sendCatalog:boolean;
  addressType : AddressType[];
}

export class AddressType {
  street1?: string;
  street2?: string;
  city?: string;
  state?:string;
  zip?: string;
}
