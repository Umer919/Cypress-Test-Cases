/// <reference types="Cypress" />
describe('My Shops', function(){
    it('login in with correct credentials', function(){
        cy.visit('https://www.howmuch.pk/');
        cy.get('#nav-mobile > li:nth-child(1) > a').click();
        cy.get('#spree_user_email').click({force: true}).type('umer.ziyad@arkhitech.com');
        cy.get('#spree_user_password').click({force: true}).type('arkhitech');
        cy.get('#new_spree_user > div:nth-child(5) > div > button').click({force: true});


    })
    it('click on menu', function(){
        cy.get('body > react-view > div > header > div > button > span.MuiIconButton-label > svg').click({force:true});
        cy.wait(1000);

    })
    it('Click on My Shops', function(){
        cy.get('body > react-view > div > div.MuiDrawer-root.MuiDrawer-docked > div > ul > div:nth-child(5) > div > div > span').click({force:true});
        cy.wait(1000);
        
    })
    
})
