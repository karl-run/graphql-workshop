import React from 'react'

import css from './Dish.module.css'
import Card from '../../../card/Card'

const Dish = ({ dish }) => {
  const [count, setCount] = React.useState(1)
  const increase = () => setCount(c => c + 1)
  const decrease = () => setCount(c => (c < 2 ? c : c - 1))

  return (
    <Card className={css.dishWrapper}>
      <div className={css.dishIcon}>{dish.name[0]}</div>
      <div className={css.dishDetails}>
        <div>{dish.name}</div>
        <div className={css.priceDetails}>
          <div>{dish.price}kr</div>
          {count > 1 && <div>({dish.price * count}kr)</div>}
        </div>
      </div>
      <div className={css.buttonSection}>
        <button onClick={increase}>+</button>
        <button>Add {count}</button>
        <button onClick={decrease}>-</button>
      </div>
    </Card>
  )
}

export default Dish
