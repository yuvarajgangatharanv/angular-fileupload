import { Pipe, PipeTransform } from '@angular/core';
import { Records } from './records';


@Pipe({name: 'issuePipe'})
export class IssuePipe implements PipeTransform {
  transform(allValues: Records[], filterValue: number): Records[] {
    return filterValue? allValues.filter(value => value.issueCount == filterValue) : allValues;
  }
}