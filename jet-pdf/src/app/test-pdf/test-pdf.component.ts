import { Component, OnInit } from '@angular/core';
import { degrees, PDFDocument, PDFPageLeaf, rgb, StandardFonts, PDFName, PDFObject, PDFArray, PDFString, PDFNumber } from 'pdf-lib';

@Component({
  selector: 'app-test-pdf',
  templateUrl: './test-pdf.component.html',
  styleUrls: ['./test-pdf.component.scss']
})
export class TestPdfComponent implements OnInit {
  pdfbytes = new Uint8Array
  pdfNode?: [PDFName, PDFObject][]
  catalogEntries?: [PDFName, PDFObject][]

  async ngOnInit(): Promise<void> {
    // const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
    const url = "assets/test-pdf.pdf"
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    this.catalogEntries = pdfDoc.catalog.entries()

    const pages = pdfDoc.getPages()
    const firstPage = pages[0]

    this.pdfbytes = await pdfDoc.save()
    this.pdfNode = firstPage.node.entries()
  }

}