import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  firestore = new FirebaseTSFirestore();
  status: boolean = false;
  imagesRef: IMAGES [] = [];

  constructor(public navbarService: NavbarService) { }

  clickEvent() {
    this.status = !this.status;
  }

  ngOnInit(): void {
    this.navbarService.show();
    this.getImageCards();
  }

  getImageCards(){
    this.firestore.getCollection({
      path: ["images"],
      where: [],
      onComplete: (result) => {
        result.docs.forEach(
          doc => {
            let imageCard = <IMAGES>doc.data();
            this.imagesRef.push(imageCard);
          }
        );
      },
      onFail: err => {

      }
    });
  }

}

export interface IMAGES {
  tag: string;
  title: string;
  url: string;
  user: string;
}