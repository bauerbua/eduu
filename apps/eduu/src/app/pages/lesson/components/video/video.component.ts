import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() url: string = '';
  @Input() rating: number = 0;
  safeUrl: any = '';

  constructor(public _sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  voteUp() {
    this.rating ++
  }

  voteDown() {
    this.rating --
  }

}
