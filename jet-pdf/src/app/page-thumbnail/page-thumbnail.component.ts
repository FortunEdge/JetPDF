import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PageViewport, PDFDocumentProxy } from 'pdfjs-dist';
import { RenderParameters } from 'pdfjs-dist/types/src/display/api';

@Component({
  selector: 'page-thumbnail',
  templateUrl: './page-thumbnail.component.html',
  styleUrls: ['./page-thumbnail.component.scss']
})
export class PageThumbnailComponent implements OnInit {

  @Input() pdf?:PDFDocumentProxy
  @Input() pageNum!:number
  @ViewChild("canvas")
  thumbCvs!: ElementRef<HTMLCanvasElement>;

  thumbSrc?:string

  ngOnInit(): void {
    // Don't attempt to get thumbnail if pdf not loaded
    if (this.pdf) {
      let ctx = this.thumbCvs.nativeElement.getContext('2d')
      this.pdf.getPage(this.pageNum).then(pageProx => {
        let viewport = pageProx.getViewport()
        
        if (ctx) {
          let renderParams: RenderParameters = {
            canvasContext: ctx,
            viewport: viewport
          }
  
          pageProx.render(renderParams)
        }
      
      })
    }
  }

}
