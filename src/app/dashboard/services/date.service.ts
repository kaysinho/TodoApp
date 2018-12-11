import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getDays():Date[]{
    let days: Date[] = []
    for (let day=0; day<7; day++){
      let today: Date = new Date()
      today.setDate(today.getDate()+day)
      days.push(today)
    }
    return days
  }

  getHours():string[]{
    let hours: string[] = []
    for (let hour=6; hour<18; hour++){
      let hourRange = `${hour} - ${hour+1}`;
      hours.push(hourRange)
    }
    return hours
  }
}
