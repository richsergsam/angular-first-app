import { ThisReceiver } from '@angular/compiler';
import {
  Component,
  OnInit,
  Injectable,
  ViewContainerRef,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Subject } from 'rxjs';

import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
@Injectable()
export class DialogComponent implements OnInit, AfterViewInit {
  @ViewChild('content', { read: ViewContainerRef })
  content: ViewContainerRef;
  isContentSet: boolean = false;
  result: boolean;

  @Output() returnValue: Subject<boolean> = new Subject<boolean>();

  constructor(
    private viewContainerRef: ViewContainerRef,
    private dialogService: DialogService
  ) {}


  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dialogService.register(this, this.returnValue);
  }

  answer(value: boolean) {
    this.returnValue.next(value);
    this.isContentSet = false;
  }
}
