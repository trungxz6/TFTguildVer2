import React, { useState } from 'react'
import axios from 'axios'

const Profile = () => {
  const [searchText, setSearchText] = useState('')
  const [matchHistory, setMatchHistory] = useState<string[]>([])
  const [playerId, setPlayerId] = useState('')
  const API_KEY = 'RGAPI-edaa3d90-fe1a-4b0a-9081-697305f31c2d'

  const getHistory = async () => {
    setMatchHistory([])
    try {
      axios
        .get(`https://vn2.api.riotgames.com/tft/summoner/v1/summoners/by-name/${searchText}?api_key=${API_KEY}`)
        .then((res) => {
          console.log(res.data)
          setPlayerId(res.data.puuid)

          axios
            .get(
              `https://sea.api.riotgames.com/tft/match/v1/matches/by-puuid/${res.data.puuid}/ids?start=0&count=8&api_key=${API_KEY}`,
            )
            .then((res2) => {
              console.log(res2.data)
              res2.data.map(async (item: string) => {
                axios
                  .get(`https://sea.api.riotgames.com/tft/match/v1/matches/${item}?api_key=${API_KEY}`)
                  .then((res3) => {
                    setMatchHistory((prev) => [...prev, res3.data.info])
                    console.log(res3.data)
                  })
              })
            })
        })
    } catch (error) {
      console.error(error)
    }
    // console.log(listHistory)
    // setMatchHistory(listHistory)
  }

  return (
    <div className='my-20 '>
      <input
        type='text'
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={getHistory}>Search2</button>
      {matchHistory.length > 0 &&
        matchHistory.sort(function (x: any, y: any) {
          return -x.game_datetime + y.game_datetime
        }) &&
        matchHistory.map((summonner: any, index) => {
          return (
            <div key={index}>
              <div>{summonner.tft_game_type}</div>
              <div>
                {summonner.participants.map((player: any) => {
                  if (player.puuid == playerId) {
                    return (
                      <div key={player.puuid}>
                        <div>{searchText}</div>
                        <div>
                          {player.units.map((champ: any, idx: number) => {
                            // console.log(champ)
                            return <div key={idx}>{champ.character_id}</div>
                          })}
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Profile
