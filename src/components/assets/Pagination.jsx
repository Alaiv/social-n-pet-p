import React, {useMemo} from 'react';
import MyButton from "../UI/MyButton";
import {useState} from "react";
import {useTotalPages} from "./hooks/useTotalPages";

const Pagination = ({ totalCount,  setPage}) => {
    const [portion, setPortion] = useState(1)
    const totalPages = useTotalPages(totalCount)

    const firstPage = (portion - 1) * 15 + 1
    const lastPage = portion * 15

    return (
        <>
            {firstPage > 1 &&
                <MyButton onClick={() => setPortion(portion - 1)}>prev</MyButton>}
            {totalPages
                .filter(c => c >= firstPage && c <= lastPage)
                .map(p => <span key={p} onClick={() => setPage(p)} style={{padding: 5, cursor: 'pointer'}}>{p}
                </span>)}
            <MyButton onClick={() => setPortion(portion + 1)}>next</MyButton>
        </>
    )
};

export default Pagination;