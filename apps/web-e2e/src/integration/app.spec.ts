/* eslint-disable @typescript-eslint/no-var-requires */
import { getGreeting } from '../support/app.po';
import * as dayjs from 'dayjs';
const advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

describe('web', () => {
  const timestamp = dayjs().format('x');

  const taskTitle = `This is Task Title - ${timestamp}`;

  const taskTitleEdited = taskTitle + ' - edited';

  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Система учета преподавателей');
  });

  it('create task ', () => {
    cy.get('button[id="add-task-button"]').click();

    cy.get('form[id="form-modal"]');

    cy.get('input[name="title"]');

    cy.get('span[id="reqired-title"]').should('not.exist');

    cy.get('input[name="dueDate"]');

    cy.get('span[id="reqired-due-date"]').should('not.exist');

    cy.get('button[id="form-modal-submit-button"]').click();

    cy.get('span[id="reqired-title"]');

    cy.get('span[id="reqired-due-date"]');

    cy.get('input[name="title"]').type(taskTitle);

    cy.get('span[id="reqired-title"]').should('not.exist');

    cy.get('input[name="dueDate"]').type('2020-12-31');

    cy.get('span[id="reqired-due-date"]').should('not.exist');

    cy.get('button[id="form-modal-submit-button"]').click();

    cy.get('form[id="form-modal"]').should('not.exist');

    cy.get('p[id="task-title"]').contains(taskTitle);
  });

  it('checked', () => {
    cy.get(`li[id="${taskTitle}"]`)
      .children('#checked-icon')
      .should('not.exist');

    cy.get(`li[id="${taskTitle}"]`).children().get('#delete-button');
    cy.get(`li[id="${taskTitle}"]`).children().get('#check-button').click();

    cy.get(`li[id="${taskTitle}"]`)
      .children('#delete-button')
      .should('not.exist');
    cy.get(`li[id="${taskTitle}"]`)
      .children('#check-button')
      .should('not.exist');

    cy.get(`li[id="${taskTitle}"]`).children().get('#checked-icon');
  });

  it('undo', () => {
    cy.get(`li[id="${taskTitle}"]`).children().get('#checked-icon');
    cy.get(`li[id="${taskTitle}"]`)
      .children('#delete-button')
      .should('not.exist');
    cy.get(`li[id="${taskTitle}"]`)
      .children('#check-button')
      .should('not.exist');

    cy.get('form[id="form-modal"]').should('not.exist');
    cy.get(`li[id="${taskTitle}"]`).click();

    cy.get('form[id="form-modal"]');

    cy.get('#undo-task').click();

    cy.get('form[id="form-modal"]').should('not.exist');

    cy.get(`li[id="${taskTitle}"]`).children().get('#delete-button');
    cy.get(`li[id="${taskTitle}"]`).children().get('#check-button');
    cy.get(`li[id="${taskTitle}"]`)
      .children('#checked-icon')
      .should('not.exist');
  });

  it('edit', () => {
    cy.get('form[id="form-modal"]').should('not.exist');
    cy.get(`li[id="${taskTitle}"]`).click();

    cy.get('form[id="form-modal"]');

    cy.get('input[name="title"]').type(' - edited');

    cy.get('#form-modal-submit-button').click();

    cy.get('form[id="form-modal"]').should('not.exist');

    cy.get(`li[id="${taskTitle}"]`).should('not.exist');
    cy.get(`li[id="${taskTitleEdited}"]`);
  });

  it('delete', () => {
    cy.get(`li[id="${taskTitleEdited}"]`);

    cy.get(`li[id="${taskTitleEdited}"]`)
      .children()
      .get('#delete-button')
      .click();

    cy.get(`li[id="${taskTitleEdited}"]`).should('not.exist');
  });
});
