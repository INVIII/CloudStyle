/**
 * @fileOverview Utility functions for local storage of saved files
 */

export function getStoredFileData(): Array<string> | null {
    let fileData = null
    if (localStorage.getItem('files')) {
        fileData = JSON.parse(localStorage.getItem('files')!)
    }
    return fileData
}

export function setstoredFileData(fileData: Array<string>, key = 'files'): void {
    localStorage.setItem(key, JSON.stringify(fileData));
}

export function addFiletoStorage(fileURL: string, key = 'files'): void {
    if (fileURL) {
        let array = getStoredFileData()
        array?.push(fileURL)
        setstoredFileData(array!, key)
    }
}

export function clearLocalStorage(): void {
    localStorage.clear()
}