import { useState } from 'react'
import { data } from '../data'
import List from './components/List'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <main className="bg-[rgba(250,_232,_255,_1)]  flex justify-center items-center">
      <section className="w-[600px]  bg-[rgba(255,_255,_255,_1)] my-[5rem] mx-0 py-[1.5rem] px-[2rem]  max-w-[90vw]">
        <h3 className="font-normal text-3xl mb-3">
          {people.length} birthdays today
        </h3>
        <List people={people} />
        <button
          className="bg-[rgba(217,_70,_239,_1)] w-full font-normal text-2xl tracking-wide text-[rgba(255,_255,_255,_1)]"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  )
}

export default App
