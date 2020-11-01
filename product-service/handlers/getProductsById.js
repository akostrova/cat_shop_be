import catList from './catList.json';

export const getProductsById = async (event) => {
    const { productId } = event.pathParameters;
    console.log('Lambda invocation with event: ', event);
    console.log('Lambda invocation with productId: ', productId);

    if (productId < 0 || productId > 3) {
        return {
            statusCode: 404,
            body: JSON.stringify({"message": "No such cat id. There are 3 cats only."})
        };
    } else {
        let catListElement = catList[productId - 1];
        console.log('Lambda result body catListElement: ', catListElement);
        return {
            statusCode: 200,
            body: JSON.stringify(catListElement)
        };
    }
};