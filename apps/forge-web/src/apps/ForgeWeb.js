import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import { useAsync, useLocalStorage } from 'react-use';

import Layout from '../layouts/dashboard';

import PageDashboard from '../pages/dashboard';
import PageStatus from '../pages/node/status';
import PageQuery from '../pages/node/query';
import PageStorage from '../pages/node/storage';
import PageDeveloper from '../pages/developer';
import PageApplication from '../pages/app';
import PageTasks from '../pages/tasks';
import PageSettings from '../pages/settings';
import PageBlockList from '../pages/explorer/blocks';
import PageBlockDetail from '../pages/explorer/block';
import PageTxList from '../pages/explorer/txs';
import PageTxDetail from '../pages/explorer/tx';
import PageAccountDetail from '../pages/explorer/account';
import PageAssetDetail from '../pages/explorer/asset';
import ActivityIndicator from '../components/activity_indicator';

import { localeData } from '../libs/locale';
import { detectLocale, delay } from '../libs/util';
import forge from '../libs/forge';

addLocaleData(localeData);

const { locale, messages } = detectLocale();

async function fetchInfo() {
  try {
    const { state } = await forge.getForgeState();
    await delay(1600);
    return { token: state.token };
  } catch (err) {
    console.error(err.errors);
    throw new Error(
      Array.isArray(err.errors)
        ? err.errors.map(x => x.message).join(',')
        : err.message || err.toString()
    );
  }
}

const App = () => {
  const [, setToken] = useLocalStorage('token', {});
  const state = useAsync(fetchInfo);

  if (state.loading) {
    return (
      <Wrapper>
        <ActivityIndicator
          messages={['Fetch chain info...', 'Fetching forge state...']}
          interval={800}
        />
      </Wrapper>
    );
  }

  if (state.error) {
    return (
      <Wrapper>
        <p className="error">{state.error.message}</p>
      </Wrapper>
    );
  }

  if (state.value.token) {
    // HACK: we must add a timeout here
    setTimeout(() => setToken(state.value.token), 0);
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/dashboard" component={PageDashboard} />
            <Route exact path="/app" component={PageApplication} />
            <Route exact path="/node/explorer/blocks" component={PageBlockList} />
            <Route exact path="/node/explorer/txs" component={PageTxList} />
            <Route exact path="/node/explorer/blocks/:height" component={PageBlockDetail} />
            <Route exact path="/node/explorer/txs/:hash" component={PageTxDetail} />
            <Route exact path="/node/explorer/accounts/:address" component={PageAccountDetail} />
            <Route exact path="/node/explorer/assets/:address" component={PageAssetDetail} />
            <Route exact path="/node/status" component={PageStatus} />
            <Route exact path="/node/storage" component={PageStorage} />
            <Route exact path="/node/query" component={PageQuery} />
            <Route exact path="/developer" component={PageDeveloper} />
            <Route exact path="/tasks" component={PageTasks} />
            <Route exact path="/settings" component={PageSettings} />
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Layout>
      </Router>
    </IntlProvider>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333333;
`;

export default App;