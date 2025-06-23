import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es' | 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private currentLocale = signal<AvailableLocale>('fr');

  // constructor() {
  //   this.currentLocale.set(
  //     (localStorage.getItem('locale') as AvailableLocale) ?? 'es'
  //   );
  // }
  // Validación explícita: Ahora obtenemos el valor del localStorage, lo validamos con el método isValidLocale(), y solo si es válido lo usamos
  // Valor por defecto seguro: Si el valor no es válido o es null, usamos 'es' como valor por defecto
  // El método isValidLocale() es un type guard que:

  // Verifica que el valor no sea null
  // Verifica que el valor esté incluido en el array de locales válidos
  // Retorna locale is AvailableLocale que le dice a TypeScript que si la función retorna true, el parámetro es definitivamente del tipo AvailableLocale
  // Esta aproximación es mucho más segura porque garantiza que solo valores válidos se asignen a currentLocale, evitando posibles errores en tiempo de ejecución si alguien modifica manualmente el localStorage con un valor inválido.
  constructor() {
    const storedLocale = localStorage.getItem('locale');
    const validLocale = this.isValidLocale(storedLocale) ? storedLocale : 'fr';
    this.currentLocale.set(validLocale);
  }

  private isValidLocale(locale: string | null): locale is AvailableLocale {
    return locale !== null && ['es', 'fr', 'en'].includes(locale);
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
