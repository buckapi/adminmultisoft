import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataApiService } from '@app/services/data-api.service';
import { Yeoman } from '@app/services/yeoman.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-detailcliente',
  templateUrl: './detailcliente.component.html',
  styleUrls: ['./detailcliente.component.css']
})
export class DetailclienteComponent implements OnInit {

  constructor
    (public yeoman:Yeoman,
    public router:Router,
    public dataApiService:DataApiService
    ) 
    { 
      //  if(this.yeoman.preview.images[0]===undefined){this.router.navigate([''])}
    }
delete(){ 
  this.dataApiService.deleteCategory(this.yeoman.preview.id).subscribe(response=>{
    this.dataApiService.getAllCategory().subscribe(response=>{
      this.yeoman.allcategory=response;
    });
  });
  this.router.navigate(['/ruall']);
}
cancelDelete(){}
  ngOnInit(): void {
  }

}
