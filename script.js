'use strict';

console.log('загрузка');

const store = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('идет подготовка');
        const product = {
            name: 'TV',
            prace: '2999'
        };
        
        resolve(product);
    }, 2000);
});

store.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = true;
            resolve(product); // или reject()
        }, 2000);  
    }); 
}).then(data => {
    data.perfect = 'beautiful';
    return(data)
}).then(data => {
    console.log(data);
}).catch(() => {
    console.error('произошла ошибка')
}).finally(() => {
    console.log('конец программы')
})

// -------------------------------------------  метод .all --------------------------------------------------------------------------------

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('all')
})

// ------------------------------------------- метод .race --------------------------------------------------------------------------------

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('race')
})
