let isOk = true;

const SearchProduct = (time, task, idItem) => {
    return new Promise((resolve, reject) => {
        const newSearch = task.filter(item => item.id === parseInt(idItem));
        console.log("aca");
        console.log(newSearch);
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