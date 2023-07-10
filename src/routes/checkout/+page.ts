import type { BillingDetails } from './models';

export const load = (query) => {
  console.log('run load', query);
  
  const billingDetails: BillingDetails = {
    firstName: '',
    lastName: '',
    country: ''
  };
  return billingDetails;
};
