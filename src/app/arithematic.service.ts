import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithematicService {
  Add(num1:number,num2:number):number{
    return num1+num2
  }
  Sun(num1:number,num2:number):number{
    return num1-num2
  }
}
