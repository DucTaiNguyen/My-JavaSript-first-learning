// var students={
//     fullName:'Nguyen van a',
//     year:1990,
//     scores:{ // trong Object co Object
//         maths:9,
//         physics:7.5,
//         chemistry:5,
//     },
//     calAverage: function(){
//         console.log("Run CalAvaerage");
//         // This ==> tro den doi tuong hien tai
//         console.log(" day la con tro this: ",this);
//         var maths=this.scores.maths;
//         var physics=this.scores.physics;
//         var chemistry=this.scores.chemistry;
//         return (maths+physics+chemistry)/3;
        
//         //tinh toan ben trong scores
//     }
// }; console.log("students= ",students);
// console.log("students fullName= ",students.fullName);// Cach truy xuat vao thuoc tinh cua 1 Object
// console.log("students diem Hoa= ",students.scores.chemistry);
// console.log("diem trung binh= ",students.calAverage());// Xuat truc tiep gia tri qua goi ham truc tiep



       /*
            Tao object:
            1. Object literal: tao doi tuong don
            2. Ham tao: tao nhieu doi tuong
            3. Object.create()
            4. Class: tao nhieu doi tuong        
        */




        var cat={
            name:'tom',
            age: 3,
            address:'USA',
            eat:function(){
                // to do...
                console.log(this);
                return "cat is eating";
            }
        }
        console.log(cat.eat());


        function Person(name, address, email){
            
            this.name= name;
           this.address=address;
           this.email=email;
           this.fullName=function(){
               console.log('tra ve con tro this tai ',this); // Khong tra ve con tro this duoc
               return this.name;
           }                
        }
        
        var nam=new Person("Tran van Nam","Hanoi","nam@gamail.com");
        console.log(nam.fullName());
        var tom=Object.create(Object.prototype,{
            fullName: {
                value:"Hoang VAn HUng",
                writable: true
            }            

        });
        console.log(tom.fullName);
    
      

        class Animal{
            constructor(){
                this.name="BOb";
                this.age=3;
            }
            bark(){
                console.log("con tro this tai: ",this);
                return "fdf fads fasdf ";
            }
        }
        var dog= new Animal();
        console.log(dog.bark());
        //console.log(Animal.bark()); // class thi ko goi truc tiep duoc
        let board = [
        ['O','X','O'],
        ['X','X','O'],
        ['X','O','X']
        ];
        let player1='X';
        let player2='O';
        function setup() {
          createCanvas(400, 400);
        }
        
        function draw() {
          background(220);
          let w=width/3;
          let h=height/3;
          for(let i=0;i<3;i++){
              for(let j=0;j<3;j++){
                let x=w*i;
                let y=h*j;
                textSize(32);
                let spot=board[i][j];
                text(spot,x,y)}
          }
        }