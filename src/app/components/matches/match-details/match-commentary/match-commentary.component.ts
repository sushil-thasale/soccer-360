import { Component, OnInit, ViewChild } from '@angular/core';
import {SoccerServiceClient} from '../../../../services/soccer.service.client';
import { Input } from '@angular/core';

@Component({
  selector: 'app-match-commentary',
  templateUrl: './match-commentary.component.html',
  styleUrls: ['./match-commentary.component.css']
})
export class MatchCommentaryComponent implements OnInit {

  @Input() matchID: string;
  errorFlag: boolean;
  errorMsg: string;
  comments: any;

  constructor(private soccerService: SoccerServiceClient) { }

  ngOnInit() {

    // match commentary - lineup & bench
    this.soccerService.getMatchCommentary(this.matchID)
      .subscribe(
        (match: any) => {
          const commentary = this.parseBody(match);
          this.comments = commentary.comments;
          this.errorFlag = false;
        }, (error) => {
          console.log(error + ' unable to retrieve match commentary!');
          this.errorFlag = true;
          this.errorMsg = 'Unable to retrieve match commentary!';
        });
  }

  parseBody(data: any) {
    let val = data._body;
    val = JSON.parse(val);
    return val;
  }
}
