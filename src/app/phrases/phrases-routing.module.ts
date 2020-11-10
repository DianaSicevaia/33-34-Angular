import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhraseListComponent} from "./phrase-list/phrase-list.component";
import {PhraseDetailsComponent} from "./phrase-details/phrase-details.component";
import {CanDeavtivateGuardService} from "../shared/can-deavtivate-guard.service";

const routes: Routes = [
  {path: 'phrases', component: PhraseListComponent},
  {
    path: 'phrases/:id',
    component: PhraseDetailsComponent,
    canDeactivate: [CanDeavtivateGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
