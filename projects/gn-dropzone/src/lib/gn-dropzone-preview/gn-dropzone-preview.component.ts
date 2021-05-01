import {Component, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {coerceBooleanProperty} from '../helpers';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

enum KEY_CODE {
  BACKSPACE = 8,
  DELETE = 46
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'gn-dropzone-preview',
  template: `
    <ng-content select="gn-dropzone-label"></ng-content>
    <gn-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </gn-dropzone-remove-badge>
  `,
  styleUrls: ['./gn-dropzone-preview.component.scss']
})
export class GnDropzonePreviewComponent {
  constructor(
    protected sanitizer: DomSanitizer
  ) {
  }

  /** The file to preview. */
  @Input()
  set file(value: File) {
    this._file = value;
  }

  get file(): File {
    return this._file;
  }

  /** Allow the user to remove files. */
  @Input()
  get removable(): boolean {
    return this._removable;
  }

  set removable(value: boolean) {
    this._removable = coerceBooleanProperty(value);
  }

  /** We use the HostBinding to pass these common styles to child components. */
  @HostBinding('style')
  get hostStyle(): SafeStyle {
    const styles = `
			display: flex;
			height: 140px;
			min-height: 140px;
			min-width: 180px;
			max-width: 180px;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			margin: 10px;
			border-radius: 5px;
			position: relative;
		`;

    return this.sanitizer.bypassSecurityTrustStyle(styles);
  }

  protected _file: File;

  protected _removable = false;

  /** Emitted when the element should be removed. */
  @Output() readonly removed = new EventEmitter<File>();

  /** Make the preview item focusable using the tab key. */
  @HostBinding('tabindex') tabIndex = 0;

  @HostListener('keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case KEY_CODE.BACKSPACE:
      case KEY_CODE.DELETE:
        this.remove();
        break;
      default:
        break;
    }
  }

  /** Remove method to be used from the template. */
  _remove(event) {
    event.stopPropagation();
    this.remove();
  }

  /** Remove the preview item (use from component code). */
  remove() {
    if (this._removable) {
      this.removed.next(this.file);
    }
  }

  protected async readFile(): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = e => {
        resolve((e.target as FileReader).result);
      };

      reader.onerror = e => {
        console.error(`FileReader failed on file ${this.file.name}.`);
        reject(e);
      };

      if (!this.file) {
        return reject('No file to read. Please provide a file using the [file] Input property.');
      }

      reader.readAsDataURL(this.file);
    });
  }
}
