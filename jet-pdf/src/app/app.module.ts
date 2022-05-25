import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestPdfComponent } from './test-pdf/test-pdf.component';
import { PdfObjectInfoComponent } from './pdf-object-info/pdf-object-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPdfComponent,
    PdfObjectInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
