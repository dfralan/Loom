/*!
  * Teller v2.0.0 (https://github.com/dfralan/Teller)
  * Copyright 2021-2023 The Teller Authors.
  * Licensed under GNU GENERAL PUBLIC LICENSE (https://github.com/dfralan/Teller/blob/main/LICENSE)
*/

function main() {
    // Main teller tag
    const tellerTag = document.getElementsByTagName("teller")[0]
    var clientLang = 'en';
    var userLang = 'en';
    var emotionTeller = "";
    var messageTeller = "";
    var emailTeller = "";
    var ffu = "";// feedbackFormUrl
    var entryA = "";// Emotion
    var entryB = "";// Email
    var entryC = "";// Message
    var entryD = "";// Date
    var dateTeller = new Date();
    var displayedBox = false;// Displayed Box or not
    var interacted = false;// Already interacted Box or not
    var emotionSelected = false;
    var messageReady = false;
    var emailReadyTeller = false;
    var lockAndLoudTeller = false;
    var stateGeneral = false;
    var tellerUseWsp = false;
    var tellerUseFeedback = false;
    var tellerUseMessenger = false;
    var tellerUseTelegram = false;
    var displayedSharedComponents = false;
    var numberOfComplements = 0;
    var onlyFeedback = false;
    var onlyMessenger = false;
    var onlyWsp = false;
    var onlyTelegram = false;
    const almostBlack = '#0D1418';
    const realWhite = 'white';
    const nebulaGrey = '#E8E8E8';
    const realGrey = '#808080';
    const charmingGrey = '#2A2F32';
    const onlineGreen = '#31A24C';
    const tellerGreen = '#03D79C';
    const telegramBlue = '#2AA2C6';
    const transitionChill = '.3s!important;-webkit-transition: .3s!important;-moz-transition: .3s!important;-o-transition: .3s!important;'
    const animationStandard = '1;animation-direction: normal!important;animation-play-state: paused;animation-duration: 2s!important;animation-timing-function: ease-all!important;animation-iteration-count: infinite!important;cursor: pointer!important;'
    const emojiBrickStyle = 'transition:' + transitionChill + 'position: absolute!important;opacity: 0.25;background-color: transparent!important;width: 60px!important;height: 80px!important;left: 0!important;top: 0!important;text-align: center!important;cursor: pointer!important;'
    const feedbackMainButton = '<svg id="buttonFeedbackBrick" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><circle class="transparentBG" cx="25" cy="25" r="25"/><path id="feedbackIconShape" d="M25,0C11.2,0,0,11.2,0,25s11.2,25,25,25s25-11.2,25-25S38.8,0,25,0z M38.5,12.8L21.2,39.4c-0.3,0.4-0.9,0.2-0.9-0.3l-0.7-13.1c0-0.2-0.2-0.4-0.4-0.5l-8.8-1.3c-0.5-0.1-0.6-0.8-0.1-1L37.8,12C38.3,11.9,38.7,12.4,38.5,12.8z"/></svg>'
    const messengerMainButton = '<svg id="buttonMessengerBrick" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><circle class="transparentBG" cx="25" cy="25" r="25"/><path id="messengerIconShape" d="M25,0C11.5,0,0.5,11.1,0.7,24.5c0.1,6.8,3,12.9,7.5,17.3c0.5,0.5,0.8,1.2,0.8,1.9v4.1c0,1.5,1.6,2.6,3.1,1.9 l4.5-2c0.6-0.3,1.2-0.3,1.8-0.1c2,0.6,4.3,0.9,6.5,0.9c13.3,0,24.3-10.9,24.3-24.2C49.2,10.9,38.3,0,25,0z M40,18.5l-7.2,11.4	c-1.2,1.8-3.7,2.3-5.5,1.1l-2-1.4l-3.6-2.5c-0.7-0.5-1.6-0.4-2.2,0.1l-7.2,5.9c-1.2,0.9-2.7-0.5-1.9-1.7L17.5,20c1.2-1.8,3.7-2.3,5.5-1.1l3,2.1l2.6,1.9c0.7,0.5,1.6,0.4,2.2-0.1l7.2-5.9C39.2,15.9,40.8,17.3,40,18.5z"/></svg>';
    const wspMainButton = '<svg id="buttonWhatsappBrick" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><circle class="transparentBG" cx="25" cy="25" r="25"/><path id="whatsappIconShape" d="M42.5,7.4c-4.7-4.6-10.9-7.2-17.6-7.2C11.2,0.2,0,11.3,0,25.1c0,4.7,1.4,9.3,3.8,13.2l0.6,0.9l-2.5,9.2l9.4-2.5l0.9,0.5c3.8,2.3,8.2,3.5,12.7,3.5C38.6,49.8,50,38.7,50,24.9C50,18.3,47.2,12.1,42.5,7.4z M39.5,35.7c-0.6,1.8-3.6,3.3-5,3.6c-2.4,0.3-4.2,0.2-9-1.9C18,34.2,13.1,26.6,12.8,26.1c-0.3-0.5-3-4.1-3-7.7s1.9-5.4,2.6-6.3c0.6-0.7,1.5-0.9,2-0.9s1,0,1.5,0 c0.4,0,1-0.2,1.7,1.3c0.6,1.5,2.1,5.1,2.3,5.5c0.2,0.4,0.3,0.8,0.1,1.3c-1.5,2.8-2.9,2.7-2.2,4.1c2.9,4.9,5.8,6.7,10.1,8.9 c0.7,0.4,1.2,0.3,1.6-0.2c0.4-0.5,1.9-2.2,2.4-2.9c0.5-0.7,1-0.6,1.7-0.4c0.6,0.2,4.4,2.1,5.1,2.4c0.7,0.4,1.3,0.5,1.5,0.8 C40.2,32.5,40.2,33.9,39.5,35.7z"/></svg>';
    const telegramMainButton = '<svg id="buttonTelegramBrick" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><circle class="transparentBG" cx="25" cy="25" r="25"/><path id="telegramIconShape" d="M25,0C11.2,0,0,11.2,0,25s11.2,25,25,25s25-11.2,25-25S38.8,0,25,0z M36.9,16.3c-0.1,1-0.7,4.6-1.2,8.4L33.9,36	c0,0-0.1,1.7-1.4,2c-1.2,0.3-3.3-1-3.6-1.3c-0.3-0.2-5.4-3.5-7.3-5.1c-0.5-0.4-1.1-1.3,0.1-2.3c2.6-2.4,5.7-5.3,7.6-7.2	c0.9-0.9,1.7-2.9-1.9-0.4l-10.2,6.9c0,0-1.2,0.7-3.3,0.1C11.7,27.9,9.2,27,9.2,27s-1.8-1.1,1.2-2.2l16.8-6.9c1.7-0.7,7.3-3,7.3-3 S37.1,13.9,36.9,16.3z"/></svg>';
    const wspSendButtonIcon = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><circle class="transparentBG" cx="20" cy="20" r="20"/><polygon id="wspSendButtonSVG" points="21.6,15.3 12.3,11 12.3,17.9 21.8,19.6 12.3,21.4 12.3,28.3 21.6,24 31,19.6 	"/></svg>'
    const messengerSendButtonIcon = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="29px" height="29.8px" viewBox="0 0 29 29.8" style="overflow:visible;enable-background:new 0 0 29 29.8;" xml:space="preserve"><path id="messengerIconFull" d="M14.5,0C6.4,0-0.1,6.6,0,14.6c0,4.1,1.8,7.7,4.5,10.3C4.8,25.3,5,25.7,5,26.1v2.4c0,0.9,1,1.6,1.8,1.2l2.7-1.2c0.4-0.2,0.7-0.2,1.1-0.1c1.2,0.3,2.6,0.5,3.9,0.5c8,0,14.5-6.5,14.5-14.5C29,6.5,22.5,0,14.5,0z M23.5,11.1l-4.3,6.8c-0.7,1.1-2.2,1.4-3.3,0.6l-1.2-0.9l-2.1-1.5c-0.4-0.3-0.9-0.3-1.3,0l-4.3,3.5c-0.7,0.6-1.7-0.3-1.2-1l4.3-6.8c0.7-1.1,2.2-1.4,3.3-0.6l1.8,1.3l1.6,1.1c0.4,0.3,0.9,0.3,1.3,0l4.3-3.5C23,9.5,24,10.3,23.5,11.1z"/></svg>'
    const telegramSendButtonIcon = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" style="overflow:visible;enable-background:new 0 0 50 50;" xml:space="preserve"><circle class="transparentBG" cx="20" cy="20" r="20"/><path id="telegramSendButtonSVG" d="M27.5,19.2l-13.5-6.9c-0.6-0.3-1.4,0.2-1.3,0.9l0.7,5c0.1,0.4,0.4,0.7,0.7,0.7l7.7,0.8c0.2,0,0.2,0.4,0,0.4L14.2,21c-0.4,0-0.7,0.3-0.7,0.7l-0.7,5c-0.1,0.7,0.6,1.2,1.3,0.9l13.5-6.9C28.2,20.5,28.2,19.5,27.5,19.2z"/></svg>'
    const tellerSmallA = '<b><a target="_blank" href="https://github.com/dfralan/Teller">Teller<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="22px"	 height="14.6px" viewBox="0 0 22 14.6" style="overflow:visible;enable-background:new 0 0 22 14.6;" xml:space="preserve"><style type="text/css">	.stayPlane{fill:' + tintColor() + ';}</style><defs></defs><path class="stayPlane" d="M5.1,6l14.5-5.9C19.9,0,20.1,0.3,20,0.5l-9.1,14c-0.1,0.2-0.5,0.1-0.5-0.1L10,7.5c0-0.1-0.1-0.2-0.2-0.3L5.2,6.5C4.9,6.5,4.9,6.1,5.1,6z"/></svg></a></b>'
    const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const msgRegex = /^[\p{L}\p{N}\p{P}\p{S}\s]+$/u;
    const styleSheetTeller = '<style>\
    @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;600&display=swap");\
    \
    :root,\
[   data-bs-theme="light"] {\
    --bs-tint:' + tintColor() +';\
    \
    \
    \
    \
    \
    \
    \
    }\
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    \
    teller{\
        display:'+ complementsComposer()[2] + ';\
        position: fixed!important;\
        z-index: 100000;\
        '+ getSide()[0] + ': 30px!important;\
        bottom: 30px!important;\
        background-color: transparent!important;\
    }\
    .transparentBG{\
        fill: transparent !important;\
    }\
    #hoverBrick{\
        display: none;\
        place-items: center;\
        transition:'+ transitionChill + '\
        opacity: 0;\
        position: absolute!important;\
        '+ getSide()[0] + ': 0px!important;\
        bottom: 70px!important;\
        border-radius: 10px;\
        width: auto!important;\
        min-width: 200px;\
        max-width: 300px;\
        max-height: 100px !important;\
        padding: 6px 10px 10px 10px !important;\
        text-align: left;\
        font-weight: 200!important;\
        font-size: small!important;\
        font-family: "Outfit", sans-serif;\
        color: '+ byTheme(charmingGrey, realWhite) + ';\
        background-color: '+ byTheme(realWhite, charmingGrey) + '!important;\
        box-shadow: -2px 1px 5px rgba(0,0,0,0.1) !important;\
    }\
    #buttonFatherBrick{\
        transition:'+ transitionChill + '\
        opacity: 1;\
        position: absolute!important;\
        background-color: '+ byTheme(tintColor(), charmingGrey) + '!important;\
        width: 50px;\
        height: 50px;\
        '+ getSide()[0] + ': 0px;\
        bottom: 0px!important;\
        border-radius: '+ userBorderRadius() + 'px;\
        cursor: pointer!important;\
    }\
    #buttonFatherBrick svg{\
        transition:'+ transitionChill + '\
    }\
    \
    #buttonFatherBrick svg:hover{\
        transform: scale(1.05);\
    }\
    \
    #buttonFeedbackBrick{\
        transition:'+ transitionChill + '\
        opacity: 1;\
        display: inline-block\
        background-color: transparent;\
        width: 35px;\
        height: 35px;\
        margin: 7px 7.5px 8px 7.5px;\
        border-radius: none !important;\
        border: none!important;\
        cursor: pointer!important;\
    }\
    #buttonFeedbackBrick:hover{\
        opacity: 0.8;\
    }\
    #feedbackBrick{\
        transition:'+ transitionChill + '\
    }\
    #feedbackIconShape{\
        transition:'+ transitionChill + '\
        fill:'+ byTheme(realWhite, charmingGrey) + ';\
    }\
    #fatherBrick{\
        transition:'+ transitionChill + '\
        opacity: 0;\
        display: none;\
        font-family: "Outfit", sans-serif;\
        position: absolute!important;\
        background-color:'+ byTheme(realWhite, charmingGrey) + '!important;\
        width: 340px!important;\
        height: 200px;\
        '+ getSide()[0] + ': 0px!important;\
        bottom: 70px!important;\
        border-radius: 10px;\
        transform: translateY(10px);\
        box-shadow: 0 0 10px rgba(0,0,0,0.2);\
    }\
    #xBrick{\
        transition:'+ transitionChill + '\
        opacity: 0;\
        fill: '+ byTheme(realWhite, tintColor()) + '!important;\
        transform: translateX(30px) scaleX(0);\
    }\
    #palomita{\
        transition:'+ transitionChill + '\
        opacity: 1;\
        fill: '+ byTheme(realWhite, tintColor()) + '!important;\
        transform: scaleX(1);\
    }\
    #titleBrick{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 1;\
        font-weight: 200;\
        color:'+ byTheme(almostBlack, realWhite) + '!important;\
        background-color: transparent!important;\
        width: 300px!important;\
        height: auto!important;\
        left: 20px!important;\
        top: 20px!important;\
        text-align: center!important;\
    }\
    #emojisBrick{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 1;\
        background-color: transparent!important;\
        width: 300px!important;\
        height: 80px!important;\
        left: 20px!important;\
        top: 60px;\
        text-align: center!important;\
    }\
    #emojiSelectorBrick{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 0;\
        background-color: #eaeaeb!important;\
        width: 10px!important;\
        height: 10px!important;\
        left: 25px;\
        transform: rotate(45deg)!important;\
        bottom: -7px!important;\
        text-align: center!important;\
    }\
    #emojiBrick1{'+ emojiBrickStyle + '\
        left: 0px!important;\
    }\
    #emojiBrick1:hover>#emojiDescriptionBrick1 {\
        opacity: 1!important;\
    }\
    #emojiBrick2{'+ emojiBrickStyle + '\
        left: 60px!important;\
    }\
    #emojiBrick2:hover > #emojiDescriptionBrick2{\
        opacity: 1!important;\
    }\
    #emojiBrick3{'+ emojiBrickStyle + '\
        left: 120px!important;\
    }\
    #emojiBrick3:hover>#emojiDescriptionBrick3{\
        opacity: 1!important;\
    }\
    #emojiBrick4{'+ emojiBrickStyle + '\
        left: 180px!important;\
    }\
    #emojiBrick4:hover>#emojiDescriptionBrick4{\
        opacity: 1!important;\
    }\
    #emojiBrick5{'+ emojiBrickStyle + '\
        left: 240px!important;\
    }\
    #emojiBrick5:hover>#emojiDescriptionBrick5{\
        opacity: 1!important;\
    }\
    #emojiFaceBrick1{\
        transition:'+ transitionChill + '\
        opacity: 1!important;\
        position: absolute!important;\
        background-color: '+ byTheme(charmingGrey, nebulaGrey) + ';\
        width: 40px!important;\
        height: 40px!important;\
        border-radius: 25px;\
        left: 10px!important;\
        top: 10px!important;\
        cursor: pointer!important;\
    }\
    #emojiFaceBrick2{\
        transition:'+ transitionChill + '\
        opacity: 1!important;\
        position: absolute!important;\
        background-color: '+ byTheme(charmingGrey, nebulaGrey) + ';\
        width: 40px!important;\
        height: 40px!important;\
        border-radius: 25px;\
        left: 10px!important;\
        top: 10px!important;\
        cursor: pointer!important;\
    }\
    #emojiFaceBrick3{\
        transition:'+ transitionChill + '\
        opacity: 1!important;\
        position: absolute!important;\
        background-color: '+ byTheme(charmingGrey, nebulaGrey) + ';\
        width: 40px!important;\
        height: 40px!important;\
        border-radius: 25px;\
        left: 10px!important;\
        top: 10px!important;\
        cursor: pointer!important;\
    }\
    #emojiFaceBrick4{\
        transition:'+ transitionChill + '\
        opacity: 1!important;\
        position: absolute!important;\
        background-color: '+ byTheme(charmingGrey, nebulaGrey) + ';\
        width: 40px!important;\
        height: 40px!important;\
        border-radius: 25px;\
        left: 10px!important;\
        top: 10px!important;\
        cursor: pointer!important;\
    }\
    #emojiFaceBrick5{\
        transition:'+ transitionChill + '\
        opacity: 1!important;\
        position: absolute!important;\
        background-color: '+ byTheme(charmingGrey, nebulaGrey) + ';\
        width: 40px!important;\
        height: 40px!important;\
        border-radius: 25px;\
        left: 10px!important;\
        top: 10px!important;\
        cursor: pointer!important;\
    }\
    #SuperFaceTeller{\
        animation-name: Super!important;\
        opacity:'+ animationStandard + '\
    }\
    #GoodFaceTeller{\
        animation-name: Good!important;\
        opacity:'+ animationStandard + '\
    }\
    #NeutralFaceTeller{\
        animation-name: Neutral!important;\
        opacity:'+ animationStandard + '\
    }\
    #BadFaceTeller{\
        animation-name: Bad!important;\
        opacity:'+ animationStandard + '\
    }\
    #FuriousFaceTeller{\
        animation-name: Furious!important;\
        opacity:'+ animationStandard + '\
    }\
    .tellersFace{\
        fill: none!important;\
    }\
    .tellersGesture{\
        fill: '+ byTheme(realWhite, almostBlack) + '!important;\
    }\
    #emojiDescriptionBrick1{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 0;\
        color:'+ byTheme(almostBlack, realWhite) + '!important;\
        font-size: small!important;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 20px!important;\
        left: 0!important;\
        bottom: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #emojiDescriptionBrick2{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 0;\
        color:'+ byTheme(almostBlack, realWhite) + '!important;\
        font-size: small!important;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 20px!important;\
        left: 0!important;\
        bottom: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #emojiDescriptionBrick3{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 0;\
        color:'+ byTheme(almostBlack, realWhite) + '!important;\
        font-size: small!important;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 20px!important;\
        left: 0!important;\
        bottom: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #emojiDescriptionBrick4{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 0;\
        color:'+ byTheme(almostBlack, realWhite) + '!important;\
        font-size: small!important;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 20px!important;\
        left: 0!important;\
        bottom: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #emojiDescriptionBrick5{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 0;\
        color:'+ byTheme(almostBlack, realWhite) + '!important;\
        font-size: small!important;\
        width: 60px!important;\
        height: 20px!important;\
        left: 0!important;\
        bottom: 0!important;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    #textAreasBrick{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 0;\
        display: none;\
        background-color: #eaeaeb!important;\
        width: 340px!important;\
        height: 110px!important;\
        left: 0!important;\
        top: 100px!important;\
        text-align: center!important;\
    }\
    \
    #textAreaBrick{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        color: #333!important;\
        resize: none!important;\
        font-family: "Outfit", sans-serif;\
        font-size: medium!important;\
        outline: 0!important;\
        box-shadow: none!important;\
        border: none!important;\
        background-color: transparent!important;\
        width: 300px!important;\
        height: 90px!important;\
        left: 20px!important;\
        top: 10px!important;\
        text-align: left!important;\
    }\
    \
    #inputAreasBrick{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 0;\
        display: none;\
        background-color: #eaeaeb!important;\
        width: 340px!important;\
        height: 50px!important;\
        left: 0!important;\
        top: 90px!important;\
        text-align: center!important;\
    }\
    #inputAreaBrick{\
        position: absolute!important;\
        opacity: 1;\
        color: #333!important;\
        resize: none!important;\
        font-family: "Outfit", sans-serif;\
        font-size: medium!important;\
        outline: 0!important;\
        box-shadow: none!important;\
        border: none!important;\
        background-color: transparent!important;\
        width: 300px!important;\
        height: 30px!important;\
        left: 20px!important;\
        top: 10px!important;\
        text-align: center!important;\
    }\
    #actionButtonBrick{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 0;\
        display: none;\
        bottom: 10px;\
        right: 20px!important;\
        border-radius: 5px;\
        background-color: '+ nebulaGrey + ';\
        width: 60px!important;\
        height: 30px!important;\
        line-height: 28px;\
        font-size: small!important;\
        text-align: center!important;\
        color: '+ realWhite + ';\
        cursor: pointer!important;\
    }\
    #actionButtonBrick:hover{\
        opacity: .7!important;\
    }\
    #skipButtonBrick{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 0;\
        display: none;\
        bottom: 20px!important;\
        right: 80px!important;\
        border-radius: 5px;\
        background-color: transparent!important;\
        width: 60px!important;\
        height: 25px!important;\
        font-size: small!important;\
        text-align: center!important;\
        padding-top: 7px!important;\
        color: '+ byTheme(charmingGrey, realWhite) + '!important;\
        cursor: pointer!important;\
        text-decoration: underline!important;\
    }\
    #paragraphBrick{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 1;\
        color:'+ byTheme(almostBlack, realWhite) + '!important;\;\
        text-align: right;\
        bottom: 10px!important;\
        right: 20px!important;\
        border-radius: 5px;\
        background-color: transparent!important;\
        width: 300px!important;\
        height: 25px!important;\
        font-weight: 200;\
        font-size: x-small!important;\
        padding-top: 7px!important;\
        cursor: pointer!important;\
    }\
    #paragraphBrick a{\
        text-decoration: none !important;\
        color:'+ byTheme(almostBlack, realWhite) + '!important;\
        font-weight: 600;\
        font-size: x-small;\
    }\
    #paragraphBrick a svg{\
        transform: translate(-4px, 3px) scale(.65) !important;\
    }\
    #notificationParagraphBrick{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 0;\
        display: none;\
        font-size: small!important;\
        background-color: transparent!important;\
        width: 300px!important;\
        height: 10px!important;\
        left: 20px!important;\
        bottom: 60px!important;\
        text-align: center!important;\
        color:'+ byTheme(charmingGrey, realWhite) + '!important;\
    }\
    @keyframes Furious{\
        0% {\
        transform: translateX(0) translateY(0);\
    }\
    10% {\
        transform: translateX(0) translateY(0);\
    }\
    15% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    20% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    25% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    30% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    35% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    40% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    45% {\
        transform: translateX(0) translateY(-3px);\
    }\
    90% {\
        transform: translateX(0) translateY(0);\
    }\
    }@-webkit-keyframes Furious {\
        0% {\
        transform: translateX(0) translateY(0);\
    }\
    10% {\
        transform: translateX(0) translateY(0);\
    }\
    15% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    20% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    25% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    30% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    35% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    40% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    45% {\
        transform: translateX(0) translateY(-3px);\
    }\
    90% {\
        transform: translateX(0) translateY(0);\
    }\
    }@-moz-keyframes Furious {\
        0% {\
        transform: translateX(0) translateY(0);\
    }\
    10% {\
        transform: translateX(0) translateY(0);\
    }\
    15% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    20% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    25% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    30% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    35% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    40% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    45% {\
        transform: translateX(0) translateY(-3px);\
    }\
    90% {\
        transform: translateX(0) translateY(0);\
    }\
    }@-ms-keyframes Furious {\
        0% {\
        transform: translateX(0) translateY(0);\
    }\
    10% {\
        transform: translateX(0) translateY(0);\
    }\
    15% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    20% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    25% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    30% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    35% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    40% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    45% {\
        transform: translateX(0) translateY(-3px);\
    }\
    90% {\
        transform: translateX(0) translateY(0);\
    }\
    }@-o-keyframes Furious {\
        0% {\
        transform: translateX(0) translateY(0);\
    }\
    10% {\
        transform: translateX(0) translateY(0);\
    }\
    15% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    20% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    25% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    30% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    35% {\
        transform: translateX(4px) translateY(-3px);\
    }\
    40% {\
        transform: translateX(-4px) translateY(-3px);\
    }\
    45% {\
        transform: translateX(0) translateY(-3px);\
    }\
    90% {\
        transform: translateX(0) translateY(0);\
    }\
    }@keyframes Bad {\
        0% {\
        transform: translateX(0);\
    }\
    10% {\
        transform: translateX(0);\
    }\
    20% {\
        transform: translateX(4px);\
    }\
    30% {\
        transform: translateX(-4px);\
    }\
    40% {\
        transform: translateX(4px);\
    }\
    50% {\
        transform: translateX(-4px);\
    }\
    60% {\
        transform: translateX(4px);\
    }\
    70% {\
        transform: translateX(-4px);\
    }\
    80% {\
        transform: translateX(0);\
    }\
    90% {\
        transform: translateX(0);\
    }\
    }@-webkit-keyframes Bad {\
        0% {\
        transform: translateX(0);\
    }\
    10% {\
        transform: translateX(0);\
    }\
    20% {\
        transform: translateX(4px);\
    }\
    30% {\
        transform: translateX(-4px);\
    }\
    40% {\
        transform: translateX(4px);\
    }\
    50% {\
        transform: translateX(-4px);\
    }\
    60% {\
        transform: translateX(4px);\
    }\
    70% {\
        transform: translateX(-4px);\
    }\
    80% {\
        transform: translateX(0);\
    }\
    90% {\
        transform: translateX(0);\
    }\
    }@-moz-keyframes Bad {\
        0% {\
        transform: translateX(0);\
    }\
    10% {\
        transform: translateX(0);\
    }\
    20% {\
        transform: translateX(4px);\
    }\
    30% {\
        transform: translateX(-4px);\
    }\
    40% {\
        transform: translateX(4px);\
    }\
    50% {\
        transform: translateX(-4px);\
    }\
    60% {\
        transform: translateX(4px);\
    }\
    70% {\
        transform: translateX(-4px);\
    }\
    80% {\
        transform: translateX(0);\
    }\
    90% {\
        transform: translateX(0);\
    }\
    }@-ms-keyframes Bad {\
        0% {\
        transform: translateX(0);\
    }\
    10% {\
        transform: translateX(0);\
    }\
    20% {\
        transform: translateX(4px);\
    }\
    30% {\
        transform: translateX(-4px);\
    }\
    40% {\
        transform: translateX(4px);\
    }\
    50% {\
        transform: translateX(-4px);\
    }\
    60% {\
        transform: translateX(4px);\
    }\
    70% {\
        transform: translateX(-4px);\
    }\
    80% {\
        transform: translateX(0);\
    }\
    90% {\
        transform: translateX(0);\
    }\
    }@-o-keyframes Bad {\
        0% {\
        transform: translateX(0);\
    }\
    10% {\
        transform: translateX(0);\
    }\
    20% {\
        transform: translateX(4px);\
    }\
    30% {\
        transform: translateX(-4px);\
    }\
    40% {\
        transform: translateX(4px);\
    }\
    50% {\
        transform: translateX(-4px);\
    }\
    60% {\
        transform: translateX(4px);\
    }\
    70% {\
        transform: translateX(-4px);\
    }\
    80% {\
        transform: translateX(0);\
    }\
    90% {\
        transform: translateX(0);\
    }\
    }@keyframes Neutral {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateX(5px);\
    }\
    40% {\
        transform: translateX(5px);\
    }\
    60% {\
        transform: translateX(-5px);\
    }\
    70% {\
        transform: translateX(-5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-webkit-keyframes Neutral {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateX(5px);\
    }\
    40% {\
        transform: translateX(5px);\
    }\
    60% {\
        transform: translateX(-5px);\
    }\
    70% {\
        transform: translateX(-5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-moz-keyframes Neutral {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateX(5px);\
    }\
    40% {\
        transform: translateX(5px);\
    }\
    60% {\
        transform: translateX(-5px);\
    }\
    70% {\
        transform: translateX(-5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-ms-keyframes Neutral {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateX(5px);\
    }\
    40% {\
        transform: translateX(5px);\
    }\
    60% {\
        transform: translateX(-5px);\
    }\
    70% {\
        transform: translateX(-5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-o-keyframes Neutral {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateX(5px);\
    }\
    40% {\
        transform: translateX(5px);\
    }\
    60% {\
        transform: translateX(-5px);\
    }\
    70% {\
        transform: translateX(-5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@keyframes Good {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(-7px);\
    }\
    40% {\
        transform: translateY(5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-webkit-keyframes Good {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(-7px);\
    }\
    40% {\
        transform: translateY(5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-moz-keyframes Good {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(-7px);\
    }\
    40% {\
        transform: translateY(5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-ms-keyframes Good {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(-7px);\
    }\
    40% {\
        transform: translateY(5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-o-keyframes Good {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(-7px);\
    }\
    40% {\
        transform: translateY(5px);\
    }\
    80% {\
        transform: translateY(0);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@keyframes Super {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(4px);\
    }\
    50% {\
        transform: translateY(4px);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-webkit-keyframes Super {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(4px);\
    }\
    50% {\
        transform: translateY(4px);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-moz-keyframes Super {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(4px);\
    }\
    50% {\
        transform: translateY(4px);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-ms-keyframes Super {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(4px);\
    }\
    50% {\
        transform: translateY(4px);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }@-o-keyframes Super {\
        0% {\
        transform: translateY(0);\
    }\
    10% {\
        transform: translateY(0);\
    }\
    30% {\
        transform: translateY(4px);\
    }\
    50% {\
        transform: translateY(4px);\
    }\
    90% {\
        transform: translateY(0);\
    }\
    }\
    #sharedComponentsArea{\
        transition:'+ transitionChill + '\
        opacity: 0;\
        display: none;\
    }\
    #imagenPerfilOperator{\
        transition:'+ transitionChill + '\
        position: absolute;\
        left: 20px;\
        top: 20px;\
        width: 55px;\
        height: 55px;\
        border-radius: 30px;\
        background-image: url('+ userPicture() + ');\
        background-color:'+ byTheme(charmingGrey, realWhite) + ';\
        background-repeat: no-repeat;\
        background-size: cover;\
    }\
    #stateLight{\
        transition:'+ transitionChill + '\
        position: absolute;\
        background-color: '+ realGrey + ';\
        border-radius: 5px;\
        outline: 3px solid '+ byTheme(realWhite, charmingGrey) + '!important;\
        width: 10px;\
        height: 10px;\
        left: 45px;\
        top: 45px;\
    }\
    #operatorBrick{\
        transition:'+ transitionChill + '\
        position: absolute;\
        color: '+ byTheme(charmingGrey, realWhite) + '!important;\
        font-size: larger;\
        font-weight: 400;\
        padding: 10px;\
        left: 80px;\
        top: 15px;\
    }\
    #stateBrick{\
        transition:'+ transitionChill + '\
        position: absolute;\
        color: '+ byTheme(charmingGrey, realWhite) + '!important;\
        font-size: small;\
        font-weight: 200;\
        padding: 10px;\
        left: 80px;\
        top: 40px;\
    }\
    #platformBoxBrick{\
        transition:'+ transitionChill + '\
        position: absolute;\
        outline: 1px solid '+ byTheme("rgba(0,0,0,0.03)", "rgba(0,0,0,0.1)") + ';\
        outline-offset: -1px;\
        -ms-overflow-style: none;\
        scrollbar-width: none;\
        overflow: auto;\
        left: 0;\
        top: 100px;\
        width: 100%;\
        height: 120px;\
        background-color: '+ byTheme(nebulaGrey, almostBlack) + ';\
    }\
    #platformBoxBrick::-webkit-scrollbar{\
        display: none;\
    }\
    #bubbleWelcome{\
        transition:'+ transitionChill + '\
        display: none;\
        margin: 10px !important;\
        padding: 6px 10px 10px 10px !important;\
        font-weight: 300;\
        font-size: small;\
        max-width: 180px;\
        height: auto;\
        border-radius: 5px;\
        color: '+ byTheme(charmingGrey, realWhite) + '!important;\
        background-color:'+ byTheme(realWhite, charmingGrey) + '!important;\;\
    }\
    #buttonWhatsappBrick{\
        transition:'+ transitionChill + '\
        opacity: 1;\
        display: inline-block\
        background-color: transparent;\
        width: 35px;\
        height: 35px;\
        margin: 7px 7.5px 8px 7.5px;\
        border-radius: none !important;\
        border: none!important;\
        cursor: pointer!important;\
    }\
    #buttonWhatsappBrick:hover{\
        opacity: 0.8;\
    }\
    \
    #whatsappIconShape{ \
        transition:'+ transitionChill + '\
        fill:'+ byTheme(realWhite, charmingGrey) + ';\
    }\
    #whatsappArea{\
        transition:'+ transitionChill + '\
        opacity: 1;\
        display: none;\
    }\
    \
    #textAreaWsp{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 1;\
        color: '+ byTheme(charmingGrey, realWhite) + '!important;\
        resize: none!important;\
        font-family: "Outfit", sans-serif;\
        font-size: medium!important;\
        outline: 0!important;\
        box-shadow: none!important;\
        border: none!important;\
        background-color: transparent!important;\
        width: 220px!important;\
        height: 20px!important;\
        left: 20px!important;\
        bottom: 27px!important;\
        text-align: left!important;\
    }\
    #wspSendButtonBrick{\
        transition:'+ transitionChill + '\
        position: absolute;\
        opacity: 1;\
        display: block;\
        cursor: pointer;\
        width: 40px;\
        height: 40px;\
        bottom: 15px;\
        right: 20px;\
        background-color: '+ tellerGreen + ';\
        border-radius: 25px;\
        color: white;\
        text-align: center;\
        text-decoration: none;\
    }\
    #wspSendButtonBrick:hover{\
        transform: scale(1.05);\
    }\
    \
    #wspSendButtonSVG{\
        transition:'+ transitionChill + '\
        fill:#fff\
    }\
    #buttonTelegramBrick{\
        transition:'+ transitionChill + '\
        opacity: 1;\
        display: inline-block\
        background-color: transparent;\
        width: 35px;\
        height: 35px;\
        margin: 7px 7.5px 8px 7.5px;\
        border-radius: none !important;\
        border: none!important;\
        cursor: pointer!important;\
    }\
    #buttonTelegramBrick:hover{\
        opacity: 0.8;\
    }\
    \
    #telegramIconShape{\
        transition:'+ transitionChill + '\
        fill:'+ byTheme(realWhite, charmingGrey) + ';\
    }\
    #telegramArea{\
        transition:'+ transitionChill + '\
        opacity: 1;\
        display: none;\
    }\
    \
    #textAreaTelegram{\
        transition:'+ transitionChill + '\
        position: absolute!important;\
        opacity: 1;\
        color: '+ byTheme(charmingGrey, realWhite) + '!important;\
        resize: none!important;\
        font-family: "Outfit", sans-serif;\
        font-size: medium!important;\
        outline: 0!important;\
        box-shadow: none!important;\
        border: none!important;\
        background-color: transparent!important;\
        width: 220px!important;\
        height: 20px!important;\
        left: 20px!important;\
        bottom: 27px!important;\
        text-align: left!important;\
    }\
    #telegramSendButtonBrick{\
        transition:'+ transitionChill + '\
        position: absolute;\
        opacity: 1;\
        display: block;\
        cursor: pointer;\
        width: 40px;\
        height: 40px;\
        bottom: 15px;\
        right: 20px;\
        background-color: '+ telegramBlue + ';\
        border-radius: 25px;\
        color: white;\
        text-align: center;\
        text-decoration: none;\
    }\
    #telegramSendButtonBrick:hover{\
        transform: scale(1.05);\
    }\
    #telegramSendButtonSVG{\
        transition:'+ transitionChill + '\
        fill:#fff\
    }\
    #buttonMessengerBrick{\
        transition:'+ transitionChill + '\
        opacity: 1;\
        display: inline-block\
        background-color: transparent;\
        width: 35px;\
        height: 35px;\
        margin: 7px 7.5px 8px 7.5px;\
        border-radius: none !important;\
        border: none!important;\
        cursor: pointer!important;\
    }\
    #buttonMessengerBrick:hover{\
        opacity: 0.8;\
    }\
    \
    #messengerIconShape{\
        transition:'+ transitionChill + '\
        fill:'+ byTheme(realWhite, charmingGrey) + ';\
    }\
    #messengerArea{\
        transition:'+ transitionChill + '\
        opacity: 0;\
        display: none;\
    }\
    #messengerSendButtonBrick{\
        transition:'+ transitionChill + '\
        position: absolute;\
        opacity: 1;\
        display: block;\
        cursor: pointer;\
        width: 320px;\
        height: 50px;\
        bottom: 10px;\
        left: 10px;\
        background-color: #0384ff;\
        border-radius: 5px;\
        color: white;\
        text-align: center;\
        text-decoration: none;\
    }\
    #messengerSendButtonBrick:hover > svg #messengerIconFull{\
        transform: scale(1.05);\
    }\
    #messengerSendButtonBrick svg{\
        transform: translate(10px, 10px);\
    }\
    #messengerIconFull{\
        transition:'+ transitionChill + '\
        fill: white;\
    }\
    #buttonsComplementsBrick{\
        transition:'+ transitionChill + '\
        position:absolute;\
        opacity: 0;\
        display: none '+ complementsComposer()[3] + ';\
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);\
        white-space: nowrap;\
        '+ getSide()[0] + ': ' + getSide()[1] + 'px;\
        bottom: 0px;\
        background-color: '+ byTheme(realWhite, charmingGrey) + '!important;\
        height: 50px;\
        width: '+ complementsComposer()[1] + 'px;\
        border-radius: '+ userBorderRadius() + 'px;\
    }\
    #notificationInMainButton{\
        opacity: 0;\
        display: none;\
        transition:'+ transitionChill + '\
        position: absolute;\
        background-color: '+ tellerGreen + ';\
        '+ getSide()[0] + ': 85%;\
        top: -3px;\
        color:'+ realWhite + ';\
        border-radius: 10px;\
        width: 14px;\
        height: 14px;\
        font-family: "Outfit", sans-serif;\
        font-size: x-small!important;\
        line-height: 13px;\
        text-align: center!important;\
        cursor: pointer!important;\
    }\
    \
    #notificationInMainButtonPulse{\
        opacity: 1;\
        animation-name: Pulse;\
        animation-play-state: running;\
        animation-duration: 3s!important;\
        animation-timing-function: ease-all!important;\
        animation-iteration-count: infinite!important;\
        '+ getSide()[0] + ': 0;\
        top: 0;\
        position:absolute;\
        width: 14px;\
        height: 14px;\
        box-shadow: 0 0 5px '+ tellerGreen + ';\
        outline: 1px solid '+ tellerGreen + ';\
        border-radius: 15px;\
        transform: scale(.8);\
        cursor: pointer!important;\
      }\
    @keyframes Pulse {\
    0% {\
        opacity: 1;\
        transform: scale(.8);\
    }\
    40% {\
        opacity: 0;\
        transform: scale(1.4);\
    }\
    100% {\
        opacity: 0;\
        transform: scale(.8);\
    }\
}\
    </style>'
    //Teller full element
    var tellerBrick = '\
    <brick id="hoverBrick"></brick>\
    <brick id="buttonFatherBrick">\
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30 30" ><circle class="tellersFace" cx="15" cy="15" r="15"/><path id="palomita" d="M22.8,7.4l-9.9,15.2c-0.2,0.2-0.5,0.1-0.5-0.1L11.9,15c0-0.1-0.1-0.3-0.3-0.3l-5-0.7c-0.3,0-0.3-0.4-0.1-0.6L22.4,7C22.7,6.8,22.9,7.1,22.8,7.4z"/><path id="xBrick" d="M17.3,14.8l3.7-3.7c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-3.7,3.7L11.6,9C11,8.4,10,8.4,9.4,9c-0.6,0.6-0.6,1.5,0,2.1l3.7,3.7l-3.7,3.7c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4l3.7-3.7l3.7,3.7c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L17.3,14.8z"/></svg>\
        <brick id="notificationInMainButton"><brick id="notificationInMainButtonPulse"></brick></brick>\
    </brick>\
    <brick id="buttonsComplementsBrick">'+ complementsComposer()[0] + '</brick>\
    <brick id="fatherBrick">\
        <brick id="feedbackBrick">\
            <brick id="mainNotificationBrick">\
                <brick id="titleBrick">' + byLanguage("How would you describe your experience?", "Califique su experiencia.") + '</brick>\
                <brick id="paragraphBrick">' + byLanguage('Powered by ' + tellerSmallA, 'Con el poder de ' + tellerSmallA) + '</brick>\
            </brick>\
            <brick id="emojisBrick">\
                <brick id="emojiBrick1">\
                    <brick id="emojiFaceBrick1">\
                        <svg id="SuperFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path class="tellersGesture" d="M25.5,20.89h-11a1,1,0,0,0-.79.37,1,1,0,0,0-.19.85A6.32,6.32,0,0,0,20,26.66c4.44,0,6.18-3,6.49-4.58a1,1,0,0,0-.21-.83A1,1,0,0,0,25.5,20.89Z"/></g></g></svg>\
                    </brick>\
                    <brick id="emojiDescriptionBrick1">' + byLanguage("Super", "Super") + '</brick>\
                </brick>\
                <brick id="emojiBrick2">\
                    <brick id="emojiFaceBrick2">\
                        <svg id="GoodFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path class="tellersGesture" d="M25,20.71a8.54,8.54,0,0,1-5,1.34,8.47,8.47,0,0,1-5-1.34,1,1,0,1,0-1.28,1.53A10.17,10.17,0,0,0,20,24.05a10.17,10.17,0,0,0,6.3-1.81A1,1,0,1,0,25,20.71Z"/></g></g></svg>\
                    </brick>\
                    <brick id="emojiDescriptionBrick2">' + byLanguage("Good", "Buena") + '</brick>\
                </brick>\
                <brick id="emojiBrick3">\
                    <brick id="emojiFaceBrick3">\
                        <svg id="NeutralFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M12.83,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,12.83,13.58Z"/><path class="tellersGesture" d="M23.47,22.4H16.53a1,1,0,0,0,0,2h6.94a1,1,0,0,0,0-2Z"/></g></g></svg>\
                    </brick>\
                    <brick id="emojiDescriptionBrick3">' + byLanguage("Normal", "Normal") + '</brick>\
                </brick>\
                <brick id="emojiBrick4">\
                    <brick id="emojiFaceBrick4">\
                        <svg id="BadFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path class="tellersGesture" d="M20,20.47a10.18,10.18,0,0,0-6.3,1.82A1,1,0,1,0,15,23.82a8.46,8.46,0,0,1,5-1.35,8.46,8.46,0,0,1,5,1.35,1,1,0,0,0,.64.23,1,1,0,0,0,.64-1.76A10.18,10.18,0,0,0,20,20.47Z"/></g></g></svg>\
                    </brick>\
                    <brick id="emojiDescriptionBrick4">' + byLanguage("Bad", "Mala") + '</brick>\
                </brick>\
                <brick id="emojiBrick5">\
                    <brick id="emojiFaceBrick5">\
                        <svg id="FuriousFaceTeller" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path class="tellersGesture" d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path class="tellersGesture" d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path class="tellersGesture" d="M20,20.13c-4.44,0-6.18,3-6.49,4.59a1,1,0,0,0,.21.82,1,1,0,0,0,.78.37h11a1,1,0,0,0,.79-.38,1,1,0,0,0,.19-.84A6.32,6.32,0,0,0,20,20.13Z"/></g></g></svg>\
                    </brick>\
                    <brick id="emojiDescriptionBrick5">' + byLanguage("Furious", "Furiosa") + '</brick>\
                </brick>\
                <brick id="emojiSelectorBrick"></brick>\
            </brick>\
            <brick id="textAreasBrick">\
                <textarea id="textAreaBrick" placeholder="' + byLanguage("How would you describe your experience?", "Compartanos su experiencia.") + '"></textarea>\
            </brick>\
                <brick id="inputAreasBrick">\
                    <input id="inputAreaBrick" placeholder="' + byLanguage("email@example.com", "correo@ejemplo.com") + '"></input>\
                </brick>\
                <brick id="actionButtonBrick">' + byLanguage("NEXT", "SIG.") + '</brick>\
                <brick id="skipButtonBrick">' + byLanguage("Skip", "Omitir") + '</brick>\
                <brick id="notificationParagraphBrick"></brick>\
        </brick>\
        <brick id="sharedComponentsArea">\
            <brick id="imagenPerfilOperator" src="none" alt="teller Operator">\
                <brick id="stateLight"></brick>\
            </brick>\
            <brick id="operatorBrick">'+ operatorData()[0] + '</brick>\
            <brick id="stateBrick">'+ operatorData()[1] + '</brick>\
            <brick id="platformBoxBrick">\
                <brick id="bubbleWelcome"></brick>\
            </brick>\
        </brick>\
        <brick id="whatsappArea">\
            <input id="textAreaWsp" placeholder="' + byLanguage("Send us a message", "Escribe un mensaje.") + '"></input>\
            <brick id="wspSendButtonBrick">' + wspSendButtonIcon + '</brick>\
        </brick>\
        <brick id="telegramArea">\
            <input id="textAreaTelegram" placeholder="' + byLanguage("Join us in Telegram", "Unetenos en Telegram.") + '"></input>\
            <brick id="telegramSendButtonBrick">' + telegramSendButtonIcon + '</brick>\
        </brick>\
        <brick id="messengerArea">\
            <a id="messengerSendButtonBrick">'+ byLanguage("Send us a message", "Envienos un mensaje") + messengerSendButtonIcon + '</a>\
        </brick>\
    </brick>'

    // Select description emoji function(x: Selected description emoji)
    function sde(x) {
        x.style.opacity = "1";
        x.style.transform = "translateY(-5px)";
    }

    // Unselect description emoji function(x: Unselected description emoji)
    function ude(x) {
        x.style.opacity = "0";
        x.style.transform = "translateY(0px)";
    }

    // StayButHide(x: object that u wanna stay but hide)
    function hmm(x) {
        x.style.opacity = "0";
        setTimeout(function () { x.style.display = "none"; }, 300);
    }

    // ShowMeMan(x: object that u wanna show man)
    function smm(x) {
        x.style.display = "block";
        setTimeout(function () {
            x.style.opacity = "1";
        }, 310);
    }

    // ShowMyEmojiMan(x: object that u wanna show man)
    function smem(x) {
        x.style.display = "block";
        x.style.opacity = "1";
    }

    // Minify my opacity men
    function mmom(x) {
        x.style.opacity = "0.25";
    }

    // Get theme selected by user
    function userTheme() {
        a = tellerTag.getAttribute("theme")
        if (a == "dark") { return "dark"; }
        else { return "light"; }
    }

    // Set some parameters manually by widget side
    function getSide() {
        a = tellerTag.getAttribute("side")
        if (a == "right") {
            return [
                "right",
                "60",
                'transparent transparent transparent ' + byTheme(realWhite, charmingGrey),
                '5px 0 5px 7px'
            ];
        }
        else {
            return [
                "left",
                "60",
                'transparent ' + byTheme(realWhite, charmingGrey) + ' transparent transparent',
                '5px 7px 5px 0'
            ];
        }
    }

    // Select colors by theme
    function byTheme(light, dark) {
        if (userTheme() == 'dark') { return dark; }
        else { return light; }
    }

    // Create or not Feedback Button
    function buttonFeedbackComposer() {
        a = tellerTag.getAttribute("formUrl")
        if (a == null || a == "none" || a == "") {
            tellerUseFeedback = false;
            return '';
        }
        else {
            tellerUseFeedback = true;
            return feedbackMainButton
        };
    }

    // Detect browser language
    function detectClientLang() {
        var a = tellerTag.getAttribute("lang");
        if (a.includes("es")) {
            clientLang = "es";
        }
        else { return }
        console.log("browser language: " + a)
    }

    // Detect user language
    function detectUserLang() {
        var a = navigator.language || navigator.userLanguage || navigator.browserLanguage;
        if (a.includes("es")) {
            userLang = "es";
        }
        else { return }
        console.log("browser language: " + a)
    }

    // Set phrase by browser language
    function byLanguage(en, es) {
        if (userLang == 'es') { return es; }
        else { return en; }
    }

    // Set phrase by client language
    function byClientLanguage(en, es) {
        if (clientLang == 'en') { return en; }
        else if (clientLang == 'es') { return es; }
    }

    // Get tint color
    function tintColor() {
        const colorRegex = /^(#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}|rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|[A-Za-z]+)$/;
        const a = tellerTag.getAttribute("tintColor");
        if (colorRegex.test(a)) {
            return a;
        } else {
            return byTheme(charmingGrey, realWhite);
        }
    }

    // Get border-radius of bubble selected by user
    function userBorderRadius() {
        const numberRegex = /^\d{1,2}$/;
        a = tellerTag.getAttribute("borderRadius")
        if (numberRegex.test(a)) {
            return a;
        } else {
            return "25";
        }
    }

    // Execute selected model
    function getModelAndExecute() {
        a = tellerTag.getAttribute("appearAfter")
        b = /\d/;
        c = Math.round(parseInt(a)) * 1000;
        if (b.test(a)) {
            setTimeout(function () {
                modeSelected = tellerTag.getAttribute("tellerMode")
                return eval(modeSelected + "()");
            }, c);
        } else {
            console.log("No model selected")
            return
        }
    }

    // Create or not messenger Button
    function buttonMessengerComposer() {
        a = tellerTag.getAttribute("messengerID")
        if (a == null || a == "none" || a == "") {
            tellerUseMessenger = false;
            return '';
        }
        else {
            tellerUseMessenger = true;
            return messengerMainButton;
        };
    }

    // Create or not Whatsapp Button
    function buttonWspComposer() {
        const phoneRegex = /^\d{4,20}$/;
        a = tellerTag.getAttribute("whatsappNumber")
        if (a == null || a == "none" || a == "") {
            tellerUseWsp = false;
            return
        } else {
            cleanedNumber = a.replace(/[\s+]/g, "");
            if (phoneRegex.test(cleanedNumber)) {
                tellerUseWsp = true;
                return wspMainButton
            }
            else {
                tellerUseWsp = false;
                return;
            };
        }
    }

    // Create or not Whatsapp Button
    function buttonTelegramComposer() {
        a = tellerTag.getAttribute("telegramID")
        if (a == null || a == "none" || a == "") {
            tellerUseTelegram = false;
            return '';
        }
        else {
            tellerUseTelegram = true;
            return telegramMainButton
        };
    }

    // Get profile picture URL
    function userPicture() {
        a = tellerTag.getAttribute("photoUrl")
        if (a == null || a == "none" || a == "") { return 'none'; }
        else { return a };
    }

    // Complements generator
    function complementsComposer() {
        var x = numberOfComplements;
        var y = 0;
        buttonFeedbackComposer();
        buttonWspComposer();
        buttonMessengerComposer();
        buttonTelegramComposer();
        if (!tellerUseFeedback && !tellerUseMessenger && !tellerUseWsp && !tellerUseTelegram) {
            setTimeout(function () { tellerTag.innerHTML = "" }, 1000);
            return ["", y, "none !important", "none !important"]
        }
        else {
            if (tellerUseFeedback) { x++ }
            if (tellerUseWsp) { x++ }
            if (tellerUseMessenger) { x++ }
            if (tellerUseTelegram) { x++ }
            if (tellerUseFeedback && !tellerUseMessenger && !tellerUseWsp && !tellerUseTelegram) { onlyFeedback = true; }
            if (tellerUseMessenger && !tellerUseFeedback && !tellerUseWsp && !tellerUseTelegram) { onlyMessenger = true; }
            if (tellerUseWsp && !tellerUseMessenger && !tellerUseFeedback && !tellerUseTelegram) { onlyWsp = true; }
            if (tellerUseTelegram && !tellerUseMessenger && !tellerUseFeedback && !tellerUseWsp) { onlyTelegram = true; }
            //Hide complements brick if only one complement is used
            if (x == 0) y = 0;
            else if (x == 1) { y = 0; return [(buttonFeedbackComposer() + buttonWspComposer() + buttonMessengerComposer() + buttonTelegramComposer()), y, "block", "!important"] }
            else if (x == 2) { y = 100; return [(buttonFeedbackComposer() + buttonWspComposer() + buttonMessengerComposer() + buttonTelegramComposer()), y, "block", ""] }
            else if (x == 3) { y = 150; return [(buttonFeedbackComposer() + buttonWspComposer() + buttonMessengerComposer() + buttonTelegramComposer()), y, "block", ""] }
            else if (x == 4) { y = 200; return [(buttonFeedbackComposer() + buttonWspComposer() + buttonMessengerComposer() + buttonTelegramComposer()), y, "block", ""] }
        }
    }

    // Get operator state (online/offline & name)
    function operatorData() {
        // User attributes
        u = tellerTag.getAttribute("username")
        n = tellerTag.getAttribute("operatorName")
        h = tellerTag.getAttribute("supportHours")
        // Get or set operatorName
        function operatorName() {
            if (n == null || n == "none" || n == "" && u == null || u == "none" || u == "") { return byLanguage("Bot John", "Bot Juancho"); }
            else if (u == null || u == "none" || u == "") { return n }
            else if (n == null || n == "none" || n == "") { return u }
            else { return n }
        }
        //Get or set operatorState (online/offline)
        function operatorState() {
            //Zero Zone
            var localDate = new Date();
            var zeroDate = localDate.toUTCString();
            zeroTime = ((zeroDate.split(" "))[4]).split(":");
            zeroInSec = (zeroTime[0] * 3600) + (zeroTime[1] * 60);
            a = h.slice(0, 5); a1 = a.split(":"); a2 = (a1[0] * 3600) + (a1[1] * 60); //openhour
            b = h.slice(6, 11); b1 = b.split(":"); b2 = (b1[0] * 3600) + (b1[1] * 60); //endhour
            pol = h.slice(12, 13)//operator (+ or -)
            c = h.slice(13, 18); c1 = c.split(":"); c2 = (c1[0] * 3600) + (c1[1] * 60);//gmt zone
            oh = 0;
            eh = 0;
            getOhEh()
            function getOhEh() {
                if (pol == "+") { oh = a2 - c2; eh = b2 - c2 }
                else { oh = a2 + c2; eh = b2 + c2 }
            }

            if ((oh < eh && zeroInSec >= oh && zeroInSec < eh) || (oh > eh && zeroInSec < eh && zeroInSec < oh) || (oh == eh)) {
                stateGeneral = true;
                return byLanguage("Active", "Activo");
            }
            else {
                stateGeneral = false;
                return byLanguage("Offline", "Desconectado");
            }
        }
        return [operatorName(), operatorState()]
    }

    //Message from operator on platforms
    function welcomeBubble() {
        a = tellerTag.getAttribute("bubbleText")
        if (a == null || a == "none" || a == "") return byLanguage("Hello! Juancho here from the support team. Create your complete chat button 100% free with unlimited complements.", "¡Hola! Juancho aquí del equipo de soporte. Creá tu botón de chat completo de forma 100% gratuita con complementos ilimitados.");
        else { return a };
    }

    ////Main brick function
    function brick() {
        detectClientLang();
        detectUserLang();
        complementsComposer()
        //Create teller brick
        tellerTag.innerHTML = styleSheetTeller + tellerBrick;
        //Get form entries for feedback query
        function urlFeedbackConstructor() {
            ffu = tellerTag.getAttribute("formUrl")
            ss = ffu.match("https(.*)/viewform");
            var formEntries = ffu.match(/entry.([0-9]+)/g);
            entryA = formEntries[0];
            entryB = formEntries[1];
            entryC = formEntries[2];
            entryD = formEntries[3];
            return ss[0].replace("viewform", "formResponse?usp=pp_url");
        }

        //Main Button
        const buttonFatherBrick = document.getElementById("buttonFatherBrick");
        const xBrick = document.getElementById("xBrick");
        const palomita = document.getElementById("palomita");
        const buttonMessengerBrick = document.getElementById("buttonMessengerBrick");
        const buttonTelegramBrick = document.getElementById("buttonTelegramBrick");
        const buttonWhatsappBrick = document.getElementById("buttonWhatsappBrick");
        const buttonFeedbackBrick = document.getElementById("buttonFeedbackBrick");
        const stateLight = document.getElementById("stateLight");
        const notificationInMainButton = document.getElementById("notificationInMainButton");

        //feedback components
        var currentHeightforFeedback = 200;
        const feedbackIconShape = document.getElementById("feedbackIconShape");

        //Main Button Notification
        const hoverBrick = document.getElementById("hoverBrick");

        //Global Components
        const mainNotificationBrick = document.getElementById("mainNotificationBrick");
        const feedbackBrick = document.getElementById("feedbackBrick");

        //Main Brick
        const fatherBrick = document.getElementById("fatherBrick");
        const titleBrick = document.getElementById("titleBrick");
        const notificationParagraphBrick = document.getElementById("notificationParagraphBrick")
        const paragraphBrick = document.getElementById("paragraphBrick");

        //EmailInput
        const inputAreaBrick = document.getElementById("inputAreaBrick");

        //Feedback textarea
        const textAreasBrick = document.getElementById("textAreasBrick");
        const textAreaBrick = document.getElementById("textAreaBrick");

        //Action Buttons
        const actionButtonBrick = document.getElementById("actionButtonBrick");
        const skipButtonBrick = document.getElementById("skipButtonBrick");
        const buttonsComplementsBrick = document.getElementById("buttonsComplementsBrick");

        //Messenger components
        const messengerArea = document.getElementById("messengerArea");
        const messengerSendButtonBrick = document.getElementById("messengerSendButtonBrick");
        const messengerIconShape = document.getElementById("messengerIconShape");

        //Wsp components
        const whatsappArea = document.getElementById("whatsappArea");
        const textAreaWsp = document.getElementById("textAreaWsp");
        const wspSendButtonBrick = document.getElementById("wspSendButtonBrick");
        const whatsappIconShape = document.getElementById("whatsappIconShape");

        //Telegram components
        const telegramArea = document.getElementById("telegramArea");
        const textAreaTelegram = document.getElementById("textAreaTelegram");
        const telegramSendButtonBrick = document.getElementById("telegramSendButtonBrick");
        const telegramIconShape = document.getElementById("telegramIconShape");

        //Shared platforms components
        const platformBoxBrick = document.getElementById("platformBoxBrick")
        const bubbleWelcome = document.getElementById("bubbleWelcome")

        //Emoji Zone
        const emojiSelectorBrick = document.getElementById("emojiSelectorBrick");
        const emojisBrick = document.getElementById("emojisBrick");
        const emojiBrick1 = document.getElementById("emojiBrick1");
        const emojiBrick2 = document.getElementById("emojiBrick2");
        const emojiBrick3 = document.getElementById("emojiBrick3");
        const emojiBrick4 = document.getElementById("emojiBrick4");
        const emojiBrick5 = document.getElementById("emojiBrick5");
        const emojiDescriptionBrick1 = document.getElementById("emojiDescriptionBrick1");
        const emojiDescriptionBrick2 = document.getElementById("emojiDescriptionBrick2");
        const emojiDescriptionBrick3 = document.getElementById("emojiDescriptionBrick3");
        const emojiDescriptionBrick4 = document.getElementById("emojiDescriptionBrick4");
        const emojiDescriptionBrick5 = document.getElementById("emojiDescriptionBrick5");
        const SuperFaceTeller = document.getElementById("SuperFaceTeller");
        const GoodFaceTeller = document.getElementById("GoodFaceTeller");
        const NeutralFaceTeller = document.getElementById("NeutralFaceTeller");
        const BadFaceTeller = document.getElementById("BadFaceTeller");
        const FuriousFaceTeller = document.getElementById("FuriousFaceTeller");

        //Show paragraph brick on left
        function spbol() {
            if (!emotionSelected) {
                hmm(paragraphBrick)
                setTimeout(function () { paragraphBrick.style.textAlign = "left" }, 300);
                setTimeout(function () { smm(paragraphBrick); }, 600);
            }
        }

        //turnLight
        turnLight()
        function turnLight() {
            if (stateGeneral) { stateLight.style.backgroundColor = onlineGreen }
            else stateLight.style.backgroundColor = nebulaGrey;
        }

        //Get call to action message by user
        function userCallToActionMessage() {
            a = tellerTag.getAttribute("callToAction")
            if (a == null || a == "none" || a == "") {
                if (stateGeneral) {
                    hoverBrick.textContent = byLanguage("We are online. ", "Estamos en línea. ") + byLanguage("Share your user experience with us or send us a message.", "Comparte tu experiencia con nosotros o envíanos un mensaje.")
                }
                else {
                    hoverBrick.textContent = byLanguage("Share your user experience with us or send us a message.", "Comparte tu experiencia con nosotros o envíanos un mensaje.")
                }
            }
            else {
                if (stateGeneral) {
                    hoverBrick.textContent = byLanguage("We are online. ", "Estamos en línea. ") + a
                }
                else {
                    hoverBrick.textContent = a
                }
            }
        }

        // Create link for messenger and redirect
        function toMessenger() {
            a = tellerTag.getAttribute("messengerID")
            b = a.replace(/\s/g, "")
            if (a == null || a == "none" || a == "") {
                return
            } else {
                window.open('https://m.me/' + b, "_blank")
            }
        }

        // Get message value and redirect it to wsp
        function toWhatsapp() {
            a = tellerTag.getAttribute("whatsappNumber")
            b = a.replace(/[\s+]/g, "")
            c = textAreaWsp.value
            d = encodeURIComponent(c)
            if (c == null || c == "none" || c == "") {
                window.open('https://wa.me/' + b, "_blank")
            }
            else { window.open('https://wa.me/' + b + '?text=' + d, "_blank") }
        }

        //get msg of Telegram
        function getTelegramMsg() {
            tx = textAreaTelegram.value;
            if (tx == null || tx == "none" || tx == "") { return "" }
            else { return encodeURIComponent(tx); }
        }

        function toTelegram() {
            a = tellerTag.getAttribute("telegramID")
            if (a == null || a == "none" || a == "") return "";
            else if (getTelegramMsg() == "") {
                window.open('https://t.me/' + a, "_blank")
            }
            else { window.open('https://t.me/share/url?url=' + a + '&text=' + getTelegramMsg(), "_blank") };
        }

        function notificationAppear(l, c) {
            hmm(l)
            l.textContent = "";
            setTimeout(function () {
                l.textContent = c;
                smm(l)
            }, 300);
        }


        //Apagar boton
        function offButtonBrick(o) {
            setTimeout(function () {
                o.style.fill = byTheme(nebulaGrey, realGrey);
            }, 300);
        }
        //Prender boton
        function onButtonBrick(o) {
            setTimeout(function () {
                o.style.fill = tintColor();
            }, 300);
        }

        //Display shared elements
        function showSharedComponent() {
            if (!displayedSharedComponents) {
                //Show shared parts
                setTimeout(function () {
                    notificationAppear(bubbleWelcome, welcomeBubble())
                }, 300);
                smm(sharedComponentsArea)
                displayedSharedComponents = true;
            }
        }

        //Hide shared platform components
        function hideSharedComponents() {
            if (displayedSharedComponents) {
                hmm(sharedComponentsArea)
                //Show shared parts
                displayedSharedComponents = false;

            }
        }

        //Hide teller components
        function hideTellerComponents() {
            hmm(feedbackBrick);
            setTimeout(function () {
                if (tellerUseFeedback) {
                    offButtonBrick(feedbackIconShape);
                }
            }, 300);
        }

        //Show teller components
        function showTellerComponents() {
            //Change color to button selected
            onButtonBrick(feedbackIconShape);
            smm(fatherBrick)
            smm(feedbackBrick)
            fatherBrick.style.height = currentHeightforFeedback + "px"
        }

        //Show messenger content
        function showMessengerContent() {
            //Show messengerArea
            smm(fatherBrick)
            smm(messengerArea)
            fatherBrick.style.height = "290px";
            //Resize fatherBrick
            setTimeout(function () {
                //Change color to button selected
                onButtonBrick(messengerIconShape);
                //Show messenger parts
                platformBoxBrick.style.opacity = "1";
            }, 300);
        }

        //Hide messenger content
        function hideMessengerContent() {
            if (tellerUseMessenger) {
                //Hide elements
                hmm(messengerArea)
                //off button
                offButtonBrick(messengerIconShape)
            }
        }

        //Show wsp content
        function showWspContent() {
            //Show wspArea
            smm(fatherBrick)
            smm(whatsappArea)
            fatherBrick.style.height = "290px";
            //Resize fatherBrick
            setTimeout(function () {
                //Change color to button selected
                onButtonBrick(whatsappIconShape);
                //Restyle shared components
                platformBoxBrick.style.opacity = "1";
            }, 300);
        }

        //Hide wsp parts
        function hideWspContent() {
            if (tellerUseWsp) {
                //Hide elements
                hmm(whatsappArea)
                //off button
                offButtonBrick(whatsappIconShape)
            }
        }

        //Show telegram content
        function showTelegramContent() {
            //Show wspArea
            smm(fatherBrick)
            smm(telegramArea)
            fatherBrick.style.height = "290px";
            //Resize fatherBrick
            setTimeout(function () {
                //Change color to button selected
                onButtonBrick(telegramIconShape);
                //Restyle shared components
                platformBoxBrick.style.opacity = "1";
            }, 300);
        }

        //Hide telegram parts
        function hideTelegramContent() {
            if (tellerUseTelegram) {
                //Hide elements
                hmm(telegramArea)
                //off button
                offButtonBrick(telegramIconShape)
            }
        }

        //notification number over main button
        notificationInMainButton.addEventListener("mouseover", function () {
            //appear hoverBrick
            hoverBrick.style.display = "grid";
            setTimeout(function () {
                hoverBrick.style.opacity = "1";
            }, 310);
            //Notification numbers dissapear
            setTimeout(function () { hmm(notificationInMainButton); }, 300);
        })


        //telegram main Button
        telegramBrickListener()
        function telegramBrickListener() {
            if (tellerUseTelegram)
                buttonTelegramBrick.addEventListener("click", function () {
                    hideTellerComponents();
                    hideMessengerContent();
                    hideWspContent();
                    setTimeout(function () {
                        showSharedComponent();
                        showTelegramContent()
                    }, 300);
                })
        }

        //Messenger main Button
        messengerBrickListener()
        function messengerBrickListener() {
            if (tellerUseMessenger)
                buttonMessengerBrick.addEventListener("click", function () {
                    //Make actions
                    hideTellerComponents();
                    hideWspContent();
                    hideTelegramContent();
                    setTimeout(function () {
                        showSharedComponent();
                        showMessengerContent();
                    }, 300);
                })
        }

        //whatsapp main Button
        wspBrickListener()
        function wspBrickListener() {
            if (tellerUseWsp)
                buttonWhatsappBrick.addEventListener("click", function () {
                    hideTellerComponents();
                    hideMessengerContent();
                    hideTelegramContent();
                    setTimeout(function () {
                        showSharedComponent();
                        showWspContent()
                    }, 300);
                })
        }

        //Feedback main Button
        feedbackBrickListener()
        function feedbackBrickListener() {
            if (tellerUseFeedback)
                buttonFeedbackBrick.addEventListener("click", function () {
                    //Make actions
                    hideWspContent();
                    hideMessengerContent();
                    hideSharedComponents();
                    hideTelegramContent();
                    setTimeout(function () {
                        showTellerComponents()
                    }, 300);
                })
        }

        //Messenger button
        messengerSendButtonBrick.addEventListener("click", function () {
            console.log("redirecting to Messenger")
            toMessenger()
        })

        //Wsp send button
        wspSendButtonBrick.addEventListener("click", function () {
            console.log("redirecting to WhatsApp")
            toWhatsapp()
        })

        //Telegram send button
        telegramSendButtonBrick.addEventListener("click", function () {
            console.log("redirecting to Telegram")
            toTelegram()
        })

        // Shows the button
        callToActionTeller()
        function callToActionTeller() {
            a = tellerTag.getAttribute("appearAfter")
            b = /\d/;
            c = Math.round(parseInt(a)) * 1000;
            x = interacted;

            if (b.test(a)) {
                setTimeout(function () {
                    if (!x) {
                        userCallToActionMessage()
                        notificationInMainButton.style.display = "block";
                        setTimeout(function () {
                            notificationInMainButton.style.opacity = "1";
                        }, 1);
                    }
                }, c);
            } else {
                return
            }
        }

        ////By main button
        buttonFatherBrick.addEventListener("click", function () {
            hmm(hoverBrick);
            interacted = true;
            if (displayedBox) {
                displayedBox = false;
                //Show father brick
                hmm(fatherBrick)
                //Hide complements brick
                hmm(buttonsComplementsBrick)
                //Button animation
                xBrick.style.opacity = "0";
                xBrick.style.transform = "translateX(30px) scaleX(0)";
                setTimeout(function () {
                    palomita.style.opacity = "1";
                    palomita.style.transform = "scaleX(1)";
                }, 300);
            }
            else {
                displayedBox = true;
                //Show complements brick
                smm(buttonsComplementsBrick)
                //off buttons
                if (tellerUseMessenger) { offButtonBrick(messengerIconShape) };
                if (tellerUseWsp) { offButtonBrick(whatsappIconShape) };
                if (tellerUseTelegram) { offButtonBrick(telegramIconShape) };
                if (tellerUseFeedback) { offButtonBrick(feedbackIconShape) };
                //Main Button animation
                palomita.style.opacity = "0";
                palomita.style.transform = "scaleX(0)";
                //Notification numbers dissapear
                hmm(notificationInMainButton);
                setTimeout(function () {
                    xBrick.style.opacity = "1";
                    xBrick.style.transform = "translateX(0px) scaleX(1)";
                }, 300);
                //Show father brick
                if (onlyFeedback) { smm(fatherBrick); showTellerComponents() }
                else if (onlyWsp) { smm(fatherBrick); showWspContent(); showSharedComponent(); hideTellerComponents() }
                else if (onlyMessenger) { smm(fatherBrick); showMessengerContent(); showSharedComponent(); hideTellerComponents() }
                else if (onlyTelegram) { smm(fatherBrick); showTelegramContent(); showSharedComponent(); hideTellerComponents() }
            }
        });

        //Cuando hago click en el icon1
        emojiBrick1.addEventListener("click", function () {
            emotionTeller = "Super";
            fatherBrick.style.height = "290px";
            currentHeightforFeedback = 290;
            hmm(titleBrick)
            spbol()
            emojiSelectorBrick.style.left = "25px";
            emojiSelectorBrick.style.opacity = "1";
            emojisBrick.style.top = "20px";
            smm(emojiBrick1);
            mmom(emojiBrick2);
            mmom(emojiBrick3);
            mmom(emojiBrick4);
            mmom(emojiBrick5);
            sde(emojiDescriptionBrick1);
            ude(emojiDescriptionBrick2);
            ude(emojiDescriptionBrick3);
            ude(emojiDescriptionBrick4);
            ude(emojiDescriptionBrick5);
            smm(actionButtonBrick)
            smm(textAreasBrick)
            setTimeout(function () { actionButtonBrick.style.bottom = "20px" }, 300);
            emotionSelected = true;
        });

        //Cuando hago click en el icon2
        emojiBrick2.addEventListener("click", function () {
            emotionTeller = "Good";
            fatherBrick.style.height = "290px";
            currentHeightforFeedback = 290;
            hmm(titleBrick)
            spbol()
            emojiSelectorBrick.style.left = "85px";
            emojiSelectorBrick.style.opacity = "1";
            emojisBrick.style.top = "20px";
            smm(emojiBrick2);
            mmom(emojiBrick1);
            mmom(emojiBrick3);
            mmom(emojiBrick4);
            mmom(emojiBrick5);
            sde(emojiDescriptionBrick2)
            ude(emojiDescriptionBrick1);
            ude(emojiDescriptionBrick3);
            ude(emojiDescriptionBrick4);
            ude(emojiDescriptionBrick5);
            smm(actionButtonBrick)
            smm(textAreasBrick)
            setTimeout(function () { actionButtonBrick.style.bottom = "20px" }, 300);
            emotionSelected = true;
        });

        //Cuando hago click en el icon3
        emojiBrick3.addEventListener("click", function () {
            emotionTeller = "Neutral";
            fatherBrick.style.height = "290px";
            currentHeightforFeedback = 290;
            hmm(titleBrick)
            spbol()
            emojiSelectorBrick.style.left = "145px";
            emojiSelectorBrick.style.opacity = "1";
            emojisBrick.style.top = "20px";
            smm(emojiBrick3);
            mmom(emojiBrick1);
            mmom(emojiBrick2);
            mmom(emojiBrick4);
            mmom(emojiBrick5);
            sde(emojiDescriptionBrick3)
            ude(emojiDescriptionBrick1);
            ude(emojiDescriptionBrick2);
            ude(emojiDescriptionBrick4);
            ude(emojiDescriptionBrick5);
            smm(actionButtonBrick)
            smm(textAreasBrick)
            setTimeout(function () { actionButtonBrick.style.bottom = "20px" }, 300);
            emotionSelected = true;
        });

        //Cuando hago click en el icon4
        emojiBrick4.addEventListener("click", function () {
            emotionTeller = "Bad";
            fatherBrick.style.height = "290px";
            currentHeightforFeedback = 290;
            hmm(titleBrick)
            spbol()
            emojiSelectorBrick.style.left = "205px";
            emojiSelectorBrick.style.opacity = "1";
            emojisBrick.style.top = "20px";
            smm(emojiBrick4);
            mmom(emojiBrick1);
            mmom(emojiBrick2);
            mmom(emojiBrick3);
            mmom(emojiBrick5);
            sde(emojiDescriptionBrick4)
            ude(emojiDescriptionBrick1);
            ude(emojiDescriptionBrick2);
            ude(emojiDescriptionBrick3);
            ude(emojiDescriptionBrick5);
            smm(actionButtonBrick)
            smm(textAreasBrick)
            setTimeout(function () { actionButtonBrick.style.bottom = "20px" }, 300);
            emotionSelected = true;
        });

        //Cuando hago click en el icon5
        emojiBrick5.addEventListener("click", function () {
            emotionTeller = "Furious";
            fatherBrick.style.height = "290px";
            currentHeightforFeedback = 290;
            hmm(titleBrick)
            spbol()
            emojiSelectorBrick.style.left = "265px";
            emojiSelectorBrick.style.opacity = "1";
            emojisBrick.style.top = "20px";
            smm(emojiBrick5);
            mmom(emojiBrick1);
            mmom(emojiBrick2);
            mmom(emojiBrick3);
            mmom(emojiBrick4);
            sde(emojiDescriptionBrick5)
            ude(emojiDescriptionBrick1);
            ude(emojiDescriptionBrick2);
            ude(emojiDescriptionBrick3);
            ude(emojiDescriptionBrick4);
            smm(actionButtonBrick)
            smm(textAreasBrick)
            setTimeout(function () { actionButtonBrick.style.bottom = "20px" }, 300);
            emotionSelected = true;
        });

        //Icon1 hover
        emojiBrick1.addEventListener("mouseover", function () {
            emojiFaceBrick1.style.transform = "translateY(-10px)";
            SuperFaceTeller.style.animationPlayState = "running";
            if (!emotionSelected) {
                smem(emojiDescriptionBrick1);
                smem(emojiBrick1);
                mmom(emojiBrick2);
                mmom(emojiBrick3);
                mmom(emojiBrick4);
                mmom(emojiBrick5);
            }
            emojiBrick1.addEventListener("mouseout", function () {
                emojiFaceBrick1.style.transform = "translateY(0px)";
                SuperFaceTeller.style.animationPlayState = "paused";
                if (!emotionSelected) {
                    mmom(emojiBrick1);
                    emojiDescriptionBrick1.style.opacity = "0";
                }
            });
        });

        //Icon2 hover
        emojiBrick2.addEventListener("mouseover", function () {
            emojiFaceBrick2.style.transform = "translateY(-10px)";
            GoodFaceTeller.style.animationPlayState = "running";
            if (!emotionSelected) {
                smem(emojiDescriptionBrick2);
                smem(emojiBrick2);
                mmom(emojiBrick1);
                mmom(emojiBrick3);
                mmom(emojiBrick4);
                mmom(emojiBrick5);
            }
            emojiBrick2.addEventListener("mouseout", function () {
                emojiFaceBrick2.style.transform = "translateY(0px)";
                GoodFaceTeller.style.animationPlayState = "paused";
                if (!emotionSelected) {
                    mmom(emojiBrick2);
                    emojiDescriptionBrick2.style.opacity = "0";
                }
            });
        });

        //Icon3 hover
        emojiBrick3.addEventListener("mouseover", function () {
            emojiFaceBrick3.style.transform = "translateY(-10px)";
            NeutralFaceTeller.style.animationPlayState = "running";
            if (!emotionSelected) {
                smem(emojiDescriptionBrick3);
                smem(emojiBrick3);
                mmom(emojiBrick1);
                mmom(emojiBrick2);
                mmom(emojiBrick4);
                mmom(emojiBrick5);
            }
            emojiBrick3.addEventListener("mouseout", function () {
                emojiFaceBrick3.style.transform = "translateY(0px)";
                NeutralFaceTeller.style.animationPlayState = "paused";
                if (!emotionSelected) {
                    mmom(emojiBrick3);
                    emojiDescriptionBrick3.style.opacity = "0";
                }
            });
        });

        //Icon4 hover
        emojiBrick4.addEventListener("mouseover", function () {
            emojiFaceBrick4.style.transform = "translateY(-10px)";
            BadFaceTeller.style.animationPlayState = "running";
            if (!emotionSelected) {
                smem(emojiDescriptionBrick4);
                smem(emojiBrick4);
                mmom(emojiBrick1);
                mmom(emojiBrick2);
                mmom(emojiBrick3);
                mmom(emojiBrick5);
            }
            emojiBrick4.addEventListener("mouseout", function () {
                emojiFaceBrick4.style.transform = "translateY(0px)";
                BadFaceTeller.style.animationPlayState = "paused";
                if (!emotionSelected) {
                    mmom(emojiBrick4);
                    emojiDescriptionBrick4.style.opacity = "0";
                }
            });
        });

        //Icon5 hover
        emojiBrick5.addEventListener("mouseover", function () {
            emojiFaceBrick5.style.transform = "translateY(-10px)";
            FuriousFaceTeller.style.animationPlayState = "running";
            if (!emotionSelected) {
                smem(emojiDescriptionBrick5);
                smem(emojiBrick5);
                mmom(emojiBrick1);
                mmom(emojiBrick2)
                mmom(emojiBrick3);
                mmom(emojiBrick4);
            }
            emojiBrick5.addEventListener("mouseout", function () {
                emojiFaceBrick5.style.transform = "translateY(0px)";
                FuriousFaceTeller.style.animationPlayState = "paused";
                if (!emotionSelected) {
                    mmom(emojiBrick5);
                    emojiDescriptionBrick5.style.opacity = "0";
                }
            });
        });

        //Text area regex
        textAreaBrick.addEventListener("input", function () {
            notificationAppear(notificationParagraphBrick, "");
            var isMsg = msgRegex.test(textAreaBrick.value);
            if (textAreaBrick.value == "") {
                messageTeller = "";
                messageReady = false; // Confirm message setted
                messageTeller = ""; //Set message on variable
                actionButtonBrick.style.color = realWhite;
                actionButtonBrick.style.backgroundColor = nebulaGrey;
                notificationAppear(notificationParagraphBrick, byLanguage("The message must not be empty", "El mensaje no puede estar vacío."));
            }
            else if (isMsg) {
                messageTeller = textAreaBrick.value;
                messageReady = true; // Confirm message setted
                messageTeller = textAreaBrick.value; //Set message on variable
                actionButtonBrick.style.color = byTheme(realWhite, charmingGrey);
                actionButtonBrick.style.backgroundColor = tintColor();
                notificationAppear(notificationParagraphBrick, byLanguage("Thanks for your feedback", "Gracias por tu comentario."));
            }
            else if (!isMsg) {
                messageTeller = "";
                messageReady = false; // Confirm message setted
                messageTeller = ""; //Set message on variable
                actionButtonBrick.style.color = realWhite;
                actionButtonBrick.style.backgroundColor = nebulaGrey;
                notificationAppear(notificationParagraphBrick, byLanguage("Use letters from Aa-Zz, numbers from 0-9, and supported special signs (?!.,; :).", "Usá letras de Aa-Zz, números de 0-9, y signos admitidos (?!.,;:)."));
            }
            return;
        });

        //Check if is valid email and show notifications (Just regular expression, not real comprobation)
        function checkEmail() {
            var isEmail = regexMail.test(inputAreaBrick.value);
            if (inputAreaBrick.value == "") {
                emailTeller = "";
                emailReadyTeller = false;
                lockAndLoudTeller = false;
                actionButtonBrick.style.color = realWhite;
                actionButtonBrick.style.backgroundColor = nebulaGrey;
                notificationAppear(notificationParagraphBrick, byLanguage('The field cannot be empty.', 'Este campo debe llenarse.'));
            }
            else if (!isEmail) {
                emailTeller = "";
                emailReadyTeller = false;
                lockAndLoudTeller = false;
                actionButtonBrick.style.color = realWhite;
                actionButtonBrick.style.backgroundColor = nebulaGrey;
                notificationAppear(notificationParagraphBrick, byLanguage("Not valid email address.", "Correo electrónico no válido."));
            }
            else if (isEmail) {
                emailTeller = inputAreaBrick.value;
                emailReadyTeller = true;
                lockAndLoudTeller = true;
                actionButtonBrick.style.color = byTheme(realWhite, charmingGrey);
                actionButtonBrick.style.backgroundColor = tintColor();
                notificationAppear(notificationParagraphBrick, "");
            }
        }

        function entryComposer(entry, resp) {
            if (entry == "") { return "" }
            else return ('&' + entry + '=' + resp)
        }

        //Submit fetch
        function submit(answer) {
            if (lockAndLoudTeller) {
                answer = encodeURIComponent(answer)
                var fullFeedbackurl = urlFeedbackConstructor() +
                    entryComposer(entryA, emotionTeller) +
                    entryComposer(entryB, emailTeller) +
                    entryComposer(entryC, messageTeller) +
                    entryComposer(entryD, dateTeller) +
                    '&submit=Submit'

                var opts = {
                    method: "POST",
                    mode: "no-cors", // Google will only submit a form if "mode" is "no-cors"
                    redirect: "follow",
                    referrer: "no-referrer"
                }
                console.log("Making request to Google Forms");
                // Redirect to google form if IE Browser cause does not allow to fetch
                if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
                    titleBrick.style.display = "block";
                    skipButtonBrick.style.display = "none";
                    inputAreaBrick.style.display = "none";
                    actionButtonBrick.style.display = "none";
                    titleBrick.style.transform = "translateY(65px)";
                    notificationAppear(titleBrick, byLanguage('Your browser does not support the request, we will have to redirect it.', 'Su navegador no admite la solicitud, tendremos que redirigirla.'));

                    setTimeout(function () { window.open(fullFeedbackurl, 'tellerRequest'); }, 1500);
                    setTimeout(function () { getModelAndExecute() }, 5000);
                }
                else {
                    fetch(fullFeedbackurl, opts).then(function (response) {
                        return response.text();
                    })
                        .then(function (text) {
                            titleBrick.style.display = "block";
                            skipButtonBrick.style.display = "none";
                            inputAreaBrick.style.display = "none";
                            actionButtonBrick.style.display = "none";
                            titleBrick.style.transform = "translateY(65px)";
                            notificationAppear(titleBrick, byLanguage('We receive the feedback, thanks for your time.', 'Recibimos su comentario, gracias por su tiempo.'));

                        })
                        .catch(function (error) {
                            titleBrick.style.display = "block";
                            skipButtonBrick.style.display = "none";
                            inputAreaBrick.style.display = "none";
                            actionButtonBrick.style.display = "none";
                            titleBrick.style.transform = "translateY(35px)";
                            notificationAppear(titleBrick, byLanguage('Something went wrong, you should try later.', 'Algo salió mal, no hemos podido cargar su solicitud, por favor intentelo más tarde.'));

                        });
                    setTimeout(function () {
                        fatherBrick.style.transform = "translateY(20px)";
                        fatherBrick.style.opacity = "0";
                        titleBrick.style.opacity = "0";
                        emojisBrick.style.opacity = "0";
                        emojisBrick.style.transform = "translateY(20px)";
                        xBrick.style.opacity = "0";

                        setTimeout(function () {
                            titleBrick.style.display = "none";
                            fatherBrick.style.display = "none";
                        }, 300);
                    }, 3000);
                    setTimeout(function () { getModelAndExecute(); }, 3000);
                }
            }
        }

        //Event listener for skip button
        skipButtonBrick.addEventListener("click", function () {
            notificationParagraphBrick.style.opacity = "0"
            emailTeller = "none";
            emailReadyTeller = true;
            lockAndLoudTeller = true;
            paragraphBrick.innerHTML = byLanguage('Powered by ' + tellerSmallA, 'Con el poder de ' + tellerSmallA);
            paragraphBrick.style.textAlign = "center";
            paragraphBrick.style.opacity = "1";
            titleBrick.style.opacity = "0";
            skipButtonBrick.style.opacity = "0";
            inputAreasBrick.style.opacity = "0";
            actionButtonBrick.style.opacity = "0";
            submit();
        });

        //Next button event listener on click
        actionButtonBrick.addEventListener("click", function () {
            //Empty message
            if (textAreaBrick.value == "") {
                notificationAppear(notificationParagraphBrick, byLanguage("The message must not be empty", "El mensaje no puede estar vacío."));
            }
            //Emotion, message and email ready to fetch
            else if (emotionSelected == true && messageReady == true && emailReadyTeller == true && lockAndLoudTeller == true) {
                notificationAppear(notificationParagraphBrick, byLanguage("", ""));
                actionButtonBrick.style.opacity = "0";
                titleBrick.style.opacity = "0";
                skipButtonBrick.style.opacity = "0";
                inputAreasBrick.style.opacity = "0";
                paragraphBrick.style.textAlign = "center";
                paragraphBrick.style.opacity = "1";
                setTimeout(function () { submit() }, 1000);
            }
            //Emotion and message completed
            else if (emotionSelected == true && messageReady == true && emailReadyTeller == false && lockAndLoudTeller == false) {
                titleBrick.textContent = "";
                emojiSelectorBrick.style.opacity = 0;
                notificationAppear(notificationParagraphBrick, byLanguage("", ""));
                emojisBrick.style.transform = "translateY(20px)";
                emojisBrick.style.opacity = "0";
                paragraphBrick.style.opacity = "0";
                titleBrick.style.opacity = "0";
                titleBrick.style.display = "block";
                skipButtonBrick.style.display = "block";
                textAreasBrick.style.transform = "translateY(20px)";
                textAreasBrick.style.opacity = "0";
                inputAreasBrick.style.display = "block";
                setTimeout(function () {
                    notificationAppear(titleBrick, byLanguage('Please enter your email if you are happy for us to contact you, if not press "skip".', 'Ingrese su correo si esta de acuerdo en que nos comuniquemos con usted, de lo contrario presione "omitir".'));
                    emojisBrick.style.display = "none";
                    checkEmail();
                    fatherBrick.style.height = "220px";
                    currentHeightforFeedback = 220;
                    actionButtonBrick.textContent = byLanguage("SEND", "ENVIAR");
                    actionButtonBrick.style.color = realWhite;
                    actionButtonBrick.style.backgroundColor = nebulaGrey;
                    inputAreasBrick.style.top = "120px";
                    inputAreasBrick.style.opacity = "1";
                    textAreasBrick.style.display = "none";
                    skipButtonBrick.style.opacity = "1";
                    titleBrick.style.opacity = "1";
                }, 300);
            }
        });
        //Listen email input
        inputAreaBrick.addEventListener("input", function () {
            checkEmail()
        });
    }

    getModelAndExecute()
}

document.addEventListener("DOMContentLoaded", function () {
    main()
});