import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { eachDayOfInterval, format } from 'date-fns';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventsSubject = new BehaviorSubject({});

  events$ = this.eventsSubject.asObservable();

  count = 0;

  constructor(private router: Router) { }

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
    localStorage.setItem('events', JSON.stringify(events));
    this.router.navigate(['generated-plan']);
  }

  getMatches(players: { player1: string, player2: string, player3: string, player4: string }) {
    const allPlayers = [players.player1, players.player2, players.player3, players.player4];
    const combinations = [];

    allPlayers.forEach((p: string) => {
      allPlayers.forEach((x: string) => {
        if (p !== x) {
          if (!combinations.find((c) => c[1] === p && c[0] === x)) {
            combinations.push([p, x]);
          }
        }
      });
    });

    const firstSingle = combinations[this.count % combinations.length];
    const secondSingle = combinations.find((c) => {
      if (!firstSingle.includes(c[0]) && !firstSingle.includes(c[1])) {
        return c;
      }
    });

    const double = [firstSingle, secondSingle];
    this.count++;

    return [
      { team1: [firstSingle[0]], team2: [firstSingle[1]] },
      { team1: [secondSingle[0]], team2: [secondSingle[1]] },
      { team1: double[0], team2: double[1] }
    ];
  }
}
