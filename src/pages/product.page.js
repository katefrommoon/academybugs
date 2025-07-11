import { test } from "@playwright/test";

export class ProductPage {
  constructor(page) {
    this.page = page;
    this.commentField = page.getByRole('textbox', { name: 'Comment' });
    this.nameField = page.getByRole('textbox', { name: 'Name*' });
    this.emailField = page.getByRole('textbox', { name: 'Email*' });
    this.postButton = page.getByRole('button', { name: 'Post Comment' });
    this.description = page.locator('.ec_details_description.academy-bug');
    this.colorButton = page.locator('img[title="Green"]');
    //this.plusButton = page.locator('input.ec_plus');
    this.plusButton = page.getByRole('button', { name: '+' })
    this.priceButton = page.getByRole('link', { name: '$15.00 - $19.99' })
  }
  async createComment() {
    return test.step("Написать комментарий", async () => {
      await this.commentField.click();
      await this.commentField.fill("Комментарий о товаре");
      await this.nameField.click();
      await this.nameField.fill("Pupa Lupa");
      await this.emailField.click();
      await this.emailField.fill("Pupa@lupa.com");
      await this.postButton.click();
    });
  }
  async clickDescription() {
    return test.step("Кликнуть на описание товара", async () => {
      await this.description.click();
    });
  }
  async chooseColor() {
    return test.step("Выбрать цвет товара", async () => {
      await this.colorButton.click();
    });
  }
  async increaseQuantity() {
    return test.step("Увеличить количество товара", async () => {
      await this.plusButton.click({ force: true });
    });
  }
  async filterByPrice() {
    return test.step("Увеличить количество товара", async () => {
      await this.priceButton.click({ force: true });
    });
  }
}