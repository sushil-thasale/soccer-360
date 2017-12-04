import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.css']
})
export class TextViewComponent implements OnInit {

  @Input() rows: number;
  @Input() text: string;
  @Input() placeholder: string;
  @Input() formatted: boolean;

  constructor() { }

  ngOnInit() {
  }

}
