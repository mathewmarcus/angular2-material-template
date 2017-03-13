import { Angular2MaterialTemplatePage } from './app.po';

describe('angular2-material-template App', () => {
  let page: Angular2MaterialTemplatePage;

  beforeEach(() => {
    page = new Angular2MaterialTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
