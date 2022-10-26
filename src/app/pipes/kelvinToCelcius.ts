
import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'convertToCelcius'
})
export class ConvertToCelcius implements PipeTransform {
	transform(tempInKelvin: number): number {
		return tempInKelvin - 273.15;
	}
}
