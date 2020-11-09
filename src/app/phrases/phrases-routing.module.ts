import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhraseListComponent} from "./phrase-list/phrase-list.component";
import {PhraseDetailsComponent} from "./phrase-details/phrase-details.component";

const routes: Routes = [
  {path: 'phrases', component: PhraseListComponent},
  {path: 'phrases/:id', component: PhraseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
