import { Component, OnInit } from '@angular/core';
import { CVE } from '../models/cve.model';
import { CVEService } from '../services/cve.service';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public cves: CVE[] = [];
  public favoriteCVEs: CVE[] = [];
  public cveData: any[] = [];
  public selectedSegment: string = 'todos';

  constructor(
    private cveService: CVEService,
    private favoriteService: FavoriteService
  ) {}

  async ngOnInit() {
    await this.loadData();
    this.createCVEList();
    this.loadFavorites();
    console.log(this.cves);
  }

  async loadData(): Promise<any> {
    try {
      this.cveData = await this.cveService.readJSONCVE();
    } catch (error) {
      console.error('Error:', error);
    }
  }

  createCVEList() {
    this.cveData.map((cve) => {
      const id = cve['id'];
      const summary = cve['summary'];
      const published = cve['Published'];
      this.cves.push(new CVE(id, summary, published));
    });
  }

  loadFavorites() {
    this.cves.forEach(cve => {
      if (this.favoriteService.isFavorite(cve)) {
        cve.isFavorite = true;
        this.favoriteCVEs.push(cve);
      }
    });
  }

  toggleFavorite(cve: CVE, event: Event) {
    event.stopPropagation();
    if (cve.isFavorite) {
      this.favoriteService.removeFavorite(cve);
      this.favoriteCVEs = this.favoriteCVEs.filter(fav => fav.id !== cve.id);
    } else {
      this.favoriteService.addFavorite(cve);
      this.favoriteCVEs.push(cve);
    }
    cve.isFavorite = !cve.isFavorite;
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }
}
