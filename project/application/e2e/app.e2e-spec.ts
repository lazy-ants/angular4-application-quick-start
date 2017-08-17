import { BasicAngularFrontendPage } from './app.po';

describe('ng-app App', () => {
    let page: BasicAngularFrontendPage;

    beforeEach(() => {
        page = new BasicAngularFrontendPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!!');
    });
});
