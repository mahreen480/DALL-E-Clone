import React, { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../components'

interface Post {
  _id: string;
  [key: string]: any;
}

interface RenderCardsProps {
  data: Post[] | null;
  title: string;
}

const RenderCards: React.FC<RenderCardsProps> = ({ data, title }) => {
  if (data && data.length > 0) {
    return data.map((post) => <Card key={post._id}{...post} />)
  }
  return (
    <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>
      {title}
    </h2>
  )
}


type Props = {}

const Home = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allPost, setAllPost] = useState<Post[] | null>(null);
  const [searchText, setSearchText] = useState<string>('')

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
          loading ? (
            <div className='flex justify-center items-center'>
              <Loader />
            </div>
          ) : (
            <>
              {searchText && (
                <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                  Showing Results for <span className='text-[#222328]'>{searchText}</span>
                </h2>
              )}

              <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-grid-1 gap-3'>
                {allPost && allPost.length > 0 ? (
                  <RenderCards
                    data={allPost}
                    title=''
                  />
                ) : searchText ? (
                  <RenderCards
                    data={[]}
                    title='No search Results Found'
                  />
                ) : (
                  <RenderCards
                    data={[]}
                    title='No Post Found'
                  />
                )}
              </div>

            </>
          )
        }
      </div>
    </section>
  );
};

export default Home;