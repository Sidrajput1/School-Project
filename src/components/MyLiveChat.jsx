import React, { useEffect } from 'react';


const MyLiveChat = () => {
  useEffect(() => {
    function add_chatwidget() {
      var hccid = 66743122;
      var nt = document.createElement("script");
      nt.async = true;
      nt.src = "https://mylivechat.com/chatwidget.aspx?hccid=" + hccid + '&WidgetStartPos=topright&WidgetPosition=topright';
      var ct = document.getElementsByTagName("script")[0];
      ct.parentNode.insertBefore(nt, ct);
    }
    add_chatwidget();
  }, []);

  return null; // Render nothing in the DOM
};

export default MyLiveChat;
