import styled, { css } from 'styled-components'
import Button from '../UI/Button'

export default styled(Button)`
  padding: 0;
  border-radius: 50%;
  width: 50px;
  transition: all 0.2s ease-in;
  margin-right: 5px;
  user-select: none;

  background: ${(props: { active: boolean }) => (props.active ? '#1f74ff' : 'transparent')};
  color: ${(props: { active: boolean }) => (props.active ? '#fff' : '#000')};

  ${props =>
    !props.active &&
    css`
      background: transparent;
      color: #000;
      border-color: #d1d1d1;
      :hover {
        background: #5394ff;
        color: #fff;
      }
    `}

  :last-child {
    margin-right: 0;
  }
`
