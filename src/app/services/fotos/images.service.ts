import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA,
    correctOrientation: true
  };

  constructor(private camera: Camera) {
  }

  takePhoto() {
    return this.camera.getPicture(this.options)
    .then(res => {
      return res;
    })
    .catch(error => {
      console.error(error);
      return error;
    });
  }
}
