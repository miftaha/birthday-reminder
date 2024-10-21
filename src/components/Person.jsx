/* eslint-disable react/prop-types */

const Person = ({ person }) => {
  return (
    <section className="flex justify-start items-center gap-4 mb-3">
      <img
        src={person.image}
        alt={person.name}
        className="w-[75px] h-[75px] rounded-[40px] object-cover"
      />
      <div>
        <h2>{person.name}</h2>
        <h3>{person.age} years</h3>
      </div>
    </section>
  )
}

export default Person
