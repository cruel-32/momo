import { act, fireEvent, renderHook, screen } from '@testing-library/react';
import { RecoilRoot, snapshot_UNSTABLE, useRecoilValue } from 'recoil';
import { describe, expect, it, vi } from 'vitest';

import Test from '@/components/Test';
import currentUserState from '@/stores/users';
import { RecoilObserver } from '@/tests/RecoilObserver';
import { render } from '@/tests/render';

describe('something truthy and falsy', () => {
  const initialSnapshot = snapshot_UNSTABLE();

  const props = {
    onChange: vi.fn(),
  };

  it('리액트 렌더링 테스트', async () => {
    const { container } = render(<Test {...props} />);
    const el = container.querySelector('[name=currentUserName]');
    expect(el).not.toBeNull();
  });

  it('동작 테스트', () => {
    const onChange = vi.fn();
    const { container } = render(
      <>
        <RecoilObserver node={currentUserState} onChange={onChange} />
        <Test {...props} />
      </>,
    );
    const el = container.querySelector('[name=currentUserName]');
    if (el !== null) {
      fireEvent.change(el, {
        target: { value: 'user@test.com' },
      });
    }
    expect(props.onChange).toHaveBeenCalled();
    // recoil 상태값을 어떻게 테스트 할 것인가
    expect(screen.getByTestId('target').innerHTML).toBe('user@test.com');

    // 스냅샷은 된다...
    expect(initialSnapshot.getLoadable(currentUserState).valueOrThrow()).toBe('testing');

    expect(onChange).toHaveBeenCalledTimes(2); // 디폴트값 셋팅 한번, event로 ㅂ셋팅 한번
    expect(onChange).toHaveBeenCalledWith('testing');
    expect(onChange).toHaveBeenCalledWith('user@test.com');
  });

  it('hook 테스트', () => {
    const testSnapshot = snapshot_UNSTABLE(({ set }) =>
      set(currentUserState, 'outside of React'),
    );

    expect(testSnapshot.getLoadable(currentUserState).valueOrThrow()).toBe(
      'outside of React',
    );
  });
});
