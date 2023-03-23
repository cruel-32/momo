import { act, fireEvent, screen } from '@testing-library/react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { describe, expect, it, vi } from 'vitest';

import Test from '@/components/Test';
import currentUserState from '@/stores/users';
import { render } from '@/tests/render';

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

    act(() => render(<Test {...props} />));

    fireEvent.change(screen.getByTestId('currentUserName'), {
      target: { value: 'user@test.com' },
    });

    // const value = useRecoilValue(currentUserState);

    expect(props.onChange).toHaveBeenCalled();
    expect(screen.getByTestId('target').innerHTML).toBe('user@test.com');
  });
});
