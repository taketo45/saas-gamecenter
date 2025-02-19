'use client';
import judgementStyles from './JankenJudgementStyle.module.css';
import { judgementAtom } from '../../../atoms/judgementAtom';
import { useAtom } from 'jotai';



const JankenRenderPCHand = () => {
  const [judgementState] = useAtom(judgementAtom);

  return (
      <div className={judgementStyles.judgment}>{judgementState.judgement}</div>
  );
};

export default JankenRenderPCHand;