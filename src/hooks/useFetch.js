import { useEffect, useState } from "react"
import { makeRequest } from "../makeRequest"


const useFetch =  (url) => {
const [data, setData] = useState([])
const [loading, setLoading] = useState(null)
const [error, setError] = useState(null)


useEffect(() => {
  const fetchData = async () => {
    try{
      setError(false)
      setLoading(true)
      const res = await makeRequest.get(url )
      setData(res.data.data)
      setLoading(false)
    }
    catch(err){
      setError(true)
    }
  }
  fetchData()
},[url])

return {data, loading, error}
}

export default useFetch;