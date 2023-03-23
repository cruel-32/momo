import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { RecoilRoot } from 'recoil';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
