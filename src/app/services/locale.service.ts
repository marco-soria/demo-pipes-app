import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es' | 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private currentLocale = signal<AvailableLocale>('fr');

  constructor() {
    this.currentLocale.set(
      (localStorage.getItem('locale') as AvailableLocale) ?? 'es'
    );
    //validating the locale from localStorage before setting it
    // const storedLocale = localStorage.getItem('locale') as AvailableLocale;
    // if (storedLocale && ['es', 'fr', 'en'].includes(storedLocale)) {
    //   this.currentLocale.set(storedLocale);
    // }
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
