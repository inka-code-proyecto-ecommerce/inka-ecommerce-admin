import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SlidersService } from '../service/sliders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-sliders',
  templateUrl: './edit-sliders.component.html',
  styleUrls: ['./edit-sliders.component.scss']
})
export class EditSlidersComponent {
  title: string = '';
  label: string = '';
  subtitle: string = '';
  link: string = '';
  color: string = '';
  state: number = 1;
  image_prev: any = '';
  file_image: any = null;
  isLoading: any;

  constructor(
    public sliderService: SlidersService,
    public toastr: ToastrService,
    public actibedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = this.sliderService.isLoading$;
  }

  processImage($event: any) {
    const file = $event.target.files[0];
    if (!file.type.startsWith('image/')) {
      this.toastr.error('Solamente se aceptan imágenes', 'Error de validación');
      return;
    }
    this.file_image = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.file_image);
    reader.onloadend = () => (this.image_prev = reader.result);
    this.sliderService.isLoadingSubject.next(true);
    setTimeout(() => {
      this.sliderService.isLoadingSubject.next(false);
    }, 50);
  }

  isLoadingView() {
    this.sliderService.isLoadingSubject.next(true);
    setTimeout(() => {
      this.sliderService.isLoadingSubject.next(false);
    }, 50);
  }

  save() {
    if (!this.title || !this.subtitle || !this.file_image) {
      this.toastr.error('Ingrese todos los datos correctamente', 'Validación');
      return;
    }

    let formData = new FormData();
    formData.append('title', this.title);
    if (this.label) {
      formData.append('icon', this.label);
    }
    formData.append('subtitle', this.subtitle + '');
    formData.append('image', this.file_image);
    if (this.link) {
      formData.append('link', this.link);
    }
    if (this.color) {
      formData.append('color', this.color);
    }

    this.sliderService.createSliders(formData).subscribe((res: any) => {
      console.log(res);

      this.title = '';
      this.label = '';
      this.subtitle = '';
      this.link = '';
      this.color = '';
      this.file_image = null;
      this.image_prev = '';
      this.toastr.success("Exito", "El Slider se registró correctamente");
    });
  }
}
