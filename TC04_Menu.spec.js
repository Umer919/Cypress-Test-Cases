/// <reference types="Cypress" />

describe('Menu', function(){

    it('login in with correct credentials', function(){
        cy.visit('https://www.howmuch.pk/');
        cy.get('#nav-mobile > li:nth-child(1) > a').click();
        cy.get('#spree_user_email').click({force: true}).type('umersatti919@gmail.com');
        cy.get('#spree_user_password').click({force: true}).type('ghostrider919');
        cy.get('#new_spree_user > div:nth-child(5) > div > button').click({force: true});
        

    })
    it('Click on Menu' , function(){
        cy.get('#top-nav > div > div > div.col.m3.s7.no-pad > a.btnMenuToggle.sidenav-trigger.show-on-large > i').click({force:true});
        cy.wait(1000);


    })
    it('Products', function(){
        cy.get('#slide-out > li:nth-child(1) > a').click({force:true});
        cy.wait(1000);


    })
    

    it('Stores', function(){
        cy.visit('https://www.howmuch.pk/');
        cy.get('#nav-mobile > li:nth-child(1) > a').click();
        cy.get('#spree_user_email').click({force: true}).type('umersatti919@gmail.com');
        cy.get('#spree_user_password').click({force: true}).type('ghostrider919');
        cy.get('#new_spree_user > div:nth-child(5) > div > button').click({force: true});
       
        cy.get('#top-nav > div > div > div.col.m3.s7.no-pad > a.btnMenuToggle.sidenav-trigger.show-on-large > i').click({force:true});
        cy.wait(1000);
        cy.get('#slide-out > li:nth-child(2) > a > i').click({force:true});
        cy.wait(1000);


    })
    it('Promotions', function(){
        cy.visit('https://www.howmuch.pk/');
        cy.get('#nav-mobile > li:nth-child(1) > a').click();
        cy.get('#spree_user_email').click({force: true}).type('umersatti919@gmail.com');
        cy.get('#spree_user_password').click({force: true}).type('ghostrider919');
        cy.get('#new_spree_user > div:nth-child(5) > div > button').click({force: true});
        cy.get('#slide-out > li:nth-child(3) > a').click({force:true});
        cy.wait(1000);

    })
    
})












