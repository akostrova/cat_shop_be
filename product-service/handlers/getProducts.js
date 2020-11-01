import catList from './catList.json';

export const getProductsList = async (event) => {
    console.log('Lambda invocation with event: ', event);
    return {
        statusCode: 200,
        body: JSON.stringify(catList),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        }
    };
};