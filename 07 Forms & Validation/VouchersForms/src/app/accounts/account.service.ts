
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from "../shared/index";
import { Observable } from 'rxjs';

@Injectable()
export class AccountsService {
    constructor(private httpClient: HttpClient) { }

    accounts = null;

    getAccounts() : Observable<any>  {        
        return this.httpClient.get('http://localhost:5000/api/accounts');
    }

    getAccount(id: number) : Observable<any>  {        
        return this.httpClient.get('http://localhost:5000/api/accounts/' + id);
    }

    insertAccount(voucher: Account) : void {                
        this.httpClient.post('http://localhost:5000/api/accounts', voucher)
            .subscribe(()=>console.log(`account with id ${voucher.ID} inserted`), 
            (err)=> console.log(err));            
    }

    updateAccount(voucher: Account) : void {
        this.httpClient.put('http://localhost:5000/api/accounts', voucher)
            .subscribe(()=>console.log(`account with id ${voucher.ID} updated`), 
            (err)=> console.log(err));
    }

    deleteAccount(id: number) : void {
        var url = "http://localhost:5000/api/accounts/" + id;
        this.httpClient.delete(url)
            .subscribe(()=>console.log(`account with id ${id} deleted`), 
            (err)=> console.log(err));
    }
    
}