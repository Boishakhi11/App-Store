const getStoredData = () => {
    const installedApp = localStorage.getItem("installedList");

    if(installedApp){
        const storeAppData = JSON.parse(installedApp);
        return storeAppData;
    }
    else {
        return [];
    }
}


const installedData = (id) => {
    const storedata = getStoredData();

    if(storedata.includes(id)) {
        alert("Already Installed")
    }
    else {
        storedata.push(id);
        const data = JSON.stringify(storedata);
        localStorage.setItem("installedList", data)
    }
}

export {getStoredData, installedData};