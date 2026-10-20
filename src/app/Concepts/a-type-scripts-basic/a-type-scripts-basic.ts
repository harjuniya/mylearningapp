import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-a-type-scripts-basic',
  styleUrl: './a-type-scripts-basic.scss',
  templateUrl: './a-type-scripts-basic.html',
})
export class ATypeScriptsBasic {

memberName: string = 'Rahul';
balance: number = 1000;
isActive: boolean = true;


//Functions
calculateTotal(amount: number, fee: number): number {
  return amount + fee;
}


//Arrow functions
doubleAmount = (amount: number): number => {
  return amount * 2;
};
//console.log(doubleAmount(150));


//Arrow function with an implicit return
const addFee = (amount: number): number => amount + 50;
//console.log(addFee(200));


}
