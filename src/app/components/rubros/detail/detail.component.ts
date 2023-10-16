import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '@app/services/data-api.service';
import { Yeoman } from '@app/services/yeoman.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  category:string="";
  constructor
    (public yeoman:Yeoman,
    public router:Router,
    public dataApiService:DataApiService
    ) { 
      //  if(this.yeoman.preview.images[0]===undefined){this.router.navigate([''])}
      
      this.findCategory();
      }
delete(){ 
  this.dataApiService.deleteRubro(this.yeoman.preview.id).subscribe(response=>{
    this.dataApiService.getAllRubro().subscribe(response=>{
      this.yeoman.allrubro=response;
    });
  });
  this.router.navigate(['/rubroAll']);
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
