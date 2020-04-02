import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
import { EventsService } from 'src/app/core/services/events.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-generated-plan',
  templateUrl: './generated-plan.component.html',
  styleUrls: ['./generated-plan.component.less']
})
export class GeneratedPlanComponent implements OnInit {

  events: any;

  constructor(private eventService: EventsService) { }

  ngOnInit(): void {
    this.eventService.events$.subscribe((events: any) => {
      this.events = events;
    });
  }

  getFormattedDate(date: Date) {
    const f = format(date, 'dd/MM/yyyy');
    return f;
  }
}
