import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from './cards.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>card works!</p> `,
  styles: [],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;

  constructor() {}

  ngOnInit(): void {}
}
