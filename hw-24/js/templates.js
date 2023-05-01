'use strict';

export let postBodyTemplate = `
    <article class="post wow slideInRight" data-wow-duration = "2s">
        <h2 class="article-title">{title}</h2>
        <div class="article-text">
            {body}
        </div>
        
    </article>
`;

export let buttonTemplate = `<button class="button show-comments hidden">Show comments</button>`;

export let commentBodyTemplate = `
    <div class="comment-body wow slideInRight" data-wow-duration = "2s">
        <div class="commentator">
            <div class="left-side">
                <img src={img} alt="avatar" class="avatar">
            </div>
            <div class="right-side">
                <div class="comment-name">{name}</div>
                <div class="comment-email"><a href="mailto:{email}">{email}</a></div>
                <div class="comment-text">{body}</div>
            </div>
        </div>
    </div>
`

export const avatars = [
    './img/1.jpg', 
    './img/2.jpg', 
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg'];