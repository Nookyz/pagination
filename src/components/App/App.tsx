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
  // usePagination - params
  // 1 - array of some data
  // 2 - items per page
  // 3 - number of buttons in pagination
  const {
    next,
    prev,
    jump,
    currentData,
    currentPage,
    firstPage,
    lastPage,
    pagination,
  } = usePagination(data, 10, 5)

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
        firstPage={firstPage}
        lastPage={lastPage}
        pagination={pagination}
      />
    </Container>
  )
}

export default App
