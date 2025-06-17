Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login');
    cy.get('input[name="user"]').type(username, {force:true});
    cy.get('input[name="password"]').type(password, {force:true}).tab();
    cy.get('button[type=submit]').click({force:true});
});

Cypress.Commands.add('loginFixture', (userKey) => {
    cy.fixture('users').then((users) => {
        const user = users[userKey];
        cy.login(user.username, user.password);
    });

});