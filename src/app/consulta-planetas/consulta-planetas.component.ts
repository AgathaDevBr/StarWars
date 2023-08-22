import { Component } from '@angular/core';
import { ImagemUrl } from '../../models/imagens_Url';

@Component({
  selector: 'app-consulta-planetas',
  templateUrl: './consulta-planetas.component.html',
  styleUrls: ['./consulta-planetas.component.css']
})
export class ConsultaPlanetasComponent {
  
  retornaUrlImagem(nome: string) : string {
      let index = ImagemUrl.findIndex(imagem => imagem.nome === nome);
      if(ImagemUrl[index].nome != '' || ImagemUrl[index].nome != null){
        return ImagemUrl[index].url;
      }
      else{
        return '';
      }
  }

}
