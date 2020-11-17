/// <reference types="Cypress" />
describe('logout', function(){


        it('login in with correct credentials', function(){
            cy.visit('https://www.howmuch.pk/');
            cy.get('#nav-mobile > li:nth-child(1) > a').click();
            cy.get('#spree_user_email').click({force: true}).type('umersatti919@gmail.com');
            cy.get('#spree_user_password').click({force: true}).type('ghostrider919');
            cy.get('#new_spree_user > div:nth-child(5) > div > button').click({force: true});
        

    })
    it('logout', function(){

        cy.get('#slide-out > li:nth-child(6) > a > span').click({force:true});
        cy.wait(1000);

    })




})