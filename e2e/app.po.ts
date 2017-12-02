import { browser, by, element } from 'protractor';

export class AngularFourMEANSeedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('client-side-root h1')).getText();
  }
}
