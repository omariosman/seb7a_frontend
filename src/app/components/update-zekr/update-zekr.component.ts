import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seb7aService } from 'src/app/services/seb7a.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-zekr',
  templateUrl: './update-zekr.component.html',
  styleUrls: ['./update-zekr.component.css']
})
export class UpdateZekrComponent implements OnInit, AfterViewInit {

  zekr_id: any;
  zekr_name: any;

  @ViewChild("zekfRef") zekrElementRef !: ElementRef;

  constructor(private route: ActivatedRoute, private seb7aservice: Seb7aService, private router: Router) { }

  ngOnInit(): void {
    this.zekr_id = this.route.snapshot.paramMap.get('id');
    this.zekr_name = this.route.snapshot.paramMap.get('name');

    console.log(this.zekr_id);
  }

  update_zekr(new_value: any){
    this.seb7aservice.update_zekr(this.zekr_id, new_value).subscribe(data => {});
  }


  onSubmit(value: any) {
    //get the value by its property
    console.log("Zekr: " + value.zekr);
    this.update_zekr(value.zekr);
    this.router.navigate(['update_delete_zekr']);
    
    
 
  }

  ngAfterViewInit(): void {
      this.zekrElementRef.nativeElement.focus();
  }

}
