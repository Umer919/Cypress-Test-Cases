/// <reference types="Cypress" />
describe('Orders Menu', function(){
    it('login in with correct credentials', function(){
        cy.visit('https://www.howmuch.pk/');
        cy.get('#nav-mobile > li:nth-child(1) > a').click();
        cy.get('#spree_user_email').click({force: true}).type('umer.ziyad@arkhitech.com');
        cy.get('#spree_user_password').click({force: true}).type('arkhitech');
        cy.get('#new_spree_user > div:nth-child(5) > div > button').click({force: true});
    })
    
    it('Instant Order', function(){
        cy.get('body > react-view > div > div:nth-child(3) > div > section.content-header > div > div > ul > li:nth-child(1) > button > span.MuiButton-label').click({force:true});
        cy.get('#simple-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation8.MuiPaper-rounded > ul > li:nth-child(2)').click({force:true});
        cy.get('#free-solo-demo').click({force:true}).type('Nestle Nido');
        cy.get('body').click({force:true});
        cy.wait(1000);
        cy.get('body > react-view > div > div:nth-child(3) > div > section.content.col.s12 > div > div:nth-child(1) > div > div.box-footer.clearfix.orderstatus > div.customer-details > div.row > div > div > div > div:nth-child(1) > input').click({force:true}).clear().type('Umer Ziyad');
        cy.wait(1000);
        cy.get('body > react-view > div > div:nth-child(3) > div > section.content.col.s12 > div > div:nth-child(1) > div > div.box-footer.clearfix.orderstatus > div.customer-details > div.row > div > div > div > div:nth-child(2) > input').click({force:true}).clear().type('03325315797');
        cy.wait(1000);
        cy.get('body > react-view > div > div:nth-child(3) > div > section.content.col.s12 > div > div:nth-child(1) > div:nth-child(4) > div.box-footer.clearfix.orderstatus > div:nth-child(5) > div > button > b').click();
        cy.wait(1000);

        



    })




})

