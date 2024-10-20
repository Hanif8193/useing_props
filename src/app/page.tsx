import React from 'react'
import Cards from './components/Cards'

function Home() {
  return (
    <div className=' max-auto flex max-h-0.5 '>
      <div className=' mt-10 max-h-5 max-auto grid grid-cols-5 w-full gap-10 p-10 '>
<Cards name="(Client Site Renderning)"  />
<Cards name="(Server Site Renderning)"/>
<Cards name="(Static Site Renderning)"/>
<Cards name="(Incremental Site Renderning) "/>
 </div>
    </div>
  )
}

export default Home


