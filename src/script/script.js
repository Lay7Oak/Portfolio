document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('hiddenMenu');
    
    // Mostra o menu e inicia o efeito de digitação ao carregar a página
    menu.classList.remove('hidden');
    typeWriter();

    // Adiciona o evento de clique no nome para mostrar ou ocultar o menu
    document.getElementById('lc').addEventListener('click', function() {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
            typeWriter(); // Reinicia o efeito de digitação ao mostrar o menu
        } else {
            menu.classList.add('hidden');
        }
    });

    // Função para o efeito de digitação
    function typeWriter() {
        var textElement = document.querySelector('#hiddenMenu p');
        var text = textElement.innerHTML;
        var formattedText = '';
        var i = 0;

        function type() {
            if (i < text.length) {
                formattedText += text.charAt(i);
                textElement.innerHTML = formattedText;
                i++;
                setTimeout(type, 50); // Velocidade de digitação (em milissegundos)
            }
        }

        // Inicia o efeito de digitação
        type();
    }
});
