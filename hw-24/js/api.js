"use strict";

import { renderPost, renderComments } from "./script.js";

export async function getPostById(url) {
    try{
        const data = await fetch(url);
        const json = await data.json();
        renderPost(json);
    } catch(error) {
        console.error("The Promise is rejected!", error);
    }    
}

export async function getCommentsByPostId(url) {
    try{
        const data = await fetch(url);
        const json = await data.json();
        renderComments(json);
    } catch(error) {
        console.error("The Promise is rejected!", error);
    }    
}