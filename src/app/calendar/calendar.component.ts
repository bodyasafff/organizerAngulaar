import { Component, OnInit } from '@angular/core';
import { WeekDay } from '@angular/common';
import { DateService } from '../shared/date.service'
import * as moment from 'moment';
import { IDay } from '../shared/IDay';
import { IWeek } from '../shared/IWeek';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  constructor(private dateService: DateService) { }

  private calendar: IWeek[] = [];
  
  ngOnInit(): void {
     this.dateService.date.subscribe(this.generate.bind(this));
  }

  public getCalendar():IWeek[]{
    return this.calendar;
  }

  public getDay(day:IDay):IDay{
    return day;
  }

  public generate(now: moment.Moment):void{
    this.calendar = [];
    let startDay = now.clone().startOf('month').startOf('week');
    let endDay = now.clone().endOf('month').endOf('week');
  
      while(startDay.isBefore(moment(endDay).add(1,'day'),'day')){

        let week:IWeek = {
          days: []
        }

        for(let i = 0;i < 7;i++){

          let day:IDay = {
            value: startDay,
            active: startDay.isSame(new Date(),'day'),
            disabled: !now.isSame(startDay,'month'),
            selected:false
          };

          week.days.push(day);
          startDay = moment(startDay).add(1,'day');
        }
        this.calendar.push(week);
      }
  }
}
