import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  Characters: any = [];

  constructor(
    private charService: CharactersService
  ) {}

  ngOnInit():void{
    this.getCharacter();
  }

  getCharacter(){
    this.charService.getCharacters().subscribe((data) => {
      this.Characters = data;
      console.log(this.Characters)
    })
  }
}
