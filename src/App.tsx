import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ledgerLogo from 'url:../static/images/ledger_logo.svg';

import Input from './Input';
import { IAccount, INotifications, ITransactionDetails } from './Interfaces/Interfaces';
import AccountCreated from './components/AccountCreated';
import Transactions from './components/Transaction';
import FlexBox from './components/UI/atoms/FlexBox';
import Spinner from './components/UI/atoms/Spinner/Spinner';
import Header from './components/UI/atoms/layout/Header';

const API = 'http://localhost:5000';

const App: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | INotifications[]>(null);

  const fetchTransactions = (): void => {
    setLoading(true);
    // reset previous results
    setResults(null);
    fetch(`${API}/search?q=${searchText}`)
      .then(response => response.json())
      .then(response => {
        setLoading(false);
        setResults(response);
      })
      .catch(() => {
        setLoading(false);
        alert('something went wrong');
      });
  };

  useEffect(() => {
    fetchTransactions();
  }, [searchText]);

  return (
    <>
      <Header>
        <img src={ledgerLogo} alt="logo" />
      </Header>
      <Container>
        <Input value={searchText} onChange={setSearchText} placeholder="Type to filter events" />
        {searchText.length > 0 && isLoading ? (
          <Spinner />
        ) : results && results.length > 0 ? (
          <div>
            {results.map(r => (
              // TODO we must finalize this integration!! still not very pretty like this 😭
              <>
                {r.type === 'TRANSACTION_RECEIVED' ? (
                  <Transactions type="received" details={r.data as ITransactionDetails} />
                ) : r.type === 'TRANSACTION_SENT' ? (
                  <Transactions type="sent" details={r.data as ITransactionDetails} />
                ) : (
                  <AccountCreated details={r.data as IAccount} />
                )}
              </>
            ))}
          </div>
        ) : results && searchText.length > 0 && results.length === 0 ? (
          <Disclaimer>... no results found 😭</Disclaimer>
        ) : (
          <Disclaimer>Find an event using the input above</Disclaimer>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Disclaimer = styled(FlexBox).attrs({
  justifyContent: 'center',
})`
  font-size: 3em;
  color: ${({ theme }): string => theme.palette.color.white};
`;

export const Item = styled(FlexBox).attrs({
  justifyContent: 'space-start',
})`
  margin: 20px 0;
  padding: 16px;
  border: 1px solid ${({ theme }): string => theme.palette.color.white};
  color: ${({ theme }): string => theme.palette.color.white};
`;

export default App;
