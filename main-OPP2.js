function calBMI(){
    console.log("this calBMI = ",this); // this ko phai la john ma la window
    return this.mass/(this.height*this.height);
}
var calBMI2 = function(){
    console.log("this calBMI2 = ",this); // this ko phai la mark ma la window
    return this.mass/(this.height*this.height);

}
console.log("typeof calBMI= ",typeof calBMI); // Kieu du lieu dac biet: ham
console.log("typeof calBMI2= ",typeof calBMI2);


var john={
    fullName:"John Smith",
    mass:60,
    height:1.65,
    BMI: calBMI  // Tro dia chi ham o ngoai vao
    // calBMI = function(){
    //     return this.mass/(this.height*this.height);

    // }

}
var mark={
    fullName:"Mark Smith",
    mass:70,
    height:1.8,
   // BMI=calBMI()// Loi goi ham
    BMI: calBMI2
    // calBMI = function(){
    //     return this.mass/(this.height*this.height);

    // }

}
// calBMI();
// calBMI2();
    // console.log(calBMI2());
    console.log("BMI John = ",john.BMI());
    console.log("BMI Mark = ",mark.BMI());