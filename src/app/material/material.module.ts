import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatTableModule,
		MatIconModule,
		MatToolbarModule,
		MatMenuModule,
		MatFormFieldModule,
		MatInputModule
		
	],
	exports: [
		MatCardModule,
		MatButtonModule,
		MatTableModule,
		MatIconModule,
		MatToolbarModule,
		MatMenuModule,
		MatFormFieldModule,
		MatInputModule
	]
})
export class MaterialModule { }
