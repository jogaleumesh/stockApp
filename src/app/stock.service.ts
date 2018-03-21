import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { QueueingSubject } from 'queueing-subject'
import { WebSocketService } from 'angular2-websocket-service'

@Injectable()
export class StockService {
  private url = 'ws://stocks.mnet.website';  
  public inputStream = new QueueingSubject<string>()
  public outputStream: Observable<any>


  constructor(private socketFactory: WebSocketService) { }

  connect() {
    if (this.outputStream)
      return this.outputStream

    return this.outputStream = this.socketFactory.connect(
      'ws://stocks.mnet.website',
      this.inputStream = new QueueingSubject<any>()
    )
  }
}
