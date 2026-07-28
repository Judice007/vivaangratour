# Viva Angra Tour - publicacao

Este site e estatico (HTML/CSS/JS puro, sem build).

## Como o site fica no ar

O codigo mora no GitHub (`github.com/Judice007/vivaangratour`) e esta conectado
a Vercel. Isso quer dizer que **nao existe mais um passo manual de "enviar os
arquivos pra hospedagem"**: toda vez que a branch `main` do GitHub muda, a
Vercel publica a nova versao sozinha, em minutos.

Fluxo normal de uma alteracao:

1. A mudanca entra numa branch separada e abre um Pull Request (PR) no GitHub
2. A Vercel gera automaticamente um link de preview daquele PR pra conferir
   antes de publicar
3. Ao dar merge do PR na `main`, a versao publica (o site real) e atualizada

## Editando o site sem estar no computador

Como tudo fica no GitHub, da pra mexer no site de qualquer lugar, so com
celular ou tablet:

- **Pelo Claude** - continue pedindo as alteracoes por aqui (app ou site do
  Claude), do jeito que ja vem sendo feito. As mudancas sao commitadas e
  enviadas pro GitHub automaticamente, e um PR e aberto pra revisao.
- **Direto no site do GitHub** - abra `github.com/Judice007/vivaangratour`
  no navegador do celular, entre no arquivo (ex.: `index.html`), toque no
  icone de lapis pra editar e salve com "Commit changes". Funciona em
  qualquer navegador, sem instalar nada.

Nao e preciso usar OneDrive, Google Drive ou qualquer sincronizador de
arquivos pra isso - eles ficariam desconectados desse fluxo de publicacao e
so causariam confusao com versoes divergentes.

## Antes de divulgar

1. Trocar o WhatsApp em `script.js`:
   - procurar por `whatsappNumber`
   - substituir `5524999999999` pelo numero real no formato internacional, sem espacos ou simbolos
   - exemplo: `5524999999999`

2. Instagram oficial:
   - perfil configurado: `https://www.instagram.com/vivaangratour/`
   - se mudar no futuro, atualizar `index.html` e `script.js`

3. Trocar fotos, se houver fotos proprias:
   - coloque as imagens em `assets/`
   - atualize os `src` dos cards em `index.html`
   - mantenha imagens largas, preferencialmente horizontais
   - gere a versao `.webp` de cada foto nova (ver secao "Imagens" abaixo) e
     adicione o `<picture><source>` correspondente, senao a foto carrega
     so em JPG/PNG (mais pesado)

4. Revisar valores:
   - os roteiros estao como `Valor sob consulta`
   - se quiser divulgar preco, substituir esse texto nos tres cards

5. Depoimentos (secao "O que dizem os clientes"):
   - os 3 cartoes estao com texto placeholder entre colchetes, ex.: `[Nome do cliente]`
   - troque pelos depoimentos reais (WhatsApp, Google, Instagram) antes de publicar
   - nao publique depoimento inventado

6. Secao "Sobre nos":
   - o texto atual e generico; revise com a historia real de voces (ha quanto tempo operam,
     time, embarcacao) se quiser deixar mais pessoal

## Arquivos principais

- `index.html`: conteudo do site
- `styles.css`: visual do site (arquivo fonte, editavel)
- `styles.min.css`: versao minificada do `styles.css`, usada pelo `index.html` em producao
- `script.js`: WhatsApp e mensagem automatica
- `assets/`: imagens e logo

### Editando o CSS

O `index.html` carrega `styles.min.css` (menor, mais rapido) em vez de `styles.css`.
Se voce editar `styles.css`, gere a versao minificada de novo antes de publicar:

```
npx clean-css-cli -O2 -o styles.min.css styles.css
```

### Imagens

Cada foto usada no site tem uma versao `.jpg` (compatibilidade) e uma `.webp`
(menor, usada pelos navegadores atuais) referenciadas assim no HTML:

```html
<picture>
  <source srcset="assets/nome-da-foto.webp" type="image/webp" />
  <img src="assets/nome-da-foto.jpg" alt="..." />
</picture>
```

Para gerar o `.webp` de uma foto nova:

```
python3 -c "from PIL import Image; Image.open('assets/nome-da-foto.jpg').convert('RGB').save('assets/nome-da-foto.webp', 'WEBP', quality=75, method=6)"
```

A imagem de fundo do hero (`cataguases-hero-web.jpg`) tem tambem uma versao
`-mobile` menor, usada em telas pequenas via media query no `styles.css`.

## Depois de publicar (dominio definido)

Com o site no ar em um dominio proprio, adicione no `<head>` do `index.html`:

```html
<link rel="canonical" href="https://SEU-DOMINIO/" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://SEU-DOMINIO/" />
<meta property="og:title" content="Viva Angra Tour | Passeios em Angra dos Reis" />
<meta property="og:description" content="Passeios de lancha, ilhas e praias em Angra dos Reis com a Viva Angra Tour." />
<meta property="og:image" content="https://SEU-DOMINIO/assets/cataguases-hero-web.jpg" />
```

Isso melhora o preview do link quando compartilhado no WhatsApp, Instagram etc.
