//shallow copy
let user={
    id:101,
    name:"ravi",
    preferences:{
        theme:"light",
        language:"en"
    }   
};
let copyuser={...user};
console.log(copyuser);
console.log(user)
copyuser.preferences.theme="dark";
console.log(copyuser);
console.log(user);
copyuser.name="raju";
console.log(copyuser);
console.log(user);



//deep copy
let order={
    orderid:"ORD1001",
    customer:{
        name:"anita",
        address:{
            city:"hyderabad",
            pincode:500085
        }
    },
    items:[
        {product:"laptop",price:70000}
    ]
};
let copyorder=JSON.parse(JSON.stringify(order));
console.log(copyorder);
console.log(order);
order.customer.address.city="chennai";
order.items[0].price=65000;
console.log(copyorder);
console.log(order);