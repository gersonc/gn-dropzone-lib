import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GnDropzoneLabelDirective } from './gn-dropzone-label.directive';
import { GnDropzonePreviewComponent } from './gn-dropzone-preview/gn-dropzone-preview.component';
import { GnDropzoneComponent } from './gn-dropzone/gn-dropzone.component';
import { GnDropzoneImagePreviewComponent } from './gn-dropzone-preview/gn-dropzone-image-preview/gn-dropzone-image-preview.component';
import { GnDropzoneRemoveBadgeComponent } from './gn-dropzone-preview/gn-dropzone-remove-badge/gn-dropzone-remove-badge.component';
import { GnDropzoneVideoPreviewComponent } from './gn-dropzone-preview/gn-dropzone-video-preview/gn-dropzone-video-preview.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		GnDropzoneComponent,
		GnDropzoneLabelDirective,
		GnDropzonePreviewComponent,
		GnDropzoneImagePreviewComponent,
		GnDropzoneRemoveBadgeComponent,
		GnDropzoneVideoPreviewComponent,
	],
	exports: [
		GnDropzoneComponent,
		GnDropzoneLabelDirective,
		GnDropzonePreviewComponent,
		GnDropzoneImagePreviewComponent,
		GnDropzoneRemoveBadgeComponent,
		GnDropzoneVideoPreviewComponent,
	]
})
export class GnDropzoneModule { }
