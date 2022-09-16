import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsService } from './cards.service';
import { CardComponent } from './card.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <fieldset>
      <legend><<< This is Standalone Component >>></legend>
      <article class="list">
        <app-card></app-card>
        <article class="card" *ngFor="let card of cardsService.cards">
          <img
            class="img"
            src="{{ card.demoUrl }}"
            alt="Photo of {{ card.iconUrl }}"
          />
          <p class="headline">
            Meet <span class="pet-name">{{ card.description }}</span>
          </p>
          <p class="description">
            <span class="name">{{ card.instructor }}</span> wants you to know
            this about {{ card.longDescription }}:
            {{ card.description }}
          </p>
          <p class="learn-more">
            <a href="/details/{{ card.id }}">Learn More</a>
          </p>
        </article>
      </article>
    </fieldset>
  `,
  styles: [
    `
      fieldset {
        border: 1px solid red;
      }
      legend {
        text-align: center;
        font-size: 20px;
        color: red;
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 10px;
      }
      .text {
        font-size: 25pt;
        padding: 10px;
      }
    `,
  ],
})
export class CardsListComponent implements OnInit {
  constructor(readonly cardsService: CardsService) {}

  ngOnInit(): void {}
}
