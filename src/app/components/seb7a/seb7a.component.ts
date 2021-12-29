import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZekrInterface } from 'src/app/interfaces/zekr-interface';
import { Seb7aService } from 'src/app/services/seb7a.service';

@Component({
  selector: 'app-seb7a',
  templateUrl: './seb7a.component.html',
  styleUrls: ['./seb7a.component.css']
})
export class Seb7aComponent implements OnInit {
  //zekr_id: any;
  @Input() selected_zekr?: ZekrInterface = {id: -1, name: "اختر ذكرًا من القائمة السابقة", counter: 0};
  //zekr_counter: any;

  try_data: any;



  constructor(private route: ActivatedRoute, private seb7aservice: Seb7aService) { }

  ngOnInit(): void {
    
    //this.zekr_id = this.route.snapshot.paramMap.get('id');
    /*
    this.zekr_id = this.route.snapshot.queryParamMap.get('id');
    this.zekr_name = this.route.snapshot.queryParamMap.get('name');
    this.zekr_counter = this.route.snapshot.queryParamMap.get('counter');
    console.log(this.zekr_id);
    console.log(this.zekr_name);
    console.log(this.zekr_counter);
*/
}

incrementCounter(){
    console.log(this.selected_zekr);
    this.seb7aservice.incrementCounter(this.selected_zekr).subscribe(data => {
      this.selected_zekr = data;
    });
  }

  resetCounter(){
    this.seb7aservice.resetCounter(this.selected_zekr).subscribe(data => {
      this.selected_zekr = data;
    });
  }

  try_api(){
    this.seb7aservice.try_api().subscribe(data => {this.try_data = data})
  }



}
