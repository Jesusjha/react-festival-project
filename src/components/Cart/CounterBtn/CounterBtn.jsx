import './CounterBtn.css'

const CounterBtn = ({removeTicket, addTicket, qty, id, price, title}) => {
  return (
    <>
      <main className="counter__btn--container">
        <button className="counter__btn" onClick={() => removeTicket(id, price, title,)}><i class='bx bxs-minus-square'></i></button>
        <button className="counter__btn" onClick={() => addTicket(id, price, title,)}><i className='bx bxs-plus-square'></i></button>
      </main>
    </>
  )
}

export default CounterBtn