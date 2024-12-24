import React, { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../components'

type Props = {}

const Home = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState(null);
  const [searchText,setSearchText]=useState('abc')

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[32px]'>
          The Community Showcase
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>
          Explore a curated collection of creatively designed and visually captivating images generated by DALL-E AI.
        </p>
      </div>

      <div className='mt-16'>
        <FormField />
      </div>

      <div className='mt-10'>
        {
          loading?(
            <div className='flex justify-center items-center'>
              <Loader/>
            </div>
          ):(
            <>
            {searchText  && (
              <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                Showing Results for <span className='text-[#222328]'>{searchText}</span>
              </h2>
            ) }

            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-grid-1 gap-3'>

            </div>

            </>
          )
        }
      </div>

    </section>
  )
}

export default Home