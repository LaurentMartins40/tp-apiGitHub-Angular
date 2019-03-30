import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,private apiRequestService:ApiRequestService) { }
  user = {followers_url:''};
  followers:object;
  ngOnInit() {
    this.apiRequestService.getUser(this.route.parent.snapshot.paramMap.get('user')).subscribe((p:any)=>{this.user=p
    this.apiRequestService.getUrl(this.user.followers_url).subscribe((r:any)=>this.followers=r)})
  }

}
