import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
	alldata: any = [];
  constructor(private _homeService: HomeService) { }

  ngOnInit() {
	this._homeService.getFoods().subscribe(
      // the first argument is a function which runs on success
      data => { console.log(data);
		this.alldata = data.data.contacts;
      
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }
  
  deleteuser(userid)
  {
	this._homeService.deleteuser(userid).subscribe(
      // the first argument is a function which runs on success
      data => { console.log(data);
      
		$(".userrow"+userid).remove();
		
		$(".label-success").removeClass("hide").html("record deleted !");
		//this.alldata = data;
      
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
	}

}
