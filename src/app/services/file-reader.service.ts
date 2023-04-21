import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  constructor() { }

  upload(file: File){
    const fileToUpload = {
      name: file.name,
      size: file.size,
      date: new Date(file.lastModified)
    }
    const uploadedFiles = localStorage.getItem('uploaded-files');
    if(uploadedFiles) {
      const parsedFiles = JSON.parse(uploadedFiles);
      parsedFiles.push(fileToUpload);

      localStorage.setItem('uploaded-files', JSON.stringify(parsedFiles));
    }
    else{
      localStorage.setItem('uploaded-files', JSON.stringify([fileToUpload]));
    }

    console.log(localStorage);

    return of(true);
  }

  getFiles() {
    const uploadedFiles = localStorage.getItem('uploaded-files');
    return of(uploadedFiles ? JSON.parse(uploadedFiles) : null)
  }
}
