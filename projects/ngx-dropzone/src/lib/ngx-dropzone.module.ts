import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GNdropzoneLabelDirective } from './gn-dropzone-label.directive';
import { GNdropzonePreviewComponent } from './gn-dropzone-preview/gn-dropzone-preview.component';
import { GNdropzoneComponent } from './gn-dropzone/gn-dropzone.component';
import { GNdropzoneImagePreviewComponent } from './gn-dropzone-preview/gn-dropzone-image-preview/gn-dropzone-image-preview.component';
import { GNdropzoneRemoveBadgeComponent } from './gn-dropzone-preview/gn-dropzone-remove-badge/gn-dropzone-remove-badge.component';
import { GNdropzoneVideoPreviewComponent } from './gn-dropzone-preview/gn-dropzone-video-preview/gn-dropzone-video-preview.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		GNdropzoneComponent,
		GNdropzoneLabelDirective,
		GNdropzonePreviewComponent,
		GNdropzoneImagePreviewComponent,
		GNdropzoneRemoveBadgeComponent,
		GNdropzoneVideoPreviewComponent,
	],
	exports: [
		GNdropzoneComponent,
		GNdropzoneLabelDirective,
		GNdropzonePreviewComponent,
		GNdropzoneImagePreviewComponent,
		GNdropzoneRemoveBadgeComponent,
		GNdropzoneVideoPreviewComponent,
	]
})
export class GNdropzoneModule { }
