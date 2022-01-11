import React from "react";
import useAuth from "../../../Hook/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import "./Payment.css";

import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51KFi67KDJn8hp1BQc6MRuZBqkEifxFJEBBgkiCEGNLkarQwzsGSs0g7DgLpVfX5mXnygxiqbIh9XAALTKh6tcnlS00PTlBuK8j"
  );
  const { totalPrice } = useAuth();

  return (
    <div
      className="detail-container card-container text-center"
      style={{ minHeight: "60vh" }}
    >
      <div>
        <h3>
          Total Price <b>${totalPrice}</b>
        </h3>
      </div>

      <div className="m-5">
        {totalPrice && (
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default Payment;
