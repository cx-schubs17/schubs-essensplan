import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SpeiseplanPage } from './speiseplan.page';
import { ComponentsModule} from '../components/components.module';
import{ MatFormFieldModule, MatNativeDateModule, MatInputModule} from '@angular/material';
import{MatDatepickerModule} from '@angular/material/datepicker';

const routes: Routes = [
  {
    path: '',
    component: SpeiseplanPage
  }
];
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ComponentsModule,
  ],
  declarations: [SpeiseplanPage]
})
export class SpeiseplanPageModule {}
