import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit  {

  constructor (
    private router: Router,
    private alert: AlertService) {}
    

    ngOnInit(): void {
      setTimeout(() => {
        if(this.router.url === "404") {
          this.router.navigateByUrl("/");
          this.alert.displayToast(
            ('the page does not exist'),
            'info',
            'red'
            );
        }
        
      }, 1000);
    }
}
