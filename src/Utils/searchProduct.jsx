let isOk = true;

const SearchProduct = (time, task, idItem) => {
    return new Promise((resolve, reject) => {
        const newSearch = task.find(item => item.id === parseInt(idItem));

        setTimeout(() => {
           if (isOk){
               resolve(newSearch);
           } else {
               reject('Error');
           }
        }, time);
    })
}

export default SearchProduct; 