import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo } from './assets';

type Props = {}

const App = (props: Props) => {
  return (
    <div><h1 className="text-3xl font-bold underline">
      Hello world!
    </h1></div>
  )
}

export default App