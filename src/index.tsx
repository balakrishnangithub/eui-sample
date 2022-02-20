import '@elastic/charts/dist/theme_light.css';
import { EuiHorizontalRule, EuiProvider, EuiSpacer } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { DemoEuiComboBox } from './demo-EuiComboBox';
import { DemoEuiDataGrid } from './demo-EuiDataGrid';
import { DemoEuiPieChart } from './demo-EuiPieChart';
import { DemoEuiSuperDatePicker } from './demo-EuiSuperDatePicker';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <EuiProvider colorMode="light">
    <EuiSpacer />
    <DemoEuiSuperDatePicker />
    <EuiHorizontalRule />

    <EuiSpacer />
    <DemoEuiComboBox />
    <EuiHorizontalRule />

    <EuiSpacer />
    <DemoEuiDataGrid />
    <EuiHorizontalRule />

    <EuiSpacer />
    <DemoEuiPieChart />
    <EuiHorizontalRule />
  </EuiProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
