createUnityInstance(document.querySelector("#unity-canvas"), {
    dataUrl: "./Build/BIOx_WebGL.data",
    frameworkUrl: "./Build/BIOx_WebGL.framework.js",
    codeUrl: "./Build/BIOx_WebGL.wasm",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Kovalek",
    productName: "BIOx",
    productVesion: "0.1.0"
}).then((unityInstance) => {
    console.log("Jogo Carregando");
}).catch((message) => {
    alert(message);
});