import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';


export const ContainerCalendar = styled.div`
  width: 50%;
  margin: 0 auto;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-start: 3;
`;

export const Item = styled.div`
  height: 150px;
  border: 1px solid #f1f1f1;
  background: #e2d6d6ad;
  position: relative;
  &:first-child {
    grid-column-start: ${props=> props.inweek};
  }
`

export const Title = styled.div`
  font-size: 20px;
  text-align: center;
`
export const Transaction = styled.div`
  background: ${props=>props.color};
  color: #fff;
  margin-left: 3px;
  padding: 3px;
  border-radius: 5px;
  font-size: 12px;
  width: 90%;
  margin-top: 10px;
`

export const TitleCalendar = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
`

export const ButtonAdd = styled(Fab)`
  position: absolute !important;
  width: 36px !important;
  height: 36px !important;
  bottom: 0 !important;
  right: 0 !important;
`