import { Component, OnInit } from '@angular/core';
import {PrinterDataService} from '../../services/printer-data.service';
import * as printJS from 'print-js';

@Component({
  selector: 'app-print-js',
  templateUrl: './print-js.component.html',
  styleUrls: ['./print-js.component.css']
})
export class PrintJsComponent implements OnInit {

  constructor(private printerDataService: PrinterDataService) { }

  ngOnInit(): void {
  }

  imprimirPdf(): void{
    // @ts-ignore
    printJS({printable: 'assets/printers/print-js/large_printjs.pdf', type: 'pdf', showModal: true, modalMessage: 'Estamos generando su reporte.'});
  }

  imprimirImagenes(): void {
    // @ts-ignore
    printJS({
      printable: ['assets/printers/print-js/print-04-highres.jpg', 'assets/printers/print-js/print-01-highres.jpg', 'assets/printers/print-js/print-02-highres.jpg', 'assets/printers/print-js/print-03-highres.jpg'],
      type: 'image',
      header: 'Construcciones de Puentes',
      showModal: true,
      modalMessage: 'Estamos generando su reporte.'
    });
  }

  imprimirImagen(): void {
    // @ts-ignore
    printJS({printable: ['assets/printers/print-js/print-04-highres.jpg'], type: 'image', header: 'Construcciones de Puentes'});
  }

  imprimirHtml(): void {
    // @ts-ignore
    printJS({
      printable: 'testForm',
      type: 'html',
      header: 'PrintJS - Impresión de Formulario',
      css: 'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css'
    });
  }

  imprimirJson(): void {
    this.printerDataService.obtenerRazasGatos().subscribe(data => {
      // @ts-ignore
      printJS({
      // @ts-ignore
        printable: data.data,
        onLoadingStart: this.beforePrint,
        properties: ['breed', 'country', 'origin', 'coat', 'pattern'],
        type: 'json',
        header: 'Razas de Gatos',
        showModal: true,
        modalMessage: 'Estamos generando su reporte.',
        gridHeaderStyle: 'color: red;  border: 2px solid #3971A5;',
        gridStyle: 'border: 2px solid #3971A5;'
      });
    });
  }

  beforePrint(): void {
    console.warn('Ejecuta antes de imprimir');
  }

}
