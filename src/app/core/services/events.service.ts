import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { eachDayOfInterval, format } from 'date-fns';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventsSubject = new BehaviorSubject({
    '02/04/2020': [
      {
        team1: ['kamran'],
        team2: ['alex']
      },
      {
        team1: ['kamran', 'lilly'],
        team2: ['alex', 'jamine']
      },
    ],
  });

  events$ = this.eventsSubject.asObservable();

  constructor() { }

  setEvents(events: any) {
    this.eventsSubject.next(events);
  }

  generatePlan({ range, weekDay = '1', ...players }: any) {
    // console.log(range, weekDay, players.player1);
    const events = {};
    const allDates = eachDayOfInterval(
      { start: range[0], end: range[1] },
    );

    allDates.forEach((date: Date) => {
      if (date.getDay().toString() === weekDay) {
        events[format(date, 'dd/MM/yyyy')] = this.getMatches(players);
      }
    });

    this.setEvents(events);
  }

  getMatches(players: { player1: string, player2: string, player3: string, player4: string }) {

  }
}
