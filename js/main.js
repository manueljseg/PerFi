// Function
function exchange(spend, taxTotal, taxType, category, priority){
    alert(`Datos ingresados.\n Gastaste $${spend} en ${category} (prioridad ${priority}). $${taxTotal * spend} del total fue lo que gastaste en impuestos (${taxType}).`)
    totalSpend.push(`$${spend} gastados en ${category}.`)
}

// Arrays
const categorySpend = ["Comida", "Salud", "Transporte", "Vivienda", "Educación", "Suscripciones", "Gustos", "Donaciones", "Deudas", "Otros"]

const categoryIncome = ["Sueldo", "Ahorro", "Intereses", "Beneficios", "Aguinaldo", "Vacaciones", "Otros"]

const categoryPriority = ["Básica", "Comodidad", "Inversión", "No establecida"]

const categoryTax = ["IVA", "IIBB", "Ganancias", "RG AFIP 4815", "Impuesto PAIS", "No se aplican impuestos"]

const totalSpend = []

do{
    spend = prompt(`Ingresá el monto de tu gasto. Escribe "total" para ver todo lo gastado.`)

    if (spend == "total"){
            alert(totalSpend.join("\n"))
            break;
    }else if (spend == ""){
        alert("No ingresaste correctamente los datos. Por favor, vuelve a intentarlo.")
        break;
    }

    type = prompt(`Ingresá el número de categoría de tu gasto.\n 1 - ${categorySpend[0]}\n 2 - ${categorySpend[1]}\n 3 - ${categorySpend[2]}\n 4 - ${categorySpend[3]}\n 5 - ${categorySpend[4]}\n 6 - ${categorySpend[5]}\n 7 - ${categorySpend[6]}\n 8 - ${categorySpend[7]}\n 9 - ${categorySpend[8]}\n 10 - ${categorySpend[9]}`)

    switch (type){

        case "1":
            exchange(spend, 0.21, categoryTax[0], categorySpend[0], categoryPriority[0])
            break;

        case "2":
            exchange(spend, 0, categoryTax[0], categorySpend[1], categoryPriority[0])
            break;

        case "3":
            exchange(spend, 0.21, categoryTax[0], categorySpend[2], categoryPriority[0])
            break;

        case "4":
            exchange(spend, 0.21, categoryTax[0], categorySpend[3], categoryPriority[0])
            break;
        
        case "5":
            exchange(spend, 0.105, categoryTax[0], categorySpend[4], categoryPriority[0])
            break;

        case "6":
            exchange(spend, 0.4, categoryTax[0, 1, 3, 4], categorySpend[5], categoryPriority[1])
            break;

        case "7":
            exchange(spend, 0.21, categoryTax[0], categorySpend[6], categoryPriority[1])
            break;

        case "8":
            exchange(spend, 0, categoryTax[5], categorySpend[7], categoryPriority[3])
            break;

        case "9":
            exchange(spend, 0.21, categoryTax[5], categorySpend[8], categoryPriority[0])
            break;

        case "10":
            exchange(spend, 0.21, categoryTax[0], categorySpend[9], categoryPriority[3])
            break;

        default:
            alert("No ingresaste correctamente los datos. Por favor, vuelve a intentarlo.")
    }
}while (spend != "total")