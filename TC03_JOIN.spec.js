
/// <reference types="Cypress" />

describe('Join', function(){

    it('Sign up', function(){

        cy.visit('https://www.howmuch.pk/');
        cy.get('#nav-mobile > li:nth-child(2) > a').click({force: true});
        cy.wait(1000);


    })
    it('New Email ', function(){
       cy.get('#spree_user_email').click({force: true}).type('umer.ziyad@arkhitech.com');
       cy.wait(1000);


    })
it('New Password', function(){


cy.get('#spree_user_password').click({force: true}).type('arkhitech');
cy.wait(1000);



})
it('Confirm Password', function(){
    cy.get('#spree_user_password_confirmation').click({force: true}).type('arkhitech');
    cy.wait(1000);


})
it('Register', function(){
    cy.get('#new_spree_user > div:nth-child(5) > p:nth-child(2) > button').click({force:true});
    cy.wait(1000);


})





})













