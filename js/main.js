$(document).ready(function() {
    const input = document.querySelector("#phone");

    const iti = window.intlTelInput(input, {
        initialCountry: "ro",
        separateDialCode: true,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });

    // Настройки масок для каждой страны
    const countryMasks = {
        'ru': "(999) 999-99-99",                 // Россия
        'ro': "999 999 999",                  // Румыния
        'bg': ["359 999 999 99", "359 999 999 999"], // Болгария (8 или 9 цифр)
        'it': ["39 999 999 999", "39 999 999 9999"], // Италия (9 или 10 цифр)
        'es': "34 999 999 999",                  // Испания
        'cz': "420 999 999 999",                 // Чехия
        'si': "386 999 99999",                   // Словения
        'pl': "48 999 999 999",                  // Польша
        'gr': "30 999 999 9999",                 // Греция
        'de': "49 99999999999",                  // Германия (до 11 цифр)
        'lv': "371 99999999",                    // Латвия
        'fr': "33 999 999 999",                  // Франция
        'at': "43 99999999999",                  // Австрия (до 11 цифр)
        'ch': "41 999 999 999",                  // Швейцария
        'sk': "421 999 999 999",                 // Словакия
        'lt': "370 99999999",                    // Литва
        'pt': "351 999 999 999",                 // Португалия
        'hu': ["36 99999999", "36 999999999"],   // Венгрия (8 или 9 цифр)
        'ee': ["372 9999999", "372 99999999"],   // Эстония (7 или 8 цифр)
        'hr': ["385 99999999", "385 999999999"], // Хорватия (8 или 9 цифр)
        'be': "32 999 999 999",                  // Бельгия
        'rs': "381 999 999 999"                  // Сербия
    };

    function applyMask() {
        const countryCode = iti.getSelectedCountryData().iso2;
        const mask = countryMasks[countryCode] || "999 999 9999"; 
    
        $(input).inputmask("remove");
        $(input).val('');

        if (Array.isArray(mask)) {
            $(input).inputmask({ mask: mask });
        } else {
            $(input).inputmask(mask);
        }
    }

    applyMask();
    input.addEventListener("countrychange", applyMask);

    $("form").on("submit", function() {
        const rawNumber = iti.getNumber().replace(/\D/g, '');
        input.value = rawNumber; 
    });
});


