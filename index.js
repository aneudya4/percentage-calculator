const billAmout = document.querySelector('input#amount');
const tipPercentage = document.querySelector('input#tip');
const totalTip = document.querySelector('input#total-tip');
const totalBill = document.querySelector('input#total-bill');
const btn = document.querySelector('form button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal button');
const addTips = () => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (parseFloat(tipPercentage.value) > 100) {
      modal.classList.add('show-modal');
      billAmout.value = '';
      tipPercentage.value = '';
    } else if (!billAmout.value) {
      //   return;
      console.log('mmg');
    } else {
      const calculatedPercentage =
        (parseFloat(tipPercentage.value) / 100) * parseFloat(billAmout.value);
      totalTip.value = `$${calculatedPercentage}`;
      totalBill.value = `$${(
        parseFloat(billAmout.value) + calculatedPercentage
      ).toFixed(2)}`;
    }
  });
};

const hideModal = () => {
  closeModal.addEventListener('click', (e) => {
    modal.classList.remove('show-modal');
  });
};

const runApp = () => {
  addTips();
  hideModal();
};

window.addEventListener('DOMContentLoaded', (event) => {
  runApp();
});
