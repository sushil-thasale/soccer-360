import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-view',
  templateUrl: './youtube-view.component.html',
  styleUrls: ['./youtube-view.component.css']
})
export class YoutubeViewComponent implements OnInit {

  @Input() url: string;
  @Input() width: string;

  sanitizedURL: SafeUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sanitizedURL = this.getEmbededUrl();
  }

  getEmbededUrl() {
    const urlParts: string[] = this.url.split('/');
    const videoId: string = urlParts[urlParts.length - 1];
    const embededUrl: string = 'https://www.youtube.com/embed/' + videoId;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embededUrl);
  }
}
