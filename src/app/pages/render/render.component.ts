import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {

  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}