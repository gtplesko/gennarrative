import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, AfterViewInit {

  cardList: any[] = [];
  counter = 0;

  itemsInRow = 4;
  currentWidth = 1;
  targetItem;
  minCardWidth = 500;
  distToScroll = 2;
  itemInRowRange: any[] = [];
  @HostListener('scroll', ['$event'])
  onElementScroll($event) {
    console.log('event', $event)
  }
  constructor( private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cardsService.data.subscribe(d => {
      this.cardList = d;
      this.resizeCards();
    });
    this.createDummy();
    this.createDummy();
    this.createDummy();
  }
  ngAfterViewInit() {
    this.currentWidth = document.getElementById('container').offsetWidth;
    this.targetItem = document.getElementsByClassName('card-item')[0];
    this.targetItem = this.targetItem[this.targetItem.length-1];
  }
  createDummy() {

    let data: any = [{
      header: 'Sample #' + this.counter++,
      baseCopy: `Here in my garage, just bought this new Lamborghini here. It’s fun to drive up here in the Hollywood hills. But you know what I like more than materialistic things? Knowledge. In fact, I’m a lot more proud of these seven new bookshelves that I had to get installed to hold two thousand new books that I bought. It’s like the billionaire Warren Buffett says, “the more you learn, the more you earn.”`
      .split(' '),
      copy: '',
      cta: 'SEND IT!'
    }, {
      header: 'Sample #' + this.counter++,
      baseCopy: `Now maybe you’ve seen my TEDx talk where I talk about how I read a book a day. You know, I read a book a day not to show off it’s again about the knowledge. In fact, the real reason I keep this Lamborghini here is that it’s a reminder. A reminder that dreams are still possible, because it wasn’t that long ago that I was in a little town across the country sleeping on a couch in a mobile home with only forty seven dollars in my bank account. I didn’t have a college degree, I had no opportunities.`
      .split(' '),
      copy: '',
      cta: 'SEND IT!'
    },{
      header: 'Sample #' + this.counter++,
      baseCopy: `But you know what? Something happened that changed my life. I bumped into a mentor. And another mentor. And a few more mentors. I found five mentors. And they showed me what they did to become multimillionaires. Again, it’s not just about money, it’s about the good life; health, wealth, love and happiness. And so I record a little video, it’s actually on my website, you can click here on this video and it’ll take you to my website where I share three things that they taught me. Three things that you can implement today no matter where you are.`
      .split(' '),
      copy: '',
      cta: 'SEND IT!'
    },{
      header: 'Sample #' + this.counter++,
      baseCopy: `Now, this isn’t a “get rich quick” scheme. You know, like they say if things sound too good to be true they are too good to be true. I’m not promising you that tomorrow you’re gonna be able to go out and buy a Lamborghini. But what I am telling you is that it can happen faster than you think if you know the proven steps. So, I record a little two minute video on my website. Like I said, now it’s not the most professional I just shot it here with my iPhone, but it’s real. Nobody can argue, this is my true story. And I’m going to give you the three most important things you can do today. So click the link, go there it’s completely free to watch it it’s just a couple minutes. Invest in yourself. Always be curious. Don’t be a cynic. Okay, people see videos like this and they say “Ah that’s not real that’s for somebody else.”`
      .split(' '),
      copy: '',
      cta: 'SEND IT!'
    },{
      header: 'Sample #' + this.counter++,
      baseCopy: `Don’t listen, don’t listen. Be an optimist. Like, Conrad Hilton, the man who started Hilton Hotel, he said that he was only fifteen years old when he read a book by Helen Keller, and that book changed his life. Books can change your life. And in that book, Helen Keller said “optimism” so if you’re a cynic, if you’re a pessimist you don’t need to click here. Don’t worry about it, I don’t need to talk to everybody. But if you’re somebody who knows that there’s something better, cause the dream is possible, you know, for some of you watching it’s not necessarily a Lamborghini, maybe it’s a new job, a new opportunity, starting your own company.`
      .split(' '),
      copy: '',
      cta: 'SEND IT!'
    },{
      header: 'Sample #' + this.counter++,
      baseCopy: `Maybe it’s a new lifestyle without so much stress, traveling the world, doing those things you know you’re destined to do. You can do those unless you understand finances. Money, I don’t call it money anymore, I call it fuel units. You must have enough fuel units to live out your dream and to live out your destiny. So, I’ll see you on my website, it’s a quick video and you’ll see there absolutely free.`
      .split(' '),
      copy: '',
      cta: 'SEND IT!'
    },{
      header: 'Sample #' + this.counter++,
      baseCopy: `So just click this video and you’ll be taken there in a second, and uh, I’m excited to share this amazing stuff. You’ll see, not because of anything of me but because I’ve been fortunate enough to learn from mentors many years ahead of me. Not just in books like these, although I love books but also real in-person mentors. So let me share with you these three tips that have made all the difference in my life. They’re practical, you can do them today, you can start on them today. All right? See you there on my site.`
      .split(' '),
      copy: '',
      cta: 'SEND IT!'
    }]
    for( let d of data) {

      for (let i = d.baseCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = '' + d.baseCopy[i];
        d.baseCopy[i] = d.baseCopy[j];
        d.baseCopy[j] = temp;
        if (Math.random() > 0.95) {
          d.baseCopy.push(d.baseCopy[Math.floor(Math.random() * (d.baseCopy.length + 1))])
          if (Math.random() > 0.95 || this.counter%4 === 2) {
            d.baseCopy.push(d.baseCopy[Math.floor(Math.random() * (d.baseCopy.length + 1))])
            if (Math.random() > 0.95) {
              d.baseCopy.push(d.baseCopy[Math.floor(Math.random() * (d.baseCopy.length + 1))])
            }
          }
        }
      }
      d.copy = d.baseCopy.join(' ');
      delete d.baseCopy;
    }
    this.appendCards(data);

  }
  resizeCards() {
    this.currentWidth = document.getElementById('container').offsetWidth;
    this.itemsInRow = Math.ceil(this.currentWidth / this.minCardWidth);
    this.itemInRowRange = [];
    for( let i = 0; i < this.itemsInRow; i++) {
      this.itemInRowRange[i] = [];
    }
    for( let i = 0; i < this.cardList.length; i++) {
      this.itemInRowRange[i % this.itemsInRow].push(this.cardList[i])
    }
  }
  appendCards(data: [{header: string, copy: string, cta: string}]) {
    this.cardsService.setData(data);
    this.distToScroll *= 0.975;
    console.log(this.distToScroll);
  }
}
