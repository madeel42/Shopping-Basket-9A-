import React from 'react'
import classes from './details.module.css'
import { useAppSelector } from '../../Store/Store.hooks'
import { getproductsSelector } from '../Cards/card.slice'
import { RouteComponentProps } from 'react-router'
interface Props {
  slug: string
}
function Details({ match }: RouteComponentProps<Props>) {
  const DATA = useAppSelector(getproductsSelector)
  let Product = DATA.find(item => parseInt(match.params.slug) === item.id)
  console.log(Product, '--->', DATA);

  return (

    <div className={classes.WRAPPER}>
      <div className={classes.FCOL} >
        <div className={classes.FCOLCHILD}><img src={Product?.img} alt="" /></div>
      </div>
      <div className={classes.SCOL}><h2>{Product?.title}</h2 >
        <p>{Product?.price}/Rs</p>
        <p className={classes.DESCRIPTION}>{Product?.desc}</p>
      </div>
    </div>
  )
}
export { Details }