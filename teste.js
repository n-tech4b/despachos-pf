// Automatização para abrir abas do SICCAU 

javascript:(function() {
    var ids = ['rtregistrado', 'rtpendente', 'rtelaborada', 'responsabilidadetecnica', 'protocolo', 'autoativo', 'registro'];
    ids.forEach(function(id) {
        var element = document.getElementById(id);
        if (element) {
            element.click();
        } else {
            console.log('Element not found with ID:', id);
        }
    });
})();


// Automatização para abrir Atividade do RRT 

javascript:(function() {
    var clicked = false;
    if (!clicked) {
        var headers2 = document.querySelectorAll('h6');
        headers2.forEach(function(header2) {
            if (header2.textContent.trim() === 'Serviço') {
                header2.click();
            }
        });
    }
    
    setTimeout(function() {
        var headers1 = document.querySelectorAll('h6');
        var clicked = false;
        headers1.forEach(function(header1) {
            if (header1.textContent.trim() === 'Serviço 1') {
                header1.click();
                clicked = true;
            }
        });
    }, 2000);

    setTimeout(function() {
        var buttons = document.querySelectorAll('a.px-1.btn.btn-primary.btn-sm.p-0.mr-1[href="javascript:void(0)"] > span.p-0.fas.fa-list-alt[title="Visualizar Atividades Contratadas/Descrição"]');
        if (buttons.length > 1) {
            buttons[1].parentElement.click();
        }
    }, 3000);
})();