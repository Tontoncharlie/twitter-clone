'use client'

import React from 'react';
import { useState } from 'react';
import { fetchAns } from '@/utils/fetchData';
import styles from './searchbar.module.css'
import Image from 'next/image';
import { fetchData } from '@/utils/fetchData';

const Searchbar = () => {
   

const [ userKeyword, setUserkeyword ] = useState('')
const [result, setResult] = useState([])
const [loading, setLoading] = useState(false)

const [product, setProduct] = useState([])

const handleSearch = async (e) => {
    e.preventDefault(); // prevent the default of events
    const data = await fetchData(userKeyword)
    setLoading(true)

    setResult(data.result.timeline.instructions);
    setLoading(false)
}

// const handleFind = async (e) => {
//   e.preventDefault();
//   const data = await fetchAns()

//   setProduct(data)
// }

  return (
    <div>   
    <form>
        <input type='text' placeholder='search'
         value={userKeyword}
           className='bg-transparent w-40 h-10'
           onChange={(e) => setUserkeyword(e.target.value)}
           />
    </form>

{
  loading ? <p>Loading data</p> : (
    result.map((item, index) => (
      <div key={index}>
        {item.entries?.map((entry, entryIndex) => (
          <div key={entryIndex}>
            {entry.content?.items?.map((eachItem, itemIndex) => (
             <div>
               <h1 key={itemIndex}>
                {eachItem?.item?.itemContent?.user_results?.result?.legacy?.location || "No Location"}
                {eachItem?.item?.itemContent?.user_results?.result?.legacy?.followers_count || "No follow"}
                {eachItem?.item?.itemContent?.user_results?.result?.legacy?.screen_name || "No Name"}
                {/* <Image src={eachItem?.item?.itemContent?.user_results?.result?.legacy?.profile_banner_url} height={20} width={20} alt='profile image'/> */}
              </h1>
            </div>
            ))}

            
          </div>
        ))}
      </div>
    ))  
  )
} 

{/* <button onClick={handleFind}>search products</button>

{
  product.map((eachItem, index) => (
    <div className={`${styles.search}`} key={index}>
       <img src={eachItem.image} alt="" />
       <div> 
       <h1>{eachItem.category}</h1>
      <h1>{eachItem.title}</h1>  
      <h1>{eachItem.price}</h1>
      <h1>{eachItem.rating.count}</h1>  
      <h1>{eachItem.rating.rate}</h1>
       </div> 
     </div>
  ))
} */}
      
    </div>
  );
}

export default Searchbar;
