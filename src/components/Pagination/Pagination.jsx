import React from "react";
import { programStorage } from "../../stores";
import { observer } from "mobx-react-lite";
import { PaginationLayout, PaginationBlock, PaginationLi } from "./styles";

function Pagination() {
  const { pageCount, pageNumber, setPageNumber } = programStorage;
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
