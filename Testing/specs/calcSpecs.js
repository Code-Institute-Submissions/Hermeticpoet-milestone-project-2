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
            spyOn(window, "addDisable");
            startBtn.click();
            expect (window.addDisable).toHaveBeenCalled;
        });
    });
    
    describe ("start button should become active when game powered on", function() {
        it ("should remvoe disabled attribute to startBtn", function() {
            powerOn = $(".powerOn");
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
});


