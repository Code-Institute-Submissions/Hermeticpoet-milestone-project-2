describe ("game button functions", function() {
    
    describe ("start button should be disabled when game first loads", function() {
      it ("should add disabled attribute to startBtn", function() {
          startBtn = $(".startBtn"); 
          startBtn.click();
          expect (startBtn.attr("disabled")).toBeTruthy;
      }); 
    });
    
    describe ("color buttons should be disabled when game first loads", function() {
        it ("should call function to add disabled class to colorBtns", function() {
            startBtn = $(".startBtn"); 
            spyOn(window, "addDisable");
            startBtn.click();
            expect (window.addDisable).toHaveBeenCalled;
        });
    });
    
    describe ("start button should become active when game powered on", function() {
        it ("should remvoe disabled attribute to startBtn", function() {
            powerOn = $(".powerOn");
            startBtn = $(".startBtn");
            powerOn.checked == true;
            expect (startBtn.attr("disabled")).toBeFalse;
        });
    });
    
    describe ("color buttons should be enabled after simonSeq runs", function() {
        it ("should have disabled class removed at end of sequence", function() {
            spyOn(window, "removeDisable");
            genSimonSeq();
            expect (window.removeDisable).toHaveBeenCalled;
        });
    });
    
    describe ("color buttons should still be disabled if start button pressed but power is off", function() {
        it ("color button disabled while game power off", function() {
            powerOn = $(".powerOn");
            powerOn.checked == false;
            startBtn = $(".startBtn"); 
            startBtn.click();
            spyOn(window, "removeDisable");
            genSimonSeq();
            expect (window.removeDisable).not.toHaveBeenCalled;
        });
    });
});

describe ("sequence generation and ID assignment functions", function() {
    
    describe ("first check if result of function is a number", function() {
        it("should generate a number for simonSeq", function() {
            getRandomNum();
            random = Math.floor((Math.random() * 4) + 1);
            result = simonSeq.push(random);
            expect(result).not.toBe(NaN || undefined);
        });
    });
    
    describe ("check if number created is between 1 & 4", function() {
        it ("should generate a number greaterThanOrEqual to 1", function() {
            getRandomNum();
            result = simonSeq.push();
            expect (result).toBeGreaterThanOrEqual(1);
        });
    });
    
    describe ("more checks to see if number created is between 1 & 4", function() {
        it ("should generate a number lessThanOrEqual to 4", function() {
            getRandomNum();
            result = simonSeq.push();
            expect (result).toBeLessThanOrEqual(4);
        });
    });
    
    describe ("the genSimonSeq function should call addClassSound function", function() {
        it ("should call function to attach corresponding ID to colorBtns", function() {
            spyOn(window, "genSimonSeq");
            startBtn = $(".startBtn"); 
            startBtn.click();
            expect (window.addClassSound).toHaveBeenCalled;
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



