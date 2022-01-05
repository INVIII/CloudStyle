/**
 * @fileOverview Utility functions for local storage of saved files
 */

export function getStoredFileData(key: string): Array<string> | null {
    let fileData = null
    if (localStorage.getItem(key)) {
        fileData = JSON.parse(localStorage.getItem(key)!)
    }
    return fileData
}

export function setstoredFileData(fileData: Array<string>, key:string): void {
    localStorage.setItem(key, JSON.stringify(fileData));
}

export function addFiletoStorage(fileURL: string, key: string): void {
    if (fileURL) {
        let array = getStoredFileData(key)
        array?.push(fileURL)
        setstoredFileData(array!, key)
    }
}

export function clearLocalStorage(key: string): void {
    localStorage.removeItem(key)
}