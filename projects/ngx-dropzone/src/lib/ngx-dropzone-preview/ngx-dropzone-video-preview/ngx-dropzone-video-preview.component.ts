import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxDropzonePreviewComponent } from '../gn-dropzone-preview.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'gn-dropzone-video-preview',
  template: `
    <video *ngIf="sanitizedVideoSrc" controls (click)="$event.stopPropagation()">
      <source [src]="sanitizedVideoSrc" />
    </video>
    <ng-content select="gn-dropzone-label"></ng-content>
    <gn-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </gn-dropzone-remove-badge>
	`,
  styleUrls: ['./gn-dropzone-video-preview.component.scss'],
  providers: [
    {
      provide: NgxDropzonePreviewComponent,
      useExisting: NgxDropzoneVideoPreviewComponent
    }
  ]
})
export class NgxDropzoneVideoPreviewComponent extends NgxDropzonePreviewComponent implements OnInit, OnDestroy {

  constructor(
    sanitizer: DomSanitizer
  ) {
    super(sanitizer);
  }

  /** The video data source. */
  sanitizedVideoSrc: SafeUrl;

  private videoSrc: string;

  ngOnInit() {
    if (!this.file) {
      console.error('No file to read. Please provide a file using the [file] Input property.');
      return;
    }

    /**
     * We sanitize the URL here to enable the preview.
     * Please note that this could cause security issues!
     **/
    this.videoSrc = URL.createObjectURL(this.file);
    this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustUrl(this.videoSrc);
  }

  ngOnDestroy() {
    URL.revokeObjectURL(this.videoSrc);
  }
}
