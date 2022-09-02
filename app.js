// https://www.omnicalculator.com/finance/net-operating-assets

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const v6 = document.getElementById('v6');
const v7 = document.getElementById('v7');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const netoperatingassetsRadio = document.getElementById('netoperatingassetsRadio');
const cashRadio = document.getElementById('cashRadio');
const accountsreceivableRadio = document.getElementById('accountsreceivableRadio');
const inventoryRadio = document.getElementById('inventoryRadio');
const prepaidexpensesRadio = document.getElementById('prepaidexpensesRadio');
const fixedassetsRadio = document.getElementById('fixedassetsRadio');
const accountspayableRadio = document.getElementById('accountspayableRadio');
const accruedoperatingexpensesRadio = document.getElementById('accruedoperatingexpensesRadio');

let netoperatingassets;
let cash = v1;
let accountsreceivable = v2;
let inventory = v3;
let prepaidexpenses = v4;
let fixedassets = v5;
let accountspayable = v6;
let accruedoperatingexpenses = v7;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');
const variable6 = document.getElementById('variable6');
const variable7 = document.getElementById('variable7');

netoperatingassetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Cash';
  variable2.textContent = 'Accounts receivable';
  variable3.textContent = 'Inventory';
  variable4.textContent = 'Prepaid expenses';
  variable5.textContent = 'Fixed assets';
  variable6.textContent = 'Accounts payable';
  variable7.textContent = 'Accrued operating expenses';
  cash = v1;
  accountsreceivable = v2;
  inventory = v3;
  prepaidexpenses = v4;
  fixedassets = v5;
  accountspayable = v6;
  accruedoperatingexpenses = v7;
  result.textContent = '';
});

cashRadio.addEventListener('click', function() {
  variable1.textContent = 'Net operating assets';
  variable2.textContent = 'Accounts receivable';
  variable3.textContent = 'Inventory';
  variable4.textContent = 'Prepaid expenses';
  variable5.textContent = 'Fixed assets';
  variable6.textContent = 'Accounts payable';
  variable7.textContent = 'Accrued operating expenses';
  netoperatingassets = v1;
  accountsreceivable = v2;
  inventory = v3;
  prepaidexpenses = v4;
  fixedassets = v5;
  accountspayable = v6;
  accruedoperatingexpenses = v7;
  result.textContent = '';
});

accountsreceivableRadio.addEventListener('click', function() {
  variable1.textContent = 'Net operating assets';
  variable2.textContent = 'Cash';
  variable3.textContent = 'Inventory';
  variable4.textContent = 'Prepaid expenses';
  variable5.textContent = 'Fixed assets';
  variable6.textContent = 'Accounts payable';
  variable7.textContent = 'Accrued operating expenses';
  netoperatingassets = v1;
  cash = v2;
  inventory = v3;
  prepaidexpenses = v4;
  fixedassets = v5;
  accountspayable = v6;
  accruedoperatingexpenses = v7;
  result.textContent = '';
});

inventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Net operating assets';
  variable2.textContent = 'Cash';
  variable3.textContent = 'Accounts receivable';
  variable4.textContent = 'Prepaid expenses';
  variable5.textContent = 'Fixed assets';
  variable6.textContent = 'Accounts payable';
  variable7.textContent = 'Accrued operating expenses';
  netoperatingassets = v1;
  cash = v2;
  accountsreceivable = v3;
  prepaidexpenses = v4;
  fixedassets = v5;
  accountspayable = v6;
  accruedoperatingexpenses = v7;
  result.textContent = '';
});

prepaidexpensesRadio.addEventListener('click', function() {
  variable1.textContent = 'Net operating assets';
  variable2.textContent = 'Cash';
  variable3.textContent = 'Accounts receivable';
  variable4.textContent = 'Inventory';
  variable5.textContent = 'Fixed assets';
  variable6.textContent = 'Accounts payable';
  variable7.textContent = 'Accrued operating expenses';
  netoperatingassets = v1;
  cash = v2;
  accountsreceivable = v3;
  inventory = v4;
  fixedassets = v5;
  accountspayable = v6;
  accruedoperatingexpenses = v7;
  result.textContent = '';
});

fixedassetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Net operating assets';
  variable2.textContent = 'Cash';
  variable3.textContent = 'Accounts receivable';
  variable4.textContent = 'Inventory';
  variable5.textContent = 'Prepaid expenses';
  variable6.textContent = 'Accounts payable';
  variable7.textContent = 'Accrued operating expenses';
  netoperatingassets = v1;
  cash = v2;
  accountsreceivable = v3;
  inventory = v4;
  prepaidexpenses = v5;
  accountspayable = v6;
  accruedoperatingexpenses = v7;
  result.textContent = '';
});

accountspayableRadio.addEventListener('click', function() {
  variable1.textContent = 'Net operating assets';
  variable2.textContent = 'Cash';
  variable3.textContent = 'Accounts receivable';
  variable4.textContent = 'Inventory';
  variable5.textContent = 'Fixed assets';
  variable6.textContent = 'Accounts payable';
  variable7.textContent = 'Accrued operating expenses';
  netoperatingassets = v1;
  cash = v2;
  accountsreceivable = v3;
  inventory = v4;
  fixedassets = v5;
  prepaidexpenses = v6;
  accruedoperatingexpenses = v7;
  result.textContent = '';
});

accruedoperatingexpensesRadio.addEventListener('click', function() {
  variable1.textContent = 'Net operating assets';
  variable2.textContent = 'Cash';
  variable3.textContent = 'Accounts receivable';
  variable4.textContent = 'Inventory';
  variable5.textContent = 'Prepaid expenses';
  variable6.textContent = 'Accounts payable';
  variable7.textContent = 'Accrued operating expenses';
  netoperatingassets = v1;
  cash = v2;
  accountsreceivable = v3;
  inventory = v4;
  fixedassets = v5;
  prepaidexpenses = v6;
  accountspayable = v7;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(netoperatingassetsRadio.checked)
    result.textContent = `Net operating assets = ${computenetoperatingassets().toFixed(2)}`;

  else if(cashRadio.checked)
    result.textContent = `Cash = ${computecash().toFixed(2)}`;

  else if(accountsreceivableRadio.checked)
    result.textContent = `Accounts receivable = ${computeaccountsreceivable().toFixed(2)}`;

  else if(inventoryRadio.checked)
    result.textContent = `Inventory = ${computeinventory().toFixed(2)}`;

  else if(prepaidexpensesRadio.checked)
    result.textContent = `Prepaid expenses = ${computeprepaidexpenses().toFixed(2)}`;

  else if(fixedassetsRadio.checked)
    result.textContent = `Fixed assets = ${computefixedassets().toFixed(2)}`;

  else if(accountspayableRadio.checked)
    result.textContent = `Accounts payable = ${computeaccountspayable().toFixed(2)}`;

  else if(accruedoperatingexpensesRadio.checked)
    result.textContent = `Accrued operating expenses = ${computeaccruedoperatingexpenses().toFixed(2)}`;
})

// calculation

// operating assets = cash + accounts receivable + inventory + prepaid expenses + fixed assets
// operating liabilities = accounts payable + accrued operating expenses
// NOA = operating assets - operating liabilities

function computenetoperatingassets() {
  return (Number(cash.value) + Number(accountsreceivable.value) + Number(inventory.value) + Number(prepaidexpenses.value) + Number(fixedassets.value)) - (Number(accountspayable.value) + Number(accruedoperatingexpenses.value));
}

function computecash() {
  return Number(netoperatingassets.value) + (Number(accountspayable.value) + Number(accruedoperatingexpenses.value)) - Number(accountsreceivable.value) - Number(inventory.value) - Number(prepaidexpenses.value) - Number(fixedassets.value);
}

function computeaccountsreceivable() {
  return Number(netoperatingassets.value) + (Number(accountspayable.value) + Number(accruedoperatingexpenses.value)) - Number(cash.value) - Number(inventory.value) - Number(prepaidexpenses.value) - Number(fixedassets.value);
}

function computeinventory() {
  return Number(netoperatingassets.value) + (Number(accountspayable.value) + Number(accruedoperatingexpenses.value)) - Number(cash.value) - Number(accountsreceivable.value) - Number(prepaidexpenses.value) - Number(fixedassets.value);
}

function computeprepaidexpenses() {
  return Number(netoperatingassets.value) + (Number(accountspayable.value) + Number(accruedoperatingexpenses.value)) - Number(cash.value) - Number(accountsreceivable.value) - Number(inventory.value) - Number(fixedassets.value);
}

function computefixedassets() {
  return Number(netoperatingassets.value) + (Number(accountspayable.value) + Number(accruedoperatingexpenses.value)) - Number(cash.value) - Number(accountsreceivable.value) - Number(inventory.value) - Number(prepaidexpenses.value);
}

function computeaccountspayable() {
  return (Number(cash.value) + Number(accountsreceivable.value) + Number(inventory.value) + Number(prepaidexpenses.value) + Number(fixedassets.value)) - Number(netoperatingassets.value) - Number(accruedoperatingexpenses.value);
}

function computeaccruedoperatingexpenses() {
  return (Number(cash.value) + Number(accountsreceivable.value) + Number(inventory.value) + Number(prepaidexpenses.value) + Number(fixedassets.value)) - Number(netoperatingassets.value) - Number(accountspayable.value);
}