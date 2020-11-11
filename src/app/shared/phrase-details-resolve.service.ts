import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from "@angular/router";
import {Phrase} from "./phrase.class";
import {PhraseService} from "./phrase.service";

@Injectable({
  providedIn: 'root'
})
export class PhraseDetailsResolveService implements Resolve<Phrase | boolean> {

  constructor(private svc: PhraseService, private route: Router) { }

  resolve(route:ActivatedRouteSnapshot): Promise<Phrase | boolean> {
    const id = +route.params.id;

    return this.svc.getPhrase(id).then(phrase => {
      if (phrase) {
        return phrase;
      } else {
        this.route.navigate(['/phrase']);
          return false;
      }
    });
  }
}
