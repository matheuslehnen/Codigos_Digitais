import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

import {UsuarioService} from "../../service/usuario/usuario.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuarioFormGroup: FormGroup;
  hide = true;
  enabled = false;

  constructor(
      private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuarioFormGroup = this.usuarioService.getFormGroup();
  }

  onSubmit(usuarioFormGroup: FormGroup) {
    this.usuarioService.submit(usuarioFormGroup);
  }
}
