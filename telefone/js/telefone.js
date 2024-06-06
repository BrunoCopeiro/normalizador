function normalizarNumero(phoneNumber) {
    // Remover todos os caracteres não numéricos
    const numericOnly = phoneNumber.replace();

    // Verificar se o número tem exatamente 12 dígitos
    if (numericOnly.length !== 12) {
        return "Número de telefone inválido";
    }

    // Formatar o número no padrão (XXX) XXXXX-XXXX
    const formattedNumber = `(${numericOnly.slice(0, 3)}) ${numericOnly.slice(3, 8)}-${numericOnly.slice(8)}`;
    return formattedNumber;
}

function normalizeAndDisplay() {
    const phoneNumber = document.getElementById('phoneNumberInput').value;
    const normalizedPhoneNumber = normalizarNumero(phoneNumber);
    document.getElementById('normalizedPhoneNumber').innerText = normalizedPhoneNumber;
}