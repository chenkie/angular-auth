import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from './admin.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [AdminComponent]
})
export class AdminModule {}
