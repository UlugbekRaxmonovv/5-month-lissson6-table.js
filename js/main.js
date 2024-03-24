const inputName =document.querySelector('.form__input-name')
const inputAge =document.querySelector('.form__input-age')
const form =document.querySelector('.form')
const tbody =document.querySelector('.table tbody ')

const DATA  =[
    {
        id:'id-1',
        name:'John',
        age:'29'
    }
]
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    let newUser={
        id:`id ${new Date ().getTime()}`,
        name: inputName.value,
        age: +inputAge.value
    }
    DATA.push(newUser)
    console.log(DATA);
    createTable(DATA);
    inputName.value =''
    inputAge.value =''
})

function createTable(data){
    while(tbody.firstChild){
        tbody.firstChild.remove()
    }
    data.forEach((user,index)=> {
        let tr = document.createElement('tr')
        tr.innerHTML=`

        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td><button  onclick="deleteUser(${index})" class="btn-danger">Delete</button></td>
        
        ` 
        tbody.appendChild(tr)    
    });

}
createTable(DATA)


function deleteUser(index){
    DATA.splice(index,1)
    createTable(DATA)

}
