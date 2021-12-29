import { Component, OnInit } from '@angular/core';
import { Seb7aService } from '../../services/seb7a.service';
import { ZekrInterface } from '../../interfaces/zekr-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  
  first_zekr : ZekrInterface = {id: 0, name: "", counter:0};
  all_zekr: any;
  search_zekr_id!: any;
  selected_zekr!: any;
  constructor(private seb7aservice: Seb7aService) { }


  ngOnInit(): void {
    //call api of get first zekr
   /*
    this.seb7aservice.get_first_zekr().subscribe(first_zekr => {
      this.first_zekr = first_zekr;
    });
   
  }
  */

      //call api of all zekr
   
    this.seb7aservice.get_all_zekr().subscribe(all_zekr => {
      this.all_zekr = all_zekr;
    });
   

  }

  onOptionsSelected(value: any){
    console.log("the selected value is " + value);
    this.search_zekr_id = value;
    this.findZekr(this.search_zekr_id);
  }


  findZekr(zekr_id: any){
    //loop over all_zekr, if zekr id equal then get it
    let found = false;
    for (let i = 0; i < this.all_zekr.length; i++) {
      
      if(this.all_zekr[i].id == this.search_zekr_id) {
        this.selected_zekr = this.all_zekr[i];
        found = true;
        break;
      }
    }

    if (!found) {
      this.selected_zekr = {id: -1, name: "اختر ذكرًا من القائمة السابقة", counter: 0};
    }
    

  }




}
