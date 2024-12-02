import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  ChkPrime(num1:number):any{
    if(num1<=1){
      return num1+" Not Prime"
    }
    for(let i=2;i<=Math.sqrt(num1);i++){
      if(num1%i==0){
        return num1+" Not Prime"
      }
    }
      return num1+" Prime"
  }
}
