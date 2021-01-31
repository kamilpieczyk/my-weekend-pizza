const returnHTML = (email: string, status: string): string => `
<!DOCTYPE html>
<html ⚡4email>
  <head>
    <meta charset="utf-8" />
    <style amp4email-boilerplate>
      body {
        visibility: hidden;
      }
    </style>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <style amp-custom>
      a[x-apple-data-detectors] {
        color: inherit;
        text-decoration: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        line-height: inherit;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
      }
      s {
        text-decoration: line-through;
      }
      body {
        width: 100%;
        font-family: 'open sans', 'helvetica neue', helvetica, arial, sans-serif;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0px;
      }
      table td,
      html,
      body,
      .es-wrapper {
        padding: 0;
        margin: 0;
      }
      .es-content,
      .es-header,
      .es-footer {
        table-layout: fixed;
        width: 100%;
      }
      p,
      hr {
        margin: 0;
      }
      h1,
      h2,
      h3,
      h4,
      h5 {
        margin: 0;
        line-height: 120%;
        font-family: 'open sans', 'helvetica neue', helvetica, arial, sans-serif;
      }
      .es-left {
        float: left;
      }
      .es-right {
        float: right;
      }
      .es-p5 {
        padding: 5px;
      }
      .es-p5t {
        padding-top: 5px;
      }
      .es-p5b {
        padding-bottom: 5px;
      }
      .es-p5l {
        padding-left: 5px;
      }
      .es-p5r {
        padding-right: 5px;
      }
      .es-p10 {
        padding: 10px;
      }
      .es-p10t {
        padding-top: 10px;
      }
      .es-p10b {
        padding-bottom: 10px;
      }
      .es-p10l {
        padding-left: 10px;
      }
      .es-p10r {
        padding-right: 10px;
      }
      .es-p15 {
        padding: 15px;
      }
      .es-p15t {
        padding-top: 15px;
      }
      .es-p15b {
        padding-bottom: 15px;
      }
      .es-p15l {
        padding-left: 15px;
      }
      .es-p15r {
        padding-right: 15px;
      }
      .es-p20 {
        padding: 20px;
      }
      .es-p20t {
        padding-top: 20px;
      }
      .es-p20b {
        padding-bottom: 20px;
      }
      .es-p20l {
        padding-left: 20px;
      }
      .es-p20r {
        padding-right: 20px;
      }
      .es-p25 {
        padding: 25px;
      }
      .es-p25t {
        padding-top: 25px;
      }
      .es-p25b {
        padding-bottom: 25px;
      }
      .es-p25l {
        padding-left: 25px;
      }
      .es-p25r {
        padding-right: 25px;
      }
      .es-p30 {
        padding: 30px;
      }
      .es-p30t {
        padding-top: 30px;
      }
      .es-p30b {
        padding-bottom: 30px;
      }
      .es-p30l {
        padding-left: 30px;
      }
      .es-p30r {
        padding-right: 30px;
      }
      .es-p35 {
        padding: 35px;
      }
      .es-p35t {
        padding-top: 35px;
      }
      .es-p35b {
        padding-bottom: 35px;
      }
      .es-p35l {
        padding-left: 35px;
      }
      .es-p35r {
        padding-right: 35px;
      }
      .es-p40 {
        padding: 40px;
      }
      .es-p40t {
        padding-top: 40px;
      }
      .es-p40b {
        padding-bottom: 40px;
      }
      .es-p40l {
        padding-left: 40px;
      }
      .es-p40r {
        padding-right: 40px;
      }
      .es-menu td {
        border: 0;
      }
      a {
        font-family: 'open sans', 'helvetica neue', helvetica, arial, sans-serif;
        font-size: 15px;
        text-decoration: none;
      }
      h1 {
        font-size: 36px;
        font-style: normal;
        font-weight: bold;
        color: #333333;
      }
      h1 a {
        font-size: 36px;
      }
      h2 {
        font-size: 24px;
        font-style: normal;
        font-weight: bold;
        color: #333333;
      }
      h2 a {
        font-size: 24px;
      }
      h3 {
        font-size: 18px;
        font-style: normal;
        font-weight: bold;
        color: #333333;
      }
      h3 a {
        font-size: 18px;
      }
      p,
      ul li,
      ol li {
        font-size: 15px;
        font-family: 'open sans', 'helvetica neue', helvetica, arial, sans-serif;
        line-height: 150%;
      }
      ul li,
      ol li {
        margin-bottom: 15px;
      }
      .es-menu td a {
        text-decoration: none;
        display: block;
      }
      .es-menu amp-img,
      .es-button amp-img {
        vertical-align: middle;
      }
      .es-wrapper {
        width: 100%;
        height: 100%;
      }
      .es-wrapper-color {
        background-color: #eeeeee;
      }
      .es-content-body {
        background-color: #ffffff;
      }
      .es-content-body p,
      .es-content-body ul li,
      .es-content-body ol li {
        color: #333333;
      }
      .es-content-body a {
        color: #ed8e20;
      }
      .es-header {
        background-color: transparent;
      }
      .es-header-body {
        background-color: #044767;
      }
      .es-header-body p,
      .es-header-body ul li,
      .es-header-body ol li {
        color: #ffffff;
        font-size: 14px;
      }
      .es-header-body a {
        color: #ffffff;
        font-size: 14px;
      }
      .es-footer {
        background-color: transparent;
      }
      .es-footer-body {
        background-color: #ffffff;
      }
      .es-footer-body p,
      .es-footer-body ul li,
      .es-footer-body ol li {
        color: #333333;
        font-size: 14px;
      }
      .es-footer-body a {
        color: #333333;
        font-size: 14px;
      }
      .es-infoblock,
      .es-infoblock p,
      .es-infoblock ul li,
      .es-infoblock ol li {
        line-height: 120%;
        font-size: 12px;
        color: #cccccc;
      }
      .es-infoblock a {
        font-size: 12px;
        color: #cccccc;
      }
      .es-button-border {
        border-style: solid solid solid solid;
        border-color: transparent transparent transparent transparent;
        background: #ed8e20;
        border-width: 0px 0px 0px 0px;
        display: inline-block;
        border-radius: 5px;
        width: auto;
      }
      .es-p-default {
        padding-top: 20px;
        padding-right: 35px;
        padding-bottom: 0px;
        padding-left: 35px;
      }
      .es-p-all-default {
        padding: 0px;
      }
      a.es-button,
      button.es-button {
        border-style: solid;
        border-color: #ed8e20;
        border-width: 15px 30px 15px 30px;
        display: inline-block;
        background: #ed8e20;
        border-radius: 5px;
        font-size: 16px;
        font-family: 'open sans', 'helvetica neue', helvetica, arial, sans-serif;
        font-weight: bold;
        font-style: normal;
        line-height: 120%;
        color: #ffffff;
        text-decoration: none;
        width: auto;
        text-align: center;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          font-size: 16px;
          line-height: 150%;
        }
        h1 {
          font-size: 32px;
          text-align: center;
          line-height: 120%;
        }
        h2 {
          font-size: 26px;
          text-align: center;
          line-height: 120%;
        }
        h3 {
          font-size: 20px;
          text-align: center;
          line-height: 120%;
        }
        h1 a {
          font-size: 32px;
        }
        h2 a {
          font-size: 26px;
        }
        h3 a {
          font-size: 20px;
        }
        .es-menu td a {
          font-size: 16px;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 16px;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 16px;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px;
        }
        *[class='gmail-fix'] {
          display: none;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left;
        }
        .es-m-txt-r amp-img {
          float: right;
        }
        .es-m-txt-c amp-img {
          margin: 0 auto;
        }
        .es-m-txt-l amp-img {
          float: left;
        }
        .es-button-border {
          display: inline-block;
        }
        .es-btn-fw {
          border-width: 10px 0px;
          text-align: center;
        }
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100%;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100%;
          max-width: 600px;
        }
        .es-adapt-td {
          display: block;
          width: 100%;
        }
        .adapt-img {
          width: 100%;
          height: auto;
        }
        td.es-m-p0 {
          padding: 0px;
        }
        td.es-m-p0r {
          padding-right: 0px;
        }
        td.es-m-p0l {
          padding-left: 0px;
        }
        td.es-m-p0t {
          padding-top: 0px;
        }
        td.es-m-p0b {
          padding-bottom: 0;
        }
        td.es-m-p20b {
          padding-bottom: 20px;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto;
          overflow: visible;
          float: none;
          max-height: inherit;
          line-height: inherit;
        }
        tr.es-desk-hidden {
          display: table-row;
        }
        table.es-desk-hidden {
          display: table;
        }
        td.es-desk-menu-hidden {
          display: table-cell;
        }
        .es-menu td {
          width: 1%;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto;
        }
        table.es-social {
          display: inline-block;
        }
        table.es-social td {
          display: inline-block;
        }
        a.es-button,
        button.es-button {
          font-size: 16px;
          display: inline-block;
          border-width: 15px 30px 15px 30px;
        }
      }
    </style>
  </head>
  <body>
    <div class="es-wrapper-color">
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
        <tr>
          <td valign="top">
            <table class="es-content" cellspacing="0" cellpadding="0" align="center">
              <tr>
                <td align="center">
                  <table
                    class="es-header-body"
                    style="background-color: #044767"
                    width="600"
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#044767"
                    align="center"
                  >
                    <tr>
                      <td
                        class="es-p35t es-p35b es-p35r es-p35l"
                        align="left"
                        bgcolor="#E34042"
                        style="background-color: #e34042"
                      >
                        <!--[if mso]><table width="530" cellpadding="0" cellspacing="0"><tr><td width="340" valign="top"><![endif]-->
                        <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                          <tr>
                            <td class="es-m-p0r es-m-p20b" width="340" valign="top" align="center">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td>
                                    <img
                                      src="http://vps-a3dcf2e1.vps.ovh.net:3030/images/pizza-logo@2x.png"
                                      alt="pizza logo"
                                      width="60px"
                                    />
                                  </td>
                                  <td align="left">
                                    <h1
                                      style="
                                        color: #f6a95f;
                                        width: 400px;
                                        line-height: 100%;
                                        font-family: 'open sans', 'helvetica neue', helvetica, arial,
                                          sans-serif;
                                      "
                                    >
                                      My weekend pizza
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table class="es-content" cellspacing="0" cellpadding="0" align="center">
              <tr>
                <td align="center">
                  <table
                    class="es-content-body"
                    width="600"
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                  >
                    <tr>
                      <td class="es-p40t es-p35r es-p35l" align="left">
                        <table width="100%" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="530" valign="top" align="center">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td class="es-m-txt-l es-p15t" align="left"><h3>Hello ${email},</h3></td>
                                </tr>
                                <tr>
                                  <td class="es-p15t es-p10b" align="left">
                                    <p
                                      style="
                                        font-size: 16px;
                                        color: #777777;
                                        font-family: 'open sans', 'helvetica neue', helvetica, arial,
                                          sans-serif;
                                      "
                                    >
                                      We would like to inform you with pleasure that your pizza order status
                                      has been changed. Pleas check your new status below.
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="es-p20t es-p15b" align="center" style="font-size: 0">
                                    <table
                                      width="100%"
                                      cellspacing="0"
                                      cellpadding="0"
                                      border="0"
                                      role="presentation"
                                    >
                                      <tr>
                                        <td
                                          style="
                                            border-bottom: 3px solid #eeeeee;
                                            background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td class="es-p30t es-p35b es-p35r es-p35l" align="left">
                        <table width="100%" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="530" valign="top" align="center">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td class="es-p15t" align="center">
                                    <p style="font-size: 16px; color: #777777">
                                      your new pizza status is
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center"><h2 style="color: #333333">${status.toLocaleUpperCase()}</h2></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
              <tr>
                <td align="center">
                  <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" align="center">
                    <tr>
                      <td class="es-p35t es-p40b es-p35r es-p35l" align="left">
                        <table width="100%" cellspacing="0" cellpadding="0">
                          <tr>
                            <td width="530" valign="top" align="center">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td class="es-p15b" align="center" style="font-size: 0px">
                                    <amp-img
                                      src="https://ovwucv.stripocdn.email/content/guids/b7344e08-c58c-4792-80b1-91cfe5ea2438/images/57661611579504030.png"
                                      alt="Beretun logo"
                                      style="display: block"
                                      title="Beretun logo"
                                      width="37"
                                      height="33"
                                    ></amp-img>
                                  </td>
                                </tr>
                                <tr>
                                  <td class="es-p35b" align="center">
                                    <h3>MY WEEKEND PIZZA<br />2 Queen St</h3>
                                    <h3>Wrexham</h3>
                                    <h3>LL11 1AP</h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="left" class="es-m-txt-c es-p5b">
                                    <p style="color: #777777">
                                      If you didn't create an account using this email address, please ignore
                                      this email or&nbsp;<u>
                                        <a target="_blank" style="color: #777777" class="unsubscribe"
                                          >unsubscribe</a
                                        ></u
                                      >.
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>

`;

export default returnHTML;
