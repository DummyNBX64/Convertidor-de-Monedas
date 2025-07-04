const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const result = document.getElementById('result');
const convertBtn = document.getElementById('convertBtn');
const toggleTheme = document.getElementById('toggleTheme');

// Lista de monedas disponibles
const currencies = ['USD', 'EUR', 'MXN', 'GBP', 'JPY'];

// Llenar selects dinámicamente
currencies.forEach(currency => {
  const optionFrom = document.createElement('option');
  const optionTo = document.createElement('option');

  optionFrom.value = optionFrom.text = currency;
  optionTo.value = optionTo.text = currency;

  fromCurrency.appendChild(optionFrom);
  toCurrency.appendChild(optionTo);
});

// Coloca una combinación por defecto, pero el usuario puede cambiarla
fromCurrency.value = 'USD';
toCurrency.value = 'MXN'; 

convertBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount) || amount <= 0) {
    alert('Ingresa una cantidad válida.');
    return;
  }

  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (from === to) {
    result.textContent = 'Las monedas seleccionadas son iguales.';
    return;
  }

  const url = `https://api.exchangerate.host/convert?access_key=9d0f817fa00e0521ba06baa1d704f1a4&from=${from}&to=${to}&amount=${amount}`;
  console.log('URL:', url);

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.success === false) {
        result.textContent = 'Error: clave de API faltante o URL incorrecta.';
        return;
      }

      const converted = data.result?.toFixed(2);
      result.textContent = `${amount} ${from} = ${converted} ${to}`;

      // Guardar historial en localStorage
      const record = {
        amount,
        from,
        to,
        converted,
        date: new Date().toLocaleString()
      };

      let history = JSON.parse(localStorage.getItem('conversionHistory')) || [];
      history.push(record);
      localStorage.setItem('conversionHistory', JSON.stringify(history));
      console.log('Historial:', history);
    })
    .catch(err => {
      console.error(err);
      result.textContent = 'Error al obtener datos.';
    });
});

// Modo oscuro
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
