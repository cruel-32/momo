import { fireEvent, screen } from '@testing-library/react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { describe, expect, it, vi } from 'vitest';

import Test from '@/components/Test';
import currentUserState from '@/stores/users';
import { render } from '@/tests/render';

describe('something truthy and falsy', () => {
  const props = {
    onChange: vi.fn(),
  };

  it('리액트 렌더링 테스트', async () => {
    const { container } = render(<Test {...props} />);
    const el = container.querySelector('[name=currentUserName]');
    expect(el).not.toBeNull();
  });

  it('동작 테스트', () => {
    const { container } = render(<Test {...props} />);
    const el = container.querySelector('[name=currentUserName]');
    if (el !== null) {
      fireEvent.change(el, {
        target: { value: 'user@test.com' },
      });
    }
    expect(props.onChange).toHaveBeenCalled();
    // recoil 상태값을 어떻게 테스트 할 것인가
    expect(screen.getByTestId('target').innerHTML).toBe('user@test.com');
  });
});
