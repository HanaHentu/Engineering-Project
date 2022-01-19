import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  visible: boolean = false;

  constructor( public navbarService: NavbarService ) {}

  getVisible(): void{
    this.visible = this.navbarService.getVisible();
  }

  ngOnInit(): void {
    this.getVisible();
  }

}
