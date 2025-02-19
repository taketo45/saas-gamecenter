'use client';
import JankenGamestyles from './JankenGame.module.css';
import StartButtonStyles from './JankenStartButtonStyle.module.css';
import { useAtom  } from 'jotai';
import { userStatusAtom } from '../../../atoms/userStatusAtom';
import { JankenStatusAtom } from '../../../atoms/JankenStatusAtom';
import { pcHandAtom } from '../../../atoms/pcHandAtom';
import { judgementAtom } from '../../../atoms/judgementAtom';



const MESSAGES = {
  EVEN: 'あいこ',
  WIN: 'かち',
  LOSE: 'まけ',
  BUY_MEDAL: "10円か100円を投入してください",
};

const JankenStartButton = () => {
  const [userStatus, setUserStatus] = useAtom(userStatusAtom);

  const [gameStatus, setGameStatus] = useAtom(JankenStatusAtom);

  // Atomの第一引数は削除してはいけない
  const [pcHand, setPcHand] = useAtom(pcHandAtom);
  const [judgement, setJudgement] = useAtom(judgementAtom);


  const startGame = () => {
    if (gameStatus.isGaming || userStatus.medal <= 0) {
      if (userStatus.medal <= 0) alert(MESSAGES.BUY_MEDAL);
      return;
    }

    setGameStatus(prev => ({
      ...prev,
      isGaming: true,
      isGuChokiPaAble: true,
      // medal: prev.medal - 1
    }));
    setUserStatus(prev => ({
      ...prev,
      medal: prev.medal - 1
    }));
    setJudgement({
      judgement: '',
    });
    setPcHand({
      pcHand: 'waiting',
    });
  };


  return (
    <div className={JankenGamestyles.buttonRow}>
      <button
        onClick={startGame}
        disabled={gameStatus.isGaming || userStatus.medal <= 0}
        className={StartButtonStyles.startButton}
      >
        START
      </button>
    </div>
  );
};

export default JankenStartButton;