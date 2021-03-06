import { Account } from './../shared/model/model';
import { AccountsService } from './account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent implements OnInit {

  accounts: Account[];
  
  constructor(private router: Router, private as: AccountsService) {  }

  ngOnInit() {   
    this.as.getAccounts().subscribe(data => this.accounts = data)
  }

  showAccount(id: number){
    this.router.navigate(['/account/' + id]);
  }


}
