import { Injectable } from '@angular/core';
import { CVE } from '../models/cve.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private storageKey = 'favoriteCVEs';

  constructor() {}

  getFavorites(): CVE[] {
    const favorites = localStorage.getItem(this.storageKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addFavorite(cve: CVE): void {
    const favorites = this.getFavorites();
    favorites.push(cve);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  removeFavorite(cve: CVE): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(fav => fav.id !== cve.id);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }

  isFavorite(cve: CVE): boolean {
    const favorites = this.getFavorites();
    return favorites.some(fav => fav.id === cve.id);
  }

  printFavitoresCVEs() {

    return true;
  }
}

