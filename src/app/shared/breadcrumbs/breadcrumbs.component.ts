import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent {


  public titulo!: string;

  constructor(private router:Router) {
this.getArgumentosRuta();
  }

  getArgumentosRuta(){
    this.router.events.subscribe(event => {

      if(event instanceof ActivationEnd) {
       event.snapshot.data.titulo==null?'':this.titulo= event.snapshot.data.titulo;       
      }
    });
  }
  

}


