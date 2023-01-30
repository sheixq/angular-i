import { Component, OnInit } from '@angular/core'
import { ValueService } from '../../services/value.service'
import { Observable } from 'rxjs'
import { BeatyLoggerService } from '../../services/beaty-logger.service'

@Component({
  selector: 'inst-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {
  value$ = new Observable()

  constructor(private valueService: ValueService, private beatyLoggerService: BeatyLoggerService) {}

  ngOnInit(): void {
    this.value$ = this.valueService.value$
  }

  addValueHandler() {
    this.valueService.add()
    this.beatyLoggerService.log('add value', 'success')
  }
}
