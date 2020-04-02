import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventsService } from 'src/app/core/services/events.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.less']
})
export class PlannerComponent implements OnInit {

  plannerForm: FormGroup;

  submitForm(): void {
    for (const i in this.plannerForm.controls) {
      if (this.plannerForm.controls[i]) {
        this.plannerForm.controls[i].markAsDirty();
        this.plannerForm.controls[i].updateValueAndValidity();
      }
    }

    this.eventService.generatePlan(this.plannerForm.value);
  }

  constructor(private fb: FormBuilder, private eventService: EventsService) { }

  ngOnInit(): void {
    this.plannerForm = this.fb.group({
      range: [[], [Validators.required]],
      weekDay: [null],
      player1: ['', Validators.required],
      player2: ['', Validators.required],
      player3: ['', Validators.required],
      player4: ['', Validators.required],
    });
  }

}
