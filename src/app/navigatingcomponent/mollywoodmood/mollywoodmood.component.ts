import { Component } from '@angular/core';
import { MollywoodmoodService } from '../../servises/mollywoodmood.service';

@Component({
  selector: 'app-mollywoodmood',
  templateUrl: './mollywoodmood.component.html',
  styleUrls: ['./mollywoodmood.component.css']
})
export class MollywoodmoodComponent {
images:any;
 constructor( private service:MollywoodmoodService){}
  ngOnInit(){
    this.service.aha().subscribe(data=>this.images=data);
  }
}
