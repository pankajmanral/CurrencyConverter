const convertButton = document.querySelector("#convertButton")

convertButton.addEventListener('click',function(){
    const convertDiv = document.querySelector("#convertDiv")
    convertDiv.classList.remove('h-1/2');
    convertDiv.classList.add('h-4/6');

    const convertedAmt = document.querySelector("#amount")
    convertedAmt.classList.remove("hidden");
    convertedAmt.classList.add("block");
})