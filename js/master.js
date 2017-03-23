$(document).ready(function() {


  const accessoriesArray = [
    'Rear Bumper Applique',
    'Rear Cargo Tray',
    'Luggage Compartment Cover',
    'Cargo Net - Rear',
    'Splash Guards',
    'Rear Seatback Protector',
    'Rear Bumper Cover',
    'Bumper Corner Moldings',
    'Door Edge Guards',
    'Wheel Locks',
    'Battery Warmer',
    'Car Cover',
    'Car Cover Bag',
    'Engine Block Heater',
    'Fog Light Kit',
    'Front Side Sill Plates',
    'Front Bumper Underguard',
    'Rear Bumper Underguard',
    'Sport Grille',
    'Stainless Steel Exhaust Tip',
    'Severe Weather Companion',
    'Roadside Emergency Kit',
    'Cargo Tray',
    'Cargo Organizer',
    'Rear Bumper Protector',
    'Auto-Dimming Mirror with Compass and HomeLink',
    'Auto-Dimming Mirror with Compass',
    'Cigarette Lighter',
    'Sunshade',
    'Ash Tray',
    'valve Stem Caps',
    'Rear Bumper Diffuser',
    'Chrome Fuel Door Cover',
    'Carbon Fiber Key Chains',
    'Crossbar Set – Fixed',
    'Crossbar Set – Aero',
    '“Subaru” License Plate Frames',
    'License Plate Frames',
    'Slim License Plate Frames',
    'Slim Carbon Fiber License Plate Frame',
    'Parking Only Sign',
    'Footwell Illumination Kit',
    'Security System Upgrade – Shock Sensor',
    'Hood Protector',
    'Body Side Molding',
    '120 Volt Power Outlet',
    'Compartment Separator',
    'Remote Engine Starter',
    'Cargo Net - Rear Seatback',
    'Cargo Tray',
    'Cargo Net - Side',
    'Cargo Cover',
    'Remote Engine Starter – Smart Engine Start',
    'Remote Engine Starter – Key Start',
    'Moonroof Air De ector',
    'Cargo Organizer',
    'Center Console Tray',
    'Center Armrest Extension',
    'Thule Heavy-Duty Roof Cargo Basket',
    'Thule Bike Carrier - Hitch Mounted',
    'Thule Roof Cargo Carrier',
    'Thule Roof Cargo Carrier – Extended',
    'Thule Crossbar Set – Aero Extended',
    'Trailer Hitch',
    'Trailer Hitch Cover',
    'Thule Heavy-Duty Roof Cargo Basket',
    'Thule Heavy-Duty Roof Cargo Basket',
    'Thule Bike Carrier – Roof Mounted',
    'Thule Bike Carrier – Fork Mounted',
    'Thule Bike Carrier – Wheel Holder',
    'Thule Paddleboard Carrier',
    'Thule Ski and Snowboard Carrier',
    'Thule Kayak Carrier',
    'Tweeter Kit',
    '10-Inch Powered Subwoofer',
    'Upgraded Speakers',
    'Sport Mesh Grille',
    'Front License Plate Bracket',
    'Valve Stem Caps',
    'Roof Spoiler',
    'Exterior Auto-Dimming Mirror with Approach Light',
    'Leather Shift Knob – MT',
    'Footwell Illumination Kit',
    'STI Performance Exhaust System',
    'Vortex Generato',
    'STI Pedal Pad Sets',
    'STI Valve Stem Caps',
    'STI Roof Spoiler',
    'STI Leather Shift Knob – CVT',
    'STI Duracon Shift Knob – MT',
    'STI 17-Inch Alloy Wheels',
    'STI Flexible Strut Tower Brace',
    'STI Shift Knob – MT',
    'STI Front Under Spoiler',
    'STI Side Under Spoiler',
    'STI Carbon Fiber Key Chain',
    '17-Inch STI Alloy Wheel Set',
    'STI Rear Quarter Under Spoiler',
    'STI Carbon Fiber License Plate Frame',
    'STI License Plate Frames',
    '10-Inch Powered Subwoofer',
    '17 Inch Alloy Wheel',
    'Body Side Molding',
    'Exterior Auto-Dimming Mirror with Approach Light',
    'Auto-Dimming Mirror with Compass',
    'Auto-Dimming mirror with Compass and HomeLink',
    'Exterior Auto-Dimming Mirror with Approach Light',
    'Exterior Auto-Dimming Mirror with Approach Light for Blind Spot Detection Mirrors',
    'All Weather Floor Mats',
    'HID Headlights',
    'Side Window Deflectors',
    'Trailer Hitch',
    'Paddleboard Carrier',
    'Remote Engine Starter',
    'Rockford Fosgate Premium Audio Upgrade',
    'Footwell Illumination',
    'STI Performance Exhaust',
    'STI Carbon Fiber Trunk Trim',
    'Rear Aero Splash Guards'
  ];
  const packagesArray = [
    'All Weather Package',
    'Alloy Wheel Package',
    'Reverse Auto Brake',
    'High Beam Assist',
    'Navigation System',
    'EyeSight Driver Assist',
    'Blind-Spot Detection &amp; Rear Cross Traffic Alert',
    'Moonroof Package',
    'Power Rear Gate',
    'Auto-Dimming Mirror with Compass and HomeLink',
    'Steering Responsive Fog Lights',
    'Harman Kardon Amplifier and Speakers',
    'SUBARU STARLINK 8-Inch Multimedia Navigation',
    'SUBARU STARLINK 7-Inch Multimedia Audio with Harman Kardon Amplifier and speakers',
    'Keyless Access with Push-Button Start',
    'WRX Sport Package with 17-Inch Alloy Wheels',
    'WRX Sport Package with 18-Inch Alloy Wheels',
    'Low Profile Trunk Spoiler',
    'STI Performance Exhaust'
  ];
  // List of brochure links
  const brochureArray = [
    'http://www.ramseysubaru.net/showroom/2017/Subaru/Impreza/Sedan.htm',
    'http://www.ramseysubaru.net/showroom/2017/Subaru/Legacy/Sedan.htm',
    'http://www.ramseysubaru.net/showroom/2017/Subaru/Crosstrek/SUV.htm',
    'http://www.ramseysubaru.net/showroom/2017/Subaru/Forester/SUV.htm',
    'http://www.ramseysubaru.net/showroom/2017/Subaru/Outback/SUV.htm',
    'http://www.ramseysubaru.net/showroom/2017/Subaru/WRX/Sedan.htm',
    'http://www.ramseysubaru.net/showroom/2017/Subaru/BRZ/Coupe.htm'
  ];


    // List of Subaru Colors Available
    const cwp = 'Crystal White Pearl';
    const ism = 'Ice Silver Metallic';
    const cgm = 'Carbide Grey Metallic';
    const tm = 'Tungsten Metallic';
    const cbs = 'Crystal Black Silica';
    const dgm = 'Dark Grey Metallic';
    const sbm = 'Sepia Bronze Metallic';
    const qbp = 'Quartz Blue Pearl';
    const wbp = 'WR Blue Pearl';
    const lbp = 'Lapis Blue Pearl';
    const hb = 'Hyper Blue';
    const lbm = 'Lapis Blue Metallic';
    const tbm = 'Twilight Blue Metallic';
    const ibp = 'Island Blue Pearl';
    const pr = 'Pure Red';
    const vrp = 'Venetian Red Pearl';
    const lrp = 'Lithium Red Pearl';
    const dk = 'Desert Khaki';
    const jgm = 'Jasmine Green Metallic';
    const wgm = 'Wilderness Green Metallic';

    // Vehicles Array -------------------------------------------------------------------------
    const subaruVehicleArray = ['Impreza','Legacy','Crosstrek','Forester','Outback','WRX','BRZ'];

    // Trim Arrays ----------------------------------------------------------------------------
    const subaruImprezaTrim = ['2.0i Sedan','2.0i 5-Door','2.0i Premium Sedan','2.0i Premium 5-Door','2.0i Sport Sedan','2.0i Sport 5-Door','2.0i Limited Sedan','2.0i Limited 5-Door'];
    // Format of arrays = Color, Model + Trim, img URL, brochure URL
    const Impreza20iSedan = [
      [cbs,'Impreza ' + subaruImprezaTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSedan/cbs.png', brochureArray[0]],
      [cgm,'Impreza ' + subaruImprezaTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSedan/cgm.png', brochureArray[0]],
      [cwp,'Impreza ' + subaruImprezaTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSedan/cwp.png', brochureArray[0]],
      [lbp,'Impreza ' + subaruImprezaTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSedan/lbp.png', brochureArray[0]],
      [ism,'Impreza ' + subaruImprezaTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSedan/ism.png', brochureArray[0]],
      [ibp,'Impreza ' + subaruImprezaTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSedan/ibp.png', brochureArray[0]],
      [vrp,'Impreza ' + subaruImprezaTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSedan/vrp.png', brochureArray[0]]];
    const Impreza20i5Door = [
      [cbs,'Impreza ' + subaruImprezaTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20i5door/cbs.png', brochureArray[0]],
      [cgm,'Impreza ' + subaruImprezaTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20i5door/cgm.png', brochureArray[0]],
      [cwp,'Impreza ' + subaruImprezaTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20i5door/cwp.png', brochureArray[0]],
      [lbp,'Impreza ' + subaruImprezaTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20i5door/lbp.png', brochureArray[0]],
      [ism,'Impreza ' + subaruImprezaTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20i5door/ism.png', brochureArray[0]],
      [ibp,'Impreza ' + subaruImprezaTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20i5door/ibp.png', brochureArray[0]],
      [vrp,'Impreza ' + subaruImprezaTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20i5door/vrp.png', brochureArray[0]]];
    const Impreza20iPremiumSedan = [
      [cbs,'Impreza ' + subaruImprezaTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremiumSedan/cbs.png', brochureArray[0]],
      [cgm,'Impreza ' + subaruImprezaTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremiumSedan/cgm.png', brochureArray[0]],
      [cwp,'Impreza ' + subaruImprezaTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremiumSedan/cwp.png', brochureArray[0]],
      [lbp,'Impreza ' + subaruImprezaTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremiumSedan/lbp.png', brochureArray[0]],
      [ism,'Impreza ' + subaruImprezaTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremiumSedan/ism.png', brochureArray[0]],
      [ibp,'Impreza ' + subaruImprezaTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremiumSedan/ibp.png', brochureArray[0]],
      [vrp,'Impreza ' + subaruImprezaTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremiumSedan/vrp.png', brochureArray[0]]];
    const Impreza20iPremium5Door = [
      [cbs,'Impreza ' + subaruImprezaTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremium5door/cbs.png', brochureArray[0]],
      [cgm,'Impreza ' + subaruImprezaTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremium5door/cgm.png', brochureArray[0]],
      [cwp,'Impreza ' + subaruImprezaTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremium5door/cwp.png', brochureArray[0]],
      [lbp,'Impreza ' + subaruImprezaTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremium5door/lbp.png', brochureArray[0]],
      [ism,'Impreza ' + subaruImprezaTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremium5door/ism.png', brochureArray[0]],
      [ibp,'Impreza ' + subaruImprezaTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremium5door/ibp.png', brochureArray[0]],
      [vrp,'Impreza ' + subaruImprezaTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremium5door/vrp.png', brochureArray[0]]];
    const Impreza20iSportSedan = [
      [cbs,'Impreza ' + subaruImprezaTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSportSedan/cbs.png', brochureArray[0]],
      [cgm,'Impreza ' + subaruImprezaTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSportSedan/cgm.png', brochureArray[0]],
      [cwp,'Impreza ' + subaruImprezaTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSportSedan/cwp.png', brochureArray[0]],
      [lbp,'Impreza ' + subaruImprezaTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSportSedan/lbp.png', brochureArray[0]],
      [ism,'Impreza ' + subaruImprezaTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSportSedan/ism.png', brochureArray[0]],
      [ibp,'Impreza ' + subaruImprezaTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSportSedan/ibp.png', brochureArray[0]],
      [lrp,'Impreza ' + subaruImprezaTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSportSedan/lrp.png', brochureArray[0]]];
    const Impreza20iSport5Door = [
      [cbs,'Impreza ' + subaruImprezaTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSport5door/cbs.png', brochureArray[0]],
      [cgm,'Impreza ' + subaruImprezaTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSport5door/cgm.png', brochureArray[0]],
      [cwp,'Impreza ' + subaruImprezaTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSport5door/cwp.png', brochureArray[0]],
      [lbp,'Impreza ' + subaruImprezaTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSport5door/lbp.png', brochureArray[0]],
      [ism,'Impreza ' + subaruImprezaTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSport5door/ism.png', brochureArray[0]],
      [ibp,'Impreza ' + subaruImprezaTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSport5door/ibp.png', brochureArray[0]],
      [lrp,'Impreza ' + subaruImprezaTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSport5door/lrp.png', brochureArray[0]]];
    const Impreza20iLimitedSedan = [
      [cbs,'Impreza ' + subaruImprezaTrim[6],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimitedSedan/cbs.png', brochureArray[0]],
      [cgm,'Impreza ' + subaruImprezaTrim[6],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimitedSedan/cgm.png', brochureArray[0]],
      [cwp,'Impreza ' + subaruImprezaTrim[6],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimitedSedan/cwp.png', brochureArray[0]],
      [lbm,'Impreza ' + subaruImprezaTrim[6],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimitedSedan/lbm.png', brochureArray[0]],
      [ism,'Impreza ' + subaruImprezaTrim[6],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimitedSedan/ism.png', brochureArray[0]],
      [ibp,'Impreza ' + subaruImprezaTrim[6],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimitedSedan/ibp.png', brochureArray[0]],
      [vrp,'Impreza ' + subaruImprezaTrim[6],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimitedSedan/vrp.png', brochureArray[0]]];
    const Impreza20iLimited5Door = [
      [cbs,'Impreza ' + subaruImprezaTrim[7],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimited5door/cbs.png', brochureArray[0]],
      [cgm,'Impreza ' + subaruImprezaTrim[7],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimited5door/cgm.png', brochureArray[0]],
      [cwp,'Impreza ' + subaruImprezaTrim[7],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimited5door/cwp.png', brochureArray[0]],
      [lbm,'Impreza ' + subaruImprezaTrim[7],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimited5door/lbm.png', brochureArray[0]],
      [ism,'Impreza ' + subaruImprezaTrim[7],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimited5door/ism.png', brochureArray[0]],
      [ibp,'Impreza ' + subaruImprezaTrim[7],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimited5door/ibp.png', brochureArray[0]],
      [vrp,'Impreza ' + subaruImprezaTrim[7],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimited5door/vrp.png', brochureArray[0]]];

    const subaruLegacyTrim = ['2.5i','2.5i Premium','2.5i Sport','2.5i Limited','3.6R Limited'];
    const Legacy25i = [
      [cbs,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/cbs.png', brochureArray[1]],
      [cgm,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/cgm.png', brochureArray[1]],
      [cwp,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/cwp.png', brochureArray[1]],
      [ism,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/ism.png', brochureArray[1]],
      [lbp,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/lbp.png', brochureArray[1]],
      [tbm,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/tbm.png', brochureArray[1]],
      [tm,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/tm.png', brochureArray[1]],
      [vrp,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/vrp.png', brochureArray[1]]];
    const Legacy25iPremium = [
      [cbs,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/cbs.png', brochureArray[1]],
      [cgm,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/cgm.png', brochureArray[1]],
      [cwp,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/cwp.png', brochureArray[1]],
      [ism,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/ism.png', brochureArray[1]],
      [lbp,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/lbp.png', brochureArray[1]],
      [tbm,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/tbm.png', brochureArray[1]],
      [tm,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/tm.png', brochureArray[1]],
      [vrp,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/vrp.png', brochureArray[1]]];
    const Legacy25iSport = [
      [cbs,'Legacy ' + subaruLegacyTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iSport/cbs.png', brochureArray[1]],
      [cgm,'Legacy ' + subaruLegacyTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iSport/cgm.png', brochureArray[1]],
      [cwp,'Legacy ' + subaruLegacyTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iSport/cwp.png', brochureArray[1]],
      [ism,'Legacy ' + subaruLegacyTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iSport/ism.png', brochureArray[1]],
      [lbp,'Legacy ' + subaruLegacyTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iSport/lbp.png', brochureArray[1]],
      [vrp,'Legacy ' + subaruLegacyTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iSport/vrp.png', brochureArray[1]]];
    const Legacy25iLimited = [
      [cbs,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/cbs.png', brochureArray[1]],
      [cgm,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/cgm.png', brochureArray[1]],
      [cwp,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/cwp.png', brochureArray[1]],
      [ism,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/ism.png', brochureArray[1]],
      [lbp,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/lbp.png', brochureArray[1]],
      [tbm,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/tbm.png', brochureArray[1]],
      [tm,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/tm.png', brochureArray[1]],
      [vrp,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/vrp.png', brochureArray[1]]];
    const Legacy36RLimited = [
      [cbs,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/cbs.png', brochureArray[1]],
      [cgm,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/cgm.png', brochureArray[1]],
      [cwp,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/cwp.png', brochureArray[1]],
      [ism,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/ism.png', brochureArray[1]],
      [lbp,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/lbp.png', brochureArray[1]],
      [tbm,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/tbm.png', brochureArray[1]],
      [tm,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/tm.png', brochureArray[1]],
      [vrp,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/vrp.png', brochureArray[1]]];

    const subaruCrosstrekTrim = ['2.0i','2.0i Premium','2.0i Limited'];
    const Crosstrek20i = [
      [cbs,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/cbs.png', brochureArray[2]],
      [cwp,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/cwp.png', brochureArray[2]],
      [dgm,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/dgm.png', brochureArray[2]],
      [dk,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/dk.png', brochureArray[2]],
      [hb,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/hb.png', brochureArray[2]],
      [ism,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/ism.png', brochureArray[2]],
      [qbp,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/lbp.png', brochureArray[2]],
      [vrp,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/vrp.png', brochureArray[2]]];
    const Crosstrek20iPremium = [
      [cbs,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/cbs.png', brochureArray[2]],
      [cwp,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/cwp.png', brochureArray[2]],
      [dgm,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/dgm.png', brochureArray[2]],
      [dk,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/dk.png', brochureArray[2]],
      [hb,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/hb.png', brochureArray[2]],
      [ism,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/ism.png', brochureArray[2]],
      [lbp,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/lbp.png', brochureArray[2]],
      [vrp,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/vrp.png', brochureArray[2]]];
    const Crosstrek20iLimited = [
      [cbs,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/cbs.png', brochureArray[2]],
      [cwp,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/cwp.png', brochureArray[2]],
      [dgm,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/dgm.png', brochureArray[2]],
      [dk,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/dk.png', brochureArray[2]],
      [hb,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/hb.png', brochureArray[2]],
      [ism,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/ism.png', brochureArray[2]],
      [qbp,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/qbp.png', brochureArray[2]],
      [vrp,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/vrp.png', brochureArray[2]]];

    const subaruForesterTrim = ['2.5i','2.5i Premium','2.5i Limited','2.5i Touring','2.0XT Premium','2.0XT Touring'];
    const Forester25i = [
      [cbs,'Forester ' + subaruForesterTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25i/cbs.png', brochureArray[3]],
      [cwp,'Forester ' + subaruForesterTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25i/cwp.png', brochureArray[3]],
      [dgm,'Forester ' + subaruForesterTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25i/dgm.png', brochureArray[3]],
      [ism,'Forester ' + subaruForesterTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25i/ism.png', brochureArray[3]],
      [jgm,'Forester ' + subaruForesterTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25i/jgm.png', brochureArray[3]],
      [qbp,'Forester ' + subaruForesterTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25i/qbp.png', brochureArray[3]],
      [vrp,'Forester ' + subaruForesterTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25i/vrp.png', brochureArray[3]]];
    const Forester25iPremium = [
      [cbs,'Forester ' + subaruForesterTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iPremium/cbs.png', brochureArray[3]],
      [cwp,'Forester ' + subaruForesterTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iPremium/cwp.png', brochureArray[3]],
      [dgm,'Forester ' + subaruForesterTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iPremium/dgm.png', brochureArray[3]],
      [ism,'Forester ' + subaruForesterTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iPremium/ism.png', brochureArray[3]],
      [jgm,'Forester ' + subaruForesterTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iPremium/jgm.png', brochureArray[3]],
      [qbp,'Forester ' + subaruForesterTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iPremium/qbp.png', brochureArray[3]],
      [vrp,'Forester ' + subaruForesterTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iPremium/vrp.png', brochureArray[3]]];
    const Forester25iLimited = [
      [cbs,'Forester ' + subaruForesterTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iLimited/cbs.png', brochureArray[3]],
      [cwp,'Forester ' + subaruForesterTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iLimited/cwp.png', brochureArray[3]],
      [dgm,'Forester ' + subaruForesterTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iLimited/dgm.png', brochureArray[3]],
      [ism,'Forester ' + subaruForesterTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iLimited/ism.png', brochureArray[3]],
      [jgm,'Forester ' + subaruForesterTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iLimited/jgm.png', brochureArray[3]],
      [qbp,'Forester ' + subaruForesterTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iLimited/qbp.png', brochureArray[3]],
      [vrp,'Forester ' + subaruForesterTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iLimited/vrp.png', brochureArray[3]]];
    const Forester25iTouring = [
      [cbs,'Forester ' + subaruForesterTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iTouring/cbs.png', brochureArray[3]],
      [cwp,'Forester ' + subaruForesterTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iTouring/cwp.png', brochureArray[3]],
      [dgm,'Forester ' + subaruForesterTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iTouring/dgm.png', brochureArray[3]],
      [ism,'Forester ' + subaruForesterTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iTouring/ism.png', brochureArray[3]],
      [jgm,'Forester ' + subaruForesterTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iTouring/jgm.png', brochureArray[3]],
      [qbp,'Forester ' + subaruForesterTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iTouring/qbp.png', brochureArray[3]],
      [vrp,'Forester ' + subaruForesterTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iTouring/vrp.png', brochureArray[3]]];
    const Forester20XTPremium = [
      [cbs,'Forester ' + subaruForesterTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTPremium/cbs.png', brochureArray[3]],
      [cwp,'Forester ' + subaruForesterTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTPremium/cwp.png', brochureArray[3]],
      [dgm,'Forester ' + subaruForesterTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTPremium/dgm.png', brochureArray[3]],
      [ism,'Forester ' + subaruForesterTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTPremium/ism.png', brochureArray[3]],
      [qbp,'Forester ' + subaruForesterTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTPremium/qbp.png', brochureArray[3]],
      [sbm,'Forester ' + subaruForesterTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTPremium/sbm.png', brochureArray[3]],
      [vrp,'Forester ' + subaruForesterTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTPremium/vrp.png', brochureArray[3]]];
    const Forester20XTTouring = [
      [cbs,'Forester ' + subaruForesterTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTTouring/cbs.png', brochureArray[3]],
      [cwp,'Forester ' + subaruForesterTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTTouring/cwp.png', brochureArray[3]],
      [dgm,'Forester ' + subaruForesterTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTTouring/dgm.png', brochureArray[3]],
      [ism,'Forester ' + subaruForesterTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTTouring/ism.png', brochureArray[3]],
      [qbp,'Forester ' + subaruForesterTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTTouring/qbp.png', brochureArray[3]],
      [sbm,'Forester ' + subaruForesterTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTTouring/sbm.png', brochureArray[3]],
      [vrp,'Forester ' + subaruForesterTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTTouring/vrp.png', brochureArray[3]]];

    const subaruOutbackTrim = ['2.5i','2.5i Premium','2.5i Limited','2.5i Touring','3.6R Limited','3.6R Touring'];
    const Outback25i = [
      [cbs,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/cbs.png', brochureArray[4]],
      [cgm,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/cgm.png', brochureArray[4]],
      [cwp,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/cwp.png', brochureArray[4]],
      [ism,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/ism.png', brochureArray[4]],
      [lbp,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/lbp.png', brochureArray[4]],
      [tbm,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/tbm.png', brochureArray[4]],
      [tm,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/tm.png', brochureArray[4]],
      [vrp,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/vrp.png', brochureArray[4]],
      [wgm,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/wgm.png', brochureArray[4]]];
    const Outback25iPremium = [
      [cbs,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/cbs.png', brochureArray[4]],
      [cgm,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/cgm.png', brochureArray[4]],
      [cwp,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/cwp.png', brochureArray[4]],
      [ism,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/ism.png', brochureArray[4]],
      [lbp,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/lbp.png', brochureArray[4]],
      [tbm,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/tbm.png', brochureArray[4]],
      [tm,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/tm.png', brochureArray[4]],
      [vrp,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/vrp.png', brochureArray[4]],
      [wgm,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/wgm.png', brochureArray[4]]];
    const Outback25iLimited = [
      [cbs,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/cbs.png', brochureArray[4]],
      [cgm,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/cgm.png', brochureArray[4]],
      [cwp,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/cwp.png', brochureArray[4]],
      [ism,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/ism.png', brochureArray[4]],
      [lbp,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/lbp.png', brochureArray[4]],
      [tbm,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/tbm.png', brochureArray[4]],
      [tm,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/tm.png', brochureArray[4]],
      [vrp,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/vrp.png', brochureArray[4]],
      [wgm,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/wgm.png', brochureArray[4]]];
    const Outback25iTouring = [
      [cbs,'Outback ' + subaruOutbackTrim[3], 'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iTouring/cbs.png', brochureArray[4]],
      [cwp,'Outback ' + subaruOutbackTrim[3], 'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iTouring/cwp.png', brochureArray[4]],
      [lbp,'Outback ' + subaruOutbackTrim[3], 'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iTouring/lbp.png', brochureArray[4]],
      [wgm,'Outback ' + subaruOutbackTrim[3], 'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iTouring/wgm.png', brochureArray[4]]];
    const Outback36RLimited = [
      [cbs,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/cbs.png', brochureArray[4]],
      [cgm,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/cgm.png', brochureArray[4]],
      [cwp,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/cwp.png', brochureArray[4]],
      [ism,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/ism.png', brochureArray[4]],
      [lbp,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/lbp.png', brochureArray[4]],
      [tbm,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/tbm.png', brochureArray[4]],
      [tm,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/tm.png', brochureArray[4]],
      [vrp,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/vrp.png', brochureArray[4]],
      [wgm,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/wgm.png', brochureArray[4]]];
    const Outback36RTouring = [
      [cbs,'Outback ' + subaruOutbackTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rTouring/cbs.png', brochureArray[4]],
      [cwp,'Outback ' + subaruOutbackTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rTouring/cwp.png', brochureArray[4]],
      [lbp,'Outback ' + subaruOutbackTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rTouring/lbp.png', brochureArray[4]],
      [wgm,'Outback ' + subaruOutbackTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rTouring/wgm.png', brochureArray[4]]];

    const subaruWRXTrim = ['Base','Premium','Limited','STI','STI Limited'];
    const WRXBase = [
      [cbs,subaruWRXTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/WRX/cbs.png', brochureArray[5]],
      [cwp,'WRX ' + subaruWRXTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/WRX/cwp.png', brochureArray[5]],
      [dgm,'WRX ' + subaruWRXTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/WRX/dgm.png', brochureArray[5]],
      [ism,'WRX ' + subaruWRXTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/WRX/ism.png', brochureArray[5]],
      [lbp,'WRX ' + subaruWRXTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/incpWRX/WRX/lbp.png', brochureArray[5]],
      [pr,'WRX ' + subaruWRXTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/WRX/pr.png', brochureArray[5]],
      [wbp,'WRX ' + subaruWRXTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/WRX/wbpcbs.png', brochureArray[5]]];
    const WRXPremium = [
      [cbs,'WRX ' + subaruWRXTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Premium/cbs.png', brochureArray[5]],
      [cwp,'WRX ' + subaruWRXTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Premium/cwp.png', brochureArray[5]],
      [dgm,'WRX ' + subaruWRXTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Premium/dgm.png', brochureArray[5]],
      [ism,'WRX ' + subaruWRXTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Premium/ism.png', brochureArray[5]],
      [lbp,'WRX ' + subaruWRXTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Premium/lbp.png', brochureArray[5]],
      [pr,'WRX ' + subaruWRXTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Premium/pr.png', brochureArray[5]],
      [wbp,'WRX ' + subaruWRXTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Premium/wbp.png', brochureArray[5]]];
    const WRXLimited = [
      [cbs,'WRX ' + subaruWRXTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Limited/cbs.png', brochureArray[5]],
      [cwp,'WRX ' + subaruWRXTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Limited/cwp.png', brochureArray[5]],
      [dgm,'WRX ' + subaruWRXTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Limited/dgm.png', brochureArray[5]],
      [ism,'WRX ' + subaruWRXTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Limited/ism.png', brochureArray[5]],
      [lbp,'WRX ' + subaruWRXTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Limited/lbp.png', brochureArray[5]],
      [pr,'WRX ' + subaruWRXTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Limited/pr.png', brochureArray[5]],
      [wbp,'WRX ' + subaruWRXTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Limited/wbp.png', brochureArray[5]]];
    const WRXSTI = [
      [cbs,'WRX ' + subaruWRXTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STI/cbs.png', brochureArray[5]],
      [cwp,'WRX ' + subaruWRXTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STI/cwp.png', brochureArray[5]],
      [dgm,'WRX ' + subaruWRXTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STI/dgm.png', brochureArray[5]],
      [ism,'WRX ' + subaruWRXTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STI/ism.png', brochureArray[5]],
      [lbp,'WRX ' + subaruWRXTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STI/lbp.png', brochureArray[5]],
      [pr,'WRX ' + subaruWRXTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STI/pr.png', brochureArray[5]],
      [wbp,'WRX ' + subaruWRXTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STI/wbp.png', brochureArray[5]]];
    const WRXSTILimited = [
      [cbs,'WRX ' + subaruWRXTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STILimited/cbs.png', brochureArray[5]],
      [cwp,'WRX ' + subaruWRXTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STILimited/cwp.png', brochureArray[5]],
      [dgm,'WRX ' + subaruWRXTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STILimited/dgm.png', brochureArray[5]],
      [ism,'WRX ' + subaruWRXTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STILimited/ism.png', brochureArray[5]],
      [lbp,'WRX ' + subaruWRXTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STILimited/lbp.png', brochureArray[5]],
      [pr,'WRX ' + subaruWRXTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STILimited/pr.png', brochureArray[5]],
      [wbp,'WRX ' + subaruWRXTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STILimited/wbp.png', brochureArray[5]]];

    const subaruBRZTrim = ['Premium','Limited'];
    const BRZPremium = [
      [cbs,'BRZ ' + subaruBRZTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Premium/cbs.png', brochureArray[6]],
      [cwp,'BRZ ' + subaruBRZTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Premium/cwp.png', brochureArray[6]],
      [dgm,'BRZ ' + subaruBRZTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Premium/dgm.png', brochureArray[6]],
      [ism,'BRZ ' + subaruBRZTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Premium/ism.png', brochureArray[6]],
      [pr,'BRZ ' + subaruBRZTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Premium/pr.png', brochureArray[6]],
      [wbp,'BRZ ' + subaruBRZTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Premium/wbp.png', brochureArray[6]]];
    const BRZLimited = [
      [cbs,'BRZ ' + subaruBRZTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Limited/cbs.png', brochureArray[6]],
      [cwp,'BRZ ' + subaruBRZTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Limited/cwp.png', brochureArray[6]],
      [dgm,'BRZ ' + subaruBRZTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Limited/dgm.png', brochureArray[6]],
      [ism,'BRZ ' + subaruBRZTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Limited/ism.png', brochureArray[6]],
      [pr,'BRZ ' + subaruBRZTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Limited/pr.png', brochureArray[6]],
      [wbp,'BRZ ' + subaruBRZTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Limited/wbp.png', brochureArray[6]]];
    // Vehicle select functionality. Allows users to navigate through vehicle menu. Model -> Trim -> Color.
    const fullReset = function() {
      // Defaults to Vehicle List
      $('.colorSelectButton').hide();
      $('.vehicleSelectButton').hide();
      $('.trimSelectButton').hide();
      document.querySelector('#vehicleMenuHeader').innerHTML = `2017 Vehicles`;
      for (let i = 0; i < subaruVehicleArray.length; i++) {
        document.querySelector('#vehicleSelection').innerHTML +=
        `<a href="#" class="vehicleSelectButton" id="${subaruVehicleArray[i]}">${subaruVehicleArray[i]}</a>`
      }
      // Displays trims for selected vehicle
      $('.vehicleSelectButton').click(function(e) {
        e.preventDefault();
        let selectedVehicle = this.id;
        let trimArraySelector = 'subaru' + selectedVehicle + 'Trim';
        $('.vehicleSelectButton').hide();
        $('.trimSelectButton').hide();
        document.querySelector('#vehicleMenuHeader').innerHTML = `2017 ${selectedVehicle} Trims`;
        for (let i = 0; i < eval(trimArraySelector).length; i++) {
            document.querySelector('#vehicleSelection').innerHTML +=
            `<a href="#" class="trimSelectButton" id="${selectedVehicle + eval(trimArraySelector)[i].replace(/\s+/, "")}">${selectedVehicle + ' ' + eval(trimArraySelector)[i]}</a>`
        }
        // Displays colors for selected vehicle trim
        $('.trimSelectButton').click(function(e) {
          e.preventDefault();
          $('.vehicleSelectButton').hide();
          $('.trimSelectButton').hide();
          let selectedTrim = this.innerHTML;
          document.querySelector('#vehicleMenuHeader').innerHTML = `${selectedTrim} Colors`;
          let colorArraySelect = selectedTrim.replace(/-|\.|\s+/g, '');
          console.log(colorArraySelect);

          for (let i = 0; i < eval(colorArraySelect).length; i++) {
              document.querySelector('#vehicleSelection').innerHTML +=
              `<a href="#" class="colorSelectButton" id="${eval(colorArraySelect)[i][0].replace(/\s+/, "")}" data-image="${eval(colorArraySelect)[i][2].replace(/\s+/, "")}" data-brochure="${eval(colorArraySelect)[i][3].replace(/\s+/, "")}">${eval(colorArraySelect)[i][0]}</a>`
          }
          // Embeds selected vehicle information, image, brochure link
          $('.colorSelectButton').click(function(e) {
            e.preventDefault();
            let selectedColor = this.dataset.image;
            document.querySelector('#imgPreview').innerHTML = `<img src="${selectedColor}" style="width: 325px;padding: 0;margin: 0;border: 0;">`
            document.querySelector('#vehiclePreview').innerHTML = selectedTrim;
            document.querySelector('#vehicleRef1').innerHTML = selectedTrim;
            document.querySelector('#vehicleRef2').innerHTML = selectedVehicle;
            document.querySelector('#brochureLink').href = this.dataset.brochure;

          });

        });
      });
    }
    // Builds vehicle select menu on click. Defaults to model selection.
    fullReset();
    // Reset button will default to model selection on click
    $('#reset').click(function() {
      fullReset();
    });

    const orCheck = function() {
      if (document.getElementById('vehicleFinPrice').value !== '' && document.getElementById('leasePrice').value !== '') {
        document.querySelector('#orDisplay').innerHTML = `<h4 style="text-align: right;margin: 0;border: 0;padding: 5px 40px 0 0;line-height: 1;font-family: Arial, sans-serif;font-weight: 500;color: #ffffff;font-size: 18px;">or</h4>`;
      } else {
        document.querySelector('#orDisplay').innerHTML = '';
      }

    }

    // Transmission selection radio buttons rewrite contents of transmission display h5
    $('.transmissionSelect').click(function(){
      document.querySelector('#transmissionDisplay').innerHTML = `<strong>Transmission:</strong> ${this.value}`;
    });
    // Transmission selection radio buttons rewrite contents of transmission display h5
    $('.statusSelect').click(function(){
      document.querySelector('#statusDisplay').innerHTML = `${this.value}`;
    });
    // Writes input CUSTOMER NAME to template
    $('#customerName').on('input',function(e){
    document.querySelector('#customerNameDisplay').innerHTML = this.value;
   });
   // Writes input stock number to template
   $('#stock').on('input',function(e){
   document.querySelector('#stockDisplay').innerHTML ='Stock Number: ' + this.value;
  });
    // Writes input vehicle finance price to template
    $('#vehicleFinPrice').on('input',function(e){
      if (document.getElementById('vehicleFinPrice').value !== '') {
        document.querySelector('#finPrice').innerHTML = `<h1 style="text-align: right;margin: 0;border: 0;padding: 0 40px 0 0;line-height: 1;font-family: Arial, sans-serif;font-weight: 700;color: #ffffff;" id="">$${this.value}</h1>`;

      } else {
          document.querySelector('#finPrice').innerHTML = '';
        }
        orCheck();
   });
   // Writes input vehicle price expiration to template
     // Defaults to and of current month
       var ld = Date.today().clearTime().moveToLastDayOfMonth();
       var lastday = ld.toString("MM/dd/yyyy");
       console.log(lastday);
       document.querySelector('#availableUntilDisplay').innerHTML = lastday;
    // Overwrites default to user input
   $('#priceGoodUntil').on('input',function(e){
   if (document.getElementById('priceGoodUntil').value !== "") {
     document.querySelector('#availableUntilDisplay').innerHTML = this.value;
   } else {
     document.querySelector('#availableUntilDisplay').innerHTML = lastday;
   }
  });


  // Writes input vehicle price expiration to template
  $('#leasePrice').on('input',function(e){
    if (document.getElementById('leasePrice').value !== '') {
      document.querySelector('#leasePriceDisplay').innerHTML = `<h1 style="text-align: right;margin: 0;border: 0;padding: 0 40px 0 0;line-height: 1;font-family: Arial, sans-serif;font-weight: 700;color: #ffffff;" id="">$${this.value}/mo</h1>`;

    } else {
        document.querySelector('#leasePriceDisplay').innerHTML = '';
      }
      orCheck();
  });
  // Writes input vehicle price expiration to template
  $('#term').on('input',function(e){
    if (document.getElementById('term').value !== '') {
      document.querySelector('#termDisplay').innerHTML = `<h4 style="text-align: right;margin: 0;border: 0;padding: 5px 40px 0 0;line-height: 1;font-family: Arial, sans-serif;font-weight: 500;color: #ffffff;font-size: 18px;">for ${this.value} months</h4>`;
    } else {
        document.querySelector('#termDisplay').innerHTML = '';
      }
  });


  // Writes input vehicle price expiration to template
  $('#moneyDown').on('input',function(e){
    if (document.getElementById('moneyDown').value !== '') {
      document.querySelector('#moneyDownDisplay').innerHTML = `<h4 style="text-align: right;margin: 0;border: 0;padding: 5px 40px 0 0;line-height: 1;font-family: Arial, sans-serif;font-weight: 500;color: #ffffff;font-size: 18px;">$${this.value} down</h4>`;
    } else {
      document.querySelector('#moneyDownDisplay').innerHTML = '';
    }
  });
  // Writes input vehicle price expiration to template
  $('#mileage').on('input',function(e){
    if (document.getElementById('mileage').value !== '') {
      document.querySelector('#mileageDisplay').innerHTML = `<h4 style="text-align: right;margin: 0;border: 0;padding: 5px 40px 0 0;line-height: 1;font-family: Arial, sans-serif;font-weight: 500;color: #ffffff;font-size: 14px;">${this.value} miles per year</h4>`;
    } else {
        document.querySelector('#mileageDisplay').innerHTML = '';
      }
  });



  for (let i = 0; i < accessoriesArray.length; i++) {
    document.querySelector('#accessories').innerHTML +=
    `<input type="checkbox" name="${accessoriesArray[i]}" class="accessoryOptionSelect" value="${accessoriesArray[i]}" id="${accessoriesArray[i].replace(/-|\&amp;|\&|\.|\s+/g, '')}"><label for="${accessoriesArray[i].replace(/-|\&amp;|\&|\.|\s+/g, '')}">${accessoriesArray[i]}</label>`;
  }

  for (let i = 0; i < packagesArray.length; i++) {
    document.querySelector('#packages').innerHTML +=
    `<input type="checkbox" name="${packagesArray[i]}" class="packageOptionSelect" value="${packagesArray[i]}" id="${packagesArray[i].replace(/-|\&amp;|\&|\.|\s+/g, '')}">
      <label for="${packagesArray[i].replace(/-|\&amp;|\&|\.|\s+/g, '')}" id="${packagesArray[i]}">${packagesArray[i]}</label>`;
  }

  // Accessories display works via on click (adds and removes options)
  $(function() {
    $('.accessoryOptionSelect').click(function() {

        let tempID = this.value.replace(/-|\&amp;|\&|\.|\s+/g, '');
        if (this.checked === true) {
          // Writes The Accessory Value of Checked item to Page
          console.log(this.value);
          $('#accessoriesDisplay').append(`<li id="accessory${tempID}" style="color: #ffffff;text-align:left;margin: 0 0 0 30px;font-size:14px;">${this.value}</li>`);
        } else {
          // Removes Selected Accessory Item from page
            $('#accessory' + tempID).remove();
        }
        if (document.getElementById('accessoriesDisplay').innerHTML.replace(/-|\&amp;|\&|\.|\s+/g, '') === '') {
          document.querySelector('#accessoriesDisplayHeading').innerHTML = '';
        } else {
          document.querySelector('#accessoriesDisplayHeading').innerHTML = `<h3 style="text-align:left;color:#fafafa;font-size:16px">Accessories:</h3>`;
        }
    });
  });


  $('.sectionStyle').hide();
  $('#generalSection').show();

  $('.navLink').click(function(e) {
    e.preventDefault();
    $('.sectionStyle').hide();
    $('#' + this.dataset.section).show();
  });
  // Package display works via on click (adds and removes options)
  $(function() {
    $('.packageOptionSelect').click(function() {
      $('#packagesFiller').html(``);
        let tempID = this.value.replace(/-|\&amp;|\&|\.|\s+/g, '');
        if (this.checked === true) {
          // Writes The Accessory Value of Checked item to Page

          console.log(tempID);
          $('#packagesDisplay').append(`<span id="packagesDisplay${tempID}">${this.value}<br></span>`);
        } else {
          // Removes Selected Accessory Item from page
            $('#packagesDisplay' + tempID).remove();
        }
        if (document.getElementById('packagesDisplay').innerHTML === '') {
          document.querySelector('#packagesDisplayHeading').innerHTML = '';
        } else {
          document.querySelector('#packagesDisplayHeading').innerHTML = `<strong>With:</strong><br>`;
        }
    });
  });




});
