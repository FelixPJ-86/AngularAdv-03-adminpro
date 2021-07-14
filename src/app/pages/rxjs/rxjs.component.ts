import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: []
})
export class RxjsComponent {

  constructor() { 
    let i =0;

const obs$ =new Observable( observer =>{

  const intervalo=setInterval(()=>{
  
    i++;
    observer.next(i);

    if(i===4){
      clearInterval(intervalo);
      observer.complete();
    }

    if(i===2){
      i=0
      observer.error('i llego a 2');
    }
  },1000);

});

obs$.pipe(
  retry(2)
).subscribe(
  valor=> console.log('Subs:',valor),
  error=>console.log('Error',error) ,
  ()=> console.info('obs terminado')

);


  }


}
