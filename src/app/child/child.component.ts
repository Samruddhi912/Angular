import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  PrimeResult:any=0
  CapitalResult:number=0
  constructor(private Prime:NumberService, private Capital:StringService){
    const num5=21
    const Word="SamRuddHi KAdaM"
    this.PrimeResult=this.Prime.ChkPrime(num5)
    this.CapitalResult=this.Capital.CountCapital(Word)
  }
  
}
