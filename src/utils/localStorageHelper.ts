/**
 * @fileOverview Utility functions for local storage of saved files
 */

import File from './interfaces'

export function getStoredFileData(key: string): Array<File> | null {
    let fileData = null
    if (localStorage.getItem(key)) {
        fileData = JSON.parse(localStorage.getItem(key)!)
    }
    return fileData
}

function setstoredFileData(fileData: Array<File>, key:string): void {
    localStorage.setItem(key, JSON.stringify(fileData));
}

export function addFiletoStorage(fileData: File, key: string): void {
    if (fileData) {
        let array: Array<File> | null = getStoredFileData(key)
        let newArray: Array<File> = []
        if(array){
            newArray = array.slice()            
        }
        newArray.push(fileData)
        setstoredFileData(newArray, key)
    }
}

export function clearLocalStorage(key: string): void {
    localStorage.removeItem(key)
}