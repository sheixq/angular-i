import { Component, OnInit } from '@angular/core'
import { ValueService } from '../../services/value.service'
import { Observable } from 'rxjs'
import { BeatyLoggerService } from '../../services/beaty-logger.service'

@Component({
  selector: 'inst-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent implements OnInit {
  value$ = new Observable()

  constructor(private valueService: ValueService, private beatyLoggerService: BeatyLoggerService) {}

  ngOnInit(): void {
    this.value$ = this.valueService.value$
  }

  decValueHandler() {
    this.valueService.dec()
    this.beatyLoggerService.log('dec value', 'error')
  }
}
