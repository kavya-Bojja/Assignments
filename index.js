//12. Write program to call the getUsers then print users using callback, promise.
function getUsers(id,name)
{
    return {
        id:id,
        name:name
    }
}

function getting(callback)
{
    let user = getUsers("1","kavya");
    console.log(user);
    callback(user);
}
function display(data)
{
    console.log("The data is:",data)
}
getting(display); //Using Callback

//Using Promise

function getdb(){
    return new Promise(function(resolve,reject)
    {
        console.log("Going to see user data")
        setTimeout(function(){
            resolve({
                id: 1234,
              name: "Anamika",
               age: 24
            })
        },3000)
    })
}
function getfromDb()
{
    getdb().then(function(res){
        console.log("The data is:",res)
        display2();
        unique();
    })

}
function display2()
{
    console.log("Displayed Succesfully")
}
getfromDb();


//18) Write a program to check number is palindrome or not.

function palin()
{
    var num = parseInt(prompt("Enter a number: "));
var temp, sum = 0, r;
temp = num;
console.log(temp);
while(num > 0)
{
r = num % 10;
num =  parseInt(num / 10) ;
sum = (sum * 10) + r;
}
if (sum == temp) {
document.getElementById('pali').innerHTML = "Palindrome Number" ;
} else {
document.getElementById('pali').innerHTML = "Not a palindrome";
    }
}

//19) Write a program to remove duplicate from array [30,45,60,20,30,55]

function unique()
{
    let arr = [30,45,60,20,30,55];
    let uniq_arr= [new Set(arr)];
    console.log(uniq_arr);
}
//unique() initialized in promise


  
