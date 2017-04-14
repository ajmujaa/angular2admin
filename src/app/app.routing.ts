import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankTemplateComponent } from './template/blank-template.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const routes: Routes = [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
}, {
    path: '',
    component: BlankTemplateComponent,
    data: {
        title: 'Dashboard Page'
    },
    children: [
        {
            path: 'dashboard',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        }
    ]
}, {
    path: "**",
    component: PageNotFoundComponent
}];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
