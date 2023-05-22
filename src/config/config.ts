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
    cid: "bafybeido4ncavhpgpo7p5omen5y5lz3x56x5bdptwrkobsfohrdvlx6nte", // Unreal Ch Cit_Orng file
    nftId: [
      "0x2d8a7faf1ab59317d79221d294ae444953e11b70d5f5e4ef90353674334abcda",
    ], // You need to own 'Cyber Citizen 1' to unlock this.
  },
  {
    cid: "bafybeig32mmkqp4xw7pfvirri52pgd7alje5fcopcmlu6wumdkdpclspem", // Unreal Ch Cit_Wht file
    nftId: [
      "0x77ef8d601739d59e22798164b29549fb89ce7a4a40664469e645bf5914692867",
    ], // You need to own 'Cyber Citizen 2' to unlock this.
  },
  {
    cid: "bafybeiauqy55faoj2nlhbnqpeikr55q44dxzdmrfaoheiv2vte2af6vxhy", // Unreal Ch Clone_Blk file
    nftId: [
      "0x5f0371df34688e215e06e0b2d56de6035228774b3fe4b4fafa77ffd5fd11c11a",
    ], // You need to own 'CCC-2187' to unlock this.
  },
  {
    cid: "bafybeiem2zwvgzcyvoc3le6j7rrmbhhyl5lt5qje6ipqtrujnjej7xexgy", // Unreal Ch Clone_Blk_BD file
    nftId: [
      "0x15604341c0f14cbb1b61e6f53443a856b6458ebf3541a5194336ea084455ebca",
    ], // You need to own 'CCC-2077' to unlock this.
  },
  {
    cid: "bafybeiaz63ke7iu7qd5chjxkmtjg2d2ynx776os6hpqpwrx4hc2kycscmm", // Unreal Ch Clone_Wht_BD file
    nftId: [
      "0xc0531e7986020433e2fd344aa80cc85b72f4759860b03125100fe2d7e2e8facf",
    ], // You need to own 'CCC-2071' to unlock this.
  },
  {
    cid: "bafybeid6gck7hbo4mws7cwaupyanuzreu7uytejj7j3gbneeo6fqcngc5y", // Unreal Ch Khome file
    nftId: [
      "0x77fa12d1e16c014728a37318a3a7fed47c5282b97bf57bad406fe45f4b1b2636",
    ], // You need to own 'Khome v.01' to unlock this.
  },
  {
    cid: "bafybeierz5a74aebcep4p5kl6fn3hcwxmgo6bd3nogmxtkstr4zicl5jiu", // Unreal Ch Khome Wstlnd file
    nftId: [
      "0x3525c4d986e4cbf39c1f13e921ccc825c499682258837eb46440ef66643cbb57",
    ], // You need to own 'Khome v.02' to unlock this.
  },
  {
    cid: "bafybeibekqphtougt35elfwoomeopgcllddhj6ggtl6tr22ppr2odwmrgq", // Unreal Ch Kyodai BG file
    nftId: [
      "0x7a1b9cccd5767147255328ea109d3e402b1da1af8de62d3c7ac95cd20b9be189",
    ], // You need to own 'Kyodai Shingen 1' to unlock this.
  },
  {
    cid: "bafybeiemtyg4j6tn754ofz6xhbxqo6o6pw3cwwdxyehlzy7gahhkdiyd6e", // Unreal Ch Kyodai RP file
    nftId: [
      "0x45a3b842c2e10cee7524eb660e058074c2a23ee492477137d38afcf23d0c8dbe",
    ], // You need to own 'Kyodai Shingen 2' to unlock this.
  },
  {
    cid: "bafybeiagr2olmovty3g6lkkh5mxhwz5cy5klimxblj32jdfsk4khyottxq", // Unreal Ch Kyodai WO file
    nftId: [
      "0x05b25219b0109f89228bfb30525dae80975616e1f251455594d8dd480c9cead9",
    ], // You need to own 'Kyodai Shingen 3' to unlock this.
  },
  {
    cid: "bafybeifm7habrhoyftrips6wus7nflqij6pz6ryqnzmuhkurfuhcwi7mte", // Unreal Ch Mech_Lux file
    nftId: [
      "0x02bb240b7cfca6c12f7ff6b41357aa3c98801977dc570b55b587519c737b5c36",
    ], // You need to own 'Lux Mech' to unlock this.
  },
  {
    cid: "bafybeihd2mvq4434zafpi3xo5swgysebdnj55kdjaznjfbmtettlmnx46u", // Unreal Ch Mech NPAP file
    nftId: [
      "0xbd4504b5b5356b1da283e16003a9440247f87843eee0d13db856c23fbc5c853c",
    ], // You need to own 'NPAP-1138' to unlock this.
  },
  {
    cid: "bafybeiduede6hjhor4z5xngfxfkuenlrtkl2r6uge5qyjing2z6sxlynnu", // Unreal Ch Mech_Shingen file
    nftId: [
      "0xa3facf60b2c5ec977f7d7a526672e8ea24c16aeb6e669262839aff3254bc8cda",
    ], // You need to own 'Shingen Mech' to unlock this.
  },
  {
    cid: "bafybeigaejrchzxrhoodjsrj6mnqbjoo5wggb5cwrekxruygzxacspjkom", // Unreal Ch Mech_St file
    nftId: [
      "0x3a67e03a2c7b6cc69e7ddec9b7ada35961f3c22e0e87320bdaf7bb0c978db2f2",
    ], // You need to own 'Street Mech 1' to unlock this.
  },
  {
    cid: "bafybeiag3bogb4aiq3m24jn4e5ao7jenbrm6rfppaujdhajonphbkfusem", // Unreal Ch SubCit_Blk file
    nftId: [
      "0x674a014de438b76b8d6fa821a39a8cd16864262923cd07e8ff64978241658f38",
    ], // You need to own 'Sub-Citizen 1' to unlock this.
  },
  {
    cid: "bafybeihe5cj6wni2iu42rsgxwgh75fccy7sbdjpd2qokauv2xghuthymwu", // Unreal Ch SubCit_Wht file
    nftId: [
      "0xd71bafedec066ca5c5f9dcf145dca138fa0a2137ec7ce74bd5e382dbdaf324d7",
    ], // You need to own 'Sub-Citizen 2' to unlock this.
  },
  {
    cid: "bafybeieolt7xtohhcm4uj2gs72aeuwirjvqygp42m7x3b77ljiui2fbuje", // Unreal Naked PEPE file
    nftId: [
      "0x8606ae7567f1c7a96de8308c58375e9fae043e6a379926cd577778fab948fd99",
    ], // You need to own 'WE ARE ALL PEPE' to unlock this.
  },
  {
    cid: "bafybeick5pzvkufkzptvspbwder4kc2sw5xx66dj5drsir45qxfkuwzboe", // Unreal Kraken PEPE file
    nftId: [
      "0xa610dcf6016c934f9ad83d9b3027a18248f6991da8387d36667ea8b01e47b378",
    ], // You need to own 'Kraken PEPE' to unlock this.
  },
  {
    cid: "bafybeidg6w52n7fet45py2gxku2kx7qmfrrdun3kmmfbn2rwr437dfc4lu", // Unreal Barbarian PEPE #3 file
    nftId: [
      "0x39ffe43cd8c3e768a456e9914760352d1b60f28d6d68972b4928d577afa85ff1", "0x29caafec4d942ac184d22f4224526f9689b7cf55a694a650a6c7a807f448789e",
    ], // You need to own 'PEPE the Peparian v.03' and '420,690,000,000,000 Pepe Sword' to unlock this.
  },
  {
    cid: "bafybeihqdxzuvme5brjnubnfkcyh2wz7cc2fehiwzzqsm53lzfucpho7dq", // Unreal Barbarian PEPE #2 file
    nftId: [
      "0x2f8983f9c4f46f09e1eec7d8b8a55d360c36a8be544698db22096c7da5e2fdc6", "0x8a751eeb68e507a1db30866b0d704ce8afe8407dbd1b3c38855ebee06248fbfa",
    ], // You need to own 'PEPE the Peparian v.02' and '420,690,000,000,000 Pepe Sword' to unlock this.
  },
  {
    cid: "bafybeibwypzighg34lwfw7tntmfu7eshdc67kjcb6irxix7n77xi63t34a", // Unreal Barbarian PEPE #1 file
    nftId: [
      "0xe47dda9edb33cf959c6e7efbf6bd15249a799c3cd49edaf46cc403939bd621c0", "0xe47dda9edb33cf959c6e7efbf6bd15249a799c3cd49edaf46cc403939bd621c0",
    ], // You need to own 'PEPE the Peparian v.01' and '420,690,000,000,000 Pepe Sword' to unlock this.
  },
];

export { unlockables };