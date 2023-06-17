import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "../Stripe.css";
import { useSelector } from "react-redux";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function StripeCheckout() {
    const [clientSecret, setClientSecret] = useState("");
    const { cartData, status } = useSelector((state) => state.product);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        console.log("f-first");
        try {
            console.log("f-second");
            fetch("http://localhost:8080/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        } catch (error) {
            console.log(error);
        }
        console.log("f-third");
    }, []);

    const appearance = {
        theme: "stripe",
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="Stripe">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}
