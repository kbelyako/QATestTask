/// <reference types="Cypress" />

var model,price;
var nbsp = String.fromCharCode(160);


context('Test_task_tests', () => {
        beforeEach(() => {
        cy.visit('https://shop.beeline.kz/');
        cy.url().should('include', 'https://shop.beeline.kz/');
        cy.contains('Смартфоны').click({ force: true });
        cy.url().should('include', '/smartphones');
    })

    it('Test case 1', () => {
        //Cheking checkbox от 50 000 до 100 000 
        var priceRange = '#collapseprice > div > div > div:nth-child(2)'
        cy.get(priceRange).click();
        //Cheking checkbox Samsung
        cy.get('#collapsevendor > div > div > div:nth-child(1)').click();
        //Check if Samsung Galaxy A30s 32Gb Green presist
        cy.contains('Samsung Galaxy A30s 32Gb Green');
        //Check price of Samsung Black
        model = 'body > div > div.container > div > div.col-12.category > div:nth-child(3) > div.col-md-9.col-sm-12.category > div:nth-child(1) > div:nth-child(2) > div > div.card-footer > div > div:nth-child(1) > a';
       // var nbsp = String.fromCharCode(160);
         price='99' + nbsp + '890 тг';
        cy.get(model).should('include.text',price);       
    })

    it('Test case 2', () => {
        // Checking checkbox Xiaomi      
        cy.get('#collapsevendor > div > div > div:nth-child(8)').click();
        //Check that the number of models = 12 
        var numberofmodels = 'body > div:nth-child(2) > div.container > div > div.col-12.category > div:nth-child(3) > div.col-md-9.col-sm-12.category > div:nth-child(1)'
        cy.get(numberofmodels).children().should('have.length', 12)
    })

    it('Test case 3', () => {
        //Cheking checkbox дороже 500 000 тг
        var priceRange = '#collapseprice > div > div > div:nth-child(6) > label';
        cy.get(priceRange).click();
        //Check that the number of models = 12 
        var numberofmodels = 'body > div:nth-child(2) > div.container > div > div.col-12.category > div:nth-child(3) > div.col-md-9.col-sm-12.category > div:nth-child(1)'
        cy.get(numberofmodels).children().should('have.length', 12)
        //Check if Apple iPhone 11 Pro 256Gb Gold presit
        cy.contains('Apple iPhone 11 Pro 256Gb Gold');
        //Checking price of Iphone pro silver
        model = 'body > div:nth-child(2) > div.container > div > div.col-12.category > div:nth-child(3) > div.col-md-9.col-sm-12.category > div:nth-child(1) > div:nth-child(12) > div > div.card-footer > div > div:nth-child(1) > a > div:nth-child(2)';        
        price='759' + nbsp + '450 тг';
        cy.get(model).should('include.text',price);
    })


})
