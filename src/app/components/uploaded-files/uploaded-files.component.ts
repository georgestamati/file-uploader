import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileReaderService } from '../../services/file-reader.service';

@Component({
  selector: 'app-uploaded-files',
  templateUrl: './uploaded-files.component.html',
  styleUrls: ['./uploaded-files.component.scss']
})
export class UploadedFilesComponent {
  uploadedFiles$ = this.fileReaderService.getFiles();

  constructor(
    private fileReaderService: FileReaderService,
    private router: Router
  ){}

  backToUpload() {
    this.router.navigate(['/'])
  }
}
