let requestURL =  "https://www.luizpicolo.com.br/api.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.respanseType = "json";
request.send()

request.onload = function(){
  let resposta = request.response;
console.log(resposta)
}
function mostrarNoticia(){
  let noticia = JSON.parse("")
  console.log(noticia[0])
}
class Noticia{
  constructor (título, data_publicacao, resumo, texto){
    this.titulo = título;
    this.data_publicacao = data_publicacao;
    this.resumo = resumo;
    this.texto = texto;
  }
  mostrarNoticias(){
    return this.titulo + "" + this.data_publicacao  + "" + this.resumo + "" + this.texto;
  }
}
class NoticiaDestaque extends Noticia{
  constructor(imagem, titulo, data_publicacao, resumo, texto){
    super(titulo, data_publicacao, resumo, texto )
    this.imagem = imagem;
  }
  mostrarDestaque(){
    return this.imagem + "" + this.titulo + "" + this.data_publicacao  + "" + this.resumo + "" + this.texto;
  }
}
let noticiadestaque = new NoticiaDestaque()
console.log(noticiadestaque.mostrarDestaques()