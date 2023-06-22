window.addEventListener("load", () => from.focus());
function convert() {
	let fromValue = document.getElementById("from").value;
	let fromUnit = document.getElementById("fromUnit").value;
	let toUnit = document.getElementById("toUnit").value;
	let toValue;

	switch(fromUnit) {
        case "celsius":
			switch(toUnit) {
				case "celsius":
					toValue = (fromValue * 1);
					break;
				case "fahrenheit":
					toValue = (fromValue * 1.8)+32;
					break;
                case "kelvin":
                    toValue = (fromValue)*1 + 273.15;  
                    break;
			}
			break; 
		case "fahrenheit":
			switch(toUnit) {
				case "celsius":
					toValue = (fromValue - 32) * 0.5556;
					break;
				case "fahrenheit":
					toValue = fromValue * 1;
					break;
                case "kelvin":
                    toValue = (fromValue-32)*5/9 + 273.15;  
                    break
			}
			break;    

            case "kelvin":
                switch(toUnit) {
                    case "celsius":
                        toValue = fromValue - 273.15;
                        break;
                    case "fahrenheit":
                        toValue = (fromValue - 273.15)*1.8 +32;
                        break;
                    case "kelvin":
                        toValue = (fromValue)*1;  
                }
                break;    
	}

	document.getElementById("to").value = toValue.toFixed(2);
}