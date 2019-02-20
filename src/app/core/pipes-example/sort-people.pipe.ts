import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './pipes-example-data';
import * as _ from 'lodash';

@Pipe({
  name: 'sortPeople'
})
export class SortPeoplePipe implements PipeTransform {

  transform(value: Array<Person>, by: string, direction: any): Array<Person> {
    console.log(by);
    //value = _.sortBy(value, args.obj);
    value = _.orderBy(value, [by], direction);
    console.log(value)
    return value;
  }

}
