import { BookTradingSrcPage } from './app.po';

describe('book-trading-src App', () => {
  let page: BookTradingSrcPage;

  beforeEach(() => {
    page = new BookTradingSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
