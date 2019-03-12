import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { SimpleService } from 'src/app/services/simple.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

public speak$: Observable<string>;

  constructor(private simpleService: SimpleService) { }

  ngOnInit() {
    this.speak$ = this.simpleService.speak();
  }
}
