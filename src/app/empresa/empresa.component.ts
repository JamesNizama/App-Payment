import { Component, OnInit } from '@angular/core';
import { Empresa } from '../models/empresa';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresas: Empresa[] = [];
  displayedColumns: string[] = ['id_empresa', 'nombre', 'ruc', 'descripcion', 'estado'];


  constructor(private servicio: EmpresaService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.servicio.getAll().subscribe(x => this.empresas = x);
  }

}
