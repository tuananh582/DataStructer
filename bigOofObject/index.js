let instructor={
    firstName:'Kelly',
    isInstructor:true,
    favortiteNumbers:[1,2,3,4]
}
console.log(Object.keys(instructor));//0(n)
console.log(Object.entries(instructor))//O(n)
console.log(instructor.hasOwnPreperty('firtName'))// O(1)