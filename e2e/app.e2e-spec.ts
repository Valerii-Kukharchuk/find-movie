import { Hw5Page } from './app.po';

describe('hw5 App', () => {
  let page: Hw5Page;

  beforeEach(() => {
    page = new Hw5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
