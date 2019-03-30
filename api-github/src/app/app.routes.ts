import { Routes } from '@angular/router';
import { PATH_HOME, PATH_DETAIL, PATH_DETAIL_REPOS, PATH_DETAIL_FOLLOWERS } from './app.routes.constantes';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReposComponent } from './repos/repos.component';
import { FollowersComponent } from './followers/followers.component';


export const ROUTES: Routes = [
    { path: PATH_HOME, component: HomePageComponent },
    {
        path: PATH_DETAIL + '/:user',
        component: DetailUserComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: PATH_DETAIL_REPOS },
            {
                path: PATH_DETAIL_REPOS, component: ReposComponent
            },
            { path: PATH_DETAIL_FOLLOWERS, component: FollowersComponent },
        ]
    }
];