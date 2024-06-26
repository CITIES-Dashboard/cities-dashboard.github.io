import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import { GoogleProvider } from './ContextProviders/GoogleContext';
import { LinkProvider } from './ContextProviders/LinkContext';
import { HomePageProvider } from './ContextProviders/HomePageContext';
import { CommentCountsProvider } from './ContextProviders/CommentCountsContext';
import { TabProvider } from './ContextProviders/TabContext';
import { RawDatasetsMetadataProvider } from './ContextProviders/RawDatasetsMetadataContext';
import { PreferenceProvider } from './ContextProviders/PreferenceContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GoogleProvider>
      <HomePageProvider>
        <CommentCountsProvider>
          <RawDatasetsMetadataProvider>
            <LinkProvider>
              <TabProvider>
                <PreferenceProvider>
                  <App />
                </PreferenceProvider>
              </TabProvider>
            </LinkProvider>
          </RawDatasetsMetadataProvider>
        </CommentCountsProvider>
      </HomePageProvider>
    </GoogleProvider>
  </React.StrictMode>
);
