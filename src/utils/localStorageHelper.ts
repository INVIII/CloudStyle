/**
 * @fileOverview Utility functions for local storage of saved files
 * feat: added localStorage for files
 */

import File from './interfaces'
import { deleteObject } from "firebase/storage";

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

export function removeFile(fileData: File, key: string): void {
    if (fileData) {
        let array: Array<File> | null = getStoredFileData(key)
        let newArray: Array<File> = []
        if(array){
            for(let i of array){
                if(i !== fileData){
                    newArray.push(i);
                }
            }
        }
        setstoredFileData(newArray, key)
    }
}

export function deleteFileFromCloud(fileRef: any, fileData: File): void {
    setTimeout(()=>{
        removeFile(fileData, 'files')
        deleteObject(fileRef).then(()=>{
            console.log("deleted file")
        }).catch(e => {
            console.log(e);
        })
    }, 10 * 1000);
}

export function clearLocalStorage(key: string): void {
    localStorage.removeItem(key)
}