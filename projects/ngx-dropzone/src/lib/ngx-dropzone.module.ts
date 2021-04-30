import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneLabelDirective } from './gn-dropzone-label.directive';
import { NgxDropzonePreviewComponent } from './gn-dropzone-preview/gn-dropzone-preview.component';
import { NgxDropzoneComponent } from './gn-dropzone/gn-dropzone.component';
import { NgxDropzoneImagePreviewComponent } from './gn-dropzone-preview/gn-dropzone-image-preview/gn-dropzone-image-preview.component';
import { NgxDropzoneRemoveBadgeComponent } from './gn-dropzone-preview/gn-dropzone-remove-badge/gn-dropzone-remove-badge.component';
import { NgxDropzoneVideoPreviewComponent } from './gn-dropzone-preview/gn-dropzone-video-preview/gn-dropzone-video-preview.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		NgxDropzoneComponent,
		NgxDropzoneLabelDirective,
		NgxDropzonePreviewComponent,
		NgxDropzoneImagePreviewComponent,
		NgxDropzoneRemoveBadgeComponent,
		NgxDropzoneVideoPreviewComponent,
	],
	exports: [
		NgxDropzoneComponent,
		NgxDropzoneLabelDirective,
		NgxDropzonePreviewComponent,
		NgxDropzoneImagePreviewComponent,
		NgxDropzoneRemoveBadgeComponent,
		NgxDropzoneVideoPreviewComponent,
	]
})
export class NgxDropzoneModule { }
