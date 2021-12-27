import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Seb7aComponent } from './components/seb7a/seb7a.component';

const routes: Routes = [
  {path: "", component: Seb7aComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
