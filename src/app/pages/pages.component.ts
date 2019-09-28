import { Component, OnInit } from '@angular/core';
import { SmartTableConfig, LangList } from './smart-table-config';
import { LocalDataSource } from 'ng2-smart-table';
import { UploadItem } from '../interfaces/upload-Item';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  settings = SmartTableConfig;
  source: LocalDataSource = new LocalDataSource();
  uploadItems: UploadItem[] = [];

  constructor() { }

  ngOnInit() {
    this.settings.columns.lang.valuePrepareFunction = (cell) => this.showLangTitle(cell);
    this.settings.columns.lang.editor.config.list = LangList;
  }

  private showLangTitle(value) {
    return !!value ? LangList.find(v => v.value === value).title : '';
  }

  onCreateConfirm(event) {
    if (event.newData.lang !== '') {
      this.uploadItems.push(event.newData);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.uploadItems.splice(this.uploadItems.findIndex(v => v.lang === event.data.lang), 1);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}