"use client"

import React from 'react';
import styles from './feed.module.css'
import Image from 'next/image';
import { useState } from 'react';
// import Tweets from "@/components/tweets/Tweets";

const Feed = () => {
    const [active, setActive] = useState('For you')

 const handleActive = (params) => {
    setActive(params)
   
}

  return (
    <div className={`${styles.feedContainer}`}>
      <div className={`${styles.feedHeader} flex justify-center gap-9 py-5`}>  

         <div className={`${styles.each}`}>
         <a href="#"
        onClick={(e) => {
          e.preventDefault();
          handleActive('For you');
        }}
        className={`${active === 'For you' ? styles.active : ''}`}>For you</a>
         </div>

        <div className={`${styles.each}`}>
        <a href="#"
        onClick={(e) => {
          e.preventDefault();
          handleActive('Following');
        }}
        className={`${active === 'Following' ? styles.active : ''}`}>Following</a>
        </div>

      </div>

      <div className={`${styles.feedContainer-2} flex flex-col gap-5`}>
      <div className='flex gap-3 items-center ml-3 '>
        <img src="/feed_images/profile-icon.png" alt='profile-icon'/>
        <input type='text' className={`${styles.search}`} placeholder='What is happening?!'/>
      </div>

      <div className={`${styles.logoContainer}`}>
      <div className={`${styles.logos}`}>
      <img src='/feed_images/media.png' alt='media'/>   
      <img src='/feed_images/gif.png' alt='gif'/>
      <img src='/feed_images/grok.png' alt='grok'/>
      <img src='/feed_images/ballot.png' alt='ballot'/>
      <img src='/feed_images/emoji.png' alt='emoji'/>
      <img src='/feed_images/schedule.png' alt='schedule'/>
      <img src='/feed_images/location.png' alt='location'/>
      </div>

      <div>
      <h1 className='w-16 h-9 bg-white text-black text-center rounded-full place-content-center'>Post</h1>
      </div>

      </div>

      </div>
    {/* <Tweets/> */}
    </div>
  );
}

export default Feed;
