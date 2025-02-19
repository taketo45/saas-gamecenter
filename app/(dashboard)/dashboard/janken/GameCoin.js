'use client';
import JankenGamestyles from './JankenGame.module.css';
import coinStyles  from './GameCoinStyle.module.css';
import { useAtom  } from 'jotai';
import { userStatusAtom } from '../../../atoms/userStatusAtom';
import { JankenStatusAtom } from '../../../atoms/JankenStatusAtom';


const GameCoin = () => {
  const [userStatus, setUserStatus] = useAtom(userStatusAtom);
  const [gameStatus] = useAtom(JankenStatusAtom);
  
  const insertCoins = (amount) => {
    if (gameStatus.isGaming) return;
    setUserStatus(prev => ({
      ...prev,
      medal: prev.medal + amount
    }));
  };


  return (
    <div className={coinStyles.coinSection}>
      <div className={JankenGamestyles.buttonRow}>
        <button 
          onClick={() => insertCoins(1)} 
          className={coinStyles.coinButton}
          disabled={gameStatus.isGaming}
        >
          10円投入
        </button>
        <button 
          onClick={() => insertCoins(10)}
          className={coinStyles.coinButton}
          disabled={gameStatus.isGaming}
        >
          100円投入
        </button>
      </div>
    </div>
  );
};

export default GameCoin;