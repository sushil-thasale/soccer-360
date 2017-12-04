import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from '../../../../../environments/environment';
import { WidgetService } from '../../../../services/widget.service.client';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {

  @Input() url: string;
  @Input() width: string;

  sanitizedURL: SafeUrl;
  baseUrl: string = environment.baseUrl;
  file: string;
  fileUrl: string;

  constructor(private sanitizer: DomSanitizer, private widgetService: WidgetService) {
  }

  ngOnInit() {
    // this.widgetService.getFileByName(this.url)
    //   .subscribe((file: string) => {
    //     this.file = file;
    //   });

    // console.log(this.file);
    // this.fileUrl = 'http://localhost:4200/assets/uploads/' + this.file;
    this.sanitizedURL = this.getSafeUrl();
  }

  getSafeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
