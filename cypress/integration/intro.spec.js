/* eslint-disable no-undef */
///<reference types="Cypress" />

const { url } = require("inspector");

describe("Test rendering of intro",() =>{
    it("Should be able to submit a successful submission via contact-us form", ()=>{
        cy.visit("http://localhost:3000/")
        cy.get('.intro > h1').should('have.text', 'Scan your ID')
        cy.get('.intro > p').should('contain','Take a picture')
        cy.get('.idDiv > a > button').should('have.text','TAKE PICTURE')
        cy.get('.idDiv > a > button').click()
        cy.url().should('contain', 'camera')
        cy.get('a > p ').should('have.text','BankClient').click()
        cy.visit("http://localhost:3000/")
        cy.url().should('not.include', 'Approved').should('not.include', 'Camera').should('not.include', 'TryAgain')
    });
})