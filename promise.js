function add(nums) {
    return new Promise((resolve,reject) => {
        if(Array.isArray(nums)) {
            let result = nums.reduce((a,b) => a+b );
            resolve(result);
        } else {
            reject();
        }
    }
    );
}

async function sum(nums) {
    try {
        let result = await add(nums);
        console.log(`Result : ${result}`);
    } catch {
        console.log('Something wrong! ')
    }
}

sum([1,2])
console.log("This is last")