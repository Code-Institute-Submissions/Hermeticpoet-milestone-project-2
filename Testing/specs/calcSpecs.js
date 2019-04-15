describe("game button functions", function() {

    describe("start button should be disabled when game first loads", function() {
        it("should add disabled attribute to startBtn", function() {
            startBtn = $(".startBtn");
            startBtn.click();
            expect(startBtn.attr("disabled")).toBeTruthy;
        });
    });

    describe("color buttons should be disabled when game first loads", function() {
        it("should call function to add disabled class to colorBtns", function() {
            startBtn = $(".startBtn");
            spyOn(window, "addDisable");
            startBtn.click();
            expect(window.addDisable).toHaveBeenCalled;
        });
    });

    describe("start button should become active when game powered on", function() {
        it("should remvoe disabled attribute to startBtn", function() {
            powerOn = $(".powerOn");
            startBtn = $(".startBtn");
            powerOn.checked == true;
            expect(startBtn.attr("disabled")).toBeFalse;
        });
    });

    describe("color buttons should be enabled after simonSeq runs", function() {
        it("should have disabled class removed at end of sequence", function() {
            spyOn(window, "removeDisable");
            genSimonSeq();
            expect(window.removeDisable).toHaveBeenCalled;
        });
    });

    describe("color buttons should still be disabled if start button pressed but power is off", function() {
        it("color button disabled while game power off", function() {
            powerOn = $(".powerOn");
            powerOn.checked == false;
            startBtn = $(".startBtn");
            startBtn.click();
            spyOn(window, "removeDisable");
            genSimonSeq();
            expect(window.removeDisable).not.toHaveBeenCalled;
        });
    });
});

describe("sequence generation and ID assignment functions", function() {

    describe("first check if result of function is a number", function() {
        it("should generate a number for simonSeq", function() {
            getRandomNum();
            random = Math.floor((Math.random() * 4) + 1);
            result = simonSeq.push(random);
            expect(result).not.toBe(NaN || undefined);
        });
    });

    describe("check if number created is between 1 & 4", function() {
        it("should generate a number greaterThanOrEqual to 1", function() {
            getRandomNum();
            result = simonSeq.push();
            expect(result).toBeGreaterThanOrEqual(1);
        });
    });

    describe("more checks to see if number created is between 1 & 4", function() {
        it("should generate a number lessThanOrEqual to 4", function() {
            getRandomNum();
            result = simonSeq.push();
            expect(result).toBeLessThanOrEqual(4);
        });
    });

    describe("the genSimonSeq function should call addClassSound function", function() {
        it("should call function to attach corresponding ID to colorBtns", function() {
            spyOn(window, "genSimonSeq");
            startBtn = $(".startBtn");
            startBtn.click();
            expect(window.addClassSound).toHaveBeenCalled;
        });
    });

    describe("the random number between 1 & 4 is pushed to correct colour ID", function() {
        it("should light up corresponding colorBtn ID of num generated", function() {
            spyOn(window, "addClassSound");
            getRandomNum();
            id = simonSeq.push();
            addClassSound(id);
            expect(window.addClassSound).toHaveBeenCalledWith(id);
        });
    });
});

describe("check the function calls throughout the game app", function() {
    
    describe("PowerOn sound should play when game is first turned on", function() {
        it("should call the playPowerOnSound function", function() {
            spyOn(window, "playPowerOnSound");
            powerOn = $(".powerOn");
            startBtn = $(".startBtn");
            powerOn.checked == true;
            startBtn.click();
            expect(window.playPowerOnSound).toHaveBeenCalled;
        });
    });
    
    describe("reset game function called to begin game or start again", function() {
        it("should call resest game when powered off", function() {
            spyOn(window, "resetGame");
            powerOn = $(".powerOn");
            powerOn.checked == false;
            expect(window.resetGame).toHaveBeenCalled;
        });
        
        it("should be called if start button pressed too", function() {
            spyOn(window, "resetGame");
            powerOn = $(".powerOn");
            powerOn.checked == true;
            startBtn = $(".startBtn");
            startBtn.click();
            expect(window.resetGame).toHaveBeenCalled;
        });
    });
    
    describe("error sound should play if player makes an error", function() {
        it("should be called when player makes an error", function() {
            spyOn(window, "playErrorSound");
            !checkUserSeq();
            displayError();
            expect(window.playErrorSound).toHaveBeenCalled;
        });
        
        it("should not be called if userSeq is correct", function() {
            spyOn(window, "playErrorSound");
            checkUserSeq();
            expect(window.playErrorSound).not.toHaveBeenCalled;
        });
    });
    
    describe("the Game win sound to be called when game is won", function() {
        it("should call the playGameWinSound", function() {
            spyOn(window, "playGameWinSound");
            checkUserSeq();
            userSeq.length == simonSeq.length && userSeq.length == total_GAME_LEVELS;
            expect(window.playGameWinSound).toHaveBeenCalled;
        });
    });
    
    describe("the button sounds play when pressed or simonSeq matches them", function() {
        it("should call playBtnSound when button pressed by user", function() {
            spyOn(window, "playBtnSound");
            btnPress = $(".colorBtn");
            btnPress.click();
            expect(window.playBtnSound).toHaveBeenCalled;
        });
        
        it("should call playBtnSound to match generated simonSeq", function() {
            spyOn(window, "playBtnSound");
            genSimonSeq();
            expect(window.playBtnSound).toHaveBeenCalled;
        });
    });
});

describe("check the localStorage is working correctly", function() {
    
    describe("checks localStorage on powerOn of game", function() {
        it("should check localStorage for previous top score data", function() {
            topScoreFromLS = localStorage.getItem("Top Score");
            result = topScoreFromLS;
            getTopScoreFromLocalStorage();
            expect(result).toEqual("2");
        });
        
        it("should retrieve & display any previous high score data", function() {
            topScoreDisplay = getTopScoreFromLocalStorage();
            $("#topScoreCount").text(topScoreDisplay);
            expect(topScoreDisplay).toBe("2");
        });
    });
});

