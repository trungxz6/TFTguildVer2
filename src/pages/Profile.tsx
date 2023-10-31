import React, { useState } from 'react'
import axios from 'axios'

const Profile = () => {
  const [searchText, setSearchText] = useState('')
  const API_KEY = 'RGAPI-edaa3d90-fe1a-4b0a-9081-697305f31c2d'

  const getHistory = async () => {
    try {
      const APICallUserID =
        'https://vn2.api.riotgames.com/tft/summoner/v1/summoners/by-name/' + searchText + '?api_key=' + API_KEY
      const response1 = await axios.get(APICallUserID)
      console.log(response1.data)

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
        console.log(response3.data.info)
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='my-20 '>
      <input
        type='text'
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={getHistory}>Search2</button>
    </div>
  )
}

export default Profile
