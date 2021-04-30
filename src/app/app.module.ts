import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { GNdropzoneModule } from 'gn-dropzone';
import { GNdropzoneModule } from 'projects/gn-dropzone/src/public_api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GNdropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
