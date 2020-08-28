import styled from 'styled-components'
import Button from '../UI/Button'

export default styled(Button)`
  padding: 0;
  border-radius: 50%;
  width: 50px;
  border-color: #d1d1d1;
  transition: all 0.2s ease-in;
  margin: ${(props: { pager: string }) => (props.pager === 'prev' ? '0 5px 0 0' : '0 0 0 5px')};
  user-select: none;
  background: transparent;

  span {
    transition: all 0.2s ease-in;
  }

  :hover {
    background: #5a99ff;
    border-color: #d1d1d1;
    color: #000;

    span {
      color: #fff;
    }
  }
`
