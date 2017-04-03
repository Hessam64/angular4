import { AngualrHelloWorldPage } from './app.po';

describe('angualr-hello-world App', () => {
  let page: AngualrHelloWorldPage;

  beforeEach(() => {
    page = new AngualrHelloWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
