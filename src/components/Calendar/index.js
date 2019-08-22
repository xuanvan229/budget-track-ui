import React from "react";
import { ContainerCalendar, Container, Item, Title, TitleCalendar, Transaction, ButtonAdd } from "./styled";
import AddIcon from '@material-ui/icons/Add';
import Date from '../Date';
const date = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
const colors = ["#7FDBFF", "#39CCCC", "#FF851B", "#F012BE", "#001f3f"]
const dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const Calendar = props => {
  const randomColor = () => colors[Math.floor(Math.random()*colors.length)];
  return (
    <ContainerCalendar>
      <Container>
        {dates.map((item, index) => <TitleCalendar>
          {item}
        </TitleCalendar>)}
      </Container>
      <Container>
        {date.map((item, index) => 
          <Date item={item} index={index} randomColor={randomColor}>
            
          </Date>
        )}
      </Container>
    </ContainerCalendar>
  )
}
export default Calendar;
