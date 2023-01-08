import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './components/posts/posts.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
    {
        path:'',
        component: PostsComponent
    },
    {
        path:'profile',
        component: ProfileComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
