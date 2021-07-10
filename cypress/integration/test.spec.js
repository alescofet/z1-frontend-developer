/* eslint-disable no-undef */
///<reference types="Cypress" />
const { url } = require("inspector");
const approved = { summary: { outcome: "Approved" } };
const rejected = { summary: { outcome: "Too Much Glare" } };

describe("Test rendering of intro", () => {
  it("Should render intro component and button must lead to camera", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".intro > h1").should("have.text", "Scan your ID");
    cy.get(".intro > p").should("contain", "Take a picture");
    cy.get(".idDiv > a > button").should("have.text", "TAKE PICTURE");
    cy.get(".idDiv > a > button").click();
    cy.url().should("contain", "camera");
  });
});
describe("Test rendering of camera", () => {
  it("Should render the camera component", () => {
    cy.visit("http://localhost:3000/camera");
    cy.get("h1").should("have.text", "Take picture");
    cy.get(".text").should("contain", "Fit your ID card inside the frame.");
    cy.get(".objective").should('exist')
    cy.get('.cameraContainer > a').should('have.text','CANCEL')
  });
});
describe("Test Scanner for Accepted results", () => {
  it("Border should be green if the ID is accepted", () => {
    cy.intercept(
      "post",
      "https://front-exercise.z1.digital/evaluations",
      approved
    ).as("catch");
    cy.visit("http://localhost:3000/camera");
    cy.get(".objective").click();
    cy.wait("@catch");
    cy.get(".objective").should(
      "have.css",
      "border",
      "2px solid rgb(105, 204, 139)"
    );
    cy.get(".Id").should("be.visible");
    cy.get(".objective").click();
    cy.url().should("contain", "Approved");
  });
  it("If cancel is pressed the accepted photo must be saved", () => {
    cy.intercept(
      "post",
      "https://front-exercise.z1.digital/evaluations",
      approved
    ).as("catch");
    cy.visit("http://localhost:3000/camera");
    cy.get(".objective").click();
    cy.wait("@catch");
    cy.get(".objective").should(
      "have.css",
      "border",
      "2px solid rgb(105, 204, 139)"
    );
    cy.get(".Id").should("be.visible");
    cy.get('.cameraContainer > [href="/"]')
      .should("have.text", "CANCEL")
      .click();
    cy.url()
      .should("not.include", "Approved")
      .should("not.include", "Camera")
      .should("not.include", "TryAgain");
    cy.get(".approvedId").should("exist");
  });
  it("If BankClient button is pressed the accepted photo must be saved", () => {
    cy.intercept(
      "post",
      "https://front-exercise.z1.digital/evaluations",
      approved
    ).as("catch");
    cy.visit("http://localhost:3000/camera");
    cy.get(".objective").click();
    cy.wait("@catch");
    cy.get(".objective").should(
      "have.css",
      "border",
      "2px solid rgb(105, 204, 139)"
    );
    cy.get(".Id").should("be.visible");
    cy.get("a > p").should("have.text", "BankClient").click();
    cy.url()
      .should("not.include", "Approved")
      .should("not.include", "Camera")
      .should("not.include", "TryAgain");
    cy.get(".approvedId").should("exist");
  });
});

describe("Test Scanner for Rejected results", () => {
  it("Border should be red if the ID is rejected", () => {
    cy.intercept(
      "post",
      "https://front-exercise.z1.digital/evaluations",
      rejected
    ).as("catch");
    cy.visit("http://localhost:3000/camera");
    cy.get(".objective").click();
    cy.wait("@catch");
    cy.get(".objective").should(
      "have.css",
      "border",
      "2px solid rgb(192, 0, 0)"
    );
    cy.get(".Id").should("be.visible");
    cy.get(".objective").click();
    cy.url().should("contain", "TryAgain");
  });

  it("If cancel is pressed the rejected photo must be saved", () => {
    cy.intercept(
      "post",
      "https://front-exercise.z1.digital/evaluations",
      rejected
    ).as("catch");
    cy.visit("http://localhost:3000/camera");
    cy.get(".objective").click();
    cy.wait("@catch");
    cy.get(".objective").should(
      "have.css",
      "border",
      "2px solid rgb(192, 0, 0)"
    );
    cy.get(".Id").should("be.visible");
    cy.get('.cameraContainer > [href="/"]')
      .should("have.text", "CANCEL")
      .click();
    cy.url()
      .should("not.include", "Approved")
      .should("not.include", "Camera")
      .should("not.include", "TryAgain");
    cy.get(".rejectedId").should("exist");
  });
  it("If BankClient button is pressed the rejected photo must be saved", () => {
    cy.intercept(
      "post",
      "https://front-exercise.z1.digital/evaluations",
      rejected
    ).as("catch");
    cy.visit("http://localhost:3000/camera");
    cy.get(".objective").click();
    cy.wait("@catch");
    cy.get(".objective").should(
      "have.css",
      "border",
      "2px solid rgb(192, 0, 0)"
    );
    cy.get(".Id").should("be.visible");
    cy.get("a > p").should("have.text", "BankClient").click();
    cy.url()
      .should("not.include", "Approved")
      .should("not.include", "Camera")
      .should("not.include", "TryAgain");
    cy.get(".rejectedId").should("exist");
  });
  it("Retake picture button should erase the existing rejected photo", () => {
    cy.intercept(
      "post",
      "https://front-exercise.z1.digital/evaluations",
      rejected
    ).as("catch");
    cy.visit("http://localhost:3000/camera");
    cy.get(".objective").click();
    cy.wait("@catch");
    cy.get(".objective").should(
      "have.css",
      "border",
      "2px solid rgb(192, 0, 0)"
    );
    cy.get(".Id").should("be.visible");
    cy.get("a > p").should("have.text", "BankClient").click();
    cy.url()
      .should("not.include", "Approved")
      .should("not.include", "Camera")
      .should("not.include", "TryAgain");
    cy.get(".rejectedId").should("exist");
    cy.get(".rejectedButton").click();
    cy.url().should("include", "camera");
    cy.get(".Id").should("not.exist");
  });
  it("If erased rejected photo homepage must show initial id placeholder and button", () => {
    cy.intercept(
      "post",
      "https://front-exercise.z1.digital/evaluations",
      rejected
    ).as("catch");
    cy.visit("http://localhost:3000/camera");
    cy.get(".objective").click();
    cy.wait("@catch");
    cy.get(".objective").should(
      "have.css",
      "border",
      "2px solid rgb(192, 0, 0)"
    );
    cy.get(".Id").should("be.visible");
    cy.get("a > p").should("have.text", "BankClient").click();
    cy.url()
      .should("not.include", "Approved")
      .should("not.include", "Camera")
      .should("not.include", "TryAgain");
    cy.get(".rejectedId").should("exist");
    cy.get(".rejectedButton").click();
    cy.url().should("include", "camera");
    cy.get(".Id").should("not.exist");
    cy.get("a > p").should("have.text", "BankClient").click();
    cy.url()
      .should("not.include", "Approved")
      .should("not.include", "Camera")
      .should("not.include", "TryAgain");
    cy.get(".idDiv > svg").should("exist");
    cy.get("button").should("have.text", "TAKE PICTURE");
  });
});
