import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import global_es from './translations/es/global_es.json';
import global_en from './translations/en/global_en.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      translation: global_es
    },
    en: {
      translation: global_en
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
