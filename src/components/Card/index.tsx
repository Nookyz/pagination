import React from 'react'
import { Wrapper } from './Wrapper'
import { Title } from './Title'
import { Image } from './Image'

interface ICard {
  title: string
  img: string
}

const Card: React.FC<ICard> = ({ title, img }) => {
  return (
    <Wrapper>
      <Image src={img} />
      <Title>{title}</Title>
    </Wrapper>
  )
}
export default Card
