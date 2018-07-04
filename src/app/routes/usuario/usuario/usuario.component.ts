import { UsuarioService } from './../../../services/usuario/usuario.service';
import { Usuario } from './../../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  id : any;

  constructor(
    public userService: UsuarioService, 
    public routeActivate: ActivatedRoute,
    public router: Router
  ) {
    this.routeActivate.params.subscribe( param => {
      this.id = param['id'];
      this.usuario = new Usuario(null,null,null,null,null,null,null,null,true,this.id);
      if(this.id !== 'nuevo'){
        this.userService.obtenerUsuario(this.id).subscribe((usuario:any) => {
          this.usuario = usuario;
        } );
      }
    })
    
   }

  ngOnInit() {
  }
  addUser(form?: NgForm) {
    if(form.value._id ==="nuevo") {
      this.userService.crearUsuario(form.value)
        .subscribe(res => {
          this.resetForm(form);
          //this.getUsers();
          this.router.navigate(['config/list']);
        });
    } else {
      this.userService.actualizarUsuario(form.value)
      .subscribe(res => {
        //this.getUsers();
        this.resetForm(form);
        this.router.navigate(['config/list']);
      });
    }
    
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      //this.getUsers();
    }
  }
}
