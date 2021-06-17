import React from 'react';

import { Item } from '../App';
import { ITransactionDetails } from '../Interfaces/Interfaces';

export interface ITransactionComponent {
  type: 'sent' | 'received';
  details: ITransactionDetails;
}

const Transactions: React.FC<ITransactionComponent> = ({ type, details }) => {
  return (
    <Item>
      <div>{type === 'received' ? 'Received' : 'Sent'}&nbsp;</div>
      <div>
        {details.amount} {details.unit}&nbsp;
      </div>
      <div>{type === 'received' ? `from ${details.from}` : `to ${details.to}`}</div>
    </Item>
  );
};

export default Transactions;
