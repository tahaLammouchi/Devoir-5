import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Medicament } from '../model/medicament.model';
import { MedicamentService } from '../services/medicament.service';

@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.css']
})
export class AddMedicamentComponent implements OnInit {
  
  newMedicament = new Medicament();
  message?: string;

  constructor(private medicamentService : MedicamentService) { }

  addMedicament(){
     this.message = `Medicament ${this.newMedicament.nomMedicament} ajouté avec succés ! `;
     this.medicamentService.ajouterMedicament(this.newMedicament);
     


  }

  ngOnInit(): void {
  }

}
