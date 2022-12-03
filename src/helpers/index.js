export const themeStorage = () => {
    let darkTheme = false;

    if(!localStorage.getItem("darkTheme")) {
        localStorage.setItem("darkTheme", "false")
    } else {
        darkTheme = localStorage.getItem("darkTheme") === "true" ? true : false;
    }

    return(darkTheme);
}