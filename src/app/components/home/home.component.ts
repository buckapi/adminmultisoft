import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { Yeoman } from '@app/services/yeoman.service';
import { Router } from '@angular/router';
import { AuthRESTService } from '@app/services/authREST.service';
import { DataApiService } from '@app/services/data-api.service';

declare const XM_Popup: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  existencias: any[] = []; 
  all: any[] = []; 
  allcategory: any[] = []; 
  existenciasSize:number=0;
  allSize:number=0;


  constructor( 
   
 public router:Router,
 public authRESTService:AuthRESTService,
    public script:ScriptService,public yeoman:Yeoman,
    public dataApiService:DataApiService
  ) { 
    this.dataApiService.getAllProducts().subscribe(response=>{
      this.yeoman.all=response;
      this.allSize=this.yeoman.all.length;

    });
    this.dataApiService.getAllCategory().subscribe(response=>{
      this.yeoman.allcategory=response;
      this.yeoman.allCategoriesSize=this.yeoman.allcategory.length;

    });
    
    if(!this.authRESTService.getCurrentUser() ){this.router.navigate(['/login'])}
     this.script.load(
  
      //  'global',
      //  'select',
      //  'chart',
      //  'custom',
      //  'deznav',
      //  'owl',
      //  'peity',
      //  'apex',
      //  'dashboard'
       )
       .then(data => {
       })
       .catch(error => console.log(error));

  }
  config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };  

  ngOnInit(): void {
  }

}
