
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../account.service';
import { Account } from '../../shared/index';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: Account;

  constructor(private as: AccountsService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {

    this.account = new Account();

    this.as.getAccount(this.route.snapshot.params['id']).subscribe(data => {
        this.account = data;
    });

    //Accessing Query Params
    var readonly = this.route.snapshot.queryParams['readonly'];
    console.log(`Page is readonly: ${readonly}` )

    //Accessing Fragments
    var section = this.route.snapshot.fragment;
    if(section!=undefined) {
      console.log(`Section to navigate to: ${section}` )
    }
  }

  saveAccount() {
      if (this.account.ID == undefined || this.account.ID == 0) {
        this.as.insertAccount(this.account)
      } else {
        this.as.updateAccount(this.account)
      }
    }

}
