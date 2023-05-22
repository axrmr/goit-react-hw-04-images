const countTotalPage = (totalItems, perPage) => {
    return Math.floor(totalItems / perPage);
};

export default countTotalPage;
