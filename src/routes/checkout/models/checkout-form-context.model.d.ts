import type { CheckoutFormData } from './checkout-form-data.model';

export interface CheckoutFormContext {
  formData: CheckoutFormData;
  touched: { [key in keyof CheckoutFormData]: boolean };
  errors: { [key in keyof CheckoutFormData]: string };
  validateForm: () => boolean;
  isValidEmail: (value: string) => boolean;
  handleBlur: (field: keyof CheckoutFormData) => void;
  handleSubmit: () => void;
}
