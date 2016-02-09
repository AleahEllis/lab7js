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

  for(var i=0; i<myList.length; i++){
    console.log(myList[0].item + "-$"+(myList[i].price) + ".00");
    total+= myList[i].price;  
  }
  console.log(total) //this goes outside of loop so that it only prints the total once, if you put in back in the loop, it makes a running total//