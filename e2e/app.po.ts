import { browser, by, element } from 'protractor';

export class LearningAngAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('learn-root h1')).getText();
  }
}
