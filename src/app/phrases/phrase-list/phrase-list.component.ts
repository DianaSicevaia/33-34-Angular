import { Component, OnInit } from '@angular/core';
import {PhraseService} from "../../shared/phrase.service";
import {Phrase} from "../../shared/phrase.class";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styles: [
  ]
})
export class PhraseListComponent implements OnInit {

  phrases: Phrase[];
  selectedID: number;

  constructor(private svc: PhraseService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      this.svc
        .getAll()
        .then(res => this.phrases = res);
    });
  }

  isSelected(id: number): boolean {
    return this.selectedID === id;
  }

  onSelect(selected: Phrase): void {
    this.selectedID = selected.id;
    this.router.navigate(['phrases', selected.id]);
  }
}

