import { Unlockable } from "./types";

/*********************************************************
Replace the `unlockables` below with your own content. 
Here are two examples:

1️⃣ Unlock a Submarined file by owning one specific NFT.
{ 
  cid: "<YOUR_CID>", 
  nftId: ["<YOUR_NFT_ID"]
}

2️⃣ Unlock a Submarined file by owning multiple NFTs.
{
  cid: "<YOUR_CID",
  nftId: [
    "<YOUR_FIRST_NFT_ID", "<YOUR_SECOND_NFT_ID", 
  ]
}
*********************************************************/

const unlockables: Unlockable[] = [
  {
    cid: "bafybeiewgw7nuye6prap2celmwn5rmrbu7bircmqllj5aakqzup72rqdcu", // Unreal Ch Cit_Orng file
    nftId: [
      "0x2d8a7faf1ab59317d79221d294ae444953e11b70d5f5e4ef90353674334abcda",
    ], // You need to own 'Cyber Citizen 1' to unlock this.
  },
  {
    cid: "bafybeibgnhl626ij5pzgsfoimte2pjhdobxsjzwyi6mglx4s62te65pnui", // Unreal Ch Cit_Wht file
    nftId: [
      "0x77ef8d601739d59e22798164b29549fb89ce7a4a40664469e645bf5914692867",
    ], // You need to own 'Cyber Citizen 2' to unlock this.
  },
  {
    cid: "bafybeih6geynafj3uhiaus5kayhdm7sweprjhlgmfmnlxbtuam6tajjrla", // Unreal Ch Clone_Blk file
    nftId: [
      "0x5f0371df34688e215e06e0b2d56de6035228774b3fe4b4fafa77ffd5fd11c11a",
    ], // You need to own 'CCC-2187' to unlock this.
  },
  {
    cid: "bafybeihd2oktyghrpvzxyciai5lcbwiq46vrkasbxrrpaiw57vztsw6gba", // Unreal Ch Clone_Blk_BD file
    nftId: [
      "0x15604341c0f14cbb1b61e6f53443a856b6458ebf3541a5194336ea084455ebca",
    ], // You need to own 'CCC-2077' to unlock this.
  },
  {
    cid: "bafybeibh44l4lpvogynbtm5pd6khvso3hak65pl2pxvsoxpp7j7xjxcdum", // Unreal Ch Clone_Wht_BD file
    nftId: [
      "0xc0531e7986020433e2fd344aa80cc85b72f4759860b03125100fe2d7e2e8facf",
    ], // You need to own 'CCC-2071' to unlock this.
  },
  {
    cid: "bafybeiffiarlq677wdno5daawnhttltdlxr7cxu4vike2f4ofdvz3scdti", // Unreal Ch Khome file
    nftId: [
      "0x77fa12d1e16c014728a37318a3a7fed47c5282b97bf57bad406fe45f4b1b2636",
    ], // You need to own 'Khome v.01' to unlock this.
  },
  {
    cid: "bafybeicufamlwz4e5mpo23o32tw7tvhl4m3vhzjhvsdqyl7u3f5t3pzvzq", // Unreal Ch Khome Wstlnd file
    nftId: [
      "0x3525c4d986e4cbf39c1f13e921ccc825c499682258837eb46440ef66643cbb57",
    ], // You need to own 'Khome v.02' to unlock this.
  },
  {
    cid: "bafybeig2whswrsyzaaqtwlfl6gr347im2zv6dnelh2x3nomirsdrftxlmm", // Unreal Ch Kyodai BG file
    nftId: [
      "0x7a1b9cccd5767147255328ea109d3e402b1da1af8de62d3c7ac95cd20b9be189",
    ], // You need to own 'Kyodai Shingen 1' to unlock this.
  },
  {
    cid: "bafybeiafhhytbbu5jsfym4ram7slm6zz5ozbl4v7fh3b47lfy7asdpef4i", // Unreal Ch Kyodai RP file
    nftId: [
      "0x45a3b842c2e10cee7524eb660e058074c2a23ee492477137d38afcf23d0c8dbe",
    ], // You need to own 'Kyodai Shingen 2' to unlock this.
  },
  {
    cid: "bafybeif4pcofgzhsip3pisgt4tnfpdfa7vp7suaw2ujad5t34mmxghc5eu", // Unreal Ch Kyodai WO file
    nftId: [
      "0x05b25219b0109f89228bfb30525dae80975616e1f251455594d8dd480c9cead9",
    ], // You need to own 'Kyodai Shingen 3' to unlock this.
  },
  {
    cid: "bafybeigt5a3zrkuczukju22wx2bvtfpndhotceqsai4avncjdrt4qevmde", // Unreal Ch Mech_Lux file
    nftId: [
      "0x02bb240b7cfca6c12f7ff6b41357aa3c98801977dc570b55b587519c737b5c36",
    ], // You need to own 'Lux Mech' to unlock this.
  },
  {
    cid: "bafybeif4k3jisy4wia6f7f4eam4eb6gqpkq3boq3gk5sldvt6l72tdz6ea", // Unreal Ch Mech NPAP file
    nftId: [
      "0xbd4504b5b5356b1da283e16003a9440247f87843eee0d13db856c23fbc5c853c",
    ], // You need to own 'NPAP-1138' to unlock this.
  },
  {
    cid: "bafybeieofuxe3e3fg4fv3igzjqgv4n6rff66rspxgyyzmjy6my6mtjb7y4", // Unreal Ch Mech_Shingen file
    nftId: [
      "0xa3facf60b2c5ec977f7d7a526672e8ea24c16aeb6e669262839aff3254bc8cda",
    ], // You need to own 'Shingen Mech' to unlock this.
  },
  {
    cid: "bafybeihmmibwitgnobkt7txe6fb2qilta566xqn6q4gigrtzlrlrvhj3u4", // Unreal Ch Mech_St file
    nftId: [
      "0x3a67e03a2c7b6cc69e7ddec9b7ada35961f3c22e0e87320bdaf7bb0c978db2f2",
    ], // You need to own 'Street Mech 1' to unlock this.
  },
  {
    cid: "bafybeicitgc5jtf24pgnqnc7rfxym5cqf72zo3affgeurmfipzu7cjqrdy", // Unreal Ch SubCit_Blk file
    nftId: [
      "0x674a014de438b76b8d6fa821a39a8cd16864262923cd07e8ff64978241658f38",
    ], // You need to own 'Sub-Citizen 1' to unlock this.
  },
  {
    cid: "bafybeiht4hiozh7ztp4gdazep7fsvxnfxdrrjyafny3k7lwddvackul52q", // Unreal Ch SubCit_Wht file
    nftId: [
      "0xd71bafedec066ca5c5f9dcf145dca138fa0a2137ec7ce74bd5e382dbdaf324d7",
    ], // You need to own 'Sub-Citizen 2' to unlock this.
  },
];
