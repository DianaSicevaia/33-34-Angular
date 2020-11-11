import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhraseListComponent} from "./phrase-list/phrase-list.component";
import {PhraseDetailsComponent} from "./phrase-details/phrase-details.component";
import {CanDeavtivateGuardService} from "../shared/can-deavtivate-guard.service";
import {PhraseDetailsResolveService} from "../shared/phrase-details-resolve.service";

const routes: Routes = [
  {path: 'phrases', component: PhraseListComponent},
  {
    path: 'phrases/:id',
    component: PhraseDetailsComponent,
    canDeactivate: [CanDeavtivateGuardService],
    resolve: {
      phrase: PhraseDetailsResolveService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
