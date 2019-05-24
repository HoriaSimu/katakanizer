import React from 'react';
import KATAKANA from '../data/KATAKANA';
import convertToRomaji from '../functions/convertToRomaji';
import convertToKana from '../functions/convertToKana';
import './AppOutput.css';

class AppOutput extends React.Component {
  render() {
    let outputRomaji = convertToRomaji(this.props.currentText);
    let outputKatakana = convertToKana(outputRomaji, KATAKANA);

    return (
      <div>
        <div className="katakana">{outputKatakana.join('')}</div>
        <div className="romaji">{outputRomaji.join('')}</div>
      </div>
    );
  }
};

export default AppOutput;
