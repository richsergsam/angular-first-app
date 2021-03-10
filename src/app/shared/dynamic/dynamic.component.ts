import { Component, Inject, OnInit } from '@angular/core';
import { TOKEN1 } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  constructor(@Inject(TOKEN1) data: any) { }

  ngOnInit(): void {
  }

}
