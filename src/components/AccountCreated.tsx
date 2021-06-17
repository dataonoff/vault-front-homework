import React from 'react';

import { Item } from '../App';
import { IAccount } from '../Interfaces/Interfaces';

export interface IAccountCreatedComponent {
  details: IAccount;
}

const AccountCreated: React.FC<IAccountCreatedComponent> = ({ details }) => {
  return (
    <Item>
      <div>{details.currency}&nbsp;</div>
      <div>{details.name} created</div>
    </Item>
  );
};

export default AccountCreated;
