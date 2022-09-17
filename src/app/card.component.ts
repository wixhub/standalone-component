import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from './cards.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: ` <fieldset>
    <legend><<< This is Standalone Component Level 1: "Card" >>></legend>
    <article>
      <img src="{{ card.iconUrl }}" alt="Photo of {{ card.description }}" />
      <h3>Cours "{{ card.description }}"</h3>
      <p class="description">
        <span class="name">{{ card.instructor }}</span> wants you to know this
        about {{ card.longDescription }}
      </p>
      <p class="link">
        <a [routerLink]="['/details', card.id]">Learn More</a>
      </p>
    </article>
  </fieldset>`,
  styles: [
    `
      fieldset {
        border: 1px solid red;
        background-color: #ffd6cc;
        justify-content: center;
        align-items: center;
      }
      legend {
        text-align: center;
        font-size: 15px;
        color: red;
      }
      img {
        width: 300px;
      }
      article {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 0 0 20px;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        width: 300px;
        height: 400px;
        position: relative;
      }
      h3,
      p {
        padding: 0 10px 0 10px;
      }
      .description {
        height: 80px;
        overflow: hidden;
      }
      .name {
        color: red;
      }
      .link {
        position: absolute;
        bottom: 0;
      }
    `,
  ],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;

  constructor() {}

  ngOnInit(): void {}
}
