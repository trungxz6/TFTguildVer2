import axios from 'axios'
import { Input, Button } from 'antd'
import { debounce } from 'lodash'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const Profile = () => {
  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState({})
  const API_KEY = 'RGAPI-edaa3d90-fe1a-4b0a-9081-697305f31c2d'

  useQuery({
    queryKey: ['search', searchText],
    queryFn: async () => {
      const res = await getHistory(searchText)
      setData(res.data)
    },
  })

  const handleSearch = (value: string) => {
    setSearchText(value)
  }

  const handleChange = debounce((event: any) => {
    handleSearch(event.target.value)
  }, 1000)

  const getHistory = async (searchValue: string) => {
    try {
      const APICallUserID =
        'https://vn2.api.riotgames.com/tft/summoner/v1/summoners/by-name/' + searchValue + '?api_key=' + API_KEY
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
    <div className='my-20'>
      <Input.Search
        style={{ width: 280 }}
        onChange={handleChange}
        onSearch={handleSearch}
        placeholder='Search'
      />
      <Button onClick={() => console.log(data)}> Show Data </Button>
      <span>{data ? data.info : ''}</span>
    </div>
  )
}

export default Profile
