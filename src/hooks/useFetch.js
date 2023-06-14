import { useState, useEffect, useCallback } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    setIsPending(true)
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(response.statusText)
      const json = await response.json()
      setIsPending(false)
      setData(json)
      setError(null)
    } catch (error) {
      setError(`${error} Could not Fetch Data `)
      setIsPending(false)
    }
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const refreshData = useCallback(() => {
    fetchData()
  }, [fetchData])

  return [data, isPending, error, refreshData]
}
