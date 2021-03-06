import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestPdfComponent } from './test-pdf/test-pdf.component';
import { PdfObjectInfoComponent } from './pdf-object-info/pdf-object-info.component';
import { PageThumbnailComponent } from './page-thumbnail/page-thumbnail.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPdfComponent,
    PdfObjectInfoComponent,
    PageThumbnailComponent,
    TopToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
