import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PATH_HOME , PATH_DETAIL ,PATH_DETAIL_FOLLOWERS ,PATH_DETAIL_REPOS} from '../app.routes.constantes';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute,private apiRequestService:ApiRequestService) { }
  user:object;
  navigateToHome() {
    this.router.navigate([PATH_HOME]);
  }
  ngOnInit() { 
    this.apiRequestService.getUser(this.route.snapshot.paramMap.get('user')).subscribe((p:any)=>
    {
      this.user=p
    },(error)=>{
      this.router.navigate([PATH_HOME , error.status ]);
    })
  }
  navigateToFollowers(){
    this.router.navigate([PATH_DETAIL,this.route.snapshot.paramMap.get('user'),PATH_DETAIL_FOLLOWERS]);
  }
  navigateToRepos(){
    this.router.navigate([PATH_DETAIL,this.route.snapshot.paramMap.get('user'),PATH_DETAIL_REPOS]);
  }
}
