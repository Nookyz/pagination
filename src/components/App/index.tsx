import React from 'react'
import App from './App'
import { IJSONPlaceholder } from '../../types/data'

const AppContainer = () => {
  const [data, setData] = React.useState<IJSONPlaceholder[] | undefined>()

  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true)
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos`)
      const data = await response.json()
      setData(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  if (!data || loading) {
    return <div>Loading...</div>
  }

  return <App data={data} />
}

export default AppContainer
