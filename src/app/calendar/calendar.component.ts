import { Component, OnInit } from '@angular/core';
import { WeekDay } from '@angular/common';
import { DateService } from '../shared/date.service'
import * as moment from 'moment';

interface Day{
  value:moment.Moment;
  active:boolean;
  disabled:boolean;
  selected:boolean;
}

interface Week{
  days:Day[][];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  constructor(private dateService: DateService) { }

  private calendar: Day[] = [];
  
  ngOnInit(): void {
     this.dateService.date.subscribe(this.generate.bind(this));
  }

  public getCalendar():Day[]{
    return this.calendar;
  }

  public generate(now: moment.Moment):void{
    this.calendar = [];
    let startDay = now.clone().startOf('month');
    let endDay = now.clone().endOf('month');
  
      while(startDay.isBefore(moment(endDay).add(1,'day'),'day')){
        let day:Day = {
          value: startDay,
          active:false,
          disabled:false,
          selected:false
        };
        this.calendar.push(day);
        startDay = moment(startDay).add(1,'day');
      }
  }


  // public generate(now: moment.Moment):void{
  //   const startDay = now.clone().startOf('month').startOf('week');
  //   const endDay = now.clone().endOf('month').endOf('week');

  //   const date = startDay.clone().subtract(1,'day');

  //   const calendar = [];

  //   while(date.isBefore(endDay,'day')){
  //     calendar.push({
  //       days:Array(7).fill(0).map(()=>{
  //         const value = date.add(1,'day').clone();
  //         const active = moment().isSame(value,'date');
  //         const disabled = !now.isSame(value,'week');
  //         const selected = now.isSame(value,'date');

  //         return { value,active,disabled,selected }
  //       })
  //     })
  //   }
  //   this.calendar = calendar;
  // }

}
