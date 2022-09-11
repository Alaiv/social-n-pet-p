import {useMemo} from "react";

export const useTotalPages = (totalCount) => {

   return  useMemo(() => {
        const totalPages = []

        for (let i = 1; i < totalCount; i++) {
            totalPages.push(i)
        }
        return totalPages
    }, [totalCount])

}