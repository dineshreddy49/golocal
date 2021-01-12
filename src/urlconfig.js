export const api = 'https://golocal999.herokuapp.com/api';

const generatePublicUrl = (fileName) => {
    return `https://golocal999.herokuapp.com/api/picture/${fileName}`;
}
export default generatePublicUrl;
