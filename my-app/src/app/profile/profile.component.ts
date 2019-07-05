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
      {index: 4, src: 'https://www.godupdates.com/wp-content/uploads/2015/07/mj-godupdates-15-pictures-to-make-you-happy-fb.jpg'},
      {index: 5, src: 'https://iso.500px.com/wp-content/uploads/2015/02/happyanimals_cover.jpeg'},
      {index: 6, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52743958_2275902886010837_7991404704296861696_n.jpg?_nc_cat=104&_nc_ht=scontent-dfw5-2.xx&oh=e86ea9717bbe3b2f5af84d1d98ba84ac&oe=5D25ECA6'},
      {index: 7, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52595927_2275902909344168_4691275984375119872_n.jpg?_nc_cat=108&_nc_ht=scontent-dfw5-2.xx&oh=b8e217f21b95c60a7cf94d83e2b4c422&oe=5D26E969'},
      {index: 8, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGtsNALoHlZkjyJO_1k8qX0xCjwxxUsdRNy0dC5kBxB9rt7wZGw'},
      {index: 9, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwWeEaMHxm4trtRvkKGzSplXvw8RCZ174Jhg36c_FJmCR8W1ZjA'},
      {index: 10, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Pjeqeb-Evf3jdwmiDoFqybIfKc8BHRfOgmq00ON4VK78eGW0'},
    ]
    this.gallery2 = [
      {index: 0, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu9gc0wIY2jWlRyLnEvKTm51_z8y8EO7Xutz9LyySWBixec3dgOQ'},
      {index: 1, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52491566_2275903499344109_6286383162587086848_n.jpg?_nc_cat=105&_nc_ht=scontent-dfw5-2.xx&oh=439a5ee054ef653e385888e265db87dc&oe=5D2456DA'},
      {index: 2, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3ovvKpywhLPERU8T-2eDjSMYOnT4OPPyGIkOhwxSAQiYBeZq'},
      {index: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7vaQv7eHF7-CKgVfngJiHVaLQJklGR3gBWo3mDptU6gAnu2U8w'},
      {index: 4, src: 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/52348508_2275903356010790_5896475289742999552_n.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-2.xx&oh=4c86a4da5f0684e7a7af49831be90bae&oe=5D291A0A'},
      {index: 5, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgk_VZLH_Vsz5Qo6yh_-pRUojM1bYzT8RQeTVmYIvTMR7uYmCK'},
      {index: 6, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkCec0yYpDD2wtX_gX-CvSj2ilS1dgVjfqdjl4zplHsw4lvf1'},
      {index: 7, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEth0gC4Qmv7XU0eOCbJ4L2oM-YREANR6R9yrqa7lxMrDhfN_rA'},
      {index: 8, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIj35UTeJYGtXm30ZD_Zq5ZgRIBEV758fprrtW2r8gn0-r5-DlnA'},
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
