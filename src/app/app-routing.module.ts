import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PostNewZekrComponent } from './components/post-new-zekr/post-new-zekr.component';
import { Seb7aComponent } from './components/seb7a/seb7a.component';
import { UpdateDeleteZekrComponent } from './components/update-delete-zekr/update-delete-zekr.component';
import { UpdateZekrComponent } from './components/update-zekr/update-zekr.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'zekr/:id', component: Seb7aComponent},
  {path: 'post_new_zekr', component: PostNewZekrComponent},
  {path: 'update_delete_zekr', component: UpdateDeleteZekrComponent},
  {path: 'update_zekr/:id/:name', component: UpdateZekrComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
