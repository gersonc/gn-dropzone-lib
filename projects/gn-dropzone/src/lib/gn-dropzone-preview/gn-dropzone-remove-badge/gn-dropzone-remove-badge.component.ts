import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'gn-dropzone-remove-badge',
  template: `
    <svg>
      <line x1="0" y1="0" x2="10" y2="10" />
      <line x1="0" y1="10" x2="10" y2="0" />
    </svg>
  `,
  styleUrls: ['./gn-dropzone-remove-badge.component.scss']
})
export class GnDropzoneRemoveBadgeComponent { }
