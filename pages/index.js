import Person from '@/components/person/Person'
import Stat from '@/components/stat/Stat'
import Head from 'next/head'
import { useEffect, useState } from 'react'

// TODO
// bring some effects for card appearing

export default function Home() {
  const [categories, setCategories] = useState(['daily', 'weekly', 'monthly'])
  const [currentCategory, setCurrentCategory] = useState(categories[1])
  const [data, setData] = useState([])

  useEffect(() => {
    // Simulating data fetching
    setTimeout(() => {
      const response = require('../data/data.json')
      setData(response)
    }, 800)
  }, [])

  const categoryButtonHandler = (e) => {
    setCurrentCategory(e.target.value)
  }

  return (
    <>
      <Head>
        <title>Time Tracking Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* section */}
        <div className="flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden bg-clr-section">
          <h1 className="absolute invisible">Time tracking dashboard</h1>
          {data.length <= 0 && (
            <p className="text-4xl text-center text-white">Loading...</p>
          )}
          {/* component */}
          <div className="grid max-w-[69.375rem] w-full  font-rubik gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 lg:row-span-2">
              {data.length > 0 && (
                <Person
                  currentCategory={currentCategory}
                  action={categoryButtonHandler}
                  categories={categories}
                />
              )}
            </div>

            {data.map((item, index) => {
              const { title, timeframes } = item
              const range = {
                daily: 'Yesterday',
                weekly: 'Last Week',
                monthly: 'Last Month',
              }
              const icon = require(`../public/images/icon-${title
                .toLowerCase()
                .replace(' ', '-')}.svg`)

              return (
                <div key={index}>
                  <Stat
                    title={title}
                    values={timeframes[currentCategory]}
                    range={range[currentCategory]}
                    icon={icon.default}
                  />
                </div>
              )
            })}
          </div>
          {/* component */}
        </div>
        {/* section */}
      </main>
    </>
  )
}
