/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
      you will store it in the variable you created in step 1
      3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
      4. For good measure, getTotalSupply() should return the number of NFT's you have created
      */
// create a variable to hold your NFT's
const NFTS = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (name,creator,bg_color,sale_price) {
    const NFT = {
        "name" : name,
        "creator" : creator,
        "bg_color" : bg_color,
        "sale_price" : sale_price
         }
     NFTS.push(NFT);

      }
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
 for(let i=0;i<NFTS.length;i++){
          console.log("\nID: " + (i+1));
          console.log("\nName : " + NFTS[i].name);
          console.log("Creator : " + NFTS[i].creator);
          console.log("Background Color : " + NFTS[i].bg_color);
          console.log("Sale Price : " + NFTS[i].sale_price);
       }
      }
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\nTotal NFTS Minted : " + NFTS.length);
      }

// call your functions below this line
mintNFT("Cyber Samurai","NeoGames","Neon Red","10 ETH");
mintNFT("Mystic Phoenix","Eternal Beasts","Fiery Orange","15 ETH");
mintNFT("Stealth Ninja","Realm Interactive","Midnight Black","12 ETH");
mintNFT("Cyber Punk","Avatar Forge","Electric Blue","9 ETH");

listNFTs();
getTotalSupply();
