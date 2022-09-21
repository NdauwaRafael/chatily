import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import "./assets/sass/main.scss";
import Pages from './pages';

const container = document.getElementById('root')!;
const root = createRoot(container);

document.title = 'Welcome | Chats App';

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Pages />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
