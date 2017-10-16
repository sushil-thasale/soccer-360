import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {

  @Input() url: string;
  @Input() width: string;

  sanitizedURL: SafeUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sanitizedURL = this.getSafeUrl();
  }

  getSafeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
