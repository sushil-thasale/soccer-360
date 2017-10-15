import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-html-view',
  templateUrl: './html-view.component.html',
  styleUrls: ['./html-view.component.css']
})
export class HtmlViewComponent implements OnInit {

  @Input() htmlSnippet: string;

  constructor() { }

  ngOnInit() {
  }

}
