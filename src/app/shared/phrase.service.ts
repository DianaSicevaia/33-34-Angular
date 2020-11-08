import { Injectable } from '@angular/core';
import {Phrase} from "./phrase.class";
import {PHRASES} from "./mock-data";

const phrasesPromise = Promise.resolve(PHRASES);

@Injectable({
  providedIn: 'root'
})
export class PhraseService {

  constructor() { }

  getAll(): Promise<Phrase[]> {
    return phrasesPromise;
  }

  getPhrase(id: number): Promise<Phrase> {
    return phrasesPromise.then(phrases => phrases.find(phrase => phrase.id === id));
  }
}
