import { Board, BoardItem} from "@cloudscape-design/board-components";
import { Header, ButtonDropdown } from "@cloudscape-design/components";
import React, { useMemo } from "react";

import { createBoardI18nStrings } from "./i18nStrings.js";
import { EmptyBoard } from "./EmptyBoard.js";

import TargetForAction from '../TargetForAction/TargetForAction.js'
import FCM from "../FCM/FCM.js";

export const WidgetBoard = () => {
  console.log("Board render")

  const [items, setItems] = React.useState([
    {
      id: "targetForAction",
      rowSpan: 4,
      columnSpan: 4,
      data: { 
          title: "Target For Actions", 
          content: <TargetForAction key="targetForAction" />
      }
    },
    {
      id: "fcm",
      rowSpan: 4,
      columnSpan: 4,
      data: { 
          title: "FCM", 
          content: <FCM key="fcm"/>
      }
    }
  ]);


  const i18n = {
              dragHandleAriaLabel: "Drag handle",
              dragHandleAriaDescription:
                "Use Space or Enter to activate drag, arrow keys to move, Space or Enter to submit, or Escape to discard.",
              resizeHandleAriaLabel: "Resize handle",
              resizeHandleAriaDescription:
                "Use Space or Enter to activate resize, arrow keys to move, Space or Enter to submit, or Escape to discard."
            }
  
  const memoItems = useMemo(() => items, [items]);
  const memoI18n = useMemo(() => i18n, []);

  return (
    <Board
      items={memoItems}
      renderItem={(item, actions) => {
        console.log(item);

        return (
            <BoardItem
              data-testid={item.id}
              header={<Header>{item.data.title}</Header>}
              i18nStrings={memoI18n}
              settings={
                <ButtonDropdown
                  items={[{ id: "remove", text: "Remove" }]}
                  ariaLabel="Board item settings"
                  variant="icon"
                  onItemClick={() => actions.removeItem()}
                />
              }
          >
            {item.data.content}
          </BoardItem>
        );
      }}
      i18nStrings={createBoardI18nStrings()}
      onItemsChange={event =>  setItems(event.detail.items)}
      empty={<EmptyBoard />}
    />
  );
};
