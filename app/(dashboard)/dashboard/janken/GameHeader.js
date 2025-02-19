'use client';
import React from 'react'
import gameSstyles from './JankenGame.module.css';
import headerStyles from './HeaderStyle.module.css';
import { useAtom } from 'jotai';
import { userStatusAtom } from '../../../atoms/userStatusAtom';



function GameHeader({title}) {
  const [userStatus] = useAtom(userStatusAtom);

  return (
    <>
      <header className={headerStyles.header}>
        <h1 className={gameSstyles.title}>{title}</h1>
        <div className={gameSstyles.status}><p>勝ち数: {userStatus.totalWinCount}</p> <p>メダル数： {userStatus.medal}</p></div>
      </header>
    </>
  );
}

export default GameHeader