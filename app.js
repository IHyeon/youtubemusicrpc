const express = require('express');
const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: 'ipc' });
client.login({ clientId: '522363739874525204' });
var LASTSAVEDSONG = '';

client.once('ready', () => {
  const app = express();
  app.use(express.json());
  app.post("/", (request, response) => {
    let body = request.body;
    if (body.action == "nono") {
      if (!body.tab.title.includes("- YouTube Music")) {
        response.sendStatus(200);
        return
      }
      if (LASTSAVEDSONG == body.tab.title.substring(0, 128).split("- YouTube")[0]) {
        response.sendStatus(200);
        return;
      }
      LASTSAVEDSONG = body.tab.title.substring(0, 128).split("- YouTube")[0]
      console.log("Detect Youtube MUSIC,", body.tab.title, "\n");
      var startTimestamp = new Date();
      let presence = {
        state: '노래감상 중..',
        details: body.tab.title.substring(0, 128).split("- YouTube")[0],
        largeImageKey: 'google',
        largeImageText: body.tab.title.substring(0, 128).split("- YouTube")[0],
        instance: true,
        startTimestamp,
      };
      client.setActivity(presence);
    }
    response.sendStatus(200);
  });
  app.listen(3000, () => console.log('Discord RPC Ready.'));
});