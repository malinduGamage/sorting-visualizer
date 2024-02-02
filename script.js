let arr =[]
let divList = []
let n;

function enable() {
    for (let i = 0 ; i<6 ; i++){
        document.getElementById(`id-${i}`).disabled = false;
    }
}

function disable() {
    for (let i = 0 ; i<6 ; i++){
        document.getElementById(`id-${i}`).disabled = true;
    }
}

function wait(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ms)
      }, ms )
    })
  } 

function randArray(len) {
    n=len
    arr = []
    for (let i=0; i<len; i++){
        arr.push(Math.round(Math.random() * 35))
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
        enable()
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
        enable()
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

async function quickSort(array=arr, start = 0, end = arr.length -1) {
    disable()
    if(end<=start){
        enable()
        return;
    }

    for(let k = start;k<=end;k++){
        divList[k].style.backgroundColor = "grey"
    }

    await wait(100)

    let pivot = array[end];
    let i = start -1;
    let temp;

    await wait(100)
    divList[end].style.backgroundColor = "red"

    for(let j = start;j<=end;j++){
        if(array[j]<pivot){
            i++;
            temp=array[i];
            array[i]=array[j];
            array[j]=temp;
            await wait(50)
            divList[j].style.height = `${array[j]}em`
            divList[i].style.height = `${array[i]}em`
            
            }
    }

    await wait(100)

    for(let k = start;k<=end;k++){
        divList[k].style.backgroundColor = "green"
    }

    i++;
    temp=array[i];
    array[i]=pivot;
    array[end]=temp;

    divList[end].style.height = `${array[end]}em`
    divList[i].style.height = `${array[i]}em`

    await quickSort(array,start,i-1);
    await quickSort(array,i+1,end);
}

async function selectionSort()
{
    let min_idx;
    // One by one move boundary of
    // unsorted subarray
    for (let i = 0; i < n-1; i++)
    {
        // Find the minimum element in
        // unsorted array
        min_idx = i;
        for (let j = i+1; j < n; j++)
        {
          if (arr[j] < arr[min_idx]){
            min_idx = j;
            
          }
              
        }
        divList[min_idx].style.backgroundColor = "red"
        await wait(100)
        // Swap the found minimum element
        // with the first element
        if (min_idx!=i){
            [arr[min_idx], arr[i]]=[arr[i], arr[min_idx]];
            divList[i].style.height = `${arr[i]}em`;
            divList[min_idx].style.height = `${arr[min_idx]}em`;
            divList[min_idx].style.backgroundColor = "blue"
            divList[i].style.backgroundColor = "green"
            await wait(100)
        }
        divList[i].style.backgroundColor = "green"
        
    }
    divList[divList.length-1].style.backgroundColor = "green"
    enable()

}



function init(arrayLength) {
    let inputVal = document.getElementById("id-0").value
    arrayLength = parseInt(inputVal)
    randArray(arrayLength)
    create(arrayLength)
}

async function exe (id){

    disable()
    switch (id) {
        case "id-1":
            bubbleSort()
            break;
        case "id-2":
            insertionSort()
            break;
        case "id-3":
            await quickSort()
            break;
        case "id-4":
            selectionSort()
            break;
        default:
            break;
    }
}