import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  Injectable,
} from '@angular/core';
import { Observable } from 'rxjs';

import {TOKEN1} from '../../services/dialog.service'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
@Injectable()
export class DialogComponent implements OnInit, OnDestroy {
  result: boolean;

  constructor(@Inject(TOKEN1) private resultObservable: Observable<boolean>) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.resultObservable.subscribe((r) => (r = this.result));
  }
}
