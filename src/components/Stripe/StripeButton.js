import React from "react";
import StripeCheckout from "react-stripe-checkout";
import formatCurrency from "../../util";

const StripeCheckoutButton = ({ price }) => {
  console.log("price",price)
  const priceForStripe = price * 100;
   const publishableKey = "pk_test_";
  const onToken = token => {
    console.log(token);
    alert("payment succesful");
  };

  return (
    <StripeCheckout
      label="checkout"
      name="21st Shop"
       billingAddress
       shippingAddress

      bitcoin

      amount={priceForStripe}
      panelLabel="checkout"
      token={onToken}
    />
  );
};
export default StripeCheckoutButton