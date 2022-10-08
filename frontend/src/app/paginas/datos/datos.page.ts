import { Component, OnInit, NgZone  } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { FilmService } from '../../services/film.service';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  
  filmForm: FormGroup;
  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private filmService: FilmService    
  ) {
    this.filmForm = this.formBuilder.group({
      titulo: [''],
      duracion: ['']
          })
  }

  ngOnInit() {
  }
  onSubmit() {
    if (!this.filmForm.valid) {
      return false;
    } else {
      this.filmService.createUser(this.filmForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.filmForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }

}
