import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
