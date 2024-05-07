import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState<number>(0);
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [unit, setUnit] = useState<string>('東京ドーム');
  const [localUnit, setLocalUnit] = useState<string>('地元の図書館');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setInputValue(value);
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(e.target.value);
  };

  const handleLocalUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocalUnit(e.target.value);
  };

  const handleButtonClick = () => {
    let convertedValue = inputValue;
    switch (unit) {
      case '東京ドーム':
        convertedValue = inputValue * 46755; // 東京ドームの面積を46755m^2に設定
        break;
      default:
        break;
    }

    let localUnitValue = 0;
    switch (localUnit) {
      case '地元の図書館':
        localUnitValue = 500; // 地元の図書館の面積を500m^2と仮定
        break;
      case '地元の公園':
        localUnitValue = 10000; // 地元の公園の面積を10000m^2と仮定
        break;
      default:
        break;
    }

    const result = convertedValue / localUnitValue;
    setDisplayValue(result);
  };

  return (
    <div className="App">
      <h1>東京ドームから地元の建物への変換アプリ</h1>
      <input type="number" value={inputValue || ''} onChange={handleInputChange} />
      <select value={unit} onChange={handleUnitChange}>
        <option value="東京ドーム">東京ドーム</option>
      </select>
      <select value={localUnit} onChange={handleLocalUnitChange}>
        <option value="地元の図書館">地元の図書館</option>
        <option value="地元の公園">地元の公園</option>
      </select>
      <button onClick={handleButtonClick}>変換する</button>
      <p>入力値: {inputValue} {unit}</p>
      <p>表示値: {displayValue.toFixed(2)} {localUnit}個分</p>
    </div>
  );
}

export default App;