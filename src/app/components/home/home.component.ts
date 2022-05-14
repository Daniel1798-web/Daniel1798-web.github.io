import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { objeto1 } from '../../model/objeto1.model'

import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    public _MatPaginatorIntl: MatPaginatorIntl
  ) {}

  ngOnInit():void {
    this._MatPaginatorIntl.itemsPerPageLabel = 'your custom text 1';
    this._MatPaginatorIntl.firstPageLabel = 'your custom text 2';
    this._MatPaginatorIntl.itemsPerPageLabel = '';
    this._MatPaginatorIntl.lastPageLabel = 'your custom text 4';
    this._MatPaginatorIntl.nextPageLabel = 'your custom text 5';
    this._MatPaginatorIntl.previousPageLabel = 'your custom text 5';
  }

  identificador:number = 0;
  dia:number = 1;
  activar2 = false;
  activarInfo = false;
  activarMovile = false;

  listaStocks: Array<objeto1> = [
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 0
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 1
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 2
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 3
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 4
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 5
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 6
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 7
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 8
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 9
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 10
    },

  ];
  stocksMostrar:any = []


  page_size:number = 0;
  page_number:number = 1;
  pageSizeOptions = [5]
  array:Array<any> = [5]

  array2:Array<any> = [5]
  pageSizeOptions2 = [1]


  helpText:string = "Ante cualquier problema consultenos";

  stocks: objeto1 =
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 0

    }



  carga1(product: Array<object>) {
    console.log(product)
  }


  showStockGuardados(valor: boolean) {
    this.activarInfo = false
    this.activar2 = valor

  }

  showStocksMovile(valor: boolean){
    this.activarInfo = false
    this.activarMovile = valor
  }

  showInformacion(valor: boolean){
    this.activar2 = false
    this.activarInfo = valor

  }



  addStock() {
    this.listaStocks.push({producto: "cosa",fecha: this.dia,eliminar: false,id: this.identificador})
    this.identificador ++}

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }


}
