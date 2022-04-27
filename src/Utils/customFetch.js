let isOk = true;

const CustomFetch = (time, task, idCategory) => {
    return new Promise((resolve, reject) => {
        const categorySearch = task.filter(item => item.category === idCategory);
        setTimeout(() => {
           if (isOk){
               resolve(categorySearch);
           } else {
               reject('Error');
           }
        }, time);
    })
}

export default CustomFetch; 