import React, { useState } from 'react';
import{MoreHorizontal} from 'react-feather'
import Card from "../Card/Card";
import './Board.css';
function Board() {
    return (
        <div className="Board">
            <div className='board_top'>
                <p className = 'board_top_title'>To Do<span>2</span>
                    <MoreHorizontal/>
                </p>
            </div>
            <div className='board_cards'>
                <h1>Card</h1>
                <h1>Card2</h1>
            </div>
        </div>
    );
}

export default Board;