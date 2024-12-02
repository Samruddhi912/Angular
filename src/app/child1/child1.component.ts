import { Component } from '@angular/core';

import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  PrimeResult:any=0
  constructor(private Prime:NumberService){
    const num1:number=11
    this.PrimeResult=this.Prime.ChkPrime(num1)
  }
}
