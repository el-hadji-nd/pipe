import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Présentation des pipes';

  public salaire: number = 5000;

  value: string = "test";
  
  items: any[] = [
    {name: 'NDIAYE'},
    {name: 'DIOP'},
    {name: 'SECK'},
    {name: 'KIMA'}
  ]
}


