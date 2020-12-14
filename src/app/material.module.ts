import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule

  ],
  exports: [
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule

  ]
})
export class MaterialModule {}
