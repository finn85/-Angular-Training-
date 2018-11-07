import { Injectable } from '@angular/core';

@Injectable()

export class DataRetrievingService {

  convertDateFromStorage = (date: string): string => {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    return `${year}/${month}/${day}`;
  };
}
