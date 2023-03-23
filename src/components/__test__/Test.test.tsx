import { fireEvent, render, screen } from '@testing-library/react';
import Recoil from 'recoil';
import { describe, expect, it, vi } from 'vitest';

import Test from '@/components/Test';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });

  it('리액트 렌더링 테스트', async () => {
    const props = {
      onChange: vi.fn(),
    };

    const component = render(
      <Recoil.RecoilRoot>
        <Test {...props} />
      </Recoil.RecoilRoot>,
    );

    fireEvent.change(component.getByTestId('currentUserName'), {
      target: { value: 'user@test.com' },
    });

    expect(props.onChange).toHaveBeenCalled();
    expect(screen.getByTestId('target').innerHTML).toBe('user@test.com');
  });
});
