import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileReaderComponent } from './components/file-reader/file-reader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UploadedFilesComponent } from './components/uploaded-files/uploaded-files.component';
import { ClipSizePipe } from './pipes/clip-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FileReaderComponent,
    UploadedFilesComponent,
    ClipSizePipe
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ClipSizePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
