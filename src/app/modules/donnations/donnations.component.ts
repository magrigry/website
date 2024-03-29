import {Component, Inject, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl, Title} from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-donnations',
  templateUrl: './donnations.component.html',
  styleUrls: ['./donnations.component.css']
})
export class DonnationsComponent implements OnInit {

  constructor(private titleService: Title, private sanitizer: DomSanitizer, @Inject(DOCUMENT) private document: Document) {
    // this.titleService.setTitle('Over2Craft - Faire un don');
    // this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://financement.over2craft.com/'
    //   + encodeURI(window.location.hash.substr(1))
    // );
  }

  public url;

  public static  openInNewTab(): void {
    window.open('http://financement.over2craft.com', '_blank');
  }

  ngOnInit(): void {
    this.document.location.href = 'http://financement.over2craft.com';
  }

}
