import React from "react";
import TradingViewWidget from "react-tradingview-widget";
import "../style/app.css";

const LastPart = () => {
  return (
    <div>
      <TradingViewWidget
        width="1400"
        height="700"
        symbol="BITSTAMP:BTCUSD "
        interval="5"
        timezone="Etc/UTC"
        theme="dark"
        // eslint-disable-next-line
        style="1"
        
        locale="en"
        toolbarBg="#f1f3f6"
        enablePublishing="false"
        allowSymbol_change="true"
        containerId="tradingview_e4a85"
      />
    </div>
  );
};

export default LastPart;
