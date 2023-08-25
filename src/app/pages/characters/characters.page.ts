import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  Character: any = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private charService: CharactersService
  ) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.getCharacter(id);
  }

  getCharacter(id:any){
    this.charService.getCharacter(id).subscribe(char => {
      console.log(char);
      this.Character = char;
    })
  }

}
