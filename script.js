// FILTRAR OS JOGOS
var jogos =[
['Half-Life 2', 'Remapeamento de Botões', 'Legendas', 'Desligar Vibração', 'Modo Assistência'],
['GTA: San Andreas', 'Remapeamento de Botões', 'Legendas'],
['GTA IV', 'Remapeamento de Botões', 'Legendas', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Portal 2', 'Remapeamento de Botões', 'Legendas', 'Desligar Vibração'],
['Crysis 2', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Minecraft', 'Remapeamento de Botões', 'Legendas', 'Desligar Vibração', 'Modo Assistência', 'Filtro de Daltonismo', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['BioShock: Infinite', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Desligar Vibração'],
['GTA V', 'Remapeamento de Botões', 'Legendas', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Crysis 3', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Wolfesntein: The New Order', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Segurar ou Pressionar'],
['Alien Isolation', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Facilitar Comandos'],
['Metro: 2033 Redux', 'Remapeamento de Botões', 'Legendas', 'Segurar ou Pressionar'],
['Metro: Last Light Redux', 'Remapeamento de Botões', 'Legendas', 'Segurar ou Pressionar'],
['Watch Dogs 2', 'Legendas', 'Modo Assistência', 'Desligar Vibração'],
['Far Cry: Primal', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Zelda: BOTW', 'Legendas'],
['Mario Odyssey', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Facilitar Comandos'],
['ARK: Survival Evolved', 'Remapeamento de Botões', 'Modo Assistência'],
['PREY', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Desligar Vibração'],
['Fortnite (Battle Royale)', 'Remapeamento de Botões', 'Filtro de Daltonismo', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Horizon Zero Dawn', 'Legendas', 'Modo Assistência', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Spider-Man (PS4)', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Celeste', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
["Assassin's Creed: Odyssey", 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Facilitar Comandos'],
['Shadow of the Tomb Raider', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Battlefield V', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Filtro de Daltonismo', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Far Cry 5', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Filtro de Daltonismo', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Control', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Apex Legends', 'Remapeamento de Botões', 'Legendas', 'Filtro de Daltonismo', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
["Assassin's Creed: Valhalla", 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Filtro de Daltonismo', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Risk of Rain 2', 'Remapeamento de Botões', 'Modo Assistência', 'Desligar Vibração'],
['Ghost of Tsushima', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Black Mesa', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Doom Eternal', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Filtro de Daltonismo', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Super Mario 3D All-Stars', 'Desligar Vibração'],
['Hitman 3', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Segurar ou Pressionar'],
['Subnautica: Below Zero', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Desligar Vibração', 'Segurar ou Pressionar'],
['Deathloop', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Filtro de Daltonismo', 'Desligar Vibração', 'Facilitar Comandos', 'Segurar ou Pressionar'],
['Forza Horizon 5', 'Remapeamento de Botões', 'Legendas', 'Modo Assistência', 'Filtro de Daltonismo', 'Desligar Vibração', 'Facilitar Comandos'],
['Elden Ring', 'Remapeamento de Botões', 'Legendas', 'Desligar Vibração'],
]

function botao_filtrar_click(){
    let todos_botoes = document.querySelectorAll(".checkbutton")
    let selected_botoes = []
    for (let opt of todos_botoes){
        if (opt.checked){
            selected_botoes.push(opt.value)
        }
    }
    // FILTRO:
    jogosfiltrados = ""
    for (let j = 0; j < jogos.length; j++){
        filtropassou = 0
        for (let f = 0; f < selected_botoes.length; f++){
            for (let p = 0; p < jogos[j].length; p++){
                if (selected_botoes[f] == jogos[j][p]){
                    filtropassou += 1
                }
            }
        }
        if (filtropassou == selected_botoes.length){
            jogosfiltrados += `<li>${jogos[j][0]}</li>`
        }
    }
    // EXIBIR JOGOS FILTRADOS
    console.log(jogosfiltrados)
    document.getElementById("lista_resultados").innerHTML = jogosfiltrados
}

// TROCAR IMAGENS DE EXPLICAÇÃO
var imagens_dict = {
    "LEGENDAS" : ["./arquivos/legendas_off.png", "./arquivos/legendas_on.png"],
    "BUTTONREMAP" : ["./arquivos/buttomremap_off.png", "./arquivos/buttomremap_on.png"],
    "ASSISTMODE" : ["./arquivos/modoassist_off.png", "./arquivos/modoassist_on.png"],
    "DALTONISMO" : ["./arquivos/daltonismo_off.png", "./arquivos/daltonismo_on.png"],
    "VIBRACAO" : ["./arquivos/vibra_off.png", "./arquivos/vibra_on.png"],
    "FACILITARCOMANDS" : ["./arquivos/facilitarcomands_off.png", "./arquivos/facilitarcomands_on.png"],
    "SOP" : ["./arquivos/sop_off.png", "./arquivos/sop_on.png"],
    "INSTA" : ["./arquivos/instagram-logo.png", "./arquivos/instagram-print.png"]
}
function trocar_imagem(identificacao){
    let imagem_elemento = document.getElementById(identificacao)
    console.log(imagem_elemento.value)
    if (imagem_elemento.value == "on"){
        imagem_elemento.src = imagens_dict[identificacao][0]
        imagem_elemento.value = "off"
    }
    else{
        imagem_elemento.src = imagens_dict[identificacao][1]
        imagem_elemento.value = "on"
    }
}
