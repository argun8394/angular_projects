import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  productList! : Products[] ;
  page : number = 0;
  count: number = 0;
  tableSize: number = 10;
  tableSizes : any =[5, 10, 15, 20];


  displayedColumns: string[] = ['no', 'marketCode', 'currentQuote', 'change24h', 'change24hPercent', 'highestQuote24h', 'lowestQuote24h'];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts() {
    this.api.getProduct()
    .subscribe(res => { this.productList = res;
     console.log(this.productList)
     })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchProducts()
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchProducts()
  }
}
