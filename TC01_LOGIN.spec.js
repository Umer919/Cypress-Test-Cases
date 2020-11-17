
/// <reference types="Cypress" />


describe('login', function(){

    it('Login  without Email', function () {
        cy.visit('https://www.howmuch.pk/');
        cy.get('#nav-mobile > li:nth-child(1) > a').click();
        //cy.get('#spree_user_email').click({force: true}).type('umer.satti@arkhitech.com');
        cy.get('#spree_user_password').click({force: true}).type('arkhitech');
        cy.get('#new_spree_user > div:nth-child(5) > div > button').click({force: true});
        
        
    })

    it('Login without Password', function () {
        cy.visit('https://www.howmuch.pk/');
        cy.get('#nav-mobile > li:nth-child(1) > a').click();
        cy.get('#spree_user_email').click({force: true}).type('umer.ziyad@arkhitech.com');
       // cy.get('#spree_user_password').click({force: true}).type('satti123');
        cy.get('#new_spree_user > div:nth-child(5) > div > button').click({force: true});
        
        
    })


    it('Login with invalid Email and  Invalid Password', function () {
        cy.visit('https://www.howmuch.pk/');
        cy.get('#nav-mobile > li:nth-child(1) > a').click();
        cy.get('#spree_user_email').click({force: true}).type('umer.satti@arkhitech.com');
        cy.get('#spree_user_password').click({force: true}).type('satti123');
        cy.get('#new_spree_user > div:nth-child(5) > div > button').click({force: true});
        
        
    })


    it('login in with correct credentials', function(){
        cy.visit('https://www.howmuch.pk/');
        cy.get('#nav-mobile > li:nth-child(1) > a').click();
        cy.get('#spree_user_email').click({force: true}).type('umer.ziyad@arkhitech.com');
        cy.get('#spree_user_password').click({force: true}).type('arkhitech');
        cy.get('#new_spree_user > div:nth-child(5) > div > button').click({force: true});
        
       
    })
    























})