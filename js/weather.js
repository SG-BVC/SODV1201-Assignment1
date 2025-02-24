document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('convert_button').addEventListener('click', function () {
        const temp_input = parseFloat(document.getElementById('temp_input').value);
        const unit = document.getElementById('unit_select').value;

        if (isNaN(temp_input)) { // non-number input
            document.getElementById('result').textContent = "Please enter a valid number.";
            return;
        }

        let convertedTemps = convertTemperature(temp_input, unit);
        if (convertedTemps.error) { // If the function throws a temperature error
            document.getElementById('result').textContent = convertedTemps.error;
        } else { // Sucess
            document.getElementById('result').textContent = convertedTemps.result;
        }
    });
});

function convertTemperature(value, fromUnit) {
    let celsius;

    // Convert input to Celsius first
    if (fromUnit === "fahrenheit") {
        if (value < -459.67) return { error: "Temperature cannot be below absolute zero!" };
        celsius = (value - 32) * 5 / 9;
    } else if (fromUnit === "celsius") {
        if (value < -273.15) return { error: "Temperature cannot be below absolute zero!" };
        celsius = value;
    } else if (fromUnit === "kelvin") {
        if (value < 0) return { error: "Temperature cannot be below absolute zero!" };
        celsius = value - 273.15;
    } else {
        return { error: "Invalid unit selected." };
    }

    // Convert Celsius to other units
    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    return {
        // Return all 3 units for the message
        result: `${value}°${fromUnit.charAt(0).toUpperCase()} is equal to ${fahrenheit.toFixed(2)}°F, ${celsius.toFixed(2)}°C, and ${kelvin.toFixed(2)}K.`
    };
}