import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/orders.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-open-orders',
  templateUrl: './open-orders.component.html',
  styleUrls: ['./open-orders.component.css']
})
export class OpenOrdersComponent implements OnInit {

  orderList : Orders[] ;
  ordersData: Orders;


  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.openOrders();
  }


  openOrders() {
      this.api.getOpenOrders(this.ordersData).subscribe((response) => {
        this.orderList = response.openOrders

        console.log(this.orderList);
      });
  }

}
