'use client'
import { InfinitySpin } from 'react-loader-spinner'
import classes from './loading.module.scss'
export default function Loading() {
  return (
    <main className={classes.wrapper}>
      <InfinitySpin width='300' color='#6272a4' />
    </main>
  )
}
