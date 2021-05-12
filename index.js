const addButton = document.querySelector('.boton_agregar');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item {
    constructor(itemName) {
        this.createDiv(itemName);
    }
    
    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";
        
        let itemBox = document.createElement('div');
        itemBox.classList.add('item');
        
        let editButton = document.createElement('button');

        editButton.innerHTML = '<i class="fas fa-lock"></i>';
        editButton.classList.add('boton_editar');
        
        let removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fas fa-trash"></i>';
        removeButton.classList.add('boton_remover');
        
        container.appendChild(itemBox);
        
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
        
        editButton.addEventListener('click', function() { 
            input.disabled = !input.disabled
            if(input.disabled) {
                editButton.innerHTML = '<i class="fas fa-lock"></i>';
            } else {
                editButton.innerHTML = '<i class="fas fa-lock-open"></i>';
            }
        });

        removeButton.addEventListener('click', function() {
            itemBox.remove();
        });
    }

}

function check() {
    if(input.value != "") {
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', function(e) {
    if(e.code == "Enter") {
        check();
    }
}); 
