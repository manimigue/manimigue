// import * as types from '../actions/links';
import React from 'react';

const initialState = {
  headerLinks:[
    {
      type: 'Route',
      url : '/news',
      text : 'News'
    },
    {
      type: 'Route',
      url : '/about',
      text : 'About'
    },
    {
      type: 'Route',
      url : '/concert',
      text : 'Concert'
    },
    {
      type:'Route',
      url: '/members',
      text : 'Join us'
    },
    {
      type: 'Route',
      url : '/tickets',
      text : 'Tickets'
    },
    {
      type: 'Route',
      url : '/contact',
      text : 'Contact'
    },
    {
      type: 'Route',
      url : '/',
      text : 'Home'
    },
  ],
  membersLinks:[
    {
      type: 'Route',
      url : '/contact',
      tab : 'Orchestra',
      head: 'オーケストラ',
      icon: 'music_note',
      sub: 'Orchestra Member',
      text : <div>
        <p>[団員募集]</p>
        <br/>
        <p>現在募集しているパートは以下の通りです。</p>
        <ul>
          <li>ファゴット×1人</li>
          <li>ヴァイオリン×4人</li>
          <li>ヴァオラ×3人</li>
          <li>チャロ×3人</li>
          <li>コントラバス×4人</li>
        </ul>
        <br/>
        <p>この春から大学生になるという方もお待ちしています!</p>
        <p>新しい季節，新しいオーケストラで音楽を始めませんか。</p>
      </div>,
      background : 'rgba(228, 89, 45, 0.59)',
      color : 'rgb(212, 62, 6)'
    },
    {
      type: 'Route',
      url : '/contact',
      tab : 'Designer',
      head: 'デザイナー',
      icon: 'brush',
      sub: 'Designer',
      text : <div></div>,
      background : 'rgba(131, 195, 123, 0.86)',
      color : 'rgb(18, 121, 5)'
    },
    {
      type: 'Route',
      url : '/contact',
      tab : 'Staff',
      head: 'スタッフ',
      icon: 'people',
      sub: 'Staff Member',
      text : <div></div>,
      background : 'rgb(105, 115, 177)',
      color : 'rgb(27, 45, 158)'
    },
  ],
};

function linksReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default linksReducer;
