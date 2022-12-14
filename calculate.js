document.addEventListener('alpine:init', () => {

    Alpine.data('calculate', () => ({
        //------------------NEW HOME BUILD----------------
        homeInput: '',
        homeCheckbox: false,
        homeRange: '',
        homeRadio: '',
        homeResult: '0',

        homeCalc() {
            //input value limit
            if (this.homeInput > 100000) {
                this.homeInput = 100000;
            }

            // plus 10 percent
            this.homeResult = this.homeInput + (10 / 100 * this.homeInput);

            //check checkbox
            if (this.homeCheckbox == true) {
                this.homeResult = this.homeResult * 220;
            } else {
                this.homeResult = this.homeResult * 210;
            }

            //check range slider
            if (this.homeRange > 2) {
                this.homeResult = this.homeResult + (this.homeInput * 10)
            }

            //chack level
            if (this.homeRadio == 'Fair') {
                this.homeResult = this.homeResult - (10 / 100 * this.homeResult);
            }
            if (this.homeRadio == 'Best') {
                this.homeResult = this.homeResult + (10 / 100 * this.homeResult);
            }

            //result to local string
            this.homeResult = this.homeResult.toLocaleString("en-US");
        },

        //------------------BATHROOM REMODEL----------------
        bathroomInput: '',
        bathroomSelector: '',
        bathroomCheckbox: false,
        bathroomRadio: '',
        bathroomOpen: false,
        bathroomResult: '0',

        bathroomCalc() {
            if (this.bathroomInput > 100000) {
                this.bathroomInput = 100000;
            }

            this.bathroomResult = this.bathroomInput + (25 / 100 * this.bathroomInput);

            if (this.bathroomSelector == 'Bathroom Remodel') {
                this.bathroomResult = this.bathroomResult * 100;
            }
            if (this.bathroomSelector == 'Normal Shower') {
                this.bathroomResult = this.bathroomResult * 60;
            }

            if (this.bathroomCheckbox == true) {
                this.bathroomResult = this.bathroomResult + ((this.bathroomInput + (25 / 100 * this.bathroomInput)) * 2);
            }

            if (this.bathroomRadio == 'Fair') {
                this.bathroomResult = this.bathroomResult - (10 / 100 * this.bathroomResult);
            }
            if (this.bathroomRadio == 'Best') {
                this.bathroomResult = this.bathroomResult + (10 / 100 * this.bathroomResult);
            }

            //result to local string
            this.bathroomResult = this.bathroomResult.toLocaleString("en-US");
        },

        //------------------KITCHEN REMODEL----------------
        kitchenInput: '',
        kitchenSelector: '',
        kitchenCheckbox: false,
        kitchenRadio: '',
        kitchenOpen: false,
        kitchenResult: '0',

        kitchenCalc() {
            if (this.kitchenInput > 100000) {
                this.kitchenInput = 100000;
            }

            this.kitchenResult = this.kitchenInput + (10 / 100 * this.kitchenInput);

            if (this.kitchenSelector == 'Full') {
                this.kitchenResult = this.kitchenResult * 80;
            }
            if (this.kitchenSelector == 'Partial') {
                this.kitchenResult = this.kitchenResult * 40;
            }

            if (this.kitchenCheckbox == true) {
                this.kitchenResult = this.kitchenResult + ((this.kitchenInput + (10 / 100 * this.kitchenInput)) * 2);
            }

            if (this.kitchenRadio == 'Fair') {
                this.kitchenResult = this.kitchenResult - (10 / 100 * this.kitchenResult);
            }
            if (this.kitchenRadio == 'Best') {
                this.kitchenResult = this.kitchenResult + (10 / 100 * this.kitchenResult);
            }

            //result to local string
            this.kitchenResult = this.kitchenResult.toLocaleString("en-US");
        },

        //------------------BASEMENTS----------------
        basementsInput: '',
        basementsSelector: '',
        basementsCheckbox: false,
        basementsRadio: '',
        basementsOpen: false,
        basementsResult: '0',

        basementsCalc() {
            if (this.basementsInput > 100000) {
                this.basementsInput = 100000;
            }

            if (this.basementsSelector == 'Complete Remodel - Structural') {
                this.basementsResult = (this.basementsInput + (10 / 100 * this.basementsInput)) * 50;
            }
            if (this.basementsSelector == 'Partial Remodel') {
                this.basementsResult = this.basementsInput * 20;
            }
            if (this.basementsSelector == 'Complete Remodel - Non Structural') {
                this.basementsResult = (this.basementsInput + (10 / 100 * this.basementsInput)) * 35;
            }

            if (this.basementsCheckbox == true) {
                if (this.basementsSelector == 'Complete Remodel - Structural' || this.basementsSelector == 'Complete Remodel - Non Structural') {
                    this.basementsResult = this.basementsResult + ((this.basementsInput + (10 / 100 * this.basementsInput)) * 2);
                }
                if (this.basementsSelector == 'Partial Remodel') {
                    this.basementsResult = this.basementsResult + (this.basementsInput * 2);
                }
            }

            if (this.basementsRadio == 'Fair') {
                this.basementsResult = this.basementsResult - (10 / 100 * this.basementsResult);
            }
            if (this.basementsRadio == 'Best') {
                this.basementsResult = this.basementsResult + (10 / 100 * this.basementsResult);
            }

            //result to local string
            this.basementsResult = this.basementsResult.toLocaleString("en-US");
        },

        //------------------RENOVATIONS----------------

        //flooring
        flooringCheckbox: false,
        flooringSelector: '',
        flooringInput: '',
        flooringOpen: false,
        flooringCheckOpen: false,
        //siding
        sidingCheckbox: false,
        sidingSelector: '',
        sidingInput: '',
        sidingOpen: false,
        sidingCheckOpen: false,
        //general
        generalCheckbox: false,
        generalSelector: '',
        generalInput: '',
        generalOpen: false,
        generalCheckOpen: false,
        //roof
        roofCheckbox: false,
        roofSelector: '',
        roofInput: '',
        roofOpen: false,
        roofCheckOpen: false,
        //painting interior
        interiorCheckbox: false,
        interiorInput: '',
        interiorOpen: false,
        //painting exterior
        exteriorCheckbox: false,
        exteriorInput: '',
        exteriorOpen: false,
        //drywall installation
        drywallCheckbox: false,
        drywallInput: '',
        drywallOpen: false,
        //windows & doors
        windowCheckbox: false,
        windowCheckOpen: false,
        windowInput: '',
        doorCheckbox: false,
        doorCheckOpen: false,
        doorInput: '',
        //demolition
        demolitionCheckbox: false,
        //level
        renovationRadio: '',
        //results
        flooringResult: '0',
        sidingResult: '0',
        generalResult: '0',
        roofResult: '0',
        interiorResult: '0',
        exteriorResult: '0',
        drywallResult: '0',
        windowResult: '0',
        doorResult: '0',
        renovationResult: '0',

        calc() {

            //flooring result
            if (this.flooringInput > 100000) {
                this.flooringInput = 100000;
            }

            if (this.flooringCheckbox == true) {
                this.flooringResult = this.flooringInput + (25 / 100 * this.flooringInput);
                this.flooringCheckOpen = true;
                if (this.flooringSelector == 'Carpet Installation') {
                    this.flooringResult = this.flooringResult * 10;
                }
                if (this.flooringSelector == 'Wood Flooring Installation') {
                    this.flooringResult = this.flooringResult * 14;
                }
                if (this.flooringSelector == 'Tile Installation') {
                    this.flooringResult = this.flooringResult * 18;
                }
                if (this.flooringSelector == 'Vinyl or Engineered Floor Installation') {
                    this.flooringResult = this.flooringResult * 12;
                }
            } else {
                this.flooringInput = '';
                this.flooringResult = '';
                this.flooringCheckOpen = false;
            }

            //siding result
            if (this.sidingInput > 100000) {
                this.sidingInput = 100000;
            }

            if (this.sidingCheckbox == true) {
                this.sidingCheckOpen = true;
                this.sidingResult = this.sidingInput + (25 / 100 * this.sidingInput);

                if (this.sidingSelector == 'Lap Siding') {
                    this.sidingResult = this.sidingResult * 15;
                }
                if (this.sidingSelector == 'Solid Composite Lap Siding') {
                    this.sidingResult = this.sidingResult * 19;
                }
                if (this.sidingSelector == 'Vinyl Siding') {
                    this.sidingResult = this.sidingResult * 5;
                }
            } else {
                this.sidingInput = '';
                this.sidingResult = '';
                this.sidingCheckOpen = false;
            }

            //general result
            if (this.generalInput > 100000) {
                this.generalInput = 100000;
            }

            if (this.generalCheckbox == true) {
                this.generalCheckOpen = true;
                if (this.generalSelector == 'Framing') {
                    this.generalResult = (this.generalInput + (25 / 100 * this.generalInput)) * 15;
                }
                if (this.generalSelector == 'Complete Remodel - Structural') {
                    this.generalResult = (this.generalInput + (10 / 100 * this.generalInput)) * 50;
                }
                if (this.generalSelector == 'Complete Remodel - Non Structural') {
                    this.generalResult = (this.generalInput + (10 / 100 * this.generalInput)) * 35;
                }
            } else {
                this.generalInput = '';
                this.generalResult = '';
                this.generalCheckOpen = false;
            }

            //roof result
            if (this.roofInput > 100000) {
                this.roofInput = 100000;
            }

            if (this.roofCheckbox == true) {
                this.roofResult = this.roofInput + (50 / 100 * this.roofInput);
                this.roofCheckOpen = true;
                if (this.roofSelector == 'Solar Roof Installation') {
                    this.roofResult = this.roofResult * 20;
                }
                if (this.roofSelector == 'Ceramic Roof Installation') {
                    this.roofResult = this.roofResult * 17;
                }
                if (this.roofSelector == 'Metal Roof Installation') {
                    this.roofResult = this.roofResult * 15;
                }
                if (this.roofSelector == 'Asphalt Roof Installation') {
                    this.roofResult = this.roofResult * 12;
                }
            } else {
                this.roofInput = '';
                this.roofResult = '';
                this.roofCheckOpen = false;
            }
            //interior result
            if (this.interiorInput > 100000) {
                this.interiorInput = 100000;
            }

            if (this.interiorCheckbox == true) {
                this.interiorResult = this.interiorInput * 1.5;
                this.interiorOpen = true;
            } else {
                this.interiorResult = '';
                this.interiorInput = '';
                this.interiorOpen = false;
            }

            //exterior result
            if (this.exteriorInput > 100000) {
                this.exteriorInput = 100000;
            }

            if (this.exteriorCheckbox == true) {
                this.exteriorResult = (this.exteriorInput + (10 / 100 * this.exteriorInput)) * 2.25;
                this.exteriorOpen = true;
            } else {
                this.exteriorResult = '';
                this.exteriorInput = '';
                this.exteriorOpen = false;
            }

            //drywall result
            if (this.drywallInput > 100000) {
                this.drywallInput = 100000;
            }

            if (this.drywallCheckbox == true) {
                this.drywallResult = (this.drywallInput + (25 / 100 * this.drywallInput)) * 2;
                this.drywallOpen = true;
            } else {
                this.drywallResult = '';
                this.drywallInput = '';
                this.drywallOpen = false;
            }

            //window & door
            if (this.windowInput > 500) {
                this.windowInput = 500;
            }

            if (this.windowCheckbox == true) {
                this.windowResult = this.windowInput * 500;
                this.windowCheckOpen = true;
            } else {
                this.windowInput = '';
                this.windowResult = '';
                this.windowCheckOpen = false;
            }

            if (this.doorInput > 500) {
                this.doorInput = 500;
            }

            if (this.doorCheckbox == true) {
                this.doorResult = this.doorInput * 800;
                this.doorCheckOpen = true;
            } else {
                this.doorInput = '';
                this.doorResult = '';
                this.doorCheckOpen = false;
            }

            //demolition checkbox
            if (this.demolitionCheckbox == true) {
                this.flooringResult = this.flooringResult + ((this.flooringInput + (25 / 100 * this.flooringInput)) * 2);
                this.sidingResult = this.sidingResult + ((this.sidingInput + (25 / 100 * this.sidingInput)) * 2);
                if (this.generalSelector == 'Framing') {
                    this.generalResult = this.generalResult + ((this.generalInput + (25 / 100 * this.generalInput)) * 2);
                } else {
                    this.generalResult = this.generalResult + ((this.generalInput + (10 / 100 * this.generalInput)) * 2);
                }
                this.roofResult = this.roofResult + ((this.roofInput + (50 / 100 * this.roofInput)) * 2);
                this.interiorResult = this.interiorResult + (this.interiorInput * 2);
                this.exteriorResult = this.exteriorResult + ((this.exteriorInput + (10 / 100 * this.exteriorInput)) * 2);
                this.drywallResult = this.drywallResult + ((this.drywallInput + (25 / 100 * this.drywallInput)) * 2);
                this.windowResult = this.windowResult + (this.windowInput * 250);
                this.doorResult = this.doorResult + (this.doorInput * 250);
            }

            //main result
            this.renovationResult = Number(this.flooringResult) + Number(this.sidingResult) + Number(this.generalResult) + Number(this.roofResult) + Number(this.interiorResult) + Number(this.exteriorResult) + Number(this.drywallResult) + Number(this.windowResult) + Number(this.doorResult);

            //level
            if (this.renovationRadio == 'Fair') {
                this.renovationResult = this.renovationResult - (10 / 100 * this.renovationResult);
            }
            if (this.renovationRadio == 'Best') {
                this.renovationResult = this.renovationResult + (10 / 100 * this.renovationResult);
            }

            //result to local string
            this.renovationResult = this.renovationResult.toLocaleString("en-US");
        },

        //------------------ADDITIONS----------------

        additionsInput: '',
        additionsCheckbox: false,
        additionsRange: '',
        additionsRadio: '',
        additionsResult: '0',

        additionsCalc() {
            // input value limit
            if (this.additionsInput > 100000) {
                this.additionsInput = 100000;
            }

            // plus 10 percent
            this.additionsResult = this.additionsInput + (10 / 100 * this.additionsInput);

            //check checkbox
            if (this.additionsCheckbox == true) {
                this.additionsResult = this.additionsResult * 185;
            } else {
                this.additionsResult = this.additionsResult * 175;
            }

            //check range slider
            if (this.additionsRange > 2) {
                this.additionsResult = this.additionsResult + (this.additionsInput * 10);
            }

            //chack level
            if (this.additionsRadio == 'Fair') {
                this.additionsResult = this.additionsResult - (10 / 100 * this.additionsResult);
            }
            if (this.additionsRadio == 'Best') {
                this.additionsResult = this.additionsResult + (10 / 100 * this.additionsResult);
            }

            //result to local string
            this.additionsResult = this.additionsResult.toLocaleString("en-US");
        },

        //------------------POP UP RESULT----------------
        categoryName: '',
        homeBuildShow: false,
        bathroomShow: false,
        kitchenShow: false,
        basementsShow: false,
        renovationsShow: false,
        additionsShow: false,
        resultPopUp: false,

        homeBuildPopUp() {
            this.categoryName = 'New Home Build';
            this.homeBuildShow = true;
            this.resultPopUp = true;
        },
        bathroomPopUp() {
            this.categoryName = 'Bathrooom Remodel';
            this.bathroomShow = true;
            this.resultPopUp = true;
        },
        kitchenPopUp() {
            this.categoryName = 'Kitchen Remodel';
            this.kitchenShow = true;
            this.resultPopUp = true;
        },
        basementsPopUp() {
            this.categoryName = 'Basements';
            this.basementsShow = true;
            this.resultPopUp = true;
        },
        renovationsPopUp() {
            this.categoryName = 'Renovations';
            this.renovationsShow = true;
            this.resultPopUp = true;
        },
        additionsPopUp() {
            this.categoryName = 'Additions';
            this.additionsShow = true;
            this.resultPopUp = true;
        },
        popUpClose() {
            this.homeBuildShow = false;
            this.bathroomShow = false;
            this.kitchenShow = false;
            this.basementsShow = false;
            this.renovationsShow = false;
            this.additionsShow = false;
            this.resultPopUp = false;
        },

        //------------------RESET----------------
        reset() {
            this.homeInput = '';
            this.bathroomInput = '';
            this.kitchenInput = '';
            this.basementsInput = '';
            this.flooringInput = '';
            this.sidingInput = '';
            this.generalInput = '';
            this.roofInput = '';
            this.interiorInput = '';
            this.exteriorInput = '';
            this.drywallInput = '';
            this.windowInput = '';
            this.doorInput = '';
            this.additionsInput = '';
            this.homeResult = '0';
            this.kitchenResult = '0';
            this.bathroomResult = '0';
            this.basementsResult = '0';
            this.flooringResult = '0';
            this.sidingResult = '0';
            this.generalResult = '0';
            this.roofResult = '0';
            this.interiorResult = '0';
            this.exteriorResult = '0';
            this.drywallResult = '0';
            this.windowResult = '0';
            this.doorResult = '0';
            this.renovationResult = '0';
            this.renovationResult = '0';
            this.additionsResult = '0';
        }
    }));
});
