// given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

function solution(A) {
    // Implement your solution here
    let result =1;
    let temp =[];
    let mySet;
    let B = A.sort();
    if(B[0] === 0){
        B.shift();
    }
    for(let x=0; x<B.length; x++){
        for(let y=1; y<B.length; y++)
        {
            let add = B[x] + B[y];
            if(!B.includes(add)){
                temp.push(add);
            }
        }
    }

    if(temp.length >0){
        temp.sort();
        temp.sort(sorter);
        result = temp[0];
    }
    return result;
}

function sorter(a, b){
    return a - b;
}
  
console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));


