import { Http } from '@angular/http';
import {Component, ElementRef, ViewChild,  OnInit} from '@angular/core';
import { MaterialModule } from '@angular/material';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-using-material',
  templateUrl: './using-material.component.html',
  styleUrls: ['./using-material.component.css']
})
export class UsingMaterialComponent implements OnInit {

  dogs: Array<any>;

  constructor(private http:Http) {  }

  ngOnInit() {
    this.http.get('./assets/data.json')
    .map(response => response.json().screenshots)
    .subscribe(res => this.dogs = res);
  }

  likeMe(i) {
    if (this.dogs[i].liked == 0){
      this.dogs[i].liked = 1;
      console.log('dog liked')
    }
    else {
      this.dogs[i].liked = 0;
      console.log('dog unliked')
    }
  }

  deleteMe(i) {
    this.dogs.splice(i,1);
    console.log(i);
  }
}