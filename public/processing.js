
  var target = new URLSearchParams(location.search);

  let walletAddress = target.get("wallet-address");
  let coinName = target.get("coin-name");
  let walletName = target.get("wallet-name");
  


  //Generate QR Code API link
  qrSize = 100;
  let qrRequestURL = "https://api.qrserver.com/v1/create-qr-code/?size=" + qrSize + "x" + qrSize + "&data=" + walletAddress;

  //Console output test
  // console.log(walletAddress);
  // console.log(coinName);
  // console.log(walletName);
  // console.log(qrRequestURL);
