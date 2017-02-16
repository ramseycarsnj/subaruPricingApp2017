$(document).ready(function() {
  const accessoriesArray = ['option1','option2','option3'];
  const packagesArray = ['package1','package2','package3'];

  let vehicleController = 'Default';
  console.log(vehicleController);

    // List of Subaru Colors Available
    const cwp = 'Crystal White Pearl';
    const ism = 'Ice Silver Metallic';
    const cgm = 'Carbide Grey Metallic';
    const cbs = 'Crystal Black Silica';
    const dgm = 'Dark Grey Metallic';
    const sbm = 'Sepia Bronze Metallic';
    const qbp = 'Quartz Blue Pearl';
    const wbp = 'WR Blue Pearl';
    const lbp = 'Lapis Blue Pearl';
    const hb = 'Hyper Blue';
    const lbm = 'Lapis Blue Metallic';
    const ibp = 'Island Blue Pearl';
    const pr = 'Pure Red';
    const vrp = 'Veetian Red Pearl';
    const lrp = 'Lithium Red Pearl';
    const dk = 'Desert Khaki';
    const jgm = 'Jasmine Green Metallic';
    const wgm = 'Wilderness Green Metallic';
    const Imprese20i5Door = [];



    // Vehicles Array -------------------------------------------------------------------------
    const subaruVehicleArray = ['Impreza','Legacy','Crosstrek','Forester','Outback','WRX','BRZ'];

    // Trim Arrays ----------------------------------------------------------------------------
    const subaruImprezaTrim = ['2.0i Sedan','2.0i 5-Door','2.0i Premium Sedan','2.0i Premium 5-Door','2.0i Sport Sedan','2.0i Sport 5-Door','2.0i Limited Sedan','2.0i Limited 5-Door'];
    const subaruLegacyTrim = ['2.5i','2.5i Premium','2.5i Sport','2.5i Limited','3.6R Limited'];
    const subaruCrosstrekTrim = ['2.0i','2.0i Premium','2.0i Limited'];
    const subaruForesterTrim = ['2.5i','2.5i Premium','2.5i Limited','2.5i Touring','2.0XT Premium','2.0XT Touring'];
    const subaruOutbackTrim = ['2.5i','2.5i Premium','2.5i Limited','2.5i Touring','3.6R Limited','3.6R Touring'];
    const subaruWRXTrim = ['WRX','WRX Premium','WRX Limited','WRX STI','WRX STI Limited'];
    const subaruBRZTrim = ['Premium','Limited'];

    // Vehicle select functionality. Allows users to navigate through vehicle menu. Model -> Trim -> Color.
    const fullReset = function() {
      // Defaults to Vehicle List
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
            `<a href="#" class="trimSelectButton" id="${selectedVehicle + eval(trimArraySelector)[i].replace(/\s+/, "") }">${selectedVehicle + ' ' + eval(trimArraySelector)[i]}</a>`
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
