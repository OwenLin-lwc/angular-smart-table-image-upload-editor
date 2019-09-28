import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { EditorComponent } from './editor/editor.component';
import { RenderComponent } from './render/render.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ImageUploadModule } from 'angular2-image-upload';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    ImageUploadModule.forRoot(),
    HttpClientModule
  ],
  declarations: [PagesComponent, EditorComponent, RenderComponent],
  bootstrap: [EditorComponent, RenderComponent]
})
export class PagesModule { }