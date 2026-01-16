const currencyFormat = (amount) => {
    const number = Number(amount);
    if (isNaN(number)) return '0';

    return new Intl.NumberFormat('vi-VN', {
        style: 'decimal',
        maximumFractionDigits: 0,
    }).format(number);
};

export default currencyFormat;
