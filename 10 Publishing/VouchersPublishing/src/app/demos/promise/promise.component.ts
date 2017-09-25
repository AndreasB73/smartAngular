import { Http } from '@angular/http';
import { AppSettings } from '../../app.settings';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor(private httpClient: HttpClient, private http: Http) { }

  result : any ;
  resultB : any;
  resultC : any;

  ngOnInit() {
  }

  getVouchers(){    
    this.httpClient.get('http://localhost:5000/api/vouchers')
      .toPromise()
      .then((response)=>this.result = response);      
  }

  getVoucher(){
    this.httpClient.get('http://localhost:5000/api/vouchers/2')
    .toPromise()
    .then((response)=>this.result = response);      
  }

  insertVoucher(){
    var voucher = { Text: "Inserted by Angular", Date: new Date() };
    this.httpClient.post('http://localhost:5000/api/vouchers', voucher)
    .toPromise()
    .then((response)=>{
      if(response == null )  this.result = "Voucher inserted";
    });    
  }

  updateVoucher(){
    var id = 1002;
    var url = "/api/vouchers/" + id;
    var vtu = { "ID": id, "Text": "Updated by Angular", "Date": "2016-04-22T16:59:32.086", "Amount": 99, "Paid": true, "Expense": false, "VATRate" : 20 };
    
    this.httpClient.put('http://localhost:5000/api/vouchers', vtu)
    .toPromise()
    .then((response)=>{
      console.log('voucher updated');
      this.result = response;})
  }

  updateVoucherHttp(){
    var id = 1002;
    var url = "/api/vouchers/" + id;
    var vtu = { "ID": id, "Text": "Updated by Angular", "Date": "2016-04-22T16:59:32.086", "Amount": 99, "Paid": true, "Expense": false, "VATRate" : 20 };
    
    this.httpClient.put('http://localhost:5000/api/vouchers', vtu)
    .toPromise()
    .then((response)=>{
      console.log('voucher updated');
      this.result = response;})
  }

  deleteVoucher(){
    var id = 1002;
    var url = "http://localhost:5000/api/vouchers/" + id;
    this.httpClient.delete(url)
    .toPromise()
    .then((response)=>{
      console.log('voucher deleted');
      this.result = "Voucher deleted";})
  }

  getSum(){
    this.httpClient.get('http://localhost:5000/api/vouchers/getsum/true',)
    .toPromise()
    .then((response)=>{
      this.resultB = response});      
  }

  getSumHttp(){
    this.http.get('http://localhost:5000/api/vouchers/getsum/true',)
    .toPromise()
    .then((response)=>{
      this.resultB = response});      
  }

  //Uncomment / Comment getSum() -> Try only with observe: 'response', watch body -> try full options

  // getSum(){        
  //   this.httpClient.get('http://localhost:5000/api/vouchers/getsum/true', {responseType: 'text', observe: 'response'})
  //   .toPromise()
  //   .then((response)=>{
  //     console.log(response);
  //     this.resultB = response});      
  // }

  getVM(){
    this.httpClient.get('http://localhost:5000/api/vouchers/getvm/1')
    .toPromise()
    .then((response)=>this.resultB = response);  
  }

  doSave(){
    let voucher = {
      "ID": 2,
      "Text": "BP Tankstelle",
      "Date": "2017-06-27T14:30:04.8849651",
      "Amount": 65,
      "Paid": false,
      "Expense": true,
      "Remark": true
    };

    this.httpClient.post('http://localhost:5000/api/vouchers/save', voucher)
    .toPromise()
    .then((response)=>this.resultB = `Voucher with id ${response} was saved` );    
  }
}
