const password_text = document.getElementById("password_text");
const generator_button = document.getElementById("generator_button");

const letters = "abcdefghilkmnopqrstuvwxyz";
const numbers = "0123456789";
const special_characters = "&é(-è_çà)=^$ù*,;:!#{[]}?.//§%µ¨£+<>"

function generator_new_password(){
    let password_string = "";
    for(let i = 0; i < 30; i++){
        switch(parseInt(Math.random() * 4)){
            case 1:
                password_string += letters[parseInt(Math.random() * letters.length)].toUpperCase();
                break;
            case 2:
                password_string += numbers[parseInt(Math.random() * numbers.length)];
                break;
            case 3:
                password_string += special_characters[parseInt(Math.random() * special_characters.length)];
                break;
            default:
                password_string += letters[parseInt(Math.random() * letters.length)];
        }
    }
    password_text.value = password_string;
}

generator_button.onclick = generator_new_password;