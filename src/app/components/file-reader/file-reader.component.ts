import {
  Component,
  ElementRef,
  HostBinding,
  ViewChild,
} from '@angular/core';
import { finalize, tap} from 'rxjs';
import { FileReaderService } from '../../services/file-reader.service';
import { Router } from '@angular/router';
import { ClipSizePipe } from '../../pipes/clip-size.pipe';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.scss'],
  providers: [ ClipSizePipe ]
})

export class FileReaderComponent {
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;

  isUploaded = false;
  isUploading = false;

  fileName: string;
  fileSize: string;
  fileContent: string;

  acceptedFileExtensions = '.rtf,.txt,.doc,.docx';

  constructor(
    private fileReaderService: FileReaderService,
    private clipSizePipe: ClipSizePipe,
    private router: Router
  ) {}

  onSelectFile() {
    this.fileInput.nativeElement.click();
  }

  onDrag(event: Event) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();

    if (!event.dataTransfer.files.length) {
      return;
    }

    this.uploadFile(event.dataTransfer.files.item(0));
  }

  onFileDialogChange($event: Event) {
    $event.stopPropagation();

    const target = $event.target as HTMLInputElement;
    if (target.files.length === 0) {
      return;
    }

    this.uploadFile(target.files.item(0));
  }

  clearFile() {
    this.fileInput.nativeElement.value = null;
    this.fileName = null;
    this.fileSize = null;
    this.isUploaded = false;
  }

  private uploadFile(file: File) {
    this.isUploading = true;
    this.fileName = file.name;
    this.fileSize = this.clipSizePipe.transform(file.size);

    this.fileReaderService.upload(file)
      .pipe(
        tap(() => {
          const fileReader = new FileReader();
          fileReader.onload = (e) => {
            this.fileContent = fileReader.result as string;
          }

          fileReader.readAsText(file);
        }),
        finalize(() => {
          this.isUploading = false;
          this.isUploaded = true;
        })
      )
      .subscribe();
  }

  goToUploadedFiles() {
    this.router.navigate(['/uploaded-files'])
  }
}
