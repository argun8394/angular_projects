import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { ApiService } from 'src/app/services/api.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  markets:any;

  productList : Products[] ;
  searchKey: any;

  page : number = 0;
  count: number = 0;
  tableSize: number = 10;
  tableSizes : any =[5, 10, 15, 20];


  displayedColumns: string[] = ['no', 'marketCode', 'currentQuote', 'change24h', 'change24hPercent', 'highestQuote24h', 'lowestQuote24h'];

  constructor(private api: ApiService, private filters: FilterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.fetchProducts()
    // console.log(this.searchKey)
     }

  fetchProducts() {
    this.api.getProduct()
    .subscribe(res => { this.productList = res;

      console.log(this.productList)
     })
     this.filters.search.subscribe((value) => {
      this.searchKey = value;
      // console.log(this.searchKey)
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
