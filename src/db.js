(function () {
    'use strict';
    console.log("dbd called");

    if (!'indexedDB' in window) {
        console.log("Index Db not supported");
        return;
    }
    const dbName = "spakes-store", version = 1;
    let dbRequest = indexedDB.open(dbName, version);

    dbRequest.onsuccess = upgradeDB => {
        if (!upgradeDB.objectStoreNames.contains('spakes')) {
            let objectStore = upgradeDB.createObjectStore('spakes',
                {keyPath: 'id', autoIncrement: true}
            );
            objectStore.createIndex('spakeName', 'name', {unique: false})
        }
    }
})();