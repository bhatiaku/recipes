import { LearningAngAppPage } from './app.po';

describe('learning-ang-app App', () => {
  let page: LearningAngAppPage;

  beforeEach(() => {
    page = new LearningAngAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to learn!!');
  });
});
