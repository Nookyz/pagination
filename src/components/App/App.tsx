import React from 'react'
import Pagination from '../Pagination'
import Card from '../Card'
import usePagination from '../../hooks/usePagination'
import { Container } from './Container'
import { IJSONPlaceholder } from '../../types/data'

interface IApp {
  data: IJSONPlaceholder[]
}

const App: React.FC<IApp> = ({ data }) => {
  const {
    next,
    prev,
    jump,
    currentData,
    currentPage,
    maxPage,
    firstPage,
    lastPage,
  } = usePagination(data, 4)

  return (
    <Container>
      {currentData().map((item: IJSONPlaceholder) => (
        <Card key={`${item.id} ${item.title}`} title={item.title} img={item.thumbnailUrl} />
      ))}
      <Pagination
        next={next}
        prev={prev}
        jump={jump}
        currentPage={currentPage}
        maxPage={maxPage}
        firstPage={firstPage}
        lastPage={lastPage}
      />
    </Container>
  )
}

export default App
