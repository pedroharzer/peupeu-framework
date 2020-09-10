# peupeu-framework
um framework css simples e rápído

## Instalação
Baixe os arquivos e adicione `<link rel="stylesheet" type="text/css" href="peupeu.css">` (referênciando o local do arquivo `peupeu.css`), `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> (cdn jQuery) e ``<script src="../js/peupeu.js"></script>` (referênciando o local do arquivo `peupeu.js`) ao seu documento HTML (lembre-se de adicionar o link css na tag `head` do documento e os scripts antes de fechar a tag `body` do documento)

## Ferramentas

Criação rápida de nav-bars com suporte mobile
```
	<header class="main-header bg-branco">
		<div class="header-wrapper">
			<div class="logo-container">
				<a class="logo tc-vermelho" href="#">Logo!</a>
			</div>
			<div class="button-container">
				<button class="toggle-button">
					<span class="toggle-button__bar bg-preto"></span>
					<span class="toggle-button__bar bg-preto"></span>
					<span class="toggle-button__bar bg-preto"></span>
				</button>
			</div>
			<nav class="main-nav">
				<ul class="nav-itens">
					<li class="nav-item">
						<a class="nav-link tc-vermelho" href="">Link1</a>
					</li>
					<li class="nav-item">
						<a class="nav-link tc-vermelho" href="">Link2</a>
					</li>
					<li class="nav-item">
						<a class="nav-link tc-vermelho" href="">Link3</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
```
## Resultado desktop size:
![sdfdsfds](https://user-images.githubusercontent.com/68961459/92756647-63ce5580-f363-11ea-889d-e1614bdc309f.png)
## Resultado mobile size
![mobile-nav](https://user-images.githubusercontent.com/68961459/92757182-e35c2480-f363-11ea-9c04-52a910cf4bdb.png)
![mobile-nav2](https://user-images.githubusercontent.com/68961459/92757190-e525e800-f363-11ea-935f-ad07c8163487.png)
## Rodapé

```
	<footer class="bg-preto">
		<ul class="footer-itens">
			<li class="footer-item">
				<a class="footer-link tc-branco" href="">contato</a>
			</li>
			<li class="footer-item">
				<a class="footer-link tc-branco" href="">termos e condições</a>
			</li>
		</ul>
	</footer>
```
## Resultado
![rodapé](https://user-images.githubusercontent.com/68961459/92757901-90cf3800-f364-11ea-904f-24dfa4ef191f.png)

## Facíl definição de cor de texto e background
```
	<header class="main-header bg-amarelo">
		<div class="header-wrapper">
			<div class="logo-container">
				<a class="logo tc-preto" href="#">Logo!</a>
			</div>
			<div class="button-container">
				<button class="toggle-button">
					<span class="toggle-button__bar bg-preto"></span>
					<span class="toggle-button__bar bg-preto"></span>
					<span class="toggle-button__bar bg-preto"></span>
				</button>
			</div>
			<nav class="main-nav">
				<ul class="nav-itens">
					<li class="nav-item">
						<a class="nav-link tc-vermelho" href="">Link1</a>
					</li>
					<li class="nav-item">
						<a class="nav-link tc-vermelho" href="">Link2</a>
					</li>
					<li class="nav-item">
						<a class="nav-link tc-vermelho" href="">Link3</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
```
### Apenas adicionando as classes `bg-amarelo` ao header e `tc-preto` a logo, o resultado se torna esse
![color-nav](https://user-images.githubusercontent.com/68961459/92758617-4ac6a400-f365-11ea-9f25-754be9a6deb2.png)

## Transições de cor (podendo mudar o momento da transição com classes)
![Transições de cor](https://media.giphy.com/media/JO91Yj3lH3dYe0v3da/giphy.gif)

## Transições de elementos
![Transições de texto](https://media.giphy.com/media/eNqBfatXxnSY8BwiML/giphy.gif)

## Dentre outras ferramentas
