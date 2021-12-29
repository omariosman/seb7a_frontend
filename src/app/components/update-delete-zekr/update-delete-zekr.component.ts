import { Component, OnInit } from '@angular/core';
import { Seb7aService } from 'src/app/services/seb7a.service';

@Component({
  selector: 'app-update-delete-zekr',
  templateUrl: './update-delete-zekr.component.html',
  styleUrls: ['./update-delete-zekr.component.css']
})
export class UpdateDeleteZekrComponent implements OnInit {
  all_zekr : any;
  constructor(private seb7aservice: Seb7aService) { }

  ngOnInit(): void {
    this.seb7aservice.get_all_zekr().subscribe(data => { this.all_zekr = data; })
  }

  delete_zekr(zekr_id: any){
    this.seb7aservice.delete_zekr(zekr_id).subscribe(data => {
      this.seb7aservice.get_all_zekr().subscribe(all_zekr => {this.all_zekr = all_zekr;})
    });
    
  }

}
