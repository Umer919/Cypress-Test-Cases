

/// <reference types="Cypress" />


describe('click on annoucement button', function(){

    it('sign in', function(){
        cy.visit('https://www.howmuch.pk/');
        cy.get('#nav-mobile > li:nth-child(1) > a').click();
        cy.get('#spree_user_email').click({force: true}).type('umer.ziyad@arkhitech.com');
        cy.get('#spree_user_password').click({force: true}).type('arkhitech');
        cy.get('#new_spree_user > div:nth-child(5) > div > button').click({force: true});
    })

    it('click on options menu', function(){
        cy.get('body > react-view > div > header > div > button > span.MuiIconButton-label > svg > path').click()


    })
    it('Announcement', function(){

        cy.visit('https://www.howmuch.pk/');
        cy.get('#nav-mobile > li:nth-child(1) > a').click();
        cy.get('#spree_user_email').click({force: true}).type('umer.ziyad@arkhitech.com');
        cy.get('#spree_user_password').click({force: true}).type('arkhitech');
        cy.get('#new_spree_user > div:nth-child(5) > div > button').click({force: true}); 
        cy.get('body > react-view > div > header > div > button > span.MuiIconButton-label > svg > path').click({force: true});
        cy.wait(10000);
        cy.get('body > react-view > div > div.MuiDrawer-root.MuiDrawer-docked > div > ul > li:nth-child(6) > a').click({force: true});
        cy.visit('https://www.howmuch.pk/shop_admin/announcements');
    })
   it('filter', function(){
    cy.wait(100000);

        cy.get('#content > div.filter-wrap.row.collapsed > div > div.input-group.index-filter-button > span > button').click({force: true});
        cy.wait(1000);
    })
    
    it('Message', function(){

        cy.get('//*[@id="q_message_cont"]').click({force: true});
        cy.wait(1000);

    })
    it('Status', function(){
        cy.get('//*[@id="q_status_cont"]').click({force: true});
        cy.wait(1000);
    })
    it('Filter Results', function(){
        cy.get('//*[@id="spree/announcement_search"]/div[2]/button').click({force: true});
        cy.wait(1000);
    })

})