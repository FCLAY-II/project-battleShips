import { useDispatch, useSelector } from 'react-redux';
import gameAC from '../../redux/actionCreators/gameAC';
import EnemyField from '../EnemyField/EnemyField';
import MyField from '../MyField/MyField';

export default function Game() {
  const gameStatus = useSelector((state) => state.game.status);
  const dispatch = useDispatch();

  return (
    <div className="game">
      <MyField />
      {gameStatus === 'active' || gameStatus === 'finished' ? <EnemyField /> : <></>}
      {gameStatus === 'finished' ? <button type="button" onClick={() => {
        dispatch(gameAC.loadGameDelivery(null));
      }}>завершить игру</button> : <></>}
    </div>
  );
}
