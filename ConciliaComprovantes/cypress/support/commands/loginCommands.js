Cypress.Commands.add('loginAdministrador', (username, password) => {
    cy.visit('/login');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type=submit]').click();
});

Cypress.Commands.add('loginFixture', (userKey) => {
    cy.fixture('users').then((users) => {
        const user = users[userKey];
        cy.login(user.username, user.password);
    });

});