
    function Item(name, quantity, price, subtotal, totalPrice) {
      this.name =  name;
      this.quantity = quantity;
      this.price = price;
      this.subtotal = subtotal;
      this.totalPrice =totalPrice;
    }


    function getUserInput(){
          var item1 = new Array();
          var item2= new Array();
          var item3= new Array();
          var tax = 0.24;
          var counter = 1;
          var limit = 3;
            // gets user input for the first item1
            var userinput1 =  document.getElementById("item").value;
            var userinput2 =  document.getElementById("quantity").value;
            var userinput3 =  document.getElementById("price").value;
            var subtotal = userinput2*userinput3;
            var totalPrice= subtotal + userinput2*userinput3*tax;
            item1 = new Item(userinput1, userinput2, userinput3, subtotal, totalPrice);
            item1.price = parseInt(userinput3);
            item1.quantity = parseInt(userinput2);

            console.log(item1);
            listOfItems.push(item1);

            if (counter == limit)  {

            }
            else {
              // gets user input for the first item2
                 var userinput4 =  document.getElementById("item2").value;
                 var userinput5 =  document.getElementById("quantity2").value;
                 var userinput6 =  document.getElementById("price2").value;
                 var subtotal = userinput5*userinput6;
                 var totalPrice= subtotal + userinput5*userinput6*tax;
                 item2 = new Item(userinput4, userinput5, userinput6, subtotal, totalPrice);
                 item2.price = parseInt(userinput6);
                 item2.quantity = parseInt(userinput5);

                 console.log(item2);
                 listOfItems.push(item2);

                 if (counter == limit)  {

                 }
                 else {
                   // gets user input for the first item3
                      var userinput7 =  document.getElementById("item3").value;
                      var userinput8 =  document.getElementById("quantity3").value;
                      var userinput9 =  document.getElementById("price3").value;
                      var subtotal = userinput8*userinput9;
                      var totalPrice= subtotal + userinput8*userinput9*tax;
                      item3 = new Item(userinput7, userinput8, userinput9, subtotal, totalPrice);
                      item3.price = parseInt(userinput9);
                      item3.quantity = parseInt(userinput8);

                      console.log(item3);
                      listOfItems.push(item3);

                      var total;
                      var total = parseInt(total);
                      total = item1.totalPrice +  item2.totalPrice + item3.totalPrice;

                    document.getElementById("subtotal1").innerHTML = "Item1: "   + userinput1 + ", " + "TotalPrice:  " + " " +item1.totalPrice;
                    document.getElementById("subtotal2").innerHTML = "Item2: "	+ userinput4 + ", " + "TotalPrice:  " + " " +item2.totalPrice;
                    document.getElementById("subtotal3").innerHTML = "Item3: "	+ userinput7 + ", " + "TotalPrice:  "  + " " + item3.totalPrice;
                    document.getElementById("total").innerHTML = total;

                    console.log("Total: = " + " " + total);
            }
          }

  }

    var listOfItems = [];

    function listItems(){

      console.table(listOfItems);


    }
