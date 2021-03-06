import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  options: CameraOptions = {
    quality: 10,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA,
    correctOrientation: true
  };

  constructor(private camera: Camera, private errorHandler: ToastService) {
  }

  takePhoto() {
    return this.camera.getPicture(this.options)
    .then(res => {
      return res;
    })
    .catch(error => {
      this.errorHandler.errorToast(error);
      return error;
    });
  }
}
