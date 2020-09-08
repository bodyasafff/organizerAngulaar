import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MomentPipe } from 'src/app/shared/moment.pipe'
import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { CalendarComponent } from './calendar/calendar.component';
import { OrganizerComponent } from './organizer/organizer.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    CalendarComponent,
    OrganizerComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
