import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '@app/services/data-api.service';
import { Yeoman } from '@app/services/yeoman.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-detailcategory',
  templateUrl: './detailcategory.component.html',
  styleUrls: ['./detailcategory.component.css']
})
export class DetailcategoryComponent implements OnInit {
  category:string="";
  constructor
    (public yeoman:Yeoman,
    public router:Router,
    public dataApiService:DataApiService
    ) 
    { 
      this.findCategory();
      }
      editCategory(){
    this.router.navigate(['cateEdit']);
  }
delete(){ 
  this.dataApiService.deleteCategory(this.yeoman.preview.id).subscribe(response=>{
    this.dataApiService.getAllCategory().subscribe(response=>{
      this.yeoman.allcategory=response;
    });
  });
  this.router.navigate(['/cateall']);
}
findCategory(){
  for (let i=0;i<this.yeoman.allcategory.length;i++){
    if(this.yeoman.preview.idCategory===this.yeoman.allcategory[i].id){
      this.category=this.yeoman.allcategory[i].name;
    }
  }
}
cancelDelete(){}
  ngOnInit(): void {
  }

}
