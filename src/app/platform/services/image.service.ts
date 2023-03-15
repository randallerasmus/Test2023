import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private key = 'profileImageUrl';

  get imageUrl(): string {
    return localStorage.getItem(this.key) || 'assets/profile.jpg';
  }

  set imageUrl(url: string) {
    localStorage.setItem(this.key, url);
  }

  clear() {
    localStorage.removeItem(this.key);
  }
}
