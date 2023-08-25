// BotpressChatFrame.js
import React from 'react';

function BotpressChatFrame() {
  return (
    <iframe
      title="Botpress Chat" // This provides a description for the iframe content
      style={{ border: 'none' }}
      srcDoc={`
        <body>
            <script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
            <script>
                window.botpressWebChat.init({
                    'composerPlaceholder': 'Chat with bot',
                    'botConversationDescription': 'This chatbot was built surprisingly fast with Botpress',
                    'botName': 'Name',
                    'botId': '8b6780df-34f7-4066-a4a6-bf25db7d8cfb',
                    'hostUrl': 'https://cdn.botpress.cloud/webchat/v0',
                    'messagingUrl': 'https://messaging.botpress.cloud',
                    'clientId': '8b6780df-34f7-4066-a4a6-bf25db7d8cfb',
                    'enableConversationDeletion': true,
                    'showPoweredBy': true,
                    'className': 'webchatIframe',
                    'containerWidth': '100%25',
                    'layoutWidth': '100%25',
                    'hideWidget': true,
                    'showCloseButton': false,
                    'disableAnimations': true,
                    'closeOnEscape': false,
                    'showConversationsButton': false,
                    'enableTranscriptDownload': false,
                    'stylesheet': 'https://webchat-styler-css.botpress.app/prod/code/608eef2b-a91f-4a7f-bd0c-215d54874dbd/v75889/style.css'
                });
                window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);
            </script>
        </body>
      `}
      width="100%"
      height="100%"
    />
  );
}

export default BotpressChatFrame;
