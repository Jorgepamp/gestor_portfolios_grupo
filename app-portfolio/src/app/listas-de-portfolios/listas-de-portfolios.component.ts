import { Component, OnInit, /*HostBinding*/ } from '@angular/core';

@Component({
  selector: 'app-listas-de-portfolios',
  templateUrl: './listas-de-portfolios.component.html',
  styleUrls: ['./listas-de-portfolios.component.css']
})
export class ListasDePortfoliosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


/*export class SideBarComponent {

  @HostBinding('class.is-open')
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}*/