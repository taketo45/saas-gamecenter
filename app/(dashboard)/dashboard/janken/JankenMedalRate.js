'use client';
import medalRateStyles from './JankenMedalRateStyle.module.css';
import { useAtom  } from 'jotai';
import { JankenStatusAtom } from '../../../atoms/JankenStatusAtom';


const JankenMedalRate = () => {

  const [gameStatus, setGameStatus] = useAtom(JankenStatusAtom);


  return (
    <div className={medalRateStyles.multiplierRow}>
      {[2, 4, 8, 16, 32].map((multiplier, index) => (
        <div
          key={multiplier}
          className={`${medalRateStyles.multiplier} ${
            index + 1 === gameStatus.winCount ? medalRateStyles.activeMultiplier : ''
          }`}
        >
          {multiplier}
        </div>
      ))}
    </div>
  );
};

export default JankenMedalRate;