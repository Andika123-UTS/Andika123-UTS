// Ambil elemen dari DOM
const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const celsiusOutput = document.getElementById('celsius-output');
const fahrenheitOutput = document.getElementById('fahrenheit-output');
const kelvinOutput = document.getElementById('kelvin-output');
const saveButton = document.getElementById('save-button');
const historyList = document.getElementById('history-list');

// Fungsi untuk mengonversi suhu
function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  if (isNaN(temperature)) {
    celsiusOutput.textContent = '-';
    fahrenheitOutput.textContent = '-';
    kelvinOutput.textContent = '-';
    return;
  }

  let celsius, fahrenheit, kelvin;

  // Konversi berdasarkan satuan yang dipilih
  if (unit === 'Celsius') {
    celsius = temperature;
    fahrenheit = (temperature * 9/5) + 32;
    kelvin = temperature + 273.15;
  } else if (unit === 'Fahrenheit') {
    celsius = (temperature - 32) * 5/9;
    fahrenheit = temperature;
    kelvin = celsius + 273.15;
  } else if (unit === 'Kelvin') {
    celsius = temperature - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
    kelvin = temperature;
  }

  // Tampilkan hasil konversi
  celsiusOutput.textContent = `${celsius.toFixed(2)} °C`;
  fahrenheitOutput.textContent = `${fahrenheit.toFixed(2)} °F`;
  kelvinOutput.textContent = `${kelvin.toFixed(2)} K`;

  // Tambahkan kelas show untuk animasi
  document.querySelectorAll('.result-card').forEach(card => {
    card.classList.add('show');
  });
}

// Fungsi untuk menyimpan hasil konversi ke riwayat
function saveToHistory() {
  const temperature = temperatureInput.value;
  const unit = unitSelect.value;
  
  if (temperature === '' || isNaN(parseFloat(temperature))) {
    alert('Masukkan suhu yang valid sebelum menyimpan.');
    return;
  }

  const celsius = celsiusOutput.textContent;
  const fahrenheit = fahrenheitOutput.textContent;
  const kelvin = kelvinOutput.textContent;

  // Buat elemen list untuk riwayat konversi
  const historyItem = document.createElement('li');
  historyItem.textContent = `${temperature} ${unit} = ${celsius}, ${fahrenheit}, ${kelvin}`;
  
  // Tambahkan item ke riwayat dan animasi masuk
  historyList.appendChild(historyItem);
  setTimeout(() => historyItem.classList.add('show'), 10);
}

// Event listener untuk input suhu dan pilihan satuan
temperatureInput.addEventListener('input', convertTemperature);
unitSelect.addEventListener('change', convertTemperature);

// Event listener untuk tombol simpan ke riwayat
saveButton.addEventListener('click', saveToHistory);
    