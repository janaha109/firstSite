import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
gallery1: any;
gallery2: any;
gallery1CI = 0;
gallery2CI = 0;

  constructor() { }

  ngOnInit() {
    this.gallery1 = [
      {index: 0, src: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/56208369_2302182473382878_7861365635878486016_n.jpg?_nc_cat=111&_nc_ht=scontent-dfw5-1.xx&oh=0fa99ed3612797ac8a9821e67369d9a1&oe=5D3ED08F'},
      {index: 1, src: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/56472471_2302182423382883_5633114406322700288_n.jpg?_nc_cat=110&_nc_ht=scontent-dfw5-1.xx&oh=c880cf4a47430e3b3420f3e7dbded06a&oe=5D3C262A'},
      {index: 2, src: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/55943889_2302182193382906_7535403890427035648_n.jpg?_nc_cat=107&_nc_ht=scontent-dfw5-1.xx&oh=a2cc68e6c6ba9b6e230942216206a1a5&oe=5D35CB1B'},
      {index: 3, src: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/56656117_2302182186716240_1239919477391360000_n.jpg?_nc_cat=101&_nc_ht=scontent-dfw5-1.xx&oh=1d37bfda3665b22f10a6ba7d9fa2e9b9&oe=5D4EEA0A'},
      {index: 4, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52522634_2275902656010860_1992630788281073664_n.jpg?_nc_cat=110&_nc_ht=scontent-dfw5-2.xx&oh=5db7538cc1385d405288d5a7e2e42913&oe=5CE27BF6', txt: 'LBT Barbacking Days (2016)'},
      {index: 5, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/51879044_2275902729344186_1707330906970128384_n.jpg?_nc_cat=108&_nc_ht=scontent-dfw5-2.xx&oh=9a6e852de731527f6482a0391775ac64&oe=5CE6610A', txt: 'Bea and I LBT Work Party (2016)'},
      {index: 6, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52743958_2275902886010837_7991404704296861696_n.jpg?_nc_cat=104&_nc_ht=scontent-dfw5-2.xx&oh=e86ea9717bbe3b2f5af84d1d98ba84ac&oe=5D25ECA6', txt: 'Euless, Texas (2016'},
      {index: 7, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52595927_2275902909344168_4691275984375119872_n.jpg?_nc_cat=108&_nc_ht=scontent-dfw5-2.xx&oh=b8e217f21b95c60a7cf94d83e2b4c422&oe=5D26E969', txt: 'Unknown Location (2016)'},
      {index: 8, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52331964_2275903016010824_1450727183927476224_n.jpg?_nc_cat=105&_nc_ht=scontent-dfw5-2.xx&oh=ab6b802f17accedb65085fcbbd151f5f&oe=5CEA8452', txt: 'Chill Times (2015)'},
      {index: 9, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52453408_2275903182677474_7093181134074281984_n.jpg?_nc_cat=108&_nc_ht=scontent-dfw5-2.xx&oh=9b24865b801508b06a1b1b8b14bbdc36&oe=5CE9BEEA', txt: 'Cookie Hangout (2015)'},
      {index: 10, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52649409_2275903252677467_7100436600852578304_n.jpg?_nc_cat=110&_nc_ht=scontent-dfw5-2.xx&oh=f46db8315f8a9f1fc606718a36075ad5&oe=5CED3730', txt: 'Cookie Hangout (2015)'},
    ]
    this.gallery2 = [
      {index: 0, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52460345_2275903319344127_1691494409067036672_n.jpg?_nc_cat=111&_nc_ht=scontent-dfw5-2.xx&oh=16c2c0a1e75c8636770309b544c96298&oe=5D250977', txt: 'Alex Selfie Euless, Texas (2016)'},
      {index: 1, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52491566_2275903499344109_6286383162587086848_n.jpg?_nc_cat=105&_nc_ht=scontent-dfw5-2.xx&oh=439a5ee054ef653e385888e265db87dc&oe=5D2456DA', txt: 'Drunk LBT Christmas Party (2015/2016?)'},
      {index: 2, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52991412_2275903389344120_5025673148675129344_n.jpg?_nc_cat=111&_nc_ht=scontent-dfw5-2.xx&oh=d8ed06368e89fe98e34bd34ac6036a58&oe=5CE39C6E', txt: 'SAMPLE'},
      {index: 3, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52569251_2275903469344112_636375833845432320_n.jpg?_nc_cat=106&_nc_ht=scontent-dfw5-2.xx&oh=f36f3da55652bb98802b59700ce03a1e&oe=5CF5878D', txt: 'SAMPLE'},
      {index: 4, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52348508_2275903356010790_5896475289742999552_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-2.xx&oh=4c86a4da5f0684e7a7af49831be90bae&oe=5D291A0A', txt: 'SAMPLE'},
      {index: 5, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52605211_2275903572677435_8355699496721580032_n.jpg?_nc_cat=100&_nc_ht=scontent-dfw5-2.xx&oh=bde0484a0cffba6cec7f16845ddfeb7e&oe=5CF25428', txt: 'SAMPLE'},
      {index: 6, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52351634_2275903602677432_1771977925780832256_n.jpg?_nc_cat=103&_nc_ht=scontent-dfw5-2.xx&oh=1ff0701f8b1e0cddf3579b9e3f221ce1&oe=5CDE5AA6', txt: 'SAMPLE'},
      {index: 7, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/45182255_2205928636341596_8098977997085736960_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-2.xx&oh=23267362b35cc551767e7fec9e189ed7&oe=5CDDE0D3', txt: 'SAMPLE'},
      {index: 8, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/25446313_1999963103604818_8661420965541947950_n.jpg?_nc_cat=110&_nc_ht=scontent-dfw5-2.xx&oh=f306321703156332568a5d52f720dde8&oe=5CF74BB3', txt: 'SAMPLE'},
    ]
  }

  galleryView(galleryNum, slideNum) {
    if (galleryNum === 1) {
      if (slideNum === this.gallery1CI) {
        return false;
      } else {
        return true;
      }
    } else {
      if (slideNum === this.gallery2CI) {
        return false;
      } else {
        return true;
      }
    }
  }

  left(galleryNum) {
    if (galleryNum === 1) {
      this.gallery1CI -= 1;
      if (this.gallery1CI < 0) {
        this.gallery1CI = this.gallery1.length-1;
      }
    } else {
      this.gallery2CI -= 1;
      if (this.gallery2CI < 0) {
        this.gallery2CI = this.gallery2.length-1;
      }
    }
  }

  right(galleryNum) {
    if (galleryNum === 1) {
      this.gallery1CI += 1;
      if (this.gallery1CI > this.gallery1.length-1) {
        this.gallery1CI = 0;
      }
    } else {
      this.gallery2CI += 1;
      if (this.gallery2CI > this.gallery2.length-1) {
        this.gallery2CI = 0;
      }
    }
  }

}
