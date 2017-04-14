import { Angular2adminPage } from './app.po';

describe('angular2admin App', () => {
  let page: Angular2adminPage;

  beforeEach(() => {
    page = new Angular2adminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
