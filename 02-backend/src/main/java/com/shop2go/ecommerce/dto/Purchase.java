package com.shop2go.ecommerce.dto;


import com.shop2go.ecommerce.entity.Address;
import com.shop2go.ecommerce.entity.Customer;
import com.shop2go.ecommerce.entity.Order;
import com.shop2go.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
