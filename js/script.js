var Data = [];

window.onload - function(){
    Storage.load();
    HTML.render();
}

HTML = {
    render: function(){
        document.getElementById('display').innerHTML = '';
        let buffer = '';
        Data.forEach(function(item){
            let chunk = `<p class="${item.css}">${item.name}: ${item.value}</p>`;
            buffer += chunk;
        });
        document.getElementById('display').innerHTML = buffer;
    }
}

class Storage {
    static save(){
        let appData = JSON.stringify(Data);
        localStorage.setItem('BIDDING_DATA', appData);
    }
    static load(){
        let loadData = JSON.parse(localStorage.getItem('BIDDING_DATA'));
        if (loadData != null){Data = loadData};
    }
    static delete(){
        localStorage.clear();
        location.reload();
    }
}

class Event {
    static placeBid(name){
        let value = '';
        let cssClass='';
        switch(name){
            case 'John':
                value = document.getElementById('input-A').value;
                cssClass = 'bid-a';
                break;
            case 'Jane':
                value = document.getElementById('input-B').value;
                cssClass = 'bid-b';
        }
        Data.push({name: name, value: value, css: cssClass});
        Storage.save();
        HTML.render();
    }
}