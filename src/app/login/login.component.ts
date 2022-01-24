import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  name: string = "";
  password: string = "";

  status: string = "login";
  visible: boolean = false;

  constructor(public navbarService: NavbarService, public authService: AuthService) { }

  ngOnInit(): void {
    this.navbarService.hide();
  }

  faEnvelope = faEnvelope;
  faLock = faLock;

  onRegisterPress() {
    this.authService.setStatus = "register";
  }

  submitForm(){
  }

}
