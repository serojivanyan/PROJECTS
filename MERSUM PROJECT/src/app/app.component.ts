import { Component,HostListener , OnInit} from '@angular/core';
//import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
  title = 'app';

@HostListener('window:scroll', ['$event']) onScrollEvent($event){

  var header = document.getElementById("sticky-wrap");
  var header1 = document.getElementById("sticky-wrap2");
  if (window.pageYOffset >= 20) {
    header.classList.add("stickyhead");
    header1.classList.add("stickyhead2");
    
  } else{
    header.classList.remove("stickyhead");
    header1.classList.remove("stickyhead2");
    
  }
  
}
openModal(modal){
modal.style.display="block"
}
//  private bodyText: string;

  // constructor(private modalService: ModalService) {
  //   }

  ngOnInit() {
       
    }

  // openModal(id: string){
  //       this.modalService.open(id);
  //   }

  // closeModal(id: string){
  //       this.modalService.close(id);
  //   }

}
