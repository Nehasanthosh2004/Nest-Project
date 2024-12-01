import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterLink,SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private api:ApiService){}
  products:any=[]

  ngOnInit(){
    this.api.getData().subscribe( (data:any)=>  {
      this.products= data;
    })
    }
  
}
