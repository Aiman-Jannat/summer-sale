let totalPrice=0;
let discount=0;
let total=0;
let countChild=0;
let value=0;

function getElementsInnerTextFloatById(id){
    const itext = parseFloat(document.getElementById(id).innerText);
    return itext;

}
function getElement(id)
{
    return document.getElementById(id);
}
function discountCalculation(totalPrice)
{
    const applyButton = getElement('apply-btn');
    applyButton.removeAttribute('disabled');
    // document.getElementById('input').addEventListener('onmouseup',function(){
    //      value = input.value;
        
    // })

    // document.getElementById('apply-btn').addEventListener('click',function(){
    //     if(value == "SELL200")
    //     {
    //         discount =  (totalPrice*(20/100));
    //         const disCount = getElement('discount');
    //         disCount.innerText = disCount;
    //         total = totalPrice-discount;
    //         const toTal = getElement('total');
    //         toTal.innerText = total;
    //     }
    // })

}
function calculate(card, name)
{
    countChild++;
    totalPrice += card;
    const createChild = document.createElement('p');
    createChild.classList.add('text-black', 'font-bold', 'text-sm');
    createChild.innerHTML = `${countChild}. ${name}`;
    const parent = getElement('toAppend');
    parent.appendChild(createChild);
    const totalElement = getElement('totalPrice');
    totalElement.innerHTML = `${totalPrice} TK`;
    total = totalPrice;
    let toTal = getElement('total');
     toTal.innerHTML = `${total} TK`;

    if(totalPrice>0)
    {
        const pbuttonActive = getElement('purchase-btn');
        pbuttonActive.removeAttribute('disabled');


    }
    if(totalPrice>=200)
    {
        const applyButton = getElement('apply-btn');
    applyButton.removeAttribute('disabled');
    document.getElementById('input').addEventListener('keyup',function(event){
        
         value = event.target.value;
        
    })

    document.getElementById('apply-btn').addEventListener('click',function(){
        if(value == "SELL200")
        {
            discount =  (totalPrice*(20/100)).toFixed(2);
            const disCount = getElement('discount');
            disCount.innerHTML = `${discount} TK`;
            total = (totalPrice-discount).toFixed(2);
            let toTal = getElement('total');
            toTal.innerHTML = `${total} TK`;
        }
    })


    }
    
}

document.getElementById('home').addEventListener('click',function(){

    
    totalPrice=0;
    discount=0;
    total=0;
    value ='';
    countChild=0;
    const inp = getElement('input');
    inp.value='';
    const tottTal = getElement('total');
    tottTal.innerHTML = `00 TK`;
    const totalElement = getElement('totalPrice');
    totalElement.innerHTML = `00 TK`;
    const totTal = getElement('discount');
    totTal.innerHTML = `00 TK`;
    const chld = getElement('toAppend');
    chld.innerHTML=``;
    const buttonActive = getElement('apply-btn');
        buttonActive.setAttribute('disabled',true);
        const applly = getElement('purchase-btn');
        applly.setAttribute('disabled',true);


})

function card1Click()
{
    let card = getElementsInnerTextFloatById('card-1');
    calculate(card,"K.Accessories");
}
function card2Click()
{
    let card = getElementsInnerTextFloatById('card-2');
    calculate(card,"K.Accessories");
}
function card3Click()
{
    let card = getElementsInnerTextFloatById('card-3');
    calculate(card,"Home Cooker");
}
function card4Click()
{
    let card = getElementsInnerTextFloatById('card-4'); 
    calculate(card,"Sports Back Cap");
}
function card5Click()
{
    let card = getElementsInnerTextFloatById('card-5'); 
    calculate(card,"Full Jersey Set");
}
function card6Click()
{
    let card = getElementsInnerTextFloatById('card-6');
    calculate(card,"Sports Cates");
}
