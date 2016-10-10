//hello world
// console.log('hello, world');

// setTimeout(function(){
//     console.log('Hello world again!')}, 10000);


//interval
// setInterval(function(){
//     console.log('Hello world');
// }, 3000);

function createInterval () {setTimeout(function(){
    console.log('Hello world!');
    return createInterval();}
    , 3000);
    return 'Hello';
}

console.log(createInterval());