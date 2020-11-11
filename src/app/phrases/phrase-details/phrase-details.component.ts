import { Component, OnInit } from '@angular/core';
import {PhraseService} from "../../shared/phrase.service";
import {Phrase} from "../../shared/phrase.class";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styles: [
  ]
})
export class PhraseDetailsComponent implements OnInit {

  phrase: Phrase;

  editValue: string;
  editLanguage: string;

  constructor(private  svc: PhraseService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              public auth: AuthService) { }

  ngOnInit(): void {
    this.activateRoute.data.subscribe((data: {phrase: Phrase}) => {
      this.phrase = data.phrase;
      this.editValue = this.phrase.value;
      this.editLanguage = this.phrase.language;
    });
  }

  goToPhrasesList(): void {
    const phraseID = this.phrase ? this.phrase.id : null;

    this.router.navigate(['../', {id: phraseID}], {relativeTo: this.activateRoute});
  }

  isChanged(): boolean {
    return !(this.phrase.value === this.editValue && this.phrase.language === this.editLanguage);
  }

  save(): void {
    this.phrase.value = this.editValue;
    this.phrase.language = this.editLanguage;
  }

  canDeactivate(): Promise<boolean> | boolean{
    if (!this.phrase) {
      return true;
    } else if (!this.isChanged()) {
      return  true;
    }
    return confirm('You did not save the changes. \nAll changes will be lost.\nLeave anyway?');
  }
}

