import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

getBSM(): string {
  return 'As BSM (Behavioural Skills and Mindset) da Generation Brasil são:<br> <br>MENTALIDADES: <br>Responsabilidade Pessoal <br>Mentalidade de Crescimento <br>Orientação ao Futuro <br>e Persistência<br> <br>HABILIDADES COMPORTAMENTAIS: <br>Comunicação <br>Trabalho em Equipe <br>Atenção aos Detalhes <br>e Proatividade<br> <br>HABILIDADES TÉCNICAS E OUTRAS: <br>Profissionalismo <br>e Precisão Técnica'
}

getObjdeAprendizagem(): string {
  return 'Meus objetivos de aprendizagem para essa semana são: \nEntender a base de NestJs apenas e já estou com um bom progresso :) ';
}
}