const calculateBtn = document.getElementById("calculate")
const intNumbers = document.querySelectorAll(".int")

document.getElementById("calculate").addEventListener("click", function () {
    const values = Array.from(intNumbers).map(input => parseFloat(input.value));

    const [input1, input2, input3, input4, input5, input6] = values;

    const subtractionResult = input1 - input2 - input3;
    const quotientResult = input4 / input5 / input6;
    const finalResult = subtractionResult + quotientResult;

    
    Swal.fire({
        title: "Calculation Result",
        text: `The sum of the difference and quotient is: ${finalResult}`,
        icon: "success",

    });
    
});