import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PDFObject, PDFArray, PDFNumber, PDFString, PDFDict, PDFName, PDFRef } from 'pdf-lib';

@Component({
  selector: 'app-pdf-object-info',
  templateUrl: './pdf-object-info.component.html',
  styleUrls: ['./pdf-object-info.component.scss']
})
export class PdfObjectInfoComponent implements OnInit, OnChanges {

  @Input() obj!:PDFObject
  @Input() name?:PDFName
  objType?: String
  objValue?: String
  objChildren?: PDFChildData[]

  ngOnInit(): void {
    this.objType = this.obj.constructor.name
    if (this.obj instanceof PDFArray) {
      this.objChildren = this.obj.asArray().map(val => {return {obj: val}})
    }
    if (this.obj instanceof PDFNumber) {
      this.objValue = this.obj.asNumber().toString()
    }
    if (this.obj instanceof PDFString) {
      this.objValue = this.obj.asString()
    }
    if (this.obj instanceof PDFDict) {
      this.objChildren = this.obj.entries().map((val) => {return {obj: val[1], name: val[0]}})
    }
    if (this.obj instanceof PDFName) {
      this.objValue = this.obj.asString()
    }
    if (this.obj instanceof PDFRef) {
      this.objValue = this.obj.toString()
    }
  }

  ngOnChanges() {
  }

}

interface PDFChildData {
  obj: PDFObject
  name?:PDFName
}