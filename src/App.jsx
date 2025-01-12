import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  function getActiveTab(tabId) {
    if (tabs.some(tab => tab.id === tabId.id)) {
      setSelectedTab(tabId.id);
    } else {
      setSelectedTab(tabs[0].id);
    }
  }

  const activeTab = tabs.find(tab => tab.id === selectedTab)
  || tabs[0];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${activeTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={(tabId) => {
          getActiveTab(tabId);
        }}
        activeTab={activeTab}
      />
    </div>
  );
};
