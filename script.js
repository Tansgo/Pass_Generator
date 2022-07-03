const password_text = document.getElementById("password_text");
const generator_button = document.getElementById("generator_button");
const password_length_range = document.getElementById("length_range");
const password_length_number = document.getElementById("length_number");

const letters = "abcdefghilkmnopqrstuvwxyz";
const numbers = "0123456789";
const special_characters = "&é(-è_çà)=^$ù*,;:!#{[]}?.//§%µ¨£+<>"

let password_length = password_length_number.value;

function generator_new_password() {
    let password_string = "";

    for (let i = 0; i < password_length; i++) {
        switch (parseInt(Math.random() * 4)) {
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

function update_length_range() {
    //On met à jour tout les input concernant la longueur du mot de passe en vérifiant quelle valeur a changé
    password_length === password_length_number.value ?
        password_length = password_length_range.value : password_length = password_length_number.value;
    password_length_number.value = password_length_range.value = password_length;
}

password_length_range.onchange = update_length_range;
password_length_number.onchange = update_length_range;

generator_button.onclick = generator_new_password;