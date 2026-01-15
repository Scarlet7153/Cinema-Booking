export const dateFormat = (dateString) => {
    return new Date(dateString).toLocaleDateString('vi-VN',
        {
            weekday: 'short',
            month: 'short',
            day: 'numeric',  
            hour: 'numeric',
            minute: 'numeric'
        }
    );
}
