import { Component, OnInit } from '@angular/core';
import { faBars, faSearch, faGrin, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  faEnvelope = faEnvelope;
  faBell = faBell;
  faBars = faBars;
  faSearch = faSearch;
  faGrin = faGrin;

  ngOnInit(): void {
  }

}
