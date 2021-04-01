import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudzService } from 'src/app/services/budz.service';

@Component({
  selector: 'sbp-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  public budz;

  constructor(
    private route: ActivatedRoute,
    private _budzService: BudzService,
  ) { }

  ngOnInit() {
    const budzId = this.route.snapshot.paramMap.get('id');
    const budz = this._budzService.fetch(budzId);
    this.budz = this._budzService.compareBudz(budz);
  }

}
