describe('home page', () => {
  it('should load', () => {
    cy.visit('/');
    cy.contains('h1', 'super complex app')
  })
})

describe('scream input', () => {
  it('should be able to type', () => {
    cy.visit('/');
    cy.get('input').type('hello world').and('have.value', 'hello world');
  })

  it('should scream input', () => {
    cy.visit('/');
    cy.get('input').type('hello world');
    cy.get('button').click();
    cy.contains('p', 'HELLO WORLD!');
  })
});
