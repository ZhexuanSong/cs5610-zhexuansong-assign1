import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
    transform(array: any[], args: string): any[] {
        array.sort((a: any, b: any) => {
            if (a.position < b.position) {
                return -1;
            } else if (a.position > b.position) {
                return 1;
            } else {
                return 0;
            }
        });
        return array;
    }
}
