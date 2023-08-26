
const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.querySelector('#temp_diff');
    const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;
window
    const celTOfah = (cel) => {
        let fahr = (cel * (9 / 5) + 32);
        return fahr;
    }
    const fahTOcel = (fehr) => {
        let cel = ((fehr - 32) * 5 / 9);
        return cel;
    }
    let result;
    if (valeTemp == "cel") {
        result = celTOfah(numberTemp);
        document.getElementById('sum').innerHTML = `= ${result}°Fahrenheit`;
    } else {
        result = fahTOcel(numberTemp);
        document.getElementById('sum').innerHTML = `= ${result}°Celsius`;
    }
    setTimeout(() => {
        window.location.reload();
    }, 4500);
}
