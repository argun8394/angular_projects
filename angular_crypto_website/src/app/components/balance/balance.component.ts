import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/models/balance.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  balance : any;
  balanceData : Balance ;
  filterCheckbox: any;
  // assetCode : string;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.balances();
  }

  balances() {
      this.api.getBalances(this.balanceData).subscribe((response) => {
        this.balance = response.balances
        console.log(typeof this.balance)
        // this.filterCheckbox = response.balances
        // this.balance.forEach((res:any)=>{
        //   if(res.assetCode === "MATIC") {
        //     this.assetCode = "MATIC"
        //     console.log(this.assetCode)
        //   }
        //   return this.assetCode

        // })
        // console.log(this.balance);
      });
  }

  checkboxBalance(assett: string) {
    this.filterCheckbox = this.balance.
    filter((res:any) =>{
      if(res.assetCode === assett || assett === '' ){
        return res;
      }
    })
  }

}
