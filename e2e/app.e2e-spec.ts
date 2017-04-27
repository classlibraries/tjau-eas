import { TjauEasPage } from './app.po';

describe('tjau-eas App', function() {
  let page: TjauEasPage;

  beforeEach(() => {
    page = new TjauEasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
