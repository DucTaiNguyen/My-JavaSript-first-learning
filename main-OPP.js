// key: value
var students={
    fullName:'Nguyen van a',
    year:1990,
    scores:{ // trong Object co Object
        maths:9,
        physics:7.5,
        chemistry:5,
    },
    calAverage: function(){
        console.log("Run CalAvaerage");
        // This ==> tro den doi tuong hien tai
        console.log(" day la con tro this: ",this);
        var maths=this.scores.maths;
        var physics=this.scores.physics;
        var chemistry=this.scores.chemistry;
        return (maths+physics+chemistry)/3;
        
        //tinh toan ben trong scores
    }
};
console.log("students= ",students);
console.log("students fullName= ",students.fullName);// Cach truy xuat vao thuoc tinh cua 1 Object
console.log("students diem Hoa= ",students.scores.chemistry);
//var aver=students.calAverage(); // Tao 1 bien de hứng gia tri cua hàm
//console.log("diem trung binh= ",students.aver());
console.log("diem trung binh= ",students.calAverage());// Xuat truc tiep gia tri qua goi ham truc tiep


console.log("======================================");
var student2= new Object(); // Day la Obj rỗng
console.log("student2 rong: ",student2);
student2.fullName='Nguyen van b';
student2.year=1992;
student2.scores={
    maths:9,
    physics:5,
    chemistry:8,
}
student2.calAverage=students.calAverage;// Dang tro dia chi cua ham sau cho ham truoc trong cach ghi
// student2.calAverage = function(){
//     var maths=this.scores.maths;
//         var physics=this.scores.physics;
//         var chemistry=this.scores.chemistry;
//         return (maths+physics+chemistry)/3;
// }
console.log("student2 sau khi them: ",student2);
console.log("student2 calAverage: ",student2.calAverage());
console.log("student2(['fullName'])",student2['fullName']);

var objDemo={
    "full-name":"Nguyen van C"
}
console.log("objDemo = ",objDemo);
console.log("objDemo.full-name = ",objDemo.fll-name);
console.log("objDemo['full-name'] = ",objDemo['full-name']);




