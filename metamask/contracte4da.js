const networkName = "mainnet"
const CONTRACT_ADDR = "0xCf5997c7A314ae624C6F2F4A6DdC373efd23b276"
const abi=[{"inputs":[{"internalType":"string","name":"baseTokenURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"PayeeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PaymentReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_BULLDOGS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_BULLDOGS_PER_TRANSACTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRESALE_BULLDOGS_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RESERVED_BULLDOGS_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOKEN_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_referrals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_referrers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_referrersCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipPresaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numBulldogs","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"mintBohemianBulldog","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintWithTreasureKey","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"payee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"account","type":"address"}],"name":"release","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"released","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newID","type":"uint256"}],"name":"setLaunchpadProjectId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxTokens","type":"uint256"}],"name":"setMaxTokensPerTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"setTreasureKeys","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"shares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"option","type":"uint256"}],"name":"switchPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReleased","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

const infura_token_api="50a6c21b92b8499e833818e7229f1390"

const refLink=document.getElementById("refLink")
const btnSend=document.getElementById("sendButton")
const tokensInput=document.getElementById("tokenNumberInput")
const walletModal=document.getElementById("WalletModal")
const walletConnect=document.getElementById("connectWallet")

let connected = false;

const fetchAccountData = async ()=>{
              const accounts=await window.web3_provider.eth.getAccounts()
              console.log("accounts: ",accounts)
              connected = true;
              if (accounts.length > 0){
                const address = accounts[0]
                 walletConnect.innerHTML=accounts[0].substr(0,10)+"..."+accounts[0].substr(-4);
                tokensInput.disabled=false
                btnSend.disabled=false
                refLink.style["display"]="block"
                //const url = decodeURI(window.location.href);
                //const link=url.split('?')[0] + "?ref=" + address
                //document.getElementById("ref_link").innerHTML=""//link
                //document.getElementById("sendButton").innerHTML="Sale starts on 17th Oct 16:00 UTC"
                //document.getElementById("sendButton").disable = true;
              }
              else
                 walletConnect.innerHTML="Connect wallet";
}

  const providerOptions = { walletconnect: { package: window.WalletConnectProvider.default,
    options: {
      infuraId: infura_token_api ,
    }
   } }
  const Web3Modal = window.Web3Modal.default;
  const web3Modal = new Web3Modal({
    network: networkName, // optional
    providerOptions // required
  });

  let provider=null;

const connect = async()=>{

  await web3Modal.clearCachedProvider();
  provider = await web3Modal.connect()
  window.web3_provider = new Web3( provider );
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });

  await fetchAccountData();
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function getParamsFromUrl(url) {
    url = decodeURI(url);
    if (typeof url === 'string') {
        let params = url.split('?');
        if (params.length <2) return {};
        let eachParamsArr = params[1].split('&');
        let obj = {};
        if (eachParamsArr && eachParamsArr.length) {
            eachParamsArr.map(param => {
                let keyValuePair = param.split('=')
                let key = keyValuePair[0];
                let value = keyValuePair[1];
                obj[key] = value;
            })
        }
        return obj;
    }
}

function Alert(text){
  const modal=document.getElementById("modal");
  const modal_text=document.getElementById("alert_text");
  modal_text.innerText=text;
  modal.style["display"]="block";
}

function closeModal(){
  modal.style["display"]="none";
}

document.getElementById("modal_close2").onclick=closeModal;


const mint= async (e)=>{

  try {
    console.log(accounts.length);
  }

  catch(error) {
    if (connected == true) {
        console.log(error);
    }

    else {
        await connect();
    }
  }

  if (typeof window.web3_provider !== 'undefined') {
        const cnt = tokensInput.value
        if (cnt > 0){
			if (cnt > 20) {alert("Error: more than max")
            console.log("Error: more than max")}
			else {
          var result="";
          try{

            let referrer = getCookie("nft_referrer")? getCookie("nft_referrer") :"0x0000000000000000000000000000000000000000";

            const web3=window.web3_provider
            let isAddress = web3.utils.isAddress(referrer)
            if (!isAddress) {
                referrer = "0x0000000000000000000000000000000000000000";
            }

            console.log("REFERRER IS")
            console.log(referrer)

            const accounts=await window.web3_provider.eth.getAccounts()
            const contract=new web3.eth.Contract(abi, CONTRACT_ADDR, {gas: 3000000});
            const salesActive = await contract.methods.saleIsActive().call()
            const presalesActive = await contract.methods.presaleIsActive().call()

            if (!salesActive && !presalesActive) throw {"message": "Neither sale or presale is not active"}

            //const price = 90000000000000000
            const price = await contract.methods.TOKEN_PRICE().call()
            const value = (price * cnt)
            const gas = Math.round( await contract.methods.mintBohemianBulldog(cnt, referrer).estimateGas({value: value.toString(), from: accounts[0]}) * 1.5 )
            result = await contract.methods.mintBohemianBulldog(cnt, referrer).send({value: value.toString(), from: accounts[0], gas: gas})
	    window.location.href="/welcome.php?hash=" + result.transactionHash
          } catch(e) {
            Alert("Error: " + e.message)
            console.log("Error: ",e)
			}}
        }
  }
}

const copyLink = async ()=>{
    if (typeof window.web3_provider !== 'undefined') {

        const accounts = await window.web3_provider.eth.getAccounts()

        if (accounts.length > 0) {
            const address = accounts[0];

            let link = 'https://bohemian-bulldogs.com/?ref=' + address;
            document.execCommand("copy");
            navigator.clipboard.writeText(link);

            alert("Copied: " + link);
        }
    }
}


function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    let ref_unprocessed = decodeURI(dc.substring(begin + prefix.length, end));
    console.log('ref_unprocessed', ref_unprocessed)
    return ref_unprocessed.split(';')[0];
}



function getCookie1(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
}

const ref = getParamsFromUrl(window.location.href)["ref"]
if (typeof ref != "undefined" && !getCookie('nft_referrer')){
  //document.cookie = "nft_referrer=" + ref
  document.cookie = "nft_referrer=" + ref + ";max-age=1000400;domain=.bohemian-bulldogs.com;path=/"
}

console.log('Ref link added:', getParamsFromUrl(window.location.href))

refLink.onclick=copyLink
tokensInput.disabled=false
btnSend.disabled=false
btnSend.onclick=mint
walletConnect.onclick=connect

//new ClipboardJS('#refLink');
const clipboard=new ClipboardJS('#refLink');
clipboard.on('success',async (e)=>{
  if (typeof window.web3_provider !== 'undefined') {
    const accounts=await window.web3_provider.eth.getAccounts()
    if (accounts.length > 0){
      console.log("copied")
        const address = accounts[0]
        const url = decodeURI(window.location.href);
        const link=url.split('?')[0] + "?ref=" + address
        Alert("Copied: " + link);
    }
  }
})

const autoconnect=async()=>{
  await web3Modal.clearCachedProvider();
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    provider=window.ethereum
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  }else{
    provider = await web3Modal.connect()//.connectTo('walletconnect')
  }

  if (provider) {
    window.web3_provider = new Web3( provider );
    provider.on("accountsChanged", (accounts) => {
      fetchAccountData();
    });
    provider.on("chainChanged", (chainId) => {
      fetchAccountData();
    });
    provider.on("networkChanged", (networkId) => {
      fetchAccountData();
    });

    await fetchAccountData();
  }

}

//autoconnect()