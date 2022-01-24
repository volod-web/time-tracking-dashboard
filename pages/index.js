import Person from '@/components/person/Person'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Time Tracking Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* section */}
        <div className="flex items-center justify-center min-h-screen p-6 overflow-hidden bg-clr-section">
          <h1 className="absolute invisible">Time tracking dashboard</h1>
          {/* component */}
          <div className="grid max-w-[69.375rem] w-full  font-rubik">
            <div>
              <Person />
            </div>
          </div>
          {/* component */}
        </div>
        {/* section */}
      </main>
    </>
  )
}
