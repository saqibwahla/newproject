import { Component, OnInit } from '@angular/core';
import sampleData from '../data.json';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  pizzas: any = sampleData;
  cartItems = [];
  currencies = ['Euro', 'US Dollar']
  euro: boolean;
  totalAmount = 0;

  constructor() { }

  ngOnInit(): void {
    this.euro = false;

  }
  onSelectPizza(event, pizza) {
  const  foundItem = this.cartItems.find(item => {
      return pizza.id === item.id;
    })
    if(foundItem === null || foundItem === undefined) {
    pizza.count = 1;
    this.totalAmount += pizza.price + pizza.Deliveryprice;
      this.cartItems.push(pizza);
    }
  }
  onSelectCurrency(event) {
    if (event === 'Euro') {
        this.euro = true;
        this.pizzas.forEach(pizza => {
          let percentage = 0;
          let deliverPer = 0;
          if (pizza.priceType === 'dollar') {
        
             percentage = pizza.price * 0.15
            pizza.price = (pizza.price - percentage);
            deliverPer = pizza.Deliveryprice * 0.15
            pizza.Deliveryprice = (pizza.Deliveryprice - deliverPer);
            pizza.priceType = 'euro';
          }
        });
    }
    else if (event === 'US Dollar') {
      this.euro = false;
      this.pizzas.forEach(pizza => {
        let percentage = 0;
        let deliverPer = 0;
        if (pizza.priceType === 'euro') {
           percentage = pizza.price * 0.18
          pizza.price = parseInt(pizza.price + percentage);
          deliverPer = pizza.Deliveryprice * 0.18
          pizza.Deliveryprice = parseInt(pizza.Deliveryprice + deliverPer);
          pizza.priceType = 'dollar';
         
        }
      });

    }
  }
  onClickAdd(event) {
    event.count += 1;
    this.totalAmount += event.price;
  }
  onClickRemove(event) {
    if (event.count === 1) {

      this.cartItems = this.cartItems.filter(item => {
          return event.id !== item.id;
      });
      this.totalAmount -= (event.price + event.Deliveryprice);
    } else {
      event.count -= 1;
      this.totalAmount -= event.price;
    }
  
  }

}
