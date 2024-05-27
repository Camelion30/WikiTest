describe('Wikipedia Watchlist Tests', () => {
  const WikiWatchList="https://en.wikipedia.org/wiki/Special:Watchlist";
  const TestData1="Galatasaray"
  const TestData2="Manchester United"
  const TestUrl1="https://en.wikipedia.org/wiki/Galatasaray_S.K._(football)"
  const TestUrl2="https://en.wikipedia.org/wiki/Manchester_United_F.C."
  const UserIdInput ="Camelion30"
  const UserPasswordInput="omersari2286"
  beforeEach(() => {
    loginToWikipedia();
    // open watchlist page
    cy.visit(WikiWatchList);
    // clear watchlist
    cy.get("#ca-special-specialAssociatedNavigationLinks-link-3").click();
    cy.contains("Clear the watchlist (This is permanent!)").click();
  
    function loginToWikipedia(){
    // open wikipedia page
    cy.visit('https://en.wikipedia.org');
    //click login button
    cy.get('#pt-login-2').click();
    // sign in to your account
    cy.get('#wpName1').type(UserIdInput);
    cy.get('#wpPassword1').type(UserPasswordInput);
    cy.get('#wpLoginAttempt').click();
    // wait for login to complete
    cy.contains('Log out').should('exist');}
    
  });

  it('adds two pages to watchlist and removes one', () => {
    // add two pages to my watchlist
    cy.visit(TestUrl1);
    cy.get('#ca-watch').click();
    cy.visit(TestUrl2);
    cy.get('#ca-watch').click();

    // check if both pages are added to watchlist
    cy.visit(WikiWatchList);
    cy.contains(TestData1).should('exist');
    cy.visit(WikiWatchList);
    cy.contains(TestData2).should('exist');

    // remove one page from watchlist
    cy.visit(TestUrl1);
    cy.wait(2000);
    cy.get('#ca-unwatch').click();

    // check if the removed page is not in the watchlist
    cy.visit(WikiWatchList);
    cy.contains(TestData1).should('not.exist');

    // check if the other page is still present in the watchlist
    cy.contains(TestData2).should('exist');

    // go to the article in the watchlist and make sure the title matches
    cy.contains(TestData2).click();
    cy.url().should('include', '/wiki/Manchester_United_F.C.');
    cy.get('h1#firstHeading').should('contain', 'Manchester United F.C.');
  });
});