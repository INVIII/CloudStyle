/**
 * @fileOverview Utility functions for local storage of saved files
 */

export function getStoredFileData(): Array<any> | null {
    let fileData = null
    if (localStorage.getItem('files')) {
        fileData = JSON.parse(localStorage.getItem('files')!)
    }
    return fileData
}

export function setstoredFileData(fileData: Array<any>, key = 'files'): void {
    localStorage.setItem(key, JSON.stringify(fileData));
}

export function clearLocalStorage(): void {
    localStorage.clear()
}