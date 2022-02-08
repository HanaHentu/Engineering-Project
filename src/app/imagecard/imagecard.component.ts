import { Component, Input, OnInit } from '@angular/core';
import { IMAGES } from 'src/app/main/main.component';

@Component({
  selector: 'app-imagecard',
  templateUrl: './imagecard.component.html',
  styleUrls: ['./imagecard.component.scss']
})
export class ImagecardComponent implements OnInit {
  @Input() images: IMAGES | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
