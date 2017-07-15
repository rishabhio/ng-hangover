import { NgHangoverPage } from './app.po';

describe('ng-hangover App', () => {
  let page: NgHangoverPage;

  beforeEach(() => {
    page = new NgHangoverPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
