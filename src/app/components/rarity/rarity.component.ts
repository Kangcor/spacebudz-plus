import {Component, Input} from '@angular/core';

@Component({
  selector: 'sbp-rarity',
  templateUrl: './rarity.component.html',
  styleUrls: ['./rarity.component.scss']
})
export class RarityComponent {
  @Input() text: string;
  @Input() rarity: string;
  @Input() scarcity: number;
}
