import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string = "";
  name: string = "";
  password: string = "";

  constructor( public authService:AuthService ) { }

  ngOnInit(): void {
  }

  faEnvelope = faEnvelope;
  faLock = faLock;
  faUserCircle = faUserCircle;

  onRegisterPress() {
    this.authService.setStatus = "login";
  }

  submitForm(){
  }

}
