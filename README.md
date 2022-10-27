# Filtro de Games Acessíveis
Essa ferramenta foi criada para um projeto do Colégio Presidente Kennedy (uma escola localizada em Santos, SP) com o tema "acessibilidade nos jogos". O objetivo dela é ajudar pessoas com deficiência a procurarem jogos eletrônicos que elas consigam jogar através de um filtro.
## Acessar o site:
> Você pode usar a ferramenta através do [site clicando aqui](https://acessibilidadenosgames.github.io/jogosacessiveis/).
## Dados
> Os dados usados para fazer o filtro e a pesquisa estão disponíveis em uma [planilha clicando aqui](https://docs.google.com/spreadsheets/d/1tMthzT5MUiV0_hbzD5Nuad39kp-sqkd3L8GhghB-GZM/edit?usp=sharing).
## Funcionalidades
- `Contextualização` - Um texto contextualizando o projeto.
- `Explicações` - Explicações sobre cada uma das opções disponíveis para o filtro.
- `Imagens ilustrativas` - Imagens em "pixel art" ilustrando as explicações. Ao clicar no botão, é possível mudar a imagem.
- `Filtro` - Um filtro com sete opções que podem ser selecionadas. Quando o usuário clica no botão "FILTRAR", são exibidos os jogos que tem os critérios selecionados.
## Código do filtro
<details>
  <summary>Exibir variável "jogos"</summary>

```javascript
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
['Elden Ring', 'Remapeamento de Botões', 'Legendas', 'Desligar Vibração']
]
```
</details>
<details>
  <summary>Exibir função do filtro</summary>
	
```javascript
// var jogos =[
// ['TÍTULO', 'OPÇÃO', 'OPÇÃO', ...],
// ...
// ]
function botao_filtrar_click(){
  // PEGAR AS OPÇÕES SELECIONADAS
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
      // SE PASSOU, ADICIONAR EM jogosfiltrados
      if (filtropassou == selected_botoes.length){
          jogosfiltrados += `<li>${jogos[j][0]}</li>`
      }
  }
  // EXIBIR JOGOS FILTRADOS
  console.log(jogosfiltrados)
  document.getElementById("lista_resultados").innerHTML = jogosfiltrados
}
```
</details>
