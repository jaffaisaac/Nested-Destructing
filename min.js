let items ={
    count :2,
    name:'frults',

    apple:{
        Qtn: 25,
        value: 7
    },
    Orange:{
        Qtn:200,
        value:10
    }
}
// const {Orange:{Qtn ,value}} =items;
// console.log({Qtn ,value});

let {apple={}} =items;
console.log(apple);
// let {Orange:{Qtn}} =items;
// console.log(Qtn);
// console.log(items.Orange)