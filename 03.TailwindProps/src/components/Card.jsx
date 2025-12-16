import React from 'react'

function Card(props) {
    // console.log(props);
    
  return (
    <div>
        {/* <img src="https://images.pexels.com/photos/3532542/pexels-photo-3532542.jpeg" alt="" />
        <h1 className='text-2xl bg-red-600 p-3 rounded'>Hii, Welcome to Spy-Verse</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, totam?</p> */}




        <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg" />
  </div>
  <div class="flex items-center md:items-start">
    <span class="text-2xl font-medium">The Punisher</span>
    <span class="font-medium text-sky-500"></span> {props.username}     {/*this the prop that  we can inject here and then in app.jsx */}
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    </div>

    

    
  )
}

export default Card