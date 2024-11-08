import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormularioBuscaService } from 'src/app/core/services/formulario-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {
  constructor(public dialog: MatDialog, public formularioBuscaService: FormularioBuscaService) {}

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }
}
