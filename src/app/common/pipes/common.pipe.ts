import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'durationConverter', standalone: true })
export class DurationConverterPipe implements PipeTransform {
  transform(duration: number): any {
    const hours = '0' + Math.floor(duration / 3600);
    const ch = Number(hours);
    const minutes = ('0' + Math.floor((duration - ch * 3600) / 60)).slice(-2);
    const seconds = ('0' + Math.floor(duration - Math.floor(duration / 60) * 60)).slice(-2);
    return ch !== 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
  }
}

@Pipe({ name: 'lyric' })
export class LyricPipe implements PipeTransform {
  transform(template: string): any {
    return template.replaceAll('\n', '<br>');
  }
}
