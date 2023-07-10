export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  country: string;
  addressLine1: string;
  addressLine2: string;
  townCity: string;
  state: string;
  postcode: string;
  phone: string;
  email: string;
  createAccount: boolean;
  accountPassword: string;
  shipToDifferentAddress: boolean;
  orderNotes: string;
}
