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
  {
    cid: "bafybeicjfhhgszcsdwpxb5rwhcif67zy3fbwahrlcz7lhpiwdywslzylua", // Unreal Clone Destroyer-BLK file
    nftId: [
      "0x448d8a81ef5f30f60b676ad284b5ce0bef808578fa7ae79e4408c063f04aa58d",
    ], // You need to own 'CCC-6692' to unlock this.
  },
  {
    cid: "bafybeid73zb2cp5omsbaskk4o6j2cqu6aaj5cumc7wh2qggipgie2r4qy4", // Unreal Clone Destroyer-WHT file
    nftId: [
      "0xfe77f3508b53e22c2a318e3cce3f2629d058c4c1db54cfd188b7180844908192",
    ], // You need to own 'CCC-6668' to unlock this.
  },
  {
    cid: "bafybeicgsjnk7pughnluuwrm3o4gj2lztgybz6hvum5i6ouewx2t5hugnq", // Unreal Gnash Wokou file
    nftId: [
      "0x6e5eb3317adaa2397510f6ec1f2a2f50ddf4ebaea2e63f12479cfbefd0a16e68",
    ], // You need to own 'Wokou Gnash' to unlock this.
  },
  {
    cid: "bafybeigacuuczkx5ajchxezpkykx66xxdkli5kkqzidceo7qtqwnoa5pam", // Unreal Gnash Raku file
    nftId: [
      "0x1cffea187138459f4fe4920e3dddb3a6c8538d787365d0618674ac29ba09b087",
    ], // You need to own 'Raku Gnash' to unlock this.
  },
  {
    cid: "bafybeihacipdfwhzyhbvwpnqyfti6zw3xitgsgwgrqou5qfiyvvw6snvai", // Unreal Gnash Shinigami file
    nftId: [
      "0xe984c84dcfe2adc34299d6a8d82f3ce096608ba568340b0a8ce988137f208af9",
    ], // You need to own 'Shinigami Gnash' to unlock this.
  },
  {
    cid: "bafybeiab5dcnb2gsv5nwrtnptp5da5tlvxoabmu5fg5ovlm4v66jftfqzi", // Unreal Female Custom file
    nftId: [
      "0xbda2e3c93f3f1bbe8ad95e8deaebc22aba4952e1712b27f49f1407791ec763d8",
    ], // You need to own 'Qadira' to unlock this.
  },
  {
    cid: "bafybeifcoyuloriysllcxrbmxyekgzvmwbatmneoht5oti3ejzvr5xjpqu", // Qadira Texture
    nftId: [
      "0xbda2e3c93f3f1bbe8ad95e8deaebc22aba4952e1712b27f49f1407791ec763d8",
    ], // You need to own 'Qadira' to unlock this.
  },
  {
    cid: "bafybeiab5dcnb2gsv5nwrtnptp5da5tlvxoabmu5fg5ovlm4v66jftfqzi", // Unreal Female Custom file
    nftId: [
      "0x7483918c498eb124d1b6816a1fdc15b799820b77b77537c79c61fe797c8d10ad",
    ], // You need to own 'Blanca' to unlock this.
  },
  {
    cid: "bafybeidrz5ubdc4dshn5ccwne5gnakwekfcdyxm6rmvql5s22mprer2iki", // Blanca Texture
    nftId: [
      "0x7483918c498eb124d1b6816a1fdc15b799820b77b77537c79c61fe797c8d10ad",
    ], // You need to own 'Blanca' to unlock this.
  },
  {
    cid: "bafybeiab5dcnb2gsv5nwrtnptp5da5tlvxoabmu5fg5ovlm4v66jftfqzi", // Unreal Female Custom file
    nftId: [
      "0x10c552c1a33e277fbbad432211200a8cf9193afe17453c7d5287c6ee56294d68",
    ], // You need to own 'Cyanide' to unlock this.
  },
  {
    cid: "bafybeiehf3hbp7lix6p6lf2li4xoby3bauzzid7qll5eot7ejidyvkooau", // Cyanide Texture
    nftId: [
      "0x10c552c1a33e277fbbad432211200a8cf9193afe17453c7d5287c6ee56294d68",
    ], // You need to own 'Cyanide' to unlock this.
  },
  {
    cid: "bafybeiab5dcnb2gsv5nwrtnptp5da5tlvxoabmu5fg5ovlm4v66jftfqzi", // Unreal Female Custom file
    nftId: [
      "0xf2e21610f7a5eed96abf2ab379d08282c3450b2f7bb3146bcd98af7c2daf6b20",
    ], // You need to own 'Cougar' to unlock this.
  },
  {
    cid: "bafybeiew2ipc7ong6aflazey2potn4mdq6pasbvymgq5lvfl342fbktiru", // Cougar Texture
    nftId: [
      "0xf2e21610f7a5eed96abf2ab379d08282c3450b2f7bb3146bcd98af7c2daf6b20",
    ], // You need to own 'Cougar' to unlock this.
  },
  {
    cid: "bafybeiab5dcnb2gsv5nwrtnptp5da5tlvxoabmu5fg5ovlm4v66jftfqzi", // Unreal Female Custom file
    nftId: [
      "0xe9c5ce5b1969b9493eaf08b7c603549e228ff11b9f65a4108969c16fc2967923",
    ], // You need to own 'Ginger' to unlock this.
  },
  {
    cid: "bafybeidbp46onkshqj5bgyl7u55r6cur5eiygybj74qh3kmfpcldu5qcsu", // Ginger Texture
    nftId: [
      "0xe9c5ce5b1969b9493eaf08b7c603549e228ff11b9f65a4108969c16fc2967923",
    ], // You need to own 'Ginger' to unlock this.
  },
  {
    cid: "bafybeiab5dcnb2gsv5nwrtnptp5da5tlvxoabmu5fg5ovlm4v66jftfqzi", // Unreal Female Custom file
    nftId: [
      "0x566818bc1283a4f8c0ac141db69df42aceffe76680e035a8a547fc6f66baf12a",
    ], // You need to own 'Gordiria' to unlock this.
  },
  {
    cid: "bafybeiegeinogs4tchjey2ddv3wu6x2fli3mht47k4stgiz3zpc5ag6tzm", // Gordiria Texture
    nftId: [
      "0x566818bc1283a4f8c0ac141db69df42aceffe76680e035a8a547fc6f66baf12a",
    ], // You need to own 'Gordiria' to unlock this.
  },
  {
    cid: "bafybeiab5dcnb2gsv5nwrtnptp5da5tlvxoabmu5fg5ovlm4v66jftfqzi", // Unreal Female Custom file
    nftId: [
      "0xb3e6f3823863a6e02942abe14dd65cfcc8d1a1708e2d68362d125d3995ce7799",
    ], // You need to own 'Herbera' to unlock this.
  },
  {
    cid: "bafybeiewcacb6qzsujum2lei4gwgm3mtubflynmdxzszfe5dzaae46pgyq", // Herbera Texture
    nftId: [
      "0xb3e6f3823863a6e02942abe14dd65cfcc8d1a1708e2d68362d125d3995ce7799",
    ], // You need to own 'Herbera' to unlock this.
  },
  {
    cid: "bafybeiab5dcnb2gsv5nwrtnptp5da5tlvxoabmu5fg5ovlm4v66jftfqzi", // Unreal Female Custom file
    nftId: [
      "0x2dec78a2ca8791ac05822475f83145c4345b5fbd70576263d5b100630663bf33",
    ], // You need to own 'Jane Diamond' to unlock this.
  },
  {
    cid: "bafybeifesi7gyeu2gw2axy6bspe7ru7qxrmo3karunialaaxeype5rfhli", // Jane Diamond Texture
    nftId: [
      "0x2dec78a2ca8791ac05822475f83145c4345b5fbd70576263d5b100630663bf33",
    ], // You need to own 'Jane Diamond' to unlock this.
  },
  {
    cid: "bafybeiab5dcnb2gsv5nwrtnptp5da5tlvxoabmu5fg5ovlm4v66jftfqzi", // Unreal Female Custom file
    nftId: [
      "0xba2ec4e9543101ae7834e0b412dcbc295886ba7d5d3989ef071c2826473c1978",
    ], // You need to own 'Khayla2' to unlock this.
  },
  {
    cid: "bafybeicwn4aebwjm7kq5xzdrux6c7livbwuvooamqqm4rbs4pjbocmcz5q", // Khayla2 Texture
    nftId: [
      "0xba2ec4e9543101ae7834e0b412dcbc295886ba7d5d3989ef071c2826473c1978",
    ], // You need to own 'Khayla2' to unlock this.
  },
  {
    cid: "bafybeiab5dcnb2gsv5nwrtnptp5da5tlvxoabmu5fg5ovlm4v66jftfqzi", // Unreal Female Custom file
    nftId: [
      "0x600674ff73e3fbe0dd6632d3b275177dacc019f94793afb5cfdea6c61559015b",
    ], // You need to own 'Rescue' to unlock this.
  },
  {
    cid: "bafybeia3ubicgnvucjjznrei2k6pw6zrdhv6bsh44q7meu5abl77y77uua", // Rescue Texture
    nftId: [
      "0x600674ff73e3fbe0dd6632d3b275177dacc019f94793afb5cfdea6c61559015b",
    ], // You need to own 'Rescue' to unlock this.
  },
  {
    cid: "bafybeiab5dcnb2gsv5nwrtnptp5da5tlvxoabmu5fg5ovlm4v66jftfqzi", // Unreal Female Custom file
    nftId: [
      "0x6d21ec478093e687b85e47ca8c7a08d5d445c828f024b1f9125f7d142556e9e9",
    ], // You need to own 'Rosa' to unlock this.
  },
  {
    cid: "bafybeiefldu6cp3xoxitlbrvszfojm2zdxi3p6vpj2ri77hugmcjaf3xxi", // Rosa Texture
    nftId: [
      "0x6d21ec478093e687b85e47ca8c7a08d5d445c828f024b1f9125f7d142556e9e9",
    ], // You need to own 'Rosa' to unlock this.
  },
  {
    cid: "bafybeiab5dcnb2gsv5nwrtnptp5da5tlvxoabmu5fg5ovlm4v66jftfqzi", // Unreal Female Custom file
    nftId: [
      "0x6b1caa4f87002e42170c243dc2b779b0bdcbf04200c448925330475490e550ac",
    ], // You need to own 'FireGuard' to unlock this.
  },
  {
    cid: "bafybeih4wde4wewvlpbpkpp7t7tznig47ponrghnjc5hyse6f4pdmmnxpq", // FireGuard Texture
    nftId: [
      "0x6b1caa4f87002e42170c243dc2b779b0bdcbf04200c448925330475490e550ac",
    ], // You need to own 'FireGuard' to unlock this.
  },
  {
    cid: "bafybeiab5dcnb2gsv5nwrtnptp5da5tlvxoabmu5fg5ovlm4v66jftfqzi", // Unreal Female Custom file
    nftId: [
      "0xcc86754baeaa0ff88aaa57e01d424eba4adda809c6895d35fe8467e7a4ef8b33",
    ], // You need to own 'ValkyrieKhan' to unlock this.
  },
  {
    cid: "bafybeiaxex6o765ugmdiyu5ib74g6ovrwr3i3vebozclzv5tjhohwoexva", // ValkyrieKhan Texture
    nftId: [
      "0xcc86754baeaa0ff88aaa57e01d424eba4adda809c6895d35fe8467e7a4ef8b33",
    ], // You need to own 'ValkyrieKhan' to unlock this.
  },
];

export { unlockables };