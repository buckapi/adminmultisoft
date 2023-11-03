import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { Yeoman } from '@services/yeoman.service';
import { DemoFilePickerAdapter } from '@app/file-picker.adapter';
import { HttpClient } from '@angular/common/http';
import { Butler } from '@app/services/butler.service';
import { DataApiService } from '@app/services/data-api.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements AfterViewInit {

  @ViewChild('deleteSwal')
  category = 'Seleccione una';
  categorySeted: boolean = false;
  products$: any = {};
  modules: any;
  config2 = {
    displayFn:(item: any) => { return item.name; }, //a replacement ofr displayKey to support flexible text displaying for each item
    displayKey:"name", //if objects array passed which key to be displayed defaults to description
    search:true ,//true/false for the search functionlity defaults to false,
    height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder:'Sleccione', // text to be displayed when no item is selected defaults to Select,
    // customComparator: ()=>{}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: 0, // number thats limits the no of options displayed in the UI (if zero, options will not be limited)
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder:'Search', // label thats displayed in search input,
    searchOnKey: 'name', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
    }


    config = {
      
      displayFn:(item: any) => { return item.name; }, //a replacement ofr displayKey to support flexible text displaying for each item
      displayKey: 'categoria', // La clave a mostrar en el componente
      search: true, // Habilitar búsqueda
      height: '400px', // Altura del desplegable
      placeholder: 'Seleccione', // Texto predeterminado
      limitTo: 0, // Límite de opciones mostradas
      
      moreText: 'more', // Texto para mostrar cuando hay más elementos seleccionados
      noResultsFound: 'No results found!', // Texto cuando no se encuentran resultados
      searchPlaceholder: 'Search', // Placeholder del campo de búsqueda
      searchOnKey: 'name', // La clave por la cual se realiza la búsqueda
      customComparator: (a: any, b: any) => 0, // Función de comparación personalizada
      clearOnSelection: true, // Borrar selección después de elegir una opción
      inputDirection: 'ltr', // Dirección de entrada
    };
  public captions: UploaderCaptions = {
    dropzone: {
      title: 'Imágenes del modulo',
      or: '.',
      browse: 'Cargar',
    },
    cropper: {
      crop: 'Cortar',
      cancel: 'Cancelar',
    },
    previewCard: {
      remove: 'Borrar',
      uploadError: 'error',
    },
  };

  data = {
    images: [] as string[],
    name: '',
    description: '',
    ref: '',
    referencia: '',
    idCategory: '',
    categories: [] as Array<{ name: string, id: number }>, // Reemplaza prop1 y prop2 con las propiedades reales de tus objetos
  };
  adapter = new DemoFilePickerAdapter(this.http, this._butler);
  constructor(
    public router: Router,
    public http: HttpClient,
    public _butler: Butler,
    public dataApiService: DataApiService,
    public yeoman: Yeoman
  ) {
    this.getAllCategories();
    this._butler.data = this.data;
  }
  public addCategorieToModule(category:any){
    console.log(category);
    this.data.categories=category.value;
  }
  onSubmit() {
    this.data.ref = (Math.floor(Math.random() * 10000000000000)).toString();
    this.data.images = this._butler.uploaderImages;
    this.dataApiService.saveModules(this.data).subscribe(response => {
      console.log(response);
      this._butler.uploaderImages = [];
      this.router.navigate(['modulesAll']);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Modulo guardado',
        showConfirmButton: false,
        timer: 1500
      })
    });
    console.log(this.data);
  }
  getAllCategories() {
    this.dataApiService.getAllCategory().subscribe(response => {
      this.yeoman.categories = response;
      this.yeoman.allcategory = response;
      console.log(this.yeoman.categories)
      this.yeoman.allCategoriesSize = this.yeoman.categories.length;
    });
  }

  onCategorySelect(category: any) {
    this.data.idCategory = category.idCategory;
    console.log(category.id);
  }

  setCategory(category: any) {
    let index = category;
    console.log("seleccionada: " + this.yeoman.allcategory[index].name);
    this.categorySeted = true;
    if (this.yeoman.categories !== undefined) {
      this.data.idCategory = this.yeoman.allcategory[index].id;
      console.log("id: " + JSON.stringify(this.data.idCategory));
    }
  }

  ngAfterViewInit(): void {
  }
}
