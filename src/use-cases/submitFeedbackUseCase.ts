import {FeedbacksRepository} from "../repositories/feedbackRepository"
import { MailService } from "../services/Mail/mailService";


interface SubmitFeedbackUseCaseRequest{
  type: string;
  comment: string;
  screenshot?: string;
}


export class SubmitFeedbackUseCase {
  constructor(
  private feedbackRepository: FeedbacksRepository,  
  private mailService: MailService,
  ){}

  async execute(request: SubmitFeedbackUseCaseRequest){
    const {type, comment, screenshot} = request;
    
    await this.feedbackRepository.create({
      type, 
      comment, 
      screenshot,
    })

    await this.mailService.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do Feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`
      ].join('\n')
    })  
  }
}

//Um caso para poder ser usado para requisições de feedbacks