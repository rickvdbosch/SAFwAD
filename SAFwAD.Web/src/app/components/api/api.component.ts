import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ValuesService } from 'src/app/services/values.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  public values$: Observable<string[]>;

  constructor(private valuesService: ValuesService) { }

  ngOnInit() {
      this.values$ = this.valuesService.getValues();
  }
}
