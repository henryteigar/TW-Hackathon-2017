import { TwAppPage } from './app.po';

describe('tw-app App', () => {
  let page: TwAppPage;

  beforeEach(() => {
    page = new TwAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
