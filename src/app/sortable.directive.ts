/**
 The directive must modify the order of the widgets in the original array in the server.
 **/
import {Directive, ElementRef, EventEmitter, Output, Input} from '@angular/core';
import {AfterViewInit} from '@angular/core';

declare var jQuery: any;

@Directive({selector: '[appSortable]'})
export class SortableDirective implements AfterViewInit {

  @Output()
  newIndexes = new EventEmitter();
  // this will emit an event for the parent component or the directive calling component
  @Input()
  initialIndex: Number;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.appSortable(this);
  }
  appSortable(refe) {
    jQuery(this.el.nativeElement).sortable({
      axis: 'y',
      start: function (event, ui) {
        console.log(ui.item.index);
        console.log('Old position: ' + ui.item.index());
        refe.initialIndex = ui.item.index();
      },
      stop: function (event, ui) {
        console.log('New position: ' + ui.item.index());
        console.log('startIndex in sortable is ' + refe.initialIndex);
        console.log('endIndex in sortable is ' + ui.item.index());
        const newArr = {
          startIndex: refe.initialIndex,
          endIndex: ui.item.index()
        };
        console.log(newArr);
        refe.newIndexes.emit(newArr);

      }
    })
    ;
  }
}

