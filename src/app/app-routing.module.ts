import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileReaderComponent } from './components/file-reader/file-reader.component';
import { UploadedFilesComponent } from './components/uploaded-files/uploaded-files.component';

const routes: Routes = [
  {
    path: '',
    component: FileReaderComponent
  },
  {
    path: 'uploaded-files',
    component: UploadedFilesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
