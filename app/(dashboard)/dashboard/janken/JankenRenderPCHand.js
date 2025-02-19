'use client';
import pcHandStyles from './JankenRenderPCHandStyle.module.css';
import { pcHandAtom } from '../../../atoms/pcHandAtom';
import { useAtom } from 'jotai';


const HANDS = {
  GU: 1,
  CHOKI: 2,
  PA: 3,
};


const JankenJudgement = () => {
  const [pcHandState] = useAtom(pcHandAtom);

  const renderHand = (hand) => {
    if (hand === 'waiting') {
      return <img src="/img/guchopa.gif" alt="じゃん...けん..." />;
    }
    const hands = {
      [HANDS.GU]: <img src="/img/gu.png" alt="ぐー" />,
      [HANDS.CHOKI]: <img src="/img/choki.png" alt="ちょき" />,
      [HANDS.PA]: <img src="/img/pa.png" alt="ぱー" />
    };
    return hands[hand] || '';
  };

  return (
      <div className={pcHandStyles.gameSection}>
        <div className={pcHandStyles.handDisplay}>
          {renderHand(pcHandState.pcHand)}
        </div>
      </div>

  );
};

export default JankenJudgement;