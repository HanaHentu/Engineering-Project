import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Output()
  onClose = new EventEmitter();

  firestore = new FirebaseTSFirestore;
  storage = new FirebaseTSStorage();
  selectedImageFile: File | undefined;

  constructor() { }

  showModal: boolean = false;
  title: string = "";
  tags: string = "";
  resume: string = "";

  ngOnInit(): void {
  }

  postImage(){
    let imageId = this.firestore.genDocId();
    this.storage.upload(
      {
        uploadName: "upload Image Post",
        path: ["Images", imageId, "image"],
        data: {
          data: this.selectedImageFile
        },
        onComplete: (downloadUrl) => {
          this.firestore.create(
            {
              path: ["images", imageId],
              data: {
                tag: this.tags,
                title: this.title,
                url: downloadUrl,
                user: "LnIslB0J6VxoA90lJaLt"
              },
              onComplete: (docId) => {
                this.cancel();
              }
            }
          );
        }
      }
    );
  }

  onImageSelected(imageSelector: HTMLInputElement){
    this.selectedImageFile = imageSelector.files![0];
    if (!this.selectedImageFile) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedImageFile);
    fileReader.addEventListener(
      "loadend",
      ev => {
        let readableString = fileReader.result!.toString();
        let postPreviewImage = <HTMLImageElement>document.getElementById("post-preview-image");
        postPreviewImage.src = readableString;
      }
    )
  }

  selectItem() {
    this.showModal = true;
  }

  cancel() {
    this.onClose.emit(null);
  }

}
