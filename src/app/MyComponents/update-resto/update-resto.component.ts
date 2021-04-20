import { RestoService } from 'src/app/resto.service';
import { FormControl,FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert:boolean=false;
  editResto = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    address : new FormControl(''),
  })
  
  constructor( private router: ActivatedRoute, private resto : RestoService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe(result=>{
      this.editResto = new FormGroup({
        name : new FormControl(result['name']),
        email : new FormControl(result['email']),
        address : new FormControl(result['address']),
      })
    })
    
  }
  collection(){
    
    this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe(result=>{
      console.warn(result);
      this.alert=true; 
    })
  }
closeAlert(){
  this.alert=false; 
}

}
