import React from 'react'
import { IJSONPlaceholder } from '../types/data'

// usePagination - params
// 1 - array of some data
// 2 - items per page
// 3 - number of buttons in pagination

const usePagination = (
  data: IJSONPlaceholder[],
  itemsPerPage: number,
  numberOfButtons: number = 1
) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1)
  const maxPage: number = Math.ceil(data.length / itemsPerPage)

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage
    const end = begin + itemsPerPage
    return data.slice(begin, end)
  }

  const firstPage = () => {
    setCurrentPage(1)
  }

  const lastPage = () => {
    setCurrentPage(maxPage)
  }

  const next = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage))
  }

  const prev = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1))
  }

  const jump = (page: number) => {
    const pageNumber = Math.max(1, page)
    setCurrentPage(Math.min(pageNumber, maxPage))
  }

  const buttons = Array(maxPage)
    .fill(1)
    .map((el, i) => el + i)

  const sideButtons = numberOfButtons % 2 === 0 ? numberOfButtons / 2 : (numberOfButtons - 1) / 2

  const calcLeft = (rest = 0) => {
    return {
      array: buttons
        .slice(0, currentPage - 1)
        .reverse()
        .slice(0, sideButtons + rest)
        .reverse(),
      rest: function () {
        return sideButtons - this.array.length
      },
    }
  }

  const calcRight = (rest = 0) => {
    return {
      array: buttons.slice(currentPage).slice(0, sideButtons + rest),
      rest: function () {
        return sideButtons - this.array.length
      },
    }
  }

  const leftButtons = calcLeft(calcRight().rest()).array
  const rightButtons = calcRight(calcLeft().rest()).array

  return {
    next,
    prev,
    jump,
    currentData,
    currentPage,
    maxPage,
    firstPage,
    lastPage,
    pagination: [...leftButtons, currentPage, ...rightButtons],
  }
}

export default usePagination
