function setItem(nomStockage, newValue) {
    localStorage.setItem(nomStockage,newValue );
}

function getItem(nomStockage) {
    localStorage.getITem(nomStockage)
}

function removeItem(nomStockage) {
    localStorage.removeItem(nomStockage)
}

export default localStorage;