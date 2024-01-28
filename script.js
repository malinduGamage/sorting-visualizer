let arr =[]
let divList = []
let n;

function randArray(len) {
    n=len
    arr = []
    for (let i=0; i<len; i++){
        arr.push(Math.round(Math.random() * 40))
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
        new_element.setAttribute("class",`bars`)
        new_element.style.height = `${arr[i]}em`
        my_container.appendChild(new_element);
        divList.push(new_element)
    }
}

function bubbleSort(i=0,j=0,array=arr){
    
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
        bubbleSort(i,j+1,array)
        
    },Math.round(800/n))
    
}

function insertionSort(i=1, j=0, array=arr) {
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
        insertionSort(i, j-1, array)
        
    },Math.round(800/n))
    
}

function quickSort(array=arr, start = 0, end = arr.length -1) {
    if(end<=start){return;}
    let pivot = array[end];
    let i = start -1;
    let temp;

    for(let j = start;j<=end;j++){
        if(array[j]<pivot){
            i++;
            temp=array[i];
            array[i]=array[j];
            array[j]=temp;

            divList[j].style.height = `${array[j]}em`
            divList[i].style.height = `${array[i]}em`
            divList[j].style.backgroundColor = "green"
            divList[i].style.backgroundColor = "green"
            }
    }

    i++;
    temp=array[i];
    array[i]=pivot;
    array[end]=temp;

    divList[end].style.height = `${array[end]}em`
    divList[i].style.height = `${array[i]}em`
    divList[end].style.backgroundColor = "green"
    divList[i].style.backgroundColor = "green"

    setTimeout(()=>{

        quickSort(array,start,i-1);
        setTimeout(()=>{

        
            quickSort(array,i+1,end);
            
        },Math.round(800/n))
    
        
    },Math.round(800/n))

    
    
}

function init(arrayLength) {
    let inputVal = document.getElementById("vol").value
    arrayLength = parseInt(inputVal)
    randArray(arrayLength)
    create(arrayLength)
}