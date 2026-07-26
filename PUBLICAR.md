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

4. Revisar valores:
   - os roteiros estao como `Valor sob consulta`
   - se quiser divulgar preco, substituir esse texto nos tres cards

## Arquivos principais

- `index.html`: conteudo do site
- `styles.css`: visual do site
- `script.js`: WhatsApp e mensagem automatica
- `assets/`: imagens e logo

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
