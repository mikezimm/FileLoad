import { sp } from "@pnp/sp";

import { Web } from "@pnp/sp/webs";

import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";

import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";



export async function loadHTMLFile1 ( folder: string, file: string ) {

    const testLocation = `${folder}/${file}`;
    let result = [];

    console.log('Loading file: ');
    try {
        const text: string = await sp.web.getFileByServerRelativeUrl(testLocation).getText();
        console.log('Loading this text:');
        console.log(text);
        result.push(`Loaded by file: ${testLocation}`);
        // alert ('Loaded :)');
    } catch (e) {
        console.log('loadHTMLFile Error');
        console.log( e );
        result.push(`Failed to load by file: ${testLocation}`);
        // alert( 'Failed :(');
    }

    try {
        const text2: string = await sp.web.getFolderByServerRelativeUrl( folder ).files.getByName( file ).getText();
        console.log('Loading this text2:');
        console.log(text2);
        result.push(`\n\nLoaded by folder: ${testLocation}`);
        // alert ('Loaded :)');
    } catch (e) {
        console.log('loadHTMLFile text2 Error');
        console.log( e );
        result.push(`\n\nFailed to load by folder: ${testLocation}`);
        // alert( 'Failed :(');
    }

    return result;

}


export async function loadHTMLFile2 ( siteUrl: string, webUrl: string, folderUrl: string, serverRelativePath: string, file: string ) {

    let web = Web( webUrl );

    let result = [];

    console.log('Loading file: ');
    try {
        const text: string = await web.getFileByServerRelativeUrl(serverRelativePath).getText();
        console.log('Loading this text:');
        console.log(text);
        result.push(`Loaded by file: ${serverRelativePath}`);
        // alert ('Loaded :)');
    } catch (e) {
        console.log('loadHTMLFile Error');
        console.log( e );
        result.push(`Failed to load by file: ${serverRelativePath}`);
        // alert( 'Failed :(');
    }

    try {
        const text2: string = await web.getFolderByServerRelativeUrl( folderUrl ).files.getByName( file ).getText();
        console.log('Loading this text2:');
        console.log(text2);
        result.push(`\n\nLoaded by folder: ${folderUrl}`);
        // alert ('Loaded :)');
    } catch (e) {
        console.log('loadHTMLFile text2 Error');
        console.log( e );
        result.push(`\n\nFailed to load by folder: ${folderUrl}`);
        // alert( 'Failed :(');
    }

    return result;

}