/**
*
* TextCell
*
*/

import React from 'react';
import {FormattedMessage} from 'react-intl';

import styles from './styles.css';

function TextCell(props) {
  const { data } = props;
  const className = props.className ? props.className : styles.text;
  return (
    <div className={styles.textCell}>
      <div className={className}>
        <FormattedMessage
          id="text"
          defaultMessage={data}
        />
      </div>
    </div>
  );
}

TextCell.propTypes = {
  data: React.PropTypes.string,
  className: React.PropTypes.string,
};

TextCell.defaultProps = {
  data: 'Mainstream action, advanture, comedy with high speed and mixed colors',
  className: styles.text,
};

export default TextCell;
