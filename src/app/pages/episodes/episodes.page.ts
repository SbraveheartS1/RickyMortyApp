import { Component, OnInit } from '@angular/core';
import { EpisodesService } from 'src/app/services/episodes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
  Episode : any = [];
  constructor(
    private epiService: EpisodesService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.epiService.getEpisode(id).subscribe(data =>{
      this.Episode = data;
      console.log(this.Episode)
    })
  }

}
