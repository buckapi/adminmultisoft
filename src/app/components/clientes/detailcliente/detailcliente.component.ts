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
       if(this.yeoman.preview.images[0]===undefined){this.router.navigate([''])}
    }
delete(){ 
  this.dataApiService.deleteClient(this.yeoman.preview.id).subscribe(response=>{
    this.dataApiService.getAllClient().subscribe(response=>{
      this.yeoman.allclient=response;
    });
  });
  this.router.navigate(['/clientall']);
}
cancelDelete(){}
  ngOnInit(): void {
  }

}
