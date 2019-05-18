import React from 'react';
import KATAKANA from '../data/KATAKANA';
import convertToRomaji from '../functions/convertToRomaji';
import convertToKana from '../functions/convertToKana';

class AppOutput extends React.Component {
  /*renderList() {
    return katakana.map((kana) => {
      return(
        <div>{kana.roumaji} : "{kana.kana}",</div>
      );
    });
  }*/

  render() {
    let outputRomaji = convertToRomaji(this.props.currentText);
    let outputKatakana = convertToKana(outputRomaji, KATAKANA);

    return (
      <div>
        <div>Katakana: <span>{outputKatakana.join('')}</span></div>
        <div>Romaji: <span>{outputRomaji.join('')}</span></div>
      </div>
    );
  }
};

export default AppOutput;
