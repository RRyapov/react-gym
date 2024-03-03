import React from "react";
import { programStorage } from "../../stores/programsStore";
import { observer } from "mobx-react-lite";
import {
  PaginationLayout,
  PaginationBlock,
  PaginationLi,
} from "./PaginationLayout";

function Pagination() {
  const { pageCount, pageNumber, setPageNumber, chosenPage } = programStorage;
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationLayout>
      <PaginationBlock>
        {pageNumbers.map((number) => (
          <PaginationLi
            isActive={pageNumber === number}
            key={number}
            onClick={() => {
              setPageNumber(number);
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
