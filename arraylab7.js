 var myList =[ //this is the array//
    { //this is the object//
      item: "Cheese", //these are keys:and then properties
      price: 3
    },
    { //this is the object
      item: "Chocolate", //these are keys:and then properties
      price: 4
    },
    {//this is the object
      item: "Kale", //these are keys:and then properties
      price: 2
    },
    ];
  
var total=0;

myList.forEach(function(product){
           console.log(product.item + "-$"+product.price + ".00");
           total+= product.price; 
});
  
console.log("$"+total+".00");