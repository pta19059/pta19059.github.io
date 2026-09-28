/* Original expansion: four locations beyond the Black Rain case. */
window.FOSSIL_CHAPTERS = [
  {
    name: 'BLACKWATER DOCKS', theme: 'docks', location: 'VESPER / BLACKWATER HARBOUR',
    quote: 'The reactor was only the first shipment.',
    objective: 'STOP THE SHIPMENT / BOARD THE TRAIN', exitLabel: 'LAST TRAIN',
    briefing: 'Mara is transmitting from the harbour. Axiom containers are still full of creatures. Stop the shipment and board the train.',
    width: 1840, roofs: [{x:0,w:390,y:270},{x:426,w:330,y:250},{x:792,w:380,y:270},{x:1208,w:632,y:260}],
    enemies: [{x:320,type:'raptor'},{x:530,type:'turret'},{x:684,type:'spitter'},{x:902,type:'wirewing'},{x:1070,type:'brute'},{x:1290,type:'raptor'},{x:1460,type:'turret'},{x:1610,type:'stalker'}],
    pickups: [{x:218,type:'heavy'},{x:617,type:'grenade'},{x:1010,type:'med'},{x:1415,type:'ammo'}],
    mountX: 117, exit: {x:1780,y:260}, files: [{x:825,y:270,file:'manifest'}],
    crates: [270,720,1100,1530], rescues: [575,1330],
    waves: [{trigger:900, enemies:[{x:1110,type:'raptor'},{x:1160,type:'wirewing'}]}]
  },
  {
    name: 'IRON EXPRESS', theme: 'train', location: 'LINE 09 / AXIOM CONVOY',
    quote: 'Next stop: no return.',
    objective: 'CROSS THE TRAIN / DESTROY IRON JAW', exitLabel: 'RIFT GATE',
    briefing: 'The train is racing toward another breach. Fight across the carriages, gather supplies and destroy Iron Jaw before the tunnel.',
    width: 1930, roofs: [{x:0,w:310,y:264},{x:338,w:310,y:250},{x:676,w:310,y:264},{x:1014,w:300,y:246},{x:1342,w:588,y:264}],
    enemies: [{x:247,type:'raptor'},{x:480,type:'turret'},{x:598,type:'wirewing'},{x:792,type:'stalker'},{x:916,type:'spitter'},{x:1180,type:'brute'},{x:1510,type:'wirewing'},{x:1680,type:'boss',variant:'iron',hp:42}],
    pickups: [{x:155,type:'heavy'},{x:720,type:'grenade'},{x:1110,type:'med'},{x:1430,type:'heavy'},{x:1480,type:'grenade'}],
    exit: {x:1875,y:264}, bossName: 'IRON JAW / ARMOURED BEAST',
    crates: [550,1220], rescues: [870], files: [{x:1047,y:246,file:'signal'}]
  },
  {
    name: 'THE LOST CANOPY', theme: 'jungle', location: 'BREACH 02 / THE LOST TEMPLE',
    quote: 'The past has taken root.',
    objective: 'FIND MARA / DEFEAT THE GUARDIAN', exitLabel: 'RETURN TO 2091',
    briefing: 'Beyond the breach, the jungle has swallowed an Axiom outpost among ancient sandstone ruins. Follow Mara, free the researchers and defeat the guardian.',
    width: 2010, roofs: [{x:0,w:360,y:270},{x:398,w:350,y:242},{x:786,w:360,y:266},{x:1184,w:310,y:240},{x:1532,w:478,y:268}],
    enemies: [{x:290,type:'spitter'},{x:520,type:'raptor'},{x:670,type:'wirewing'},{x:945,type:'stalker'},{x:1080,type:'spitter'},{x:1320,type:'brute'},{x:1445,type:'wirewing'},{x:1740,type:'boss',variant:'root',hp:46}],
    pickups: [{x:225,type:'heavy'},{x:625,type:'med'},{x:890,type:'grenade'},{x:1380,type:'ammo'},{x:1570,type:'heavy'},{x:1620,type:'med'}],
    mountX: 115, exit: {x:1950,y:268}, bossName: 'ROOT CROWN / BREACH GUARDIAN',
    crates: [330,710,1420], rescues: [850,1230], files: [{x:1199,y:240,file:'mara'}]
  },
  {
    name: 'AXIOM ZERO', theme: 'tower', location: 'AXIOM / TRANSMISSION TOWER',
    quote: 'This time, the city is listening.',
    objective: 'DEFEAT OMEGA / BROADCAST THE EVIDENCE', exitLabel: 'BROADCAST',
    briefing: 'Mara has opened a route to the tower. Reach the transmitter and face Omega, the final Axiom weapon. Vesper deserves the truth.',
    width: 2080, roofs: [{x:0,w:350,y:268},{x:382,w:340,y:248},{x:754,w:330,y:268},{x:1116,w:964,y:260}],
    enemies: [{x:282,type:'turret'},{x:495,type:'stalker'},{x:650,type:'wirewing'},{x:905,type:'brute'},{x:1010,type:'spitter'},{x:1215,type:'turret'},{x:1360,type:'raptor'},{x:1560,type:'wirewing'},{x:1780,type:'boss',variant:'omega',hp:60}],
    pickups: [{x:160,type:'heavy'},{x:600,type:'grenade'},{x:820,type:'med'},{x:1290,type:'heavy'},{x:1490,type:'grenade'},{x:1610,type:'med'}],
    mountX: 115, exit: {x:2020,y:260}, bossName: 'OMEGA / FINAL PROTOCOL',
    crates: [325,685,980,1460], rescues: [1170], files: [{x:1135,y:260,file:'zero'}],
    waves: [{trigger:1400,enemies:[{x:1615,type:'raptor'},{x:1680,type:'wirewing'}]}]
  }
];
