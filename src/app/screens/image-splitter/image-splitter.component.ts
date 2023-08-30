import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-image-splitter',
  templateUrl: './image-splitter.component.html',
  styleUrls: ['./image-splitter.component.scss'],
})
export class ImageSplitterComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('cutter') cutter: ElementRef<HTMLCanvasElement>;
  @ViewChild('imgSource') imgSource: ElementRef<HTMLImageElement>;
  @ViewChild('preview1') preview1: ElementRef<HTMLImageElement>;
  @ViewChild('preview2') preview2: ElementRef<HTMLImageElement>;
  @ViewChild('selectZone') selectZone: ElementRef<HTMLDivElement>;
  context: CanvasRenderingContext2D;
  contextCutter: CanvasRenderingContext2D;
  filled = false;
  imgSrc: string;
  rootImage: File;

  startPosition = {
    x: 0,
    y: 0,
  };

  endPosition = {
    x: 0,
    y: 0,
  };

  objectPosition = {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  };

  isSelecting = false;

  constructor(@Inject(DOCUMENT) private readonly dcm: Document) {}
  zone = this.dcm.createElement('div');
  overlayZone = this.dcm.createElement('div');

  onDown(e: MouseEvent): void {
    this.isSelecting = true;
    this.startPosition = {
      x: e.offsetX,
      y: e.offsetY,
    };
    if (this.zone.classList.contains('selected')) {
      this.zone.classList.remove('selected');
    }
    if (!this.selectZone.nativeElement.contains(this.overlayZone)) {
      this.overlayZone.style.borderWidth = '0';
      this.selectZone.nativeElement.append(this.overlayZone);
    }
  }

  onMove(e: MouseEvent) {
    this.endPosition = {
      x: e.x,
      y: e.y,
    };
    if (this.isSelecting) {
      const startX = this.startPosition.x,
        startY = this.startPosition.y,
        /*width = this.endPosition.x - this.startPosition.x,
        height = this.endPosition.y - this.startPosition.y,*/
        diffX = e.offsetX - this.startPosition.x,
        diffY = e.offsetY - this.startPosition.y;
      if (!this.dcm.body.contains(this.zone)) {
        this.selectZone.nativeElement.append(this.zone);
      }
      this.zone.style.left = (diffX < 0 ? startX + diffX : startX) + 'px';
      this.zone.style.top = (diffY < 0 ? startY + diffY : startY) + 'px';
      this.zone.style.width = Math.abs(diffX) + 'px';
      this.zone.style.height = Math.abs(diffY) + 'px';
    }
  }

  onUp() {
    this.isSelecting = false;
    if (!this.zone.classList.contains('selected')) {
      this.zone.classList.add('selected');
      this.filled = true;
    }

    const w = this.zone.offsetWidth,
      h = this.zone.offsetHeight,
      top = this.zone.offsetTop,
      left = this.zone.offsetLeft,
      { offsetWidth: pw, offsetHeight: ph } = this.selectZone.nativeElement;

    this.overlayZone.style.borderTopWidth = top + 'px';
    this.overlayZone.style.borderLeftWidth = left + 'px';
    this.overlayZone.style.borderRightWidth = pw - w - left + 'px';
    this.overlayZone.style.borderBottomWidth = ph - h - top + 'px';
  }

  onFile(e: Event) {
    if (this.selectZone.nativeElement.contains(this.overlayZone)) {
      this.overlayZone.style.borderWidth = '0';
      this.selectZone.nativeElement.removeChild(this.overlayZone);
    }
    if (this.selectZone.nativeElement.contains(this.zone)) {
      this.selectZone.nativeElement.removeChild(this.zone);
    }
    const target = e.target as HTMLInputElement;
    const img = target.files?.item(0)!;
    this.rootImage = img;
    this.imgSrc = URL.createObjectURL(target.files?.item(0)!);
    createImageBitmap(img).then((bitmap) => {
      this.preview2.nativeElement.width = bitmap.width;
      this.preview2.nativeElement.height = bitmap.height;
      this.canvas.nativeElement.width = bitmap.width;
      this.canvas.nativeElement.height = bitmap.height;
      this.context.drawImage(bitmap, 0, 0);
      const { top, height, width, left } = this.canvas.nativeElement.getBoundingClientRect();
      this.objectPosition = {
        x: left,
        y: top,
        w: width,
        h: height,
      };
    });
  }

  cutFrom() {
    const { height, width /*left, top, x, y*/ } = this.zone.getBoundingClientRect();
    const { offsetLeft, offsetTop } = this.zone;
    createImageBitmap(this.rootImage).then((bitmap) => {
      this.cutter.nativeElement.width = width;
      this.cutter.nativeElement.height = height;
      this.contextCutter.drawImage(bitmap, offsetLeft, offsetTop, width, height, 0, 0, width, height);
    });
  }

  ngAfterViewInit() {
    this.zone.className = 'select-zone';
    this.context = this.canvas.nativeElement.getContext('2d')!;
    this.contextCutter = this.cutter.nativeElement.getContext('2d')!;
    this.overlayZone.className = 'trash-zone-overlay';
  }
}
