import { Component } from '@angular/core';
import { ArithematicService } from '../arithematic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  public AdditionRes:number=0
  public SubRes:number=0
  constructor(private arithematicService:ArithematicService){
    const num1:number=10
    const num2:number=11
    this.AdditionRes=this.arithematicService.Add(num1,num2)
    this.SubRes=this.arithematicService.Sun(num1,num2)
  }

}
