/**
*
* SubHeader
*
*/

import React from 'react';
import moment from 'moment';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'material-ui/DatePicker';

import styles from './styles.css';

import SubNavigation from '../SubNavigation';

class SubHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment('2015-01-01'),
      endDate: moment('2015-12-31'),
    };
  }
  render() {
    const startDate = this.state.startDate.toDate();
    const endDate = this.state.endDate.toDate();

    return (
      <div className={styles.subHeader}>
        <div className={styles.left}>
          <SubNavigation routes={this.props.routes} />
        </div>
        <div className={styles.right}>
          <span className={styles.priceModel}>Price model</span>
          <DatePicker container="inline" style={{ display: 'inline-block' }} textFieldStyle={{ width: '65px', height: '30px', lineHeight: '12px', fontSize: '12px', paddingLeft: '5px', paddingRight: '10px' }} className={styles.dateField} defaultDate={startDate} />
          <span style={{fontSize: '12px', color: '#FFF', padding: '0 10px' }}>to</span>
          <DatePicker container="inline" style={{ display: 'inline-block' }} textFieldStyle={{ width: '65px', height: '30px', lineHeight: '12px', fontSize: '12px', paddingLeft: '5px', paddingRight: '10px' }} className={styles.dateField} defaultDate={endDate} />
          {/*<DatePicker
            className={styles.dateInput}
            dateFormat="DD/MM/YYYY"
            selected={this.state.startDate}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            popoverAttachment='bottom center'
            popoverTargetAttachment='top center'
            popoverTargetOffset='10px 0px'
          />
          <DatePicker
            className={styles.dateInput}
            dateFormat="DD/MM/YYYY"
            selected={this.state.endDate}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            popoverAttachment='bottom center'
            popoverTargetAttachment='top left'
            popoverTargetOffset='10px 10px'
          />*/}
        </div>
      </div>
    );
  }
}

export default SubHeader;
