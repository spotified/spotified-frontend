import React from 'react';
import { Header } from './components/Header';

export const Shell = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);
