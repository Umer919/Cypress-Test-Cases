/// <reference types="Cypress" />
describe('View Completed Orders', function(){
    it('login in with correct credentials', function(){
        cy.visit('https://www.howmuch.pk/');
        cy.get('#nav-mobile > li:nth-child(1) > a').click();
        cy.get('#spree_user_email').click({force: true}).type('umer.ziyad@arkhitech.com');
        cy.get('#spree_user_password').click({force: true}).type('arkhitech');
        cy.get('#new_spree_user > div:nth-child(5) > div > button').click({force: true});
    })

    it('Completed Orders', function(){
        cy.get('body > react-view > div > div:nth-child(3) > div > section.content-header > div > div > ul > li:nth-child(2) > button > span.MuiButton-label').click({force:true});
        cy.wait(1000);





    })





})