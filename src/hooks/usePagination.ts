import React from 'react'
import { IJSONPlaceholder } from '../types/data'

const usePagination = (data: IJSONPlaceholder[], itemsPerPage: number) => {
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

  return { next, prev, jump, currentData, currentPage, maxPage, firstPage, lastPage }
}

export default usePagination
