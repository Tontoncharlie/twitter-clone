import React from 'react';
import Image from 'next/image';
import styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={`${styles.sideContainer} flex flex-col gap-5 w-1/4 h-screen`}>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-12 w-12 ml-20 pt-5"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" style={{ filter: "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7492%) hue-rotate(231deg) brightness(102%) contrast(100%)"}}></path></g></svg> 

      <div className='ml-20 flex flex-col gap-2'>
        <div className={`${styles.subContainer} flex gap-5`}>
          <Image src="/side_images/home.png" width={20} height={20} alt='Home image'/>
          <h1>Home</h1>
        </div>

        <div className={`${styles.subContainer} flex gap-5`}>
          <Image src="/side_images/search.png" width={20} height={20} alt='explore'/>
          <h1>Explore</h1>
        </div>

        <div className={`${styles.subContainer} flex gap-5`}>
        <Image src="/side_images/notification.png" width={20} height={20} alt='notification'/>
          <h1>Notifications</h1>
        </div>

        <div className={`${styles.subContainer} flex gap-5`}>
        <Image src="/side_images/message.png" width={20} height={20} alt='message'/>
          <h1>Messages</h1>
        </div>

        <div className={`${styles.subContainer} flex gap-5`}>
        <Image src="/side_images/grok.png" width={20} height={20} alt='grok'/>
          <h1>Grok</h1>
        </div>

        <div className={`${styles.subContainer} flex gap-5`}>
        <Image src="/side_images/community.png" width={20} height={20} alt='community'/>
          <h1>Communities</h1>
        </div>

        <div className={`${styles.subContainer} flex gap-5`}>
        <Image src="/side_images/customer.png" width={20} height={20} alt='customer'/>
          <h1>Profile</h1>
        </div>

        <div className={`${styles.subContainer} flex gap-5`}>
        <Image src="/side_images/more.png" width={20} height={20} alt='more'/>
          <h1>More</h1>
        </div>

        <div>
          <h1 className='w-48 h-10 bg-white text-black text-center rounded-full place-content-center'>Post</h1>
        </div>

      </div>      
    </div>
  );
}

export default Sidebar;
