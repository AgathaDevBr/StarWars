import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeoplesListComponent } from './components/pages/peoples-list/peoples-list.component';
import { PlanetsListComponent } from './components/pages/planets-list/planets-list.component';

const routes: Routes = [
    { path: 'pages/peoples-list', component: PeoplesListComponent },
    { path: 'pages/planets-list', component: PlanetsListComponent },
    { path: '', pathMatch: 'full', redirectTo: '/pages/peoples-list' },
];

//exportando a configuração
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    })
    export class RoutingModule {}