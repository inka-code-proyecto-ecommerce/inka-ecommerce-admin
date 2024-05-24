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
  isLoading$: any;
  slider_id: string = '';

  constructor(
    public sliderService: SlidersService,
    public toastr: ToastrService,
    public activedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.isLoading$ = this.sliderService.isLoading$;
    this.activedRoute.params.subscribe((resp: any) => {
      this.slider_id = resp.id;
    });

    this.sliderService.showSlider(this.slider_id).subscribe((resp: any) => {
      console.log(resp);
      this.title = resp.slider.title;
      this.label = resp.slider.label;
      this.subtitle = resp.slider.subtitle;
      this.link = resp.slider.link;
      this.color = resp.slider.color;
      this.state = resp.slider.state;
      this.image_prev = resp.slider.image;
    });
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
    if (!this.title || !this.subtitle) {
      this.toastr.error('Ingrese todos los datos correctamente', 'Validación');
      return;
    }

    let formData = new FormData();
    formData.append('title', this.title);
    if (this.label) {
      formData.append('label', this.label);
    }
    formData.append('subtitle', this.subtitle + '');
    if (this.file_image) {
      formData.append('image', this.file_image);
    }
    if (this.link) {
      formData.append('link', this.link);
    }
    if (this.color) {
      formData.append('color', this.color);
    }

    this.sliderService.updateSliders(this.slider_id, formData).subscribe((resp: any) => {
      console.log(resp);
      this.toastr.success("Exito", "El Slider se editó correctamente");
    });
  }
}
