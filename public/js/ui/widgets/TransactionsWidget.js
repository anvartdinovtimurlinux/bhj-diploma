'use strict';
/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */
class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if (!element) {
      throw new Error('Ошибка! Не передали элемент');
    }
    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const buttonNewIncome = this.element.querySelector('.create-income-button');
    const buttonNewExpense = this.element.querySelector('.create-expense-button');

    buttonNewIncome.addEventListener('click', event => {
      event.preventDefault();
      App.getModal('newIncome').open();
    });

    buttonNewExpense.addEventListener('click', event => {
      event.preventDefault();
      App.getModal('newExpense').open();
    });
  }
}
