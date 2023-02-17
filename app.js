class Student{
   constructor (firstName, lastName, idNumber, classRoom) {
     this. firstName = firstName;
     this. lastName = lastName;
     this. idNumber = idNumber;
    this.classRoom = classRoom;}}
class Commands{
    register(student){
        const allstudents = document.getElementById("all-students");
        let row = document.createElement("tr")
        row.innerHTML=`
        <td> ${student.firstName}</td>
        <td> ${student.lastName}</td>
        <td> ${student.idNumber}</td>
        <td> ${student.lastName}</td>
        <td> <a href="#" class="remove-student">❎</td>`;
        allstudents.appendChild(row)



    }
    emty(){
        document.getElementById("firstname").value=""
        document.getElementById("lastname").value=""
        document.getElementById("idNumber").value=""
        document.getElementById("classRoom").value=""
    }
    checkemty(){
        if(firstname.value==="" || lastname.value==="" || document.getElementById("idNumber").value==="" || classRoom.value==""){
            document.getElementById("error").classList.remove("d-none")
            document.getElementById("error").classList.add("alert-warning")
           
            return true
        }else{
            let erorel =document.getElementById("error")
            erorel.classList.add("alert-success");
           
            
            erorel.innerText="success registration"
            
            document.getElementById("error").classList.remove("d-none")
            return false

        }
    }

    
        // if(element.classList==="remove-student"){
        //     let BADY = document.querySelector("tbody")
        //     BADY.innerHTML=""



            // element.innerText=""
            // element.classList.add("d-none")
            // element.parentElement.parentElement.remove()
        }
   


// }
 const handleFormSubmit = (e) =>{
  e. preventDefault();
   const firstname = document.getElementById("firstname").value;
   const lastname = document.getElementById("lastname").value;
   const idnumber =document.getElementById("idNumber").value;
   const classroom= document.getElementById("classRoom").value;
   let Students=new Student(firstname,lastname,idnumber,classroom);

   const comand=new Commands()
   comand.checkemty()
   if(comand.checkemty()===false){
    document.getElementById("error").classList.add("alert-success")
  
    comand.register(Students)
    comand.emty()

   }
   
   
   

 }



//Event listener




// (element)=>{
//     // let BADY = document.querySelector("tbody")
//     // element.preventDefault()
 
//     // console.log(clicked)
//     // const comand=new Commands()
//     // comand.deletingStudent(element.target)
    
//  })







function deletingStudent(element){
    element.preventDefault()
    let remo=document.querySelector('.remove-student')
    if(element.target.classList.contains("remove-student")){
        element.target.parentElement.parentElement.remove()

    }


}
document.getElementById("book-form").addEventListener("submit", handleFormSubmit);
document.getElementById("all-students").addEventListener("click",deletingStudent)