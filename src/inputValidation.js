
export function validateInput(input) {
    // Definiere eine Whitelist mit erlaubten Zeichen
    const whitelistRegex = /^[a-zA-Z\s]*$/; // Erlaube nur Buchstaben und Leerzeichen

    return whitelistRegex.test(input);
}