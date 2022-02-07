import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
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

  private firestore: FirebaseTSFirestore;

  constructor( public authService:AuthService ) {
    this.firestore = new FirebaseTSFirestore;    
  }

  ngOnInit(): void {
  }

  faEnvelope = faEnvelope;
  faLock = faLock;
  faUserCircle = faUserCircle;

  onRegisterPress() {
    this.authService.setStatus = "login";
    this.firestore.create(
      {
        path: ["users"],
        data: {
          email: this.email,
          name: this.name,
          password: this.password,
          role: false
        },
        onComplete: (result) => {
          alert("Registered successfully");
        },
        onFail: (err) => {
          alert("Failed to register" + err);
        }
      }
    )
  }

  submitForm(){
  }

}
