export const truncateText = (str: String) => {
    if(str.length < 30) return str
    return str.substring(0, 30) + "...";
};