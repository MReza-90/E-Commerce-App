package com.shop2go.ecommerce.service;


import com.shop2go.ecommerce.dto.PaymentInfo;
import com.shop2go.ecommerce.dto.Purchase;
import com.shop2go.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;

}
