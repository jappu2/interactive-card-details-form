 
    let inputFileds = document.querySelectorAll('[type="text"]')
    inputFileds.forEach(e => e.addEventListener('keyup', 
    function() {

        // check validity of the card number field
        if (this.name == 'card-number') {
            if (!Number(this.value) ){
                this.classList.add('error')
                
            }
            if (Number(this.value) || this.value == '' ){
                this.classList.remove('error')
                
            }
        }

        // check validity of the card date fields
        if (this.name == 'card-month'){
            if (!Number(this.value) || !inRange(this.value, 1, 12)){
                this.classList.add('error')
            } 
            if (inRange(this.value, 1, 12) ||  this.value == '' ){
                this.classList.remove('error')
            }
        }

        if (this.name == 'card-year'){
            if (!Number(this.value) || !inRange(this.value, 22, 32)){
                this.classList.add('error')
            } 
            if (inRange(this.value, 22, 32) ||  this.value == '' ){
                this.classList.remove('error')
            }
        }

        // check validity of the card cvc field

        if (this.name == 'card-cvc'){
            if (!Number(this.value)){
                this.classList.add('error')
            } 
            if (Number(this.value) || this.value == ''){
                
                this.classList.remove('error')
            } 
        
        }

        // show error messages
        this.name != 'card-name' 
        ? this.classList.contains('error') 
        ? error(this) : removeError(this)
        : null
        

        // update the shown values
        document.querySelector(`.${this.name}`).innerHTML = this.value
    }))

    let form = document.querySelector('#info-form'),
    completeContainer = document.querySelector(".complete-container"),
    formContainer = document.querySelector(".form-container"),
    continueButton = document.querySelector('#continue-button')
    form.addEventListener('submit', 
        function(evt){
            evt.preventDefault()

            if (document.querySelector('.error') == null){
                let empty = false
                inputFileds.forEach(e => e.value == '' ? empty = true : null) 
                if (empty)  return 
                formContainer.classList.add('hidden')
                completeContainer.classList.remove('hidden')
            }
        }
    )
    continueButton.addEventListener('click', function (){
        form.reset()
        clearCard()
        formContainer.classList.remove('hidden')
        completeContainer.classList.add('hidden')

    })
    function inRange(x, min, max) {
        return ((x - min) * (x - max) <= 0);
     }

     function error(e){

        e.nextElementSibling.classList.remove('hidden')
        
     }

     function removeError(e){
        e.nextElementSibling.classList.add('hidden')
     }

     function  clearCard(){
         document.querySelector('.card-name').innerText = 'Jaber Ali'
         document.querySelector('.card-number').innerText = '0000000000000000'
         document.querySelector('.card-cvc').innerText = '000'
         document.querySelector('.card-month').innerText = '00'
         document.querySelector('.card-year').innerText = '00'
    }