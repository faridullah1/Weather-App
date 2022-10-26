import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToCelcius } from './kelvinToCelcius';

@NgModule({
  declarations: [
    ConvertToCelcius,
  ],
  exports: [
    ConvertToCelcius,
  ],
  imports: [CommonModule],
  providers: [],
})
export class PipeModule {}
