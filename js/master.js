$(document).ready(function() {
  const accessoriesArray = ['option1','option2','option3'];
  const packagesArray = ['package1','package2','package3'];

  let vehicleController = 'Default';
  console.log(vehicleController);


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
      const Impreza20iSedan = [
        [cbs,'Impreza ' + subaruImprezaTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSedan/cbs.png'],
        [cgm,'Impreza ' + subaruImprezaTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSedan/cgm.png'],
        [cwp,'Impreza ' + subaruImprezaTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSedan/cwp.png'],
        [lbp,'Impreza ' + subaruImprezaTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSedan/lbp.png'],
        [ism,'Impreza ' + subaruImprezaTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSedan/ism.png'],
        [ibp,'Impreza ' + subaruImprezaTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSedan/ibp.png'],
        [vrp,'Impreza ' + subaruImprezaTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSedan/vrp.png']];
      const Impreza20i5Door = [
        [cbs,'Impreza ' + subaruImprezaTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20i5door/cbs.png'],
        [cgm,'Impreza ' + subaruImprezaTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20i5door/cgm.png'],
        [cwp,'Impreza ' + subaruImprezaTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20i5door/cwp.png'],
        [lbp,'Impreza ' + subaruImprezaTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20i5door/lbp.png'],
        [ism,'Impreza ' + subaruImprezaTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20i5door/ism.png'],
        [ibp,'Impreza ' + subaruImprezaTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20i5door/ibp.png'],
        [vrp,'Impreza ' + subaruImprezaTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20i5door/vrp.png']];
      const Impreza20iPremiumSedan = [
        [cbs,'Impreza ' + subaruImprezaTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremiumSedan/cbs.png'],
        [cgm,'Impreza ' + subaruImprezaTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremiumSedan/cgm.png'],
        [cwp,'Impreza ' + subaruImprezaTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremiumSedan/cwp.png'],
        [lbp,'Impreza ' + subaruImprezaTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremiumSedan/lbp.png'],
        [ism,'Impreza ' + subaruImprezaTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremiumSedan/ism.png'],
        [ibp,'Impreza ' + subaruImprezaTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremiumSedan/ibp.png'],
        [vrp,'Impreza ' + subaruImprezaTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremiumSedan/vrp.png']];
      const Impreza20iPremium5Door = [
        [cbs,'Impreza ' + subaruImprezaTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremium5door/cbs.png'],
        [cgm,'Impreza ' + subaruImprezaTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremium5door/cgm.png'],
        [cwp,'Impreza ' + subaruImprezaTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremium5door/cwp.png'],
        [lbp,'Impreza ' + subaruImprezaTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremium5doorlbp/.png'],
        [ism,'Impreza ' + subaruImprezaTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremium5door/ism.png'],
        [ibp,'Impreza ' + subaruImprezaTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremium5door/ibp.png'],
        [vrp,'Impreza ' + subaruImprezaTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iPremium5door/vrp.png']];
      const Impreza20iSportSedan = [
        [cbs,'Impreza ' + subaruImprezaTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSportSedan/cbs.png'],
        [cgm,'Impreza ' + subaruImprezaTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSportSedan/cgm.png'],
        [cwp,'Impreza ' + subaruImprezaTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSportSedan/cwp.png'],
        [lbp,'Impreza ' + subaruImprezaTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSportSedan/lbp.png'],
        [ism,'Impreza ' + subaruImprezaTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSportSedan/ism.png'],
        [ibp,'Impreza ' + subaruImprezaTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSportSedan/ibp.png'],
        [lrp,'Impreza ' + subaruImprezaTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSportSedan/vrp.png']];
      const Impreza20iSport5Door = [
        [cbs,'Impreza ' + subaruImprezaTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSport5door/cbs.png'],
        [cgm,'Impreza ' + subaruImprezaTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSport5door/cgm.png'],
        [cwp,'Impreza ' + subaruImprezaTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSport5door/cwp.png'],
        [lbp,'Impreza ' + subaruImprezaTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSport5door/lbp.png'],
        [ism,'Impreza ' + subaruImprezaTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSport5door/ism.png'],
        [ibp,'Impreza ' + subaruImprezaTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSport5door/ibp.png'],
        [lrp,'Impreza ' + subaruImprezaTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iSport5door/vrp.png']];
      const Impreza20iLimitedSedan = [
        [cbs,'Impreza ' + subaruImprezaTrim[6],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimitedSedan/cbs.png'],
        [cgm,'Impreza ' + subaruImprezaTrim[6],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimitedSedan/cgm.png'],
        [cwp,'Impreza ' + subaruImprezaTrim[6],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimitedSedan/cwp.png'],
        [lbp,'Impreza ' + subaruImprezaTrim[6],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimitedSedan/lbp.png'],
        [ism,'Impreza ' + subaruImprezaTrim[6],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimitedSedan/ism.png'],
        [ibp,'Impreza ' + subaruImprezaTrim[6],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimitedSedan/ibp.png'],
        [vrp,'Impreza ' + subaruImprezaTrim[6],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimitedSedan/vrp.png']];
      const Impreza20iLimited5Door = [
        [cbs,'Impreza ' + subaruImprezaTrim[7],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimited5door/cbs.png'],
        [cgm,'Impreza ' + subaruImprezaTrim[7],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimited5door/cgm.png'],
        [cwp,'Impreza ' + subaruImprezaTrim[7],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimited5door/cwp.png'],
        [lbp,'Impreza ' + subaruImprezaTrim[7],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimited5door/lbp.png'],
        [ism,'Impreza ' + subaruImprezaTrim[7],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimited5door/ism.png'],
        [ibp,'Impreza ' + subaruImprezaTrim[7],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimited5door/ibp.png'],
        [vrp,'Impreza ' + subaruImprezaTrim[7],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Impreza/20iLimited5door/vrp.png']];

      const subaruLegacyTrim = ['2.5i','2.5i Premium','2.5i Sport','2.5i Limited','3.6R Limited'];
      const Legacy25i = [
        [cbs,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/cbs.png'],
        [cgm,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/cgm.png'],
        [cwp,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/cwp.png'],
        [ism,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/ism.png'],
        [lbp,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/lbp.png'],
        [tbm,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/tbm.png'],
        [tm,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/tm.png'],
        [vrp,'Legacy ' + subaruLegacyTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25i/vrp.png']];
      const Legacy25iPremium = [
        [cbs,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/cbs.png'],
        [cgm,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/cgm.png'],
        [cwp,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/cwp.png'],
        [ism,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/ism.png'],
        [lbp,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/lbp.png'],
        [tbm,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/tbm.png'],
        [tm,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/tm.png'],
        [vrp,'Legacy ' + subaruLegacyTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iPremium/vrp.png']];
      const Legacy25iSport = [
        [cbs,'Legacy ' + subaruLegacyTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iSport/cbs.png'],
        [cgm,'Legacy ' + subaruLegacyTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iSport/cgm.png'],
        [cwp,'Legacy ' + subaruLegacyTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iSport/cwp.png'],
        [ism,'Legacy ' + subaruLegacyTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iSport/ism.png'],
        [lbp,'Legacy ' + subaruLegacyTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iSport/lbp.png'],
        [vrp,'Legacy ' + subaruLegacyTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iSport/tbm.png']];
      const Legacy25iLimited = [
        [cbs,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/cbs.png'],
        [cgm,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/cgm.png'],
        [cwp,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/cwp.png'],
        [ism,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/ism.png'],
        [lbp,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/lbp.png'],
        [tbm,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/tbm.png'],
        [tm,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/tm.png'],
        [vrp,'Legacy ' + subaruLegacyTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/25iLimited/vrp.png']];
      const Legacy36RLimited = [
        [cbs,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/cbs.png'],
        [cgm,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/cgm.png'],
        [cwp,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/cwp.png'],
        [ism,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/ism.png'],
        [lbp,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/lbp.png'],
        [tbm,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/tbm.png'],
        [tm,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/tm.png'],
        [vrp,'Legacy ' + subaruLegacyTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Legacy/36rLimited/vrp.png']];

      const subaruCrosstrekTrim = ['2.0i','2.0i Premium','2.0i Limited'];
      const Crosstrek20i = [
        [cbs,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/cbs.png'],
        [cwp,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/cwp.png'],
        [dgm,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/dgm.png'],
        [dk,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/dk.png'],
        [hb,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/hb.png'],
        [ism,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/ism.png'],
        [qbp,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/lbp.png'],
        [vrp,'Crosstrek ' + subaruCrosstrekTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20i/vrp.png']];
      const Crosstrek20iPremium = [
        [cbs,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/cbs.png'],
        [cwp,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/cwp.png'],
        [dgm,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/dgm.png'],
        [dk,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/dk.png'],
        [hb,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/hb.png'],
        [ism,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/ism.png'],
        [lbp,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/lbp.png'],
        [vrp,'Crosstrek ' + subaruCrosstrekTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iPremium/vrp.png']];
      const Crosstrek20iLimited = [
        [cbs,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/cbs.png'],
        [cwp,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/cwp.png'],
        [dgm,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/dgm.png'],
        [dk,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/dk.png'],
        [hb,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/hb.png'],
        [ism,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/ism.png'],
        [lbp,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/lbp.png'],
        [vrp,'Crosstrek ' + subaruCrosstrekTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Crosstrek/20iLimited/vrp.png']];

      const subaruForesterTrim = ['2.5i','2.5i Premium','2.5i Limited','2.5i Touring','2.0XT Premium','2.0XT Touring'];
      const Forester25i = [
        [cbs,'Forester ' + subaruForesterTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25i/cbs.png'],
        [cwp,'Forester ' + subaruForesterTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25i/cwp.png'],
        [dgm,'Forester ' + subaruForesterTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25i/dgm.png'],
        [ism,'Forester ' + subaruForesterTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25i/ism.png'],
        [jgm,'Forester ' + subaruForesterTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25i/jgm.png'],
        [qbp,'Forester ' + subaruForesterTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25i/qbp.png'],
        [vrp,'Forester ' + subaruForesterTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25i/vrp.png']];
      const Forester25iPremium = [
        [cbs,'Forester ' + subaruForesterTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iPremium/cbs.png'],
        [cwp,'Forester ' + subaruForesterTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iPremium/cwp.png'],
        [dgm,'Forester ' + subaruForesterTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iPremium/dgm.png'],
        [ism,'Forester ' + subaruForesterTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iPremium/ism.png'],
        [jgm,'Forester ' + subaruForesterTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iPremium/jgm.png'],
        [qbp,'Forester ' + subaruForesterTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iPremium/qbp.png'],
        [vrp,'Forester ' + subaruForesterTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iPremium/vrp.png']];
      const Forester25iLimited = [
        [cbs,'Forester ' + subaruForesterTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iLimited/cbs.png'],
        [cwp,'Forester ' + subaruForesterTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iLimited/cwp.png'],
        [dgm,'Forester ' + subaruForesterTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iLimited/dgm.png'],
        [ism,'Forester ' + subaruForesterTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iLimited/ism.png'],
        [jgm,'Forester ' + subaruForesterTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iLimited/jgm.png'],
        [qbp,'Forester ' + subaruForesterTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iLimited/qbp.png'],
        [vrp,'Forester ' + subaruForesterTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iLimited/vrp.png']];
      const Forester25iTouring = [
        [cbs,'Forester ' + subaruForesterTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iTouring/cbs.png'],
        [cwp,'Forester ' + subaruForesterTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iTouring/cwp.png'],
        [dgm,'Forester ' + subaruForesterTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iTouring/dgm.png'],
        [ism,'Forester ' + subaruForesterTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iTouring/ism.png'],
        [jgm,'Forester ' + subaruForesterTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iTouring/jgm.png'],
        [qbp,'Forester ' + subaruForesterTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iTouring/qbp.png'],
        [vrp,'Forester ' + subaruForesterTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/25iTouring/vrp.png']];
      const Forester20XTPremium = [
        [cbs,'Forester ' + subaruForesterTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTPremium/cbs.png'],
        [cwp,'Forester ' + subaruForesterTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTPremium/cwp.png'],
        [dgm,'Forester ' + subaruForesterTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTPremium/dgm.png'],
        [ism,'Forester ' + subaruForesterTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTPremium/ism.png'],
        [qbp,'Forester ' + subaruForesterTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTPremium/qbp.png'],
        [vrp,'Forester ' + subaruForesterTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTPremium/vrp.png']];
      const Forester20XTTouring = [
        [cbs,'Forester ' + subaruForesterTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTTouring/cbs.png'],
        [cwp,'Forester ' + subaruForesterTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTTouring/cwp.png'],
        [dgm,'Forester ' + subaruForesterTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTTouring/dgm.png'],
        [ism,'Forester ' + subaruForesterTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTTouring/ism.png'],
        [jgm,'Forester ' + subaruForesterTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTTouring/jgm.png'],
        [qbp,'Forester ' + subaruForesterTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTTouring/qbp.png'],
        [vrp,'Forester ' + subaruForesterTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Forester/20XTTouring/vrp.png']];

      const subaruOutbackTrim = ['2.5i','2.5i Premium','2.5i Limited','2.5i Touring','3.6R Limited','3.6R Touring'];
      const Outback25i = [
        [cbs,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/cbs.png'],
        [cgm,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/cwp.png'],
        [cwp,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/lbp.png'],
        [ism,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/ism.png'],
        [lbp,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/lbp.png'],
        [tbm,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/tbm.png'],
        [tm,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/tm.png'],
        [vrp,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/vrp.png'],
        [wgm,'Outback ' + subaruOutbackTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25i/wgm.png']];
      const Outback25iPremium = [
        [cbs,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/cbs.png'],
        [cgm,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/cwp.png'],
        [cwp,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/lbp.png'],
        [ism,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/ism.png'],
        [lbp,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/lbp.png'],
        [tbm,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/tbm.png'],
        [tm,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/tm.png'],
        [vrp,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/vrp.png'],
        [wgm,'Outback ' + subaruOutbackTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iPremium/wgm.png']];
      const Outback25iLimited = [
        [cbs,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/cbs.png'],
        [cgm,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/cwp.png'],
        [cwp,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/lbp.png'],
        [ism,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/ism.png'],
        [lbp,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/lbp.png'],
        [tbm,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/tbm.png'],
        [tm,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/tm.png'],
        [vrp,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/vrp.png'],
        [wgm,'Outback ' + subaruOutbackTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iLimited/wgm.png']];
      const Outback25iTouring = [
        [cbs,'Outback ' + subaruOutbackTrim[3], 'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iTouring/cbs.png'],
        [cwp,'Outback ' + subaruOutbackTrim[3], 'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iTouring/cwp.png'],
        [lbp,'Outback ' + subaruOutbackTrim[3], 'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iTouring/lbp.png'],
        [wgm,'Outback ' + subaruOutbackTrim[3], 'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/25iTouring/wgm.png']];
      const Outback36RLimited = [
        [cbs,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/cbs.png'],
        [cgm,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/cwp.png'],
        [cwp,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/lbp.png'],
        [ism,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/ism.png'],
        [lbp,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/lbp.png'],
        [tbm,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/tbm.png'],
        [tm,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/tm.png'],
        [vrp,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/vrp.png'],
        [wgm,'Outback ' + subaruOutbackTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rLimited/wgm.png']];
      const Outback36RTouring = [
        [cbs,'Outback ' + subaruOutbackTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rTouring/cbs.png'],
        [cwp,'Outback ' + subaruOutbackTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rTouring/cwp.png'],
        [lbp,'Outback ' + subaruOutbackTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rTouring/lbp.png'],
        [wgm,'Outback ' + subaruOutbackTrim[5],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/Outback/36rTouring/wgm.png']];

      const subaruWRXTrim = ['Base','Premium','Limited','STI','STI Limited'];
      const WRXBase = [
        [cbs,subaruWRXTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/WRX/cbs.png'],
        [cwp,'WRX ' + subaruWRXTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/WRX/cwp.png'],
        [dgm,'WRX ' + subaruWRXTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/WRX/dgm.png'],
        [ism,'WRX ' + subaruWRXTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/WRX/ism.png'],
        [lbp,'WRX ' + subaruWRXTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/incpWRX/WRX/lbp.png'],
        [pr,'WRX ' + subaruWRXTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/WRX/pr.png'],
        [wbp,'WRX ' + subaruWRXTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/WRX/wbpcbs.png']];
      const WRXPremium = [
        [cbs,'WRX ' + subaruWRXTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Premium/cbs.png'],
        [cwp,'WRX ' + subaruWRXTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Premium/cwp.png'],
        [dgm,'WRX ' + subaruWRXTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Premium/dgm.png'],
        [ism,'WRX ' + subaruWRXTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Premium/ism.png'],
        [lbp,'WRX ' + subaruWRXTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Premium/lbp.png'],
        [pr,'WRX ' + subaruWRXTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Premium/pr.png'],
        [wbp,'WRX ' + subaruWRXTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Premium/wbp.png']];
      const WRXLimited = [
        [cbs,'WRX ' + subaruWRXTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Limited/cbs.png'],
        [cwp,'WRX ' + subaruWRXTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Limited/cwp.png'],
        [dgm,'WRX ' + subaruWRXTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Limited/dgm.png'],
        [ism,'WRX ' + subaruWRXTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Limited/ism.png'],
        [lbp,'WRX ' + subaruWRXTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Limited/lbp.png'],
        [pr,'WRX ' + subaruWRXTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Limited/pr.png'],
        [wbp,'WRX ' + subaruWRXTrim[2],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/Limited/wbp.png']];
      const WRXSTI = [
        [cbs,'WRX ' + subaruWRXTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STI/cbs.png'],
        [cwp,'WRX ' + subaruWRXTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STI/cwp.png'],
        [dgm,'WRX ' + subaruWRXTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STI/dgm.png'],
        [ism,'WRX ' + subaruWRXTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STI/ism.png'],
        [lbp,'WRX ' + subaruWRXTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STI/lbp.png'],
        [pr,'WRX ' + subaruWRXTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STI/pr.png'],
        [wbp,'WRX ' + subaruWRXTrim[3],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STI/wbp.png']];
      const WRXSTILimited = [
        [cbs,'WRX ' + subaruWRXTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STILimited/cbs.png'],
        [cwp,'WRX ' + subaruWRXTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STILimited/cwp.png'],
        [dgm,'WRX ' + subaruWRXTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STILimited/dgm.png'],
        [ism,'WRX ' + subaruWRXTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STILimited/ism.png'],
        [lbp,'WRX ' + subaruWRXTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STILimited/lbp.png'],
        [pr,'WRX ' + subaruWRXTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STILimited/pr.png'],
        [wbp,'WRX ' + subaruWRXTrim[4],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/WRX/STILimited/wbp.png']];

      const subaruBRZTrim = ['Premium','Limited'];
      const BRZPremium = [
        [cbs,'BRZ ' + subaruBRZTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Premium/cbs.png'],
        [cwp,'BRZ ' + subaruBRZTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Premium/cwp.png'],
        [dgm,'BRZ ' + subaruBRZTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Premium/dgm.png'],
        [ism,'BRZ ' + subaruBRZTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Premium/ism.png'],
        [pr,'BRZ ' + subaruBRZTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Premium/pr.png'],
        [wbp,'BRZ ' + subaruBRZTrim[0],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Premium/wbp.png']];
      const BRZLimited = [
        [cbs,'BRZ ' + subaruBRZTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Limited/cbs.png'],
        [cwp,'BRZ ' + subaruBRZTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Limited/cwp.png'],
        [dgm,'BRZ ' + subaruBRZTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Limited/dgm.png'],
        [ism,'BRZ ' + subaruBRZTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Limited/ism.png'],
        [pr,'BRZ ' + subaruBRZTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Limited/pr.png'],
        [wbp,'BRZ ' + subaruBRZTrim[1],'http://ramseycarsnj.github.io/subaruPricingApp2017/inc/BRZ/Limited/wbp.png']];

      console.log(Outback25i[0]);

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
              `<a href="#" class="colorSelectButton" id="${eval(colorArraySelect)[i][0].replace(/\s+/, "")}" data-vehicleName="${eval(colorArraySelect)[i][1].replace(/\s+/, "")}" data-image="${eval(colorArraySelect)[i][2].replace(/\s+/, "")}">${eval(colorArraySelect)[i][0]}</a>`
          }

        });
      });
    }

    fullReset();

    $('#reset').click(function() {
      fullReset();
    });


  for (let i = 0; i < accessoriesArray.length; i++) {
    document.querySelector('#accessories').innerHTML +=
    `<input type="checkbox" name="${accessoriesArray[i]}" value="" id="${accessoriesArray[i]}"><label for="${accessoriesArray[i]}">${accessoriesArray[i]}</label>`;
  }

  for (let i = 0; i < packagesArray.length; i++) {
    document.querySelector('#packages').innerHTML +=
    `<input type="checkbox" name="${packagesArray[i]}" value="" id="${packagesArray[i]}"><label for="${packagesArray[i]}">${packagesArray[i]}</label>`;
  }



});
