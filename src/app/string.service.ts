import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {
  CountCapital(str:string):number{
    let iCnt=0
    for(let i=1; i <=str.length; i++)
    {
      if(str[i]>='A'&& str[i] <= 'Z')
      {
        iCnt++
      }

    }
    return iCnt
  }
}
