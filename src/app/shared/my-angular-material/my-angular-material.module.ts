import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    MatMenuModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MyAngularMaterialModule { }
