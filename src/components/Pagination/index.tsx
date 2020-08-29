import React from 'react'
import { Wrapper } from './Wrapper'
import Button from './Button'
import MyPagination from './Pagination'
import Pager from './Pager'

interface IPagination {
  firstPage: () => void
  lastPage: () => void
  next: () => void
  prev: () => void
  jump: (page: number) => void
  currentPage: number
  pagination: number[]
}

const Pagination: React.FC<IPagination> = ({
  next,
  prev,
  jump,
  currentPage,
  firstPage,
  lastPage,
  pagination,
}) => {

  return (
    <Wrapper>
      <Button pager="prev" onClick={firstPage}>
        <span className="material-icons">skip_previous</span>
      </Button>
      <Button pager="prev" onClick={prev}>
        <span className="material-icons">navigate_before</span>
      </Button>

      <MyPagination>
        {pagination.map((number: number) => (
          <Pager key={number} active={currentPage === number} onClick={() => jump(number)}>
            {number}
          </Pager>
        ))}
      </MyPagination>

      <Button pager="next" onClick={next}>
        <span className="material-icons">navigate_next</span>
      </Button>
      <Button pager="next" onClick={lastPage}>
        <span className="material-icons">skip_next</span>
      </Button>
    </Wrapper>
  )
}

export default Pagination
