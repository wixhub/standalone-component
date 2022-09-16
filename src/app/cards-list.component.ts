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
      <legend>
        <<< This is Standalone Component Level 0: "List of Cards" >>>
      </legend>
      <app-card
        *ngFor="let card of cardsService.cards"
        [card]="card"
      ></app-card>
    </fieldset>
  `,
  styles: [
    `
      fieldset {
        border: 1px solid red;
        background-color: #ffebe6;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        padding: 10px;
      }
      legend {
        text-align: center;
        font-size: 15px;
        color: red;
      }
    `,
  ],
})
export class CardsListComponent implements OnInit {
  constructor(readonly cardsService: CardsService) {}

  ngOnInit(): void {}
}
