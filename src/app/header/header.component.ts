import { Component, OnInit } from '@angular/core';
import { faBars, faSearch, faGrin, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavbarService } from '../navbar.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  visible: boolean = false;  
  showModal: boolean = false;

  constructor( public navbarService: NavbarService ) {}

  getVisible(): void{
    this.visible = this.navbarService.getVisible();
  }

  ngOnInit(): void {
    this.getVisible();
  }  
  
  onClick(){
    this.showModal = true;
  }

  faEnvelope = faEnvelope;
  faBell = faBell;
  faBars = faBars;
  faSearch = faSearch;
  faGrin = faGrin;

}
