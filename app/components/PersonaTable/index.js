/**
*
* PersonaTable
*
*/

import React from 'react';

import PersonaTableHeader from '../PersonaTableHeader';
import PersonaRow from '../PersonaRow';

import styles from './styles.css';

function PersonaTable(props) {
  const { data } = props;
  return (
    <div className={styles.personaTable}>
      <PersonaTableHeader />
      <PersonaRow className={styles.personaRow} data={data} />
      <PersonaRow className={styles.personaRow} data={data} />
      <PersonaRow className={styles.personaRow} data={data} />
      <PersonaRow className={styles.personaRow} data={data} />
    </div>
  );
}

PersonaTable.propTypes = {
  data: React.PropTypes.object,
};

export default PersonaTable;
