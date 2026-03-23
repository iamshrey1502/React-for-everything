// local storage is a small storage(approximately 5-10MB depending on domain) in our browser to store some data in key-value pair.
// local storage is persistent in nature, it does not get deleted when we close the browser. It will only get deleted when we clear the browser data or when we delete the particular key from local storage.

// to set data in local storage we can use setItem() method of localStorage object. It takes two arguments, first is the key and second is the value.
// to get data from local storage we can use getItem() method of localStorage object. It takes one argument, the key of the data we want to get.
// to remove data from local storage we can use removeItem() method of localStorage object. It takes one argument, the key of the data we want to remove.
// to clear all data from local storage we can use clear() method of localStorage object. It does not take any argument.

// local storage can only store string data, if we want to store any other type of data we need to convert it into string using JSON.stringify() method. And when we want to get that data we need to parse it back to its original form using JSON.parse() method.

// localStorage.setItem("name","Shrey");
// localStorage.setItem("age",22);

// var age=localStorage.getItem("age");
// console.log(typeof(age));// String

// var person={
//     name:"Shrey",
//     age:22,
//     city:"Delhi"
// }
// localStorage.setItem("person",JSON.stringify(person));
// var personString=JSON.parse(localStorage.getItem("person"));
// console.log(personString);

// var name=localStorage.getItem("name");
// console.log(name);

// localStorage.clear();

// localStorage.removeItem("name");
//session storage is similar to local storage but he data gets deleted when we close the browser or even tab. It is also a key-value pair storage and can only store string data. We can use the same methods as local storage to set, get, remove and clear data in session storage. The only difference is that we need to use sessionStorage object instead of localStorage object.