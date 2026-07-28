# Viva Angra Tour - publicacao

Este site e estatico. Para publicar, envie todos os arquivos desta pasta para uma hospedagem como Netlify, Vercel, Hostinger ou outro servidor com suporte a HTML/CSS/JS.

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
