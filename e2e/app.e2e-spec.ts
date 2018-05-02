import { AngularCrudServicoPage } from './app.po';

describe('angular-crud-servico App', function() {
  let page: AngularCrudServicoPage;

  beforeEach(() => {
    page = new AngularCrudServicoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
