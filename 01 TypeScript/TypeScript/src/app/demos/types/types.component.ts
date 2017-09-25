import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  basicVariables() {
    debugger;

    var myname: string = "alex";

    //Numbers
    var age: number;
    var weight: number = 83.12;
    var dogWeight = 25.4;
    var rand = Math.random();

    var numbers: number[] = [];
    numbers[0] = 1;
    //numbers.push("two"); // compile-time error

    var isCustomer: boolean = false;
    var finished = false;

    //strings
    var dogName: string = "Giro";
    var otherDogName = "Soi";
    var x = 10;

    var strings: Array<string> = ["hubert", "Sam"];
    strings.push("Hans");
    //strings[1] = 1337; // compile time error

    // Function returning never must have unreachable end point
    function error(message: string): never {
      throw new Error(message);
    }

    // Not much else we can assign to these variables!
    let u: undefined = undefined;
    let n: null = null;
  }

  useLetConst() {
    debugger;

    var index: number = 0;
    var array = ["a", "b", "c"];
    for (let index: number = 0; index < array.length; index++) {
      console.log("Inside for ..." + index);
      console.log("Inside for ..." + array[index]);
    }
    console.log(index); // 0
    const pi = 3.14;
    //pi = 2;
  }

  stringFunctions() {
    debugger;

    var productID = 100;
    var category = "music";
    //string concatenation
    var url = "http://server/" + category + "/" + productID;
    console.log(url);

    //Template Literals using Backticks 
    var tl = `http://server/${category}/${productID}`;
    console.log(tl);

    //startswith
    var str = 'To be, or not to be, that is the question.';
    console.log(str.startsWith('To be'));       // true
    console.log(str.endsWith('question.'));     // true

    //include
    function countString(ts) {
      const characters = ["a", "b", "c"];
      let ct = 0;

      for (var i = 0; i < ts.length; i++) {
        if (characters.includes(ts[i])) {
          ct++;
        }
      }
      console.log(`ct: ${ct}`);

      //same as above - modern js
      ct = 0;
      for (var char of ts) {
        if (characters.includes(char)) {
          ct++
        }
      }

      console.log(`ct: ${ct}`);

      return ct;
    }

    console.log(`chars included in your string: ${countString("abheben")}`);

  }

  useVoidAny() {
    debugger;

    function handleClick(): void {
      var g = "I don't return anything.";
      console.log(g);
    }

    //let nonsens: void = 10; //Conversion error
    let nonsens: void = undefined;

    let likeadelegate: void = handleClick();

    let notSure: any = 4;
    notSure = "maybe a string instead";
    notSure = false; // okay, definitely a boolean
  }
  
  useEnums() {
    debugger;

    enum VoucherStatus { draft, complete, pending };

    var n: VoucherStatus;
    n = VoucherStatus.draft;
    n = VoucherStatus.complete;
    //n = VoucherStatus.unfinished; // compile-time error
    //n = "on the way"; // compile-time error

    if (n === VoucherStatus.complete) {

    }
  }

  introArrays() {
    debugger;

    //declaration using type followed by []
    var customers: string[] = ["Alex", "Giro", "Sonja", "Soi", "David"];
    //declaration using generic array type
    let nbrs: Array<number> = [3, 4, 5];

    console.log(customers.length + "Persons in Array");
    customers[2] = "Brunhilde";
    console.log("Person with index 1 is" + customers[1]);

    //destructuring
    let input = [1, 2];
    let [first, second] = input;

    //for ... of
    let list: number[] = [4, 5, 6];

    for (let i in list) {
      console.log(i); // "0", "1", "2", -> index
    }

    for (let i of list) {
      console.log(i); // "4", "5", "6"
    }
  }

  arrayHelpers() {
    debugger;

    var fruits = [
        { name: 'apples', quantity: 2, price: 3, region: "europe" },
        { name: 'bananas', quantity: 0, price: 5, region: "caribean" },
        { name: 'cherries', quantity: 5, price: 8, region: "europe" }
    ];

    //remember ECMA Script 5 pattern
    var result = [];
    for (var i = 0; i < fruits.length; i++) {
        var item = fruits[i];
        if (item.quantity < 6) {
            result.push(item);
        }
    }
    console.log(`There areas ${result.length } items in the Array`);
    
    //forEach
    fruits.forEach(function(fruit) {
        fruit.quantity ++;
    });

    //find
    var cherry = fruits.find(function(fruit) {
        return fruit.name === 'cherries';
    });
    console.log(cherry);

    //filter
    var cheap = fruits.filter(function(item) {
        return item.price < 6;
    });
    console.log(cheap);
    
    //reduce
    var fruitNames = fruits.reduce(function(prevArray, fruit) {
        prevArray.push(fruit.name);
        return prevArray;
    }, []);
    console.log(fruitNames);

    //splice
    var dogs = ['whippet', 'galgo espanol', 'magyar whistler', 'magyar agar' ];
    dogs.splice(2, 0, 'chart polski');
    console.log(dogs);
    dogs.splice(3, 1);
    console.log(dogs);
}

  //-> C# Dictionary
  maps() {
    debugger;

    var myMap = new Map();
    var keyString = "a string",
        keyObj = {},
        keyFunc = function () { console.log("function in map array") };
    // setting the values
    myMap.set(keyString, "value associated with 'a string'");
    myMap.set(keyObj, "value associated with keyObj");
    myMap.set(keyFunc(), "value associated with keyFunc");
    console.log("Map size: " + myMap.size); // 3
    // getting the values
    myMap.get(keyString);   // "value associated with 'a string'"
    myMap.get("a string");  // "value associated with 'a string'" because keyString === 'a string'
    myMap.get(keyObj);      // "value associated with keyObj"
  }

  //-> Indexed Array
  sets() {
    debugger;

    var mySet = new Set();
    mySet.add(1);
    mySet.add("some text");
    var o = { a: 1, b: 2 };
    mySet.add(o);

    mySet.has(1); // true
    mySet.has(3); // false, 3 has not been added to the set
    mySet.has(Math.sqrt(25));  // true
    mySet.has("Some Text".toLowerCase()); // true
    mySet.has(o); // true
    var size = mySet.size; // 4
    mySet.delete(5); // removes 5 fro
  }

  restParams() {    
    debugger;

    var store: any = new Array();
    store.rows = new Map;
  
    store.add = function (category, ...items) {

        var row = store.rows[category];
        if (row==undefined) {
            store.rows.set(category, new Array());
        }
        
        items.forEach(function (item) {
            store.rows.get(category).push(item);
        });
    };

    store.add('fruit', 'apple');
    store.add('dairy', 'milk', 'cheese', 'yoghurt');
    store.add('pastries', 'donuts', 'croissants');
    store.add('cleaning', 'soap', 'body lotion', 'shampoo', 'tooth brush');

    console.log('There are the following items in the store')
    console.log(store);
  }

  enhancedObjectLiterals() {
    debugger;

    //Property value shorthand
    function getCarES5(make, model, value) {
      return {
        make: make,
        model: model,
        value: value
      };
    }

    function getCar(make, model, value) {
      return {
        // with property value shorthand
        // syntax, you can omit the property
        // value if key matches variable
        // name
        make,
        model,
        value
      };
    }

    //Method definition shorthand
    function getBusES5(make, model, value) {
      return {
        depreciate: function () {
          this.value -= 2500;
        }
      };
    }

    function getBus(make, model, value) {
      return {
        // Method definition shorthand syntax
        // omits `function` keyword & colon
        depreciate() {
          this.value -= 2500;
        }
      };
    }
  }

  objAssign() {
    debugger;
    
    var obj = { name: 'alex' };
    var copy = Object.assign({}, obj, {birth: moment("19700402", "YYYYMMDD").format("MMM Do YY")});
    console.log(copy);
  }
}
