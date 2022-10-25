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
  <summary>Exibir</summary>
	
```javascript
var jogos =[
['TÍTULO', 'OPÇÃO', 'OPÇÃO', ...],
...
]
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
