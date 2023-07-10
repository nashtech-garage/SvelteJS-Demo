<script lang="ts">
  import { CHECKOUT_FORM_KEY } from './constants';
  import type { CheckoutFormContext, CheckoutFormData } from './models';

  import { formControl } from './directives/form-control';
  import { onMount, setContext } from 'svelte';
  import { writable, get, type Writable } from 'svelte/store';

  const initialFormData: CheckoutFormData = {
    firstName: '',
    lastName: '',
    country: '',
    addressLine1: '',
    addressLine2: '',
    townCity: '',
    state: '',
    postcode: '',
    phone: '',
    email: '',
    createAccount: false,
    accountPassword: '',
    shipToDifferentAddress: false,
    orderNotes: ''
  };

  const initialTouched: { [key in keyof CheckoutFormData]: boolean } = {
    firstName: false,
    lastName: false,
    country: false,
    addressLine1: false,
    addressLine2: false,
    townCity: false,
    state: false,
    postcode: false,
    phone: false,
    email: false,
    createAccount: false,
    accountPassword: false,
    shipToDifferentAddress: false,
    orderNotes: false
  };

  const initialErrors: { [key in keyof CheckoutFormData]: string } = {
    firstName: '',
    lastName: '',
    country: '',
    addressLine1: '',
    addressLine2: '',
    townCity: '',
    state: '',
    postcode: '',
    phone: '',
    email: '',
    createAccount: '',
    accountPassword: '',
    shipToDifferentAddress: '',
    orderNotes: ''
  };

  const formContextStore = writable<CheckoutFormContext>({
    formData: initialFormData,
    touched: initialTouched,
    errors: initialErrors,
    validateForm: () => false,
    isValidEmail: () => false,
    handleBlur: () => {},
    handleSubmit: () => {}
  });

  export const formContext = setContext<Writable<CheckoutFormContext>>(
    CHECKOUT_FORM_KEY,
    formContextStore
  );

  let formData: CheckoutFormData = initialFormData;
  let touched = { ...initialTouched };
  let errors = { ...initialErrors };

  const validateForm = () => {
    let valid = true;

    if (touched.firstName && !formData.firstName) {
      errors.firstName = 'First Name is required';
      valid = false;
    } else {
      errors.firstName = '';
    }

    if (touched.lastName && !formData.lastName) {
      errors.lastName = 'Last Name is required';
      valid = false;
    } else {
      errors.lastName = '';
    }

    if (touched.country && !formData.country) {
      errors.country = 'Country is required';
      valid = false;
    } else {
      errors.country = '';
    }

    if (touched.addressLine1 && !formData.addressLine1) {
      errors.addressLine1 = 'Address is required';
      valid = false;
    } else {
      errors.addressLine1 = '';
    }

    if (touched.townCity && !formData.townCity) {
      errors.townCity = 'Town/City is required';
      valid = false;
    } else {
      errors.townCity = '';
    }

    if (touched.state && !formData.state) {
      errors.state = 'Country/State is required';
      valid = false;
    } else {
      errors.state = '';
    }

    if (touched.postcode && !formData.postcode) {
      errors.postcode = 'Postcode/ZIP is required';
      valid = false;
    } else {
      errors.postcode = '';
    }

    if (touched.phone && !formData.phone) {
      errors.phone = 'Phone is required';
      valid = false;
    } else {
      errors.phone = '';
    }

    if (touched.email && (!formData.email || !isValidEmail(formData.email))) {
      errors.email = 'Invalid Email';
      valid = false;
    } else {
      errors.email = '';
    }

    if (formData.createAccount && touched.accountPassword && !formData.accountPassword) {
      errors.accountPassword = 'Account Password is required';
      valid = false;
    } else {
      errors.accountPassword = '';
    }

    if (!formData.shipToDifferentAddress && touched.orderNotes && !formData.orderNotes) {
      errors.orderNotes = 'Order Notes are required';
      valid = false;
    } else {
      errors.orderNotes = '';
    }

    return valid;
  };

  const isValidEmail = (value: string) => {
    // Add your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const markFieldTouched = (field: keyof CheckoutFormData) => {
    touched[field] = true;
    validateForm();
  };

  const markAllAsTouched = () => {
    touched = {
      firstName: true,
      lastName: true,
      country: true,
      addressLine1: true,
      addressLine2: true,
      townCity: true,
      state: true,
      postcode: true,
      phone: true,
      email: true,
      createAccount: true,
      accountPassword: true,
      shipToDifferentAddress: true,
      orderNotes: true
    };
  };

  const handleSubmit = () => {
    markAllAsTouched();

    if (validateForm()) {
      // Perform HTTP request here
      // Redirect to other page after successful submission
      // window.location.href = '/success-page'; // Replace with your desired page URL
    }
  };

  // Clear form data and validation on component mount
  onMount(() => {
    formData = { ...initialFormData };
    touched = { ...initialTouched };
    errors = { ...initialErrors };

    formContextStore.subscribe(x => {
      console.log(x.formData);
      
    })
  });
</script>

<section class="checkout spad">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h6>
          <span class="icon_tag_alt"></span> Have a coupon? <a href="#">Click here</a> to enter your
          code
        </h6>
      </div>
    </div>
    <div class="checkout__form">
      <h4>Billing Details</h4>
      <div>
        {$formContextStore.formData.firstName}
      </div>
      <form on:submit|preventDefault="{handleSubmit}">
        <div class="row">
          <div class="col-lg-8 col-md-6">
            <div class="row">
              <div class="col-lg-6">
                <div class="checkout__input">
                  <p>First Name<span>*</span></p>
                  <input type="text" use:formControl={'firstName'} />
                  {#if touched.firstName && errors.firstName}
                    <p class="text-danger small">{errors.firstName}</p>
                  {/if}
                </div>
              </div>
              <div class="col-lg-6">
                <div class="checkout__input">
                  <p>Last Name<span>*</span></p>
                  <input
                    type="text"
                    bind:value="{formData.lastName}"
                    on:blur="{() => markFieldTouched('lastName')}"
                  />
                  {#if touched.lastName && errors.lastName}
                    <p class="text-danger small">{errors.lastName}</p>
                  {/if}
                </div>
              </div>
            </div>
            <div class="checkout__input">
              <p>Country<span>*</span></p>
              <input
                type="text"
                bind:value="{formData.country}"
                on:blur="{() => markFieldTouched('country')}"
              />
              {#if touched.country && errors.country}
                <p class="text-danger small">{errors.country}</p>
              {/if}
            </div>
            <div class="checkout__input">
              <p>Address<span>*</span></p>
              <input
                type="text"
                placeholder="Street Address"
                class="checkout__input__add"
                bind:value="{formData.addressLine1}"
                on:blur="{() => markFieldTouched('addressLine1')}"
              />
              <input
                type="text"
                placeholder="Apartment, suite, unite ect (optinal)"
                bind:value="{formData.addressLine2}"
              />
              {#if touched.addressLine1 && errors.addressLine1}
                <p class="text-danger small">{errors.addressLine1}</p>
              {/if}
            </div>
            <div class="checkout__input">
              <p>Town/City<span>*</span></p>
              <input
                type="text"
                bind:value="{formData.townCity}"
                on:blur="{() => markFieldTouched('townCity')}"
              />
              {#if touched.townCity && errors.townCity}
                <p class="text-danger small">{errors.townCity}</p>
              {/if}
            </div>
            <div class="checkout__input">
              <p>Country/State<span>*</span></p>
              <input
                type="text"
                bind:value="{formData.state}"
                on:blur="{() => markFieldTouched('state')}"
              />
              {#if touched.state && errors.state}
                <p class="text-danger small">{errors.state}</p>
              {/if}
            </div>
            <div class="checkout__input">
              <p>Postcode / ZIP<span>*</span></p>
              <input
                type="text"
                bind:value="{formData.postcode}"
                on:blur="{() => markFieldTouched('postcode')}"
              />
              {#if touched.postcode && errors.postcode}
                <p class="text-danger small">{errors.postcode}</p>
              {/if}
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="checkout__input">
                  <p>Phone<span>*</span></p>
                  <input
                    type="text"
                    bind:value="{formData.phone}"
                    on:blur="{() => markFieldTouched('phone')}"
                  />
                  {#if touched.phone && errors.phone}
                    <p class="text-danger small">{errors.phone}</p>
                  {/if}
                </div>
              </div>
              <div class="col-lg-6">
                <div class="checkout__input">
                  <p>Email<span>*</span></p>
                  <input
                    type="text"
                    bind:value="{formData.email}"
                    on:blur="{() => markFieldTouched('email')}"
                  />
                  {#if touched.email && errors.email}
                    <p class="text-danger small">{errors.email}</p>
                  {/if}
                </div>
              </div>
            </div>
            <div class="checkout__input__checkbox">
              <label for="acc">
                Create an account?
                <input type="checkbox" id="acc" bind:checked="{formData.createAccount}" />
                <span class="checkmark"></span>
              </label>
            </div>
            {#if formData.createAccount}
              <p>
                Create an account by entering the information below. If you are a returning customer
                please login at the top of the page
              </p>
              <div class="checkout__input">
                <p>Account Password<span>*</span></p>
                <input
                  type="text"
                  bind:value="{formData.accountPassword}"
                  on:blur="{() => markFieldTouched('accountPassword')}"
                />
                {#if touched.accountPassword && errors.accountPassword}
                  <p class="text-danger small">{errors.accountPassword}</p>
                {/if}
              </div>
            {/if}
            <!-- <div class="checkout__input__checkbox">
              <label for="diff-acc">
                Ship to a different address?
                <input
                  type="checkbox"
                  id="diff-acc"
                  bind:checked="{formData.shipToDifferentAddress}"
                />
                <span class="checkmark"></span>
              </label>
            </div> -->
            <!-- {!formData.shipToDifferentAddress && (
              <div class="checkout__input">
                <p>Order notes<span>*</span></p>
                <input type="text" placeholder="Notes about your order, e.g. special notes for delivery." bind:value={formData.orderNotes} on:blur={() => handleBlur('orderNotes')} />
                {#if touched.orderNotes && errors.orderNotes}
                  <p class="text-danger small">{errors.orderNotes}</p>
                {/if}
              </div>
            )} -->
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="checkout__order">
              <h4>Your Order</h4>
              <div class="checkout__order__products">Products <span>Total</span></div>
              <ul>
                <li>Vegetable's Package <span>$75.99</span></li>
                <li>Fresh Vegetable <span>$151.99</span></li>
                <li>Organic Bananas <span>$53.99</span></li>
              </ul>
              <div class="checkout__order__subtotal">Subtotal <span>$750.99</span></div>
              <div class="checkout__order__total">Total <span>$750.99</span></div>
              <div class="checkout__input__checkbox">
                <label for="acc-or">
                  Create an account?
                  <input type="checkbox" id="acc-or" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
              </p>
              <div class="checkout__input__checkbox">
                <label for="payment">
                  Check Payment
                  <input type="checkbox" id="payment" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div class="checkout__input__checkbox">
                <label for="paypal">
                  Paypal
                  <input type="checkbox" id="paypal" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <button type="submit" class="site-btn">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

<style lang="scss">
  /* Checkout */
  .checkout {
    padding-top: 80px;
    padding-bottom: 60px;

    h6 {
      color: #999999;
      text-align: center;
      background: $background;
      border-top: 1px solid #6ab963;
      padding: 12px 0 12px;
      margin-bottom: 75px;

      span {
        font-size: 16px;
        color: #6ab963;
        margin-right: 5px;
      }

      a {
        text-decoration: underline;
        color: #999999;
      }
    }
  }

  .checkout__form {
    h4 {
      color: $normal-color;
      font-weight: 700;
      border-bottom: 1px solid #e1e1e1;
      padding-bottom: 20px;
      margin-bottom: 25px;
    }

    p {
      column-rule: #b2b2b2;
    }
  }

  .checkout__input {
    margin-bottom: 24px;

    p {
      color: $normal-color;
      margin-bottom: 20px;

      span {
        color: #dd2222;
      }
    }

    input {
      width: 100%;
      height: 46px;
      border: 1px solid $border;
      padding-left: 20px;
      font-size: 16px;
      color: #b2b2b2;
      border-radius: 4px;

      &.checkout__input__add {
        margin-bottom: 20px;
      }

      &::placeholder {
        color: #b2b2b2;
      }
    }
  }

  .checkout__input__checkbox {
    margin-bottom: 10px;

    label {
      position: relative;
      font-size: 16px;
      color: $normal-color;
      padding-left: 40px;
      cursor: pointer;

      input {
        position: absolute;
        visibility: hidden;

        &:checked {
          & ~ .checkmark {
            background: $primary-color;
            border-color: $primary-color;

            &:after {
              opacity: 1;
            }
          }
        }
      }

      .checkmark {
        position: absolute;
        left: 0;
        top: 4px;
        height: 16px;
        width: 14px;
        border: 1px solid #a6a6a6;
        content: '';
        border-radius: 4px;

        &:after {
          position: absolute;
          left: 1px;
          top: 1px;
          width: 10px;
          height: 8px;
          border: solid white;
          border-width: 3px 3px 0px 0px;
          -webkit-transform: rotate(127deg);
          -ms-transform: rotate(127deg);
          transform: rotate(127deg);
          content: '';
          opacity: 0;
        }
      }
    }
  }

  .checkout__order {
    background: $background;
    padding: 40px;
    padding-top: 30px;

    h4 {
      color: $normal-color;
      font-weight: 700;
      border-bottom: 1px solid #e1e1e1;
      padding-bottom: 20px;
      margin-bottom: 20px;
    }

    .checkout__order__products {
      font-size: 18px;
      color: $normal-color;
      font-weight: 700;
      margin-bottom: 10px;

      span {
        float: right;
      }
    }

    ul {
      margin-bottom: 12px;

      li {
        font-size: 16px;
        color: $para-color;
        line-height: 40px;
        list-style: none;

        span {
          font-weight: 700;
          float: right;
        }
      }
    }

    .checkout__order__subtotal {
      font-size: 18px;
      color: $normal-color;
      font-weight: 700;
      border-bottom: 1px solid #e1e1e1;
      border-top: 1px solid #e1e1e1;
      padding-bottom: 15px;
      margin-bottom: 15px;
      padding-top: 15px;

      span {
        float: right;
      }
    }

    .checkout__input__checkbox {
      label {
        padding-left: 20px;
      }
    }

    .checkout__order__total {
      font-size: 18px;
      color: $normal-color;
      font-weight: 700;
      border-bottom: 1px solid #e1e1e1;
      padding-bottom: 15px;
      margin-bottom: 25px;

      span {
        float: right;
        color: #dd2222;
      }
    }

    button {
      font-size: 18px;
      letter-spacing: 2px;
      width: 100%;
      margin-top: 10px;
    }
  }
</style>
