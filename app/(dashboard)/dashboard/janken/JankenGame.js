import JankenGamestyles from './JankenGame.module.css';
import GameHeader from './GameHeader';
import JankenMain from './JankenMain';


const JankenGame = () => {


  return (
    <div className={JankenGamestyles.container}>
      <GameHeader title={"じゃんけん"} />

      <JankenMain />
    </div>
  );
};

export default JankenGame;