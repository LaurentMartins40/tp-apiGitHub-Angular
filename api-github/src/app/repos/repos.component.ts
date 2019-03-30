import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,private apiRequestService:ApiRequestService) { }
  user = {repos_url:''};
  repos:object;
  ngOnInit() {
    this.apiRequestService.getUser(this.route.parent.snapshot.paramMap.get('user')).subscribe((p:any)=>{this.user=p
    this.apiRequestService.getUrl(this.user.repos_url).subscribe((r:any)=>this.repos=r)})
  }

}
