import { Injectable } from '@angular/core';
import { Medicament } from '../model/medicament.model';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  medicaments : Medicament[];
  medicament! : Medicament;

  constructor() { 
    this.medicaments = [
      {idMedicament : 1, nomMedicament :"Doliprane", prixMedicament:50.5, paysFabricant :"France",datefabrication: new Date("02/20/2021")},
      {idMedicament : 2, nomMedicament :"Plavix", prixMedicament:100, paysFabricant :"Angleterre",datefabrication: new Date("08/19/2022")},
      {idMedicament : 1, nomMedicament :"Ravicti", prixMedicament:80, paysFabricant :"Etats-Unis",datefabrication: new Date("07/18/2020")},
      

    ];
  }

  listeMedicaments(){
    return this.medicaments;
  }

  ajouterMedicament(medicament : Medicament){
    this.medicaments.push(medicament);
  }

  supprimerMedicament(m : Medicament){
    const index = this.medicaments.indexOf(m, 0);
    if (index > -1) {
    this.medicaments.splice(index, 1);
    }
    }

    consulterMedicament(id:number): Medicament{
      this.medicament = this.medicaments.find(m => m.idMedicament == id)!;
      return this.medicament;
      }
    
      trierMedicaments(){
        this.medicaments = this.medicaments.sort((n1,n2) => {
        if (n1.idMedicament! > n2.idMedicament!) {
        return 1;
        }
        if (n1.idMedicament! < n2.idMedicament!) {
        return -1;
        }
        return 0;
        });
      }



    updateMedicament(m:Medicament)
      {
      this.supprimerMedicament(m);
      this.ajouterMedicament(m);
      this.trierMedicaments();
      }
    




}
