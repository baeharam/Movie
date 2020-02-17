import React, { useState } from 'react';
import produce from 'immer';
import { useDispatch } from 'react-redux';
import { Wrapper } from 'styles/variables';
import { aroundList } from 'utils/constants';
import { aroundActions } from 'store/modules/around';
import * as S from './AroundType.style';

const AroundType = () => {
  const [list, setList] = useState(aroundList);
  const dispatch = useDispatch();

  const onClickItem = e => {
    const { idx } = e.target.dataset;
    const { state, type } = list[idx];

    const newList = produce(list, draft => {
      let temp = null;
      if (state === 'next') {
        [temp] = draft;
        for (let i = 1; i < draft.length; i++) {
          draft[i - 1] = draft[i];
        }
        draft[list.length - 1] = temp;
      } else if (state === 'prev') {
        temp = draft[list.length - 1];
        for (let i = draft.length - 2; i >= 0; i--) {
          draft[i + 1] = draft[i];
        }
        draft[0] = temp;
      }

      for (let i = 0; i < draft.length; i++) {
        let middleIdx = Math.floor(draft.length / 2);
        if (draft.length % 2 === 0) middleIdx -= 1;
        switch (i) {
          case middleIdx:
            draft[i].state = 'cur';
            break;
          case middleIdx - 1:
            draft[i].state = 'prev';
            break;
          case middleIdx + 1:
            draft[i].state = 'next';
            break;
          default:
            draft[i].state = 'none';
        }
      }
    });

    setList(newList);
    dispatch(aroundActions.request({ TYPE: type }));
  };

  return (
    <section>
      <Wrapper>
        <S.Container>
          <S.UL>
            {list.map((item, idx) => (
              <S.LI
                state={item.state}
                key={item.text + item.state}
                onClick={onClickItem}
                data-idx={idx}
              >
                {item.text}
              </S.LI>
            ))}
          </S.UL>
        </S.Container>
      </Wrapper>
    </section>
  );
};

export default AroundType;
