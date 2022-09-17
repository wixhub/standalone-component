import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Card, CardsService } from './cards.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <fieldset>
      <legend><<< This is Standalone Component Level 2: "Card View" >>></legend>
      <article class="details-panel" *ngIf="card$ | async as card">
        <img
          class="main-img"
          src="{{ card.iconUrl }}"
          alt="Photo of {{ card.description }}"
        />
        <article>
          <p class="link">
            <a [routerLink]="['/list']">Back to all courses</a>
          </p>
          <h1 class="main-text">Course "{{ card.description }}"</h1>
          <h2>
            That course present
            <span class="emphasize">{{ card.instructor }}</span>
          </h2>
          <p>{{ card.longDescription }}</p>
          <p>
            <a href="{{ card.courseUrl }}" target="_blank"
              >Link to course on {{ card.instructor }}</a
            >
          </p>
        </article>
      </article>
    </fieldset>
  `,
  styles: [
    `
      fieldset {
        border: 1px solid red;
        justify-content: center;
        align-items: center;
      }
      legend {
        text-align: center;
        font-size: 15px;
        color: red;
      }
      .details-panel {
        display: flex;
        padding: 10px;
        gap: 50px;
      }
      .main-img {
        border-radius: 10px;
        width: 400px;
      }
      .main-text {
        font-size: 34pt;
        margin-bottom: 20px;
      }
      .emphasize {
        font-weight: bold;
        color: red;
      }
    `,
  ],
})
export class CardViewComponent implements OnInit {
  card$!: Observable<Card | undefined>;

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.card$ = this.route.paramMap.pipe(
      map((params) => {
        return this.cardsService.cards[Number(params.get('id'))];
      })
    );
  }
}
