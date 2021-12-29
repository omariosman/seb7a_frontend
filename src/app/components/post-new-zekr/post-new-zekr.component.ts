import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Seb7aService } from 'src/app/services/seb7a.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-new-zekr',
  templateUrl: './post-new-zekr.component.html',
  styleUrls: ['./post-new-zekr.component.css']
})
export class PostNewZekrComponent implements OnInit, AfterViewInit {

  @ViewChild("zekrRef") zekrElementRef!: ElementRef;

  constructor(private seb7aservice: Seb7aService, private router: Router) { }

  ngOnInit(): void {
  }


  post_new_zekr(zekr_name: any){
    this.seb7aservice.post_new_zekr(zekr_name).subscribe(data => {});
  }

  onSubmit(value: any) {
    //get the value by its property
    console.log("Zekr: " + value.zekr);
    this.post_new_zekr(value.zekr);
    this.router.navigate(['/']);
  }

  ngAfterViewInit(): void {
      this.zekrElementRef.nativeElement.focus();
  }
  


}
