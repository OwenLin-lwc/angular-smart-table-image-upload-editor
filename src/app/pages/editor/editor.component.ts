import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent extends DefaultEditor implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

  onUploadFinished(event) {
    this.cell.newValue = event.src;
  }

  onRemoved(event) {
    this.cell.newValue = null;
  }

}