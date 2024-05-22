import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Sidebar2Component } from './components/sidebar2/sidebar2.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';


const modulos = [
  MatProgressBarModule,
  MatButtonModule,
  MatTooltipModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule
];

@NgModule({
  declarations: [Sidebar2Component],
  imports: [CommonModule, RouterModule, modulos],
  exports: [modulos],
})
export class MaterialModule {}
