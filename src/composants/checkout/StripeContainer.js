import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./paymentForm"

const PUBLIC_KEY = "pk_test_51KoSyaBSBzdg4Hx8lJGrXaCFSb0n3KAy65hzk3mQl4TFC3UztX4AKYU9dKc1Tz4aX21NFzEKo2FXPT1lx5TszkeB00i04DlPDv"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}