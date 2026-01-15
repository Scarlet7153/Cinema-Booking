const isoTimeFormat = (dateTime) => {
    const date = new Date(dateTime);
    const localTime = date.toLocaleString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
    return localTime;
};
export default isoTimeFormat;
