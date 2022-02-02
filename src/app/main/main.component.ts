import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {  

  constructor( public navbarService: NavbarService ) {}

  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }

  ngOnInit() {
    this.navbarService.show();
  }
}
