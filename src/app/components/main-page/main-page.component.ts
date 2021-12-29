import { Component, OnInit } from '@angular/core';
import { Seb7aService } from 'src/app/services/seb7a.service';
import { Seb7aComponent } from '../seb7a/seb7a.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  //first_zekr = {id: "", name: "", counter: ""};
  constructor(private seb7aservice: Seb7aService) { }

  ngOnInit(): void {
    //call api of get first zekr
   /*
    this.seb7aservice.get_first_zekr().subscribe(first_zekr => {
      this.first_zekr = first_zekr;
    });
    */
  }

}
