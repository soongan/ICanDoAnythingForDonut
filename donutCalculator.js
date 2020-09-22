/* 도넛, 기준 보내주면 기준별로 정렬해서 도넛 배열을 돌려준다. */
export const donutsSortedBy = ({ criteria, donutList }) => {
    return donutList.sort((j, k) => j.kcal - k.kcal);
};