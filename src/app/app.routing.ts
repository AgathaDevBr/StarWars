import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ConsultaPlanetasComponent } from "./consulta-planetas/consulta-planetas.component";

//MAPEAMENTO DE ROTAS
const routes : Routes = [
    { path : 'consulta-planetas', component : ConsultaPlanetasComponent }
]; 

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule { }