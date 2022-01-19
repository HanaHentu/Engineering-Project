import { Component, OnInit } from '@angular/core';
import { faBars, faSearch, faGrin, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  visible: boolean = false;

  constructor( public navbarService: NavbarService ) {}

  getVisible(): void{
    this.visible = this.navbarService.getVisible();
  }

  ngOnInit(): void {
    this.getVisible();
  }

  faEnvelope = faEnvelope;
  faBell = faBell;
  faBars = faBars;
  faSearch = faSearch;
  faGrin = faGrin;

}
