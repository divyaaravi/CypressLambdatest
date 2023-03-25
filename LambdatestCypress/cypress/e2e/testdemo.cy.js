//const { before } = require("cypress/types/lodash")


describe('Lamdatest',()=>{
    before(()=>{
        cy.visit("https://www.lambdatest.com/selenium-playground/input-form-demo")
    })
    it.skip('test1',()=>{

        cy.visit("https://www.lambdatest.com/selenium-playground/input-form-demo")
   cy.xpath("(//p[@class='inline-block' ] )[4]").click()
   cy.xpath("//a[contains(text(),'Drag & Drop Sliders')]").click();
   //cy.screenshots("drag and drop")
    })
    it.only('test2',()=>{

        let ext='Thanks for contacting us, we will get back to you shortly.';
       // cy.visit("https://www.lambdatest.com/selenium-playground/input-form-demo")
        cy.get("input[id='name']").type("mahi")
       // cy.xpath("//input[@id='name']",{timeout:5000}).type("mahendra");
        cy.get("input[id='inputEmail4']").type("mahi123@gmail.com");
        cy.get("input[id='inputPassword4']").type("123456");
        cy.get("input[id='company']").type("xyz");
        cy.get("input[id='inputCity']").type("bengaluru");
        cy.get("input[id='inputAddress1']").type("rajajinagar");
        cy.get("input[id='inputAddress2']").type("navarang");
        cy.get("input[id='inputState']").type("karnataka");
        cy.get("input[id='inputZip']").type("012345");
        cy.get("select[name='country']").select('Angola')
        cy.get("input[id='websitename']").type("www.mahi.com",{force: true});
        //cy.xpath("button[contains(text(),'Submit')]").click();
        cy.get(".btn").click({force: true})

        cy.get("[class='success-msg hidden']").then((veri)=>{
         const at=   veri.text();
            assert.equal(at,ext)

        })
        
       
        
    })
})