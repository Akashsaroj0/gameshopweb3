import Banner from '../components/Banner'
import ShopStats from '../components/ShopStats'

import { useGlobalState } from '../store'
import { loadProducts } from '../Blockchain.Service'
import { useEffect, useState } from 'react'

const Home = () => {
  const [products] = useGlobalState('products')
  const [stats] = useGlobalState('stats')
  const [loaded, setLoaded] = useState(false)
  const [showCards, setShowCards] = useState(false); 

  useEffect(async () => {
    await loadProducts().then(() => setLoaded(true))
  }, [])

  return loaded ? (
    <>
      <Banner />
      <ShopStats stats={stats} />
      <div className="h-20"></div>
      
    </>
  ) : null
}

export default Home
