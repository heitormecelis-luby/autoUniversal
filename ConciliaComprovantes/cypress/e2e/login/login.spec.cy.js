describe('Página de Login', () => {
    beforeEach(() => {
       cy.visit('/login');
       cy.get('button[data-cy="Entrar"]').click();
    });

    it('Login bem-sucedido com credenciais corretas', () => {
        cy.loginFixture('validUser');
        cy.url().should('include', '/perfil');
       // cy.contains('A logomarca da Igreja Universal, de cor vermelha e branca e texto azul"');
       cy.get('div.cursor-pointer').click({force: true});
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
        cy.get('button[type="submit"]').should('be.disabled');
        //cy.get('input[name="username"]:invalid').should('exist');
        //cy.get('input[name="password"]:invalid').should('exist');

    });

    it('Fluxo de recuperação de senha', () => {
        cy.get('a[data-cy="forgotPasswordLink"]').click();
        cy.url().should('include', '/recuperar-senha');
        cy.get('input[data-cy="email"]').type('augusto.mecelis+conciliador@luby.com.br', {force: true});
        cy.get('button[data-cy="Continuar"]').click({force:true});
        cy.contains('Verifique seu e-mail');
    });
});