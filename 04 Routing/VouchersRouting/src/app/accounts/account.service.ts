
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from "../shared/index";

@Injectable()
export class AccountsService {
    constructor(private http: HttpClient) { }

    accounts = null;

    getAccounts() : Promise<any> {
        return this.http.get('/assets/accounts.json').toPromise();          
    }
    
    getAccount(id: number) : Promise<any> {
        return new Promise<Account>((resolve, reject)=>{
            this.http.get('/assets/accounts.json').toPromise()
            .then((data: Account[])=>{
                var v = data.filter((item)=>{
                    return item.ID == id;
                 })
                 resolve(v[0]);
            })
            .catch(err=>reject(err));
        })
    }
}