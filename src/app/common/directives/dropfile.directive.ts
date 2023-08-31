import { Directive, EventEmitter, HostBinding, HostListener, inject, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export interface FileHandle {
  file: File;
  url: SafeUrl;
}

@Directive({
  selector: '[dropFile]',
})
export class DropFileDirective {
  @Output() files: EventEmitter<FileHandle[]> = new EventEmitter();

  @HostBinding('class') fileDragging = '';
  #sanitizer = inject(DomSanitizer);
  draggingClassName = 'file-dragging';

  @HostListener('dragover', ['$event'])
  public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileDragging = this.draggingClassName;
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileDragging = '';
  }

  @HostListener('drop', ['$event'])
  public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileDragging = '';

    let files: FileHandle[] = [];
    for (let i = 0; i < evt.dataTransfer!.files.length; i++) {
      const file = evt.dataTransfer!.files[i];
      const url = this.#sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      files.push({ file, url });
    }
    if (files.length > 0) {
      this.files.emit(files);
    }
  }
}
