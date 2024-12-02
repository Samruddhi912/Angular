import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  CapitalResult:any=0
  constructor(private Capital:StringService){
    const letter="My Name is SAMRUDDHI"
    this.CapitalResult=this.Capital.CountCapital(letter)
  }
}
