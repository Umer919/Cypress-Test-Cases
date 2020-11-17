
/// <reference types="Cypress" />

describe('Categories', function(){


    it('Bath and Body', function(){

    
    cy.visit('https://www.howmuch.pk/');
    cy.get('#nav-mobile > li:nth-child(1) > a').click();
    cy.get('#spree_user_email').click({force: true}).type('umersatti919@gmail.com');
    cy.get('#spree_user_password').click({force: true}).type('ghostrider919');
    cy.get('#top-nav > div > div > div.col.m3.s7.no-pad > a.btnMenuToggle.sidenav-trigger.show-on-large > i').click({force:true});
    cy.get('#slide-out > li:nth-child(5) > ul > li > ul > li:nth-child(1) > a').click({force:true});

    cy.wait(1000);


})
it('Beverages', function(){
    cy.visit('https://www.howmuch.pk/');
    cy.get('#top-nav > div > div > div.col.m3.s7.no-pad > a.btnMenuToggle.sidenav-trigger.show-on-large > i').click({force:true});
    cy.get('#slide-out > li:nth-child(5) > ul > li > ul > li:nth-child(2) > a').click({force:true});
    cy.wait(1000);

})
it('Candy and Choclate', function(){
    cy.visit('https://www.howmuch.pk/');
    cy.get('#top-nav > div > div > div.col.m3.s7.no-pad > a.btnMenuToggle.sidenav-trigger.show-on-large > i').click({force:true});
    cy.get('#slide-out > li:nth-child(5) > ul > li > ul > li:nth-child(3) > a').click({force:true});
    cy.wait(1000);
    

})
it('Cooking Oils', function(){
    cy.visit('https://www.howmuch.pk/');
    cy.get('#top-nav > div > div > div.col.m3.s7.no-pad > a.btnMenuToggle.sidenav-trigger.show-on-large > i').click({force:true});
    cy.get('#slide-out > li:nth-child(5) > ul > li > ul > li:nth-child(4) > a').click({force:true});
    cy.wait(1000);


})
it('Grains Rice and Cerals', function(){
    cy.visit('https://www.howmuch.pk/');
    cy.get('#top-nav > div > div > div.col.m3.s7.no-pad > a.btnMenuToggle.sidenav-trigger.show-on-large > i').click({force:true});
    cy.get('#slide-out > li:nth-child(5) > ul > li > ul > li:nth-child(5) > a').click({force:true});
    cy.wait(1000);


})
it('House Hold Supplies', function(){
    cy.visit('https://www.howmuch.pk/');
    cy.get('#top-nav > div > div > div.col.m3.s7.no-pad > a.btnMenuToggle.sidenav-trigger.show-on-large > i').click({force:true});
    cy.get('#slide-out > li:nth-child(5) > ul > li > ul > li:nth-child(6) > a').click({force:true});
    cy.wait(1000);


})
it('Milk', function(){

    cy.visit('https://www.howmuch.pk/');
    cy.get('#top-nav > div > div > div.col.m3.s7.no-pad > a.btnMenuToggle.sidenav-trigger.show-on-large > i').click({force:true});
    cy.get('#slide-out > li:nth-child(5) > ul > li > ul > li:nth-child(7) > a').click({force:true});
    cy.wait(1000);

})
it('Seasoning and Spices', function(){
    cy.visit('https://www.howmuch.pk/');
    cy.get('#top-nav > div > div > div.col.m3.s7.no-pad > a.btnMenuToggle.sidenav-trigger.show-on-large > i').click({force:true});
    cy.get('#slide-out > li:nth-child(5) > ul > li > ul > li:nth-child(8) > a').click({force:true});
    cy.wait(1000);

})
it('Tea and Infusions', function(){
    cy.visit('https://www.howmuch.pk/');
    cy.get('#top-nav > div > div > div.col.m3.s7.no-pad > a.btnMenuToggle.sidenav-trigger.show-on-large > i').click({force:true});
    cy.get('#slide-out > li:nth-child(5) > ul > li > ul > li:nth-child(9) > a').click({force:true});
    cy.wait(1000)


})
it('Ramzan Packages', function(){
    cy.visit('https://www.howmuch.pk/');
    cy.get('#top-nav > div > div > div.col.m3.s7.no-pad > a.btnMenuToggle.sidenav-trigger.show-on-large > i').click({force:true});
    cy.get('#slide-out > li:nth-child(5) > ul > li > ul > li:nth-child(10) > a').click({force:true});
    cy.wait(1000);

})




})