import React, { useState, useEffect, useCallback } from 'react';
import styles from './App.css';
import Card from './card';

const cards = {
  '2': { card :'2', value: '1'},
  '3': { card :'3', value: '1'},
  '4': { card :'4', value: '1'},
  '5': { card :'5', value: '1'},
  '6': { card :'6', value: '1'},
  '7': { card :'7', value: '0'},
  '8': { card :'8', value: '0'},
  '9': { card :'9', value: '0'},
  '10': { card :'10', value: '-1'},
  'A': { card :'A', value: '-1'},
  'J': { card :'J', value: '-1'},
  'Q': { card :'Q', value: '-1'},
  'K': { card :'K', value: '-1'}
}

function App() {
  const [totalCount, setCount] = useState(0)
  const [runningCount, setRunningCount] = useState(0)
  const [deckCount, setDeckCount] = useState(8)
  const [dealersCard, setDealersCard] = useState({1: null, 2: null})
  const [dealersSelectedSlot, selectedDealersCardSlot] = useState(null)
  const [playersCurrentCards, setPlayersCurrentCards] = useState({ p1: [], p2: [], p3: [], p4: [] })
  const [selectedPlayer, selectPlayer] = useState(null)

  useEffect(()=>{
    if(totalCount===52) {
      setDeckCount(7)
    }
    if(totalCount===104) {
      setDeckCount(6)
    }
    if(totalCount===156) {
      setDeckCount(5)
    }
    if(totalCount===208) {
      setDeckCount(4)
    }
    if(totalCount===260) {
      setDeckCount(3)
    }
    if(totalCount===312) {
      setDeckCount(2)
    }
    if(totalCount===364) {
      setDeckCount(1)
    }
    if(totalCount===416) {
      setDeckCount(1)
    }
  })

  const setTotalcount = () => { 
    setCount(totalCount + 1)
  }

  const setRunningCountfn = (e) => {
    setRunningCount(runningCount + Number(e))
  }

  const DealersCard = ()=>{
    return(
      <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
        <div onClick={()=>selectedDealersCardSlot(1)} style={{border: dealersSelectedSlot === 1 ? '1px solid blue' : '1px solid black', height: 80, width: 50, backgroundColor: 'lightGrey'}}></div>
        <div onClick={()=>selectedDealersCardSlot(2)} style={{border: dealersSelectedSlot === 2 ? '1px solid blue' : '1px solid black', height: 80, width: 50, backgroundColor: 'lightGrey', marginLeft: 5}}></div>
        <div onClick={()=>selectedDealersCardSlot(null)}>{'Deselect'}</div>
      </div>
  )}

  const PlayesSlot = ({player}) => {
    return(
      <div onClick={()=>{selectPlayer(player)}} style={{border: selectedPlayer === player ? `1px solid blue` : `1px solid black`, minWidth: 100}}>
        <span>{player}: {playersCurrentCards[player].map((card)=>card.concat(` ,`))}</span>
      </div>
    )
  }

  const handleCardClick = (value, card) => {
    if(dealersSelectedSlot){
\\ dealer card is not working ------------------------------------------------------------------

      console.log(dealersSelectedSlot, 'dealersSelectedSlot', {...dealersCard, [dealersSelectedSlot] : card})
      setDealersCard({...dealersCard, [dealersSelectedSlot] : card})
      console.log('hello', dealersCard)
    }
    if(selectedPlayer){const temp = JSON.parse(JSON.stringify(playersCurrentCards[selectedPlayer]))
    temp && temp.push(card)
    temp && setPlayersCurrentCards({...playersCurrentCards, [selectedPlayer]: temp})}
    setRunningCountfn(Number(value))
		setTotalcount()
  }

  const reset = () => {
    setPlayersCurrentCards({ p1: [], p2: [], p3: [], p4: [] })
  }

  return (
    <div style={{justifyContent:'center', display: 'flex'}}>
      <div style={{
        width: '340px',
        border: '1px solid black',
        justifyContent:'center',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {Object.keys(cards).map(card=>(
          <Card handleClick={handleCardClick} card={cards[card]} />
        ))}
      </div>
      <div style={{
        width: '500px',
        border: '1px solid black',
        // justifyContent:'center',
        flexDirection: 'column',
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: '20px'
      }}>
        <DealersCard />
        <PlayesSlot player={'p1'} />
        <PlayesSlot player={'p2'} />
        <PlayesSlot player={'p3'} />
        <PlayesSlot player={'p4'} />
        <div onClick={()=>{selectPlayer(null)}}>{'Deselect'}</div>
        <div onClick={reset}>{'Reset'}</div>
        <div>{'Running Count - '}{runningCount.toFixed(2)}</div>
        <div>{'True Count - '}{(runningCount/deckCount).toFixed(2)}</div>
        <div>{'Deck Count - '}{deckCount}</div>
      </div>
  </div>
  );
}

export default App;
