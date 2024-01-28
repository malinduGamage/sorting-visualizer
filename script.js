let arr =[]
let divList = [];

function randArray(n) {
    arr = []
    for (let i=0; i<n; i++){
        arr.push(Math.round(Math.random() * 50))
    }
}

function create(arrayLen){

    let my_container = document.getElementById("my-container")
    let new_element;
    divList = [];

    while (my_container.firstChild) {
        my_container.removeChild(my_container.lastChild);
    }

    for(let i = 0; i < arrayLen; i++){
        new_element = document.createElement('div')
        new_element.setAttribute("style",`
            background-color:blue;
            width:1em;
            margin:1px;
            align-self: flex-end;`);
        new_element.setAttribute("id",`${i}`)
        new_element.style.height = `${arr[i]}em`
        my_container.appendChild(new_element);
        divList.push(new_element)
    }
}

function bubbleSort(i=0,j=0,array=arr,n=array.length){
    
    if (j>=n-i-1){
        if(j>=2){
            divList[j-1].style.backgroundColor = "blue"
            divList[j].style.backgroundColor = "green"
        }
        
        i++
        j=0
    }
    if (i>=n-1){
        divList[j].style.backgroundColor = "green"
        divList[j+1].style.backgroundColor = "green"
        return
    }
    if(array[j]>array[j+1]){
        [array[j],array[j+1]] = [array[j+1],array[j]]     
    }
    setTimeout(()=>{
        if(j>0){
            divList[j-1].style.backgroundColor = "blue"
        }    
        divList[j].style.height = `${array[j]}em`
        divList[j+1].style.height = `${array[j+1]}em`
        divList[j].style.backgroundColor = "red"
        divList[j+1].style.backgroundColor = "red"
        bubbleSort(i,j+1,array,n)
        
    },Math.round(800/n))
    
}

function insertionSort(i=1, j=0, array=arr, n=arr.length) {
    if(( j < 0 || array[j] <= array[j+1])){
        
        i++
        j = i-1
    }
    if( i >= n ){
        return
    }
    if( array[j]>array[j+1]){
        [array[j],array[j+1]] = [array[j+1],array[j]]
    }
    setTimeout(()=>{

        divList[j].style.height = `${array[j]}em`
        divList[j+1].style.height = `${array[j+1]}em`
        divList[j].style.backgroundColor = "green"
        divList[j+1].style.backgroundColor = "green"
        insertionSort(i, j-1, array, n)
        
    },Math.round(800/n))
    
}

function init(arrayLength = 50) {
    let inputVal = document.getElementById("arrayLen").value
    if (inputVal.trim() !== ""){
        arrayLength = parseInt(inputVal)
    }

    randArray(arrayLength)
    create(arrayLength)
}