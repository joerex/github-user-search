import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core'
import {FormControl} from '@angular/forms'
import {debounce} from 'rxjs/operators'
import {timer} from 'rxjs'

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, AfterViewInit {
  @Output() onChange: EventEmitter<string> = new EventEmitter()
  @ViewChild('searchEl') searchEl: ElementRef
  search: FormControl = new FormControl('')

  constructor() { }

  ngAfterViewInit(): void {
    this.searchEl.nativeElement.focus()
  }

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounce(() => timer(300)))
      .subscribe((value: string) => this.onChange.emit(value))
  }

}
