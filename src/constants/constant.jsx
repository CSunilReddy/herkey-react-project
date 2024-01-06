
const allProductsApiUrl = 'https://dummyjson.com/products';

export const homePageCarouselList  = [
    {
      src: 'https://picsum.photos/id/123/1200/400',
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
    },
    {
      src: 'https://picsum.photos/id/456/1200/400',
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
    },
    {
      src: 'https://picsum.photos/id/678/1200/400',
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
    },
];

export const makeApiCall = async (url) =>{
  try{
    const data = await fetch(url)
              .then(res => res.json())
              .then(data => data);
    return data
  } catch (ex) {
    console.log(ex.message)
  }
}

export const getProductsLists = async() => {
  try{
    const data = await makeApiCall(allProductsApiUrl)//'https://dummyjson.com/products'
    return data.products
  } catch (ex) {
    console.log(ex.message)
  }
}