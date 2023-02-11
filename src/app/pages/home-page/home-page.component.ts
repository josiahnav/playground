import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  private _destroy: Subject<any> = new Subject();

  constructor(private _httpService: HttpService) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this._destroy.next;
    this._destroy.complete;
  }

  onAddClick() {
    this._httpService.add().pipe(takeUntil(this._destroy)).subscribe(() => {

    });
  }

  onRemoveClick() {
    this._httpService.remove().pipe(takeUntil(this._destroy)).subscribe(() => {

    });
  }

  onEditClick() {
    this._httpService.edit().pipe(takeUntil(this._destroy)).subscribe(() => {
      
    });
  }

}
