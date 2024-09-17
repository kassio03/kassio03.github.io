import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootReducerState } from '../../store/modules/rootReducer';
import * as actions from '../../store/modules/simulatedReq/actions';

const TableSection = () => {
  const [data, setData] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loadRequest());
  }, [dispatch]);

  const result = useSelector((state: RootReducerState) => state.simulatedReq);

  return (
    <section>
      <button
        onClick={() => {
          console.log(result.data.slice(0, 10));
        }}
      >
        Exibir dados
      </button>
      <h1>TableSection</h1>
    </section>
  );
};

export default TableSection;
