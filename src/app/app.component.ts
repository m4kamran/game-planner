import { Component, OnInit } from '@angular/core';
import { EventsService } from './core/services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'game-planner';

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    const events = JSON.parse(localStorage.getItem('events'));
    this.eventService.setEvents(events);
  }
}
