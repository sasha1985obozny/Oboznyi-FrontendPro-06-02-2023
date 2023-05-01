'use strict';

import { commentBodyTemplate, postBodyTemplate, avatars, buttonTemplate } from './templates.js';
import { getPostById, getCommentsByPostId } from './api.js';

new WOW().init();

const findPost = document.querySelector('.find-post');
const postIdInput = document.querySelector('.post-id-input');
const main = document.querySelector('main');
const warning = document.querySelector('.warning');

findPost.addEventListener('click', showPost);
postIdInput.addEventListener('input', disableButton);

function disableButton(){
  if (+postIdInput.value <= 0 || +postIdInput.value > 100 || postIdInput.value === ''){
    findPost.setAttribute('disabled', 'true');
    warning.classList.remove('hidden');
  } else {
    findPost.removeAttribute('disabled', 'true');
    warning.classList.add('hidden');
  }
}

function showPost(e) {
    e.preventDefault();
    disableButton();
    if (!e.target.hasAttribute('disabled')){
      getPostById('https://jsonplaceholder.typicode.com/posts/' + postIdInput.value);
    }       
}

export function renderPost(myPost){
  
    if(document.querySelector('.comments')){
      document.querySelector('.comments').remove();
    }
    if(document.querySelector('.post')){
      document.querySelector('.post').remove();
    }
        
    let postBodyReplace = postBodyTemplate
      .replace('{title}', myPost.title)
      .replace('{body}', myPost.body);    
    
    const postDiv = document.createElement('div');
    postDiv.innerHTML = postBodyReplace;
    main.prepend(postDiv);
    const article = document.querySelector('.post');
    const buttonDiv = document.createElement('div');
    buttonDiv.innerHTML = buttonTemplate;
    article.append(buttonDiv);
    const findComments = document.querySelector('.show-comments');    
    findComments.addEventListener('click', showComments);
    findComments.classList.remove('hidden');
}

function showComments(e) {
  e.target.remove();
  getCommentsByPostId(`https://jsonplaceholder.typicode.com/posts/${postIdInput.value}/comments`);    
}

export function renderComments(comment){
  const comments = document.createElement('div');
  comments.setAttribute('class', 'comments');
  main.append(comments);
  const commentsHeader = document.createElement('h3');
  commentsHeader.setAttribute('class', 'comments-header wow slideInRight');
  commentsHeader.innerText = 'Post comments';
  comments.prepend(commentsHeader);
  const min = 0;
  const max = 7;
    
    comment.forEach((item) => {
        let random = Math.floor(Math.random()*(max-min)+min);
        let commentBody = document.createElement('div');
        const name = commentBodyTemplate
            .replace('{name}', item.name)
            .replaceAll('{email}', item.email)
            .replace('{body}', item.body)
            .replace('{img}', avatars[random]);
        commentBody.innerHTML = name;
        comments.append(commentBody);
    })  
}