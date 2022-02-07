import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private firestore: FirebaseTSFirestore;
  status: boolean = false;
  imagesRef: IMAGES | undefined;

  constructor(public navbarService: NavbarService) {
    this.firestore = new FirebaseTSFirestore();
    this.firestore.getDocument(
      {
        path: ["images", "1"],
        onComplete: (result) => {
          this.imagesRef = <IMAGES>result.data();
        },
        onFail: (err) => {

        }
      }
    );
  }

  clickEvent() {
    this.status = !this.status;
  }

  ngOnInit() {
    this.navbarService.show();
  }

}

export interface IMAGES {
  tag: string;
  title: string;
  url: string;
  user_id: number;
}