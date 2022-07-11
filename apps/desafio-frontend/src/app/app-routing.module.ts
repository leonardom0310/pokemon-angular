import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokelistComponent } from './modules/pokemon/components/pokelist.component';

const routes: Routes = [{ path: '', component: PokelistComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
