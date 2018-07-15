var elem = document.getElementById('cnt');
var shownCats={
    last:null
};
function catN(name,url){
    let vals= {name:name,url:url,display:'none',context:null,count:0,el:false}
    vals.createNew = function(){
        var nC = document.getElementsByClassName('cat')[0].cloneNode(true);
        var childRen = [...nC.childNodes];
        nC.id=name;
        childRen.filter(x=>x.nodeName=='DIV')[0].innerText = this.name;
        var catImg = childRen.filter(x=>x.nodeName=='IMG')[0];
        var catCounter = childRen.filter(x=>x.className=='cnt')[0];
        catImg.src = this.url;
        catCounter.innerText=this.count
        catImg.addEventListener('click',n=>catCounter.innerText=++this.count)
        document.getElementById('cats-container').appendChild(nC)
        this.context = nC
        return this
    }

    vals.showCat = function(){
        if(shownCats.last != null)
            {
                shownCats.last.style = 'display:none;';
            }
        this.context.style = 'display:block;';
        shownCats.last = this.context;
        return this
    }
    vals.addToList = function(){
        var listItem = document.querySelector('#catList');
        var input = document.querySelector('#catList>input').cloneNode(true);
        input.name = this.name+'list';
        input.value = this.name;
        input.removeAttribute('disabled')
        input.removeAttribute('hidden');
        input.innerText = this.name;
        input.addEventListener('click',()=>this.showCat())
        document.querySelector('#catList').appendChild(input);
        return this;
    }
    vals.updateNames = function(nameElement,urlElement){
        nameElement.value = this.name;
        urlElement.value = this.url;
        return this;
    }
    return vals
}
var cat = new catN('meowth','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkIF4cKJ1CLpa8gJ7ogFPqv6Suxlxe06jNcHbX1RT5F8DdgUIK');
cat.addToList().createNew().updateNames(newCatName,newImageUrl);
var cat2 = new catN('meow','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVeyg57uZUhFq4rI47458uPI0M0M7NX-sFXAj5hyWHoGZOgABI');
cat2.addToList().createNew().updateNames(newCatName,newImageUrl);
var cat3 = new catN('meowie','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1tf4Vt1II-FGdOb0jTV26ZZGnHNHHYcR0-rgw7Z8vQ_DEjbd0g');
cat3.addToList().createNew().updateNames(newCatName,newImageUrl);

function addNewCat(){
    if(newCatName.value && newImageUrl.value && !document.getElementById(newCatName.value))
        new catN(newCatName.value,newImageUrl.value).addToList().createNew().updateNames(newCatName,newImageUrl);
}
