# Discord Rich Presence for YouTube Music 

> 디스코드의 **Rich Presence** 로 현재 크롬에서 감상중인 YouTube Music 의 노래 정보를 띄워줍니다.

<img src="https://i.imgur.com/Mguyul9.png" />

## Requirements

> 아래의 프로그램들이 필요합니다. 
-   [Discord Application](https://discordapp.com/developers/applications/me)
-   [Node](https://nodejs.org/en/)
-   [Google Chrome](http://google.com/chrome)  or  [Chromium](https://www.chromium.org/getting-involved/download-chromium)

## Installation

### 크롬 확장프로그램 설치
0. 파일을 전부 내려받으세요.
1. Google Chrome 주소창에서 ``chrome://extensions`` 로 진입하세요.
2.   **개발자 모드**를 켜주세요.
3. ``압축해제된 확장 프로그램을 로드합니다.`` 클릭후, ChromeExtension 폴더를 선택해서 크롬 확장프로그램을 설치를 완료하세요.
4. ChromeExtension 폴더 이동시, 확장프로그램을 로드할 수 없으므로 특정 위치에 잘 저장해놓으세요.

### RPC Client 설치
``` 
> cd youtubemusicrpc
> npm install
> node app.js
```


## Usage

> Just Playing **YouTube Music**! 

 [YouTube Music](https://music.youtube.com/) 에서 노래를 재생하시면, RPC Client가 실행 중 일때, 재생중인 노래가 Discord Presence를 통해 나타나게 됩니다.

## Customizing

``app.js`` 의 ClientId 는 현재 기본값으로 제가 만든 YouTube Music Application으로 지정되어 있습니다, 이를 커스터마이징 하고싶다면 아래 지침을 따라하세요.

0.  [디스코드 Application 생성](https://discordapp.com/developers/applications/me).
1.  **Create an application** 을 누르세요..
2.  표시할 앱 이름을   **App Name** 에 적어주세요. 이는 ``app.js`` 에서 아무리 수정해도 바뀌지 않습니다..

> _**주의 ) 봇은 추가하지 마시길 바랍니다.**_

3.  표시하고싶은 이미지를 업로드하고 ``Key``를 기억해두세요.
4.  ClientId를 복사해서  `client.login({ clientId: 클라이언트아이디 });`  에 붙여 넣으시고, 이미지 Key를 `largeImageKey: 업로드한이미지Key`  에 지정해주세요..

> **RichPresence 애플리케이션의 ClientId 는 다른사람들과 공유하게 되더라도, 안전합니다.**

## I Hate Console

<img src="https://i.imgur.com/dUGNYi3.png" />

콘솔창에서 `node app.js` 를 실행하기 귀찮으시면, 제가 Electron으로 만든 ``RPC Client``를 사용하세요. 실행시, 오직 Tray Icon 만 나타나게 됩니다!

[다운로드](https://drive.google.com/file/d/1cGJ_IzInofESbjzCvUGKzn6qGyoHNmqe/view?usp=sharing)

[소스] 소스파일 원본은 위에서 다운로드 받으신 ``youtubemusicrpc`` 폴더 안에 있는 ``ElectronRPC.zip`` 입니다.


> Windows 계열만 지원합니다.
> 테스팅환경: Windows 10 Pro 1803
