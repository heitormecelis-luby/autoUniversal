describe('Página de Login', () => {
    beforeEach(() => {
       cy.visit('/login');
    });

    it('Login bem-sucedido com credenciais corretas', () => {
        cy.loginFixture('validUser');
        cy.url().should('include', '/home');
        cy.contains('A logomarca da Igreja Universal, de cor vermelha e branca e texto azul"');
        cy.contains('Usuários');
        cy.contains('Conciliação');
        cy.contains('Relatórios');
        cy.contains('Menu de visualização');
    });

    it('Falha de login com credenciais incorretas', () => {
        cy.loginFixture('invalidUser');
        cy.contains('Ocorreu um erro ao realizar a autenticação. Tente novamente');
    });

    it('Botão de login só funciona com ambos Usuário e Senha preenchidos', () => {
        cy.get('button[type=""submit]').click();
        cy.get('input[name="username"]:invalid').should('exist');
        cy.get('input[name="password"]:invalid').should('exist');

    });
});