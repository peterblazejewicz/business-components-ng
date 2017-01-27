import { BusinessComponentsPage } from './app.po';

describe('BusinessComponents App', function() {
  let page: BusinessComponentsPage;

  beforeEach(() => {
    page = new BusinessComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bc works!');
  });
});
