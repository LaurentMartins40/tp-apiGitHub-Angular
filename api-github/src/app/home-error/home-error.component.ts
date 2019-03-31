import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-home-error',
  templateUrl: './home-error.component.html',
  styleUrls: ['./home-error.component.css']
})
export class HomeErrorComponent implements OnInit {
  errorMessage:string;
  constructor(private router: Router, private route: ActivatedRoute,private apiRequestService:ApiRequestService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      const errorType:string =param.get('error');
      if(errorType=='403'){
        this.errorMessage=`Erreur ${errorType} accès au serveur refusé`
      }else{
        if(errorType=='404'){
          this.errorMessage=`Erreur ${errorType} Utilisateur non trouvé`;
        }else{        
          this.errorMessage=`une erreur est survenue Erreur ${errorType}`
      }
    }
  })
  }

}
