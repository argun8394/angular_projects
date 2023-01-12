import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/models/balance.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  balance : Balance[] ;
  balanceData : Balance ;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.balances();
  }

  balances() {
      this.api.getBalances(this.balanceData).subscribe((response) => {
        this.balance = response.balances
        console.log(this.balance);
      });
  }

}
