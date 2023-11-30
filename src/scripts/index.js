/* Desenvolva sua lógica aqui */

function render(array) {
    const recordsContainer = document.querySelector('.records__container')
    recordsContainer.innerHTML = ''

    array.forEach(element => {
        const liRecords = document.createElement('li')
        const spanValue = document.createElement('span')
        const div = document.createElement('div')
        const pTipo = document.createElement('p')
        const bntApagar = document.createElement('button')

        liRecords.classList.add('record')
        spanValue.innerHTML = `R$ ${element.value.toFixed(2)}`
        pTipo.innerHTML = valuesCategory[element.categoryID]
        bntApagar.innerHTML = '\uD83D\uDDD1\uFE0F'
        bntApagar.id = element.id

        recordsContainer.append(liRecords)
        liRecords.append(spanValue)
        liRecords.append(div)
        div.append(pTipo)
        div.append(bntApagar)

        bntApagar.addEventListener('click', (e) => {
            console.log(e.target.id)
            const idApagar = e.target.id

            const findValue = array.findIndex(value => value.id === idApagar)

            const excluirValue = array.splice(findValue,1)

            render(array)
        })
    });
    emptyDisappear (array)
    sumValue(array)
}

function filter(array) {
    const filtro = document.querySelectorAll('.filter').forEach((element) =>{
        element.addEventListener('click',(event) => {
            // console.log(event.target)
            const filterId = element.id
            if(filterId === 'todos'){
                render(array)
            }else if(filterId == 0){
                const entrada = array.filter((e) => e.categoryID === 0)
                render(entrada)
            }else if(filterId == 1){
                const saida = array.filter((elm) => elm.categoryID === 1)
                render(saida)
            }
        })
    })
}

function sumValue(array){
    let contador = 0
    const sum = document.querySelector('#sum')
    sum.innerHTML = `R$`

    array.forEach((element) => {
        if(element.categoryID == 0){
            contador += element.value
        }
    })
    array.forEach((element) => {
        if(element.categoryID == 1)
        contador -= element.value
    })
    sum.innerHTML = `R$ ${contador.toFixed(2)}`
}

function registerValue(array){
    const inputvalue = document.querySelector('#valor')
    const inputEntrada = document.querySelector('#entrada')
    const inputSaida = document.querySelector('#saida')
    
    const inserirValur = document.querySelector('.inserir')
    

    inserirValur.addEventListener('click', (e) => {
        e.preventDefault()

        let newValue = {}
        let count = 0

        newValue.id = array.length + 1

        // inputRadio()
        newValue.value = Number(inputvalue.value)
        if(inputEntrada.checked){
            newValue.categoryID = 0
        }else{
            newValue.categoryID = 1
        }

        if(count != 0){
            count =0

            return alert('Por favor preencha todas as areas corretamente')
        }

        array.push(newValue)
        console.log(array)
        render(array)

    })
    fecharModal()
}

function emptyDisappear (array) {
    const emptyContainer = document.querySelector('.empty__controler')

    if(array.length == 0){
        emptyContainer.setAttribute('style', 'display:block')
    }else if(array.length > 0){
        emptyContainer.setAttribute('style', 'display:none')
    }
}

registerValue(insertedValues)
render(insertedValues)
filter(insertedValues)

