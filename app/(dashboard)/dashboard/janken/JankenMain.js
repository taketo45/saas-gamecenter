import mainStyles from './JankenMainStyle.module.css';
import GameCoin from './GameCoin';
import JankenRenderPCHand from './JankenRenderPCHand';
import JankenStartButton from './JankenStartButton';
import JankenHandsButtons from './JankenHandsButtons';
import JankenMedalRate from './JankenMedalRate';
import JankenJudgement from './JankenJudgement';


const JankenMain = () => {


  return (
    <main className={mainStyles.main}>
      <GameCoin />

      <JankenJudgement />

      <JankenRenderPCHand />

      <JankenStartButton />

      <JankenHandsButtons />

      <JankenMedalRate />
    </main>
  );
};

export default JankenMain;