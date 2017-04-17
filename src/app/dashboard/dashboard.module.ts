import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    DashboardRoutingModule, ChartsModule
  ],
  declarations: [ DashboardComponent, BarChartComponent  ],
  providers: [
      BarChartComponent
  ]
})
export class DashboardModule { }
