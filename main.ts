

//--------------TASK 1---------------------------


// let city: string;
// city = 'Киів';
// city = 'Львів';
// let adress: string = city;
// console.log(adress);



//-----------------------TASK 2--------------------------


// let number: number = Number(prompt('Enter number'));
// if(number != 0){
//     console.log((number%2 ? 'Число не парне' : 'Число парне'));
// }
// else{
//     console.log('Число 0');

// }


//-------------------TASK 3--------------------------



// let arr: Array<number>;

// max(5,-2)
// max(5,-2,30,6)


// function max(...numbers: Array<number>): void{
//     numbers.sort((a,b) => a-b);
//     console.log(numbers[numbers.length -1]);
// }


//----------------------TASK 4------------------------------


// function getSqrt(number?): void {

//     if (number == undefined) {
//         console.log('Please enter a number!!!');

//     }
//     else {
//         if (typeof number == 'number') {
//             if (number < 0) {
//                 console.log('Enter value higher than 0!!!');

//             }
//             else {
//                 console.log(Math.sqrt(number));

//             }
//         }
//         else {
//             console.log('Must be only a number!!!');

//         }
//     }


// }

// getSqrt()
// getSqrt('hello')
// getSqrt(-100)
// getSqrt(100)

//--------------------------TASK 5------------------------------------


let words: Array<string> = [];


document.querySelector('#add_BTN').addEventListener('click',function(){
    let newWord:string = (document.querySelector('#input_world') as HTMLInputElement).value;
    words.push(newWord);
    renderBadWords();
    (document.querySelector('#input_world') as HTMLInputElement).value = ''    
})

document.querySelector('#reset_BTN').addEventListener('click',function(){
    document.querySelector('.bad').textContent = ''
    words = [];
    (document.querySelector('#text_cenzor') as HTMLInputElement).value = ''
})


function renderBadWords(): void{
    document.querySelector('.bad').textContent = '';
    for(let i = 0;i<words.length;i++){
        if(i == 0){
            document.querySelector('.bad').textContent = words[i]
        }
        else{
            document.querySelector('.bad').textContent += `,${ words[i]}` 
        }
    }
}

document.querySelector('#cenzor').addEventListener('click',function(){
    
    for(let i = 0;i<words.length;i++){
        let text:string = (document.querySelector('#text_cenzor') as HTMLInputElement).value;
        replaceAll(text,words[i])
    }
    
})



function replaceAll(str:string, find:string) {
    let replace:string ='';
    for(let i = 0;i<find.length;i++){
        replace += '*'
    }
    str = str.replace(new RegExp(find, 'g'), replace);
    (document.querySelector('#text_cenzor') as HTMLInputElement).value = str;

}




