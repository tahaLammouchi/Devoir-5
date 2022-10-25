import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { UpdateMedicamentComponent } from './update-medicament/update-medicament.component';

const routes: Routes = [
  {path: "Medicaments",component : MedicamentsComponent},
  {path : "add-medicament", component : AddMedicamentComponent},
  {path : "", redirectTo : "Medicaments",pathMatch: "full"},
  {path : "updateMedicament/:id",component : UpdateMedicamentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
