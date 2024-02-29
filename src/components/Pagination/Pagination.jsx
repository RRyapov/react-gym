import React, { useState } from "react";
import { programStorage } from "../../stores/programsStore";
import { observer } from "mobx-react-lite";
import {
  PaginationLayout,
  PaginationBlock,
  PaginationLi,
} from "./PaginationLayout";

function Pagination() {
  const { getPaginatedPrograms, selectChosenPage, chosenPage } = programStorage;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(15 / 3); i++) {
    pageNumbers.push(i);
  }

  const [activeLi, setActiveLi] = useState(false);

  return (
    <PaginationLayout>
      <PaginationBlock>
        {pageNumbers.map((number) => (
          <PaginationLi
            className={chosenPage === number ? "activeLiStyle" : ""}
            key={number}
            onClick={() => {
              getPaginatedPrograms(number);
              selectChosenPage(number);
              console.log(number);
            }}
          >
            {pageNumbers.indexOf(number) + 1}
          </PaginationLi>
        ))}
      </PaginationBlock>
    </PaginationLayout>
  );
}

export default observer(Pagination);
