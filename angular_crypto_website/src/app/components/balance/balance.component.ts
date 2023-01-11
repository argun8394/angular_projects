import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  balance : any ;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.balances();
  }

  balances() {

      const balanceData = {
        assetCode: '',
        availableAmount: 0
      } ;
      this.api.getBalances(balanceData).subscribe((response) => {
        this.balance = response.balances

        console.log(this.balance);
      });
  }

}
