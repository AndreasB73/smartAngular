import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-http-clients',
  templateUrl: './http-clients.component.html',
  styleUrls: ['./http-clients.component.css']
})
export class HttpClientsComponent implements OnInit {

  result : any ;

  constructor(private httpClient: HttpClient, private http:Http) { } 
  
    ngOnInit() {
    }
  
    getVouchers(){    
      this.httpClient.get('http://localhost:5000/api/vouchers').subscribe((data)=>{
        this.result = data;
      })
    }

    getVouchersHttp(){    
      this.http.get('http://localhost:5000/api/vouchers')
        .map(response => response.json())
        .subscribe((data)=>{
        this.result = data;
      })
    }

    getVouchersFilter(){    
      this.http.get('http://localhost:5000/api/vouchers')
        .map(response => response.json())
        .filter(data => data.json().deleted == false)        
        .subscribe((data)=>{
        this.result = data;
      })
    }

}
