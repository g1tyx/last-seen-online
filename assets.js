
            const loadQueue = [];

function Load(path) {
  // Load path into an <img> that is hidden in the background:
  let img;

  const handled = () => {
    if (img.parentNode === document.body) {
      document.body.removeChild(img);
    }

    if (loadQueue.length > 0) {
      Load(loadQueue.shift());
    }
  };

  if (path.endsWith(".mp3") || path.endsWith(".wav")) {
    // return path;
    if (typeof Audio === "undefined") {
      return;
    }
    img = new Audio();
    img.addEventListener("loadeddata", handled);
  } else if (path.endsWith(".mp4")) {
    img = document.createElement("video");
    img.addEventListener("canplay", handled);
  } else {
    img = new Image();
    // Delete img once the image has loaded:
    img.onload = handled;
    // Also handle when img doesn't successfully load:
    img.onerror = handled;
  }
  img.style.display = "none";
  document.body.appendChild(img);

  img.src = path;
}

let loaded = 0;
function QueueToLoad(path) {
  if (loaded < 5) {
    Load(path);
    loaded++;
  } else {
    loadQueue.push(path);
  }
}

            QueueToLoad("./514fee350c2806981ead.jpg");
QueueToLoad("./f2df5515d875bfb422b0.gif");
QueueToLoad("./5b7d327e9fdbfbaaeb73.gif");
QueueToLoad("./aba358b4131fa3282fc2.gif");
QueueToLoad("./9605776671c9b7a6d97f.gif");
QueueToLoad("./7f8e17ddaaa1b716df81.gif");
QueueToLoad("./8fc649925cc3934f39cc.gif");
QueueToLoad("./35907fa6d5c1cafcde93.gif");
QueueToLoad("./1bda71cfb53864b6869b.png");
QueueToLoad("./c39352704197279ab4b5.png");
QueueToLoad("./2759113d3a7b7b217822.png");
QueueToLoad("./b93459d8966ee762de33.png");
QueueToLoad("./e9430243fd32543de900.gif");
QueueToLoad("./39a97b172fb9b5b94639.jsonc");
QueueToLoad("./100ad850915b524e939e.png");
QueueToLoad("./48fc8a62e22e73b8f888.png");
QueueToLoad("./bd31e3920e4570144a8a.png");
QueueToLoad("./59a43b7d043b583f43f3.png");
QueueToLoad("./2af606f73448cf66a8c5.gif");
QueueToLoad("./ae11e29329e826db3ea2.gif");
QueueToLoad("./a66883d4aded6d8a2493.gif");
QueueToLoad("./9659cd9e26c7081e250a.gif");
QueueToLoad("./8d28bc00821e88b6f2cd.gif");
QueueToLoad("./06d79c202c39caa4f5ff.png");
QueueToLoad("./aa73969967b3a3ed7007.gif");
QueueToLoad("./b9b9daff7a5c825a47d3.png");
QueueToLoad("./c7b46859d2fb603432af.mp4");
QueueToLoad("./9d7f25ccbb2325b419c8.png");
QueueToLoad("./4f0f84ec5e1e148efff8.gif");
QueueToLoad("./3b90a68a619108bb039a.mp3");
QueueToLoad("./a77ed87a719732f95d2e.mp3");
QueueToLoad("./24e69a7bbe413a038296.mp3");
QueueToLoad("./ddb7bbd3f6e8ce57e0ce.mp3");
QueueToLoad("./86c1088b3d344f8166bd.mp3");
QueueToLoad("./fa59cad655ea848c31ea.mp3");
QueueToLoad("./8f9c0e3cfa94ec55c6d1.mp3");
QueueToLoad("./1007506e15a79c4fd496.mp3");
QueueToLoad("./63b5339e8119e0953078.mp3");
QueueToLoad("./7a4a1c1d3557631de9e1.mp3");
QueueToLoad("./31ef9df7126f50d48b7d.mp3");
QueueToLoad("./88c6eeca1696e7b5aeef.mp3");
QueueToLoad("./e7b5f5ac3d421255c6ce.mp3");
QueueToLoad("./69204d437f21ff9aed2f.mp3");
QueueToLoad("./5da5ef7366266d79f650.mp3");
QueueToLoad("./242121f1a5a73ca823b4.mp3");
QueueToLoad("./0562cf1b60c4047cfa48.mp3");
QueueToLoad("./929b5a2b891ff542f514.mp3");
QueueToLoad("./b7f1d5c5c936b17d08cc.mp3");
QueueToLoad("./aa9fd0bc15a18011d5f5.mp3");
QueueToLoad("./539ffeffa285ee3c891b.mp3");
QueueToLoad("./7d3772040d3d41cbfc23.mp3");
QueueToLoad("./c023b5a07a8e4efac4c9.gif");
QueueToLoad("./9a4e57e6cfeed77e28db.gif");
QueueToLoad("./3bdb2dbe14906554b402.mp3");
QueueToLoad("./5a5bfe648bd7114b47b2.mp3");
QueueToLoad("./fa4b9d00f42e7f87cb06.mp3");
QueueToLoad("./607540a207ea846c8f94.mp3");
QueueToLoad("./ad18c0c35729ce7442ad.mp3");
QueueToLoad("./79dc7bae09bb40fab84d.mp3");
QueueToLoad("./8467945cc1a9d588115e.mp3");
QueueToLoad("./b81cea993623b167eb24.mp3");
QueueToLoad("./b495db48293cc4d2b774.mp3");
QueueToLoad("./c31437b1fc27019cc43a.mp3");
QueueToLoad("./92ef32709433cac5477f.mp3");
QueueToLoad("./c609fc9b2914d815e061.mp3");
QueueToLoad("./265e8ebb473011a1c9c7.mp3");
QueueToLoad("./0f3cffd09f93a807fd7e.mp3");
QueueToLoad("./86af276c8bcfb07e1e3f.mp3");
QueueToLoad("./bf975f73e0962288d1d7.mp3");
QueueToLoad("./7cd515a9d3e724377560.mp3");
QueueToLoad("./c4966b0ef4dc62170eec.mp3");
QueueToLoad("./130199303805ec1b2d45.mp3");
QueueToLoad("./a88aac145bf921c34a30.mp3");
QueueToLoad("./e96ebe75b7a75392dec2.mp3");
QueueToLoad("./c4b54d3cfbc3d62444fb.mp3");
QueueToLoad("./b4aadeba26be0be6e256.mp3");
QueueToLoad("./d0c7c551ee38253d34cf.mp3");
QueueToLoad("./11453c961de60a20d1bd.jsonc");
QueueToLoad("./4ecffbcdb417d1b52653.jsonc");
QueueToLoad("./c648ac5f9b773700ebe2.jsonc");
QueueToLoad("./8f99100b94ee7303c78d.jsonc");
QueueToLoad("./5e8eb774a97737b9a874.jsonc");
QueueToLoad("./8661b534eb181e97e35e.jsonc");
QueueToLoad("./ac645ff9a50fd50604c7.png");
QueueToLoad("./0904d14b4b7a5177496c.gif");
QueueToLoad("./d7d8efc7a9b388706497.gif");
QueueToLoad("./fd0eb63cef543a4effa5.gif");
QueueToLoad("./ce40cd10a1f712599bff.gif");
QueueToLoad("./e262c98119540c490cd1.gif");
QueueToLoad("./74689715832191efe6f3.gif");
QueueToLoad("./3a0adc41fe97498b2aac.gif");
QueueToLoad("./499a1f8aec8b99efc99f.gif");
QueueToLoad("./d21a12b3ea3e2a39039e.png");
QueueToLoad("./a2169395a19a06752f56.png");
QueueToLoad("./1cc3f92fbb786fe2f4da.png");
QueueToLoad("./6c28c88519d612695303.png");
QueueToLoad("./28d96b38f282d6ce7e42.png");
QueueToLoad("./3211f663d54866c21608.jsonc");
QueueToLoad("./fd3cf57a2e572662a236.png");
QueueToLoad("./a2f2e42159f846ad59fc.jsonc");
QueueToLoad("./9bc4ed88bdb6bf05d1d9.jsonc");
QueueToLoad("./ad0459f81d48a34adb7a.jsonc");
QueueToLoad("./64f8e91dcffb11d3cdbf.jsonc");
QueueToLoad("./c546bd3a4a4a225a7a07.gif");
QueueToLoad("./8fbb21cf59f27bc26b34.gif");
QueueToLoad("./ee76661cc774c092cd31.png");
QueueToLoad("./1aba0a9dd0e162efcf9a.gif");
QueueToLoad("./d7ee881105827ea6cf4e.gif");
QueueToLoad("./c493085c7eba368eec45.png");
QueueToLoad("./b99c9875a12dd66cc17e.png");
QueueToLoad("./b7cb033e47406ebd138a.png");
QueueToLoad("./b280b3375fd515afb2e9.png");
QueueToLoad("./7a69caabfea1d587e104.png");
QueueToLoad("./90ce591eba585e4dc9c1.png");
QueueToLoad("./34b0a0d271609f137e0e.ttf");
QueueToLoad("./fe619a1165b50ea8c935.otf");
QueueToLoad("./48cd791b1bdd3fa4fb31.otf");
QueueToLoad("./70f66c6222d0398a7e23.otf");
QueueToLoad("./90a080428337f4b294ae.otf");
QueueToLoad("./2335a4ad1ef1a99d19fe.otf");
QueueToLoad("./cda2fe0f332ea0480102.ttf");
QueueToLoad("./efdc06eb86b98129e476.ttf");
QueueToLoad("./e617e281017b27c64b8d.ttf");
QueueToLoad("./dcb6c402987977c07259.ttf");
QueueToLoad("./e1d1622c832a3e2c218f.ttf");
QueueToLoad("./c6acecc6afa05d3c0600.ttf");
QueueToLoad("./e8be6395147fcd4c13a0.gif");
QueueToLoad("./f9c19299d94dac69842d.png");
QueueToLoad("./dc4bd63f43fbbcc77691.png");
QueueToLoad("./c819afdf061b28c52b17.png");
QueueToLoad("./a23d35a9c380dec75ade.gif");
QueueToLoad("./99d50b403f96c8251e28.mp3");
QueueToLoad("./7c42bb0e36fac8cf8577.gif");
QueueToLoad("./f1522b05e430b453f1de.gif");
QueueToLoad("./d7bf808ef4ec3d949ae5.gif");
QueueToLoad("./a23d35a9c380dec75ade.gif");
QueueToLoad("./1c2e09dd97e7367350e9.png");
QueueToLoad("./622e409a214495c779fa.gif");
QueueToLoad("./8adec108df74b09ffcc4.png");
QueueToLoad("./ec0e74e9f69ce3c49480.gif");
QueueToLoad("./c84615d750c259b359ce.gif");
QueueToLoad("./5020a118bf0e83d1b2fb.gif");
QueueToLoad("./8b9f3b025c165bef9ca2.png");
QueueToLoad("./acae156aee2ee5d18163.png");
QueueToLoad("./ca344af4ca1c0b631f34.png");
QueueToLoad("./bbc0b0b286859ad8f9d3.png");
QueueToLoad("./1fceb72dd360b7651d35.png");
QueueToLoad("./6dbf0ab72bca15ac5d2d.gif");
QueueToLoad("./276da54aa3e0f0ceff6c.gif");
QueueToLoad("./7635e44300fa76ce493f.gif");
QueueToLoad("./6ba21f64e9fcd4325ed1.gif");
QueueToLoad("./9001fa94441e0b6519e7.png");
QueueToLoad("./6697a74da418cd7d2843.png");
QueueToLoad("./a358c3557a1bea8ee3f0.png");
QueueToLoad("./5778b960cd2a2230d1c6.png");
QueueToLoad("./23372ff7a94ed7740080.png");
QueueToLoad("./73149023c034fd9a0d3e.png");
QueueToLoad("./972965872516f47ffc74.png");
QueueToLoad("./712d912e7e70d9c600c3.png");
QueueToLoad("./e7855cb18738c1637945.png");
QueueToLoad("./a2a0c9b89a499cba12de.png");
QueueToLoad("./c41658b82eebb47840f0.png");
QueueToLoad("./8be027d5deade1bfb6a4.png");
QueueToLoad("./8b9ab9bbb06723305a4f.png");
QueueToLoad("./a919d582b9baf4b440f2.png");
QueueToLoad("./fb755407630154efb268.png");
QueueToLoad("./2662616cc12340143b11.png");
QueueToLoad("./2d4a919d67cd8087e81c.png");
QueueToLoad("./8cc8916c474230d404d6.png");
QueueToLoad("./03c377cc5ab352f0ab2a.png");
QueueToLoad("./60c1e40509c5334705de.png");
QueueToLoad("./e6466061cedc8c6dd6c6.png");
QueueToLoad("./fe9b28ecff3a79efbb1b.png");
QueueToLoad("./30a9b642fcbf7b4ac950.png");
QueueToLoad("./e3639fc3624a0cf82de0.png");
QueueToLoad("./41069eda1034557f1657.png");
QueueToLoad("./69c2a65ad51060ebbc98.png");
QueueToLoad("./eea96d9c2e969855370e.png");
QueueToLoad("./709c24434fa8bcdf2a72.png");
QueueToLoad("./3074d490271211a54a19.png");
QueueToLoad("./ccf3b8ca527241ab9639.png");
QueueToLoad("./b3d6cb32cc5e572d4144.png");
QueueToLoad("./f9c1ee12c54dc7b81eee.png");
QueueToLoad("./b1f1b45f080ffc903c03.png");
QueueToLoad("./545c577b6c994275f88f.png");
QueueToLoad("./808adc8e76c2f976ab93.png");
          