import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  visible: boolean = false;

  constructor( public navbarService: NavbarService ) {} 

  ngOnInit(): void {
    this.navbarService.hide();
  }

  faEnvelope = faEnvelope;
  faLock = faLock;

}
