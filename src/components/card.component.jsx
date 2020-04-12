import React from 'react';
import './card.styles.scss';

export const Card = props => {
  return (
    <div className="row">
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture">&nbsp;</div>
        </div>
        <div className="card__side card__side--back">
          <div className="card__cta">
            <div className="card__word-box">
              <p className="card__word">{props.word.value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
