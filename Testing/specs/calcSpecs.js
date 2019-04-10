describe("game button functions", function() {
    
    describe("start button should be disabled when game first loads", function() {
      it ("should add disabled attribute to startBtn", function() {
          startBtn = $('.startBtn'); 
          startBtn.click();
          expect (startBtn.attr("disabled")).toBeTruthy;
      }); 
    });
    
    describe("color buttons should be disabled when game first loads", function() {
        it ("should call disable function to add disabled class to colorBtns", function() {
            // colorBtns = $(".colorBtn");
            // addDisable();
            spyOn(window, "addDisable");
            startBtn.click();
            expect (window.addDisable).toHaveBeenCalled;
        });
    });
});


