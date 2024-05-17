import { Component } from '@angular/core';
import { CategoriaService } from '../../../core/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  categorias: any[] = []
  categoria: any = {};

  constructor(private categoriaService: CategoriaService){
    this.funGetCategorias()
  }

  funGetCategorias(){
    this.categoriaService.listarCategorias().subscribe(
      (res: any) => {
        this.categorias = res
      },
      (error) => {  }
    )
  }

  funGuardarCategoria(){
    if(this.categoria.id){
      this.categoriaService.modificarCategoria(this.categoria.id, this.categoria).subscribe(
        (res: any) => {
          console.log(res);
          this.funGetCategorias();
        },
        (error) => {  }
      );

    }else{
      this.categoriaService.guardarCategoria(this.categoria).subscribe(
        (res: any) => {
          console.log(res);
          this.funGetCategorias();
        },
        (error) => {  }
      );

    }
    this.categoria = {};
  }

  funEditarCategoria(cat:any){
    this.categoria = cat;
  }

  funEliminar(cat:any){
    if(confirm("¿Está seguro de elininar la categoria?")){
      this.categoriaService.eliminarCategorias(cat.id)

      this.funGetCategorias();
    }

  }


}
