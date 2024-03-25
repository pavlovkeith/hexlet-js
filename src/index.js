// import _ from 'lodash';

export default (yearsAgo) => {
    const currentYear = new Date().getFullYear();
    return currentYear - yearsAgo;
};
