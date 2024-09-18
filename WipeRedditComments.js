// ==UserScript==
// @name         Wipe Reddit Comments
// @namespace    http://www.performensch.com
// @version      1.0.0
// @description  Deletes all your reddit comments
// @author       Phillip Mayr
// @match        *.reddit.com/user/comments/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALsSURBVDhPbVNZSFRhFP7mOqmTM+OOprlMgdIMOkbgWrbY8lIRFgw9RlAkgRBF1EMF9dJDVL60PLW8hoQRpmGaQaRo5pZpjmkujTRmo5Z6Z5yvc++NfOnAx73n/Of/7neWa4JhJYIh7kG+PK8IyrXgf2xEcNX0Eg8MF9AISgWNaVFY6ClGSmKkHjfMZAZ+hQTauyAI+MVtXYPWyvT4StOL2RktnJISid5pFcluK9C0BfhHMis4cRvYmAOMejGOCOy9fA3j36bwNI/tuxNQoohsZ3cxkl0xQPcCUNEJzKjGfYgAbJKqPrRhYGwMZZeu4tPEJHLsMcizoFD4LkAIXgvoKweFhHKFooT+MpCeIrK5ke9cYKJinO3ISmdgq5zJHcGcIkG9YSlSTJMbcK39q+S9KHFuR2N7ByoG5D0MHLID9YmTsGu3NDqYbCbuiSDUFSBzJxAOYdpsR0VLH/pFcmZGBr75fAgGgzh+8ADuujfA3P8KSMgEvM+NElkqUi6eIgM/ybkAuTBPn8/H1NRUXbKG6upqhsNhMhgkf8yQy0vko/vkZlDBoqSkZQP2WMAmGmOsuHOmGkIiB4a1NDTgx52bMkaZY3wCEBklih2AlAruEgX71pJDAwyFQqw6eVL/qllRWFNTQ5fLpfvuKGlsfx91+zlLVh0hpfEyBYV0gMt1T+jxePRkS3Q0n9XW6rlaOS6n0yBxu+n3+8nhQdJpTEIbo3e+SB6O9XpSXFwc3zQ2kF+85NIiqar0dXfRlZu7SnL3FlmgE4TRVYzThXajWeti7expe6d/mV9HycGP5MiwXp5vampVieyLX+QLwcOIexPiqDjmsEBpSV9GbkD2N8oGJCXLTicZjSVhHR/F4VAA9Z0d6JXGP/ND/a7iqP435luxv64A57IsSjmWZGNmJCgLhewCwBIPfG4G5sWXf2VaBrCtA6r3N1Yks0In0Eymoei7DZwX2PSiZL+kSmCNwMjUoo/PDuH6jTHEAXj7B53/ghOq0g4HAAAAAElFTkSuQmCC
// @grant        none
// @icon64       data:image/png;base64,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
// ==/UserScript==

var commentsToDelete = [];

function findOldComments() {
  // check if its my user page
  let pageName = document.querySelector("div#header > div#header-bottom-left > span.pagename").textContent;
  let userName = document.querySelector("div#header > div#header-bottom-right > span.user > a").textContent;
  if (pageName !== userName) return;

  let comments = document.querySelectorAll(".comment");
  let nextButton = document.querySelector("div.content > div#siteTable > div.nav-buttons > span.nextprev > span.next-button > a");
  let i = comments.length;
  while (i--) {
    // add visible comments to the delete list
    commentsToDelete.push(comments[i].getAttribute("id"));
  }
  if (commentsToDelete.length > 0) {
    removeComment(commentsToDelete.pop());
  } else if (nextButton) {
    nextButton.click();
  } else {
    alert("No old comments!");
  }
}

function* generator() {
  while (commentsToDelete) {
    yield removeComment(commentsToDelete.pop());
  }
}

let gen = generator();

function removeComment(eligibleComment) {
  let comment = document.getElementById(eligibleComment);
  if (!comment) document.location.reload();
  let deleteButton = comment.querySelector("div.entry > ul > li > form.del-button > span > a[data-event-action=delete]"),
    confirmButton = comment.querySelector("div.entry > ul > li > form.del-button > span > a.yes");

  let deleteComment = function() {
    return new Promise(
      (resolve, reject) => {
        if (deleteButton) {
          window.setTimeout(() => {
            deleteButton.click();
            resolve();
          }, 3000);
        } else {
          reject((e) => {
            console.log(e);
          });
        }
      }
    );
  };

  let confirmDelete = function() {
    return new Promise(
      (resolve, reject) => {
        if (confirmButton) {
          window.setTimeout(() => {
            confirmButton.click();
            resolve(gen.next());
          }, 3000);
        } else {
          reject((e) => {
            console.log(e);
          });
        }
      }
    );
  };

  deleteComment()
  .then(confirmDelete()
  );

}

window.addEventListener("load", findOldComments);