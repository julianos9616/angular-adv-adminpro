import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  private _linkTheme = document.querySelector('#theme');

  constructor() { 

    const url = localStorage.getItem('theme') || './assets/css/colors/red-dark.css';
    // ./assets/css/colors/default-dark.css
    this._linkTheme?.setAttribute('href',url);
  }

  changeTheme(theme: string){
    
    const url = `./assets/css/colors/${theme}.css`
    this._linkTheme?.setAttribute('href',url);
    // console.log(linkTheme)
    localStorage.setItem('theme',url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme():void{

    const links = document.querySelectorAll('.selector');;

    links.forEach(elem => {
      elem.classList.remove('working');

      const btnTheme = elem.getAttribute('data-theme');
      const bthThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this._linkTheme?.getAttribute('href');

      if(bthThemeUrl === currentTheme){
        elem.classList.add('working');
      }
    })

  }

}
