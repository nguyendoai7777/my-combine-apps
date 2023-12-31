import { AfterViewInit, Component, ElementRef, inject, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FileHandle } from '../../common/directives/dropfile.directive';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-image-splitter',
  templateUrl: './image-splitter.component.html',
  styleUrls: ['./image-splitter.component.scss'],
  providers: [MatSnackBar],
  host: {
    class: `py-3 block`,
  },
})
export class ImageSplitterComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('cutter') cutter: ElementRef<HTMLCanvasElement>;
  @ViewChild('imgSource') imgSource: ElementRef<HTMLInputElement>;
  @ViewChild('getByUrl') url: ElementRef<HTMLInputElement>;
  @ViewChild('selectZone') selectZone: ElementRef<HTMLDivElement>;
  @ViewChild('inputZone') inputZone: ElementRef<HTMLDivElement>;
  context: CanvasRenderingContext2D;
  contextCutter: CanvasRenderingContext2D;
  filled = false;
  fileTypes = [
    {
      type: 'image/png',
      label: 'png',
    },
    {
      type: 'image/jpeg',
      label: 'jpeg',
    },
    {
      type: 'image/webp',
      label: 'webp',
    },
  ];
  typeDefault = 0;

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
  getFromOther = false;
  isSelecting = false;
  imgTemp = new Image();
  downloadAvailable = false;
  ready = false;
  #snackbar = inject(MatSnackBar);

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
      if (this.zone.offsetHeight > 0 && this.zone.offsetWidth > 0) {
        this.zone.classList.add('selected');
        this.filled = true;
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
    }
  }

  getImageFromUrl(value: string) {
    const img = new Image();
    img.src = value;
    img.addEventListener('load', () => {
      console.log(`load`);
      this.generatePreview(img);
    });
    img.addEventListener('error', () => {
      console.log(`error`);
      this.#snackbar.open('Không lấy được ảnh, check lại nhé!', 'Đóng', {
        duration: 3000,
      });
    });
    console.log(value);
  }

  onFile(e: Event) {
    const target = e.target as HTMLInputElement;
    const img = target.files?.item(0)!;
    this.generatePreview(img);
  }

  generatePreview(img: ImageBitmapSource) {
    this.ready = true;
    this.getFromOther = false;
    /*this.downloadAvailable = false;*/
    if (this.selectZone.nativeElement.contains(this.overlayZone)) {
      this.overlayZone.style.borderWidth = '0';
      this.selectZone.nativeElement.removeChild(this.overlayZone);
    }
    if (this.selectZone.nativeElement.contains(this.zone)) {
      this.selectZone.nativeElement.removeChild(this.zone);
    }

    this.selectZone.nativeElement.style.width = 'fit-content';
    createImageBitmap(img).then((bitmap) => {
      const imageWidth = bitmap.width,
        imageHeight = bitmap.height,
        boxWidth = this.inputZone.nativeElement.offsetWidth,
        forceWidth = imageWidth > boxWidth ? boxWidth : imageWidth,
        forceHeight = imageWidth > boxWidth ? (boxWidth * imageHeight) / imageWidth : imageHeight;
      this.canvas.nativeElement.width = forceWidth;
      this.canvas.nativeElement.height = forceHeight;
      this.context.drawImage(bitmap, 0, 0, forceWidth, forceHeight);
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
    this.downloadAvailable = true;
    this.imgTemp.src = this.canvas.nativeElement.toDataURL();
    this.imgTemp.onload = () => {
      const { height, width /*left, top, x, y*/ } = this.zone.getBoundingClientRect();
      const { offsetLeft, offsetTop } = this.zone;
      createImageBitmap(this.imgTemp).then((bitmap) => {
        this.cutter.nativeElement.width = width;
        this.cutter.nativeElement.height = height;
        this.contextCutter.drawImage(bitmap, offsetLeft, offsetTop, width, height, 0, 0, width, height);
      });
    };
  }

  onFileDropped(file: FileHandle[]) {
    this.generatePreview(file[0].file);
  }

  download() {
    const dataImg = this.cutter.nativeElement.toDataURL(this.fileTypes[this.typeDefault].type);
    const download = this.dcm.createElement('a');
    download.href = dataImg;
    download.download = `your_new_image.${this.fileTypes[this.typeDefault].label}`;
    download.click();
  }

  changeType(type, selectOrder) {
    this.typeDefault = selectOrder;
  }

  ngAfterViewInit() {
    this.zone.className = 'select-zone';
    this.context = this.canvas.nativeElement.getContext('2d')!;
    this.contextCutter = this.cutter.nativeElement.getContext('2d')!;
    this.overlayZone.className = 'trash-zone-overlay';
  }

  handleKeyUp(e: KeyboardEvent) {
    if (e.ctrlKey && e.key === 'b') {
      this.url.nativeElement.value = '';
    }
  }
}
