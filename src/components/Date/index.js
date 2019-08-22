import React from "react";
import { ContainerCalendar, Container, Item, Title, TitleCalendar, Transaction, ButtonAdd } from "./styled";
import AddIcon from '@material-ui/icons/Add';

const Date = props => {
  const {item, index, randomColor} = props
  const ItemRef = React.useRef(null);
  const addNewAdd = () => {
    console.log("ItemRef", ItemRef.current.offsetTop, ItemRef.current.offsetLeft);
  }
  return (
    <Item inweek={4} ref={ItemRef}>
      <Title>
          {item}
      </Title>
      {
        index%2 === 0 ? (
          <>
          <Transaction color={randomColor()}>
            {Math.floor(Math.random() * 10000)}
          </Transaction>
          <Transaction color={randomColor()}>
              {Math.floor(Math.random() * 10000)}
          </Transaction>
          </>
        ) : (
          <>
          <Transaction color={randomColor()}>
            {Math.floor(Math.random() * 10000)}
          </Transaction>
          </>
        )
      }
      <ButtonAdd onClick={() => addNewAdd()}>
        <AddIcon></AddIcon>
      </ButtonAdd>
    </Item>
  )
}

export default Date;