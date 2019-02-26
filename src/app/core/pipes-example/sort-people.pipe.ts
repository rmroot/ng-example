import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './pipes-example-data';
import * as _ from 'lodash';

@Pipe({
  name: 'sortPeople'
})
export class SortPeoplePipe implements PipeTransform {

  transform(value: Array<Person>, by: string, direction: "asc" | "desc"): Array<Person> {
    value = _.orderBy(value, [by], direction);
    return value;
  }
}
