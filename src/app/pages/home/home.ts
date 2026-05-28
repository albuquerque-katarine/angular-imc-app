import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { ContentMain } from "../../components/content-main/content-main";
import { Footer } from "../../components/footer/footer";
import { ContentHome } from "../../components/content-home/content-home";

@Component({
  selector: 'app-home',
  imports: [Header, ContentMain, Footer, ContentHome],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
