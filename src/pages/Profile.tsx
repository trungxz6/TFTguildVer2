import React, { useState } from 'react'
import axios from 'axios'

interface bac {}

const Profile = () => {
  const [searchText, setSearchText] = useState('')
  const [matchHistory, setMatchHistory] = useState<string[]>([])
  const [playerId, setPlayerId] = useState('')
  const API_KEY = 'RGAPI-edaa3d90-fe1a-4b0a-9081-697305f31c2d'

  const getHistory = async () => {
    setMatchHistory([])
    // const listHistory: string[] = []
    try {
      const APICallUserID =
        'https://vn2.api.riotgames.com/tft/summoner/v1/summoners/by-name/' + searchText + '?api_key=' + API_KEY
      const response1 = await axios.get(APICallUserID)
      console.log(response1.data)
      setPlayerId(response1.data.puuid)

      const APICallMatchID =
        'https://sea.api.riotgames.com/tft/match/v1/matches/by-puuid/' +
        response1.data.puuid +
        '/ids?start=0&count=20' +
        '&api_key=' +
        API_KEY
      const response2 = await axios.get(APICallMatchID)
      console.log(response2.data)

      response2.data.map(async (item: string) => {
        const APICallMatchInfo = 'https://sea.api.riotgames.com/tft/match/v1/matches/' + item + '?api_key=' + API_KEY

        const response3 = await axios.get(APICallMatchInfo)
        setMatchHistory((prev) => [...prev, response3.data.info])
        // listHistory.push(response3.data.info)
        // console.log(response3.data.info)
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
        matchHistory.map((summonner: any, index) => {
          return (
            <div>
              <div>{summonner.tft_game_type}</div>
              <div>
                {summonner.participants.map((player: any) => {
                  if (player.puuid == playerId) {
                    return (
                      <div>
                        <div>{searchText}</div>
                        <div>
                          {player.units.map((champ: any) => {
                            console.log(champ)
                            return <div>{champ.character_id}</div>
                          })}
                        </div>
                      </div>
                    )
                    // player.units.map((champ: any) => {
                    //   // console.log(champ)
                    //   return <div></div>
                    // })
                  }
                })}
              </div>
            </div>
          )
          // if (summonner.tft_game_type == 'pairs') {
          //   return <div>Double Up</div>
          // } else if (summonner.tft_game_type == 'turbo') {
          //   return <div>Hyper Roll</div>
          // }
        })}
    </div>
  )
}

export default Profile
